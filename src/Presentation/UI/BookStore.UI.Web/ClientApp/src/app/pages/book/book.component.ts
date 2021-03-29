import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { BookDetails } from 'src/app/interfaces/book-details.interface';
import { DialogService } from 'src/app/helpers/dialog.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  book : BookDetails  = <BookDetails>{} ; 
  cards:  any;
  
  constructor(public bookService: BookService, 
    public dialogService: DialogService,
    private route:  ActivatedRoute, 
    private breakpointObserver: BreakpointObserver) {}
  ngOnInit() 
  {
    const id = this.route.snapshot.params['id'];
    if (id == "" ||  id ==  undefined)
    {
      let data = { message: "Invalid book id / book key.", status: 0 }
        this.dialogService.openDialog(data)
    } else {
      this.bookService.getBookDetails(id).subscribe( response => {
        this.book = response as BookDetails
        this.populateGrid()
      })
    }
  }

  populateGrid(){
    /** Based on the screen size, switch from standard to one column per row */
    this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
      map(({ matches }) => {
        if (matches) {
          return [
            { title: this.book.title, key: this.book.key.split('/').pop(), revision: "", cols: 1, rows: 1 },
          ];
        }

        return [
          { title: this.book.title, key: this.book.key.split('/').pop(), revision: "", cols: 2, rows: 1 },
        ];
      })
    );
  }


}
