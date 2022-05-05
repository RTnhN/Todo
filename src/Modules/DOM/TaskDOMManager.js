import { formatRelative } from 'date-fns';

class TaskDOMManager {
  #tasksElement;
  #tasksPlaceholder;
  #tasksContainer;
  currentProject;
  constructor(taskElement) {
    this.#tasksElement = taskElement;
    this.#tasksPlaceholder = document.createDocumentFragment();
    this.make();
  }

  make() {
    this.#tasksPlaceholder.appendChild(document.createElement('div'));
    const tasksHeader = this.#tasksPlaceholder.lastChild;
    tasksHeader.id = 'tasksHeader';
    tasksHeader.appendChild(document.createElement('button'));
    tasksHeader.lastChild.id = 'openProjectModal';
    tasksHeader.lastChild.textContent = 'info';
    tasksHeader.lastChild.classList.add('material-symbols-outlined');
    tasksHeader.appendChild(document.createElement('p'));
    tasksHeader.lastChild.textContent = 'temp';
    tasksHeader.lastChild.id = 'tasksHeaderTitle';
    this.#tasksPlaceholder.appendChild(document.createElement('div'));
    this.#tasksContainer = this.#tasksPlaceholder.lastChild;
    this.#tasksContainer.id = 'tasksContainer';
    this.#tasksPlaceholder.appendChild(document.createElement('button'));
    this.#tasksPlaceholder.lastChild.id = 'newTaskButton';
    this.#tasksPlaceholder.lastChild.textContent = 'Create New Task';
    this.#tasksElement.appendChild(this.#tasksPlaceholder);
  }

  populateTasksList(project) {
    this.currentProject = project;
    this.tasksHeaderTitle.textContent = project.name;
    this.tasksHeaderTitle.dataset.projectId = project.id;
    this.clearTasksList();
    project.tasks.forEach(this.addTask.bind(this));
  }

  addTask(task) {
    this.#tasksContainer.appendChild(document.createElement('div'));
    const TaskDiv = this.#tasksContainer.lastChild;
    TaskDiv.id = task.id;
    TaskDiv.appendChild(document.createElement('input'));
    TaskDiv.lastChild.type = 'checkbox';
    TaskDiv.appendChild(document.createElement('p'));
    TaskDiv.lastChild.textContent = task.name;
    if (task.endDate !== '') {
      TaskDiv.appendChild(document.createElement('p'));
      TaskDiv.lastChild.textContent = 'Due: ';
      TaskDiv.lastChild.classList.add('taskDate');
      TaskDiv.appendChild(document.createElement('p'));
      TaskDiv.lastChild.textContent = formatRelative(task.endDate, new Date());
      TaskDiv.lastChild.classList.add('taskDate');
      TaskDiv.lastChild.classList.add('date');
    }
  }

  updateTask(task) {
    const taskElement = this.taskElement.getElementById(task.id);
    while (taskElement.firstChild) {
      taskElement.removeChild(taskElement.firstChild);
    }
    taskElement.appendChild(document.createElement('input'));
    taskElement.lastChild.type = 'checkbox';
    taskElement.appendChild(document.createElement('p'));
    taskElement.lastChild.textContent = task.name;
    if (task.endDate !== '') {
      taskElement.appendChild(document.createElement('p'));
      taskElement.lastChild.textContent = 'Due: ';
      taskElement.lastChild.classList.add('taskDate');
      taskElement.appendChild(document.createElement('p'));
      taskElement.lastChild.textContent = formatRelative(task.endDate, new Date());
      taskElement.lastChild.classList.add('taskDate');
      taskElement.lastChild.classList.add('date');
    }
  }

  clearTasksList() {
    while (this.#tasksContainer.firstChild) {
      this.#tasksContainer.removeChild(this.#tasksContainer.firstChild);
    }
  }

  deleteTask(id) {
    this.taskElement.getElementById(id).remove();
  }

  get openProjectModalButton() {
    return this.taskElement.getElementById('openProjectModal');
  }

  get createTaskButton() {
    return this.taskElement.getElementById('newTaskButton');
  }

  get tasksContainer() {
    return this.taskElement.getElementById('tasksContainer');
  }

  get tasksHeaderTitle() {
    return this.taskElement.getElementById('tasksHeaderTitle');
  }

  get projectId() {
    return this.taskElement.getElementById('tasksHeaderTitle').dataset.projectId;
  }
}

export default TaskDOMManager;
