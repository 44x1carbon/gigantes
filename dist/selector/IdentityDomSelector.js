"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentityDomSelector = void 0;
var ExtractOption_1 = require("../extract/ExtractOption");
var SelectFunction_1 = require("./SelectFunction");
var SingleDomSelector_1 = require("./SingleDomSelector");
var IdentityDomSelector = /** @class */ (function () {
    function IdentityDomSelector(domNode) {
        this.whereQuery = {};
        this.selectFn = SelectFunction_1.first();
        this.domNode = domNode;
    }
    IdentityDomSelector.prototype.getDomNode = function () {
        var _this = this;
        return function (body) { return _this.domNode; };
    };
    IdentityDomSelector.prototype.child = function (whereQuery) {
        var elementSpec = new SingleDomSelector_1.SingleDomSelector(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    IdentityDomSelector.prototype.next = function (whereQuery) {
        var elementSpec = new SingleDomSelector_1.SingleDomSelector(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    IdentityDomSelector.prototype.extract = function (fn, defaultValue) {
        var _this = this;
        return function (body) {
            try {
                return fn(_this.getDomNode().call({}, body));
            }
            catch (e) {
                console.error(e);
                return defaultValue;
            }
        };
    };
    IdentityDomSelector.prototype.extractObject = function (option) {
        var _this = this;
        return function (body) {
            try {
                return ExtractOption_1.extract(option, _this.getDomNode().call({}, body));
            }
            catch (e) {
                console.error(e);
                return null;
            }
        };
    };
    return IdentityDomSelector;
}());
exports.IdentityDomSelector = IdentityDomSelector;
//# sourceMappingURL=IdentityDomSelector.js.map