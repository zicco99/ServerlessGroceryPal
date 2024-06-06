import axios from 'axios';
import cheerio from 'cheerio';
import crypto from 'crypto';
import * as AWS from 'aws-sdk';
import { PrismaClient } from '../../prisma/client';

type RecipeData = {
    id: string;
    title: string | null;
    category: string | null;
    imageUrl: string | null;
    ingredients: { name: string; quantity: string }[];
    steps: { imageUrl: string | null; explaining: string }[];
};

type ScrapedRecipeMessage = {
    recipe_id: string;
    of_task: number;
    scheduled_at: Date;
    jsonData: RecipeData;
};

const sqsClient = new AWS.SQS({ region: process.env.REGION }); 


function obtainRecipeId(recipe : RecipeData) {
    const hash = crypto.createHash('sha256');
    hash.update(JSON.stringify(recipe));
    return hash.digest('hex').slice(0, 20);
}

async function checkIfRecipeExists(prisma: PrismaClient, id: string): Promise<boolean> {
    const recipe = await prisma.recipe.findFirst({
        where: {
            id: id
        }
    });
    return !!recipe;
}

async function fetchRecipeData(url: string): Promise<RecipeData> {
    try {
        const response = await axios.get(url);
        const { data } = response;

        if (!data) {
            throw new Error('No data received from the website');
        }
        const $ = cheerio.load(data);

        const titleRecipe = $('.gz-title-recipe.gz-mBottom2x').text().trim() || null;
        const category = $('.gz-breadcrumb li a').first().text().trim() || null;
        const allIngredients: { name: string; quantity: string }[] = [];
        const imageURL = $('.gz-featured-image img[data-src]').attr('data-src') || $('#gz-raccomandatore-trigger img').attr('src') || "";
        const steps: { imageUrl: string | null; explaining: string }[] = [];

        $('.gz-ingredients .gz-ingredient').each((i, elem) => {
            const nameIngredient = $(elem).find('a').text().trim();
            const quantityProduct = $(elem).find('span').contents().first().text().replace(/\s+/g, ' ').trim();
            if (nameIngredient && quantityProduct) {
                allIngredients.push({ name: nameIngredient, quantity: quantityProduct });
            }
        });
        $('.gz-content-recipe-step').each((i, elem) => {
            const imageUrl = $(elem).find('img').attr('data-src') || null;
            const explaining = $(elem).find('p').text().trim();
            if (explaining) {
                steps.push({ imageUrl, explaining });
            }
        });

        const result = { id: "", title: titleRecipe, category, imageUrl: imageURL, ingredients: allIngredients, steps };

        //check if any attributes is undefined
        if (!result.title || !result.category || !result.imageUrl || !result.ingredients.length || !result.steps.length) {
            throw new Error('Invalid recipe data, some attributes are undefined');
        }

        return result;
    } catch (error) {
        if (error.response) {
            // The request was made, but the server responded with an error
            console.error(`Error fetching the recipe: ${error.response.status} ${error.response.statusText}`);
        } else if (error.request) {
            // The request was made, but no response was received
            console.error('Error fetching the recipe: No response received');
        } else {
            // Something else happened while setting up the request
            console.error('Error fetching the recipe:', error.message);
        }
        throw error;
    }
}

async function sendScrapedRecipeToSQS(recipeData, of_task) {
    try {
        if (!process.env.RECIPES_QUEUE_URL || !recipeData || !recipeData.title || !recipeData.category || !recipeData.ingredients.length || !recipeData.steps.length) {
            console.error("Invalid recipe data.");
            return Promise.resolve(null);
        } 

        const recipe_id = obtainRecipeId(recipeData);

        const recipe : RecipeData = {
            id: recipe_id,
            title: recipeData.title || 'No title',
            category: recipeData.category || 'No category',
            imageUrl: recipeData.imageUrl || '',
            ingredients: recipeData.ingredients.map((ingredient, index) => ({
                name: ingredient.name,
                quantity: "",
            })),
            steps: recipeData.steps.map((step: { imageUrl: any; explaining: any; }, index: any) => ({
                imageUrl: step.imageUrl || '',
                explaining: step.explaining || ''
            }))
        };

        const recipeMessage = {
            recipe_id,
            of_task,
            scheduled_at: new Date(),
            jsonData: recipe
        };

        const params = {
            MessageBody: JSON.stringify(recipeMessage),
            QueueUrl: process.env.RECIPES_QUEUE_URL
        };
        
        await sqsClient.sendMessage(params).promise();
        console.log("Recipe sent to SQS.");

        return recipeMessage;
    
    } catch (error) {
        console.error("Error sending recipe to SQS:", error);
        return Promise.resolve(null);
    }
}

export { fetchRecipeData, sendScrapedRecipeToSQS, checkIfRecipeExists, obtainRecipeId, RecipeData };
