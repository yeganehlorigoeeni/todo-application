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
    return this.http.get<todoforlistmodel[]>('https://todoapi.farinkavoshan.ir/api/Todo/List')
  }

  addNote(newNote :todoforsavemodel):Observable<todoforlistmodel>{

    return this.http.post<todoforlistmodel>('https://todoapi.farinkavoshan.ir/api/Todo/Add', newNote)
  }
  todos:todoforlistmodel[]=[];

deleteNote(id:number){
  var index= this.todos.findIndex(x=> x.id===id)
  this.todos.splice(index,1);
}
  
}

