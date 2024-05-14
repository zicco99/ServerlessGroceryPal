import { Handler, Context, Callback } from 'aws-lambda';
import { PrismaClient, Recipe } from './prisma/client';
import { Lambda } from 'aws-sdk';
import axios from 'axios';
import * as cheerio from 'cheerio';

const BASE_URL = 'https://www.giallozafferano.it/ricette-cat/';
let db_client: PrismaClient | null = null;


const save_on_db = (recipe: Recipe) => {
  db_client?.recipe.create({ data: recipe });
}

const split_on_multiple_invocations = async (context: Context): Promise<void> => {
  const linkList: string = 'https://www.giallozafferano.it/ricette-cat';

  try {
    const response = await axios.get(linkList);
    const htmlContent: string = response.data;
    const $ = cheerio.load(htmlContent);

    const numberOfPages: number = parseInt($('div.disabled.total-pages').text());

    console.log('Number of pages:', numberOfPages);

    for (let i = 1; i <= numberOfPages; i++) {
      const lambdaClient = new Lambda();
      const params = {
        FunctionName: context.functionName,
        InvocationType: 'Event',
        Payload: JSON.stringify({'n_page': i}),
      };
      await lambdaClient.invoke(params).promise();
    }

    console.log('Scraping completed successfully for all pages.');
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}


const scrap_recipe = async (context: Context, url: string): Promise<void> => {
    console.log('Scraping recipe:', url);
}

export const handler: Handler = async (
  event: any,
  context: Context,
  callback: Callback,
) => {
  if (!db_client) {
    db_client = new PrismaClient();
    await db_client.$connect();
  }

  if (!event.n_page) {
    await split_on_multiple_invocations(context);
    return;
  } else {
    const recipeLinks : string[] = [];

    $('.gz-title a').each((index: any, element: any) => {
      const recipeLink = $(element).attr('href');
      if(recipeLink) {
        recipeLinks.push(recipeLink);
      }
    });

    for (const link of recipeLinks) {
      const recipe = await scrap_recipe(context,link);
    }
  }

  const response = {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: 'Syncronization completed!' }),
  };
  return callback(null, response);
};

