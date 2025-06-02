import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-todo-landing',
  imports: [RouterOutlet,NgIf,RouterLink],
  templateUrl: './todo-landing.component.html',
  styleUrl: './todo-landing.component.css'
})
export class TodoLandingComponent {

  constructor(public router: Router) {}

  isListPage(): boolean {
    return this.router.url === '/list';
  }
}
