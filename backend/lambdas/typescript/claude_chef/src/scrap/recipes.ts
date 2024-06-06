import { PrismaClient, Recipe } from '../../prisma/client';
import stringSimilarity from 'string-similarity';

type RecipeData = {
    id: string;
    title: string | null;
    category: string | null;
    imageUrl: string | null;
    ingredients: {name: string; quantity: string, unit: string }[];
    steps: { imageUrl: string | null; explaining: string }[];
};

type ScrapedRecipeMessage = {
    recipe_id: string;
    of_task: number;
    scheduled_at: Date;
    jsonData: RecipeData;
};


type ClaudeChefKnowledgeBase = {
    categories: string[];
    ingredients: string[];
}


async function fetchKnowledgeBase(prisma: PrismaClient, recipeData: RecipeData): Promise<ClaudeChefKnowledgeBase> {
    if (!prisma) {
        throw new Error('Prisma client not initialized');
    }

    try {
        const knownCategories = await prisma.recipe.findMany({
            distinct: ['category'],
        }).then(categories => categories.map(category => category.category));

        const knownIngredients = await prisma.ingredient.findMany({
            distinct: ['name'],
        });

        const similarIngredients: string[] = [];

        for (const ingredient of recipeData.ingredients) {
            knownIngredients.forEach(knownIngredient => {
                const similarity = stringSimilarity.compareTwoStrings(knownIngredient.name, ingredient.name);
                if (similarity > 0.5) {
                    similarIngredients.push(knownIngredient.name);
                }
            });
        }

        const knowledgeBase: ClaudeChefKnowledgeBase = { categories: knownCategories, ingredients: similarIngredients};

        return knowledgeBase;

    } catch (error) {
        console.error('Error fetching knowledge base:', error);
        throw error;
    }
}

async function saveRecipeOnDB(prisma: PrismaClient | null, recipeData: RecipeData): Promise<Recipe | null> {

    if (!prisma) {
        throw new Error('Prisma client not initialized');
    }

    if (
        !recipeData ||
        !recipeData.id ||
        !recipeData.ingredients || !Array.isArray(recipeData.ingredients) || recipeData.ingredients.length === 0 ||
        !recipeData.steps || !Array.isArray(recipeData.steps) || recipeData.steps.length === 0
    ) {
        throw new Error('Invalid recipe data provided');
    }



    try {
        const recipe : Recipe = await prisma.$transaction(async (prisma) => {
            const createdRecipe = await prisma.recipe.create({
                data: {
                    id: recipeData.id,
                    title: recipeData.title || 'No title',
                    category: recipeData.category || 'No category',
                    imageUrl: recipeData.imageUrl,
                    recipeIngredients: {
                        create: await Promise.all(recipeData.ingredients.map(async ingredientData => {
                            let ingredient = await prisma.ingredient.findFirst({
                                where: {
                                    name: ingredientData.name
                                }
                            });
                            if (!ingredient) {
                                ingredient = await prisma.ingredient.create({
                                    data: {
                                        name: ingredientData.name,
                                        unit: ingredientData.unit,
                                    },
                                });
                            }
                            return {
                                amount: parseFloat(ingredientData.quantity) || 0,
                                amountText: ingredientData.quantity,
                                ingredient: {
                                    connect: { id: ingredient.id },
                                },
                            };
                        })),
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

            console.log("Recipe created:", createdRecipe);
            return createdRecipe;
        }, { maxWait: 5000, timeout: 10000 });

        if (recipe) {
            console.log("Transaction successful");
            return recipe;
        } else {
            throw new Error("Transaction failed: Unable to create recipe.");
        }

    } catch (error) {
        console.error("Transaction failed: ", error);
        return null;
    }
}


export { saveRecipeOnDB, RecipeData, fetchKnowledgeBase, ClaudeChefKnowledgeBase, ScrapedRecipeMessage };

