import './style.css';

import { Sidebar } from './sidebar.js';
import { Todo } from './todo.js';
import { ModalController } from './modal.js'
import { ProjectManager } from './projectManager.js'
import { DomController } from './domController.js';

console.log("Working")

const content = document.getElementById("content");
const projectHeading = document.createElement("h1");
const headingDiv = document.createElement("div");
const addBtn = document.createElement("button");
addBtn.id = "addBtn";
addBtn.textContent = "Add new task";

headingDiv.classList.add("heading");
projectHeading.textContent = "To Do List";

headingDiv.appendChild(projectHeading);
headingDiv.appendChild(addBtn);
content.appendChild(headingDiv);

const mySidebar = Sidebar();
const myProjectManager = ProjectManager();
const myDomController = DomController();



const myModalController = ModalController();
const addTaskBtn = document.querySelector('#addBtn');

addTaskBtn.addEventListener('click', () =>
{
    myModalController.open();
});

const todoForm = document.querySelector('#add-todo-form');
todoForm.addEventListener('submit', (e) =>{
    e.preventDefault();

    const title = document.querySelector('#title-input').value;
    const description = document.querySelector('#description-input').value;
    const dueDate = document.querySelector('#dueDate-input').value;
    const priority = document.querySelector('#priority-input').value;
    const notes = document.querySelector('#notes-input').value;

    const mytodo = Todo(title, description, dueDate, priority, notes);
    console.log("Created Todo Object:", mytodo);

    todoForm.reset();
    //mytodo.completeToggle();
    myModalController.close();
    myProjectManager.add(mytodo);
    myDomController.renderTodo(myProjectManager.getAll());
});
