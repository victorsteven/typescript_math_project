import { Category } from './enum'
import { Book, DamageLogger, Author, Librarian, Magazine, Country } from './interfaces'
// import { CLASS_INFO, ReferenceItem, Encyclopedia, Employee, Researcher, PublicLibrarian } from './classes'
import {  ReferenceItem, Encyclopedia, Employee, Researcher, PublicLibrarian } from './classes'
// import './LibrarianExtension'

import { Purge } from './utility'
import Shelf from './shelf'

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

function GetAllMagazines(): Magazine[] {
  let mags  = [
    { title: 'Mag 1', author: 'Steven Mark', publisher: 'Rufus and Bee'},
    { title: 'Mag 2', author: 'Grandy', publisher: 'Rufus and Bee'},
  ];
  return mags;
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

function LogAndReturn<T>(thing: T): T {
  return thing
}

let someString: string = LogAndReturn<string>('hello this is the generic')

console.log(someString)

// interface Magazine {
//   title: string 
// }

// let newMag: Magazine = { title: "this is the title"}
// let someMag: Magazine = LogAndReturn<Magazine>(newMag)

// console.log(someMag)


let inventory: Array<Book> = [
    { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: Category.Biology},
    { id: 2, title: 'Book2', author: 'Grandy', available: true, category: Category.Biology},
    { id: 3, title: 'Book3', author: 'Mensa', available: false, category: Category.Biology }
]

// let purgedBooks: Array<Book>  = Purge<Book>(inventory)
// purgedBooks.forEach(book => console.log("The title: ", book.title))

// let purgedNums: Array<number> = Purge<number>([1,2,3,4,5])
// purgedNums.forEach(num => console.log("the num: ", num))

let bookShelf: Shelf<Book> = new Shelf<Book>()
inventory.forEach(book => bookShelf.add(book))
let firstBook: Book = bookShelf.getFirst()
console.log("the new shelf: ", firstBook)


let magazines: Array<Magazine> = [
  { title: 'Programming Language', publisher: 'Code Maga'},
  { title: 'Five Points', publisher: 'GSU'},
]

let magaShelf: Shelf<Magazine> = new Shelf<Magazine>()
magazines.forEach(mag => magaShelf.add(mag))
let firstMag: Magazine = magaShelf.getFirst()
// console.log("The first mag: ", firstMag)
console.log("the first mag: ", firstMag)

//this will not work because it does not have the title property of the interface that the Shelf class extends
// let numbserShelf: Shelf<number> = new Shelf<number>();
// [5,10,15].forEach(num => numbserShelf.add(num))


magaShelf.printTitles();

let softwareBook = bookShelf.find('Book1')
console.log(`${softwareBook.title} (${softwareBook.author})`);


function printBookInfo(item: Book): void {
  console.log(`${item.title} was authored by ${item.author}`)
}
//destructuring function parameters
function LogFavBooks([book1, book2, ...others]: Book[]) {
  printBookInfo(book1)
  console.log(others)
}

LogFavBooks(GetAllBooks())

// LogFavBooks(GetAllBooks())

interface Person {
  title: string
  age: number
}

function people(...inputs: Person[]): Person[] {
  return inputs
}

let sample: Person[] = [
  { title: 'Mark', age: 24},
  { title: 'Ade', age: 30}
]
let thePeople: Person[] = people(...sample)

let thePeopleNoSpread: Person[] = people({ title: 'Mark', age: 24}, { title: 'Ade', age: 30})


console.log(thePeople)
console.log(thePeopleNoSpread)

//creating a custom generic tuple type
//it extends an array that either have K or V as the type
interface KeyValuePair<K, V> extends Array<K | V> {
  0: K
  1: V
}
//the Book type is defined in the interface module
let book1: Book = { id: 1, title: 'Book3', author: 'Mensa', available: false, category: Category.Biology }
let book2: Book = { id: 2, title: 'Book3', author: 'Mensa', available: false, category: Category.Biology }
let book3: Book = { id: 3, title: 'Book3', author: 'Mensa', available: false, category: Category.Biology }

let catalogLocation: KeyValuePair<string, Book> = ['A string', book1]

console.log("the cat: ", catalogLocation)


//picture that you want to arrange an error in key: object format in your node application
let many: KeyValuePair<string, Book>[] = [
  ['A string first', book1],
  ['A string second', book2],
  ['A string third', book3]
]

let catalogLocations: KeyValuePair<string, Book>[] = many

console.log("the cats: ", catalogLocations)

let allBooks: Book[] = GetAllBooks()
let allMagazines: Magazine[] = GetAllMagazines()

let readingMaterial: PrintMaterial = allBooks[0]



//Union type
function PrintTitle(item: PrintMaterial): void {
  console.log(item.title)
}
PrintTitle(allBooks[0])

//Intersection Type
let serialNovel: Serial = {
  id: 100,
  category: Category.Biology,
  title: "The title",
  author: "The author",
  available: true,
  publisher: 'Mike Abdul' //this is from the magazine, without it, intersection is defeated
}

console.log('the serial: ', serialNovel)


//Defining the mixin
//derivedCtor is the constructor function or class to which we want to add functionality
//baseCtors is an array of constructors containing the functionalites we want to add to the first
function applyMixins(derivedCtor: any, baseCtors: any[]) {
  baseCtors.forEach(baseCtors => {
    Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
      derivedCtor.prototype[name] = baseCtors.prototype[name];
    })
  })
}

applyMixins(UniversityLib, [Employee, Researcher])

let newLibrarian  = new UniversityLib()
newLibrarian.doResearch('Economics')

//type aliasing
type EmployeeCategory = 'Manager' | 'Non-Manager'

let empCat: EmployeeCategory = 'Manager'

console.log(empCat)

type Frequency = 'monthly' | 'annually'

function GetMaga(freq: Frequency) {
  //do something
}


type PrintMaterial = Book | Magazine
type Serial = Book & Magazine


//Polymorphic this
class LibraryBook {
  Checkout(): this {
    console.log('checking out a book')
    return this
  }
  Checkin(): this {
    if(this instanceof ChildrensBook) {
      console.log('Checking in a ChildrensBook')
    }
    if(this instanceof ElectronicBook) {
      console.log('Checking in a ElectronicBook')
    }
    return this
  }
}

class ChildrensBook extends LibraryBook {
  Clean(): this {
    console.log('Cleaning a book')
    return this
  }
}

class ElectronicBook extends LibraryBook {
  RemoveFromCustomerDevice(): this {
    console.log('Removing from device')
    return this
  }
}

let kidBook = new ChildrensBook()
kidBook.Checkin()
      .Clean() //the type of 'this' return from Checkin will actually be a children's book, since is the type of variable we created
      .Checkout()

let ebook = new ElectronicBook()
ebook.Checkin()
      .RemoveFromCustomerDevice()
      .Checkout()

//Declaration merging
// let mergedCountry: Country
// mergedCountry.timezone = 'Western timezone'

// let newLib = new UniversityLib()
// newLib.phone = '444-333'
// newLib.hostSeminar('Bristish Lecture') 

interface Vehicle {
  numberOfWheels: number
}

function isVehicle(v: any): boolean {

  return (<Vehicle>v).numberOfWheels !== undefined
}

console.log(isVehicle('hello'))

let lib: Librarian = new PublicLibrarian()
if (lib instanceof UniversityLib) {
  lib.assistFaculty('The faculty')
}
if (lib instanceof PublicLibrarian) {
  lib.teachCommunity();
}

function isBook(text: Book | Magazine): text is Book {
  return (<Book>text).author !== undefined
}

let readingMat: Book | Magazine = GetAllBooks()[0]

if(isBook(readingMat)) {
  
  console.log(`The book's author is ${readingMat.author}`) 
} else {
  console.log(`The magazine's publisher is ${readingMat}`)
}

// let mySymbol = Symbol('first_symbol');

// let sym1 = Symbol("first_symbol");
// let sym2 = Symbol("second_symbol");

// console.log(sym1 === sym2)
// console.log(typeof sym2)

// let myObject = {
//   [sym2]: 'value for the symbol key'
// }
// console.log(myObject[sym2])
 

// let libr = new UniversityLib()
//calling the symbol computed property
// libr[CLASS_INFO]()


let libraryCustomer = {
  name: 'thorne',
  assistCustomer: (customer: string) => console.log(`the name ${customer}`)
}

if (libraryCustomer instanceof UniversityLib) {
  console.log('A helpful librarian')
} else {
  console.log('Not a librarian')
}

let lib1 = new UniversityLib();
let lib2 = new PublicLibrarian();

try {
  lib1.assistFaculty = () => console.log('assistFaculty replacement method')
  lib2.teachCommunity = () => console.log('teachCommunity replacement method')
} catch(error) {
  console.log("the error: ", error)
}