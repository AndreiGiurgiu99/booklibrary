const myLibrary= [];

const container = document.querySelector(".library")

function Book(title,author,pages,genre,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;

}

function addBookToLibrary(title,author,pages,genre,read){
    let newBook = new Book(title,author,pages,genre,read)

    myLibrary.push(newBook)
    return newBook
}

// function displayBooks(){
//     for(let b of myLibrary){

//         let template = document.createElement("div");
//         let info = document.createElement("div")

//         template.classList.add("book")
//         info.classList.add("info")

//         let title = document.createElement("h3")
//         title.textContent = b.title

//         let author = document.createElement("p")
//         author.textContent = "by " + b.author
        
//         let pages = document.createElement("p")
//         pages.innerHTML = "<b>Pages</b>: " + b.pages

//         let genre = document.createElement("p")
//         genre.innerHTML = "<b>Genre</b>: " + b.genre

//         let readOr = document.createElement("p")
//         readOr.innerHTML = "<b>Read</b>: " + b.read
        
//         info.appendChild(pages);
//         info.appendChild(genre);
//         info.appendChild(readOr);

//         template.appendChild(title);
//         template.appendChild(author);
//         template.appendChild(info);

//         container.appendChild(template);


//     }
// }

function displayBooks(b){
        
        let template = document.createElement("div");
        let info = document.createElement("div")

        template.classList.add("book")
        info.classList.add("info")

        let title = document.createElement("h3")
        title.textContent = b.title

        let author = document.createElement("p")
        author.textContent = "by " + b.author
        
        let pages = document.createElement("p")
        pages.innerHTML = "<b>Pages</b>: " + b.pages

        let genre = document.createElement("p")
        genre.innerHTML = "<b>Genre</b>: " + b.genre

        let readOr = document.createElement("p")
        readOr.innerHTML = "<b>Read</b>: " + b.read

        let delete1 = document.createElement("button");
        delete1.innerHTML = "<b>Delete book</b>";
        
        info.appendChild(pages);
        info.appendChild(genre);
        info.appendChild(readOr);
        info.appendChild(delete1);

        template.appendChild(title);
        template.appendChild(author);
        template.appendChild(info);

        container.appendChild(template);

}

const modal = document.querySelector("#myModal");
const openModalBtn = document.querySelector(".openModal")
const closeModalBtn = document.querySelector(".close-btn")

openModalBtn.addEventListener("click", ()=>{
    modal.style.display = "flex";
});

closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none"
})

document.querySelector("#modalForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let title = document.querySelector("#title").value 
    let author = document.querySelector("#author").value 
    let pages = document.querySelector("#pages").value 
    let genre = document.querySelector("#genre").value 
    let read = document.querySelector("#read").value 
    
    let book = addBookToLibrary(title,author,pages,genre,read)

    displayBooks(book)
    modal.style.display = "none"; 

    for (b in myLibrary) {
        console.log(myLibrary[b])
    }

});


