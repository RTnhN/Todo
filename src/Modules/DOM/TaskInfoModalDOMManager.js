import {format} from "date-fns";

class TaskInfoModalDOMManager {
  #taskInfoModalElement;
  #taskInfoModalPlaceholder;
  targetTask;
  constructor(taskInfoModalElement) {

    this.#taskInfoModalElement = taskInfoModalElement;
    this.#taskInfoModalPlaceholder = document.createDocumentFragment();
    this.make();
    document.getElementById("taskInfoModalCloseButton").addEventListener("click", this.#taskInfoModalElement.close());
    document.getElementById("taskInfoModalStartDate").addEventListener("change", this.startDateChange.bind(this));
    document.getElementById("taskInfoModalEndDate").addEventListener("change", this.endDateChange.bind(this));
  }
  make() {
    this.#taskInfoModalPlaceholder.appendChild(document.createElement("form"));
    const taskInfoModalForm = this.#taskInfoModalPlaceholder.lastChild;
    taskInfoModalForm.id = "taskInfoModalForm";
    taskInfoModalForm.setAttribute("method", "dialog");
    taskInfoModalForm.appendChild(document.createElement("h1"));
    taskInfoModalForm.lastChild.id="taskInfoModalTitle";
    taskInfoModalForm.lastChild.textContent = "Task Info";
    taskInfoModalForm.appendChild(document.createElement("label"));
    taskInfoModalForm.lastChild.id = "taskInfoModalTaskNameLabel";
    taskInfoModalForm.lastChild.for = "taskInfoModalTaskName";
    taskInfoModalForm.lastChild.textContent = "Task Name:";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalTaskName";
    taskInfoModalForm.lastChild.placeholder = "Task Name";
    taskInfoModalForm.lastChild.name = "name";
    taskInfoModalForm.appendChild(document.createElement("label"));
    taskInfoModalForm.lastChild.id = "taskInfoModalStartDateLabel";
    taskInfoModalForm.lastChild.for = "taskInfoModalStartDate";
    taskInfoModalForm.lastChild.textContent = "Start Date:";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalStartDate";
    taskInfoModalForm.lastChild.type = "datetime-local";
    taskInfoModalForm.lastChild.value = "Start Date";
    taskInfoModalForm.lastChild.name = "startDate";
    taskInfoModalForm.appendChild(document.createElement("label"));
    taskInfoModalForm.lastChild.id = "taskInfoModalEndDateLabel";
    taskInfoModalForm.lastChild.for = "taskInfoModalEndDate";
    taskInfoModalForm.lastChild.textContent = "End Date:";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalEndDate";
    taskInfoModalForm.lastChild.type = "datetime-local";
    taskInfoModalForm.lastChild.value = "End Date";
    taskInfoModalForm.lastChild.name = "endDate";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalAcceptButton";
    taskInfoModalForm.lastChild.type = "submit";
    taskInfoModalForm.lastChild.value = "accept";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalCloseButton";
    taskInfoModalForm.lastChild.type = "button";
    taskInfoModalForm.lastChild.value = "close";
    taskInfoModalForm.appendChild(document.createElement("input"));
    taskInfoModalForm.lastChild.id = "taskInfoModalDeleteButton";
    taskInfoModalForm.lastChild.type = "button";
    taskInfoModalForm.lastChild.value = "delete";
    this.#taskInfoModalElement.appendChild(this.#taskInfoModalPlaceholder);
  }
  startDateChange(event){
    const endDate = document.getElementById("taskInfoModalEndDate");
    if (endDate.value !== "" && endDate.valueAsDate < event.target.valueAsDate){
      event.target.setCustomValidity("Start date must be before end date.");

    } else {
      event.target.setCustomValidity("");
      endDate.setCustomValidity("");
    }
  }

  endDateChange(event){
    const startDate = document.getElementById("taskInfoModalStartDate");
    if (startDate.value !== "" && startDate.valueAsDate > event.target.valueAsDate){
      event.target.setCustomValidity("End date must be after start date.");

    } else {
      event.target.setCustomValidity("");
      startDate.setCustomValidity("");
    }
  }
  updateTargetTask(task){
    this.targetTask = task;
    document.getElementById("taskInfoModalTaskName").value = task.name;
    document.getElementById("taskInfoModalStartDate").value = task.startDate === "" ? "": format(task.startDate, "yyyy-MM-dd'T'kk:mm");
    document.getElementById("taskInfoModalEndDate").value = task.endDate === "" ? "": format(task.endDate, "yyyy-MM-dd'T'kk:mm");
    this.#taskInfoModalElement.setAttribute("data-taskID", task.id);
  }

  get formData(){
    const formData = Object.fromEntries(new FormData(this.form));
    formData.id = this.taskId;
    formData.startDate = formData.startDate === "" ? "" : new Date(formData.startDate);
    formData.endDate = formData.endDate === "" ? "" : new Date(formData.endDate);
    return formData;
  }

  get acceptButton() {
    return document.getElementById("taskInfoModalAcceptButton");
  }
  get cancelButton() {
    return document.getElementById("taskInfoModalCancelButton");
  }
  get deleteButton(){
    return document.getElementById("taskInfoModalDeleteButton");
  }
  get form(){
    return document.getElementById("taskInfoModalForm");
  }
  get taskId(){
    return this.targetTask.id;
  }
}

export default TaskInfoModalDOMManager;