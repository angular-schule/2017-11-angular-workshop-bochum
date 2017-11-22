import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  @Output() rated = new EventEmitter<Book>();
  @Output() closed = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {}

  getStarArray(): any[] {
    return new Array(this.book.rating);
  }

  rateUp() {
    this.book.rateUp();
    this.rated.emit(this.book);
  }

  rateDown() {
    this.book.rateDown();
    this.rated.emit(this.book);
  }

}
