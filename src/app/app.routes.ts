import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import("./todo/todo.module").then(m => m.TodoModule)}
];
