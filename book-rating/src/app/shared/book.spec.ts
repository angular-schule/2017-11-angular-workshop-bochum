import { Book } from './book';

describe('Book', () => {
  let book: Book;

  beforeEach(() => {
    book = new Book('', '', '');
  });

  it('should create an instance', () => {
    expect(new Book('', '', '')).toBeTruthy();
  });

  it('should rate up by 1', () => {
    book.rating = 3;
    book.rateUp();
    expect(book.rating).toBe(4);
  });

  it('should rate down by 1', () => {
    book.rating = 3;
    book.rateDown();
    expect(book.rating).toBe(2);
  });

  it('should not be allowed to have a rating greater than 5', () => {
    book.rating = 5;
    book.rateUp();
    expect(book.rating).toBe(5);
  });

  it('should not be allowed to have a rating smaller than 1', () => {
    book.rating = 1;
    book.rateDown();
    expect(book.rating).toBe(1);
  });
});
