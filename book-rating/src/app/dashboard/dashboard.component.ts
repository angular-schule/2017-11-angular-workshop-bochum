import { BookStoreService } from '../shared/book-store.service';
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

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.bs.getAll().subscribe(books => {
      this.books = books;
      this.reorderBooks();
    });
  }

  reorderBooks() {
    this.books.sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book) {
    this.books.push(book);
  }

}
