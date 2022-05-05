import Task from "./Modules/Templates/Task.js";
import Project from "./Modules/Templates/Project.js"
import Database from "./Modules/Templates/Database.js";
import LocalStorageAgent from "./Modules/Helpers/TaskProjectLocalStorageAgent.js";
import ProjectDOMManager from "./Modules/DOM/ProjectDOMManager.js";
import TaskDOMManager from "./Modules/DOM/TaskDOMManager.js";
import HeaderDOMManager from "./Modules/DOM/HeaderDOMManager.js";
import ProjectModalDOMManager from "./Modules/DOM/ProjectModalDOMManager.js";
import TaskCreateModalDOMManager from "./Modules/DOM/TaskCreateModalDOMManager.js";
import TaskInfoModalDOMManager from "./Modules/DOM/TaskInfoModalDOMManager.js";
import "./style.css";

const contentElement = document.getElementById("content");
contentElement.appendChild(document.createElement("header"));
contentElement.lastChild.id = "header";
const headerElement = contentElement.lastChild;
contentElement.appendChild(document.createElement("div"));
contentElement.lastChild.id = "projectSection";
const projectsElement = contentElement.lastChild;
contentElement.appendChild(document.createElement("div"));
contentElement.lastChild.id = "taskSection";
const tasksElement = contentElement.lastChild;
contentElement.appendChild(document.createElement("footer"));
contentElement.lastChild.id = "footer";
const footerElement = contentElement.lastChild;
document.body.appendChild(document.createElement("dialog"));
const projectModalElement = document.body.lastChild;
projectModalElement.id = "projectModal";
document.body.appendChild(document.createElement("dialog"));
const taskCreateModalElement = document.body.lastChild;
taskCreateModalElement.id = "taskCreateModal";
document.body.appendChild(document.createElement("dialog"));
const taskInfoModalElement = document.body.lastChild;
taskInfoModalElement.id = "taskInfoModal";

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const headerDOMManager = new HeaderDOMManager(headerElement);
const projectDOMManager = new ProjectDOMManager(projectsElement);
const taskDOMManager = new TaskDOMManager(tasksElement);
const projectModalDOMManager = new ProjectModalDOMManager(projectModalElement);
const taskCreateModalDOMManager = new TaskCreateModalDOMManager(taskCreateModalElement);
const taskInfoModalDOMManager = new TaskInfoModalDOMManager(taskInfoModalElement);
const localStorageAgent = new LocalStorageAgent(Task, Project, "todo");
const database = new Database(localStorageAgent);

projectsElement.addEventListener("drop", () => database.reorderProjects(projectDOMManager.projectsDivIds));

projectDOMManager.populateProjectsList(database.projects);

taskDOMManager.populateTasksList(database.projects[0]);
projectDOMManager.setProjectUnderline(database.projects[0].id)

projectDOMManager.newProjectButton.addEventListener("click", addProject);

function addProject() {
  database.addProject(new Project());
  projectDOMManager.addProject(database.lastProject);
}

projectDOMManager.projectsContainer.addEventListener("click", showProjectTasks);

function showProjectTasks(event) {
  if (event.target.id === "projectsContainer") return;
  const target = (event.target.tagName === "P") ? event.target.parentElement : event.target;
  projectDOMManager.setProjectUnderline(target.id);
  taskDOMManager.populateTasksList(database.getProjectById(target.id));
}

taskDOMManager.openProjectModalButton.addEventListener("click", openProjectModal);
function openProjectModal() {
  projectModalDOMManager.updateTargetProject(database.getProjectById(taskDOMManager.projectId));
  projectModalElement.showModal();
}

projectModalDOMManager.form.addEventListener("submit", updateProject);
function updateProject() {
  const formData = new FormData(projectModalDOMManager.form);
  const changed = { "id": taskDOMManager.projectId, "name": formData.get("name") }
  database.updateProject(changed);
  projectDOMManager.updateProject(database.getProjectById(taskDOMManager.projectId));
  taskDOMManager.populateTasksList(database.getProjectById(taskDOMManager.projectId));
}

projectModalDOMManager.deleteButton.addEventListener("click", deleteProject);
function deleteProject() {
  if (database.projects.length === 1) {
    database.deleteProject(projectModalDOMManager.targetProject);
    database.addProject(new Project())
  } else {
    database.deleteProject(projectModalDOMManager.targetProject);
  }
  projectDOMManager.populateProjectsList(database.projects);
  taskDOMManager.populateTasksList(database.projects[0]);
  projectDOMManager.setProjectUnderline(database.projects[0].id)
  projectModalElement.close()
}

taskDOMManager.createTaskButton.addEventListener("click", ()=> taskCreateModalElement.showModal());

taskCreateModalDOMManager.form.addEventListener("submit", addTask);
function addTask(e) {
  e.preventDefault();
  const newTask = new Task(taskCreateModalDOMManager.formData);
  database.addTask(newTask, taskDOMManager.projectId);
  taskDOMManager.addTask(newTask);
  taskCreateModalElement.close()
  taskCreateModalDOMManager.form.reset()
}

taskDOMManager.tasksContainer.addEventListener("change", completeTask);
async function completeTask(e) {
  if (e.target.tagName === "INPUT") await sleep(500);
  const taskID = e.target.parentElement.id;
  database.deleteTask(taskID);
  taskDOMManager.deleteTask(taskID);
}

taskDOMManager.tasksContainer.addEventListener("click", openTaskInfoModal);
function openTaskInfoModal(e){
  if (e.target === taskDOMManager.tasksContainer || e.target.tagName === "INPUT") return;
  const target = (e.target.tagName !== "DIV") ? e.target.parentElement : e.target;
  taskInfoModalDOMManager.updateTargetTask(database.getTaskByID(target.id));
  taskInfoModalElement.showModal();
}

taskInfoModalDOMManager.deleteButton.addEventListener("click", deleteTask);
function deleteTask(e){
  database.deleteTask(taskInfoModalDOMManager.taskId);
  taskDOMManager.deleteTask(taskInfoModalDOMManager.taskId);
  taskInfoModalElement.close();
}

taskInfoModalDOMManager.form.addEventListener("submit", updateTask);
function updateTask(e){
  const formData = taskInfoModalDOMManager.formData;
  database.updateTask(formData);
  taskDOMManager.updateTask(formData);

}
