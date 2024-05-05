from .base_service import BaseService
import toml


class SSM(BaseService):
    """
    Service class to interact with AWS SSM.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__("ssm", aws_region, aws_access_key_id, aws_secret_access_key)

    def get_parameters_from_toml(self, toml_file_path: str) -> dict[str, str]:
        """
        Get parameters from AWS Parameter Store using a TOML file.

        :param toml_file_path: Path to the TOML file with the parameters.
        :type toml_file_path: str

        :return: Dictionary where the keys are the given input keys and the values are the Parameter Store values.
        :rtype: dict[str, str]


        """
        try:
            with open(toml_file_path, "r") as f:
                lines = f.read()

                toml_parameters = toml.loads(lines)
                parameters = self.get_parameters(toml_parameters)
                f.close()

            return parameters
        except FileNotFoundError:
            raise FileNotFoundError(f"File not found: {toml_file_path}")
        except Exception:
            raise

    def get_parameters(self, parameters: dict[str, str]) -> dict[str, str]:
        """
        Get variables from AWS Parameter Store.

        :param parameters: Dictionary with the parameters to get.
        :type parameters: dict[str, str]

        :return: Dictionary where the keys are the given input keys and the values are the Parameter Store values.
        :rtype: dict[str, str]

        Example:
        >>> get_ssm_parameters({"key1": "/path/to/parameter1", "key2": "/path/to/parameter2"}, "eu-west-1")
        """

        try:
            response = self.client.get_parameters(
                Names=list(parameters.values()),  # This needs to be a list of strings
                WithDecryption=True,  # Show the decrypted value of SecureString and Password parameters
            )

            if response["ResponseMetadata"]["HTTPStatusCode"] != 200:
                raise Exception(f"Error getting parameters: {response}")

            if response["InvalidParameters"]:
                raise Exception(f"Invalid parameters: {response['InvalidParameters']}")

            # The response is a list of dictionaries, we want to convert it to a dictionary
            parameter_store_mapping = {
                param["Name"]: param["Value"] for param in response["Parameters"]
            }

            # Map the input keys to the parameter store values
            return {
                key: parameter_store_mapping[parameter]
                for key, parameter in parameters.items()
            }
        except Exception:
            raise

