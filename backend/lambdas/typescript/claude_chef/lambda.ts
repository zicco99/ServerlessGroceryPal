// DynamoDB Row Schema
/*
type ScrapedRecipe = {
    recipeId: { "S": string };
    of_task: { "S": string };
    scheduled_at: { "S": string };
    jsonData: { "S": string };
};
*/


import { DynamoDBStreamEvent } from 'aws-lambda';
import { SecretsManager, RDSDataService } from 'aws-sdk';
import Anthropic from '@anthropic-ai/sdk';
import { fetchAlreadyKnownIngredients } from './src/scrap/recipes';
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
}


export async function handler(event: DynamoDBStreamEvent): Promise<void> {
    await setConnectionString();
    try {
        for (const record of event.Records) {
            if (record.eventName === 'INSERT') {
                const newRecipeData = record.dynamodb?.NewImage;
                if (newRecipeData) {
                    const normalizedRecipe = await askClaudeChef(newRecipeData.jsonData.S!, await fetchAlreadyKnownIngredients(db_client));
                    console.log(normalizedRecipe)
                    // Save normalizedRecipe to your database
                }
            }
        }
    } catch (error) {
        console.error("Error processing DynamoDB stream event:", error);
        throw error;
    }
}

async function askClaudeChef(recipeData: string, knownIngredients: string[]): Promise<string> {
    try {
        const response = await anthropic.messages.create({
            max_tokens: 1024,
            messages: [
                { role: 'assistant', content: 'You are a culinary expert. You will be given a recipe (R), a list of already known ingredients (I) and you will return a JSON with the following format: { "recipe": [recipeData with correct infos, without infos], "new_ingredients": [...] }.' },
                { role: 'user', content: JSON.stringify({ R: recipeData, I: knownIngredients }) },
            ],
            model: 'claude-3-opus-20240229',
        });

        return response.content.values[0];
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}
