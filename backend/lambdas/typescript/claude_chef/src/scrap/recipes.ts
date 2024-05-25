import axios from 'axios';
import cheerio from 'cheerio';

import { PrismaClient, Recipe } from '../../prisma/client';
import AWS from 'aws-sdk';

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

        // Find Image URL
        const imageURL = $('.gz-featured-image img[data-src]').attr('data-src') || $('#gz-raccomandatore-trigger img').attr('src') || "";
        
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
    if (!prisma) {
        throw new Error('Prisma client not initialized');
    }

    const transaction = await prisma.$transaction(async (prisma) => {
        try {
            // Normalize and deduplicate ingredient names
        const normalizedIngredientNames = Array.from(
            new Set(recipeData.ingredients.map(ingredient => ingredient.name.trim().toLowerCase()))
        );

        // Fetch existing ingredients from the database
        const ingredientsInDB = await prisma.ingredient.findMany({
            where: { name: { in: normalizedIngredientNames } },
        });

        console.log("[REC]: ingredientsInDB:", ingredientsInDB.length);

        // Identify new ingredients to be added
        const existingIngredientNames = new Set(ingredientsInDB.map(ingredient => ingredient.name));
        const newIngredientNames = normalizedIngredientNames.filter(name => !existingIngredientNames.has(name));

        if (newIngredientNames.length > 0) {
            await prisma.ingredient.createMany({
                data: newIngredientNames.map(name => ({ name })),
                skipDuplicates: true, // Ensure no duplicates are created
            });

            console.log("[REC] NEW ingredients:", newIngredientNames.length);
        }

        // Fetch all ingredient IDs to create a map
        const allIngredientsInDB = await prisma.ingredient.findMany({
            where: { name: { in: normalizedIngredientNames } },
        });
        const ingredientMap = new Map(allIngredientsInDB.map(ing => [ing.name.toLowerCase(), ing.id]));

        // Create Recipe with ingredients and steps
        const createdRecipe = await prisma.recipe.create({
            data: {
                title: recipeData.title || 'No title',
                category: recipeData.category || 'No category',
                imageUrl: recipeData.imageUrl,
                recipeIngredients: {
                    create: recipeData.ingredients.map(ingredient => {
                        const normalizedName = ingredient.name.trim().toLowerCase();
                        const ingredientId = ingredientMap.get(normalizedName);
                        if (!ingredientId) {
                            throw new Error(`Ingredient ${normalizedName} not found in the database.`);
                        }
                        return {
                            ingredient: {
                                connect: { id: ingredientId },
                            },
                            amount: parseFloat(ingredient.quantity) || 0,
                            amountText: ingredient.quantity,
                        };
                    }),
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
            include: { recipeIngredients: true, steps: true },
        });

        return createdRecipe;
        } catch (error) {
            console.error("Error saving recipe: ", error);
            throw error;
        }
    },
    { maxWait: 5000, timeout: 10000 }
    );

    try {
        return await transaction;
    } catch (error) {
        console.error("Transaction failed: ", error);
        return null;
    }
}


export { fetchRecipeData, saveRecipeOnDB, RecipeData };
