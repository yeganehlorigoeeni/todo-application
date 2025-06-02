import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { todoforlistmodel, todoforsavemodel } from '../_models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private http:HttpClient) { }

  getNotes(): Observable<todoforlistmodel[]> {
    return this.http.get<todoforlistmodel[]>('http://localhost:3000/notes/list')
  }

  addNote(newNote :todoforsavemodel):Observable<todoforlistmodel>{

    return this.http.post<todoforlistmodel>('http://localhost:3000/notes', newNote)
  }
  todos:todoforlistmodel[]=[];

  deleteNote(id: number) {
    return this.http.delete(`http://localhost:3000/notes/delete/${id}`);
  }


  updateNote( id: number, updatedNote: todoforsavemodel): Observable<todoforlistmodel> {
    return this.http.put<todoforlistmodel>(`http://localhost:3000/notes/update/${id}`, updatedNote);
  }
  
}

