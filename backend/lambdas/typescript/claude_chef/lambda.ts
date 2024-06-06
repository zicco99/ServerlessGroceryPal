import { Callback, Context, DynamoDBStreamEvent, Handler } from 'aws-lambda';
import { SecretsManager} from 'aws-sdk';
import Anthropic from '@anthropic-ai/sdk';
import { ClaudeChefKnowledgeBase, RecipeData, ScrapedRecipeMessage, fetchKnowledgeBase, saveRecipeOnDB } from './src/scrap/recipes';
import { PrismaClient } from './prisma/client';
import { jsonrepair } from 'jsonrepair';
import { time } from 'console';
import { MessageParam } from '@anthropic-ai/sdk/resources/messages.mjs';

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
        `;

        const messages : MessageParam[] = [
            {
                role: 'user',
                content: 'Normalize the categories and ingredients in the recipe data to match the ones already present in the database.',
            },
            {
                role: 'assistant',
                content: "Ok, these are the ingredients and categories we can subsistitute in order to reuse an already known ingredient: ",
            },
            {
                role: 'user',
                content: 'Fill in any missing information and fix any incorrect or incomplete data in the recipe data.',
            },
            {
                role: 'assistant',
                content: "Ok, these infos were missing or where incorrect, we can fix them: ",
            },
            {
                role: 'user',
                content: `Use the new data to create a new recipe in the following JSON format, with all values in Italian:\n\n{
                    "id": string, \
                    "title": string | null,
                    "category": string | null,
                    "imageUrl": string | null,
                    "ingredients": [{ "name": string, "quantity": string }],
                    "steps": [{ "imageUrl": string | null, "explaining": string }]
                }`,
            },
        ];

        const response = await anthropic.messages.create({
            model: 'claude-3-haiku-20240307', // Use the best model for the task
            max_tokens: 2080,
            messages: messages,
            temperature: 0.7
        });

        console.log("Response from Claude Chef:", response);

        const json_result = jsonrepair(response.content[response.content.length - 1].text);
        console.log(json_result);
        const enhancedRecipe: RecipeData = JSON.parse(json_result);

        console.log('Enhanced recipe:', enhancedRecipe);

        return saveRecipeOnDB(db_client, enhancedRecipe);
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}


//Per ogni ingrediente dai in pasto a claude la quantità unica per scegliere un'unità di misura unica e converti le altre




