"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLASS_INFO = Symbol();
class UniversityLib {
    [exports.CLASS_INFO]() {
        console.log('this class represents a UniversityLib');
    }
    static [Symbol.hasInstance](obj) {
        return obj.hasOwnProperty('name') && obj.hasOwnProperty('assistCustomer');
    }
    assistCustomer(name) {
        console.log("this is the person name: " + name);
    }
    assistFaculty(custName) {
        console.log('Assisting faculty');
    }
}
exports.UniversityLib = UniversityLib;
class PublicLibrarian {
    assistCustomer(name) {
        console.log("this is the person name: " + name);
    }
    teachCommunity() {
        console.log('Assisting community');
    }
}
exports.PublicLibrarian = PublicLibrarian;
class ReferenceItem {
    constructor(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem..');
    }
    printItem() {
        console.log(`${this.title} was published in ${this.year}`);
        console.log(`Department: ${ReferenceItem.department}`);
    }
    get publisher() {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }
}
exports.ReferenceItem = ReferenceItem;
ReferenceItem.department = 'Research';
class Encyclopedia extends ReferenceItem {
    constructor(newTitle, newYear, pages) {
        super(newTitle, newYear);
        this.pages = pages;
    }
    printCitation() {
        console.log(`details: ${this.title} and the year: ${this.year}`);
    }
}
exports.Encyclopedia = Encyclopedia;
class Employee {
    addToSchedule() {
        console.log('Employee added to schedule');
    }
    logTitle() {
        console.log(`Employee has the title ${this.title}`);
    }
}
exports.Employee = Employee;
class Researcher {
    doResearch(topic) {
        console.log(`Doing research on ${topic}`);
    }
}
exports.Researcher = Researcher;
//# sourceMappingURL=classes.js.map