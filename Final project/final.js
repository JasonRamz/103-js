let tasks = [];

function register() {
    let task = document.getElementById("txtTask").value;

    if (task === "") {
        alert("Please add a task");
    } else {
        tasks.push({ task: task, completed: false });
        document.getElementById("txtTask").value = "";
        display();
    }
}

function display() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    for (let i = 0; i < tasks.length; i++) {
        let taskItem = document.createElement("div");
        taskItem.classList.add("task-item");

        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = tasks[i].completed;
        checkbox.addEventListener("change", function () {
            tasks[i].completed = checkbox.checked;
        });

        let label = document.createElement("label");
        label.textContent = tasks[i].task;

        taskItem.appendChild(checkbox);
        taskItem.appendChild(label);
        taskList.appendChild(taskItem);
    }
};

