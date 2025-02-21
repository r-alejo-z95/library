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

  const read = document.createElement("button");
  read.className = "read";
  read.innerHTML = `<p>Read: ${book.read === true ? "Yes" : "No"}</p>`;

  const lightGreen = "#90EE90",
    lightRed = "#FFCCCB";

  read.style.backgroundColor = book.read === true ? lightGreen : lightRed;
  read.onclick = () => {
    if (book.read === true) {
      read.style.backgroundColor = lightRed;
      read.innerHTML = "<p>Read: No</p>";
      book.read = false;
    } else {
      read.style.backgroundColor = lightGreen;
      read.innerHTML = "<p>Read: Yes</p>";
      book.read = true;
    }
  };
  card.appendChild(read);

  container.appendChild(card);
});

//Add new book button
const newBookBtn = document.createElement("div");
newBookBtn.className = "new-book-card";

const plusBtn = document.createElement("h2");
plusBtn.className = "plus-button";
plusBtn.innerText = "📚";

newBookBtn.appendChild(plusBtn);
container.appendChild(newBookBtn);

//Add new book function

// take params, create a book then store it in the array
plusBtn.onclick = () => {
  container.style.backgroundColor = "red";
};
