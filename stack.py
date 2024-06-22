from aws_cdk import CfnOutput, Duration, RemovalPolicy, Stack, Stage
from aws_cdk import (
    aws_lambda as lambd,
    aws_lambda_python_alpha as lambd_experimental,
    aws_ec2 as ec2,
    aws_cognito as cognito,
    aws_ssm as ssm,
    aws_ecr as ecr,
)
from constructs import Construct

from frontend.main import FrontendStack, FrontendStackOutputs, FrontendStackParams
from backend.main import BackendStack, BackendStackOutputs, BackendStackParams


class AppStack(Stack):
    def __init__(self, scope: Construct, construct_id: str, repository_name: str, stage: Stage, image_tag: str, push_image: bool, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        base_name = f"{repository_name}-{stage}"

        # Shared resources -----------------------------------------
        #----------------------------------------------------

        layer_lambda = lambd_experimental.PythonLayerVersion(
            self,
            f"{base_name}-layer",
            layer_version_name=f"{base_name}-layer",
            entry="backend/layer",
            compatible_runtimes=[lambd.Runtime.PYTHON_3_10]
        )

        # Shared environment variables
        base_environment = {
            "STAGE": stage,
            "LOGGER_LEVEL": "DEBUG" if stage == "staging" else "INFO",
        }
        

        ###################
        #     FRONTEND    #
        ###################

        frontend : FrontendStack = FrontendStack(
            self,
            f"{self.stack_name}-frontend",
            FrontendStackParams(
                stage,
                base_environment,
                layer_lambda
            )
        )

        frontend_stack_outputs: FrontendStackOutputs = frontend.get_outputs()


        ##################
        #     COGNITO    #
        ##################
        
        # [[ User Pool ]]
        user_pool = cognito.UserPool(
            self,
            f"{base_name}-user-pool",
            user_pool_name=f"{base_name}-user-pool",
            removal_policy=RemovalPolicy.DESTROY,
            sign_in_aliases=cognito.SignInAliases(email=True),
            auto_verify=cognito.AutoVerifiedAttrs(email=True),
            password_policy=cognito.PasswordPolicy(
                min_length=8,
                require_digits=True,
                require_lowercase=True,
                require_uppercase=True,
                require_symbols=True
            ),
            standard_attributes=cognito.StandardAttributes(
                email=cognito.StandardAttribute(required=True, mutable=True),
                nickname=cognito.StandardAttribute(required=False, mutable=False),
                given_name=cognito.StandardAttribute(required=True, mutable=True),
                family_name=cognito.StandardAttribute(required=True, mutable=True),
            ),
            custom_attributes={},
            account_recovery=cognito.AccountRecovery.EMAIL_ONLY,
            self_sign_up_enabled=True,
        )

        # [[ Google Identity Provider ]]

        google_client_id = ssm.StringParameter.from_string_parameter_name(
            self, "google-client-id",
            string_parameter_name="/cdk-bootstrap/webapp/main/google_client_id",
        ).string_value

        google_secret = ssm.StringParameter.from_string_parameter_name(
            self, "-google-secret",
            string_parameter_name="/cdk-bootstrap/webapp/main/google_client_secret",
        ).string_value

        google_identity_provider = cognito.UserPoolIdentityProviderGoogle(
            self,
            f"{base_name}-google-provider",
            user_pool=user_pool,
            client_id=google_client_id,
            client_secret=google_secret,
            scopes=["profile", "email"], # Here we can access to user google scope, permissions to access to calendar ...
            attribute_mapping=cognito.AttributeMapping(
                email=cognito.ProviderAttribute.GOOGLE_EMAIL,
                given_name=cognito.ProviderAttribute.GOOGLE_GIVEN_NAME,
                family_name=cognito.ProviderAttribute.GOOGLE_FAMILY_NAME,
                profile_picture=cognito.ProviderAttribute.GOOGLE_PICTURE
            ),
        )

        user_pool.register_identity_provider(google_identity_provider)

        # [[ User Pool Client ]]
        user_pool_client_urls = {
            "local_callback_url": "http://localhost:5173/login",
            "local_logout_url": "http://localhost:5173/logout",
            "remote_callback_url": frontend_stack_outputs.distribution_url+"/login",
            "remote_logout_url": frontend_stack_outputs.distribution_url+"/logout",
        }

        user_pool_client = cognito.UserPoolClient(
            self,
            f"{base_name}-user-pool-client",
            user_pool=user_pool,
            user_pool_client_name=f"{base_name}-user-pool-client",
            auth_flows=cognito.AuthFlow(
                user_srp=True,
                user_password=True,  # Assuming you want to keep the option for users to sign in directly with a username and password
            ),
            o_auth=cognito.OAuthSettings(
                callback_urls=[user_pool_client_urls["local_callback_url"], user_pool_client_urls["remote_callback_url"]],
                logout_urls=[user_pool_client_urls["local_logout_url"], user_pool_client_urls["remote_logout_url"]],
                flows=cognito.OAuthFlows(
                    #Theory: implicit flow is used for client-side apps, while authorization code flow is used for server-side apps
                    authorization_code_grant=True,
                    implicit_code_grant=True
                ),
                scopes=[cognito.OAuthScope.OPENID, cognito.OAuthScope.EMAIL, cognito.OAuthScope.PROFILE, cognito.OAuthScope.COGNITO_ADMIN],
            ),
            prevent_user_existence_errors=True, # Avoid account enumeration
            supported_identity_providers=[cognito.UserPoolClientIdentityProvider.COGNITO, cognito.UserPoolClientIdentityProvider.GOOGLE],
            refresh_token_validity=Duration.hours(8), # Allows to refresh other tokens, moreover once it expires, the user will need to reauthenticate to obtain a new one
            access_token_validity=Duration.hours(8), # Access_token = authotization only
            id_token_validity=Duration.hours(8), # ID_token = authorization + authentication (it encapsulates user data)
        )

        # [[ User Pool Domain ]]

        # Custom Domain for User Pool
        user_pool_domain = cognito.UserPoolDomain(
            self,
            f"{base_name}-user-pool-domain",
            user_pool=user_pool,
            cognito_domain=cognito.CognitoDomainOptions(
                domain_prefix=f"{base_name}"
            ),
        )

        # ------------------------------------------------
        
        backend : BackendStack = BackendStack(
            self,
            f"{self.stack_name}-backend-microservice",
            BackendStackParams(
                stage,
                base_environment,
                layer_lambda,
                user_pool,
                user_pool_client,
                user_pool_domain,
            )
        )



        backend_stack_outputs : BackendStackOutputs = backend.get_outputs()

        CfnOutput(self, "StackRegion", value=self.region, description="AWS Region")
        CfnOutput(self, "DistributionUrl", value=frontend_stack_outputs.distribution_url)
        CfnOutput(self, "FrontendBucketName", value=frontend_stack_outputs.frontend_bucket_name)
        CfnOutput(self, "BackendBucketName", value=backend_stack_outputs.backend_bucket_name)
        CfnOutput(self, "NestJsBaseUrl", value=backend_stack_outputs.api_base_url)
        CfnOutput(self, "FrontendDistributionId", value=frontend_stack_outputs.distribution_id)
        CfnOutput(self, "UserPoolId",value=user_pool.user_pool_id, description="Cognito User Pool ID")
        CfnOutput(self, "UserPoolClientId",value=user_pool_client.user_pool_client_id, description="Cognito User Pool Client ID")
        CfnOutput(self, "UserPoolDomain",value=user_pool_domain.domain_name, description="Cognito User Pool Domain")
        CfnOutput(self, "UserPoolClientCallbackUrlLocal", value=user_pool_client_urls["local_callback_url"] , description="Cognito User Pool Client Callback URL - Local") 
        CfnOutput(self, "UserPoolClientCallbackUrlRemote", value=user_pool_client_urls["remote_callback_url"], description="Cognito User Pool Client Callback URL - Remote")
        CfnOutput(self, "UserPoolClientLogoutUrlLocal", value=user_pool_client_urls["local_logout_url"], description="Cognito User Pool Client Callback URL - Local") 
        CfnOutput(self, "UserPoolClientLogoutUrlRemote", value=user_pool_client_urls["remote_logout_url"], description="Cognito User Pool Client Callback URL - Remote")






