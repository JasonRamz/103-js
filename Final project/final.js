// Array to store tasks
const tasks = [];

// Function to add a task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");
    const taskCount = document.getElementById("taskCount");

    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please Enter A Task!");
        return;
    }

    // Add the task to the array
    tasks.push(taskText);

    // Update the task list and count
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const listItem = document.createElement("div");
        listItem.innerText = `${index + 1}. ${task}`;
        taskList.appendChild(listItem);
    });

    taskCount.innerText = tasks.length;

    // Clear the input field
    taskInput.value = "";
}
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.addEventListener('click', addTask);

// Add enter key event listener for convenience
const taskInput = document.getElementById('taskInput');
taskInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
});