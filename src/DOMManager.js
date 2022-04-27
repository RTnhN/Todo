class DOMManager {
  #parent
  #targetElement
  #bodyElement
  #headerElement
  #footerElement
  #mainElement
  #contentElement
  constructor(contentElement) {
    this.#contentElement = contentElement;
    this.#headerElement = document.createDocumentFragment();
    this.#mainElement = document.createDocumentFragment();
    this.#footerElement = document.createDocumentFragment();
    this.#contentElement.appendChild(document.createElement("header"));
    this.#contentElement.lastChild.id = "header";
    this.#contentElement.appendChild(document.createElement("div"));
    this.#contentElement.lastChild.id = "main";
    this.#contentElement.appendChild(document.createElement("footer"));
    this.#contentElement.lastChild.id = "footer";
  }
  makeHeader() {
    this.#headerElement.appendChild(document.createElement("div"));
    this.#headerElement.lastChild.id = "addTaskContainer";
    const addTaskContainer = this.#headerElement.lastChild;
    addTaskContainer.appendChild(document.createElement("button"));
    addTaskContainer.lastChild.id = "expandForm";
    addTaskContainer.lastChild.textContent = "↓";
    addTaskContainer.appendChild(document.createElement("input"));
    addTaskContainer.lastChild.id = "taskName";
    addTaskContainer.lastChild.type = "text";
    addTaskContainer.lastChild.name = "name";
    addTaskContainer.lastChild.setAttribute("form", "newTaskForm");
    addTaskContainer.appendChild(document.createElement("input"));
    addTaskContainer.lastChild.id = "createNewTask";
    addTaskContainer.lastChild.type = "submit";
    addTaskContainer.lastChild.value = "+";
    addTaskContainer.lastChild.setAttribute("form", "newTaskForm");

    this.#headerElement.appendChild(document.createElement("form"));
    const newTaskForm = this.#headerElement.lastChild;
    newTaskForm.id = "newTaskForm";
    newTaskForm.classList.add("hidden");
    newTaskForm.appendChild(document.createElement("input"));
    newTaskForm.lastChild.id = "description";
    newTaskForm.lastChild.placeholder = "Description";
    newTaskForm.lastChild.type = "text";
    newTaskForm.lastChild.name = "description";
    newTaskForm.appendChild(document.createElement("input"));
    newTaskForm.lastChild.id = "startDate";
    newTaskForm.lastChild.placeholder = "Start Date";
    newTaskForm.lastChild.type = "date";
    newTaskForm.lastChild.name = "startDate"
    newTaskForm.appendChild(document.createElement("input"));
    newTaskForm.lastChild.id = "EndDate";
    newTaskForm.lastChild.placeholder = "End Date";
    newTaskForm.lastChild.type = "date";
    newTaskForm.lastChild.name = "endDate";
    document.getElementById("header").appendChild(this.#headerElement);
    document.getElementById("expandForm").addEventListener("click", this.toggleHideForm.bind(this));
  }
  toggleHideForm(e) {
    const newTaskForm = document.getElementById("newTaskForm");
    if (newTaskForm.style.display === "flex") {
      newTaskForm.style.display = "none";
    } else {
      newTaskForm.style.display = "flex";
    }
  }
  makeList(tasks) {
    this.clearList();
    this.#mainElement.appendChild(document.createElement("div"));
    this.#mainElement.lastChild.id = "list";
    this.#targetElement = this.#mainElement.lastChild;
    tasks.forEach(this.makeTask.bind(this));
    document.getElementById("main").appendChild(this.#mainElement);
  }
  makeTask(task) {
    this.#targetElement.appendChild(document.createElement("div"))
    this.#targetElement = this.#targetElement.lastChild;
    this.#targetElement.className = "task";
    Object.entries(task).forEach(this.makeProperty.bind(this));
    this.#targetElement = this.#targetElement.parentElement;

  }
  makeProperty(data) {
    if (data[0] === "id") return
    this.#targetElement.appendChild(document.createElement("div"))
    this.#targetElement.lastChild.textContent = `${data[0]}:  ${data[1]}`;
    if (data[0] !== "name") {
      this.#targetElement.lastChild.classList.add("shrinkable");
      this.#targetElement.lastChild.classList.add("hidden");
    } else {
      this.#targetElement.firstChild.addEventListener("click", this.hideOtherParameters)
    }
  }
  hideOtherParameters(e) {
    const shrinkable = e.target.parentElement.querySelectorAll(".shrinkable");
    shrinkable.forEach(element => element.classList.contains("hidden") ? element.classList.remove("hidden") : element.classList.add("hidden"));
  }
  clearList() {
    while (document.getElementById("main").firstChild) {
      document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    }
  }
}


export default DOMManager;