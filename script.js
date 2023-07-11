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
        if (!this.doesBookExist(newBook)) {
            this.books.push(newBook);
        }
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


// Dom Elements:
const addBookBtn = document.getElementById("addBookBtn")
    , booksGrid = document.getElementById("booksGrid")
    , modalDiv = document.getElementById("modal")
    , blurLayer = document.getElementById("blurLayer")
    , bookForm = document.getElementById("addBookForm")
    , errorMsg = document.getElementById("errorMsg")
    , submitBtn = document.getElementById("submit");

    
const resetForm = function() {
    bookForm.reset();
};

const showModal = function() {
    resetForm();
    blurLayer.classList.add("active");
    modalDiv.classList.add("active");
};

const hideModal = function() {
    blurLayer.classList.remove("active");
    modalDiv.classList.remove("active");
};

const resetGrid = function() {
    booksGrid.innerHTML = "";
};

const getBookFromForm = function() {
    const title = document.getElementById("title").value
        , author = document.getElementById("author").value
        , pages = document.getElementById("pages").value
        , isRead = document.getElementById("isRead").checked;
    
    return new Book(title, author, pages, isRead);
};

const addBookToLibrary = function(e) {

    e.preventDefault();
    const newBook = getBookFromForm();

    if (library.doesBookExist(newBook)) {
        errorMsg.textContent= "This book already exists in your library.";
        errorMsg.classList.add("active");
        return;
    }
    library.addBook(newBook);
    createGrid();
    hideModal();
};

const createBookCard = function(book) {
    const bookCard = document.createElement("div")
            , title = document.createElement("p")
            , author = document.createElement("p")
            , pages = document.createElement("p")
            , buttons = document.createElement("div")
            , read = document.createElement("button")
            , remove = document.createElement("button");
        
        bookCard.classList.add("book-card");
        buttons.classList.add("buttons");
        remove.classList.add("remove");

        if (book.isRead) {
            if (read.classList.contains("not-read")) {
                read.classList.remove("not-read");
                read.textContent= "";
            }
            read.classList.add("read");
            read.textContent= "Read";
        } else {
            if (read.classList.contains("read")) {
                read.classList.remove("read")
                read.textContent= "";
            }
            read.classList.add("not-read");
            read.textContent= "Not Read";
        }

        title.textContent = book.title;
        author.textContent = book.author;
        pages.textContent = `${book.pages} pages`;
        remove.textContent = "Remove";


        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        buttons.appendChild(read);
        buttons.appendChild(remove);
        bookCard.appendChild(buttons);
        booksGrid.appendChild(bookCard);

}

const createGrid = function() {
    resetGrid();
    for(let book of library.books) {
        createBookCard(book);
    }
}

addBookBtn.addEventListener("click", showModal);
bookForm.addEventListener("submit", addBookToLibrary);