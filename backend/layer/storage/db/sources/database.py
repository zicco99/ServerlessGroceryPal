from urllib.parse import quote_plus

class Database():
    """
    A configuration class needed data to connect a to database.
    """

    def __init__(self, username, password, hostname, port, database, dialect):
        self.username = username
        self.password = password
        self.hostname = hostname
        self.port = port
        self.database = database
        self.dialect = dialect
    
    @property
    def connection_string(self):
        """
        Generates the connection string for the database.

        :return: The connection string.
        :rtype: str
        """
        encoded_password = quote_plus(self.password)
        return f"{self.dialect}://{self.username}:{encoded_password}@{self.hostname}:{self.port}/{self.database}"
    
