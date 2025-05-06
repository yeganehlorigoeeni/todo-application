import { Injectable } from '@angular/core';
import { NoteModel } from '../_models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notesList: NoteModel[] = [
    new NoteModel(1, 'Test Note', 'Test Description Note', new Date()),
    new NoteModel(2, 'Test Note2', 'Test Description Note', new Date()),
    new NoteModel(3, 'Test Note3', 'Test Description Note', new Date()),
  ]
  

  constructor() { }


  deleteNote(id: number) {
    var index = this.notesList.findIndex(x => x.id === id)
    this.notesList.splice(index, 1);
  }
}
