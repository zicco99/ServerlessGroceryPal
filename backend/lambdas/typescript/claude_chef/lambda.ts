import { Callback, Context, DynamoDBStreamEvent, Handler } from 'aws-lambda';
import { SecretsManager} from 'aws-sdk';
import Anthropic from '@anthropic-ai/sdk';
import { ClaudeChefKnowledgeBase, RecipeData, ScrapedRecipeMessage, fetchKnowledgeBase, saveRecipeOnDB } from './src/scrap/recipes';
import { PrismaClient } from './prisma/client';
import { jsonrepair } from 'jsonrepair';
import { time } from 'console';

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_AI_API_KEY,
});

let db_client = new PrismaClient();

const secretsManager = new SecretsManager({ region: process.env.REGION });

async function setConnectionString(): Promise<void> {
    const params = { SecretId: process.env.DB_SECRET_ARN || "" };
    const data = await secretsManager.getSecretValue(params).promise();
    const { SecretString } = data;
    const { password, username, dbname, port, host } = JSON.parse(SecretString || "");
    process.env.DATABASE_URL = `postgresql://${username}:${password}@${host}:${port}/${dbname}`;
    console.log("DB connection string set: ", process.env.DATABASE_URL);
}


export const handler: Handler = async (
    event: any,
    context: Context,
    callback: Callback,
): Promise<void> => {
    console.log("Event: ", event);
    console.log("Payload: ", event["Records"][0]["body"]);
    try {
        await new Promise(resolve => setTimeout(resolve, Math.random() * 4000 + 3000));
        await setConnectionString();
        if (!db_client) {
            global.db_client = new PrismaClient();
            await global.db_client.$connect();
            console.log("DB client initialized!");
        }

        db_client = global.db_client;

        
        const scraped_recipe_message : ScrapedRecipeMessage = JSON.parse(event["Records"][0]["body"] as string);
        console.log("JSON data: ", scraped_recipe_message);
        const recipeData : RecipeData = scraped_recipe_message.jsonData;
        const kb : ClaudeChefKnowledgeBase = await fetchKnowledgeBase(db_client,recipeData);
        const normalizedRecipe = await askClaudeChef(recipeData,kb);
        console.log("Normalized recipe: ", normalizedRecipe);
        if (normalizedRecipe) {
            await saveRecipeOnDB(db_client, normalizedRecipe);
        }
    } catch (error) {
        console.error('Error processing event:', error);
        throw error;
    }
}

async function askClaudeChef(recipeData: RecipeData, knowledgeBase: ClaudeChefKnowledgeBase): Promise<any> {
    try {
        console.log('Asking Claude Chef...');
        console.log(`Recipe data: ${JSON.stringify(recipeData)} | Knowledge base: ${JSON.stringify(knowledgeBase)}`);

        await new Promise(resolve => setTimeout(resolve, 2500)); // 2.5 seconds as Claude Chef has 60 requests per minute limit
        
        const context = `
            Knowledge Base:
            - Categories already in the database: ${JSON.stringify(knowledgeBase.categories)}
            - Ingredients already in the database: ${JSON.stringify(knowledgeBase.ingredients)}

            Using the information from the knowledge base, your task is to process the user-provided recipe data by performing the following steps:

            1. Clean and rewrite the recipe data to prepare it for insertion into the database. This may involve removing any inconsistencies or errors in the data.

            2. Normalize the recipe data by utilizing the information from the knowledge base. Ensure that the categories and ingredients in the recipe data match the ones already present in the database.

            3. Fill in any missing information in the recipe data and fix any incorrect or incomplete data that is already present.

            4. Rewrite and split or merge steps if enhance readability and cooking efficiency. In the end translate the resulting steps into Italian. 

            4. Use results from the processed recipe data to put them in JSON format using the following structure, with all values in Italian:
                {
                    id: string;
                    title: string | null;
                    category: string | null;
                    imageUrl: string | null;
                    ingredients: { name: string; quantity: string }[];
                    steps: { imageUrl: string | null; explaining: string }[];
                }
        `

        console.log('Claude Context: ', context);

        const response = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307', // Use the best model for the task
            max_tokens: 2080,
            messages: [{
                role: 'user',
                content: "this is the recipe data " + JSON.stringify(recipeData),
            },
            {
                role: 'assistant',
                content: "I computed 1,2,3,4 steps on the recipe sent user, here is the resulting JSON: {"  //JSON mode 
            }],
            system: context,
            temperature: 0.7
        });

        console.log("Response from Claude Chef:", response);

        const json_result = jsonrepair('{' + response.content[0].text);
        console.log(json_result);
        const enhancedRecipe: RecipeData = JSON.parse(json_result);
        enhancedRecipe.id = recipeData.id;
        
        console.log('Enhanced recipe:', enhancedRecipe);

        return saveRecipeOnDB(db_client, enhancedRecipe);
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}


//Per ogni ingrediente dai in pasto a claude la quantità unica per scegliere un'unità di misura unica e converti le altre




