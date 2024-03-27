class AuthenticationTokenError(Exception):
    def __init__(self) -> None:
        message = "Authentication token error"
        super().__init__(message)


class UnauthorizedUserError(Exception):
    pass


class NoDataError(Exception):
    pass


class TooManyRequestsError(Exception):
    def __init__(self) -> None:
        message = "Too many requests"
        super().__init__(message)


class DatabaseConnectionError(Exception):
    def __init__(self, database_class) -> None:
        message = "Error creating a connection with " + database_class.__name__
        super().__init__(message)
