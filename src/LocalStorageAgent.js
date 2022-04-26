class LocalStorageAgent {
  constructor(classTemplate) {
    this.classTemplate = classTemplate;
  }
  store(array) {
    window.localStorage.setItem("tasks", JSON.stringify(array));
  }
  unstore() {
    let tasks = JSON.parse(window.localStorage.get("tasks"));
    if (tasks === null) {
      return [];
    } else {
      return tasks.map(task => Object.assign(this.classTemplate, task));
    }
  }
  clear() {
    localStorage.removeItem("tasks");
  }
}

export default LocalStorageAgent;