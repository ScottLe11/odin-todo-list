import './style.css';

import { Sidebar } from './sidebar.js';
import { Todo } from './todo.js';
import { ModalController } from './modal.js'

console.log("Working")

const content = document.getElementById("content");
const header = document.createElement("h1");
header.textContent = "To Do List";

content.appendChild(header);

const mySidebar = Sidebar();

//const mytodo = Todo("First to do", "Check out my first description", "goal #1", "wednesday", "Top");
// console.log(mytodo.title);
// console.log(mytodo.dueDate);

//const myDomController = domController();


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
});