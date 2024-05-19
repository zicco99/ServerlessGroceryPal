class PageChunk {
    public pages: number[];

    constructor(startPage: number, endPage: number) {
        this.pages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
    }

    sort(compareFn: (a: number, b: number) => number): void {
        this.pages.sort(compareFn);
    }
}

class Task {
    public startPage: number;
    public step: number;
    public pageChunk: PageChunk;

    constructor(startPage: number, step: number) {
        this.startPage = startPage;
        this.step = step;
        this.pageChunk = new PageChunk(startPage, startPage + step);
    }

    toString(): string {
        return `Task : ( \n \t start_page: ${this.startPage}, \n \t step: ${this.step}, \n \t page_chunk: [${this.pageChunk.pages.join(', ')}]\n)`;
    }

    sortPageChunk(compareFn: (a: number, b: number) => number): void {
        console.log("Sorting page chunk...");
        this.pageChunk.sort(compareFn);
    }

    /**
     * Shuffles the pages in the page chunk randomly.
     *
     * This function uses the Fisher-Yates algorithm to shuffle the pages in the page chunk.
     * It iterates through the array of pages from the last index to the second index,
     * and swaps each element with a randomly selected element before it.
     *
     * @return {void} This function does not return anything.
     */
    shufflePageChunk(): void {
        console.log("Shuffling page chunk...");
        for (let i = this.pageChunk.pages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pageChunk.pages[i], this.pageChunk.pages[j]] = [this.pageChunk.pages[j], this.pageChunk.pages[i]];
        }
    }
}


export { PageChunk, Task };