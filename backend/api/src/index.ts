import { APIGatewayProxyHandler } from 'aws-lambda';
import { S3 } from 'aws-sdk';
import { NestFactory } from '@nestjs/core';
import { Server } from 'http';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as awsServerlessExpress from 'aws-serverless-express';
import express from 'express';
import fs from 'fs';
import AdmZip from 'adm-zip';

let cachedServer: Server;

const s3 = new S3();

const bootstrapServer = async (): Promise<Server> => {
  const expressApp = express();
  const adapter = new ExpressAdapter(expressApp);
  const nestjsPath = '/tmp/nestjs/backend/api/dist/app.module'; // Define the path to AppModule
  console.log(`Checking if AppModule exists at: ${nestjsPath}`);

  if (!fs.existsSync(nestjsPath)) {
      console.log('Downloading Nest.js application...');
      const params = { Bucket: process.env.NESTJS_SERVERLESS_BUCKET || "", Key: 'nestjs-backend.zip' };
      const { Body } = await s3.getObject(params).promise();

      const zip = new AdmZip(Body);
      zip.extractAllTo('/tmp/nestjs');
  }

  process.env.NODE_PATH = '/tmp/nestjs/backend/api/dist/node_modules';
  require('module').Module._initPaths();

  console.log('Nest.js application extracted successfully.');

  console.log('Attempting to import AppModule...');
  const { AppModule } = require(nestjsPath);
  console.log('AppModule imported successfully.');

  const app = await NestFactory.create(AppModule, adapter);
  app.enableCors();
  await app.init();
  return awsServerlessExpress.createServer(expressApp);
}

export const handler: APIGatewayProxyHandler = async (event, context) => {
  if (!cachedServer) {
    cachedServer = await bootstrapServer()
  }
  return awsServerlessExpress.proxy(cachedServer, event, context, 'PROMISE')
      .promise;
};
