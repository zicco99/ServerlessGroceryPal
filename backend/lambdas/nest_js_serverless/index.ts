import { S3 } from 'aws-sdk';
import AdmZip from 'adm-zip';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import express from 'express';

const s3 = new S3();

let app = null;

const initializeNestApp = async () => {
    try {
        // Specify your S3 bucket name and the key of the Nest.js application zip file
        const bucketName = process.env.S3_BUCKET_NAME;
        const key = process.env.S3_KEY;

        if (!bucketName || !key) {
            throw new Error('S3_BUCKET_NAME and S3_KEY environment variables are required.');
        }

        // Download the zip file from S3
        const params = { Bucket: bucketName, Key: key };
        const { Body } = await s3.getObject(params).promise();

        // Extract the zip file
        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        // Import the AppModule and initialize the Nest.js application
        const { AppModule } = require('/tmp/nestjs/dist/app.module');
        const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(express()));

        app = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });

        console.log('Nest.js application initialized successfully.');
    } catch (error) {
        console.error('Error initializing Nest.js application:', error);
        throw error;
    }
};

export const handler = async (event: any, context: Context) => {
    if (!app) {
        await initializeNestApp();
    }
    return app(event, context);
};
