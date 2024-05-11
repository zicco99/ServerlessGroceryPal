import { Callback, Context, Handler } from 'aws-lambda';
import { PrismaClient } from './prisma/client';

let db_client : PrismaClient | null = null;

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!db_client) {
    db_client = new PrismaClient();
    await db_client.$connect();
  }
  console.log('Received event:', JSON.stringify(event, null, 4));
  console.log(event)
  







  console.log('Received event:', JSON.stringify(event, null, 2));

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
  return response;
};

