import Task from "./Task.js";
import Project from "./Project.js"
import Database from "./Database.js";
import LocalStorageAgent from "./TaskProjectLocalStorageAgent.js";
import ProjectDOMManager from "./ProjectDOMManager.js";
import TaskDOMManager from "./TaskDOMManager.js";
import HeaderDOMManager from "./HeaderDOMManager.js";
import ProjectModalDOMManager from "./ProjectModalDOMManager.js";
import TaskModalDOMManager from "./TaskModalDOMManager.js";
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
document.body.appendChild(document.createElement("dialog"))
const projectModalElement = document.body.lastChild;
projectModalElement.id = "projectModal";
document.body.appendChild(document.createElement("dialog"))
const taskModalElement = document.body.lastChild;
taskModalElement.id = "taskModal";



const headerDOMManager = new HeaderDOMManager(headerElement);
const projectDOMManager = new ProjectDOMManager(projectsElement);
const taskDOMManager = new TaskDOMManager(tasksElement);
const projectModalDOMManager = new ProjectModalDOMManager(projectModalElement);
const taskModalDOMManager = new TaskModalDOMManager(taskModalElement);
const localStorageAgent = new LocalStorageAgent(Task, Project, "todo");
const database = new Database(localStorageAgent);

headerDOMManager.make()

projectDOMManager.make();
projectDOMManager.populateProjectsList(database.projects);

taskDOMManager.make(database.projects[0].name);
taskDOMManager.populateTasksList(database.projects[0]);
projectDOMManager.projectNames[0].classList.add("active");

projectModalDOMManager.make(database.projects[0]);
projectModalDOMManager.updateTargetProject(database.projects[0]);

taskModalDOMManager.make();


projectDOMManager.newProjectButton.addEventListener("click", addProject);
document.querySelectorAll("#projectsContainer>div").forEach(div=> div.addEventListener("click", showProjectTasks))

function addProject(){
  database.addProject(new Project());
  projectDOMManager.createProject(database.lastProject);
  projectDOMManager.lastProject.addEventListener("click", showProjectTasks)
}

function showProjectTasks(e){
  projectDOMManager.projectNames.forEach(name => name.classList.remove("active"));
  this.lastChild.classList.add("active");
  projectModalDOMManager.updateTargetProject(database.getProjectById(this.id))
  taskDOMManager.populateTasksList(database.getProjectById(this.id))
}


taskDOMManager.openProjectModalButton.addEventListener("click", openProjectModal);
projectModalDOMManager.form.addEventListener("submit", updateProject);
projectModalDOMManager.deleteButton.addEventListener("click", deleteProject);

function openProjectModal(event){
  projectModalElement.showModal()
}

function updateProject(){
  const formData = new FormData(projectModalDOMManager.form);
  const changed = {"id":projectModalDOMManager.targetProject.id ,"name":formData.get("name")}
  database.updateProject(changed);
  projectDOMManager.updateProject(database.getProjectById(projectModalDOMManager.targetProject.id));
  taskDOMManager.populateTasksList(projectModalDOMManager.targetProject);
  projectDOMManager.projectsDivs.forEach(div=> div.addEventListener("click", showProjectTasks));
}

function deleteProject(){
  if (database.projects.length === 1){
    database.removeProject(projectModalDOMManager.targetProject);
    database.addProject(new Project())
  } else {  
    database.removeProject(projectModalDOMManager.targetProject);
  }
  projectModalDOMManager.updateTargetProject(database.projects[0]);
  projectDOMManager.populateProjectsList(database.projects);
  taskDOMManager.populateTasksList(database.projects[0]);
  projectDOMManager.projectsDivs.forEach(div=> div.addEventListener("click", showProjectTasks));
  projectModalElement.close()
}
taskDOMManager.createTaskButton.addEventListener("click", ()=>taskModalElement.showModal())
taskModalDOMManager.form.addEventListener("submit", addTask);

function addTask(e){
  e.preventDefault();
  const newTask = Object.fromEntries(new FormData(taskModalDOMManager.form));
  database.addTask(newTask, projectModalDOMManager.targetProject);
  taskDOMManager.createTask(newTask);
  taskModalElement.close()
  taskModalDOMManager.form.reset()
}

