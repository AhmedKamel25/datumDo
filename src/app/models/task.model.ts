export class Task {
  taskTitle: string;
  startDate: Date;
  endDate: Date;

  taskPriority: string;
  taskGroup: string

  constructor(task: {
    taskTitle?: string;
    startDate?: Date;
    endDate?: Date;

    taskPriority?: string;
    taskGroup?: string
  }) {
    if (task) {
      this.taskTitle = task.taskTitle;
      this.startDate = task.startDate;
      this.endDate = task.endDate;

      this.taskPriority = task.taskPriority;
      this.taskGroup = task.taskGroup
    }
  }
}
