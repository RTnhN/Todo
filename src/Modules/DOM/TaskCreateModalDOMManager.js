class TaskCreateModalDOMManager {
  #taskCreateModalElement;
  #taskCreateModalPlaceholder;
  targetTask;
  mode;
  constructor(taskCreateModalElement) {
    this.#taskCreateModalElement = taskCreateModalElement;
    this.#taskCreateModalPlaceholder = document.createDocumentFragment();
    this.make();
    document
      .getElementById('taskCreateModalCancel')
      .addEventListener('click', this.#taskCreateModalElement.close());
    document
      .getElementById('taskCreateModalStartDate')
      .addEventListener('change', this.startDateChange.bind(this));
    document
      .getElementById('taskCreateModalEndDate')
      .addEventListener('change', this.endDateChange.bind(this));
    this.mode = 'make';
    this.cancelButton.addEventListener('click', () => this.#taskCreateModalElement.close());
  }

  make() {
    this.#taskCreateModalPlaceholder.appendChild(document.createElement('form'));
    const taskCreateModalForm = this.#taskCreateModalPlaceholder.lastChild;
    taskCreateModalForm.id = 'taskCreateModalForm';
    taskCreateModalForm.setAttribute('method', 'dialog');
    taskCreateModalForm.appendChild(document.createElement('h1'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalTitle';
    taskCreateModalForm.lastChild.textContent = 'New Task';
    taskCreateModalForm.appendChild(document.createElement('label'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalTaskNameLabel';
    taskCreateModalForm.lastChild.for = 'taskCreateModalTaskName';
    taskCreateModalForm.lastChild.textContent = 'Task Name:';
    taskCreateModalForm.appendChild(document.createElement('input'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalTaskName';
    taskCreateModalForm.lastChild.placeholder = 'Task Name';
    taskCreateModalForm.lastChild.name = 'name';
    taskCreateModalForm.appendChild(document.createElement('label'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalStartDateLabel';
    taskCreateModalForm.lastChild.for = 'taskCreateModalStartDate';
    taskCreateModalForm.lastChild.textContent = 'Start Date:';
    taskCreateModalForm.appendChild(document.createElement('input'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalStartDate';
    taskCreateModalForm.lastChild.type = 'datetime-local';
    taskCreateModalForm.lastChild.value = 'Start Date';
    taskCreateModalForm.lastChild.name = 'startDate';
    taskCreateModalForm.appendChild(document.createElement('label'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalEndDateLabel';
    taskCreateModalForm.lastChild.for = 'taskCreateModalEndDate';
    taskCreateModalForm.lastChild.textContent = 'End Date:';
    taskCreateModalForm.appendChild(document.createElement('input'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalEndDate';
    taskCreateModalForm.lastChild.type = 'datetime-local';
    taskCreateModalForm.lastChild.value = 'End Date';
    taskCreateModalForm.lastChild.name = 'endDate';
    taskCreateModalForm.appendChild(document.createElement('input'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalSubmit';
    taskCreateModalForm.lastChild.type = 'submit';
    taskCreateModalForm.lastChild.value = 'Accept';
    taskCreateModalForm.appendChild(document.createElement('input'));
    taskCreateModalForm.lastChild.id = 'taskCreateModalCancel';
    taskCreateModalForm.lastChild.type = 'button';
    taskCreateModalForm.lastChild.value = 'Cancel';
    this.#taskCreateModalElement.appendChild(this.#taskCreateModalPlaceholder);
  }

  startDateChange(event) {
    const endDate = this.#taskCreateModalElement.getElementById('taskCreateModalEndDate');
    if (
      endDate.value !== ''
      && endDate.valueAsDate < event.target.valueAsDate
    ) {
      event.target.setCustomValidity('Start date must be before end date.');
    } else {
      event.target.setCustomValidity('');
      endDate.setCustomValidity('');
    }
  }

  endDateChange(event) {
    const startDate = this.#taskCreateModalElement.getElementById('taskCreateModalStartDate');
    if (
      startDate.value !== ''
      && startDate.valueAsDate > event.target.valueAsDate
    ) {
      event.target.setCustomValidity('End date must be after start date.');
    } else {
      event.target.setCustomValidity('');
      startDate.setCustomValidity('');
    }
  }

  get formData() {
    const formData = Object.fromEntries(new FormData(this.form));
    formData.startDate = formData.startDate === ''
      ? ''
      : new Date(formData.startDate);
    formData.endDate = formData.endDate === ''
      ? ''
      : new Date(formData.endDate);
    return formData;
  }

  get acceptButton() {
    return this.#taskCreateModalElement.getElementById('taskCreateModalSubmit');
  }

  get cancelButton() {
    return this.#taskCreateModalElement.getElementById('taskCreateModalCancel');
  }

  get form() {
    return this.#taskCreateModalElement.getElementById('taskCreateModalForm');
  }
}

export default TaskCreateModalDOMManager;
