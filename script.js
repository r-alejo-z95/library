const container = document.querySelector("#container");

const cards = [];

for (let i = 1; i <= 10; i++) {
  cards[i] = document.querySelector(`#card${i}`);
  //   buttons[i].addEventListener("click", () => {});
}

// console.log(cards);

const myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

// const bible = new Book("Bible", "God", 100, 777, true);
// console.table(bible);

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
