import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Book } from './book';
import { map } from 'rxjs/operators';

@Injectable()
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Einführung in das Framework', 4),
      new Book('222', 'React', 'Ein anderes Framework', 3)
    ];
  }

  getAll(): Observable<Book[]> {
    return this.http.get<any[]>('http://api.angular.schule/books').pipe(
      map(rawBooks => rawBooks.map(rawBook => Book.fromRaw(rawBook)))
    );
  }

}
