import { Book, DamageLogger, Author, Librarian } from './interfaces'

export class UniversityLib implements Librarian {

  name: string
  email: string
  department: string

  assistCustomer(name: string) {
    console.log("this is the person name: " + name)
  }
}

export abstract class ReferenceItem {
  private _publisher: string
  static department: string = 'Research'

  constructor(public title: string, protected year: number) {
    console.log('Creating a new ReferenceItem..')
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}`)
    console.log(`Department: ${ReferenceItem.department}`)
  }

  get publisher(): string {
    return this._publisher.toUpperCase()
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher
  }

  abstract printCitation(): void;
}


export class Encyclopedia extends ReferenceItem {

  constructor(newTitle: string, newYear: number, public pages: number) {
    super(newTitle, newYear)
  }
  printCitation() {
    console.log(`details: ${this.title} and the year: ${this.year}`)
  }
}