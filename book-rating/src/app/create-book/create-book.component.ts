import { Book } from '../shared/book';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  add(isbn: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement) {
    const newBook = new Book(
      isbn.value,
      title.value,
      description.value
    );

    this.bookCreated.emit(newBook);

    isbn.value = '';
    title.value = '';
    description.value = '';
  }

}
