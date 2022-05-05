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
  constructor(properties) {
    this.id = short.generate();
    this.name = '';
    this.startDate = '';
    this.endDate = '';
    this.description = '';
    this.status = '';
    this.priority = '';
    this.updateTask(properties);
  }

  updateTask(properties) {
    if (!properties) return;
    Object.entries(properties).forEach(([key, value]) => {
      if (key !== 'id') this[key] = value;
    });
  }

  toString() {
    return this.name;
  }
}

export default Task;
