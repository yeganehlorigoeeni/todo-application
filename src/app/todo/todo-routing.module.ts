import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoLandingComponent } from './todo-landing.component';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';

const routes: Routes = [
  {
    path: '', component: TodoLandingComponent, children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'add', component: AddComponent },
      { path: 'list', component: ListComponent },
      {path:'edit:id', component:EditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
