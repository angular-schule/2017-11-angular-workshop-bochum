import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { debounceTime, delay, distinctUntilChanged, filter, map, takeWhile } from 'rxjs/operators';
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'br-rxjs-playground',
  templateUrl: './rxjs-playground.component.html',
  styleUrls: ['./rxjs-playground.component.scss']
})
export class RxjsPlaygroundComponent implements OnInit {

  subject$ = new Subject<number>();
  interval$ = Observable.interval(1000);
  timers: any[] = [];

  constructor() { }

  ngOnInit() {
    this.subject$.subscribe(e => console.log('Subject:', e));

    this.subject$.pipe(
      // map(e => e * 10),
      // filter(e => e % 2 === 0),
      // debounceTime(500),
      // distinctUntilChanged(),
      // takeWhile(e => e !== 42)
      delay(1000)
    )
    .subscribe(
      e => console.log('Subject Piped:', e),
      e => {},
      () => console.log('Completed')
    );



  }

  sendRandomValue() {
    const random = Math.floor(Math.random() * 100);
    this.subject$.next(random);
  }

  sendValue(val: number) {
    this.subject$.next(val);
  }

  addTimerElement() {
    this.timers.push('');
  }

}
