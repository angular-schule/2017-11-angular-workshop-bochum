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
    comp.book = {
      isbn: '000',
      title: 'Buch',
      rateUp: () => {}
    } as Book;

    const cbobj = {
      callback: b => {
        expect(b).toBe(comp.book);
      }
    };
    spyOn(cbobj, 'callback');

    comp.rated.subscribe(cbobj.callback);

    comp.rateUp();
    expect(cbobj.callback).toHaveBeenCalled();
  });


});
