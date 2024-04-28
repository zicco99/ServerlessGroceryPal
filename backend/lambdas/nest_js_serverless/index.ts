import { S3 } from 'aws-sdk';
import AdmZip from 'adm-zip';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import serverlessExpress from '@vendia/serverless-express';
import express from 'express';
import { execSync } from 'child_process';
import fs from 'fs';

const s3 = new S3();

let app = null;

const initializeNestApp = async () => {
    try {
        // Check if the Nest.js application has already been extracted
        if (!fs.existsSync('/tmp/nestjs')) {
            console.log('Downloading Nest.js application...');
            const params = { Bucket: process.env.NESTJS_SERVERLESS_BUCKET || "", Key: 'nestjs-backend.zip' };
            const { Body } = await s3.getObject(params).promise();

            const zip = new AdmZip(Body);
            zip.extractAllTo('/tmp/nestjs');
        }

        process.env.NODE_PATH = '/tmp/nestjs/backend/api/dist/node_modules';
        require('module').Module._initPaths();

        console.log('Nest.js application extracted successfully.');

        // Load the AppModule from the extracted directory
        const { AppModule } = require('/tmp/nestjs/backend/api/dist/app.module');
        const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(express()));

        // Create the serverless Express app
        app = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });

        console.log('Nest.js application initialized successfully.');
    } catch (error) {
        console.error('Error initializing Nest.js application:', error);
        throw error;
    }
};

exports.handler = async (event, context) => {
    if (!app) {
        await initializeNestApp();
    }
    return app(event, context); 
};
