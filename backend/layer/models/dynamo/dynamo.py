import secrets
from enum import Enum
from datetime import datetime, timedelta
from typing import Optional, Dict, Union

import jwt
from pydantic import BaseModel, ConfigDict

class UserRole(Enum):
    NotVerifiedUser = "NotVerifiedUser"
    VerifiedUser = "VerifiedUser"
    Admin = "Admin"

class UserData(BaseModel):
    lang: str
    role: UserRole = UserRole.NotVerifiedUser
    model_config = ConfigDict(arbitrary_types_allowed=True)

    def to_dict(self) -> Dict[str, str]:
        return {
            "lang": self.lang,
            "role": self.role.value if self.role else None
        }

    @classmethod
    def from_dict(cls, data: dict) -> 'UserData':
        deserialized_data = {
            "lang": data.get("lang"),
            "role": UserRole(data.get("role"))
        }
        return cls(**deserialized_data)

# Parameters
JWT_DEVELOPER_KEY = 'KEY_KEY'
ROOT_TOKEN_DURATION_DAYS = 356*500 # Durata accounts 500 years
MASTER_TOKEN_DURATION_DAYS = 1 # Durata token short-term
OTHER_TOKENS_DURATION_DAYS = 1 # Durata token short-term

    
class MasterTokenPayload(BaseModel):
    master_jwt: str
    nonce: str
    exp_ts: int
    gen_ts: int
    token_type: str


class PairActionTokenPayload(BaseModel): 
    # It's used whenever an action happens involving 2 users (i.e invitation)
    master_jwt: str
    nonce: str
    exp_ts: int
    gen_ts: int
    token_type: str # to partition pair actions by token_type
    other_user_root_jwt: Optional[str] # to mantain the root_jwt

class User(BaseModel):

    class TokenTypeEnum(str, Enum):
        root_token = "root_token"
        master_token = "master_token"
        invite_token = "invite_token"


    # Attributes
    root_token: str
    master_token: str
    user_data: Optional[UserData] = UserData(lang="en")
        
    def to_dict(self) -> Dict[str, str]:
        return {
            "root_token": self.root_token,
            "master_token": self.master_token,
            "user_data": self.user_data.to_dict()
        }
    
    @classmethod
    def from_dict(cls, data: dict) -> 'User':
        user_data = data.get("user_data", {})

        # Pick only the desired fields for deserialization
        deserialized_data = {
            "root_token": data.get("root_token"),
            "master_token": data.get("master_token"),
            "user_data": UserData.from_dict(user_data) if user_data else None,
        }

        return cls(**deserialized_data)
    
    @staticmethod
    def generate_jwt(token_type : TokenTypeEnum, root_token: str = None):
        expiration_time = None
        payload = None
        
        if((token_type==User.TokenTypeEnum.root_token) or (token_type==User.TokenTypeEnum.master_token or token_type==User.TokenTypeEnum.invite_token and payload)):
            match token_type:
                case User.TokenTypeEnum.root_token: #It can be generated only by devs
                    expiration_time = datetime.utcnow() + timedelta(days=ROOT_TOKEN_DURATION_DAYS)
                    payload = PairActionTokenPayload(
                        master_jwt=secrets.token_urlsafe(32), 
                        nonce=secrets.token_urlsafe(32),
                        exp_ts=int(expiration_time.timestamp()),
                        gen_ts=int(datetime.utcnow().timestamp()),
                        token_type=token_type.value,
                        other_user_root_jwt="SYSTEM"
                    )

                case User.TokenTypeEnum.master_token:
                    expiration_time = datetime.utcnow() + timedelta(days=MASTER_TOKEN_DURATION_DAYS)
                    payload = MasterTokenPayload(
                        master_jwt=root_token,
                        nonce=secrets.token_urlsafe(32),
                        exp_ts=int(expiration_time.timestamp()),
                        gen_ts=int(datetime.utcnow().timestamp()),
                        token_type=token_type.value
                    )
                
                case User.TokenTypeEnum.invite_token:
                    expiration_time = datetime.utcnow() + timedelta(days=OTHER_TOKENS_DURATION_DAYS)
                    payload = PairActionTokenPayload(
                        master_jwt=root_token,  # Adjust this field as needed for other token types
                        nonce=secrets.token_urlsafe(32),
                        exp_ts=int(expiration_time.timestamp()),
                        gen_ts=int(datetime.utcnow().timestamp()),
                        token_type=token_type.value,
                        other_user_root_jwt=root_token
                    )

            new_token = jwt.encode(payload.model_dump(),key=JWT_DEVELOPER_KEY, algorithm='HS256')

        else:
            raise ValueError("Bad Request")

        return new_token, expiration_time.timestamp()
    
    @staticmethod
    def decode_and_check_jwt(token): # Returns tuple < is_valid, payload, is_expired > 
        try:
            decoded_payload = jwt.decode(jwt=token, key= JWT_DEVELOPER_KEY, algorithms=['HS256'])
            expiration_time = decoded_payload.get('exp_ts')

            if expiration_time:
                current_time = datetime.utcnow()
                expiration_datetime = datetime.utcfromtimestamp(expiration_time)

                expired = current_time > expiration_datetime
                return (not expired, decoded_payload, expired)
            return True, decoded_payload, False
        except jwt.ExpiredSignatureError:
            return False, None, True
        except jwt.InvalidTokenError:
            return False, None, False

