import { Component, OnInit } from '@angular/core';
import { Book } from './book';
import { BookService } from './book.service';

@Component({
  selector: 'my-books',
  templateUrl: './app/books.component.html',
  providers: [BookService]
})

export class BooksComponent implements OnInit {
  books: Book[];
  selectedBook: Book;

  constructor(private bookService: BookService) {}

  getBooks(): void {
    this.bookService.getBooks().then(books => this.books = books);
  }

  ngOnInit(): void {
    this.getBooks();
  }

  onSelect(book: Book): void {
    this.selectedBook = book;
  }

}
