import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { SecretsManager } from 'aws-sdk';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { Logger } from '@nestjs/common';

const secretsManager = new SecretsManager({ region: process.env.REGION });

let server: Handler;
let dbSecret: { password: string; username: string; dbname: string; port: number; host: string } | null = null;

async function setConnectionString(): Promise<void> {
    if (!dbSecret) {
        const params = {
            SecretId: process.env.DB_SECRET_ARN,
        };
        try {
            const data = await secretsManager.getSecretValue(params).promise();
            dbSecret = JSON.parse(data.SecretString);
            process.env.DATABASE_URL = `postgresql://${dbSecret.username}:${dbSecret.password}@${dbSecret.host}:${dbSecret.port}/${dbSecret.dbname}`;
        } catch (error) {
            console.error('Error fetching secrets:', error);
            throw new Error('Failed to fetch database credentials');
        }
    } else {
        process.env.DATABASE_URL = `postgresql://${dbSecret.username}:${dbSecret.password}@${dbSecret.host}:${dbSecret.port}/${dbSecret.dbname}`;
    }
}

async function bootstrap(): Promise<Handler> {
    const nestApp = await NestFactory.create(AppModule, { logger: new Logger() });
    await nestApp.init();
    
    const expressApp = nestApp.getHttpAdapter().getInstance();

    return serverlessExpress({ app: expressApp });
}

export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
    await setConnectionString();

    server = server ?? (await bootstrap());

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'OPTIONS,POST,GET,PUT',
        'Access-Control-Expose-Headers': '*',
    };

    const response = await server(event, context, callback);

    if (response.headers) {
        response.headers = { ...response.headers, ...headers };
    } else {
        response.headers = headers;
    }

    console.log('Response:', JSON.stringify(response, null, 2));

    return response;
};
