import axios from 'axios';
import cheerio from 'cheerio';

import { PrismaClient, Recipe } from '../../prisma/client';

type RecipeData = {
    title: string | null;
    category: string | null;
    imageUrl: string | null;
    ingredients: { name: string; quantity: string }[];
    steps: { imageUrl: string | null; explaining: string }[];
};

async function fetchRecipeData(url: string): Promise<RecipeData> {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        // Find Title
        const titleRecipe = $('.gz-title-recipe.gz-mBottom2x').text().trim() || null;

        // Find Category
        const category = $('.gz-breadcrumb li a').first().text().trim() || null;

        // Find Ingredients
        const allIngredients: { name: string; quantity: string }[] = [];
        $('.gz-ingredients .gz-ingredient').each((i, elem) => {
            const nameIngredient = $(elem).find('a').text().trim();
            const quantityProduct = $(elem).find('span').contents().first().text().replace(/\s+/g, ' ').trim();
            if (nameIngredient && quantityProduct) {
                allIngredients.push({ name: nameIngredient, quantity: quantityProduct });
            }
        });

        // Find Image
        const imageURL = $('.gz-featured-image img[data-src]').attr('data-src') || "";

        // Find Steps
        const steps: { imageUrl: string | null; explaining: string }[] = [];
        $('.gz-content-recipe-step').each((i, elem) => {
            const imageUrl = $(elem).find('img').attr('data-src') || null;
            const explaining = $(elem).find('p').text().trim();
            if (explaining) {
                steps.push({ imageUrl, explaining });
            }
        });

        return { title: titleRecipe, category: category, imageUrl: imageURL, ingredients: allIngredients, steps };
    } catch (error) {
        console.error('Error fetching the recipe:', error);
        return { title: null, category: null, imageUrl: null, ingredients: [], steps: [] };
    }
}

async function saveRecipeOnDB(prisma: PrismaClient | null, recipeData: RecipeData): Promise<Recipe | null> {
    try {
        if (!prisma) {
            throw new Error('Prisma client not initialized');
        }

        // Normalize ingredient names to ensure uniqueness
        const ingredientNames = [...new Set(recipeData.ingredients.map(ingredient => ingredient.name.trim().toLowerCase()))];

        // Create Ingredients
        await prisma.ingredient.createMany({
            data: ingredientNames.map(name => ({ name })),
            skipDuplicates: true, // Avoids duplicating ingredients
        });

        // Fetch created ingredients to get their IDs
        const ingredientsInDB = await prisma.ingredient.findMany({
            where: { name: { in: ingredientNames } },
        });

        if (ingredientsInDB.length !== ingredientNames.length) {
            throw new Error('Mismatch in ingredient count after creation.');
        }

        // Map ingredient names to their IDs
        const ingredientMap = new Map(ingredientsInDB.map(ing => [ing.name, ing.id]));

        // Create Recipe
        const createdRecipe = await prisma.recipe.create({
            data: {
                title: recipeData.title || 'No title',
                category: recipeData.category || 'No category',
                imageUrl: recipeData.imageUrl,
                recipeIngredients: {
                    createMany: {
                        data: recipeData.ingredients.map(ingredient => ({
                            ingredientId: ingredientMap.get(ingredient.name.trim().toLowerCase())!,
                            name: ingredient.name,
                            quantity: ingredient.quantity,
                            amountText: ingredient.quantity,
                            amount: parseFloat(ingredient.quantity),
                        })),
                    },
                },
                steps: {
                    createMany: {
                        data: recipeData.steps.map((step, index) => ({
                            explaining: step.explaining,
                            imageUrl: step.imageUrl,
                            nStep: index + 1,
                        })),
                    },
                },
            },
            include: { recipeIngredients: true },
        });

        console.log('Recipe saved:', createdRecipe);
        return createdRecipe;
    } catch (error) {
        console.error('Error saving the recipe:', error);
        return null;
    }
}




export { fetchRecipeData, saveRecipeOnDB, RecipeData };

