from typing import Any, Dict, Optional
from pydantic import BaseModel, validator

from backend.layer.models.dynamo.dynamo import User

#####################################
# API validators ###############
#####################################

# PAYLOADS--------------------------------
class GenerateTokenPayload(BaseModel):
    token_type: str

    @validator('token_type', pre=True, always=True)
    def check_token(cls, value):
        if(not (value in [enum.value for enum in User.TokenTypeEnum])):
            raise ValueError(f"Invalid token_type")
        return value

