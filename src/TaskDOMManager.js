class TaskDOMManager {
  #tasksElement;
  #tasksPlaceholder;
  #tasksContainer
  currentProject;
  constructor(taskElement) {
    this.#tasksElement = taskElement;
    this.#tasksPlaceholder = document.createDocumentFragment();
    this.make()
  }
  make() {
    this.#tasksPlaceholder.appendChild(document.createElement("div"));
    const tasksHeader = this.#tasksPlaceholder.lastChild;
    tasksHeader.id = "tasksHeader";
    tasksHeader.appendChild(document.createElement("button"));
    tasksHeader.lastChild.id = "openProjectModal";
    tasksHeader.lastChild.textContent = "info";
    tasksHeader.lastChild.classList.add("material-symbols-outlined");
    tasksHeader.appendChild(document.createElement("p"));
    tasksHeader.lastChild.textContent = "temp";
    tasksHeader.lastChild.id="tasksHeaderTitle";
    this.#tasksPlaceholder.appendChild(document.createElement("div"));
    this.#tasksContainer = this.#tasksPlaceholder.lastChild;
    this.#tasksContainer.id = "tasksContainer";
    this.#tasksPlaceholder.appendChild(document.createElement("button"));
    this.#tasksPlaceholder.lastChild.id = "newTaskButton";
    this.#tasksPlaceholder.lastChild.textContent = "Create New Task";
    this.#tasksElement.appendChild(this.#tasksPlaceholder);
  }
  populateTasksList(project){
    this.currentProject = project;
    document.querySelector("#tasksHeaderTitle").textContent = project.name;
    this.clearTasksList()
    project.tasks.forEach(this.createTask.bind(this))
  }
  createTask(task){
    this.#tasksContainer.appendChild(document.createElement("div"));
    const TaskDiv = this.#tasksContainer.lastChild;
    TaskDiv.id = task.id;
    TaskDiv.appendChild(document.createElement("input"))
    TaskDiv.lastChild.type="checkbox";
    TaskDiv.appendChild(document.createElement("p"));
    TaskDiv.lastChild.textContent = task.name;
  }
  clearTasksList(){
    while (this.#tasksContainer.firstChild){
      this.#tasksContainer.removeChild(this.#tasksContainer.firstChild);
    }
  }
  deleteTask(id){
    document.getElementById(id).remove()
  }
  
  get openProjectModalButton(){
    return document.getElementById("openProjectModal");
  }
  get createTaskButton(){
    return document.getElementById("newTaskButton");
  }
  // Might not need this method
  get checkboxes(){
    return document.querySelectorAll("#tasksContainer input");
  }
  get tasksContainer(){
    return document.getElementById("tasksContainer");

  }
}

export default TaskDOMManager;