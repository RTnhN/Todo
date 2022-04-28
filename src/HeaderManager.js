class HeaderManager {
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
  textAreaAdjust(element) {
    element.target.style.height = "1px";
    element.target.style.height = (25+element.target.scrollHeight)+"px";
  }
  
}

export default HeaderManager;