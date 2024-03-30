import boto3
import os
from aws_lib.logger import logger
from aws_lib.errors import AuthenticationTokenError


#TODO FIX HERE


'''

class CognitoUtils:
    @classmethod
    def create(cls):

        user_attributes = [
            {"Name": "given_name", "Value": user.firstname},
            {"Name": "family_name", "Value": user.lastname},
        ]

        if user.phone is not None:
            user_attributes.append({"Name": "phone_number", "Value": user.phone})

        response = cognito.admin_create_user(
            UserPoolId=user_pool_id,
            Username=user.email,
            UserAttributes=user_attributes,
            DesiredDeliveryMediums=["EMAIL"],
        )
        logger.info(response)

        return response

    @classmethod
    def get(cls, email):
        try:
            response = cognito.admin_get_user(UserPoolId=user_pool_id, Username=email)

            attributes = {}
            if response.get("UserAttributes"):
                for attribute in response["UserAttributes"]:
                    attributes[attribute["Name"]] = attribute["Value"]

            # (v2 a User object would be better)
            return attributes
        except cognito.exceptions.UserNotFoundException:
            return None


    @classmethod
    def get_cognito_user_by_access_token(cls, token):
        try:
            response = cognito.get_user(AccessToken=token)
            attributes = {}
            if response.get("UserAttributes"):
                for attribute in response["UserAttributes"]:
                    attributes[attribute["Name"]] = attribute["Value"]
            return attributes
        except (
            cognito.exceptions.UserNotFoundException,
            cognito.exceptions.NotAuthorizedException,
        ):
            raise AuthenticationTokenError()

    @classmethod
    def member(cls, email):
        return cls.get(email) is not None

    @classmethod
    def delete(cls, email):
        try:
            response = cognito.admin_delete_user(
                UserPoolId=user_pool_id, Username=email
            )
            logger.info(response)
            return True
        except cognito.exceptions.UserNotFoundException:
            return False

    ##############################################################
    @classmethod
    def activate_user(cls, email):
        response = cognito.admin_enable_user(UserPoolId=user_pool_id, Username=email)
        logger.info(response)

    @classmethod
    def block_user(cls, email):
        response = cognito.admin_disable_user(UserPoolId=user_pool_id, Username=email)
        logger.info(response)

    ##############################################################

    @classmethod
    def update_phone_number(cls, email, phone_number):
        cognito.admin_update_user_attributes(
            UserPoolId=user_pool_id,
            Username=email,
            UserAttributes=[
                {"Name": "phone_number", "Value": phone_number},
                {"Name": "phone_number_verified", "Value": "true"},
            ],
        )

    @classmethod
    def update_password(cls, user_token, old_password, new_password):
        cognito.change_password(
            PreviousPassword=old_password,
            ProposedPassword=new_password,
            AccessToken=user_token,
        )

    @classmethod
    def validate_email(cls, email):
        cognito.admin_update_user_attributes(
            UserPoolId=user_pool_id,
            Username=email,
            UserAttributes=[{"Name": "email_verified", "Value": "true"}],
        )
'''