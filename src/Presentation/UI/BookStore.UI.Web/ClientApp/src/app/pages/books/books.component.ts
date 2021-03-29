import { Component, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      console.log(matches)
      return [
        { title: 'Book 1', key: "", revision: "", cols: 1, rows: 1 },
        { title: 'Book 2', key: "", revision: "", cols: 1, rows: 1 },
        { title: 'Book 3', key: "", revision: "", cols: 1, rows: 1 },
        { title: 'Book 4', key: "", revision: "", cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
