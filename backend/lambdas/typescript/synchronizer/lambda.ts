import { Handler, Context, Callback } from 'aws-lambda';
import { PrismaClient } from './prisma/client';
import axios from 'axios';
import cheerio from 'cheerio';

import { LambdaClient, InvokeCommand, InvokeCommandInput } from '@aws-sdk/client-lambda';

const BASE_URL = 'https://www.giallozafferano.it/ricette-cat/';
const PAGES_PER_INVOCATION = 1000;
const INVOCATION_RATE_MAX = 10000;
const INVOCATION_RATE_MIN = 5000;
const PAGE_TASK_RATE_MAX = 5000;
const PAGE_TASK_RATE_MIN = 3000;

let db_client: PrismaClient | null = null;
const lambdaClient = new LambdaClient({});


class Task {
    start_page: number;
    step: number;

    constructor(start_page: number, step: number) {
        this.start_page = start_page;
        this.step = step;
    }
}



const scrapRecipe = async (url: string): Promise<void> => {
    try {
        console.log('Scraping recipe:', url);
        // Scraping logic for recipe details
    } catch (error) {
        console.error('Error scraping recipe:', error);
    }
};




const parallelizeScraping = async (context: Context, task?: Task): Promise<void> => {
    try {
        if (!task) {
            console.log("Splitting work between multiple invocations:");
            // Fetch total number of pages
            const response = await axios.get(BASE_URL);
            const htmlContent = response.data;
            const $ = cheerio.load(htmlContent);

            const totalPagesText = $('span.disabled.total-pages').text().trim();
            const numberOfPages = parseInt(totalPagesText);

            // Invoke Lambda functions in parallel to scrape multiple pages simultaneously
            console.log("to then parallelize a numer of readers = n. of pages = ", numberOfPages);

            const tasks = Array.from({ length: Math.ceil(numberOfPages / PAGES_PER_INVOCATION) }, (_, i) => {
                return Task;
            });

            //Naive shuffle mechanism
            for (let i = tasks.length*tasks.length; i > 0; i--) {
                tasks.sort(() => Math.random() - 0.5);
            }
        
            const promises = tasks.map(task => {
                return (async () => {
                    //Wait between invocations to reuse parallel lambdas
                    await new Promise(resolve => setTimeout(resolve, (Math.random() * (INVOCATION_RATE_MAX - INVOCATION_RATE_MIN)) + INVOCATION_RATE_MIN));
                    const params: InvokeCommandInput = {
                        FunctionName: context.functionName,
                        Payload: JSON.stringify(task),
                        InvocationType: 'Event', // Async invocation 
                    };
                    const command = new InvokeCommand(params);
                    return lambdaClient.send(command);
                })();
            });
        
            try {
                await Promise.all(promises);
            } catch (error) {
                console.error('Error invoking Lambda:', error);
            }

        } 
        //-----------------------

        else { // Single execution
            console.log("[START] Task: [start_page, step] = ", task.start_page, task.step);
            await new Promise(resolve => setTimeout(resolve, (Math.random() * (PAGE_TASK_RATE_MAX - PAGE_TASK_RATE_MIN)) + PAGE_TASK_RATE_MIN));

            //Create array from task.start_page to task.start_page + step
            const pages = Array.from({ length: task.step }, (_, i) => i + task.start_page);

            //Shuffle array one line
            for (let i = pages.length*pages.length; i > 0; i--) {
                pages.sort(() => Math.random() - 0.5);
            }

            for (const p of pages) {
                console.log('Scraping page:', p);
                const response = await axios.get(`${BASE_URL}${p}`);
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
            console.log(`[END] Task: [start_page, step] = [${task.start_page}, ${task.step}] `);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error; // rethrow the error to be caught by the handler
    }
};


const handler: Handler = async (
    event: { task?: Task },
    context: Context,
    callback: Callback,
): Promise<void> => {
    if (!db_client) {
        db_client = new PrismaClient();
        await db_client.$connect();
    }

    try {
        await parallelizeScraping(context,event.task);
    } catch (error) {
        console.error('Error:', error);
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

//To close all lambdas :  aws lambda put-function-concurrency --function-name backend-microservice-staging-synchronizer --reserved-concurrent-executions 0

