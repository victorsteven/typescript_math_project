import { Category } from './enum'

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  markDamage?: DamageLogger
  // markReturn?: (reason: string) => void    or
  markReturn?(reason: string): void 
}
interface Country {
  name: string
  continent: boolean
}
//this book can be merged with the one above
interface Country {
  gmt: string
  timezone: string
}

interface DamageLogger {
  (reason: string): void;
}

interface Person {
  name: string;
  email: string;
}

interface Author extends Person {
  numBooksPublished: number;
}

interface Librarian extends Person {
  department: string;
  assistCustomer: (custName: string) => void
}

interface Magazine {
  title: string 
  publisher: string
}

export { Book, DamageLogger, Author, Librarian, Magazine, Country }