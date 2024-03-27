from abc import ABC, abstractmethod
from enum import Enum
import json
from pydantic import BaseModel, ValidationError

from aws_lib.logger import logger
from aws_lambda_powertools.event_handler import Response, content_types


class LambdaResponseCode(Enum):
    OK = (200, "OK")
    OK_SILENT = (200, "OK Silent")
    BAD_REQUEST = (400, "Bad Request")
    UNAUTHORIZED = (401, "Unauthorized")
    FORBIDDEN = (403, "Forbidden")
    NOT_FOUND = (404, "Not Found")
    CONFLICT = (409, "Conflict")
    DATA_VALIDATION_FAILED = (422, "Data Validation Failed")
    INTERNAL_SERVER_ERROR = (500, "Internal Server Error")

    SUPPLIER_CODE_ERROR = (418, "Supplier Code Error")

    OTP_SENT = (200, "OTP Sent Successfully")
    OTP_CONFIRMATION_FAILED = (400, "OTP Confirmation Failed")

    FORBIDDEN_DEFAULT_IBAN = (403, "Forbidden Default Iban")
    INVALID_PASSWORD = (403, "Invalid Password")


# Utility struct that encapsulates the responce of a lambda
class LambdaResponse:
    def __init__(
        self,
        status_code: LambdaResponseCode = LambdaResponseCode.OK,
        result={},
        is_base64_encoded=False,
        headers=None,
    ):
        """
        Args:
            result (dict): The data to be included in the response body.
            status_code (int): The HTTP status code to be returned in the response. Default is 200.
            is_base64_encoded (bool): It's used if the data is binary encoded data
            headers (dict): Additional headers to be included in the response. Default is None.
        """
        if headers is None:
            headers = {
                "Content-Type": "application/json",
                "aws-lambda-status-msg": status_code.value,
            }
        else:
            headers["aws-lambda-status-msg"] = status_code.value

        headers["Access-Control-Allow-Origin"] = "*"
        headers["Access-Control-Allow-Headers"] = "*"
        headers["Access-Control-Allow-Methods"] = "OPTIONS,POST,GET,PUT"
        headers["Access-Control-Expose-Headers"] = "*"

        self.response = {
            "statusCode": status_code.value[0],
            "is_base64_encoded": is_base64_encoded,
            "headers": headers,
            "body": result,
        }

    def has_error(self):
        return self.response["statusCode"] >= 400

    def to_dict(self):
        result_dict = {
            "statusCode": self.response["statusCode"],
            "is_base64_encoded": self.response["is_base64_encoded"],
            "headers": self.response["headers"],
        }

        if self.response["body"]:
            if isinstance(self.response["body"], dict):
                result_dict["body"] = self.response["body"]
            else:
                result_dict["body"] = json.loads(self.response["body"])

        return result_dict

    def to_body_status(self):
        return self.response["body"], self.response["statusCode"]

    def to_powertools(self):
        return Response(
            status_code=self.response["statusCode"],
            content_type=content_types.APPLICATION_JSON,
            body=self.response,
            headers=self.response["headers"],
        )
    
    def __eq__(self, other):
        if not isinstance(other, LambdaResponse):
            return False

        return (
            self.response["statusCode"] == other.response["statusCode"]
        )


class LambdaAbstractRequest(ABC):
    def __init__(self, app) -> None:
        self.app = app
        self.name = self.__class__.__name__

    @abstractmethod
    def execute(self) -> LambdaResponse:
        pass

    def validate(self, payload: dict, validation_model: BaseModel):
        logger.info("Event payload model validation")
        try:
            res = validation_model(**payload)
            logger.info("Event payload validated")
            return res

        except ValidationError as e:
            logger.error("Model validation error:" + str(e))
            return None

    def main(self, args: dict = {}) -> dict:
        response = None
        try:
            logger.info(f"{self.name}::Request received")
            response = self.execute(**args)
        except Exception as e:
            logger.error(f"{self.name}::Exception {str(e)}")
            response = LambdaResponse(
                status_code=LambdaResponseCode.INTERNAL_SERVER_ERROR
            )
        finally:
            if response is None:
                response = LambdaResponse(
                    status_code=LambdaResponseCode.INTERNAL_SERVER_ERROR
                )

        response_powertools = response.to_powertools()
        if response.has_error():
            logger.error(
                f"{self.name}::Request completed with errors - Status: {response_powertools.status_code} Body: {response_powertools.body}"
            )
        else:
            logger.info(
                f"{self.name}::Request completed - Status: {response_powertools.status_code}"
            )

        return response_powertools
