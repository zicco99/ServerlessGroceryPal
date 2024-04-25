const { S3 } = require('aws-sdk');

// Create S3 client
const s3 = new S3();

// Lambda handler function
exports.handler = async (event, context) => {
    try {
        // Load NestJS application from S3
        const { Body } = await s3.getObject({
            Bucket: '',
            Key: 'path/to/your/nestjs-app.zip'
        }).promise();

        // Create NestJS application from loaded code
        const { NestFactory } = require('@nestjs/core');
        const { AppModule } = require('./dist/main'); // Adjust path to entry point of your NestJS application
        const app = await NestFactory.createApplicationContext(AppModule);

        // Handle incoming HTTP request
        const result = await app.handle(event);

        // Return response
        return {
            statusCode: result.getStatus(),
            body: JSON.stringify(result.getResponse()),
            headers: result.getHeaders(),
        };
    } catch (error) {
        // Handle errors
        console.error('Error:', error);

        // Return error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
};
