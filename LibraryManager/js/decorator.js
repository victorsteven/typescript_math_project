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
//# sourceMappingURL=decorator.js.map