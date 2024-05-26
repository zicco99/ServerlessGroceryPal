import { Callback, Context, DynamoDBStreamEvent, Handler } from 'aws-lambda';
import { SecretsManager} from 'aws-sdk';
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
                    const already_known_ingredients = await fetchAlreadyKnownIngredients(db_client)
                    const normalizedRecipe = await askClaudeChef(jsonData,already_known_ingredients);
                    console.log("Normalized recipe: ", normalizedRecipe);
                }
            }
        }
    } catch (error) {
        console.error("Error processing DynamoDB stream event:", error);
        throw error;
    }
}

async function askClaudeChef(recipeData, knownIngredients) {
    try {
        const anthropic = require('@anthropic-ai/sdk'); // Ensure you have the correct SDK imported and configured

        // Construct the message payload
        const messages = [
            {
                role: 'system',
                content: 'You are an expert assistant helping with recipe bibliography.'
            },
            {
                role: 'user',
                content: 
                    'You are a culinary expert. ' +
                    'You will be given a recipe (R), ' +
                    'a list of already known ingredients (I), ' +
                    'and you will return a JSON with the following format: ' +
                    '{ "recipe": [recipeData sanitized with enhanced inferred infos], ' +
                    '"new_ingredients": [...] }.\n' +
                    JSON.stringify({ R: recipeData, I: knownIngredients })
            }
        ];

        // Call the API
        const response = await anthropic.messages.create({
            model: 'claude-3-opus-20240229',
            max_tokens: 1024,
            messages: messages,
            temperature: 0.7,
            stop: ["\n"]
        });

        // Parse and log the response
        const result = response.data.choices[0].message.content;
        console.log('Claude Chef response:', result);

        // Return the parsed response
        return result;
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}
