"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sealed(name) {
    return function (target) {
        console.log("sealing the constructor: " + name);
        Object.seal(target);
        Object.seal(target.prototype);
    };
}
exports.sealed = sealed;
function logger(target) {
    var newContructor = function () {
        console.log("Creating new instance.");
        console.log(target);
    };
    newContructor.prototype = Object.create(target.prototype);
    newContructor.prototype.constructor = target;
    return newContructor;
}
exports.logger = logger;
function writable(isWritable) {
    return function (target, propertyKey, descriptor) {
        console.log("Setting " + propertyKey);
        descriptor.writable = isWritable;
    };
}
exports.writable = writable;
//# sourceMappingURL=decorator.js.map