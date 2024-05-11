import { Callback, Context, Handler } from 'aws-lambda';
/*


const lambda = new AWS.Lambda();
let allPagesScraped = false; // Flag to track if all pages have been scraped

interface Recipe {
  title: string;
  category: string;
  image: string;
  ingredients: { name: string; quantity: string }[];
  steps: { img_url: string; description: string }[];
}

interface ScrapingEvent {
  currentPage: number;
  totalPages: number;
}

const scrapeRecipes: Handler<ScrapingEvent> = async (event, context, callback) => {
  console.log('Received event:', JSON.stringify(event, null, 2));

  const { currentPage, totalPages } = event;

  try {
    const recipeLinks = await getAllRecipeLinks(currentPage);

    for (const link of recipeLinks) {
      const recipe = await scrapeRecipe(link);
      await saveRecipeToDatabase(recipe);
    }

    console.log(`Scraping for page ${currentPage} completed successfully.`);

    if (currentPage < totalPages) {
      await invokeNextPage(currentPage + 1, totalPages);
    } else {
      console.log('Scraping completed successfully for all pages.');
      allPagesScraped = true; // Update flag when all pages are scraped
    }

    if (allPagesScraped) {
      console.log('All pages scraped, closing execution.');
      callback(null, { message: 'All pages scraped, closing execution.' });
    }
  } catch (error) {
    console.error(`An error occurred while scraping page ${currentPage}:`, error);
    callback(error);
  }
};

async function getAllRecipeLinks(pageNumber: number): Promise<string[]> {
  const linkList = `https://www.giallozafferano.it/ricette-cat/page${pageNumber}`;
  const response = await axios.get(linkList);
  const $ = cheerio.load(response.data);
  const recipeLinks: string[] = [];

  $('.gz-title').each((index, element) => {
    const link = $(element).find('a').attr('href');
    if (link) {
      recipeLinks.push(link);
    }
  });

  return recipeLinks;
}

async function scrapeRecipe(link: string): Promise<Recipe> {
  const response = await axios.get(link);
  const $ = cheerio.load(response.data);

  const title = $('.gz-title-recipe.gz-mBottom2x').text().trim();
  const category = $('.gz-breadcrumb li a').first().text().trim();
  const image = $('.gz-featured-image img').attr('data-src');

  const ingredients = $('.gz-ingredient').map((index, element) => {
    const name = $(element).find('a').text().trim();
    const quantity = $(element).find('span').text().trim();
    return { name, quantity };
  }).get();

  const steps = $('.gz-content-recipe-step').map((index, element) => {
    const img_url = 'https://ricette.giallozafferano.it' + $(element).find('img').attr('src');
    const description = $(element).find('p').text().trim();
    return { img_url, description };
  }).get();

  return { title, category, image, ingredients, steps };
}

async function saveRecipeToDatabase(recipeData: Recipe): Promise<void> {
  // Implement saving to database
}

async function invokeNextPage(currentPage: number, totalPages: number): Promise<void> {
  const params = {
    FunctionName: process.env.AWS_LAMBDA_FUNCTION_NAME!,
    InvocationType: 'Event',
    Payload: JSON.stringify({ currentPage, totalPages })
  };

  await lambda.invoke(params).promise();
}

export { scrapeRecipes };

*/
