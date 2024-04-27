import { S3 } from 'aws-sdk';
import { NestFactory } from '@nestjs/core';
import AdmZip from 'adm-zip';
import { promisify } from 'util';
import { exec } from 'child_process';

// Create S3 client
const s3 = new S3();

// Promisify child_process.exec function
const execPromise = promisify(exec);

// Lambda handler function
export async function handler(event, context) {
    try {
        const s3Bucket = process.env.NESTJS_SERVERLESS_BUCKET;
        const s3Key = "nestjs-backend.zip";

        if (!s3Bucket || !s3Key) {
            throw new Error('S3_BUCKET and S3_KEY environment variables are required.');
        }

        console.log(`Retrieving ${s3Bucket}/${s3Key} from S3...`);
        const { Body } = await s3.getObject({ Bucket: s3Bucket, Key: s3Key }).promise();

        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        console.log('Installing dependencies...');
        const { stdout, stderr } = await execPromise('npm install --production', { cwd: '/tmp/nestjs' });
        console.log('Installation output:', stdout);
        console.error('Installation error:', stderr);

        const { default: AppModule } = require('/tmp/nestjs/app.module');

        const nestApp = await NestFactory.create(AppModule);
        await nestApp.init();

        console.log('NestJS initialized!');

        const handler = nestApp.getHttpAdapter().getInstance();
        const response = await handler(event, context);

        console.log('NestJS response:', response);

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
