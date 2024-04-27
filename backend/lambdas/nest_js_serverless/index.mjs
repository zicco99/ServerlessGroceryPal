import { S3 } from 'aws-sdk';
import { NestFactory } from '@nestjs/core';
import AdmZip from 'adm-zip';
import { exec } from 'child_process';
import { promisify } from 'util';

const s3 = new S3();
const execPromise = promisify(exec);

let nestApp = null;

async function initializeNestApp() {
    try {
        const { Body } = await s3.getObject({ Bucket: process.env.NESTJS_SERVERLESS_BUCKET, Key: 'nestjs-backend.zip' }).promise();

        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        console.log('Installing dependencies...');
        try {
            const { stdout, stderr } = await execPromise('npm install --omit=dev', { cwd: '/tmp/nestjs/backend/api' });
            console.log('Dependencies installed successfully!', stdout);
            console.error('Installation error:', stderr);
        } catch (error) {
            console.error('Error installing dependencies:', error);
            throw error;
        }

        const { default: AppModule } = require('/tmp/nestjs/backend/api/dist/app.module');
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
