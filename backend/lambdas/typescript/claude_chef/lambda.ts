import { DynamoDBStreamEvent} from 'aws-lambda';
import { SecretsManager } from 'aws-sdk';
import { RecipeData } from '../synchronizer/src/scrap/recipes';
import { Recipe } from '../synchronizer/prisma/client';

import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
    apiKey: process.env.CLAUDE_AI_API_KEY, // This is the default and can be omitted
  });


// DynamoDB Row Schema
/*
type ScrapedRecipe = {
    recipeId: { "S": string };
    of_task: { "S": string };
    scheduled_at: { "S": string };
    jsonData: { "S": string };
};
*/


const secretsManager = new SecretsManager({ region: process.env.REGION });

async function set_connection_string(): Promise<void> {
    const params = {
        SecretId: process.env.DB_SECRET_ARN || "",
    };
    const data = await secretsManager.getSecretValue(params).promise();
    const { SecretString } = data;
    const { password, username, dbname, port, host } = JSON.parse(SecretString || "");
    process.env.DATABASE_URL = `postgresql://${username}:${password}@${host}:${port}/${dbname}`;
}

export async function handler(event: DynamoDBStreamEvent): Promise<void> {
    try {
        for (const record of event.Records) {
            if (record.eventName === 'INSERT') {
                const newRecipeData = record.dynamodb?.NewImage
                if (newRecipeData) {
                    await askClaudeChef(newRecipeData);
                }


                
            }
        }
    } catch (error) {
        console.error("Error processing DynamoDB stream event:", error);
        // Optionally, you can throw the error to trigger a retry or handle it accordingly
        throw error;
    }
}

async function askClaudeChef(recipeDatav) {
    try {
        const message = await anthropic.messages.create({
            max_tokens: 1024,
            messages: [
                { role: 'user', content: 'Hello, Claude' },
                { role: 'user', content: `Please provide a recipe with the following data: ${JSON.stringify(recipeDatav)}` }
            ],
            model: 'claude-3-opus-20240229',
        });
        
        // Assuming the response is in message.data.content
        const response = message.content;
        const recipe = response;
        
        console.log(recipe);
        return recipe;
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage:
askClaudeChef({ ingredient: "chicken", cuisine: "Italian" })
    .then(recipe => {
        if (recipe) {
            console.log('Received recipe:', recipe);
        }
    });


