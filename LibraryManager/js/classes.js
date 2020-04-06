"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const decorator_1 = require("./decorator");
class UniversityLib {
    assistCustomer(name) {
        console.log("this is the person name: " + name);
    }
    assistFaculty(custName) {
        console.log('Assisting faculty');
    }
}
__decorate([
    decorator_1.writable(true)
], UniversityLib.prototype, "assistFaculty", null);
exports.UniversityLib = UniversityLib;
class PublicLibrarian {
    assistCustomer(name) {
        console.log("this is the person name: " + name);
    }
    teachCommunity() {
        console.log('Assisting community');
    }
}
__decorate([
    decorator_1.writable(false)
], PublicLibrarian.prototype, "teachCommunity", null);
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