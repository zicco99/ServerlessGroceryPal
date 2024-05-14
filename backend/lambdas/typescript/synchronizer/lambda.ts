import { Handler, Context, Callback } from 'aws-lambda';
import { PrismaClient, Recipe } from './prisma/client';

const Aws = require('aws-sdk');
const axios = require('axios');
const cheerio = require('cheerio');

const BASE_URL = 'https://www.giallozafferano.it/ricette-cat/';
let db_client: PrismaClient | null = null;

const scrapRecipe = async (url: string): Promise<void> => {
    try {
        console.log('Scraping recipe:', url);
        // Scraping logic for recipe details
    } catch (error) {
        console.error('Error scraping recipe:', error);
    }
};

const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
) => {
    if (!db_client) {
        db_client = new PrismaClient();
        await db_client.$connect();
    }

    try {
        if (!event.n_page) {
            // Fetch total number of pages
            const response = await axios.get(BASE_URL);
            const htmlContent: string = response.data;
            const $ = cheerio.load(htmlContent);
        
            const numberOfPages: number = parseInt($('div.disabled.total-pages').text());
        
            console.log('Number of pages:', numberOfPages);

            // Invoke Lambda functions in parallel to scrape multiple pages simultaneously
            await Promise.all([...Array(numberOfPages).keys()].map(async (i) => {
                const lambdaClient = new Aws.Lambda();
                const params = {
                    FunctionName: context.functionName,
                    InvocationType: 'Event',
                    Payload: JSON.stringify({ 'n_page': i + 1 }),
                };
                await lambdaClient.invoke(params).promise();
            }));
        } else {
            // Scraping logic done by each recursive invocation
            const response = await axios.get(`${BASE_URL}${event.n_page}`);
            const $ = cheerio.load(response.data);
            const recipeLinks: string[] = [];
            $('.gz-title a').each((index: any, element: any) => {
                const recipeLink = $(element).attr('href');
                if (recipeLink) {
                    recipeLinks.push(recipeLink);
                }
            });
            await Promise.all(recipeLinks.map(async (link) => {
                await scrapRecipe(link);
            }));
        }
    } catch (error) {
        console.error('Error:', error);
    } finally {
        if (db_client) {
            await db_client.$disconnect();
        }
    }

    const response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: 'Synchronization completed!' }),
    };
    callback(null, response);
};

export { handler };
