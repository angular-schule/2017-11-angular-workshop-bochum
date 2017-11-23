import { BookResponse } from './book-response';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './book';
import { map } from 'rxjs/operators';

@Injectable()
export class BookStoreService {

  private apiUrl = 'http://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Einführung in das Framework', 4),
      new Book('222', 'React', 'Ein anderes Framework', 3)
    ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<BookResponse[]>(`${this.apiUrl}/books`).pipe(
      map(rawBooks => rawBooks.map(rawBook => Book.fromRaw(rawBook)))
    );
  }

  getSingle(isbn: string): Observable<Book> {
    return this.http.get<BookResponse>(`${this.apiUrl}/book/${isbn}`).pipe(
      map(rawBook => Book.fromRaw(rawBook))
    );
  }


}
