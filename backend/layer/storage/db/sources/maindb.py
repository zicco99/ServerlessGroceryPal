import os
from urllib.parse import quote_plus
from .database import Database
from aws.secretsmanager import SecretsManager
from enum import Enum


sm : SecretsManager = SecretsManager() 

class MainDB(Database):
    class Stage(Enum):
        """
        Enumeration of different MainDB stages.
        """

        DEV = "dev"
        STAGING = "staging"
        PROD = "prod"

    """
    A pre-built configuration Database class to connect to the MainDB.
    Requires the AWS SSM module to be installed and IAM permissions to access the MainDB parameters.
    """

    def __init__(self, stage: Stage):
        """
        Initializes the MainDB configuration for the given stage provided.
        :param stage: The stage of the MainDB to connect to.

        :type stage: Stage

        """
        try:
            #TODO fix stage over dbs, this moment is taskes only the maindb
            secret = sm.get_secret(
                os.environ["DB_SECRET_ARN"]
            )

            self.username = secret["username"]
            self.password = secret["password"]
            self.hostname = secret["host"]
            self.port = 5432
            self.database = secret["database"]
            self.dialect = "postgresql"
        except Exception as e:
            print("aws sub-module not available")
            raise e
        
    def connection_string(self):
        """
        Generates the connection string for the database.

        :return: The connection string.
        :rtype: str
        """
        encoded_password = quote_plus(self.password)
        return f"{self.dialect}://{self.username}:{encoded_password}@{self.hostname}:{self.port}/{self.database}"
