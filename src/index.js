import Task from "./Task.js";
import Database from "./Database.js";
import LocalStorageAgent from "./LocalStorageAgent.js";
import HeaderManager from "./HeaderManager.js";
import "./style.css";

const contentElement = document.getElementById("content");
contentElement.appendChild(document.createElement("header"));
contentElement.lastChild.id = "header";
contentElement.appendChild(document.createElement("div"));
contentElement.lastChild.id = "main";
contentElement.appendChild(document.createElement("footer"));
contentElement.lastChild.id = "footer";

const headerManager = new HeaderManager(contentElement);
const localStorageAgent = new LocalStorageAgent(Task);
const database = new Database(localStorageAgent);

headerManager.makeHeader()
const form = document.getElementById("newTaskForm");
form.onsubmit = addTask
// headerManager.makeList(database.tasks);
localStorageAgent.clear();

// document.querySelectorAll(".taskName button").forEach(element=> element.addEventListener("click", deleteTask))

function deleteTask(e){
  const deleteID = e.target.parentElement.parentElement.id;
  database.deleteTask(deleteID);
  // DOMmanager.makeList(database.tasks);
  // document.querySelectorAll(".taskName button").forEach(element=> element.addEventListener("click", deleteTask))


}

function addTask(e){
  e.preventDefault();
  const formData = new FormData(form);
  if (formData.get("name") === null || formData.get("name") === "") return
  database.addTask(new Task(Object.fromEntries(formData)));
  // DOMmanager.makeList(database.tasks);
  // document.querySelectorAll(".taskName button").forEach(element=> element.addEventListener("click", deleteTask))
  form.reset();

}


