"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootDomSelector = void 0;
var MultipleDomSelector_1 = require("./MultipleDomSelector");
var SingleDomSelector_1 = require("./SingleDomSelector");
var SelectFunction_1 = require("./SelectFunction");
var RootDomSelector = /** @class */ (function () {
    function RootDomSelector(whereQuery) {
        this.whereQuery = whereQuery;
    }
    RootDomSelector.prototype.first = function () {
        var elementSpec = new SingleDomSelector_1.SingleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.first();
        return elementSpec;
    };
    RootDomSelector.prototype.nth = function (n) {
        var elementSpec = new SingleDomSelector_1.SingleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.nth(n);
        return elementSpec;
    };
    RootDomSelector.prototype.takeAll = function () {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.takeAll();
        return elementSpec;
    };
    RootDomSelector.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.skipAndTake(n, skip);
        return elementSpec;
    };
    RootDomSelector.prototype.skip = function (n) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.skip(n);
        return elementSpec;
    };
    RootDomSelector.prototype.take = function (n) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.take(n);
        return elementSpec;
    };
    RootDomSelector.prototype.child = function (whereQuery) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(whereQuery);
        elementSpec.parentElementSpec = this.takeAll();
        return elementSpec;
    };
    RootDomSelector.prototype.next = function (whereQuery) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(whereQuery);
        elementSpec.prevElementSpec = this.takeAll();
        return elementSpec;
    };
    return RootDomSelector;
}());
exports.RootDomSelector = RootDomSelector;
//# sourceMappingURL=RootDomSelector.js.map