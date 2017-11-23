import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book-tdf',
  templateUrl: './create-book-tdf.component.html',
  styleUrls: ['./create-book-tdf.component.scss']
})
export class CreateBookTdfComponent implements OnInit, AfterViewInit {
  // @ViewChild('form') bookForm: NgForm;
  @ViewChild(NgForm) bookForm: NgForm;

  book = Book.empty();

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    // erst hier ist ViewChild aufgelöst
  }

  add() {
    this.bookCreated.emit(this.book);
    this.book = Book.empty();
    this.bookForm.resetForm();
  }

}
