import { Component } from '@angular/core';
import { NoteService } from '../../services/node.service';
import { Note } from '../../models/node.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class ActivityListComponent {
  newUser: string = '';
  selectedType: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting Note' = 'Message';
  showDeleteButton: number | null = null;

  constructor(private noteService: NoteService) {}

  addNote() {
    if (this.newUser.trim()) {
      const note: Note = {
        timestamp: new Date().toISOString(),
        user: this.newUser,
        type: this.selectedType,
        content: this.getNoteContent(this.selectedType),
      };
      this.noteService.addNote(note);
      this.newUser = '';
    }
  }

  deleteNote(index: number) {
    this.noteService.deleteNote(index);
    this.showDeleteButton = null; // Reset the delete button visibility after deletion
  }

  get notes() {
    return this.noteService.getNotes();
  }

  setType(type: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting Note') {
    this.selectedType = type;
  }

  getNoteContent(type: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting Note'): string {
    switch (type) {
      case 'Message':
        return 'A test node of message type!';
      case 'Phone':
        return 'Then we had a follow-up phone call';
      case 'Coffee':
        return 'We had coffee!';
      case 'Beer':
        return 'We had a beer!';
      case 'Meeting Note':
        return 'And a more formal meeting.';
      default:
        return '';
    }
  }

  toggleDeleteOption(index: number) {
    this.showDeleteButton = this.showDeleteButton === index ? null : index;
  }
}
