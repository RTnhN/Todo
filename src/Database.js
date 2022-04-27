class Database {
  tasks;
  #storageAgent;
  constructor(storageAgent) {
    this.#storageAgent = storageAgent
    this.tasks = this.readStorage();

  }
  addTask(newTask) {
    this.tasks.push(newTask);
    this.writeStorage()
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.writeStorage()
  }
  updateTask(updatedTask) {
    const updatedTaskID = updatedTask.id;
    const taskID = this.tasks.findIndex(task => task.id === updatedTaskID);
    this.tasks[taskID].updateTask(updatedTask);
  }
  getTask(id) {
    return this.tasks.filter(task => task.id === id);
  }
  writeStorage() {
    if (this.#storageAgent !== null) {
      this.#storageAgent.store(this.tasks);
    }
  }
  readStorage() {
    if (this.#storageAgent !== null) {
      return this.#storageAgent.unstore();
    } else
      return []
  }
}


export default Database;