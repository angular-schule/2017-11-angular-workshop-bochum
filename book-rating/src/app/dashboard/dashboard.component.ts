import { Component, OnInit } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  d = new Date();

  books: Book[];

  constructor() { }

  ngOnInit() {
    this.books = [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Einführung in das Framework', 4)
    ];
  }

  reorderBooks(book: Book) {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  add(isbn: HTMLInputElement, title: HTMLInputElement, description: HTMLInputElement) {
    const newBook = new Book(
      isbn.value,
      title.value,
      description.value
    );

    this.books.push(newBook);

    isbn.value = '';
    title.value = '';
    description.value = '';

  }

}
