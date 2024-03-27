from aws_cdk import NestedStack, RemovalPolicy
from aws_cdk import (
    aws_s3 as s3,
    aws_cloudfront as cloudfront,
    aws_lambda as lambd,
    aws_cloudfront_origins as origins,
    aws_lambda_python_alpha as lambd_experimental,
    Stage
)

from constructs import Construct

class FrontendStackParams:
    def __init__(self, stage: Stage, base_environment: dict, layer_lambda: lambd.LayerVersion):
        self.stage = stage
        self.base_environment = base_environment
        self.layer_lambda = layer_lambda

class FrontendStackOutputs:
    def __init__(self, distribution_url, frontend_bucket_name, distribution_id):
        self.distribution_url = distribution_url
        self.frontend_bucket_name = frontend_bucket_name
        self.distribution_id = distribution_id

class FrontendStack(NestedStack):

    def get_outputs(self) -> FrontendStackOutputs:
        return FrontendStackOutputs(frontend_bucket_name=self.frontend_bucket_name,
                                    distribution_url=f"https://{self.distribution_domain_name}",
                                    distribution_id=self.distribution_id,
                                    
                                    )
    
    def __init__(self, scope: Construct, id: str, params: FrontendStackParams, **kwargs):
        super().__init__(scope, id, **kwargs)

        base_name = f"webapp-frontend-{params.stage}"

        # S3 Bucket
        webapp_bucket = s3.Bucket(
            self, f"{base_name}-frontend-bucket",
            block_public_access=s3.BlockPublicAccess.BLOCK_ALL,
            removal_policy=RemovalPolicy.DESTROY,
            bucket_name=f"{base_name}-frontend-bucket",
            auto_delete_objects=True,
        )

        self.frontend_bucket_name = webapp_bucket.bucket_name
        
        # CloudFront Origin Access Identity
        origin_access_identity = cloudfront.OriginAccessIdentity(
            self, "OriginAccessIdentity",
            comment="Origin access identity to give permission to CloudFront to read the contents of the bucket"
        )

        # Grant read permission to the bucket
        webapp_bucket.grant_read(origin_access_identity)

        '''
        distribution_cnames = {
            Stage.DEV: "",
            Stage.STAGING: "",
            Stage.PROD: "",
        }
        '''

        '''
        distribution_certificate_arns = {
            Stage.DEV: "",
            Stage.STAGING: "",
            Stage.PROD: "",
        }
        '''


        # CloudFront Distribution
        distribution: cloudfront.Distribution = cloudfront.Distribution(
            self,
            f"{base_name}-cf-distribution",
            default_behavior=cloudfront.BehaviorOptions(
                origin=origins.S3Origin(
                    bucket=webapp_bucket,
                    origin_access_identity=origin_access_identity,
                ),
                allowed_methods=cloudfront.AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
                viewer_protocol_policy=cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
            ),
            #domain_names=[distribution_cnames.get(stage)],
            #certificate=acm.Certificate.from_certificate_arn(
            #    self,
            #    f"{self.__generate_resource_name('cf-cert')}",
            #    distribution_certificate_arns.get(stage),
            #),
            default_root_object="index.html",
            #web_acl_id=waf_arn,
            error_responses=[
                cloudfront.ErrorResponse(
                    http_status=403,
                    response_page_path="/index.html",
                    response_http_status=200,
                ),
                cloudfront.ErrorResponse(
                    http_status=404,
                    response_page_path="/index.html",
                    response_http_status=200,
                ),
            ],
        )

        #distribution_url = f"https://{distribution_cnames.get(stage)}"

        '''
        route53_domains = {
            Stage.DEV: "",
            Stage.STAGING: "",
            Stage.PROD: "",
        }

        route53.ARecord(
            self,
            f"{self.__generate_resource_name('cf-a-record')}",
            zone=route53.HostedZone.from_lookup(
                self,
                f"{self.__generate_resource_name('hosted-zone')}",
                domain_name=route53_domains.get(stage),
            ),
            target=route53.RecordTarget.from_alias(
                route53_targets.CloudFrontTarget(distribution)
            ),
            record_name=distribution_cnames.get(stage),
        )

         '''

        self.webapp_bucket = webapp_bucket
        self.distribution_domain_name = distribution.distribution_domain_name
        self.distribution_id = distribution.distribution_id