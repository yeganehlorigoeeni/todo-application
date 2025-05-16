import { NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { NoteModel } from '../../../_models/note.model';
import { NoteService } from '../../../_services/note.service';

@Component({
  selector: 'app-list',
  imports: [NgForOf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  noteslist:NoteModel[] = []
  constructor(private noteServise:NoteService){
    this.noteslist=noteServise.notesList
  }
  deleteNote(id:number){
    this.noteServise.deleteNote(id)

  }

}
