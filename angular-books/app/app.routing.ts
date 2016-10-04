import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { NotesComponent } from './notes.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'notes', component: NotesComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
