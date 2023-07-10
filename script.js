class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
}

class Library {
    constructor() {
        this.books = [];
    }

    addBook(newBook) {
        this.books.push(newBook);
    }

    removeBook(toBeRemovedBook) {
        this.books = this.books.filter((book) => book.title !== toBeRemovedBook.title);
    }

    getBook(wantedBook) {
        return this.books.find((book) => book.title = wantedBook);
    }

    doesBookExist(newBook) {
        return this.books.some((book) => book.title === newBook.title);
    }
}

const library = new Library();