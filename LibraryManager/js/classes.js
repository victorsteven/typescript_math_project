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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var decorator_1 = require("./decorator");
var UniversityLib = (function () {
    function UniversityLib() {
    }
    UniversityLib.prototype.assistCustomer = function (name) {
        console.log("this is the person name: " + name);
    };
    UniversityLib.prototype.assistFaculty = function (custName) {
        console.log('Assisting faculty');
    };
    UniversityLib = __decorate([
        decorator_1.sealed('HelloString')
    ], UniversityLib);
    return UniversityLib;
}());
exports.UniversityLib = UniversityLib;
var PublicLibrarian = (function () {
    function PublicLibrarian() {
    }
    PublicLibrarian.prototype.assistCustomer = function (name) {
        console.log("this is the person name: " + name);
    };
    PublicLibrarian.prototype.teachCommunity = function () {
        console.log('Assisting community');
    };
    return PublicLibrarian;
}());
exports.PublicLibrarian = PublicLibrarian;
var ReferenceItem = (function () {
    function ReferenceItem(title, year) {
        this.title = title;
        this.year = year;
        console.log('Creating a new ReferenceItem..');
    }
    ReferenceItem.prototype.printItem = function () {
        console.log(this.title + " was published in " + this.year);
        console.log("Department: " + ReferenceItem.department);
    };
    Object.defineProperty(ReferenceItem.prototype, "publisher", {
        get: function () {
            return this._publisher.toUpperCase();
        },
        set: function (newPublisher) {
            this._publisher = newPublisher;
        },
        enumerable: true,
        configurable: true
    });
    ReferenceItem.department = 'Research';
    return ReferenceItem;
}());
exports.ReferenceItem = ReferenceItem;
var Encyclopedia = (function (_super) {
    __extends(Encyclopedia, _super);
    function Encyclopedia(newTitle, newYear, pages) {
        var _this = _super.call(this, newTitle, newYear) || this;
        _this.pages = pages;
        return _this;
    }
    Encyclopedia.prototype.printCitation = function () {
        console.log("details: " + this.title + " and the year: " + this.year);
    };
    return Encyclopedia;
}(ReferenceItem));
exports.Encyclopedia = Encyclopedia;
var Employee = (function () {
    function Employee() {
    }
    Employee.prototype.addToSchedule = function () {
        console.log('Employee added to schedule');
    };
    Employee.prototype.logTitle = function () {
        console.log("Employee has the title " + this.title);
    };
    return Employee;
}());
exports.Employee = Employee;
var Researcher = (function () {
    function Researcher() {
    }
    Researcher.prototype.doResearch = function (topic) {
        console.log("Doing research on " + topic);
    };
    return Researcher;
}());
exports.Researcher = Researcher;
//# sourceMappingURL=classes.js.map