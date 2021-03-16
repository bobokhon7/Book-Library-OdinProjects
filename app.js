const submit = document.getElementById("submitBook");

//Book constructor
function Book(title, author, number, read) {
  this.title = title;
  this.author = author;
  this.number = number;
  this.read = read;
}

submit.addEventListener("click", addBook);

function addBook(e) {
  e.preventDefault();
  const titleName = document.getElementById("titleBook").value;
  const authorName = document.getElementById("author").value;
  const pageNumber = document.getElementById("pageNumber").value;
  const checkBox = document.getElementById("checkbox").checked;

  let book = new Book(titleName, authorName, pageNumber, checkBox);
  if (
    titleName === "" ||
    titleName.trim() === "" ||
    authorName === "" ||
    authorName.trim() === "" ||
    pageNumber === ""
  ) {
    alert("Please write all information!!");
  } else {
    getBooks(book);
    showMessage("Book Added", "success");
    clear();
  }
}

function clear() {
  document.getElementById("titleBook").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pageNumber").value = "";
}

function getBooks(book) {
  const bookList = document.getElementById("bookList");

  //create Elemnt
  const row = document.createElement("tr");
  // row.className = "delete";
  //insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.number}</td>
  <td >${book.read ? "Read" : "Not Read"}</td>
  <td> <a href = "#" className="delete">X</a> </td>`;
  bookList.appendChild(row);
  // console.log(bookList);
}

//show the message alert in DOM
function showMessage(message, classTitle) {
  const div = document.createElement("div");
  //Add Class
  div.className = `alert ${classTitle}`;
  console.log(div);
  //Add text
  div.appendChild(document.createTextNode(message));
  //get parent
  const container = document.querySelector(".container");
  //get form
  const form = document.querySelector("#book-form");

  //inser alert before the from
  container.insertBefore(div, form);

  //set time and remove alert
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 3000);
}

//remove from the list
function removeItem(target) {
  if ((target.className = "delete")) {
    target.parentElement.parentElement.remove();
  }
}

//addevent Listener to remove button
const bookList = document
  .getElementById("bookList")
  .addEventListener("click", function (e) {
    removeItem(e.target);
    showMessage("Book Removed", "error");
    e.preventDefault();
  });
