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

  constructor(public bookService: BookService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() 
  {
    const request : BookDetailRequest = {
      id: "OL17910702M"
    };
    this.bookService.getBookDetails(request).subscribe( response => {
      console.log(response)
    })
    
  }
  

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );



}
