// Getting the modal
let modal = document.querySelector("#modal");
// Getting the Click here button
let clickBtn = document.querySelector(".ClickBtn");
// Getting the close button
let closeBtn = document.querySelector(".closeBtn");

// Listener for click button
clickBtn.addEventListener("click", openModal);
// Listener fo closing button
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", windowClose);

function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function windowClose(e) {
  if (e.target.classList.contains("modal")) {
    modal.style.display = "none";
  }
}

// Getting the form
let form = document.querySelector("#addForm");
// Getting list items ul
let itemsList = document.querySelector(".list-items");
// Getting the search input
let filter = document.querySelector("#filter");

form.addEventListener("submit", addTask);
itemsList.addEventListener("click", deleteTask);
filter.addEventListener("keyup", filterTasks);

function addTask(e) {
  e.preventDefault();
  // Getting Input value
  let inputValue = document.querySelector("#inputForm").value;
  //create li element and button element
  let li = document.createElement("li");
  let button = document.createElement("button");
  //adding classes to the created elements
  li.className = "item";
  button.className = "btn-danger delete";
  // adding the input text as well as the button
  button.appendChild(document.createTextNode("X"));
  li.appendChild(document.createTextNode(inputValue));
  li.appendChild(button);
  // adding all the element to the items list ul
  itemsList.appendChild(li);
}

function deleteTask(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure ?")) {
      let li = e.target.parentElement;
      itemsList.removeChild(li);
      taskExist();
    }
  }
}

function filterTasks(e) {
  let text = e.target.value.toLowerCase();
  let items = itemsList.getElementsByTagName("li");
  Array.from(items).forEach(function (item) {
    let li = item.firstChild.textContent;
    if (li.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
// test if there is a task or not
function taskExist() {
  let items = itemsList.getElementsByTagName("li");
  let noTasks = document.querySelector(".no-tasks");
  if (items.length === 0) {
    noTasks.style.display = "block";
  } else {
    noTasks.style.display = "none";
  }
}
