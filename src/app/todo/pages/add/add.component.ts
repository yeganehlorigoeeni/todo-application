import { Component } from '@angular/core';
import { todoforlistmodel, todoforsavemodel } from '../../../_models/todo.model';
import { NoteService } from '../../../_services/note.service';
import { NotesService } from '../../../_services/notes.service';
import { NgForOf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {
  todos:todoforlistmodel[]=[];
  newtodo:todoforsavemodel=new todoforsavemodel();


constructor(private notesServise:NotesService){
  this.notesServise.getNotes().subscribe(x =>{this.todos= x});
}


saveTodo(){
  this.notesServise.addNote(this.newtodo).subscribe(x=>{
    console.log(x)
    this.todos.push(x)
    this.newtodo = new todoforsavemodel();
  })
}

}
