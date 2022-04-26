class Database {
  tasks;
  #localStorageAgent;
  constructor(localStorageAgent) {
    this.#localStorageAgent = localStorageAgent
    this.tasks = [];
    this.fromLocalStorage()

  }
  addTask(newTask) {
    this.tasks.push(newTask);
    this.toLocalStorage()
  }
  deleteTask(id) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.toLocalStorage()
  }
  updateTask(updatedTask) {
    const updatedTaskID = updatedTask.id;
    const taskID = this.tasks.findIndex(task => task.id === updatedTaskID);
    this.tasks[taskID].updateTask(updatedTask);
  }
  getTask(id) {
    return this.tasks.filter(task => task.id === id);
  }
  toLocalStorage(){
    if (this.#localStorageAgent !== null) {
      this.#localStorageAgent.store(this.tasks);
    }
  }
  fromLocalStorage(){
    if (this.#localStorageAgent !== null) {
      this.tasks = this.#localStorageAgent.unstore();
  }
}


export default Database;