"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
const classes_1 = require("./classes");
const shelf_1 = __importDefault(require("./shelf"));
const classes_2 = require("./classes");
function PrintHelo() {
    console.log("the hello");
}
function GetAllBooks() {
    let books = [
        { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: enum_1.Category.Biology },
        { id: 2, title: 'Book2', author: 'Grandy', available: true, category: enum_1.Category.Biology },
        { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology }
    ];
    return books;
}
function GetAllMagazines() {
    let mags = [
        { title: 'Mag 1', author: 'Steven Mark', publisher: 'Rufus and Bee' },
        { title: 'Mag 2', author: 'Grandy', publisher: 'Rufus and Bee' },
    ];
    return mags;
}
function logFirstAvailable(books) {
    let numberOfBooks = books.length;
    let firstAvailable = '';
    for (let currentBook of books) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log('Total Books: ' + numberOfBooks);
    console.log('First Available: ' + firstAvailable);
}
function GetBookTitlesByCategory(categoryFilter) {
    console.log('Getting books in category: ', categoryFilter);
    console.log('Getting books in category: ', enum_1.Category[categoryFilter]);
    const allBooks = GetAllBooks();
    const filteredTitles = [];
    for (let currentBook of allBooks) {
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
function GetBookByID(id) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function CreateCustomerID(name, id) {
    let mine = name + id;
    return mine;
}
let IdGenerator;
IdGenerator = CreateCustomerID;
let ans = IdGenerator('Mike', 13);
console.log("the ans: ", ans);
function CheckoutBooks(customer, ...bookIDs) {
    let booksCheckedOut = [];
    for (let id of bookIDs) {
        let book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    const allBooks = GetAllBooks();
    const foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
let hermansBooks = GetTitles(false);
hermansBooks.forEach(val => console.log("the result", val));
const poertryBooks = GetBookTitlesByCategory(enum_1.Category.Biology);
poertryBooks.forEach((val, idx, arr) => console.log(++idx + ' - ' + val));
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
let myBook = {
    id: 5,
    title: 'Nice Book',
    author: 'Steven Victor',
    available: true,
    category: enum_1.Category.Biology,
    markDamage: (reason) => console.log('Damaged: ' + reason),
    markReturn: (reason) => console.log('Returned ' + reason)
};
PrintBook(myBook);
myBook.markDamage('missing book cover');
myBook.markReturn('Not the book looking for');
let fav = new classes_2.UniversityLib();
fav.name = 'Mark';
fav.assistCustomer('Lynda');
let Newspaper = class extends classes_1.ReferenceItem {
    printCitation() {
        console.log(`Newspaper: ${this.title}`);
    }
};
let myPaper = new Newspaper('The paper', 190);
myPaper.printCitation();
function LogAndReturn(thing) {
    return thing;
}
let someString = LogAndReturn('hello this is the generic');
console.log(someString);
let inventory = [
    { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: enum_1.Category.Biology },
    { id: 2, title: 'Book2', author: 'Grandy', available: true, category: enum_1.Category.Biology },
    { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology }
];
let bookShelf = new shelf_1.default();
inventory.forEach(book => bookShelf.add(book));
let firstBook = bookShelf.getFirst();
console.log("the new shelf: ", firstBook);
let magazines = [
    { title: 'Programming Language', publisher: 'Code Maga' },
    { title: 'Five Points', publisher: 'GSU' },
];
let magaShelf = new shelf_1.default();
magazines.forEach(mag => magaShelf.add(mag));
let firstMag = magaShelf.getFirst();
console.log("the first mag: ", firstMag);
magaShelf.printTitles();
let softwareBook = bookShelf.find('Book1');
console.log(`${softwareBook.title} (${softwareBook.author})`);
function printBookInfo(item) {
    console.log(`${item.title} was authored by ${item.author}`);
}
function LogFavBooks([book1, book2, ...others]) {
    printBookInfo(book1);
    console.log(others);
}
LogFavBooks(GetAllBooks());
function people(...inputs) {
    return inputs;
}
let sample = [
    { title: 'Mark', age: 24 },
    { title: 'Ade', age: 30 }
];
let thePeople = people(...sample);
let thePeopleNoSpread = people({ title: 'Mark', age: 24 }, { title: 'Ade', age: 30 });
console.log(thePeople);
console.log(thePeopleNoSpread);
let book1 = { id: 1, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
let book2 = { id: 2, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
let book3 = { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
let catalogLocation = ['A string', book1];
console.log("the cat: ", catalogLocation);
let many = [
    ['A string first', book1],
    ['A string second', book2],
    ['A string third', book3]
];
let catalogLocations = many;
console.log("the cats: ", catalogLocations);
let allBooks = GetAllBooks();
let allMagazines = GetAllMagazines();
let readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
PrintTitle(allBooks[0]);
let serialNovel = {
    id: 100,
    category: enum_1.Category.Biology,
    title: "The title",
    author: "The author",
    available: true,
    publisher: 'Mike Abdul'
};
console.log('the serial: ', serialNovel);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(baseCtors => {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
applyMixins(classes_2.UniversityLib, [classes_1.Employee, classes_1.Researcher]);
let newLibrarian = new classes_2.UniversityLib();
newLibrarian.doResearch('Economics');
let empCat = 'Manager';
console.log(empCat);
function GetMaga(freq) {
}
class LibraryBook {
    Checkout() {
        console.log('checking out a book');
        return this;
    }
    Checkin() {
        if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking in a ElectronicBook');
        }
        return this;
    }
}
class ChildrensBook extends LibraryBook {
    Clean() {
        console.log('Cleaning a book');
        return this;
    }
}
class ElectronicBook extends LibraryBook {
    RemoveFromCustomerDevice() {
        console.log('Removing from device');
        return this;
    }
}
let kidBook = new ChildrensBook();
kidBook.Checkin()
    .Clean()
    .Checkout();
let ebook = new ElectronicBook();
ebook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();
function isVehicle(v) {
    return v.numberOfWheels !== undefined;
}
console.log(isVehicle('hello'));
let lib = new classes_1.PublicLibrarian();
if (lib instanceof classes_2.UniversityLib) {
    lib.assistFaculty('The faculty');
}
if (lib instanceof classes_1.PublicLibrarian) {
    lib.teachCommunity();
}
function isBook(text) {
    return text.author !== undefined;
}
let readingMat = GetAllBooks()[0];
if (isBook(readingMat)) {
    console.log(`The book's author is ${readingMat.author}`);
}
else {
    console.log(`The magazine's publisher is ${readingMat}`);
}
let libraryCustomer = {
    name: 'thorne',
    assistCustomer: (customer) => console.log(`the name ${customer}`)
};
if (libraryCustomer instanceof classes_2.UniversityLib) {
    console.log('A helpful librarian');
}
else {
    console.log('Not a librarian');
}
let lib1 = new classes_2.UniversityLib();
let lib2 = new classes_1.PublicLibrarian();
try {
    lib1.assistFaculty = () => console.log('assistFaculty replacement method');
    lib2.teachCommunity = () => console.log('teachCommunity replacement method');
}
catch (error) {
    console.log("the error: ", error);
}
function getBooksByCategory(cat, callback) {
    setTimeout(() => {
        try {
            let foundBooks = GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                callback(null, foundBooks);
            }
            else {
                throw new Error('no books found');
            }
        }
        catch (error) {
            callback(error, null);
        }
    }, 2000);
}
function logCategorySearch(err, titles) {
    if (err) {
        console.log(`Error message: ${err.message}`);
    }
    else {
        console.log(`Found the following titles: ${titles}`);
    }
}
console.log('Beginning search...');
getBooksByCategory(enum_1.Category.Biology, logCategorySearch);
console.log('Search submitted...');
function getBooksByCategory2(cat) {
    let ans = new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                let foundBooks = GetBookTitlesByCategory(cat);
                if (foundBooks.length > 0) {
                    resolve(foundBooks);
                }
                else {
                    throw new Error('no books found');
                }
            }
            catch (error) {
                reject(error);
            }
        }, 2000);
    });
    return ans;
}
console.log('Beginning search 2...');
getBooksByCategory2(enum_1.Category.Biology).then(results => {
    return results;
}).then(results => console.log(results.length))
    .catch(err => {
    console.log(err);
});
console.log('Search submitted 2...');
function getBooksByCategory3(cat) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let foundBooks = yield GetBookTitlesByCategory(cat);
            if (foundBooks.length > 0) {
                return foundBooks;
            }
            else {
                throw new Error('no books found');
            }
        }
        catch (error) {
            return error;
        }
    });
}
console.log('Beginning search 3...');
getBooksByCategory3(enum_1.Category.Biology).then(ans => {
    console.log('third ans: ', ans);
}).catch(err => console.log('third error: ', err));
console.log('Search submitted 3...');
//# sourceMappingURL=app.js.map