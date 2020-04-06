"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var classes_1 = require("./classes");
var shelf_1 = __importDefault(require("./shelf"));
var classes_2 = require("./classes");
function PrintHelo() {
    console.log("the hello");
}
function GetAllBooks() {
    var books = [
        { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: enum_1.Category.Biology },
        { id: 2, title: 'Book2', author: 'Grandy', available: true, category: enum_1.Category.Biology },
        { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology }
    ];
    return books;
}
function GetAllMagazines() {
    var mags = [
        { title: 'Mag 1', author: 'Steven Mark', publisher: 'Rufus and Bee' },
        { title: 'Mag 2', author: 'Grandy', publisher: 'Rufus and Bee' },
    ];
    return mags;
}
function logFirstAvailable(books) {
    var numberOfBooks = books.length;
    var firstAvailable = '';
    for (var _i = 0, books_1 = books; _i < books_1.length; _i++) {
        var currentBook = books_1[_i];
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
    var allBooks = GetAllBooks();
    var filteredTitles = [];
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }
    return filteredTitles;
}
function LogBookTitles(titles) {
    for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
        var title = titles_1[_i];
        console.log(title);
    }
}
function GetBookByID(id) {
    var allBooks = GetAllBooks();
    return allBooks.filter(function (book) { return book.id === id; })[0];
}
function CreateCustomerID(name, id) {
    var mine = name + id;
    return mine;
}
var IdGenerator;
IdGenerator = CreateCustomerID;
var ans = IdGenerator('Mike', 13);
console.log("the ans: ", ans);
function CheckoutBooks(customer) {
    var bookIDs = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIDs[_i - 1] = arguments[_i];
    }
    var booksCheckedOut = [];
    for (var _a = 0, bookIDs_1 = bookIDs; _a < bookIDs_1.length; _a++) {
        var id = bookIDs_1[_a];
        var book = GetBookByID(id);
        if (book.available) {
            booksCheckedOut.push(book.title);
        }
    }
    return booksCheckedOut;
}
function GetTitles(bookProperty) {
    var allBooks = GetAllBooks();
    var foundTitles = [];
    if (typeof bookProperty == 'string') {
        for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
            var book = allBooks_2[_i];
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    if (typeof bookProperty == 'boolean') {
        for (var _a = 0, allBooks_3 = allBooks; _a < allBooks_3.length; _a++) {
            var book = allBooks_3[_a];
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
var hermansBooks = GetTitles(false);
hermansBooks.forEach(function (val) { return console.log("the result", val); });
var poertryBooks = GetBookTitlesByCategory(enum_1.Category.Biology);
poertryBooks.forEach(function (val, idx, arr) { return console.log(++idx + ' - ' + val); });
function PrintBook(book) {
    console.log(book.title + ' by ' + book.author);
}
var myBook = {
    id: 5,
    title: 'Nice Book',
    author: 'Steven Victor',
    available: true,
    category: enum_1.Category.Biology,
    markDamage: function (reason) { return console.log('Damaged: ' + reason); },
    markReturn: function (reason) { return console.log('Returned ' + reason); }
};
PrintBook(myBook);
myBook.markDamage('missing book cover');
myBook.markReturn('Not the book looking for');
var fav = new classes_2.UniversityLib();
fav.name = 'Mark';
fav.assistCustomer('Lynda');
var Newspaper = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    class_1.prototype.printCitation = function () {
        console.log("Newspaper: " + this.title);
    };
    return class_1;
}(classes_1.ReferenceItem));
var myPaper = new Newspaper('The paper', 190);
myPaper.printCitation();
function LogAndReturn(thing) {
    return thing;
}
var someString = LogAndReturn('hello this is the generic');
console.log(someString);
var inventory = [
    { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: enum_1.Category.Biology },
    { id: 2, title: 'Book2', author: 'Grandy', available: true, category: enum_1.Category.Biology },
    { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology }
];
var bookShelf = new shelf_1.default();
inventory.forEach(function (book) { return bookShelf.add(book); });
var firstBook = bookShelf.getFirst();
console.log("the new shelf: ", firstBook);
var magazines = [
    { title: 'Programming Language', publisher: 'Code Maga' },
    { title: 'Five Points', publisher: 'GSU' },
];
var magaShelf = new shelf_1.default();
magazines.forEach(function (mag) { return magaShelf.add(mag); });
var firstMag = magaShelf.getFirst();
console.log("the first mag: ", firstMag);
magaShelf.printTitles();
var softwareBook = bookShelf.find('Book1');
console.log(softwareBook.title + " (" + softwareBook.author + ")");
function printBookInfo(item) {
    console.log(item.title + " was authored by " + item.author);
}
function LogFavBooks(_a) {
    var book1 = _a[0], book2 = _a[1], others = _a.slice(2);
    printBookInfo(book1);
    console.log(others);
}
LogFavBooks(GetAllBooks());
function people() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return inputs;
}
var sample = [
    { title: 'Mark', age: 24 },
    { title: 'Ade', age: 30 }
];
var thePeople = people.apply(void 0, sample);
var thePeopleNoSpread = people({ title: 'Mark', age: 24 }, { title: 'Ade', age: 30 });
console.log(thePeople);
console.log(thePeopleNoSpread);
var book1 = { id: 1, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
var book2 = { id: 2, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
var book3 = { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology };
var catalogLocation = ['A string', book1];
console.log("the cat: ", catalogLocation);
var many = [
    ['A string first', book1],
    ['A string second', book2],
    ['A string third', book3]
];
var catalogLocations = many;
console.log("the cats: ", catalogLocations);
var allBooks = GetAllBooks();
var allMagazines = GetAllMagazines();
var readingMaterial = allBooks[0];
function PrintTitle(item) {
    console.log(item.title);
}
PrintTitle(allBooks[0]);
var serialNovel = {
    id: 100,
    category: enum_1.Category.Biology,
    title: "The title",
    author: "The author",
    available: true,
    publisher: 'Mike Abdul'
};
console.log('the serial: ', serialNovel);
function applyMixins(derivedCtor, baseCtors) {
    baseCtors.forEach(function (baseCtors) {
        Object.getOwnPropertyNames(baseCtors.prototype).forEach(function (name) {
            derivedCtor.prototype[name] = baseCtors.prototype[name];
        });
    });
}
applyMixins(classes_2.UniversityLib, [classes_1.Employee, classes_1.Researcher]);
var newLibrarian = new classes_2.UniversityLib();
newLibrarian.doResearch('Economics');
var empCat = 'Manager';
console.log(empCat);
function GetMaga(freq) {
}
var LibraryBook = (function () {
    function LibraryBook() {
    }
    LibraryBook.prototype.Checkout = function () {
        console.log('checking out a book');
        return this;
    };
    LibraryBook.prototype.Checkin = function () {
        if (this instanceof ChildrensBook) {
            console.log('Checking in a ChildrensBook');
        }
        if (this instanceof ElectronicBook) {
            console.log('Checking in a ElectronicBook');
        }
        return this;
    };
    return LibraryBook;
}());
var ChildrensBook = (function (_super) {
    __extends(ChildrensBook, _super);
    function ChildrensBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChildrensBook.prototype.Clean = function () {
        console.log('Cleaning a book');
        return this;
    };
    return ChildrensBook;
}(LibraryBook));
var ElectronicBook = (function (_super) {
    __extends(ElectronicBook, _super);
    function ElectronicBook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ElectronicBook.prototype.RemoveFromCustomerDevice = function () {
        console.log('Removing from device');
        return this;
    };
    return ElectronicBook;
}(LibraryBook));
var kidBook = new ChildrensBook();
kidBook.Checkin()
    .Clean()
    .Checkout();
var ebook = new ElectronicBook();
ebook.Checkin()
    .RemoveFromCustomerDevice()
    .Checkout();
function isVehicle(v) {
    return v.numberOfWheels !== undefined;
}
console.log(isVehicle('hello'));
var lib = new classes_1.PublicLibrarian();
if (lib instanceof classes_2.UniversityLib) {
    lib.assistFaculty('The faculty');
}
if (lib instanceof classes_1.PublicLibrarian) {
    lib.teachCommunity();
}
function isBook(text) {
    return text.author !== undefined;
}
var readingMat = GetAllBooks()[0];
if (isBook(readingMat)) {
    console.log("The book's author is " + readingMat.author);
}
else {
    console.log("The magazine's publisher is " + readingMat);
}
var libraryCustomer = {
    name: 'thorne',
    assistCustomer: function (customer) { return console.log("the name " + customer); }
};
if (libraryCustomer instanceof classes_2.UniversityLib) {
    console.log('A helpful librarian');
}
else {
    console.log('Not a librarian');
}
var lib1 = new classes_2.UniversityLib();
var lib2 = new classes_1.PublicLibrarian();
try {
    lib1.assistFaculty = function () { return console.log('assistFaculty replacement method'); };
    lib2.teachCommunity = function () { return console.log('teachCommunity replacement method'); };
}
catch (error) {
    console.log("the error: ", error);
}
//# sourceMappingURL=app.js.map