import { Injectable } from '@angular/core';
import { Note } from '../models/node.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [];

  addNote(note: Note) {
    this.notes.push(note);
  }

  deleteNote(index: number) {
    this.notes.splice(index, 1);
  }

  getNotes() {
    return this.notes.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
  }
}
