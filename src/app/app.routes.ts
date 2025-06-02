import { Routes } from '@angular/router';
import { ListComponent } from './todo/pages/list/list.component';
import { AddComponent } from './todo/pages/add/add.component';

export const routes: Routes = [
    {path: '', loadChildren: () => import("./todo/todo.module").then(m => m.TodoModule)},
    { path: '', redirectTo: 'todo', pathMatch: 'full' },
   
];
