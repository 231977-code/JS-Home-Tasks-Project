function completeTask(id) {

    let task = document.getElementById(id);
    task.classList.toggle("completed");

    styleAllTasks();
}

function removeTask(id) {

    let task = document.getElementById(id);
    task.parentElement.style.display = "none";
}

function styleAllTasks() {

    let allTasks = document.querySelectorAll("input");

    for (let i = 0; i < allTasks.length; i++) {
        allTasks[i].style.fontSize = "15px";
    }
}
