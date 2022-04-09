var formEl = document.querySelector("#task-form");
var tasktoDoEl = document.querySelector('#task-to-do');

var createTaskHandler = function(event) { 
    event.preventDefault();
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasktoDoEl.appendChild(listItemEl);
};

formEl.addEventListener("submit", createTaskHandler);