import secrets
from pydantic import ValidationError
from controllers.dynamo_controllers import UsersController
from lib.logger import logger
from lib.lambda_utils import LambdaAbstractRequest, LambdaResponse, LambdaResponseCode
from models.dynamo import User

users = UsersController()

class HiHandler(LambdaAbstractRequest):
    def __init__(self, app) -> None:
        super().__init__(app)

    def main(self):
        logger.info("YO")


    def execute(self):
        return self.main()
        