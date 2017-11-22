import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { DatePipe } from '@angular/common';

import { Book } from '../shared/book';
import { BookComponent } from '../book/book.component';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, BookComponent ],
      providers: [
        { provide: LOCALE_ID, useValue: 'de' }
      ]
    })
    .compileComponents();

    registerLocaleData(localeDe);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a BookComponent for each book', () => {
    // Books-Array füllen
    component.books = [
      new Book('', '', ''),
      new Book('', '', ''),
      new Book('', '', '')
    ];

    fixture.detectChanges();

    // Element(e) holen
    const comps = fixture.debugElement.queryAll(By.css('br-book'));

    // prüfen, wie viele Elemente vorhanden sind
    expect(comps.length).toEqual(component.books.length);
  });

  it('should display the date', () => {
    const dateBox = fixture.debugElement.query(By.css('span.date-box'));

    // mit DatePipe
    const valueFromPipe = new DatePipe('de').transform(component.d, 'fullDate');
    expect(dateBox.nativeElement.textContent).toContain(valueFromPipe);

    // mit fest definiertem Datum
    component.d = new Date('2017-03-22 12:34:56');
    fixture.detectChanges();
    expect(dateBox.nativeElement.textContent).toContain('Mittwoch, 22. März 2017');
  });
});
