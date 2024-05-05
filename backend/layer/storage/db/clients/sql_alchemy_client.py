from sqlalchemy import create_engine, text

from . import BaseClient
from ..sources.database import Database
from ..enums import Engine


class SqlAlchemyClient(BaseClient):
    """
    A class representing a SQL Alchemy client.
    """

    @property
    def engine_type(self) -> Engine:
        """
        Returns the engine type.

        :return: The engine type.
        :rtype: Engine
        """
        return Engine.SQLAlchemy

    def __init__(self, database: Database):
        """
        Initializes the SQL Alchemy Client.

        :param database: Database instance, a model encapsulating database connection details.
        :param engine: The engine type. (e.g., Engine.ConnectorX or SQLAlchemy.SQLAlchemy)

        :type database: Database
        :type engine: Engine
        """

        super().__init__(database)

        self._engine = create_engine(database.connection_string)
        self._connection = None

    def connect(self):
        """
        Connects to the database.
        """
        if self._connection is None:
            print("Connecting to the database...")
            self._connection = self._engine.connect()


    def execute(self, close_connection: bool = True) -> list[tuple]:
        """
        Executes a SQL query and returns the result.

        :param close_connection: Whether to close the connection after the query is executed. Defaults to False.
        :type close_connection: bool

        :return: Query result as a list of tuples.
        :rtype: list[tuple]

        :raises ValueError: If no query is provided.
        """
        if not self._query:
            raise ValueError("No query provided.")

        self.connect()

        try:
            result = self._connection.execute(text(self._query)).fetchall()
            return result
        finally:
            if close_connection:
                self.disconnect()

    def disconnect(self):
        """
        Closes the connection if exists and it's open.
        """
        if self._connection:
            print("Closing connection...")
            self._connection.close()
            self._connection = None
