import axios from 'axios';
import cheerio from 'cheerio';
import { Console } from 'console';

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


class PageChunk {
    private _pages: number[];

    constructor(startPage: number, endPage: number) {
        this._pages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
    }

    get pages(): number[] {
        return this._pages;
    }

    sort(compareFn: (a: number, b: number) => number): void {
        console.log("Sorting pages...");
        this._pages.sort(compareFn);
        console.log("Pages sorted successfully.");
    }

    static shuffle<T extends PageChunk>(arr: T[]): T[] {
        console.log("Shuffling page chunks...");
        arr.forEach(chunk => {
            chunk._pages.sort(() => Math.random() - 0.5);
        });
        console.log("Page chunks shuffled successfully.");
        return arr;
    }
}

class Task {
    private _pageChunk: PageChunk;

    constructor(private startPage: number, private step: number) {
        this._pageChunk = new PageChunk(startPage, startPage + step);
    }

    get pageChunk(): PageChunk {
        return this._pageChunk;
    }

    toString(): string {
        return `Task : (start_page: ${this.startPage}, step: ${this.step}, page_chunk: [${this.pageChunk.pages[0]}, ${this.pageChunk.pages[1]}...${this.pageChunk.pages[this.step - 1]}])`;
    }

    sortPageChunk(compareFn: (a: number, b: number) => number): void {
        console.log("Sorting page chunk...");
        this.pageChunk.sort(compareFn);
    }

    shufflePageChunk(): void {
        console.log("Shuffling page chunk...");
        PageChunk.shuffle([this.pageChunk]);
    }
}

//Test PageChunk and Task
async function test() {
    const pageChunk = new PageChunk(1, 10);
    const task = new Task(1, 5);
    console.log(task);
    task.sortPageChunk((a, b) => a - b);
    task.shufflePageChunk();
    console.log(task.pageChunk);
    task.sortPageChunk((a, b) => a - b);
    console.log(task.pageChunk);

}
test();

