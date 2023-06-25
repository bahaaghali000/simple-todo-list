let input = document.getElementById("input-box");
let btn = document.getElementById("btn");
let todosContainer = document.getElementById("todos-container");
let year = document.getElementById("year");

addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    addTask();
  }
});

btn.onclick = addTask;
function addTask() {
  if (input.value === "") {
    alert("You Must Write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    let span = document.createElement("span");
    span.className = "cancel";
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    todosContainer.prepend(li);
  }
  input.value = "";
  save();
}
todosContainer.onclick = function (element) {
  if (element.target.tagName === "LI") {
    element.target.classList.toggle("checked");
    save();
  } else if (element.target.tagName === "SPAN") {
    element.target.parentElement.remove();
    save();
  }
};

year.textContent = new Date().getFullYear();

// Local Storage
function save() {
  localStorage.setItem("data", todosContainer.innerHTML);
}
function get() {
  todosContainer.innerHTML = localStorage.getItem("data");
}
get();
