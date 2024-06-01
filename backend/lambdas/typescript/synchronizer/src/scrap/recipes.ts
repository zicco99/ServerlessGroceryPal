import axios from 'axios';
import cheerio from 'cheerio';
import crypto from 'crypto';
import * as AWS from 'aws-sdk';

type RecipeData = {
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

async function fetchRecipeData(url: string): Promise<RecipeData> {
    try {
        const { data } = await axios.get(url);
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

        return { title: titleRecipe, category, imageUrl: imageURL, ingredients: allIngredients, steps };
    } catch (error) {
        console.error('Error fetching the recipe:', error);
        return { title: null, category: null, imageUrl: null, ingredients: [], steps: [] };
    }
}

async function sendScrapedRecipeToSQS(recipeData: RecipeData, of_task: number): Promise<RecipeData | null> {
    try {
        const scrapedRecipeTable = process.env.SCRAPED_RECIPES_TABLE;

        if (!scrapedRecipeTable || !recipeData || !recipeData.title || !recipeData.category || !recipeData.ingredients.length || !recipeData.steps.length) {
            console.error("Invalid recipe data.");
            return null;            
        } 

        const hash = crypto.createHash('sha256');
        hash.update(JSON.stringify(recipeData));
        const recipe_id = hash.digest('hex').slice(0, 20);

        const recipe : any = {
            id: recipe_id,
            title: recipeData.title || 'No title',
            category: recipeData.category || 'No category',
            imageUrl: recipeData.imageUrl || '',
        };

        const modelIngredients = recipeData.ingredients.map((ingredient, index) => ({
            id: index + 1,
            name: ingredient.name,
            unit: "",
        }));

        const modelSteps = recipeData.steps.map((step, index) => ({
            id: index + 1,
            recipeId: 1,
            imageUrl: step.imageUrl || '',
            explaining: step.explaining || '',
            nStep: index + 1,
        }));

        recipe.ingredients = modelIngredients;
        recipe.steps = modelSteps;

        await sqsClient.sendMessage({
            QueueUrl: process.env.RECIPES_QUEUE_URL || "",
            MessageBody: JSON.stringify(recipe)
        }).promise();

        console.log("Recipe sent to queue:", recipe);
        return recipe;
    
    } catch (error) {
        console.error("Error sending recipe to SQS:", error);
        return null;
    }
}

export { fetchRecipeData, sendScrapedRecipeToSQS, RecipeData };
