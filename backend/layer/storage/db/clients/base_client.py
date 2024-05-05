from abc import ABC, abstractmethod
from ..sources import Database
from ..enums import Engine

class BaseClient(ABC):
    def __init__(self, database: Database) -> None:
        """
        Initializes the BaseClient class.
        :param database: Database instance, a model encapsulating database connection details.
        :type database: Database
        """
        self.database = database
        self._engine = None
        self._query = None

    def __del__(self):
        """
        Destructor method. Disconnects the client when the object is deleted.
        """
        self.disconnect()

    @property
    @abstractmethod
    def engine_type(self) -> Engine:
        """
        Returns the engine type.

        :return: The engine type.
        :rtype: Engine
        """
        pass
    
    @abstractmethod
    def execute(self, **kwargs) -> any:
        """
        Executes a SQL statement and returns the result.
        :param kwargs: Keyword arguments to pass to the execute method, each engine will implement its own.

        :return: The result of the query.
        :rtype: any
        """
        pass
    
    @abstractmethod
    def connect(self):
        """
        Connects to the database.
        """
        pass

    @abstractmethod
    def disconnect(self):
        """
        Disconnects from the database.
        """
        pass

    def get_engine(self) -> any:
        """
        Returns the engine native object, for direct access to the engine. (e.g., SQLAlchemy engine object)
        :return: The engine native object.
        :rtype: any
        """
        return self._engine
    
    def query(self, query: str) -> "BaseClient":
        """
        Sets the query to be executed and returns the client object.
        :param query: The query to be executed.
        :type query: str

        :return: The client object.
        :rtype: BaseClient
        """
        self._query = query
        return self