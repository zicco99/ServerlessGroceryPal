import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { configure as serverlessExpress } from '@vendia/serverless-express';
import { execSync } from 'child_process';

let server: Handler;

function db_migrate() {
  execSync('npm install -g @prisma/cli');
  execSync('npx prisma migrate deploy');
}

async function bootstrap(): Promise<Handler> {
    db_migrate();
    
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