import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { BooksComponent } from './books.component';
import { BookDetailComponent } from './book-detail.component';
import { BookService } from './book.service';
import { FormsModule } from '@angular/forms';
import { NotesComponent } from './notes.component';
import { routing } from './app.routing'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    NotesComponent
  ],
  providers: [BookService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
