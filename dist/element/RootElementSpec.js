"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootElementSpec = void 0;
var ListElementSpec_1 = require("./ListElementSpec");
var SingleElementSpec_1 = require("./SingleElementSpec");
var SelectFn_1 = require("./SelectFn");
var RootElementSpec = /** @class */ (function () {
    function RootElementSpec(whereQuery) {
        this.whereQuery = whereQuery;
    }
    RootElementSpec.prototype.first = function () {
        var elementSpec = new SingleElementSpec_1.SingleElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.first();
        return elementSpec;
    };
    RootElementSpec.prototype.nth = function (n) {
        var elementSpec = new SingleElementSpec_1.SingleElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.nth(n);
        return elementSpec;
    };
    RootElementSpec.prototype.takeAll = function () {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.takeAll();
        return elementSpec;
    };
    RootElementSpec.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.skipAndTake(n, skip);
        return elementSpec;
    };
    RootElementSpec.prototype.skip = function (n) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.skip(n);
        return elementSpec;
    };
    RootElementSpec.prototype.take = function (n) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.take(n);
        return elementSpec;
    };
    RootElementSpec.prototype.child = function (whereQuery) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(whereQuery);
        elementSpec.parentElementSpec = this.takeAll();
        return elementSpec;
    };
    RootElementSpec.prototype.next = function (whereQuery) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(whereQuery);
        elementSpec.prevElementSpec = this.takeAll();
        return elementSpec;
    };
    return RootElementSpec;
}());
exports.RootElementSpec = RootElementSpec;
//# sourceMappingURL=RootElementSpec.js.map