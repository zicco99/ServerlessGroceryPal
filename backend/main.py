from enum import Enum
from aws_cdk import Duration, NestedStack, RemovalPolicy
from aws_cdk import (
    aws_lambda as lambd,
    aws_lambda_python_alpha as lambd_experimental,
    aws_apigateway as apigateway,
    aws_rds as rds,
    aws_ec2 as ec2,
    aws_iam as iam,
    aws_secretsmanager as secretsmanager,
    aws_cognito as cognito,
    aws_ecr as ecr,
    aws_lambda as lambda_,
    aws_s3 as s3,
    Stage
)

from constructs import Construct


# It represents a microservice but to add a security layer, the will be not be exposed
# but other microservices but access through a private API Gateway (boto3 invoke-based + aws_power_tool)) 

class BackendStackParams:
    def __init__(self, stage, base_environment, layer_lambda, user_pool, user_pool_client, user_pool_domain):
        self.stage : Stage = stage
        self.base_environment : dict = base_environment
        self.layer_lambda : lambd.LayerVersion = layer_lambda
        self.user_pool : cognito.UserPool = user_pool
        self.user_pool_client : cognito.UserPoolClient = user_pool_client
        self.user_pool_domain : cognito.UserPoolDomain = user_pool_domain

class BackendStackOutputs:
    def __init__(self, backend_bucket_name):
        self.backend_bucket_name = backend_bucket_name

class Permission(Enum):
    RW_PERM_SCRAP_DB = "rw_backend_db"
    READ_USERPOOL = "r_user_pool"
    WRITE_USERPOOL = "w_user_pool"
    ADMIN_ACCESS_USERPOOL = "a_user_pool"


class BackendStack(NestedStack):

    def get_outputs(self) -> BackendStackOutputs:
        return BackendStackOutputs(self.backend_bucket_name)
    
    def __init__(self, scope: Construct, id: str, params: BackendStackParams, **kwargs):
        super().__init__(scope, id, **kwargs)

        base_name = f"backend-microservice-{params.stage}"
        
        vpc_cidr = "10.0.0.0/16"

        backend_vpc = ec2.Vpc(
            self, f"{base_name}-VPC",
            max_azs=3,
            cidr=vpc_cidr,
            subnet_configuration=[
                ec2.SubnetConfiguration(
                    cidr_mask=24,  
                    name='public',
                    subnet_type=ec2.SubnetType.PUBLIC,
                ),
                ec2.SubnetConfiguration(
                    cidr_mask=24, 
                    name='private',
                    subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS
                )
            ],
            nat_gateways=1
        )

        # Define security groups
        lambda_security_group = ec2.SecurityGroup(self, f"{base_name}-lambda-security-group",
            vpc=backend_vpc,
            description="Security group for Lambda functions",
            allow_all_outbound=True
        )

        rds_security_group = ec2.SecurityGroup(self, f"{base_name}-rds-security-group",
            vpc=backend_vpc,
            description="Security group for RDS instance",
            allow_all_outbound=True
        )

        # Define DB credentials
        backend_db_creds = secretsmanager.Secret(
            self,
            f"{base_name}-postgres-creds",
            removal_policy=RemovalPolicy.DESTROY,
            generate_secret_string=secretsmanager.SecretStringGenerator(
                secret_string_template='{"username": "postgres"}',
                generate_string_key="password",
                exclude_characters="{}[]()'\"/\\:?#&=@;<>%"
            ),
            secret_name=f"{base_name}-db-creds"
        )

        # Create RDS database instance
        backend_db = rds.DatabaseInstance(
            self, f"{base_name}-db",
            multi_az=True,  # Enable multi-AZ deployment
            engine=rds.DatabaseInstanceEngine.postgres(
                version=rds.PostgresEngineVersion.VER_15
            ),
            instance_type=ec2.InstanceType.of(
                ec2.InstanceClass.BURSTABLE3,
                ec2.InstanceSize.MICRO,
            ),
            allocated_storage=20,
            max_allocated_storage=100,
            delete_automated_backups=True,
            database_name="backenddb",
            backup_retention=Duration.days(0),
            vpc=backend_vpc,
            credentials=rds.Credentials.from_secret(backend_db_creds),
            security_groups=[rds_security_group],
            publicly_accessible=True,
            port=5432,
            vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC)
        )

        backend_db_proxy = rds.DatabaseProxy(
            self, 
            f"{base_name}-db-proxy",
            proxy_target=rds.ProxyTarget.from_instance(backend_db),
            vpc=backend_vpc,
            security_groups=[rds_security_group],
            db_proxy_name=f"{base_name}-db-proxy",
            debug_logging=False,
            secrets=[backend_db.secret],
            require_tls=True,
            vpc_subnets = ec2.SubnetSelection(subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS)
        )

        # Bidirectional (Lambas/DB_Proxy <---> DB Connection)
        rds_security_group.add_ingress_rule(peer=lambda_security_group, connection=ec2.Port.all_traffic())
        rds_security_group.add_egress_rule(peer=lambda_security_group, connection=ec2.Port.all_traffic())

        # Recursive bidirectional (Lambas/DB_Proxy <---> Lambas/DB_Proxy)
        lambda_security_group.add_ingress_rule(peer=lambda_security_group, connection=ec2.Port.all_traffic())
        lambda_security_group.add_egress_rule(peer=lambda_security_group, connection=ec2.Port.all_traffic())

        # To isolate RDS from outside world comment the following
        rds_security_group.add_ingress_rule(peer=ec2.Peer.ipv4('0.0.0.0/0'), connection=ec2.Port.all_traffic())
        rds_security_group.add_egress_rule(peer=ec2.Peer.ipv4('0.0.0.0/0'), connection=ec2.Port.all_traffic())

        # Declare security group
        ec2_security_group = ec2.SecurityGroup(self, f"{base_name}-ec2-security-group",
            vpc=backend_vpc,
            description="Security group for EC2 instance",
            allow_all_outbound=True  # Allow all outbound traffic
        )

        # Allow inbound SSH traffic from a specific IP address
        ec2_security_group.add_ingress_rule(peer=ec2.Peer.ipv4('0.0.0.0/0'), connection=ec2.Port.tcp(22), description="Allow SSH access from specific IP")
        ec2_security_group.add_ingress_rule(peer=ec2.Peer.ipv4('0.0.0.0/0'), connection=ec2.Port.tcp(443), description="Allow inbound traffic for your application")
       
        # Configure inbound and outbound rules in EC2 security group
        ec2_security_group.add_ingress_rule(peer=rds_security_group, connection=ec2.Port.all_traffic(), description="Allow inbound traffic from RDS instances")
        ec2_security_group.add_egress_rule(peer=rds_security_group, connection=ec2.Port.all_traffic(), description="Allow outbound traffic to RDS instances")

        # Configure inbound and outbound rules in RDS security group
        rds_security_group.add_ingress_rule(peer=ec2_security_group, connection=ec2.Port.all_traffic(), description="Allow inbound traffic from EC2 instances")
        rds_security_group.add_egress_rule(peer=ec2_security_group, connection=ec2.Port.all_traffic(), description="Allow outbound traffic to EC2 instances")

        backend_bucket = s3.Bucket(
            self, f"backend-bucket",
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            removal_policy=RemovalPolicy.DESTROY,
            bucket_name=f"{base_name}-bucket",
            auto_delete_objects=True,
        )

        self.backend_bucket_name = backend_bucket.bucket_name

        nest_js_serverless = lambda_.Function(
            self,
            f"{base_name}-nest-js-serverless",
            code=lambda_.Code.from_asset("backend/lambdas/nest_js_serverless"),  # Path to your Lambda code directory
            handler="nest_js_serverless.handler",  # Handler function in your Nest.js application
            runtime=lambd.Runtime.NODEJS_18_X,
            environment={
                'DB_HOST': backend_db_proxy.endpoint,
                'DB_USERNAME': backend_db_creds.secret_value_from_json('username').to_string(),
                'DB_PASSWORD': backend_db_creds.secret_value_from_json('password').to_string(),
                'DB_NAME': f"{base_name}-db",
                "NESTJS_SERVERLESS_BUCKET": backend_bucket.bucket_name
            }
        )

        backend_api_cors = apigateway.CorsOptions(
            allow_origins=apigateway.Cors.ALL_ORIGINS,
            allow_methods=apigateway.Cors.ALL_METHODS,
            allow_headers=["*"],
            expose_headers=["*"],
        )

        api = apigateway.RestApi(
            self,
            "NestJsServerlessApi",
            rest_api_name="NestJsServerlessApi",
            description="API Gateway proxy for Nest.js serverless application",
            default_cors_preflight_options=backend_api_cors
        )

        lambda_integration = apigateway.LambdaIntegration(
            nest_js_serverless,
            proxy=True,
            integration_responses=[{
                'statusCode': '200',
                'responseParameters': {
                    'method.response.header.Content-Type': "'application/json'",
                }
            }]
        )

        #authorized_api_method_options = apigateway.MethodOptions(authorizer=user_pool_authorizer)


        api.root.add_resource("nest-js-serverless").add_proxy(
            any_method=True,
            default_integration=lambda_integration,
            # default_method_options=authorized_api_method_options
        )


        # ------------------------------------------#
        #                   LAMBDAS                 #
        # ------------------------------------------#


        '''
        backend_layer = lambd_experimental.PythonLayerVersion(
            self,
            f"{base_name}-layer",
            layer_version_name=f"{base_name}-layer",
            entry="backend/layer",
            compatible_runtimes=[lambd.Runtime.PYTHON_3_10]
        )

        db_bootstrap = lambd.Function(
            scope=self,
            function_name=f"{base_name}-db-bootstrap",
            id=f"{base_name}-db-bootstrap",
            code=lambd.Code.from_asset("backend/lambdas/db_bootstrap"),
            handler="db_bootstrap.handler",
            layers=[params.layer_lambda, backend_layer],
            environment=params.base_environment,
            runtime=lambd.Runtime.PYTHON_3_10,
            timeout=Duration.seconds(900),
            vpc=backend_vpc,
            vpc_subnets = ec2.SubnetSelection(subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS),
            security_groups=[lambda_security_group],
            allow_public_subnet=True
        )

        syncronizer = lambd.Function(
            scope=self,
            function_name=f"{base_name}-syncronizer",
            id=f"{base_name}-syncronizer",
            code=lambd.Code.from_asset("backend/lambdas/syncronizer"),
            handler="syncronizer.handler",
            layers=[params.layer_lambda, backend_layer],
            environment=params.base_environment,
            runtime=lambd.Runtime.PYTHON_3_10,
            timeout=Duration.seconds(900),
            vpc=backend_vpc,
            vpc_subnets = ec2.SubnetSelection(subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS),
            security_groups=[lambda_security_group],
            allow_public_subnet=True
        )
        '''



        # [[ API lambdas ]]

        '''
        recipes = lambd.Function(
            scope=self,
            function_name=f"{base_name}-recipes",
            id=f"{base_name}-recipes",
            code=lambd.Code.from_asset("backend/api/recipes"),
            handler="recipes.handler",
            layers=[params.layer_lambda, backend_layer],
            environment=params.base_environment,
            runtime=lambd.Runtime.PYTHON_3_10,
            vpc=backend_vpc,
            security_groups=[lambda_security_group]
        )
        '''

        # ------------------------------------------#
        #                 SCRAP API                 #
        # ------------------------------------------#


        '''


        user_pool_authorizer = apigateway.CognitoUserPoolsAuthorizer(
            self, f"{base_name}-authorizer",
            cognito_user_pools=[params.user_pool],
            authorizer_name=f"{base_name}-authorizer",
            identity_source=apigateway.IdentitySource.header("Authorization"),
            results_cache_ttl=Duration.seconds(0),
        )

        authorized_api_method_options = apigateway.MethodOptions(authorizer=user_pool_authorizer)

        # CORS work only without proxy integration, otherwise the CORS are managed by the lambda
        backend_api_cors = apigateway.CorsOptions(
            allow_origins=apigateway.Cors.ALL_ORIGINS,
            allow_methods=apigateway.Cors.ALL_METHODS,
            allow_headers=["*"],
            expose_headers=["*"],
        )

        backend_api = apigateway.RestApi(
            self,
            f"{base_name}-gateway",
            deploy_options=apigateway.StageOptions(stage_name=params.stage),
            rest_api_name=f"{base_name}-gateway",
            default_cors_preflight_options=backend_api_cors,
        )


        backend_api.root.add_resource("recipes").add_proxy(
            any_method=True,
            default_integration=apigateway.LambdaIntegration(recipes),
            default_method_options=authorized_api_method_options
        )
        
        '''

        '''

        '''

        
















        '''
        backend_serverless_cluster = rds.DatabaseCluster(
            self,
            f'{base_name}-backend-db-serverless-cluster',
            engine=rds.DatabaseClusterEngine.aurora_postgres(version=rds.AuroraPostgresEngineVersion.VER_15_2),
            serverless_v2_max_capacity=1,
            serverless_v2_min_capacity=0.5,
            credentials=rds.Credentials.from_secret(backend_db_creds),
            default_database_name="mydb",
            removal_policy=RemovalPolicy.DESTROY,
            vpc=vpc,
            vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PRIVATE_WITH_EGRESS),
            writer=rds.ClusterInstance.serverless_v2(f'{base_name}-backend-db-writer'),
            readers=[
                rds.ClusterInstance.serverless_v2(f'{base_name}-backend-db-reader',scale_with_writer=True),
            ]
        )
        '''


        '''
        triggers.Trigger(
            self,
            "db_bootstrap_trigger",
            handler=db_bootstrap,
            execute_after=[backend_serverless_cluster],
            #execute_on_handler_change=False,
        )
        '''




















        # ------------------------------------------#
        #          POLICIES & VARIABLES             #
        # ------------------------------------------#

        enum_perm_to_policy_and_env = {}

        # COGNITO ---------------------------------------------
        # IAM policy to allow access to the Ego User Pool

        user_pool_read_policy = iam.Policy(
            self,
            f"{base_name}-cognito-read-policy",
            statements=[
                iam.PolicyStatement(
                    actions=[
                        "cognito-idp:AdminGetUser",
                    ],
                    resources=["*"],
                )
            ],
        )

        user_pool_write_policy = iam.Policy(
            self,
            f"{base_name}-cognito-write-policy",
            statements=[
                iam.PolicyStatement(
                    actions=[
                        "cognito-idp:AdminCreateUser",
                        "cognito-idp:AdminDeleteUser",
                        "cognito-idp:AdminUpdateUserAttributes",
                        "cognito-idp:AdminEnableUser",
                        "cognito-idp:AdminDisableUser",
                        "cognito-idp:AdminUserGlobalSignOut",
                    ],
                    resources=["*"],
                )
            ],
        )

        user_pool_change_status_policy = iam.Policy(
            self,
            f"{base_name}-cognito-status-policy",
            statements=[
                iam.PolicyStatement(
                    actions=[
                        "cognito-idp:AdminEnableUser",
                        "cognito-idp:AdminDisableUser",
                    ],
                    resources=["*"],
                )
            ],
        )

        user_pool_env = {
            "COGNITO_USER_POOL_ID": params.user_pool.user_pool_id,
            "COGNITO_DOMAIN": params.user_pool_domain.domain_name,
            "COGNITO_USER_POOL_CLIENT_ID": params.user_pool_client.user_pool_client_id,
            "COGNITO_USER_POOL_CLIENT_NAME": params.user_pool_client.user_pool_client_name,
        }

        enum_perm_to_policy_and_env[Permission.READ_USERPOOL] = (
            user_pool_read_policy,
            user_pool_env,
        )

        enum_perm_to_policy_and_env[Permission.WRITE_USERPOOL] = (
            user_pool_write_policy,
            user_pool_env,
        )

        enum_perm_to_policy_and_env[Permission.ADMIN_ACCESS_USERPOOL] = (
            user_pool_change_status_policy,
            user_pool_env,
        )


        # DB PROXY WRITE PERM ----------------------------------------------------
        # IAM policy to access DB Proxy



        backend_db_policy_env = {
            "SCRAP_DB_CREDS_SECRET_ARN": backend_db_creds.secret_arn,
            "SCRAP_DB_PROXY_ENDPOINT": backend_db_proxy.endpoint,
        }
        

        backend_db_proxy_policy = iam.Policy(
            self,
            "{base_name}-backend-db-write-permissions-policy",
            statements=[
                iam.PolicyStatement(
                    actions=[ 
                        # Perms to read creds
                        "secretsmanager:GetSecretValue",
                        "secretsmanager:DescribeSecret",

                        # Perms to write on db
                        "rds-data:ExecuteStatement",
                        "rds-data:BatchExecuteStatement",
                        "rds-data:BeginTransaction",
                        "rds-data:CommitTransaction",
                        "rds-data:RollbackTransaction",
                        "rds-db:Connect"
                    ],
                    resources=[
                        backend_db_creds.secret_arn,
                        backend_db_proxy.db_proxy_arn,
                    ],
                )
            ],
        )

        enum_perm_to_policy_and_env[Permission.RW_PERM_SCRAP_DB] = (
            backend_db_proxy_policy,
            backend_db_policy_env,
        )

        lambda_perms_association = {
            #db_bootstrap: [Permission.RW_PERM_SCRAP_DB],
            #syncronizer: [Permission.RW_PERM_SCRAP_DB],
            #recipes: [Permission.RW_PERM_SCRAP_DB]
        }

        for lamdba, perms in lambda_perms_association.items():
            for enum_perm in perms:
                policy, env = enum_perm_to_policy_and_env[enum_perm]

                lamdba.role.attach_inline_policy(policy)

                # Add environment variables to the lambda env
                for key, value in env.items():
                    lamdba.add_environment(key, value)

        











