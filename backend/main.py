from enum import Enum
from aws_cdk import Duration, NestedStack, RemovalPolicy, Stage
from aws_cdk import (
    aws_dynamodb as dynamodb,
    aws_lambda as lambd,
    aws_lambda_python_alpha as lambd_experimental,
    aws_logs as logs,
    aws_iam as iam,
    aws_cognito as cognito,
    aws_ssm as ssm,
    
    )

from constructs import Construct

class BackendStackParams:
    def __init__(self, stage: Stage, base_environment: dict, layer_lambda: lambd.LayerVersion, distribution_url: str):
        self.stage = stage
        self.base_environment = base_environment
        self.layer_lambda = layer_lambda
        self.distribution_url : str = distribution_url

class BackendStackOutputs:
    def __init__(self):
        pass

class Permission(Enum):
    READ_WRITE_USERS_TABLE = "rw_users_table"

class BackendStack(NestedStack):

    def get_outputs(self) -> BackendStackOutputs:
        return BackendStackOutputs()
    
    def __init__(self, scope: Construct, id: str, params: BackendStackParams, **kwargs):
        super().__init__(scope, id, **kwargs)

        base_name = f"webapp-backend-{params.stage}"

        # ------------------------------#
        #            BACK-END           #
        # ------------------------------#

        ###########################
        #          DYNAMODB       #
        ###########################

        users_table = dynamodb.Table(
            self,
            f"{base_name}-users_table",
            table_name=f"{base_name}-users_table",
            billing_mode=dynamodb.BillingMode.PAY_PER_REQUEST,
            removal_policy=RemovalPolicy.DESTROY,
            partition_key=dynamodb.Attribute(
                name="root_token", type=dynamodb.AttributeType.STRING,
            )
        )

        ###########################
        #          LAMBDAS        #
        ###########################

        users = lambd_experimental.PythonFunction(
            self,
            function_name=f"{base_name}-users",
            id=f"{base_name}-users",
            entry="backend/api/users",
            index="users.py",
            runtime=lambd.Runtime.PYTHON_3_10,
            layers=[params.layer_lambda],
            environment=params.base_environment,
        )


        ###########################
        #        LOG GROUPS       #
        ###########################
        
        logged_lambdas = [users]

        log_group = logs.LogGroup(
                self,
                f"app_log-group",
                log_group_name=f"app_log-group",
                retention=logs.RetentionDays.ONE_WEEK, 
                removal_policy=RemovalPolicy.DESTROY,
            )

        for l in logged_lambdas:
            l.add_to_role_policy(
                statement=iam.PolicyStatement(
                    actions=["logs:CreateLogStream", "logs:PutLogEvents"],
                    resources=[log_group.log_group_arn + ":*"],
                )
            )

        # ------------------------------#
        #      DATALAKE API (lambda)    #
        # ------------------------------#

        '''

        api_authorizer : lambd.Function = lambd.Function(
            scope=self,
            function_name= f"{base_name}-api_authorizer",
            id = f"{base_name}-api_authorizer",
            code=lambd.Code.from_asset("backend/api/authorizer"),
            handler="authorizer.handler",
            layers=[params.layer_lambda],
            environment=params.base_environment,
            runtime=lambd.Runtime.PYTHON_3_10
        )

        authorizer = apigateway.RequestAuthorizer(
            self,
            f"{base_name}-authorizer",
            authorizer_name=f"{base_name}-authorizer",
            identity_sources=[apigateway.IdentitySource.header('master_token')],
            handler=api_authorizer,
            results_cache_ttl=Duration.seconds(0)
            #cognito_user_pools=[grocerypal_user_pool],
        )

        authorized_api_method_options = apigateway.MethodOptions(
            authorizer=authorizer,
            authorization_type=apigateway.AuthorizationType.CUSTOM,
        )

        # CORS work only without proxy integration, otherwise the CORS are managed by the lambda
        grocerypal_api_cors = apigateway.CorsOptions(
            allow_origins=apigateway.Cors.ALL_ORIGINS,
            allow_methods=apigateway.Cors.ALL_METHODS,
            allow_headers=["*"],
            expose_headers=["*"],
        )

        grocerypal_api = apigateway.RestApi(
            self,
            f"{base_name}-gateway",
            deploy_options=apigateway.StageOptions(stage_name=params.stage),
            rest_api_name=f"{base_name}-gateway",
            default_cors_preflight_options=grocerypal_api_cors,
        )

        # Companies API
        users_res = grocerypal_api.root.add_resource(
            "users",
            default_cors_preflight_options=grocerypal_api_cors,
        )

        users_res.add_proxy(
            any_method=True,
            default_integration=apigateway.LambdaIntegration(users)
        )

        users_res = grocerypal_api.root.add_resource(
            "hi",
            default_cors_preflight_options=grocerypal_api_cors,
        )
        
        users_res.add_proxy(
            any_method=True,
            default_integration=apigateway.LambdaIntegration(hi),
            default_method_options=authorized_api_method_options
        )

        '''


        
        # ------------------------------------------#
        #          POLICIES & VARIABLES             #
        # ------------------------------------------#





        enum_perm_to_policy_and_env = {}
        
        '''
        # USER TABLE -------------------------------------------

        users_table_policy = iam.Policy(
            self,
            f"{base_name}-rw_users_table",
            statements=[
                iam.PolicyStatement(
                    actions=[
                        "dynamodb:GetItem",
                        "dynamodb:PutItem",
                        "dynamodb:UpdateItem",
                        "dynamodb:DeleteItem",
                        "dynamodb:Query",
                        "dynamodb:Scan",
                    ],
                    resources=[users_table.table_arn, users_table.table_arn + f"/index/{master_token_index_name}"],
                )
            ],
        )

        users_table_env = {
            "USERS_TABLE_NAME": users_table.table_name,
            "USERS_TABLE_MASTER_TOKEN_INDEX": master_token_index_name
        }

        enum_perm_to_policy_and_env[Permission.READ_WRITE_USERS_TABLE] = (
            users_table_policy,
            users_table_env,
        )

        '''



        

        # ------------------------------------------#
        #       ASSIGN POLICIES AND VARIABLES       #
        # ------------------------------------------#

        all_perms = [
            Permission.READ_WRITE_USERS_TABLE
        ]

        lambda_perms_association = {
        }

        for lamdba, perms in lambda_perms_association.items():
            # enum_perm_to_policy_and_env it's an enum list, reason why we retrieve
            for enum_perm in perms:
                policy, env = enum_perm_to_policy_and_env[enum_perm]

                # Attach inline policies to lambda role
                lamdba.role.attach_inline_policy(policy)

                # Add environment variables to the lambda env
                for key, value in env.items():
                    lamdba.add_environment(key, value)


    


    