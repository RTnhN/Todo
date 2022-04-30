class Database {
  projects;
  #storageAgent;
  constructor(storageAgent) {
    this.#storageAgent = storageAgent
    this.projects = this.readStorage();
  }
  addTask(task, project) {
    this.projects[this.getProjectIndex(project)].addTask(task);
    this.writeStorage()
  }
  deleteTask(task, project) {
    this.projects[this.getProjectIndex(project)].removeTask(task);
    this.writeStorage()
  }
  deleteTaskById(id, project){
    this.projects[this.getProjectIndex(project)].removeTaskById(id);
    this.writeStorage()
  }
  updateTask(task, project) {
    this.projects[this.getProjectIndex(project)].updateTask(task);
    this.writeStorage()
  }
  getProjectIndex(targetProject) {
    return this.projects.findIndex(project => project.id === targetProject.id);
  }
  getProjectById(id) {
    return this.projects.find(project => project.id === id)
  }
  addProject(targetProject) {
    this.projects.push(targetProject);
    this.writeStorage();
  }
  removeProject(targetProject) {
    if (this.projects.length <= 1) {
      this.projects = []
    } else {
      this.projects = this.projects.filter(project => project.id !== targetProject.id);
    }
    this.writeStorage();
  }
  updateProject(targetProject) {
    this.projects[this.getProjectIndex(targetProject)].updateProject(targetProject);
    this.writeStorage();
  }
  writeStorage() {
    if (this.#storageAgent !== null) {
      this.#storageAgent.store(this.projects);
    }
  }
  readStorage() {
    if (this.#storageAgent !== null) {
      return this.#storageAgent.unstore();
    } else
      return []
  }
  get lastProject(){
    return this.projects[this.projects.length -1];
  }
}

export default Database;