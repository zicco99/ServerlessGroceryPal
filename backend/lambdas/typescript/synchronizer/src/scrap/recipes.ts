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
    if (!prisma) {
        throw new Error('Prisma client not initialized');
    }

    try {
        // Normalize and deduplicate ingredient names
        const normalizedIngredientNames = Array.from(
            new Set(recipeData.ingredients.map(ingredient => ingredient.name.trim().toLowerCase()))
        );

        // Create or connect existing ingredients
        const ingredientsInDB = await prisma.ingredient.findMany({
            where: { name: { in: normalizedIngredientNames } },
        });

        console.log("ingredientsInDB: ", ingredientsInDB.length);


        // Check which ingredients are missing and create them
        const existingIngredientNames = ingredientsInDB.map(ingredient => ingredient.name);
        const newIngredientNames = normalizedIngredientNames.filter(name => !existingIngredientNames.includes(name));
        await prisma.ingredient.createMany({
            data: newIngredientNames.map(name => ({ name })),
            skipDuplicates: true,
        });

        // Fetch all ingredient IDs (newly added + existing)
        const allIngredientsInDB = await prisma.ingredient.findMany({
            where: { name: { in: normalizedIngredientNames } },
        });
        const ingredientMap = new Map(allIngredientsInDB.map(ing => [ing.name, ing.id]));

        // Create Recipe with ingredients and steps
        const createdRecipe = await prisma.recipe.create({
            data: {
                title: recipeData.title || 'No title',
                category: recipeData.category || 'No category',
                imageUrl: recipeData.imageUrl,
                recipeIngredients: {
                    create: recipeData.ingredients.map(ingredient => {
                        const normalizedName = ingredient.name.trim().toLowerCase();
                        return {
                            ingredient: {
                                connect: { id: ingredientMap.get(normalizedName) },
                            },
                            amount : parseFloat(ingredient.quantity) || 0,
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

