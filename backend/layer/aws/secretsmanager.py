import json
from .base_service import BaseService


class SecretsManager(BaseService):
    """
    Service class to interact with AWS Secrets Manager.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__("secretsmanager", aws_region, aws_access_key_id, aws_secret_access_key)

    def get_secret(self, secret_arn: str) -> dict:
        """
        Get a secret from AWS Secrets Manager.

        :param secret_arn: The ARN of the secret to get.
        :type secret_arn: str

        :return: The value of the secret in a dictionary.
        :rtype: dict
        """
        try:
            response = self.client.get_secret_value(SecretId=secret_arn)
            return json.loads(response["SecretString"])
        except Exception as e:
            raise e
