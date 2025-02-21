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

//Create book cards to display in the container
const myLibrary = [
  new Book("A Game of Thrones", "George R. R. Martin", 1996, true),
  new Book("A Clash of Kings", "George R. R. Martin", 1998, true),
  new Book("A Storm of Swords", "George R. R. Martin", 2000, false),
];

//Render a book card
function renderBook(book, index) {
  const card = document.createElement("div");
  card.className = "card";
  card.dataset.index = index;

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

  const eraseBtn = document.createElement("button");
  eraseBtn.className = "erase-btn";
  eraseBtn.innerText = "x";
  eraseBtn.onclick = () => {
    myLibrary.splice(index, 1);
    renderLibrary();
  };
  card.appendChild(eraseBtn);

  container.appendChild(card);
}

//Render Library
function renderLibrary() {
  container.innerHTML = "";
  if (myLibrary.length === 0) {
    const emptyContainer = document.createElement("h2");
    emptyContainer.className = "empty-container";
    emptyContainer.innerText = "Click the button to add books";
    container.appendChild(emptyContainer);

    container.style.flexDirection = "column";
    container.style.gap = 0;
    plusBtn.style.fontSize = "5.5em";
  } else {
    container.style = false;
    plusBtn.style = false;

    myLibrary.forEach((book, index) => {
      renderBook(book, index);
    });
  }
  //Render new book button
  newBookBtn.appendChild(plusBtn);
  container.appendChild(newBookBtn);
}

//New book button
const newBookBtn = document.createElement("div");
newBookBtn.className = "new-book-card";

const plusBtn = document.createElement("h2");
plusBtn.className = "plus-button";
plusBtn.innerText = "📚";

renderLibrary();

//Add new book function
plusBtn.onclick = () => {
  fetch("dialog.html")
    .then((response) => response.text())
    .then((html) => {
      const dialogContainer = document.createElement("div");
      dialogContainer.innerHTML = html;
      document.body.appendChild(dialogContainer);

      const addBookDialog = document.getElementById("addBookDialog");
      addBookDialog.showModal();

      const cancelButton = document.getElementById("cancel");
      cancelButton.addEventListener("click", function () {
        addBookDialog.close();
      });

      const submitButton = document.getElementById("submit");
      submitButton.addEventListener("click", function (event) {
        event.preventDefault();

        const title = document.getElementById("title").value;
        const author = document.getElementById("author").value;
        const year = document.getElementById("year").value;
        const read = document.getElementById("read").checked;

        const newBook = new Book(title, author, year, read);
        myLibrary.push(newBook);
        renderLibrary();

        addBookDialog.close();
        dialogContainer.remove();
      });
    });
};
