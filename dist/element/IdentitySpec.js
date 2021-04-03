"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentitySpec = void 0;
var ExtractOption_1 = require("../ExtractOption");
var SelectFn_1 = require("./SelectFn");
var SingleElementSpec_1 = require("./SingleElementSpec");
var IdentitySpec = /** @class */ (function () {
    function IdentitySpec(domNode) {
        this.whereQuery = {};
        this.selectFn = SelectFn_1.first();
        this.domNode = domNode;
    }
    IdentitySpec.prototype.getDomNode = function () {
        var _this = this;
        return function (body) { return _this.domNode; };
    };
    IdentitySpec.prototype.child = function (whereQuery) {
        var elementSpec = new SingleElementSpec_1.SingleElementSpec(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    IdentitySpec.prototype.next = function (whereQuery) {
        var elementSpec = new SingleElementSpec_1.SingleElementSpec(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    IdentitySpec.prototype.extract = function (fn, defaultValue) {
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
    IdentitySpec.prototype.extractObject = function (option) {
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
    return IdentitySpec;
}());
exports.IdentitySpec = IdentitySpec;
//# sourceMappingURL=IdentitySpec.js.map