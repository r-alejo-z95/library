const container = document.querySelector("#container");

const cards = [];

for (let i = 1; i <= 10; i++) {
  const card = document.querySelector(`#card${i}`);
  cards[i] = card;
  window[`card${i}`] = card; // Assign each card to a global variable
  //   buttons[i].addEventListener("click", () => {});
}

const myLibrary = [];

function Book(title, author, year, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.read = read;
}

const bible = new Book("Bible", "God", 100, true);
// console.table(bible);

function addBookToLibrary() {
  // take params, create a book then store it in the array
}
