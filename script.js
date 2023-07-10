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

const addBookBtn = document.getElementById("addBookBtn")
    , booksGrid = document.getElementById("booksGrid")
    , modalDiv = document.getElementById("modal")
    , blurLayer = document.getElementById("blurLayer")
    , bookForm = document.getElementById("addBookForm")
    , errorMsg = document.getElementById("errorMsg")
    , submitBtn = document.getElementById("submit");

const showModal = function() {
    blurLayer.classList.add("active");
    modalDiv.classList.add("active");
};

const hideModal = function() {
    blurLayer.classList.remove("active");
    blurLayer.classList.remove("active");
};

const resetForm = function() {
    bookForm.reset();
};

const getBookFromForm = function() {
    const title = document.getElementById("title").value
        , author = document.getElementById("author").value
        , pages = document.getElementById("pages").value
        , isRead = document.getElementById("isRead").checked;
    
    const newBook = new Book(title, author, pages, isRead);

    library.addBook(newBook);
    resetForm();
    hideModal();
};