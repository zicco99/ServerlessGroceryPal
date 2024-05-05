import hashlib

from .sources import Database
from .sources.maindb import MainDB
from .enums import Engine
from .clients import SqlAlchemyClient


class ClientFactory:
    """
    A factory class for creating database clients for the given database and engine.
    """

    _clients = {}

    @classmethod
    def _generate_client_singleton_key(cls, database: Database, engine: Engine):
        """
        Generate a unique key for the client based on the database and engine that will be used as a singleton key.

        :param database: A Database configuration class object (e.g., Datalake)
        :param engine: The database Engine that will be used to interact with the database (e.g., ConnectorX or SQLAlchemy)

        :type database: Database
        :type engine: Engine

        :return: A unique key for the client based on the database and engine.
        :rtype: str
        """
        db_engine_str = f"{database.connection_string}_{engine}"
        return hashlib.sha256(db_engine_str.encode()).hexdigest()

    @classmethod
    def create_db_client(
        cls, database: Database, engine: Engine, singleton: bool = False
    ):
        """
        Creates a database client based on the database and engine.

        :param database: A Database configuration class object (e.g., Datalake)
        :param engine: The database Engine that will be used to interact with the database (e.g., ConnectorX or SQLAlchemy)
        :param singleton: If True, the database connection engine will persist as a singleton object. Defaults to False.

        :type database: Database
        :type engine: Engine
        :type singleton: bool

        :return: ConnectorXClient or SqlAlchemyClient depending on engine
        :rtype: ConnectorXClient or SqlAlchemyClient
        """
        if database is None or engine is None:
            raise ValueError("Database and engine must be specified")

        if singleton:
            client_key = cls._generate_client_singleton_key(database, engine)
            if client_key not in ClientFactory._clients:
                if engine == Engine.SQLAlchemy:
                    ClientFactory._clients[client_key] = SqlAlchemyClient(
                        database=database
                    )
            return ClientFactory._clients[client_key]
        else:
            if engine == Engine.SQLAlchemy:
                return SqlAlchemyClient(database=database)

    @classmethod
    def create_datalake_client(
        cls,
        stage: MainDB.Stage,
        engine: Engine,
        singleton: bool = False,
    ):
        """
        Creates a datalake client based on the stage and engine.

        :param stage: A Datalake stage configuration class object (e.g., Datalake.Stage.Dev)
        :param engine: The database Engine that will be used to interact with the database (e.g., ConnectorX or SQLAlchemy)
        :param singleton: If True, the database connection engine will persist as a singleton object. Defaults to False.

        :type stage: Datalake.Stage
        :type engine: Engine
        :type singleton: bool

        :return: ConnectorXClient or SqlAlchemyClient depending on engine
        :rtype: ConnectorXClient or SqlAlchemyClient
        """
        datalake_db = MainDB(stage)
        return cls.create_db_client(datalake_db, engine, singleton)