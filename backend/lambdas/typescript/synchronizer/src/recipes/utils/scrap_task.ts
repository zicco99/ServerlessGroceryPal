class PageChunk {
    private pages: number[];

    constructor(startPage: number, endPage: number) {
        this.pages = Array.from({ length: endPage - startPage }, (_, i) => startPage + i);
    }

    getPages(): number[] {
        return [...this.pages];
    }

    setPages(pages: number[]): void {
        this.pages = [...pages];
    }

    sort(compareFn: (a: number, b: number) => number): void {
        this.pages.sort(compareFn);
    }

    shuffle(): void {
        for (let i = this.pages.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.pages[i], this.pages[j]] = [this.pages[j], this.pages[i]];
        }
    }
}

class Task {
    private startPage: number;
    private step: number;
    private pageChunk: PageChunk;

    constructor(startPage: number, step: number) {
        this.startPage = startPage;
        this.step = step;
        this.pageChunk = new PageChunk(startPage, startPage + step);
    }

    toString(): string {
        return `Task : ( \n \t start_page: ${this.startPage}, \n \t step: ${this.step}, \n \t page_chunk: [${this.pageChunk.getPages().join(', ')}]\n)`;
    }

    setPageChunkPages(pages: number[]): void {
        this.pageChunk.setPages(pages)
    }

    getPageChunkPages(): number[] {
        return this.pageChunk.getPages();
    }

    sortPageChunk(compareFn: (a: number, b: number) => number): void {
        console.log("Sorting page chunk...");
        this.pageChunk.sort(compareFn);
    }

    shufflePageChunk(): void {
        console.log("Shuffling page chunk...");
        this.pageChunk.shuffle();
    }
}

export { PageChunk, Task };
