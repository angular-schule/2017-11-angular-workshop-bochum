import { Component, Input, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  @Input() book: Book;
  @Input() index: number;

  constructor() { }

  ngOnInit() {}

  getStarArray(): any[] {
    return new Array(this.book.rating);
  }

}
