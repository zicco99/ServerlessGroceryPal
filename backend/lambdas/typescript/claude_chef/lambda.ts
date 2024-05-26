import { Callback, Context, DynamoDBStreamEvent, Handler } from 'aws-lambda';
import { SecretsManager} from 'aws-sdk';
import Anthropic from '@anthropic-ai/sdk';
import { ClaudeChefKnowledgeBase, RecipeData, fetchKnowledgeBase, saveRecipeOnDB } from './src/scrap/recipes';
import { PrismaClient } from './prisma/client';

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

    await setConnectionString();
    if (!db_client) {
        db_client = new PrismaClient();
        await db_client.$connect();
        console.log("DB client initialized!");
    }

    try {
        for (const record of event.Records) {
            if (record.eventName === 'INSERT') {
                const newRecipeData = record.dynamodb?.NewImage;
                if (newRecipeData) {
                    const jsonData = JSON.parse(newRecipeData.jsonData.S as string);
                    console.log("JSON data: ", jsonData);
                    const kb : ClaudeChefKnowledgeBase = await fetchKnowledgeBase(db_client)
                    const normalizedRecipe = await askClaudeChef(jsonData,kb);
                    console.log("Normalized recipe: ", normalizedRecipe);
                }
            }
        }
    } catch (error) {
        console.error("Error processing DynamoDB stream event:", error);
        throw error;
    }
}

async function askClaudeChef(recipeData: any, knowledgeBase: ClaudeChefKnowledgeBase): Promise<any> {
    try {
        console.log('Asking Claude Chef...');
        console.log('Claude Chef parameters:', recipeData, knowledgeBase);

        const context = `
        You are a helpful assistant that clean and normalize recipe JSON to be insert then in DB.
        You know that:
        - Categories already in DB: ${knowledgeBase.categories}
        - Ingredients already in DB: ${knowledgeBase.ingredients}

        Using the knowledge base, take user's give recipe data (R) and:
        - If R should be in an already known category, then use it into the resulting recipe
        - If R should be in an already known ingredient, then use it into the resulting recipe
        - Fix typos in the whole json

        In the end take all correct info and return them in a JSON with the following format:
        {
            title: string | null;
            category: string | null;
            imageUrl: string | null;
            ingredients: { name: string; quantity: string }[];
            steps: { imageUrl: string | null; explaining: string }[];
        }
        `
        const response = await anthropic.messages.create({
            model: 'claude-3-opus-20240229',
            max_tokens: 2080,
            messages: [{
                role: 'user',
                content: JSON.stringify(recipeData)
            }],
            system: context,
            temperature: 0.7
        });

        console.log('Received response from Claude Chef:', response);

        const responseContent = response.content[0].text;
        const enhancedRecipe : RecipeData = JSON.parse(responseContent); 

        console.log('Enhanced recipe:', enhancedRecipe);

        saveRecipeOnDB(db_client, enhancedRecipe).then(() => console.log('Recipe saved on DB'));

        return enhancedRecipe;
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}


