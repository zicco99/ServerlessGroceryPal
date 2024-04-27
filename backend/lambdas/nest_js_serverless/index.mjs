import { S3 } from 'aws-sdk';
import { NestFactory } from '@nestjs/core';
import AdmZip from 'adm-zip';
import { exec } from 'child_process';

const s3 = new S3();

// Initialize Nest.js application outside the handler function to reuse resources
let nestApp = null;

async function initializeNestApp() {
    try {
        // Download 'dist' folder from S3
        const { Body } = await s3.getObject({ Bucket: process.env.NESTJS_SERVERLESS_BUCKET, Key: 'nestjs-backend.zip' }).promise();

        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        // Install dependencies
        console.log('Installing dependencies...');
        await new Promise((resolve, reject) => {
            exec('npm install --omit=dev', { cwd: '/tmp/nestjs' }, (error, stdout, stderr) => {
                if (error) {
                    console.error('Error installing dependencies:', error);
                    reject(error);
                } else {
                    console.log('Dependencies installed successfully!');
                    resolve();
                }
            });
        });

        // Import and initialize Nest.js application
        const { default: AppModule } = require('/tmp/nestjs/app.module');
        nestApp = await NestFactory.create(AppModule);
        await nestApp.init();
    } catch (error) {
        console.error('Error initializing Nest.js application:', error);
        throw error;
    }
}

export async function handler(event, context) {
    try {
        if (!nestApp) {
            await initializeNestApp();
        }

        const handler = nestApp.getHttpAdapter().getInstance();
        const response = await handler(event, context);

        return response;
    } catch (error) {
        console.error('Error handling request:', error);

        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Internal Server Error' }),
        };
    }
}
