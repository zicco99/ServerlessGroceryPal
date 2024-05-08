import { Callback, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  return 'Hello from Lambda!';
};