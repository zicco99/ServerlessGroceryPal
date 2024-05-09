import { Callback, Context, Handler } from 'aws-lambda';

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Hello from Lambda!' }),
  };
  return response;
};
