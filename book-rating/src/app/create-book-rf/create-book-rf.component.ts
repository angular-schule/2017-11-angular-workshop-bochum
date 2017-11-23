import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book-rf',
  templateUrl: './create-book-rf.component.html',
  styleUrls: ['./create-book-rf.component.scss']
})
export class CreateBookRfComponent implements OnInit {

  bookForm: FormGroup;

  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
    this.bookForm = new FormGroup({
      isbn: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]),
      title: new FormControl('', Validators.required),
      description: new FormControl('')
    });

    this.bookForm.statusChanges.subscribe(e => console.log(e));
  }

  add() {
    const newBook = Book.fromRaw(this.bookForm.value);
    this.bookCreated.emit(newBook);
    this.bookForm.reset();
  }

}
