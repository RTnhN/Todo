class TaskModalDOMManager {
  #taskModalElement;
  #taskModalPlaceholder;
  targetTask;
  constructor(taskModalElement) {
    this.#taskModalElement = taskModalElement;
    this.#taskModalPlaceholder = document.createDocumentFragment();
    this.make();
    document.getElementById("taskModalCancel").addEventListener("click", this.#taskModalElement.close());
    document.getElementById("taskModalStartDate").addEventListener("change", this.startDateChange.bind(this));
    document.getElementById("taskModalEndDate").addEventListener("change", this.endDateChange.bind(this));
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
    taskModalForm.lastChild.type = "datetime-local";
    taskModalForm.lastChild.value = "Start Date";
    taskModalForm.lastChild.name = "startDate";
    taskModalForm.appendChild(document.createElement("label"));
    taskModalForm.lastChild.id = "taskModalEndDateLabel";
    taskModalForm.lastChild.for = "taskModalEndDate";
    taskModalForm.lastChild.textContent = "End Date:";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalEndDate";
    taskModalForm.lastChild.type = "datetime-local";
    taskModalForm.lastChild.value = "End Date";
    taskModalForm.lastChild.name = "endDate";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalSubmit";
    taskModalForm.lastChild.type = "submit";
    taskModalForm.lastChild.value = "Make";
    taskModalForm.appendChild(document.createElement("input"));
    taskModalForm.lastChild.id = "taskModalCancel";
    taskModalForm.lastChild.type = "button";
    taskModalForm.lastChild.value = "Cancel";
    this.#taskModalElement.appendChild(this.#taskModalPlaceholder);
  }
  startDateChange(event){
    const endDate = document.getElementById("taskModalEndDate");
    if (endDate.value !== "" && endDate.valueAsDate < event.target.valueAsDate){
      event.target.setCustomValidity("Start date must be before end date.");

    } else {
      event.target.setCustomValidity("");
      endDate.setCustomValidity("");
    }
  }

  endDateChange(event){
    const startDate = document.getElementById("taskModalStartDate");
    if (startDate.value !== "" && startDate.valueAsDate > event.target.valueAsDate){
      event.target.setCustomValidity("End date must be after start date.");

    } else {
      event.target.setCustomValidity("");
      startDate.setCustomValidity("");
    }
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