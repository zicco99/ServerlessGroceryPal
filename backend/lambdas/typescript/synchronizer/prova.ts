import axios from 'axios';
import cheerio from 'cheerio';

const BASE_URL = 'https://www.giallozafferano.it/ricette-cat/';

async function fetchTotalPages(): Promise<number> {
    try {
        // Fetch total number of pages
        const response = await axios.get(BASE_URL);
        const htmlContent = response.data;
        const $ = cheerio.load(htmlContent);

        console.log($.text())

        // Find the total pages element and extract its text content
        const totalPagesText = $('span.disabled.total-pages').text().trim();

        // Convert the text content to an integer to get the total number of pages
        const numberOfPages = parseInt(totalPagesText);

        return numberOfPages;
    } catch (error) {
        console.error('Error fetching total number of pages:', error.message);
        return -1; // Return a default value or handle the error as needed
    }
}

async function main() {
    const totalPages = await fetchTotalPages();
    if (totalPages !== -1) {
        console.log('Total number of pages:', totalPages);
    } else {
        console.log('Failed to fetch total number of pages.');
    }
}

main();