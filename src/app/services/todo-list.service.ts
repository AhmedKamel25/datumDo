import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Task } from '../models/task.model';
import { TodoGroup } from '../models/todo-group.model';

@Injectable({
  providedIn: 'root',
})
export class TodoListService {


  todaySelected = new Subject();
  allSelected = new Subject();
  weekSelected = new Subject();
  doneTasksSelected = new Subject();
  pendingTasksSelected = new Subject();
  groupSelected = new Subject()

  selectedTask: Task;

  editTask:string;

  todoLists: TodoGroup[] = [
    {
      groupName: 'work',
      tasks: [
        {
          taskTitle: 'Meeting The Client',
          startDate: new Date("2021-05-15T01:10:00Z"),
          endDate: new Date("2021-05-15T01:10:00Z"),
          taskPriority: 'high',
          taskGroup: 'work',
        },
        {
          taskTitle: 'Update Database',
          startDate: new Date(),
          endDate: new Date("2021-06-15T01:10:00Z"),

          taskPriority: 'low',
          taskGroup: 'work',
        },
      ],
    },
    {
      groupName: 'personal',
      tasks: [
        {
          taskTitle: 'Dr Appointment',
          startDate: new Date(),
          endDate: new Date("2021-08-15T01:10:00Z"),
          taskPriority: 'high',
          taskGroup: 'personal',
        },
        {
          taskTitle: 'Groceiers',
          startDate: new Date(),
          endDate: new Date("2021-08-15T01:10:00Z"),
          taskPriority: 'mid',
          taskGroup: 'personal',
        },
        {
          taskTitle: 'fitness',
          startDate: new Date(),
          endDate: new Date("2021-08-15T01:10:00Z"),
          taskPriority: 'low',
          taskGroup: 'personal',
        },
      ],
    },
    {
      groupName: 'family',
      tasks: [
        {
          taskTitle: 'Family Video Call',
          startDate: new Date("2021-05-16T01:10:00Z"),
          endDate: new Date("2021-12-15T01:10:00Z"),
          taskPriority: 'high',
          taskGroup: 'family',
        }
      ],
    }
  ];

  constructor() {}

  getTodoLists() {
    return this.todoLists.slice();
  }

  selectTask(task: Task) {
    this.selectedTask = task;
  }

  
  // editTodo(index: number, updatedTodo: Task) {
  //   this.todoLists[index] = updatedTodo
  // }

  addTodoTask(task: Task) {
    let requiredGroup = this.todoLists.find(
      (g) => g.groupName === task.taskGroup
    );
    requiredGroup.tasks.push(task);
  }


}
