import { delay, pluck, switchMap } from 'rxjs/operators';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit() {
    /*const isbn = this.route.snapshot.params.isbn;
    this.bs.getSingle(isbn)
      .subscribe(book => this.book = book);
    */

    /*this.route.params.subscribe(params => {
      this.bs.getSingle(params.isbn)
        .subscribe(book => this.book = book);
    });*/

    this.book$ = this.route.params.pipe(
      pluck('isbn'),
      switchMap((isbn: string) => this.bs.getSingle(isbn)),
      delay(2000)
    );
  }

}
