import Task from "./Task.js";
import Database from "./Database.js";
import LocalStorageAgent from "./LocalStorageAgent.js";
import DOMManager from "./DOMManager.js";

import "./style.css";

const contentElement = document.getElementById("content");

const DOMmanager = new DOMManager(contentElement);
const localStorageAgent = new LocalStorageAgent(Task);
const database = new Database(localStorageAgent);

DOMmanager.makeHeader()
const form = document.getElementById("newTaskForm");
form.onsubmit = addTask
DOMmanager.makeList(database.tasks);
localStorageAgent.clear();

function addTask(e){
  e.preventDefault();
  const formData = new FormData(form);
  database.addTask(new Task(Object.fromEntries(formData)));
  DOMmanager.makeList(database.tasks);
  form.reset();

}

