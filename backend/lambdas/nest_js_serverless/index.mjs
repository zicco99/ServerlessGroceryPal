// Adjusted import statements
import { S3 } from 'aws-sdk';
import { NestFactory } from '@nestjs/core';
import { promisify } from 'util';
import { exec } from 'child_process';

// Lambda handler function
export async function handler(event, context) {
    try {
        const AdmZip = require('adm-zip');
        const { ValidationPipe } = require('@nestjs/common');
        const { ClassSerializerInterceptor } = require('@nestjs/common/serializer');

        const s3Bucket = process.env.NESTJS_SERVERLESS_BUCKET;
        const s3Key = "nestjs-backend.zip";

        if (!s3Bucket || !s3Key) {
            throw new Error('S3_BUCKET and S3_KEY environment variables are required.');
        }

        // Download NestJS application ZIP file from S3
        const { Body } = await s3.getObject({ Bucket: s3Bucket, Key: s3Key }).promise();

        // Extract NestJS application to temporary directory
        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        // Install dependencies and start the application
        const execPromise = promisify(exec);
        await execPromise('npm install --production', { cwd: '/tmp/nestjs' });
        const { default: AppModule } = require('/tmp/nestjs/app.module');
        const nestApp = await NestFactory.create(AppModule);
        await nestApp.init();

        // Handle HTTP requests
        const handler = nestApp.getHttpAdapter().getInstance();

        // Proxy incoming request to NestJS application
        const response = await handler(event, context);

        return response;
    } catch (error) {
        // Log and handle errors
        console.error('Error:', error);

        // Return error response
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
}
