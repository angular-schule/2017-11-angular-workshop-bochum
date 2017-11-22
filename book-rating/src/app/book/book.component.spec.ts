import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { Book } from '../shared/book';
import { BookComponent } from './book.component';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;
    component.book = new Book('isbn', 'title', 'description');
    fixture.detectChanges();
  });

  it('clicking button should invoke rateUp() method', () => {
    // Button selektieren
    const btn = fixture.debugElement.query(By.css('button.rate-up-btn'));

    spyOn(component, 'rateUp');

    // Button klicken
    btn.nativeElement.click();

    // wurde Methode aufgerufen?
    expect(component.rateUp).toHaveBeenCalled();
  });


  it('should display the book title', () => {
    const cardTitle = fixture.debugElement.query(By.css('div.card-title'));

    expect(cardTitle.nativeElement.textContent)
      .toContain(component.book.title);

    component.book.title = 'Anderer Titel';

    fixture.detectChanges();

    expect(cardTitle.nativeElement.textContent)
      .toContain('Anderer Titel');
  });
});
