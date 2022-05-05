class LocalStorageAgent {
  constructor(taskTemplate, projectTemplate, key) {
    this.taskTemplate = taskTemplate;
    this.projectTemplate = projectTemplate;
    this.key = key;
  }
  store(array) {
    window.localStorage.setItem(this.key, JSON.stringify(array));
  }
  unstore() {
    let projects = JSON.parse(window.localStorage.getItem(this.key));
    if (projects === null) {
      return [new this.projectTemplate()];
    } else {
      return projects.map(this.reassociateProjects.bind(this));
    }
  }
  reassociateProjects(project) {
    const projectReassociated = Object.assign(
      new this.projectTemplate(),
      project
    );
    projectReassociated.tasks = projectReassociated.tasks.map(
      this.reassociateTasks.bind(this)
    );
    return projectReassociated;
  }
  reassociateTasks(task) {
    const taskReassociated = Object.assign(new this.taskTemplate(), task);
    taskReassociated.startDate =
      taskReassociated.startDate === ""
        ? ""
        : new Date(taskReassociated.startDate);
    taskReassociated.endDate =
      taskReassociated.startDate === ""
        ? ""
        : new Date(taskReassociated.endDate);
    return taskReassociated;
  }
  clear() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageAgent;
