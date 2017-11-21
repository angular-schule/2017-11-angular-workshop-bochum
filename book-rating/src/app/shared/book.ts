export class Book {
  constructor(
    public isbn: string,
    public title: string,
    public description: string,
    public rating = 1
  ) {}

  toString() {
    return this.title + ': <b></b>' + this.description;
  }
}
