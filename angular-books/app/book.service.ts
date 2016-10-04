import { Book } from './book';
import { BOOKS } from './mock-books';

export class BookService {
  getBooks(): Promise<Book[]> {
    return Promise.resolve(BOOKS);
  }
}
