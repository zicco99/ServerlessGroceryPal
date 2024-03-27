import os
from decimal import Decimal

from aws_lib.dynamodb_utils import DynamoDBUtils
from aws_lib.lambda_utils import LambdaResponse, LambdaResponseCode
from aws_lib.logger import logger

from backend.layer.models.dynamo.dynamo import User

USERS_TABLE_NAME = os.environ["USERS_TABLE_NAME"]
USERS_TABLE_MASTER_TOKEN_INDEX = os.environ["USERS_TABLE_MASTER_TOKEN_INDEX"]

dynamo = DynamoDBUtils()

class UsersController():
    def __init__(self):
        pass
    
    def add(self, user: User):
        print(user.to_dict())
        dynamo.write_to(USERS_TABLE_NAME, user.to_dict())
        return LambdaResponse(status_code=LambdaResponseCode.OK, result={"statusText": "User created"})
    
    def get(self, root_jwt: str) -> User:
        user: dict = dynamo.read_from_where(table=USERS_TABLE_NAME, key='root_token', key_value=root_jwt)
        if user:
            for key, value in user.items():
                if isinstance(value, Decimal):
                    user[key] = int(value) if value % 1 == 0 else float(value)
            logger.info(f"Deserialized data from dynamoDB {user}")
            user = User.from_dict(user)
            return user
        
        else:
            return None
    
    def get_by_master_token(self, master_token: str) -> User:
        user: dict = dynamo.read_from_where(table=USERS_TABLE_NAME, key='master_token', key_value=master_token, index_name=USERS_TABLE_MASTER_TOKEN_INDEX)
        if user:
            for key, value in user.items():
                if isinstance(value, Decimal):
                    user[key] = int(value) if value % 1 == 0 else float(value)
            logger.info(f"Deserialized data from dynamoDB {user}")
            user = User.from_dict(user)
            return user
        else:
            return None
        
    def member(self, root_jwt: str) -> bool:
        return self.get(root_jwt) is not None 
    
    def remove(self, partition_key: str) -> bool:
        return dynamo.delete_to(USERS_TABLE_NAME, 'master_token', partition_key)
    
    # -------------------------------------------------------------------------------------------
    
    def refresh_master_tok(self, root_token: str, old_master: str, new_master: str) -> LambdaResponse:
        try:
            dynamo.update_to(USERS_TABLE_NAME, "root_token", root_token, "master_token", new_master)
            return LambdaResponse(status_code=LambdaResponseCode.OK, result={"statusText": f'Token Refreshed'})
        except Exception as e:
            logger.error(f"Error refreshing token: {e}")
            return LambdaResponse(status_code=LambdaResponseCode.INTERNAL_SERVER_ERROR, result={"statusText": f'Fail token update'})

    