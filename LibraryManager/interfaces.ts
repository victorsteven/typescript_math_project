import { Category } from './enum'

interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
  category: Category;
  markDamage?: DamageLogger
  markReturn?: (reason: string) => void 
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

export { Book, DamageLogger, Author, Librarian }