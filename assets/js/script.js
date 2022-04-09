var buttonEl = document.querySelector('#save-task');
var tasktoDoEl = document.querySelector('#task-to-do');

var createTaskHandler = function() { 
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = "This is a new task";
    tasktoDoEl.appendChild(listItemEl);
};


buttonEl.addEventListener('click', createTaskHandler);