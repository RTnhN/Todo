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
  reassociateProjects(project){
    const projectReassociated = Object.assign(new this.projectTemplate(), project);
    projectReassociated.tasks.map(task=> Object.assign(new this.taskTemplate(), task));
    return projectReassociated
  }
  clear() {
    window.localStorage.removeItem(this.key);
  }
}

export default LocalStorageAgent;