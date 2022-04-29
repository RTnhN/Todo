import short from 'short-uuid';

class Task {
  id;
  name;
  startDate;
  endDate;
  description;
  status;
  priority;
  parentProject;
  constructor(properties){
    this.id = short.generate();
    this.name = "";
    this.startDate = "";
    this.endDate = "";
    this.description = "";
    this.status = "";
    this.priority = "";
    this.updateTask(properties);
  }
  updateTask(properties){
    if (!properties) return
    if (Object.prototype.hasOwnProperty.call(properties, "id")){
      delete properties.id; // Any attempt to change the ID of a task is strictly forbidden. Just delete it out of the object.
    }
    Object.entries(properties).forEach(([key,value]) => this[key] = value);
  }
}

export default Task;