import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';

const routes: Routes = [
  {path: '', component: ListComponent},
  {path:'add-todo', component: AddTodoComponent},
  {path: 'edit', component: EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
