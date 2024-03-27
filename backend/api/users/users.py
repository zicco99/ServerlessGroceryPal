# Reduces idle times
# Shares resources, same runtime
# Ideal for low traffic
# Reduces lambda cold starts
# Implements the required REST API for Refine (Data Provider 'https://refine.dev/docs/api-reference/core/providers/data-provider/')
from aws_lambda_powertools.event_handler import APIGatewayRestResolver
from aws_lambda_powertools.utilities.typing import LambdaContext
from endpoint_handlers.generate_token import GenerateTokenHandler
from endpoint_handlers.hi import HiHandler
from lib.logger import logger

app = APIGatewayRestResolver()
generate_token_handler = GenerateTokenHandler(app)
hi_handler = HiHandler(app)

# Dev secret endpoint
@app.post("/users/generate_token")
def generate_token():
    return generate_token_handler.execute()

@app.post("/users/hi")
def hi():
    return hi_handler.execute()


def handler(event, context: LambdaContext):
    logger.info(event)
    return app.resolve(event, context)
