import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';

@NgModule({
  imports: [
    BrowserModule,
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent
  ],
  providers: [BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
