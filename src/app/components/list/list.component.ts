import { Component, OnInit } from '@angular/core';
import { TodoGroup } from 'src/app/models/todo-group.model';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  todoLists: TodoGroup[] = [];
  filteredGroup: string = '';


  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
    this.todoLists = this.todoListService.getTodoLists();



   

  }

  edittask(e){
     this.todoListService.editTask = e
  }
}
