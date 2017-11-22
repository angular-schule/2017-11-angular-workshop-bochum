import { Book } from '../shared/book';
import { BookComponent } from './book.component';

describe('BookComponent (simple)', () => {
  let comp: BookComponent;

  beforeEach(() => {
    comp = new BookComponent();
  });

  it('rateUp should forward call to Book model', () => {
    let ratingWasCalled = false;

    comp.book = {
      isbn: '',
      title: '',
      description: '',
      rating: 1,
      rateUp: () => { ratingWasCalled = true; },
      rateDown: () => {}
    };

    comp.rateUp();

    expect(ratingWasCalled).toBe(true);
  });

  it('rating should emit event', () => {

  });


});
