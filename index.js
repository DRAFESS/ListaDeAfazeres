document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    function addTask(taskText) {
        const listItem = document.createElement('li');

        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        listItem.appendChild(taskSpan);

        const completeButton = document.createElement('button');
        completeButton.textContent = '✔';
        completeButton.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });
        listItem.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '✖';
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);
    }

    addTaskButton.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTaskButton.click();
        }
    });
});
