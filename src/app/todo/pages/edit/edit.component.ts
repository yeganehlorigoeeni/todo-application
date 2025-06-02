import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { todoforsavemodel } from '../../../_models/todo.model';
import { ActivatedRoute, Router } from '@angular/router';
import { NotesService } from '../../../_services/notes.service';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  id!: number;
  note: todoforsavemodel = new todoforsavemodel();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private notesService: NotesService
  ) {
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.notesService.getNotes().subscribe(notes => {
      const found = notes.find(x => x.id === this.id);
      if (found) {
        this.note = new todoforsavemodel(found.title, found.description, found.date);
      }
    });
  }

  updateNote() {
    this.notesService.updateNote(this.id, this.note).subscribe(() => {
      this.router.navigate(['/todo/list']);
    });
  }

}
