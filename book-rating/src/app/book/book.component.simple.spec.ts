import { Book } from '../shared/book';
import { BookComponent } from './book.component';

describe('BookComponent (simple)', () => {
  let comp: BookComponent;

  beforeEach(() => {
    comp = new BookComponent();
  });

  it('rateUp should forward call to Book model', () => {
    comp.book = { rateUp: () => {} } as Book;
    spyOn(comp.book, 'rateUp');

    comp.rateUp();

    expect(comp.book.rateUp).toHaveBeenCalled();
  });

  it('rating should emit event', () => {

  });


});
