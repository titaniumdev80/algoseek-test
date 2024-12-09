export interface Note {
  timestamp: string;
  user: string;
  type: 'Message' | 'Phone' | 'Coffee' | 'Beer' | 'Meeting Note';
  content: string;
}
