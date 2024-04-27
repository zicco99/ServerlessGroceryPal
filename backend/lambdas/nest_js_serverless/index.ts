import { S3 } from 'aws-sdk';
import AdmZip from 'adm-zip';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import express from 'express';

const s3 = new S3();

let app = null;

const initializeNestApp = async () => {
    try {
        const params = { Bucket: process.env.NESTJS_SERVERLESS_BUCKET || "", Key: 'nestjs-backend.zip' };
        const { Body } = await s3.getObject(params).promise();

        const zip = new AdmZip(Body);
        zip.extractAllTo('/tmp/nestjs');

        //Move the package.json to the dist folder and install the dependencies
        const { execSync } = require('child_process');
        execSync("mv /tmp/nestjs/backend/api/package.json /tmp/nestjs/backend/api/dist", { stdio: 'inherit' });
        execSync('npm install --prefix /tmp/nestjs/backend/api/dist', { stdio: 'inherit' });

        const { AppModule } = require('/tmp/nestjs/backend/api/dist/app.module');
        const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(express()));

        app = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });

        console.log('Nest.js application initialized successfully.');
    } catch (error) {
        console.error('Error initializing Nest.js application:', error);
        throw error;
    }
};

export const handler = async (event: any, context: any) => {
    if (!app) {
        await initializeNestApp();
    }
    return app(event, context);
};
