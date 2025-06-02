import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NoteModel } from '../../../_models/note.model';
import { NoteService } from '../../../_services/note.service';
import { dataforlist, todoforlistmodel } from '../../../_models/todo.model';
import { NotesService } from '../../../_services/notes.service';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [NgForOf,RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  

  todos:todoforlistmodel[]=[];

  constructor(private notesServise:NotesService){
    this.notesServise.getNotes().subscribe(x =>{this.todos= x});
  }


  dates:dataforlist[]=[
    new dataforlist(new Date())
  ];


  deleteNote(id: number) {
    this.notesServise.deleteNote(id).subscribe(() => {
      this.todos = this.todos.filter(note => note.id !== id);
    });
  }
}
