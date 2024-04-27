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

        if(!fs.existsSync('/tmp/nestjs')) {
            console.log('Downloading Nest.js application...');
            const params = { Bucket: process.env.NESTJS_SERVERLESS_BUCKET || "", Key: 'nestjs-backend.zip' };
            const { Body } = await s3.getObject(params).promise();

            const zip = new AdmZip(Body);
            zip.extractAllTo('/tmp/nestjs');
        }

        const cacheDir = '/tmp/npm-cache';
        if (!fs.existsSync(cacheDir)) {
            fs.mkdirSync(cacheDir);
        }

        execSync('mv /tmp/nestjs/backend/api/package.json /tmp/nestjs/backend/api/dist/package.json', { stdio: 'inherit' });

        console.log('Nest.js application extracted successfully.');

        process.env.NODE_ENV = 'production';
        execSync('npm install --omit=dev --prefix /tmp/nestjs/backend/api/dist --cache /tmp/npm-cache', { stdio: 'inherit' });

        process.chdir('/tmp/nestjs/backend/api/dist');

        const { AppModule } = require('./app.module');
        const nestApp = await NestFactory.create(AppModule, new ExpressAdapter(express()));

        app = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });

        console.log('Nest.js application initialized successfully.');
    } catch (error) {
        console.error('Error initializing Nest.js application:', error);
        throw error;
    }
};

exports.handler = async (event: any, context: any) => {
    if (!app) {
        await initializeNestApp();
    }
    return app(event, context); 
};

