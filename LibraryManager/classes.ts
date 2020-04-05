import { Book, DamageLogger, Author, Librarian } from './interfaces'

export const CLASS_INFO = Symbol()

export class UniversityLib implements Librarian, Employee, Researcher {

  name: string
  email: string
  department: string

  [CLASS_INFO](): void {
    console.log('this class represents a UniversityLib')
  }

  static [Symbol.hasInstance](obj: Object) {
    return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer')
  }

  assistCustomer(name: string) {
    console.log("this is the person name: " + name)
  }
  assistFaculty(custName: string) {
    console.log('Assisting faculty')
  }

  // implementation of the following to be provided by the mixing function
  title: string
  addToSchedule: () => void
  logTitle: () => void
  doResearch: (topic: string) => void
}

export class PublicLibrarian implements Librarian {

  name: string
  email: string
  department: string

  assistCustomer(name: string) {
    console.log("this is the person name: " + name)
  }
  teachCommunity() {
    console.log('Assisting community')
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

class Employee {
  title: string 
  addToSchedule(): void {
    console.log('Employee added to schedule')
  }
  logTitle(): void {
    console.log(`Employee has the title ${this.title}`)
  }
}

class Researcher {
  doResearch(topic: string): void {
    console.log(`Doing research on ${topic}`)
  }
}

export { Employee, Researcher }