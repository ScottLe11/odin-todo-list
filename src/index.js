import './style.css';

import { Sidebar } from './sidebar.js';
import { Todo } from './todo.js';
import { ModalController } from './modal.js'
import { Project } from './project.js'
import { ProjectManager } from './projectManager.js';
import { DomController } from './domController.js';

console.log("Working")

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
const myProject = Project();
const myDomController = DomController();
const myProjectManager = ProjectManager();


const TaskModalController = ModalController('modal-overlay', 'close-modal');
const ProjectModalController = ModalController("project-overlay", "close-project");
const addTaskBtn = document.querySelector('#addBtn');
const addProject = document.querySelector('#addProjectBtn');

// myDomController.renderProjects();
// myDomController.renderTodo();


addTaskBtn.addEventListener('click', () =>
{
    TaskModalController.open();
});

addProject.addEventListener('click', () =>
{
    ProjectModalController.open();
    mySidebar.close();
});

// switch betweenn projects
const switchProjects = document.querySelector('#side-menu');
switchProjects.addEventListener('click', (e) =>{
    if (e.target.classList.contains('project-link')) {
        const projectIndex = e.target.dataset.index;
        myProjectManager.setCurrentProject(projectIndex);
        myDomController.renderTodo(myProjectManager.getCurrentProject().getAll());
        projectHeading.textContent = myProjectManager.getCurrentProject().getName();
        mySidebar.close();
    }
});


const projectForm = document.querySelector('#add-project-form');
projectForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const projectName = document.querySelector('#projectName').value;
    myProjectManager.add(projectName);
    
    projectForm.reset();
    ProjectModalController.close();
    myDomController.renderProjects(myProjectManager.getAll());
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
    TaskModalController.close();
    const activeProject = myProjectManager.getCurrentProject();
    activeProject.add(mytodo);
    myDomController.renderTodo(activeProject.getAll());
});
