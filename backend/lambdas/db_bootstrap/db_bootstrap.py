from sqlalchemy import  inspect
from sqlalchemy.orm import sessionmaker
from sqlalchemy import MetaData
import time
from aws_lib.logger import logger

from aws_lib.lambda_utils import LambdaResponse, LambdaResponseCode

# Each mapper should use the same Base instance. This is usually done by importing the 
# Base instance from a separate module or file, so that all the mappers use the same instance of Base.

from backend_db.connection import BackendDBClient
from backend_db.models.mappers import *
logger.info("Mappers loaded")
from backend_db.models.schemas import *
logger.info("Schemas loaded")

from backend_db.models import *

def recreate_db(engine):

    print("Deleting old database....")
    

    # Drop all tables
    custom_base.metadata.drop_all(bind=engine)

    # Recreate all tables
    custom_base.metadata.create_all(bind=engine)

    required_tables = ['ingredient', 'product', 'user', 'feedback', 'recipe',
                        'step', 'user_fridge', 'fridge', 'fridge_product', 'recipe_ingredient']

    while True:
        inspector = inspect(engine)
        existing_tables = inspector.get_table_names()
        if all(table in existing_tables for table in required_tables):
            break
        # Wait for 1 second before checking again
        time.sleep(1)

    print("Done,starting fetching....")

def handler(event, context):
    try:
        backend_db_engine = BackendDBClient().get_client()
        Session = sessionmaker(bind=backend_db_engine)
        session = Session()
        session.commit()
        metadata = MetaData()
        metadata.reflect(bind=backend_db_engine)

        # Running options
        if (True): 
            print("Recreating db")
            recreate_db(backend_db_engine)

        session.commit()
        session.close()

        return LambdaResponse(
            status_code=LambdaResponseCode.OK,
            result={"message": "Database created"}
        ).to_body_status()
    
    # HERE I CAN PUT HEALTHCHECK, BACKUP ETC
    
    except Exception as e:
        return LambdaResponse(
            status_code=LambdaResponseCode.INTERNAL_SERVER_ERROR,
            result={"error": str(e)}
        ).to_body_status()