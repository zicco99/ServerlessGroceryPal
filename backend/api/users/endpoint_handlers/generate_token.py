from pydantic import ValidationError
from lib.logger import logger
from lib.lambda_utils import LambdaAbstractRequest, LambdaResponse, LambdaResponseCode
from models import dynamo
from models.dynamo import User
from models.events import GenerateTokenPayload

from controllers.dynamo_controllers import UsersController

users = UsersController()

class GenerateTokenHandler(LambdaAbstractRequest):
    def __init__(self, app) -> None:
        super().__init__(app)

    def main(self, payload : GenerateTokenPayload, headers: dict):

        # Header validator ensures that only one of the 2 is in header at once
        dev_key = headers.get("dev_key", None)

        if not dev_key:
            root_token = headers.get("root_token", None)

        match payload.token_type:
            ## Generate users
            case User.TokenTypeEnum.root_token.value: # Resulting 
                if dev_key:
                    if(dev_key==dynamo.JWT_DEVELOPER_KEY):
                        new_token, expiration_time = User.generate_jwt(token_type=User.TokenTypeEnum.root_token)
                        users.add(User(root_token=new_token,master_token="null"))
                        return LambdaResponse(LambdaResponseCode.OK, result={
                            'root_token': new_token,
                            'exp_ts': int(expiration_time) 
                        })
            
            case User.TokenTypeEnum.invite_token.value:
                if root_token:
                    is_root_valid, root_payload, _ = User.decode_and_check_jwt(root_token)
                    user = users.get(root_token)
                    new_master, exp_ts = User.generate_jwt(token_type=User.TokenTypeEnum.invite_token,root_token=root_token)
                    if is_root_valid:
                        return LambdaResponse(LambdaResponseCode.OK, result={
                            'master_token': new_master,
                            'exp_ts': exp_ts
                        })
                    else:
                        return LambdaResponse(LambdaResponseCode.BAD_REQUEST, result={"statusText":"Root token is not valid"})
            
            ## Allow user to generate a short-live key that will use to access to APIs
            case User.TokenTypeEnum.master_token.value:
                if root_token:
                    is_root_valid, root_payload, _ = User.decode_and_check_jwt(root_token)
                    user = users.get(root_token)
                    if not user:
                        return LambdaResponse(LambdaResponseCode.NOT_FOUND, result={"statusText":"User does not exists"})

                    if is_root_valid:
                        new_master, exp_ts = User.generate_jwt(token_type=User.TokenTypeEnum.master_token,root_token=root_token)
                        user = users.get(root_token)

                        first_gen = False # It could be useful to recognize user first login in backend-side (first gen)
                        if(user.master_token=="null"):
                            first_gen=True

                        result = users.refresh_master_tok(root_token,user.master_token,new_master)
                        if result.has_error():
                            return result
                        
                        # Return new master token and duration
                        return LambdaResponse(LambdaResponseCode.OK, result={
                            'master_token': new_master,
                            'exp_ts': exp_ts
                        })
                    else:
                        return LambdaResponse(LambdaResponseCode.BAD_REQUEST,result={"statusText":"Root token is not valid"})
            
            case _:
                return LambdaResponse(LambdaResponseCode.BAD_REQUEST, result={"statusText":"Token type is not valid"})
            

    def execute(self):
        try:
            #Extract payload
            pairs = self.app.current_event.body.split('&')
            payload = {}
            for pair in pairs:
                key, value = pair.split('=')
                payload[key] = value
            
            payload: GenerateTokenPayload = self.validate(payload, GenerateTokenPayload)
            return self.main(payload, self.app.current_event.headers).to_powertools()

        except ValidationError as e:
            logger.error(f"Validation error: {e}")
            return LambdaResponse(LambdaResponseCode.UNAUTHORIZED, result={"statusText":"You lack valid tokens"}).to_powertools()
        
        except KeyError as e:
            logger.error(f"Keyerror: {e}")
            return LambdaResponse(LambdaResponseCode.UNAUTHORIZED, result={"statusText":"You lack valid tokens"}).to_powertools()


