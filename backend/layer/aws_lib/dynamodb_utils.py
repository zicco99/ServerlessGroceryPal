import boto3
from boto3.dynamodb.conditions import Key
from aws_lib.logger import logger

class DynamoDBUtils:
    def __init__(self):
        self.dynamodb = boto3.resource('dynamodb')

    def write_to(self, table: str, data: dict):
        """
            -- Writes data to a specified DynamoDB table.

            Args:
                table (str): The name of the DynamoDB table to write data to.
                data (dict): A dictionary representing the data to be written to the table.
        """
        logger.info(f'Writing data to DynamoDB table={table}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.put_item(Item=data)
            logger.info(f'Added item: {data}')
            return response
        except Exception as e:
            logger.error(f'Error writing to DynamoDB table {table}. Message: {e}')
            raise e

    def read_from_where(self, table: str, key: str, key_value: str, index_name: str = ""):
        """
        Reads data from a DynamoDB table or index based on a specified key and its value.

        Args:
            table (str): The name of the DynamoDB table or index to read data from.
            index_name (str): The name of the index to use for the query.
            key (str): The key to search for in the table or index.
            key_value (str): The value of the key to match.
        """
        logger.debug(f'Reading data from DynamoDB table/index={table}/{index_name}')
        try:
            table_obj = self.dynamodb.Table(table)
            if index_name!="":
                response = table_obj.query(
                    IndexName=index_name,
                    KeyConditionExpression=Key(key).eq(key_value)
                )
            else:
                response = table_obj.query(
                    KeyConditionExpression=Key(key).eq(key_value)
                )
            items = response.get('Items', [])
            return items[0]
        except Exception as e:
            logger.error(f'Error reading from DynamoDB table/index {table}/{index_name}. Message: {e}')
            raise e
    
    
    def update_to(self, table: str, key: str, key_value: str, key_to_update: str, value_to_update: str):
        """
            -- Updates an item in a DynamoDB table with a new value for a specific key.

            Args:
                table (str): The name of the DynamoDB table to update.
                key (str): The key to identify the item to be updated.
                key_value (str): The value of the key to identify the item to be updated.
                key_to_update (str): The key whose value is to be updated.
                value_to_update (str): The new value for the key.
        """
        logger.info(f'Updating data in DynamoDB table={table}, where key={key} and key_to_update={key_to_update}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.update_item(
                Key={key: key_value},
                UpdateExpression=f'set {key_to_update} = :r',
                ExpressionAttributeValues={':r': value_to_update},
                ReturnValues="UPDATED_NEW"
            )
            return response
        except Exception as e:
            logger.error(f'Error updating DynamoDB table {table}, where key={key} and key_to_update={key_to_update}. Message: {e}')
            raise e


    def scan_table(self, table: str, selected_property: str):
        """
            -- Scans a specific property in a DynamoDB table and returns the items containing that property.

            Args:
                table (str): The name of the DynamoDB table to scan.
                selected_property (str): The property to be projected in the scan operation.
        """
        logger.debug(f'Scanning property {selected_property} on DynamoDB table={table}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.scan(ProjectionExpression=selected_property)
            items = response.get('Items', [])
            logger.info(f'Read items: {items}')
            return items
        except Exception as e:
            logger.error(f'Error reading from DynamoDB table {table}. Message: {e}')
            raise e

    def list_table(self, table: str):
        """
            -- Lists all the items in a DynamoDB table.

            Args:
                table (str): The name of the DynamoDB table to list.
        """
        logger.debug(f'Reading all data from DynamoDB table={table}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.scan(TableName=table, Select="ALL_ATTRIBUTES")
            items = response.get('Items', [])
            while 'LastEvaluatedKey' in response:
                # when the result set exceeds the 1 MB limit, DynamoDB will include a LastEvaluatedKey in the response
                # so in the next scan we will start from where we stopped.
                response = table_obj.scan(ExclusiveStartKey=response['LastEvaluatedKey'], TableName=table, Select="ALL_ATTRIBUTES")
                items.extend(response.get('Items', []))
            return items
        except Exception as e:
            logger.error(f'Error reading from DynamoDB table {table}. Message: {e}')
            raise e

    def delete_to(self, table: str, key: str, key_value: str):
        """
            -- Deletes an item from a DynamoDB table based on a specified key and its value.

            Args:
                table (str): The name of the DynamoDB table to delete data from.
                key (str): The key to search for in the table.
                key_value (str): The value of the key to match for deletion.
        """
        logger.info(f'Deleting data from DynamoDB table={table}, where key={key} and key_value={key_value}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.delete_item(Key={key: key_value})
            return response
        except Exception as e:
            logger.error(f'Error deleting from DynamoDB table {table}, where key={key} and key_value={key_value}. Message: {e}')
            raise e

    def update_with_expression(self, table: str, key: dict, update_expression: str,
                               expression_attribute_names: dict, expression_attribute_values: dict):
        """
            -- Updates an item in a DynamoDB table with a custom update expression.

            Args:
                table (str): The name of the DynamoDB table to update.
                key (dict): The key to identify the item to be updated, represented as a dictionary.
                update_expression (str): The custom update expression for the update operation.
                expression_attribute_names (dict): A dictionary containing attribute name placeholders used in the update expression.
                expression_attribute_values (dict): A dictionary containing attribute value placeholders used in the update expression.
        """
        logger.info(f'Updating data in DynamoDB table={table}, where key={key}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.update_item(
                Key=key,
                UpdateExpression=update_expression,
                ExpressionAttributeNames=expression_attribute_names,
                ExpressionAttributeValues=expression_attribute_values
            )
            return response
        except Exception as e:
            logger.error(f'Error updating DynamoDB table {table}, where key={key}. Message: {e}')
            raise e

    def delete_with_expression(self, table: str, key: dict, delete_expression: str, expression_attribute_names: dict):
        """
            -- Deletes an item from a DynamoDB table with a custom delete expression.

            Args:
                table (str): The name of the DynamoDB table to delete data from.
                key (dict): The key to identify the item to be deleted, represented as a dictionary.
                delete_expression (str): The custom delete expression for the delete operation.
                expression_attribute_names (dict): A dictionary containing attribute name placeholders used in the delete expression.
        """
        logger.info(f'Deleting data from DynamoDB table={table}, where key={key}')
        try:
            table_obj = self.dynamodb.Table(table)
            response = table_obj.update_item(
                Key=key,
                UpdateExpression=delete_expression,
                ExpressionAttributeNames=expression_attribute_names
            )
            return response
        except Exception as e:
            logger.error(f'Error deleting from DynamoDB table {table}, where key={key}. Message: {e}')
            raise e
        


