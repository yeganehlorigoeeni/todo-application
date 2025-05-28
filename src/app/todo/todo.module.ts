import { NgModule } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { RouterLink, RouterOutlet } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgForOf,
    TodoRoutingModule
  ]
})
export class TodoModule { }
