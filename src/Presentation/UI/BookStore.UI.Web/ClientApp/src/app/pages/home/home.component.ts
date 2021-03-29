import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BookService } from 'src/app/services/book.service';
import { BookDetailRequest } from 'src/app/interfaces/book-detail-request.interface';
import { BookDetails } from 'src/app/interfaces/book-details.interface';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // get featured book: OL17910702M
  featuredBook : BookDetails  = <BookDetails>{} ; 
  cards:  any;

  constructor(public bookService: BookService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() 
  {
    const request : BookDetailRequest = { id: "OL17910702M" };
    this.bookService.getBookDetails(request).subscribe( response => {
      this.featuredBook = response as BookDetails
      this.populateGrid()
    })
  }
  
  populateGrid(){
    /** Based on the screen size, switch from standard to one column per row */
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: this.featuredBook.title, cols: 1, rows: 1 },
          ];
        }

        return [
          { title: this.featuredBook.title, cols: 2, rows: 1 },
        ];
      })
    );
  }



}
