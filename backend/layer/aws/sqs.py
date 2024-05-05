from .base_service import BaseService
from botocore.exceptions import ClientError


class SQS(BaseService):
    """
    Service class to interact with AWS SQS.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__("sqs", aws_region, aws_access_key_id, aws_secret_access_key)

    def send_message(self, queue_name: str, message: str) -> dict:
        """
        Sends a message to a SQS queue.
        :param queue_name: The name of the queue.
        :param message: The message to send.

        :type queue_name: str
        :type message: str

        :return: The response from the send_message operation.
        :rtype: dict

        :raises ClientError: If there is an error sending the message.
        """

        try:
            response = self.client.send_message(
                QueueUrl=queue_name, MessageBody=message
            )
            return response
        except Exception:
            raise

    def receive_message(self, queue_name: str, max_message_pooling: int = 10) -> dict:
        """
        Receives messages from a SQS queue.
        :param queue_name: The name of the queue.
        :param max_message_pooling: The maximum number of messages the client needs to wait before returning the result, useful for optimizing efficiency and costs of the service.

        :type queue_name: str
        :type max_message_pooling: int

        :return: The response from the receive_message operation.
        :rtype: dict

        :raises ClientError: If there is an error receiving the messages.
        """
        try:
            response = self.client.get_client("sqs").receive_message(
                QueueUrl=queue_name, MaxNumberOfMessages=max_message_pooling
            )
            return response
        except Exception:
            raise

    def delete_message(self, queue_name: str, receipt_handle: str) -> dict:
        """
        Deletes a message from a SQS queue.
        :param queue_name: The name of the queue.
        :param receipt_handle: The receipt handle of the message to delete.

        :type queue_name: str
        :type receipt_handle: str

        :return: The response from the delete_message operation.
        :rtype: dict

        :raises ClientError: If there is an error deleting the message.
        """
        try:
            response = self.client.get_client("sqs").delete_message(
                QueueUrl=queue_name, ReceiptHandle=receipt_handle
            )
            return response
        except Exception:
            raise
