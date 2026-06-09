const form = document.querySelector("form");
const addNewBook = document.querySelector(".create_book_btn");
const addBook = document.querySelector(".add_book_btn");
const cancelBook = document.querySelector(".cancel");
const bookTitle = document.getElementById("book_title");
const authorName = document.getElementById("author_name");
const bookPages = document.getElementById("book_pages");

const showForm = () => form.classList.remove("hidden");
const hideForm = () => form.classList.add("hidden");

document.addEventListener("click", (e) => {
    const clickedOpen = e.target.closest(".create_book_btn");
    const clickedClose =
        e.target.closest(".cancel") || e.target.closest(".add_book_btn");

    if (clickedOpen) showForm();
    if (clickedClose) hideForm();
});

form.addEventListener("submit", (e) => {
    e.preventDefault(); // so it doesn't reload/navigate
    // addBookToLibrary(...)
    form.classList.add("hidden");
});

const myLibrary = [];

function Book(title, author, pages) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = crypto.randomUUID();
}

function addBookToLibrary() {
    // take params, create a book then store it in the array
}
