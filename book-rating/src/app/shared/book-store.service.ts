import { Injectable } from '@angular/core';

import { Book } from './book';

@Injectable()
export class BookStoreService {

  constructor() { }

  getAllStatic(): Book[] {
    return [
      new Book('000', 'Angular', 'Grundlagen, fortgeschrittene Techniken...', 5),
      new Book('111', 'AngularJS', 'Einführung in das Framework', 4),
      new Book('222', 'React', 'Ein anderes Framework', 3)
    ];
  }

}
