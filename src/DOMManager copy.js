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

  }
  makeHeader() {
    this.#headerElement.appendChild(document.createElement("div"));
    this.#headerElement.lastChild.id = "addTaskContainer";
    this.#headerElement.lastChild.appendChild(document.createElement("div"));
    const addTaskContainerFixed = this.#headerElement.lastChild.lastChild;

    addTaskContainerFixed.appendChild(document.createElement("button"));
    addTaskContainerFixed.lastChild.id = "expandForm";
    addTaskContainerFixed.lastChild.classList.add("material-symbols-outlined");
    addTaskContainerFixed.lastChild.textContent = "expand_more";

    addTaskContainerFixed.appendChild(document.createElement("input"));
    addTaskContainerFixed.lastChild.id = "taskName";
    addTaskContainerFixed.lastChild.type = "text";
    addTaskContainerFixed.lastChild.name = "name";
    addTaskContainerFixed.lastChild.setAttribute("form", "newTaskForm");

    addTaskContainerFixed.appendChild(document.createElement("input"));
    addTaskContainerFixed.lastChild.id = "createNewTask";
    addTaskContainerFixed.lastChild.type = "submit";
    addTaskContainerFixed.lastChild.value = "add";
    addTaskContainerFixed.lastChild.classList.add("material-symbols-outlined");
    addTaskContainerFixed.lastChild.setAttribute("form", "newTaskForm");

    this.#headerElement.lastChild.appendChild(document.createElement("form"));
    const newTaskForm = this.#headerElement.lastChild.lastChild;
    newTaskForm.id = "newTaskForm";
    newTaskForm.classList.add("hidden");
    newTaskForm.style.display = "none";

    newTaskForm.appendChild(document.createElement("textarea"));
    newTaskForm.lastChild.id = "description";
    newTaskForm.lastChild.placeholder = "Description";
    newTaskForm.lastChild.onkeyup =  this.textAreaAdjust;
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
      document.getElementById("expandForm").textContent = "expand_more";
    } else {
      newTaskForm.style.display = "flex";
      document.getElementById("expandForm").textContent = "expand_less";
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
    this.#targetElement.id = task.id;
    Object.entries(task).forEach(this.makeProperty.bind(this));
    this.#targetElement = this.#targetElement.parentElement;

  }
  makeProperty(data) {
    if (data[0] === "id") return
    this.#targetElement.appendChild(document.createElement("div"))
    if (data[0] !== "name") {
      this.#targetElement.lastChild.textContent = `${data[1]}`;
      this.#targetElement.lastChild.classList.add("shrinkable");
      this.#targetElement.lastChild.classList.add("hidden");
    } else {
      this.#targetElement.lastChild.classList.add("taskName");
      this.#targetElement.lastChild.appendChild(document.createElement("button"));
      this.#targetElement.lastChild.lastChild.classList.add("material-symbols-outlined");
      this.#targetElement.lastChild.lastChild.classList.add("deleteButton");
      this.#targetElement.lastChild.lastChild.textContent = "delete";
      this.#targetElement.lastChild.lastChild.classList.add("fancyHidden");
      this.#targetElement.lastChild.appendChild(document.createElement("p"));
      this.#targetElement.lastChild.lastChild.textContent = `${data[1]}`;
      this.#targetElement.firstChild.addEventListener("click", this.hideOtherParameters);
      this.#targetElement.firstChild.addEventListener("mouseenter", (e)=>e.target.firstChild.classList.remove("fancyHidden"));
      this.#targetElement.firstChild.addEventListener("mouseleave", (e)=>e.target.firstChild.classList.add("fancyHidden"));
    }
  }
  hideOtherParameters(e) {
    const shrinkable = document.querySelectorAll(".shrinkable");
    shrinkable.forEach(element => element.classList.contains("hidden") ? element.classList.remove("hidden") : element.classList.add("hidden"));
  }
  clearList() {
    while (document.getElementById("main").firstChild) {
      document.getElementById("main").removeChild(document.getElementById("main").firstChild);
    }
  }

}

export default DOMManager;