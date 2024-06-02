import { Callback, Context, DynamoDBStreamEvent, Handler } from 'aws-lambda';
import { SecretsManager} from 'aws-sdk';
import Anthropic from '@anthropic-ai/sdk';
import { ClaudeChefKnowledgeBase, RecipeData, ScrapedRecipeMessage, fetchKnowledgeBase, saveRecipeOnDB } from './src/scrap/recipes';
import { PrismaClient } from './prisma/client';
import { jsonrepair } from 'jsonrepair';

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
    try {
        await setConnectionString();
        if (!db_client) {
            db_client = new PrismaClient();
            await db_client.$connect();
            console.log("DB client initialized!");
        }

        const recipeData : ScrapedRecipeMessage = JSON.parse(event["body"] as string);
        console.log("JSON data: ", recipeData);
        const kb : ClaudeChefKnowledgeBase = await fetchKnowledgeBase(db_client)
        const normalizedRecipe = await askClaudeChef(recipeData.jsonData,kb);
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
        console.log('Claude Chef parameters:', recipeData, knowledgeBase);

        const context = `
        You are a helpful assistant that clean and normalize recipe JSON to be insert then in DB.
        Here it is your knowledge base:
        - Categories already in DB: ${knowledgeBase.categories}
        - Ingredients already in DB: ${knowledgeBase.ingredients}

        Using the knowledge base, take user's give recipe data (R) and:
        1. Rewrite the data, cleaning it to be insert in DB
        2. Normalize the data using the knowledge base
        3. Add the missing information
        4. Return the data in JSON format with the following format using italian language for values:

        {
            title: string | null;
            category: string | null;
            imageUrl: string | null;
            ingredients: { name: string; quantity: string }[];
            steps: { imageUrl: string | null; explaining: string }[];
        }
        `

        console.log('Claude Context: ', context);

        const response = await anthropic.messages.create({
            model: 'claude-3-sonnet-20240229',
            max_tokens: 2080,
            messages: [{
                role: 'user',
                content: JSON.stringify(recipeData),
            },
            {
                role: 'assistant',
                content: "{"
            }],
            system: context,
            temperature: 0.7
        });

        console.log("Response from Claude Chef:", response);

        const json_result = jsonrepair('{' + response.content[0].text);
        console.log(json_result);
        const enhancedRecipe : RecipeData = JSON.parse(json_result);
        
        console.log('Enhanced recipe:', enhancedRecipe);

        return saveRecipeOnDB(db_client, enhancedRecipe);
    } catch (error) {
        console.error('Error in askClaudeChef:', error);
        throw error;
    }
}


//Per ogni ingrediente dai in pasto a claude la quantità unica per scegliere un'unità di misura unica e converti le altre




