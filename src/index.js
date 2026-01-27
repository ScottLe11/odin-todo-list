import "./style.css";

import { Sidebar } from "./sidebar.js";
import { Todo } from "./todo.js";
import { ModalController } from "./modal.js";
import { Project } from "./project.js";
import { ProjectManager } from "./projectManager.js";
import { DomController } from "./domController.js";
import { Storage } from "./storage.js";

console.log("Working");

const content = document.getElementById("content");
const projectHeading = document.createElement("h1");
const headingDiv = document.createElement("div");
const addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.textContent = "Add new task";
headingDiv.classList.add("heading");
projectHeading.textContent = "Home";

headingDiv.appendChild(projectHeading);
headingDiv.appendChild(addBtn);
content.appendChild(headingDiv);

const mySidebar = Sidebar();
//const myProject = Project();
const myStorage = Storage();
const myDomController = DomController();
const myProjectManager = ProjectManager();

const TaskModalController = ModalController("modal-overlay", "close-modal");
const ProjectModalController = ModalController(
  "project-overlay",
  "close-project",
);
const addTaskBtn = document.querySelector("#addBtn");
const addProject = document.querySelector("#addProjectBtn");

// myDomController.renderProjects();
// myDomController.renderTodo();

// loading and saving

const hydrate = (savedData) => {
  savedData.forEach((projData) => {
    const newProject = Project(projData.name);
    projData.tasks.forEach((t) => {
      const restoredTodo = Todo(
        t.title,
        t.description,
        t.dueDate,
        t.priority,
        t.notes,
      );
      if (t.completed) restoredTodo.completeToggle();
      newProject.add(restoredTodo);
    });
    myProjectManager.add(newProject.getName());
    const currentProjects = myProjectManager.getAll();
    const latestProject = currentProjects[currentProjects.length - 1];

    projData.tasks.forEach((t) => {
      const restoredTodo = Todo(
        t.title,
        t.description,
        t.dueDate,
        t.priority,
        t.notes,
      );
      latestProject.add(restoredTodo);
    });
  });
};

const existingData = myStorage.loadData();
if (existingData && existingData.length > 0) {
  myProjectManager.reset();
  hydrate(existingData);
} else {
  //myProjectManager.add(Project('Home'));
}

myDomController.renderProjects(myProjectManager.getAll());
myDomController.renderTodo(myProjectManager.getCurrentProject().getAll());

const syncStorage = () => {
  const dataToSave = myProjectManager.getAll().map((proj) => ({
    name: proj.getName(),
    tasks: proj.getAll().map((t) => ({
      title: t.title,
      description: t.description,
      dueDate: t.dueDate,
      priority: t.priority,
      notes: t.notes,
      completed: t.getStatus(),
    })),
  }));
  myStorage.saveData(dataToSave);
};

addTaskBtn.addEventListener("click", () => {
  TaskModalController.open();
});

addProject.addEventListener("click", () => {
  ProjectModalController.open();
  mySidebar.close();
});

// switch between projects
const switchProjects = document.querySelector("#side-menu");
switchProjects.addEventListener("click", (e) => {
  if (e.target.classList.contains("project-link")) {
    const projectIndex = e.target.dataset.index;
    myProjectManager.setCurrentProject(projectIndex);
    myDomController.renderTodo(myProjectManager.getCurrentProject().getAll());
    projectHeading.textContent = myProjectManager.getCurrentProject().getName();
    mySidebar.close();
  }
});

const projectForm = document.querySelector("#add-project-form");
projectForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const projectName = document.querySelector("#projectName").value;
  //const newProject = Project(projectName);
  myProjectManager.add(projectName);
  syncStorage();
  projectForm.reset();
  ProjectModalController.close();
  myDomController.renderProjects(myProjectManager.getAll());
});

const todoForm = document.querySelector("#add-todo-form");
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.querySelector("#title-input").value;
  const description = document.querySelector("#description-input").value;
  const dueDate = document.querySelector("#dueDate-input").value;
  const priority = document.querySelector("#priority-input").value;
  const notes = document.querySelector("#notes-input").value;

  const mytodo = Todo(title, description, dueDate, priority, notes);
  todoForm.reset();
  TaskModalController.close();
  const activeProject = myProjectManager.getCurrentProject();
  activeProject.add(mytodo);
  myDomController.renderTodo(activeProject.getAll());
  syncStorage();
});

const todoArea = document.getElementById("todo-area");

todoArea.addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    const index = e.target.dataset.index;
    const activeProject = myProjectManager.getCurrentProject();
    activeProject.remove(index);

    syncStorage();
    myDomController.renderTodo(activeProject.getAll());
  }
});
