import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { BooksComponent } from './pages/books/books.component';
import { HomeComponent } from './pages/home/home.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
{ 
  path: 'home', 
  component: HomeComponent 
},
{
  path: 'book/:id',
  component: BookComponent
},
{
  path: 'search',
  component: SearchComponent
},
{
  path: 'books',
  component: BooksComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
