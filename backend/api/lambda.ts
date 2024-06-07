import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { SecretsManager } from 'aws-sdk';
import { configure as serverlessExpress } from '@vendia/serverless-express';


const secretsManager = new SecretsManager({ region: process.env.REGION });

async function set_connection_string(): Promise<void> {
  const params = {
      SecretId: process.env.DB_SECRET_ARN
  };
  const data = await secretsManager.getSecretValue(params).promise();
  let { password, username, dbname, port, host } = JSON.parse(data.SecretString);
  process.env.DATABASE_URL = `postgresql://${username}:${password}@${host}:${port}/${dbname}`;
}

let server: Handler;

async function bootstrap(): Promise<Handler> {
    const nestApp = await NestFactory.create(AppModule);
    await nestApp.init();
    
    const expressApp = nestApp.getHttpAdapter().getInstance();

    return serverlessExpress({ app: expressApp });
};


export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  await set_connection_string();
  
  server = server ?? (await bootstrap());

  return server(event, context, callback);
};
