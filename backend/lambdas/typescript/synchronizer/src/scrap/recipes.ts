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

        // 1. Create Ingredients
        await prisma.ingredient.createMany({
            data: recipeData.ingredients.map((ingredient) => ({
                name: ingredient.name,
            })),
            skipDuplicates: true, // Avoids duplicating ingredients
        });

        // 2. Fetch created ingredients to get their IDs
        const ingredientsInDB = await prisma.ingredient.findMany({
            where: {
                name: {
                    in: recipeData.ingredients.map((ingredient) => ingredient.name),
                },
            },
        });

        // Check if we have all required ingredient IDs
        if (ingredientsInDB.length !== recipeData.ingredients.length) {
            throw new Error('Mismatch in ingredient count after creation.');
        }

        // 3. Create Recipe
        const createdRecipe = await prisma.recipe.create({
            data: {
                title: recipeData.title || 'No title',
                category: recipeData.category || 'No category',
                imageUrl: recipeData.imageUrl,
                recipeIngredients: {
                    createMany: {
                        data: recipeData.ingredients.map((ingredient) => {
                            const ingredientInDB = ingredientsInDB.find(ing => ing.name === ingredient.name);
                            if (!ingredientInDB) {
                                throw new Error(`Ingredient ${ingredient.name} not found in the database.`);
                            }
                            return {
                                ingredientId: ingredientInDB.id,
                                name: ingredient.name,
                                quantity: ingredient.quantity,
                                amountText: ingredient.quantity,
                                amount: parseFloat(ingredient.quantity),
                            };
                        }),
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
            include: {
                recipeIngredients: true,
            },
        });

        console.log('Recipe saved:', createdRecipe);
        return createdRecipe;
    } catch (error) {
        console.error('Error saving the recipe:', error);
        return null;
    } finally {
        if (prisma) {
            await prisma.$disconnect();
        }
    }
}


export { fetchRecipeData, saveRecipeOnDB };

