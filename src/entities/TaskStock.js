export default class TaskStock {
    constructor({ name, description, category }) {
      this.id = Math.floor(Math.random() * 100000000);
      this.name = name;
      this.description = description;
      this.category = category;
      this.createdAt = new Date();
      this.updatedAt = new Date();
    }
  }
  