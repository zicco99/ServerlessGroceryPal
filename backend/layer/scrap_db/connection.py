import json
import os 
import boto3

from sqlalchemy import Engine
from sqlalchemy import create_engine
import urllib.parse

from aws_lib.logger import logger
from aws_lib.errors import DatabaseConnectionError

class BackendDBClient():
    Session = None

    @classmethod
    def _create_connection(cls) -> Engine:

        try:
            client = boto3.client('secretsmanager')

            # Retrieve db data
            db_secret = json.loads(client.get_secret_value(SecretId=os.environ.get("SCRAP_DB_CREDS_SECRET_ARN"))["SecretString"])

            connection_string = f"postgresql://{db_secret['username']}:{urllib.parse.quote_plus(db_secret['password'])}@{os.environ['SCRAP_DB_PROXY_ENDPOINT']}:{db_secret['port']}/{db_secret['dbname']}"
            
            #options = {'options': f"-csearch_path={schema_name}"} if schema_name else {}
            print(f"Connection string ready: {connection_string}")

            engine = create_engine(connection_string,
                                    echo=False,
                                    pool_size=1,
                                    max_overflow=0,
                                    pool_recycle=3600,
                                    pool_pre_ping=True,
                                    pool_use_lifo=True).connect()

            return engine

        except Exception:
            raise DatabaseConnectionError(cls)

  
    @classmethod
    def get_client(cls) -> Engine:
        try:
            if cls.Session is None:
                cls.Session = cls._create_connection()
            return cls.Session
        except DatabaseConnectionError as e:
            logger.error(e)
            raise e