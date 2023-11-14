// If an li element is clicked, toggle the class "done" on the <li>

function toggleTodo(e) {
  e.target.classList.toggle("done");
}
const ul = document.querySelector(".today-list");
ul.addEventListener("click", toggleTodo);

// If a delete link is clicked, delete the li element / remove from the DOM
function deleteLi() {
  const list = document.querySelectorAll("li");
  for (let i = 0; i < list.length; i++) {
    list[i].remove();
  }
}

const delLink = document.querySelector(".delete");
delLink.addEventListener("click", deleteLi);
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)

const addListItem = function (e) {
  e.preventDefault();
  const ulEl = document.querySelector(".today-list");
  const newEl = document.createElement("li");
  const span = document.createElement("span");
  ulEl.appendChild(newEl);
  newEl.appendChild(span);
  const input = this.parentNode.getElementsByTagName("input")[0];
  const text = input.value; // use this text to create a new <li>
  span.innerText = text;

  input.value = "";

  // Finish function here
};
const aLink = document.querySelector(".add-item");
aLink.addEventListener("click", addListItem);
