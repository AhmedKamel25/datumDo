import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TodoListService } from 'src/app/services/todo-list.service';
import { TodoGroup } from 'src/app/models/todo-group.model';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  editTodoForm: FormGroup;
  todoLists: TodoGroup[];
  copyTodoList: TodoGroup[] = [];
  selectValye:string = this.todoListService.editTask ;
  selectTakValue:string ;
  editTask:string ;
  editState:boolean = false;
  editName:string;
  constructor(private todoListService: TodoListService) { }

  ngOnInit(): void {
        this.editTodoForm = new FormGroup({
      'taskName': new FormControl('', Validators.required),
      'dueDate': new FormControl('', Validators.required),
      'editTask': new FormControl(''),
      'startDate': new FormControl('', Validators.required),
      'endDate': new FormControl('', Validators.required),
      'taskPriority': new FormControl('', Validators.required),
      'taskGroup': new FormControl(  this.selectValye, Validators.required),
    })

    this.todoLists = this.todoListService.getTodoLists();

    this.selectValye = this.todoListService.editTask

  }

  onchang(e){
    this.selectValye = e.target.value
  }
  onchangName(x){
    this.selectTakValue = x.target.value
    console.log(this.selectTakValue)
  }
  
  onEditTaskName(){
    this.editState = true
  }



  // Delete Task Function
  /*-----------------------------------*/
  onDeleteBtn(x,nam){
  let index = this.todoLists.findIndex(function (user) {return user.groupName == x })

  for(let i =0 ; i< this.todoLists[index].tasks.length; i++){
    if(this.todoLists[index].tasks[i].taskTitle == nam){
        this.todoLists[index].tasks.splice(i,1)
    }
 }

    console.log(index)
  }
  /*----------------------------------------------*/

  // submit Task Function
/*--------------------------------------------------- */
  onSubmit(e){
   let val = this.editTodoForm.value;
  let index = this.todoLists.findIndex(function (user) {return user.groupName == e })

  for(let i =0 ; i< this.todoLists[index].tasks.length; i++){
     if(this.todoLists[index].tasks[i].taskTitle == val.taskName ){
       if(this.editState && val.editTask){
        this.todoLists[index].tasks[i].taskTitle = val.editTask
       }
      this.todoLists[index].tasks[i].startDate = val.startDate
      this.todoLists[index].tasks[i].endDate = val.endDate
      this.todoLists[index].tasks[i].taskPriority = val.taskPriority
     }
  }

    this.editTodoForm.reset()
    this.editState = false
  }
  /*---------------------------------------------------------- */

}
