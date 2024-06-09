document.addEventListener('DOMContentLoaded', (event) => {
    loadTasks();
});

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button class="edit" onclick="editTask(this)">Edit</button>
            <button class="delete" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    taskList.appendChild(taskItem);
    saveTasks();

    taskInput.value = '';
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('span').innerText;
    const newTaskText = prompt('Edit task:', taskText);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        taskItem.querySelector('span').innerText = newTaskText.trim();
        saveTasks();
    }
}

function deleteTask(button) {
    if (confirm('Are you sure you want to delete this task?')) {
        const taskItem = button.parentElement.parentElement;
        taskItem.remove();
        saveTasks();
    }
}

function saveTasks() {
    const taskList = document.getElementById('taskList');
    const tasks = [];

    taskList.querySelectorAll('li').forEach(taskItem => {
        tasks.push(taskItem.querySelector('span').innerText);
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (tasks) {
        const taskList = document.getElementById('taskList');
        tasks.forEach(taskText => {
            const taskItem = document.createElement('li');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <div>
                    <button class="edit" onclick="editTask(this)">Edit</button>
                    <button class="delete" onclick="deleteTask(this)">Delete</button>
                </div>
            `;
            taskList.appendChild(taskItem);
        });
    }
}
