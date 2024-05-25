import { DynamoDBStreamEvent, DynamoDBRecord } from 'aws-lambda';

type ScrapedRecipe = {
};

export async function handler(event: DynamoDBStreamEvent): Promise<void> {
    try {
        for (const record of event.Records) {
            if (record.eventName === 'INSERT') {
                const newRecipeData = parseNewRecipeData(record);
                await processNewRecipe(newRecipeData);
            }
        }
    } catch (error) {
        console.error("Error processing DynamoDB stream event:", error);
        // Optionally, you can throw the error to trigger a retry or handle it accordingly
        throw error;
    }
}

function parseNewRecipeData(record: DynamoDBRecord): RecipeData {
    // Extract the new recipe data from the DynamoDB record
    const newItem = record.dynamodb?.NewImage;

    if (!newItem) {
        throw new Error("NewImage not found in DynamoDB record.");
    }

    // Example: Extract relevant attributes from the NewImage and create RecipeData object
    const recipeData: RecipeData = {
        title: newItem.title.S || 'No title',
        category: newItem.category.S || 'No category',
        imageUrl: newItem.imageUrl.S || '',
        ingredients: JSON.parse(newItem.ingredients.S || '[]'),
        steps: JSON.parse(newItem.steps.S || '[]')
    };

    return recipeData;
}

async function processNewRecipe(recipeData: RecipeData): Promise<void> {
    // Implement logic to clean and process the new recipe data
    console.log("Processing new recipe:", recipeData);
    // Example: Save the cleaned recipe data to another DynamoDB table or perform further processing
}

