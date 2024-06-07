type Recipe = {
  ingredients: any;
  id: string;
  title: string;
  category: string;
  imageUrl?: string | null;
  recipeIngredients: RecipeIngredient[];
  steps: Step[];
}

type Step = {
  id: number;
  recipe: Recipe;
  recipeId: string;
  nStep: number;
  imageUrl?: string | null;
  explaining: string;
}

type RecipeIngredient = {
  id: number;
  recipe: Recipe;
  recipeId: string;
  ingredient: Ingredient;
  ingredientId: number;
  amountText: string;
  amount: number;
  productBarcode?: number | null;
}

type Ingredient = {
  id: number;
  name: string;
  unit?: string | null;
}

