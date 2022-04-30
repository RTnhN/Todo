import short from 'short-uuid';

class Project {
  name;
  tasks;
  constructor(name = "new project"){
    this.id = this.id = short.generate();
    this.name = name;
    this.tasks = [];
  }
  addTask(task){
    this.tasks.push(task);
  }
  removeTask(task){
    this.tasks = this.tasks.filter(item=> item.id !== task.id)
  }
  removeTaskById(id){
    this.tasks = this.tasks.filter(item=> item.id !== id)
  }
  updateTask(updatedTask) {
    const updatedTaskID = updatedTask.id;
    const taskID = this.tasks.findIndex(task => task.id === updatedTaskID);
    this.tasks[taskID].updateTask(updatedTask);
  }
  updateProject(properties){
    if (!properties) return
    if (Object.prototype.hasOwnProperty.call(properties, "id")){
      delete properties.id; // Any attempt to change the ID of a task is strictly forbidden. Just delete it out of the object.
    }
    Object.entries(properties).forEach(([key,value]) => this[key] = value);
  }
}

export default Project;