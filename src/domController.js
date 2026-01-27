export const DomController = () => {
  const todoArea = document.getElementById("todo-area");
  const projectArea = document.getElementById("project-area");
  const renderTodo = (taskList) => {
    todoArea.innerHTML = ``;

    taskList.forEach((todo, index) => {
      const taskCard = document.createElement("div");
      taskCard.classList.add("task-card");

      taskCard.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.dueDate}</p>
            <button class = "deleteBtn" data-index = ${index}>Del</button>
            `;
      todoArea.appendChild(taskCard);
    });
  };

  const renderProjects = (projectList) => {
    projectArea.innerHTML = ``;

    projectList.forEach((project, index) => {
      const projectItem = document.createElement("li");
      //projectItem.classList.add("");
      projectItem.textContent = project.getName();
      projectItem.classList.add("project-link");
      projectItem.dataset.index = index;
      projectArea.appendChild(projectItem);
    });
  };

  return { renderTodo, renderProjects };
};
