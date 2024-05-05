import boto3
from abc import ABC


class BaseService(ABC):
    """
    A base class for AWS services. When creating a new service, please inherit from this class.
    """

    def __init__(
        self,
        aws_service: str,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        """
        Initializes the service and creates a Boto3 client.
        Please note that the aws_access_key_id and aws_secret_access_key are optional, if not provided boto3 will use the IAM role then the ones stored in the environment variables
        or eventually will fallback to the .aws/credentials file.
        Avoid instantiating services in the Lambda handlers, instead, create the service instance outside the handler and reuse it.

        :param aws_service: The name of the AWS service. For example: "dynamodb", "s3", "sqs", etc.
        :param aws_region: The region where the service is located. If not provided, boto3 will use the default region for the account. (Optional)
        :param aws_access_key_id: The AWS access key ID. (Optional)
        :param aws_secret_access_key: The AWS secret access key. (Optional)

        :type aws_service: str
        :type aws_region: str
        :type aws_access_key_id: str
        :type aws_secret_access_key: str

        """
        self.client = boto3.client(
            aws_service,
            region_name=aws_region,
            aws_access_key_id=aws_access_key_id,
            aws_secret_access_key=aws_secret_access_key,
        )
        self.__configure_client()

    def __configure_client(self):
        pass

    def get_client(self):
        return self.client
