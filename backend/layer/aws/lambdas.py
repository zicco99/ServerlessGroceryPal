from .base_service import BaseService
import json


class Lambda(BaseService):
    """
    Service class to interact with AWS Lambda.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__("lambda", aws_region, aws_access_key_id, aws_secret_access_key)

    def invoke_lambda_sync(self, function_name: str, payload: dict) -> dict:
        """
        Invokes a Lambda function synchronously.
        :param function_name: The name of the Lambda function.
        :param payload: The payload to send to the Lambda function.

        :type function_name: str
        :type payload: dict

        :return: The response from the invoke operation.
        :rtype: dict

        :raises ClientError: If there is an error invoking the Lambda function.
        """
        # Convert the payload to a JSON string.
        payload = json.dumps(payload)
        try:
            response = self.client.invoke(
                FunctionName=function_name,
                InvocationType="RequestResponse",
                Payload=payload,
            )
            # Load the response payload from the response object.
            response_payload = json.loads(response["Payload"].read())
            return response_payload
        except Exception:
            raise

    def invoke_lambda_async(self, function_name: str, payload: dict) -> dict:
        """
        Invokes a Lambda function asynchronously.
        :param function_name: The name of the Lambda function.
        :param payload: The payload to send to the Lambda function.

        :type function_name: str
        :type payload: dict

        :return: The response from the invoke operation.
        :rtype: dict

        :raises ClientError: If there is an error invoking the Lambda function.
        """
        try:
            # Convert the payload to a JSON string.
            payload = json.dumps(payload)
            response = self.client.invoke(
                FunctionName=function_name,
                InvocationType="Event",
                Payload=payload,
            )
            # Async invocations do not return a response payload, instead they return a status code.
            return response["StatusCode"]
        except Exception:
            raise
