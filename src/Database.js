class Database {
  projects;
  #storageAgent;
  constructor(storageAgent) {
    this.#storageAgent = storageAgent
    this.projects = this.readStorage();
  }
  addTask(task, projectId) {
    this.projects[this.getProjectIndexById(projectId)].addTask(task);
    this.writeStorage()
  }
  deleteTask(taskId) {
    this.projects.find(project => project.tasks.find(task => task.id === taskId)).removeTaskById(taskId);
    this.writeStorage()
  }
  updateTask(taskUpdated) {
    this.projects.find(project => project.tasks.find(task => task.id === taskUpdated.id)).updateTask(taskUpdated)
    this.writeStorage()
  }
  getTaskByID(id){
    return this.projects.find(project => project.tasks.find(task => task.id === id)).tasks.find(task=> task.id === id);
  }
  getProjectIndex(targetProject) {
    return this.projects.findIndex(project => project.id === targetProject.id);
  }
  getProjectIndexById(targetProjectId) {
    return this.projects.findIndex(project => project.id === targetProjectId);
  }
  getProjectById(id) {
    return this.projects.find(project => project.id === id)
  }
  addProject(targetProject) {
    this.projects.push(targetProject);
    this.writeStorage();
  }
  deleteProject(targetProject) {
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
  reorderProjects(projectIdsList){
    this.projects = projectIdsList.map(id=> this.projects.find((element=> element.id === id)))
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