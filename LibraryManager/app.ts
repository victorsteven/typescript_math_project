import { Category } from './enum'
import { Book, DamageLogger, Author, Librarian } from './interfaces'
import { ReferenceItem, Encyclopedia } from './classes'

import { UniversityLib } from './classes'

function PrintHelo(): void {
  console.log("the hello")
}


function GetAllBooks(): Book[] {
  let books = [
    { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: Category.Biology},
    { id: 2, title: 'Book2', author: 'Grandy', available: true, category: Category.Biology},
    { id: 3, title: 'Book3', author: 'Mensa', available: false, category: Category.Biology }
  ];
  return books;
}

function logFirstAvailable(books: any[]): void {

  let numberOfBooks: number = books.length
  let firstAvailable: string = '';

  for(let currentBook  of books) {
    if(currentBook.available) {
      firstAvailable = currentBook.title; 
      break;
    }
  }

  console.log('Total Books: ' + numberOfBooks)
  console.log('First Available: ' + firstAvailable)

}


function GetBookTitlesByCategory(categoryFilter: Category): Array<string> {
    console.log('Getting books in category: ', categoryFilter);
    console.log('Getting books in category: ', Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = []

    for (let currentBook of allBooks) {
      if(currentBook.category === categoryFilter) {
        filteredTitles.push(currentBook.title)
      }
    }
    return filteredTitles;
}

function LogBookTitles(titles: string[]): void {
  for(let title of titles) {
    console.log(title)
  }
}

function GetBookByID(id: number): Book {
  const allBooks = GetAllBooks();
  return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
 
  let mine: string = name + id

  return mine
}

let IdGenerator: (chars: string, nums: number) => string
IdGenerator = CreateCustomerID

let ans = IdGenerator('Mike', 13)
console.log("the ans: ", ans)

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
  let booksCheckedOut: string[] = []
  for (let id of bookIDs) {
    let book = GetBookByID(id)
    if(book.available) {
      booksCheckedOut.push(book.title)
    }
  }
  return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
  const allBooks = GetAllBooks();
  const foundTitles: string[] = [];
  if(typeof bookProperty == 'string') {
    for(let book of allBooks) {
      if(book.author === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }
  if(typeof bookProperty == 'boolean') {
    for(let book of allBooks) {
      if(book.available === bookProperty) {
        foundTitles.push(book.title);
      }
    }
  }
  return foundTitles
}

// let hermansBooks = GetTitles('Steven Mark');
// hermansBooks.forEach(title => console.log("the result", title))

let hermansBooks = GetTitles(false);
hermansBooks.forEach(val => console.log("the result", val))


// const allBooks = GetAllBooks();
// logFirstAvailable(allBooks)

const poertryBooks = GetBookTitlesByCategory(Category.Biology)

poertryBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val))

// LogBookTitles(poertryBooks)


function PrintBook(book: Book): void {
  console.log(book.title + ' by ' + book.author)
}

let myBook: Book = {
  id: 5,
  title: 'Nice Book',
  author: 'Steven Victor',
  available: true,
  category: Category.Biology,
  markDamage: (reason: string) => console.log('Damaged: ' + reason),
  markReturn: (reason: string) => console.log('Returned ' + reason)
}

PrintBook(myBook);

//exclamation means, we are sure that it has a value., since the variable is defined with the "?" sign, our compiler is doubting if it has value
myBook.markDamage!('missing book cover');
myBook.markReturn!('Not the book looking for')

// let favAuthor: Author = {}
// let favLibrarian: Librarian = {} 

let fav: Librarian = new UniversityLib()
fav.name = 'Mark'
fav.assistCustomer('Lynda')

// let ref = new ReferenceItem('Updated Facts and Figures', 2019);
// ref.printItem();
// ref.publisher = 'This is the prop'
// console.log(ref.publisher) 

// let refBook: ReferenceItem = new Encyclopedia('Wordpress', 1900, 10)
// refBook.printCitation()

//Class expression example
let Newspaper = class extends ReferenceItem {
  printCitation(): void {
    console.log(`Newspaper: ${this.title}`);
  }
}

let myPaper = new Newspaper('The paper', 190)
myPaper.printCitation();