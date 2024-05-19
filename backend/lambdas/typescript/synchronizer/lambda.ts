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

import {Task, PageChunk} from './src/recipes/utils/scrap_task';



const scrapRecipe = async (url: string): Promise<void> => {
    try {
        console.log('Scraping recipe:', url);
        // Scraping logic for recipe details
    } catch (error) {
        console.error('Error scraping recipe:', error);
    }
};



const executeScrapingTask = async ( task: Task) : Promise<void> => {
    console.log("[TASK EXECUTION] ProcessingTask: ", task);
    await new Promise(resolve => setTimeout(resolve, (Math.random() * (PAGE_TASK_RATE_MAX - PAGE_TASK_RATE_MIN)) + PAGE_TASK_RATE_MIN));

    for (const p of task.pageChunk.getPages()) {
        console.log('[TASK EXECUTION] Scraping page: ', p);
        const response = await axios.get(`${BASE_URL}${p}`);
        const $ = cheerio.load(response.data);
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
    console.log(`[TASK EXECUTION] Completed Task: ${task}`);
}

const parallelize = async (context: Context): Promise<void> => {
    console.log("Splitting work between multiple invocations:");

    // Fetch total number of pages
    const response = await axios.get(BASE_URL);
    const htmlContent = response.data;
    const $ = cheerio.load(htmlContent);

    const totalPagesText = $('span.disabled.total-pages').text().trim();
    const numberOfPages = parseInt(totalPagesText);

    // Invoke Lambda functions in parallel to scrape multiple pages simultaneously
    console.log("to then parallelize a numer of readers = n. of pages = ", numberOfPages);

    const tasks: Task[] = Array.from({ length: Math.ceil(numberOfPages / PAGES_PER_INVOCATION) }, (_, i) => {
        const startPage = i * PAGES_PER_INVOCATION + 1;
        const endPage = (i + 1) * PAGES_PER_INVOCATION + 1;
        return new Task(startPage, endPage - startPage);
    });

    tasks.forEach(async (task) => { //Still iterative

        console.log("[ROOT] Managing Task: ", task);

        task.shufflePageChunk()

        console.log("[ROOT] Shuffled Task: ", task);

        // Wait between invocations to reuse parallel lambdas
        const delay = Math.random() * (INVOCATION_RATE_MAX - INVOCATION_RATE_MIN) + INVOCATION_RATE_MIN;
        await new Promise(resolve => setTimeout(resolve, delay));
    
        const params : InvokeCommandInput = {
            FunctionName: context.functionName,
            Payload: JSON.stringify(task),
            InvocationType: 'Event', // Async recursive invocation
        };
    
        const command = new InvokeCommand(params);
        lambdaClient.send(command).catch(error => {
            console.error('Error invoking lambda function:', error);
        });

        console.log("[ROOT] Task correctly invoked:", task);
    });
}


const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
): Promise<void> => {
    try {

        console.log('Received event:', JSON.stringify(event, null, 2));
        if (!db_client) {
            db_client = new PrismaClient();
            await db_client.$connect();
        }

        let task: Task | null = null;
        console.log("Received event:", JSON.stringify(event, null, 2));

        if(event.startPage && event.step && event.pageChunk.pages) {
            console.log("Received: ", event.startPage, event.step, event.pageChunk.pages);
            task = new Task(event.startPage, event.step);
            task.pageChunk.setPages(event.pageChunk.pages);
        }

        if (task === null) { // Single execution
            parallelize(context);
            const response = {
                statusCode: 200,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: 'Synchronization completed!' }),
            };
            callback(null, response);
        } 
        else { // Single execution
            await executeScrapingTask(event);
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export { handler };

//To close all lambdas :  aws lambda put-function-concurrency --function-name backend-microservice-staging-synchronizer --reserved-concurrent-executions 0

