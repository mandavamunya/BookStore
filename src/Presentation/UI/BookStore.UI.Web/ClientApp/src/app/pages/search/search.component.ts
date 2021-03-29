import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { BookService } from 'src/app/services/book.service';
import { Book, Docs } from 'src/app/interfaces/book.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    // search q=the+lord+of+the+rings
  cards: any;
  searchResult : Book = <Book>{} ; 
  value = "the lord of the rings"

  constructor(public bookService: BookService, private breakpointObserver: BreakpointObserver) {}

  ngOnInit() {

  }
  
  search()
  {
    this.bookService.getSearchResult(this.value.replace(/\s/g, '+')).subscribe(response => {
      this.searchResult = response as Book;  
      this.populateGrid(this.mapToGrid())
    })
  }

  mapToGrid()
  {
    let rows = [] as any [];
    this.searchResult.docs.forEach(function(doc) {
      rows.push({title: doc.title, cols: 1, rows: 1})
    })
    return rows;
  }

  populateGrid(rows: any[])
  {
    console.log(rows)
    this.cards = rows;
  }


}
