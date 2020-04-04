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
var UniversityLib = (function () {
    function UniversityLib() {
    }
    UniversityLib.prototype.assistCustomer = function (name) {
        console.log("this is the person name: " + name);
    };
    return UniversityLib;
}());
exports.UniversityLib = UniversityLib;
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
//# sourceMappingURL=classes.js.map