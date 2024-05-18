import { Handler, Context, Callback } from 'aws-lambda';
import { PrismaClient } from './prisma/client';
import axios from 'axios';
import cheerio from 'cheerio';

import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda';
import { time } from 'console';

const BASE_URL = 'https://www.giallozafferano.it/ricette-cat/';
let db_client: PrismaClient | null = null;
const lambdaClient = new LambdaClient({});

const scrapRecipe = async (url: string): Promise<void> => {
    try {
        console.log('Scraping recipe:', url);
        // Scraping logic for recipe details
    } catch (error) {
        console.error('Error scraping recipe:', error);
    }
};
const parallelizeScraping = async (context: Context, n_page?: number): Promise<void> => {
    try {
        if (!n_page) {
            console.log('Parsing total number of pages...');
            // Fetch total number of pages
            const response = await axios.get(BASE_URL);
            const htmlContent = response.data;
            const $ = cheerio.load(htmlContent);

            const totalPagesText = $('span.disabled.total-pages').text().trim();
            const numberOfPages = parseInt(totalPagesText);

            // Invoke Lambda functions in parallel to scrape multiple pages simultaneously
            console.log("to then parallelize a numer of readers = n. of pages = ", numberOfPages);
            const promises = Array.from({ length: numberOfPages - 1 }, async (undefined, i) => {
                await new Promise(resolve => setTimeout(resolve, Math.random() * 10000));
                const params = {
                    FunctionName: context.functionName,
                    Payload: JSON.stringify({ 'n_page': i + 1 }),
                };
                const command = new InvokeCommand(params);
                return lambdaClient.send(command);
            });

            await Promise.all(promises);

        } else {
            console.log('Scraping page:', n_page);
            // Scraping logic done by each recursive invocation
            const response = await axios.get(`${BASE_URL}${n_page}`);
            const $ = cheerio.load(response.data); // Define $ as CheerioAPI
            const recipeLinks: string[] = [];
            $('.gz-title a').each((index: number, element: any) => { // Use CheerioElement here
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
        throw error; // rethrow the error to be caught by the handler
    }
};


const handler: Handler = async (
    event: { n_page?: number },
    context: Context,
    callback: Callback,
): Promise<void> => {
    if (!db_client) {
        db_client = new PrismaClient();
        await db_client.$connect();
    }

    try {
        await parallelizeScraping(context,event.n_page);
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

