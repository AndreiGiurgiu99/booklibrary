const myLibrary = [];
const container = document.querySelector(".library");


function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}


Book.prototype.toggleReadStatus = function() {
    this.read = this.read === "Read" ? "Not Read" : "Read";
};

function addBookToLibrary(title, author, pages, genre, read) {
    let newBook = new Book(title, author, pages, genre, read);
    myLibrary.push(newBook);
    return newBook;
}

function displayBooks(b, index) {
    let template = document.createElement("div");
    let info = document.createElement("div");

    template.classList.add("book");
    info.classList.add("info");

    let title = document.createElement("h3");
    title.textContent = b.title;

    let author = document.createElement("p");
    author.textContent = "by " + b.author;

    let pages = document.createElement("p");
    pages.textContent = "Pages: " + b.pages;

    let genre = document.createElement("p");
    genre.textContent = "Genre: " + b.genre;

    let readOr = document.createElement("p");
    readOr.textContent = "Read: " + b.read;

    let delete1 = document.createElement("button");
    delete1.textContent = "Delete book";


    let changeReadStatus = document.createElement("button");
    changeReadStatus.textContent = "Change Read Status";


    changeReadStatus.addEventListener("click", () => {
        b.toggleReadStatus(); 
        readOr.textContent = "Read: " + b.read;  
    });


    delete1.addEventListener("click", () => {
        myLibrary.splice(index, 1); 
        container.removeChild(template); 
    });

    info.appendChild(pages);
    info.appendChild(genre);
    info.appendChild(readOr);
    info.appendChild(changeReadStatus);
    info.appendChild(delete1); 

    template.appendChild(title);
    template.appendChild(author);
    template.appendChild(info);

    container.appendChild(template);
}

const modal = document.querySelector("#myModal");
const openModalBtn = document.querySelector(".openModal");
const closeModalBtn = document.querySelector(".close-btn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
});

document.querySelector("#modalForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let genre = document.querySelector("#genre").value;
    let read = document.querySelector("#read").value;

    // Add validation (optional)
    if (!title || !author || !pages || !genre || !read) {
        alert("Please fill in all fields.");
        return;
    }

    let book = addBookToLibrary(title, author, pages, genre, read);

    displayBooks(book, myLibrary.length - 1);

    modal.style.display = "none";


    myLibrary.forEach(b => console.log(b));
});
