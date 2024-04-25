const { S3 } = require('aws-sdk');
const { NestFactory } = require('@nestjs/core');
const { default: AdmZip } = require('adm-zip');
const { promisify } = require('util');
const { exec } = require('child_process');

// Create S3 client
const s3 = new S3();

// Promisify child_process.exec function
const execPromise = promisify(exec);

// Lambda handler function
exports.handler = async (event, context) => {
    try {
        const s3Bucket = process.env.NESTJS_SERVERLESS_BUCKET;
        const s3Key = "nestjs-backend.zip";

        if (!s3Bucket || !s3Key) {
            throw new Error('S3_BUCKET and S3_KEY environment variables are required.');
        }

        const { Body } = await s3.getObject({ Bucket: s3Bucket, Key: s3Key }).promise();

        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        await execPromise('npm install', { cwd: '/tmp/nestjs' });
        await execPromise('npm start', { cwd: '/tmp/nestjs' });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'NestJS application started successfully' }),
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