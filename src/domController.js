export const DomController = (taskList) => {
    const todoArea = document.getElementById("todo-area");
    
    const renderTodo = (taskList) => {
        todoArea.innerHTML = ``;

        taskList.forEach((todo, index) => {
            const taskCard = document.createElement("div");
            taskCard.classList.add("task-card");

            taskCard.innerHTML = `
            <h3>${todo.title}<h3>
            <p>${todo.dueDate}</p>
            <button class = "deleteBtn" data-index = ${index}>Del</button>
            `;
            todoArea.appendChild(taskCard);
        });
    };

    return { renderTodo };
    
}