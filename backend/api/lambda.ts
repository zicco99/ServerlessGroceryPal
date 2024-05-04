import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure as serverlessExpress } from '@vendia/serverless-express';

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
  server = server ?? (await bootstrap());

  return server(event, context, callback);
};