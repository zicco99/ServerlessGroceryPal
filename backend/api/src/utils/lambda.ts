import { APIGatewayProxyResult } from 'aws-lambda';

enum LambdaResponseCode {
    OK = 200,
    BAD_REQUEST = 400,
    NOT_FOUND = 404,
    INTERNAL_SERVER_ERROR = 500
}

class LambdaResponse implements APIGatewayProxyResult {
    statusCode: number;
    headers?: { [header: string]: boolean | number | string };
    multiValueHeaders?: { [header: string]: (boolean | number | string)[] };
    body: string;
    isBase64Encoded: boolean;

    constructor(
        statusCode: LambdaResponseCode = LambdaResponseCode.OK,
        result: any = {},
        isBase64Encoded: boolean = false,
        headers?: Record<string, string>
    ) {
        const defaultHeaders: Record<string, string> = {
            "Content-Type": "application/json",
            "aws-lambda-status-msg": LambdaResponseCode[statusCode],
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT",
            "Access-Control-Expose-Headers": "*"
        };

        this.statusCode = statusCode;
        this.body = isBase64Encoded ? result : JSON.stringify(result);
        this.isBase64Encoded = isBase64Encoded;
        this.headers = headers ? { ...defaultHeaders, ...headers } : defaultHeaders;
    }

    hasError(): boolean {
        return this.statusCode >= 400;
    }

    equals(other: LambdaResponse): boolean {
        if (!(other instanceof LambdaResponse)) {
            return false;
        }

        return this.statusCode === other.statusCode;
    }
}

export { LambdaResponse, LambdaResponseCode };
