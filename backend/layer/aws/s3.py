import io
from .base_service import BaseService
from botocore.exceptions import ClientError


class S3(BaseService):
    """
    Service class to interact with AWS S3.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__("s3", aws_region, aws_access_key_id, aws_secret_access_key)

    def get_file(self, bucket_name: str, key: str) -> bytes:
        """
        Reads a file from S3 and return it as bytes.

        This function is synchronous and will block until the file is read successfully.
        If the file does not exist, the function will raise an exception.

        :param str bucket_name: S3 bucket name
        :param str key: S3 key

        :returns: File content as bytes
        :rtype: bytes

        :raises FileNotFoundError: if the requested file is not found
        """

        # In case key does not exist, raise an exception
        try:
            self.client.head_object(Bucket=bucket_name, Key=key)
        except ClientError as e:
            if e.response["Error"]["Code"] == "404":
                raise FileNotFoundError(
                    f"File {key} does not exist in bucket {bucket_name}."
                )
            else:
                raise

        # Download the file
        obj = self.client.get_object(Bucket=bucket_name, Key=key)
        return obj["Body"].read()

    def write_file(
        self, bucket_name: str, key: str, src: bytes, overwrite: bool = False
    ) -> str:
        """
        Writes a file to S3 and return the S3 uri of the written file.

        This function is synchronous and will block until the file is written successfully. If the
        file already exists, the function will raise an exception.

        :param str bucket_name: The S3 bucket name
        :param str key: The S3 key
        :param bytes src: File content in bytes
        :param bool overwrite: If True, overwrite the file if it already exists. Default is False.

        :return: the S3 uri of the written file
        :rtype: str
        """

        if overwrite:
            # In case key already exists, raise an exception
            try:
                self.client.head_object(Bucket=bucket_name, Key=key)
                raise FileExistsError(
                    f"File {key} already exists in bucket {bucket_name}."
                )
            except ClientError as e:
                if e.response["Error"]["Code"] != "404":
                    raise

        try:
            # Upload the file
            self.client.upload_fileobj(
                Fileobj=io.BytesIO(
                    src
                ),  # Need to convert the bytes to a file-like object
                Bucket=bucket_name,
                Key=key,
            )

            # Wait for the file to be uploaded
            # More here: https://boto3.amazonaws.com/v1/documentation/api/latest/reference/services/s3/waiter/ObjectExists.html
            waiter = self.client.get_waiter("object_exists")
            waiter.wait(Bucket=bucket_name, Key=key)

            # Return the s3 uri of the uploaded file
            return "s3://{bucket_name}/{key}".format(bucket_name=bucket_name, key=key)
        except Exception as e:
            raise e

    def get_file_creation_date(self, bucket_name: str, key: str, as_timestamp: bool = False):
        """
        Retrieves the creation date of a file in S3.

        :param str bucket_name: The S3 bucket name
        :param str key: The S3 key
        :param bool as_timestamp: If True, return the creation date as a Unix timestamp. 
                                   If False, return as a formatted string. Default is False.

        :return: The creation date of the file
        :rtype: str or int (Unix timestamp)
        """
        try:
            response = self.client.head_object(Bucket=bucket_name, Key=key)
            last_modified = response["LastModified"]
            if as_timestamp:
                creation_date = int(last_modified.timestamp())
            else:
                creation_date = last_modified.strftime("%Y-%m-%d %H:%M:%S")
            return creation_date
        except ClientError as e:
            if e.response["Error"]["Code"] == "404":
                raise FileNotFoundError(
                    f"File {key} does not exist in bucket {bucket_name}."
                )
            else:
                raise

