import { Component, Input } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'book-detail',
  templateUrl: './app/book-detail.component.html'
})
export class BookDetailComponent {
    @Input()
    book: Book;
}
