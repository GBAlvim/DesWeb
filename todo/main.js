function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        var todoList = document.getElementById("todoList");
        var li = document.createElement("li");
        li.textContent = taskText;
        todoList.appendChild(li);
        taskInput.value = "";
    }
}

function allowDrop(event) {
    event.preventDefault();
}

var draggedElement;

function dragStart(event) {
    draggedElement = event.target;
}

function drop(event, targetId) {
    event.preventDefault();
    var targetList = document.getElementById(targetId + "List");
    targetList.appendChild(draggedElement);
}

var taskLists = document.querySelectorAll('.task-list ul');
taskLists.forEach(function(list) {
    list.addEventListener('dragstart', dragStart);
});
