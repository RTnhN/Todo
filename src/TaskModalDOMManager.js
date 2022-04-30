class TaskModalDOMManager {
  #taskModalElement;
  #taskModalPlaceholder;
  targetTask;
  constructor(taskModalElement) {
    this.#taskModalElement = taskModalElement;
    this.#taskModalPlaceholder = document.createDocumentFragment();
    this.make()
  }
  make() {
    this.#taskModalPlaceholder.appendChild(document.createElement("form"));
    const taskModalForm = this.#taskModalPlaceholder.lastChild;
    taskModalForm.id = "taskModalForm";
    taskModalForm.setAttribute("method", "dialog");
    taskModalForm.appendChild(document.createElement("h1"));
    taskModalForm.lastChild.id="taskModalTitle";
    taskModalForm.lastChild.textContent = "New Task";
    taskModalForm.appendChild(document.createElement("label"));
    taskModalForm.lastChild.id = "taskModalTaskNameLabel";
    taskModalForm.lastChild.for = "taskModalTaskName";
    taskModalForm.lastChild.textContent = "Task Name:";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalTaskName";
    taskModalForm.lastChild.placeholder = "Task Name";
    taskModalForm.lastChild.name = "name";
    taskModalForm.appendChild(document.createElement("label"));
    taskModalForm.lastChild.id = "taskModalStartDateLabel";
    taskModalForm.lastChild.for = "taskModalStartDate";
    taskModalForm.lastChild.textContent = "Start Date:";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalStartDate";
    taskModalForm.lastChild.type = "date";
    taskModalForm.lastChild.value = "Start Date";
    taskModalForm.lastChild.name = "startDate";
    taskModalForm.appendChild(document.createElement("label"));
    taskModalForm.lastChild.id = "taskModalEndDateLabel";
    taskModalForm.lastChild.for = "taskModalEndDate";
    taskModalForm.lastChild.textContent = "End Date:";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalEndDate";
    taskModalForm.lastChild.type = "date";
    taskModalForm.lastChild.value = "End Date";
    taskModalForm.lastChild.name = "endDate";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalSubmit";
    taskModalForm.lastChild.type = "submit";
    taskModalForm.lastChild.value = "Make Task";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalCancel";
    taskModalForm.lastChild.type = "button";
    taskModalForm.lastChild.value = "Cancel";
    this.#taskModalElement.appendChild(this.#taskModalPlaceholder);
  }

  get acceptButton() {
    return document.getElementById("taskModalSubmit");
  }
  get cancelButton() {
    return document.getElementById("taskModalCancel");
  }
  get form(){
    return document.getElementById("taskModalForm");
  }
}

export default TaskModalDOMManager;