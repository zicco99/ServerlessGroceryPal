const { MongoClient } = require('mongodb');
const axios = require('axios');
const cheerio = require('cheerio');







const findTitle = (html) => {
    const $ = cheerio.load(html);
    return $('.gz-title-recipe.gz-mBottom2x').first().text().trim();
};

const findIngredients = (html) => {
    const $ = cheerio.load(html);
    const ingredients = [];
    $('.gz-ingredient').each((index, element) => {
        const nameIngredient = $(element).find('a').text().trim();
        const quantityProduct = $(element).find('span').first().text().trim();
        ingredients.push([nameIngredient, quantityProduct]);
    });
    return ingredients;
};

const findCategory = (html) => {
    const $ = cheerio.load(html);
    return $('.gz-breadcrumb li a').first().text().trim();
};

const findImage = (html) => {
    const $ = cheerio.load(html);
    let imageURL = $('.gz-featured-image img').first().attr('data-src');
    if (!imageURL) {
        imageURL = $('.gz-featured-image-video.gz-type-photo img').first().attr('data-src');
    }
    return imageURL;
};

const findSteps = (html) => {
    const $ = cheerio.load(html);
    const steps = [];
    $('.gz-content-recipe-step').each((index, element) => {
        const img_url = "https://ricette.giallozafferano.it" + $(element).find('img').attr('src');
        const description = $(element).find('p').first().text().trim();
        steps.push({ img_url, description });
    });
    return steps;
};

exports.handler = async (event, context) => {
    try {
        const client = new MongoClient(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();
        const db = client.db(DATABASE_NAME);

        const numberOfPagesResponse = await axios.get('https://www.giallozafferano.it/ricette-cat');
        const numberOfPagesHtml = numberOfPagesResponse.data;
        const $ = cheerio.load(numberOfPagesHtml);
        const numberOfPages = parseInt($('.disabled.total-pages').first().text());

        for (let pageNumber = 1; pageNumber <= numberOfPages; pageNumber++) {
            const pageResponse = await axios.get(`https://www.giallozafferano.it/ricette-cat/page${pageNumber}`);
            const pageHtml = pageResponse.data;
            const page$ = cheerio.load(pageHtml);

            page$('.gz-title').each(async (index, element) => {
                const link = page$(element).find('a').attr('href');
                try {
                    const recipeResponse = await axios.get(link);
                    const recipeHtml = recipeResponse.data;
                    
                    const title = findTitle(recipeHtml);
                    const category = findCategory(recipeHtml);
                    const image_url = findImage(recipeHtml);
                    const ingredients = findIngredients(recipeHtml);
                    const steps = findSteps(recipeHtml);
                    
                    // Here you can insert data into MongoDB
                    await db.collection('recipes').insertOne({
                        title,
                        category,
                        image_url,
                        ingredients,
                        steps
                    });
                    
                    console.log(`Recipe added: ${title}`);
                } catch (error) {
                    console.error(`Failed to scrape recipe: ${error.message}`);
                }
            });
        }

        await client.close();

        return { statusCode: 200, body: JSON.stringify({ message: 'Database created' }) };
    } catch (error) {
        console.error(`Error: ${error.message}`);
        return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
    }
};
