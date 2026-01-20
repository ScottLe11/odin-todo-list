import './style.css';

import { Sidebar } from './sidebar.js';
import { Todo } from './todo.js';

console.log("Working")

const content = document.getElementById("content");
const header = document.createElement("h1");
header.textContent = "To Do List";

content.appendChild(header);

const mySidebar = Sidebar();

const mytodo = Todo("First to do", "Check out my first description", "goal #1", "wednesday", "Top");
// console.log(mytodo.title);
// console.log(mytodo.dueDate);

//const myDomController = domController();

