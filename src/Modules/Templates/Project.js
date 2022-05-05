import short from "short-uuid";

class Project {
  name;
  tasks;
  constructor(name = "new project") {
    this.id = this.id = short.generate();
    this.name = name;
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTaskById(id) {
    this.tasks = this.tasks.filter((item) => item.id !== id);
  }
  updateTask(updatedTask) {
    const updatedTaskID = updatedTask.id;
    const taskID = this.tasks.findIndex((task) => task.id === updatedTaskID);
    this.tasks[taskID].updateTask(updatedTask);
  }
  updateProject(properties) {
    if (!properties) return;
    Object.entries(properties).forEach(([key, value]) => {
      if (key !== "id") this[key] = value;
    });
  }
}

export default Project;
