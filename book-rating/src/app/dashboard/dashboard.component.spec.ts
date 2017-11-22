import { By } from '@angular/platform-browser';
import { Book } from '../shared/book';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from '../book/book.component';
import { DashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent, BookComponent ]
    })
    .compileComponents();
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
});
