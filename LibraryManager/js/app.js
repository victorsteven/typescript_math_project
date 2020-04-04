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
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("./enum");
var classes_1 = require("./classes");
var utility_1 = require("./utility");
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
var newMag = { title: "this is the title" };
var someMag = LogAndReturn(newMag);
console.log(someMag);
var inventory = [
    { id: 1, title: 'Book1', author: 'Steven Mark', available: true, category: enum_1.Category.Biology },
    { id: 2, title: 'Book2', author: 'Grandy', available: true, category: enum_1.Category.Biology },
    { id: 3, title: 'Book3', author: 'Mensa', available: false, category: enum_1.Category.Biology }
];
var purgedBooks = utility_1.Purge(inventory);
purgedBooks.forEach(function (book) { return console.log("The title: ", book.title); });
var purgedNums = utility_1.Purge([1, 2, 3, 4, 5]);
purgedNums.forEach(function (num) { return console.log("the num: ", num); });
//# sourceMappingURL=app.js.map