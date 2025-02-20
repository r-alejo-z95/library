//Book object constructor
function Book(title, author, year, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

//Initiate and display books

//Get container
const container = document.getElementById("container");

//Display demo books
const demoBook1 = new Book(
  "A Game of Thrones",
  "George R. R. Martin",
  1996,
  true
);
const demoBook2 = new Book(
  "A Clash of Kings",
  "George R. R. Martin",
  1998,
  true
);
const demoBook3 = new Book(
  "A Storm of Swords",
  "George R. R. Martin",
  2000,
  false
);

//Create book cards to display in the container
const myLibrary = [demoBook1, demoBook2, demoBook3];

myLibrary.forEach((book) => {
  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("div");
  title.className = "title";
  title.innerHTML = `<h2>${book.title}</h2>`;
  card.appendChild(title);

  const author = document.createElement("div");
  author.className = "author";
  author.innerHTML = `<p>${book.author}</p>`;
  card.appendChild(author);

  const year = document.createElement("div");
  year.className = "year";
  year.innerHTML = `<p>${book.year}</p>`;
  card.appendChild(year);

  const read = document.createElement("div");
  read.className = "read";
  read.innerHTML = `<p>Read: ${book.read === true ? "Yes" : "No"}</p>`;
  card.appendChild(read);

  container.appendChild(card);
});

//Add new book button
const newBookBtnCont = document.createElement("div");
newBookBtnCont.className = "newBookBtnCont";

const newBookBtn = document.createElement("div");
newBookBtn.className = "card new-book-card";

newBookBtnCont.appendChild(newBookBtn);
container.appendChild(newBookBtnCont);

//Add new book function
function addBookToLibrary() {
  // take params, create a book then store it in the array
}
