from .base_service import BaseService
from typing import Any, Tuple
from boto3.dynamodb.types import TypeSerializer, TypeDeserializer
from botocore.exceptions import ClientError


class DynamoDB(BaseService):
    """
    A class to interact with DynamoDB service.
    """

    def __init__(
        self,
        aws_region: str = None,
        aws_access_key_id: str = None,
        aws_secret_access_key: str = None,
    ) -> None:
        super().__init__(
            "dynamodb", aws_region, aws_access_key_id, aws_secret_access_key
        )
        self.serializer = TypeSerializer()
        self.deserializer = TypeDeserializer()

    def put_item(self, table_name: str, item: dict) -> None:
        """
        Puts an item into a DynamoDB table.
        :param table_name: The name of the table.
        :param item: The item to be put into the table as a standard python dictionary.

        :type table_name: str
        :type item: dict

        :return: None
        :rtype: None

        Example:
        >>> dynamodb = DynamoDB("us-east-1")
        >>> dynamodb.put_item("my_table", {"id": 1, "name": "John Doe"})
        """
        
        dynamo_item = {
            key: self.serializer.serialize(value) for key, value in item.items()
        }
        self.client.put_item(TableName=table_name, Item=dynamo_item)

    def get_item(
        self,
        table_name: str,
        primary_key: Tuple[str | int, Any],
        sort_key: Tuple[str | int, Any] = None,
    ) -> dict:
        """
        Gets an item from a DynamoDB table.
        :param table_name: The name of the table.
        :param primary_key: The primary key of the item to be retrieved.
        :param sort_key: The sort key of the item to be retrieved (if any)

        :type table_name: str
        :type primary_key: tuple
        :type sort_key: tuple

        :return: The item as a standard python dictionary.
        :rtype: dict

        Example:
        >>> dynamodb = DynamoDB("us-east-1")
        >>> dynamodb.get_item("my_table", ("my_key", "my_key_value"))
        >>> dynamodb.get_item("my_table", ("my_key", "my_key_value"), ("my_sort_key", "my_sort_key_value"))
        """

        try:
            # Construct the dynamo key following the JSON format schema
            primary_key_name = primary_key[0]
            primary_key_value = primary_key[1]

            dynamo_key = {
                primary_key_name: self.serializer.serialize(primary_key_value)
            }

            # If a sort key is provided, add it to the dynamo key
            if sort_key:
                sort_key_name = sort_key[0]
                sort_key_value = sort_key[1]
                dynamo_key[sort_key_name] = self.serializer.serialize(sort_key_value)

            response = self.client.get_item(TableName=table_name, Key=dynamo_key)
            dynamo_item = response.get("Item")
            return {
                key: self.deserializer.deserialize(value)
                for key, value in dynamo_item.items()
            }
        except ClientError as e:
            raise e
        except Exception as e:
            raise e
