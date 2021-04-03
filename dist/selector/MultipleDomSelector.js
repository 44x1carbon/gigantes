"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultipleDomSelector = void 0;
var DigNode_1 = require("../DigNode");
var ExtractOption_1 = require("../extract/ExtractOption");
var LoggerFactory_1 = require("../util/logger/LoggerFactory");
var NestArray_1 = require("../NestArray");
var WhereQuery_1 = require("../query/WhereQuery");
var SelectFunction_1 = require("./SelectFunction");
var IdentityDomSelector_1 = require("./IdentityDomSelector");
var log = LoggerFactory_1.LoggerFactory.create("ListElementSpec");
var MultipleDomSelector = /** @class */ (function () {
    function MultipleDomSelector(whereQuery) {
        this.selectFn = SelectFunction_1.takeAll();
        this.whereQuery = whereQuery;
    }
    MultipleDomSelector.prototype.first = function () {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.first();
        return elementSpec;
    };
    MultipleDomSelector.prototype.nth = function (n) {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.nth(n);
        return elementSpec;
    };
    MultipleDomSelector.prototype.takeAll = function () {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.takeAll();
        return elementSpec;
    };
    MultipleDomSelector.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.skipAndTake(n, skip);
        return elementSpec;
    };
    MultipleDomSelector.prototype.skip = function (n) {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.skip(n);
        return elementSpec;
    };
    MultipleDomSelector.prototype.take = function (n) {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.take(n);
        return elementSpec;
    };
    MultipleDomSelector.prototype.select = function (selectFn) {
        var elementSpec = new MultipleDomSelector(this.whereQuery);
        elementSpec.selectFn = selectFn;
        return elementSpec;
    };
    MultipleDomSelector.prototype.child = function (whereQuery) {
        var elementSpec = new MultipleDomSelector(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    MultipleDomSelector.prototype.next = function (whereQuery) {
        var elementSpec = new MultipleDomSelector(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    MultipleDomSelector.prototype.getDomNode = function () {
        var _this = this;
        if (this.parentElementSpec) {
            return function (body) {
                log.debug("has parent", "parent: " +
                    JSON.stringify(_this.parentElementSpec.whereQuery) +
                    " " +
                    _this.parentElementSpec.selectFn, "current: " + JSON.stringify(_this.whereQuery) + " " + _this.selectFn);
                log.debug(NestArray_1.nestMap(_this.parentElementSpec.getDomNode().call({}, body), function (domNode) { return ({
                    text: domNode.text.slice(0, 20),
                    classNames: domNode.classNames,
                    tagName: domNode.tagName,
                }); }));
                return NestArray_1.nestMap(_this.parentElementSpec.getDomNode().call({}, body), function (domNode) {
                    var domNodeList = DigNode_1.digNode(domNode, WhereQuery_1.convertWhereQueryToOperator(_this.whereQuery));
                    if (domNodeList.length == 0) {
                        throw new Error("domNode not found \n" +
                            JSON.stringify(_this.whereQuery, null, 2));
                    }
                    return _this.selectFn(domNodeList);
                });
            };
        }
        if (this.prevElementSpec) {
            return function (body) {
                log.debug("has prev", "prev: " +
                    JSON.stringify(_this.prevElementSpec.whereQuery) +
                    " " +
                    _this.prevElementSpec.selectFn, "current: " + JSON.stringify(_this.whereQuery) + " " + _this.selectFn);
                log.debug(NestArray_1.nestMap(_this.prevElementSpec.getDomNode().call({}, body), function (domNode) { return ({
                    text: domNode.text.slice(0, 20),
                    classNames: domNode.classNames,
                    tagName: domNode.tagName,
                }); }));
                return NestArray_1.nestMap(_this.prevElementSpec.getDomNode().call({}, body), function (domNode) {
                    var domNodeList = DigNode_1.nextAll(domNode, WhereQuery_1.convertWhereQueryToOperator(_this.whereQuery));
                    if (domNodeList.length == 0) {
                        throw new Error("domNode not found \n" +
                            JSON.stringify(_this.whereQuery, null, 2));
                    }
                    return _this.selectFn(domNodeList);
                });
            };
        }
        return function (body) {
            var domNodeList = DigNode_1.digNode(body, WhereQuery_1.convertWhereQueryToOperator(_this.whereQuery));
            log.debug("current: " + JSON.stringify(_this.whereQuery) + " " + _this.selectFn);
            log.debug(NestArray_1.nestMap(domNodeList, function (domNode) { return ({
                text: domNode.text.slice(0, 20),
                classNames: domNode.classNames,
                tagName: domNode.tagName,
            }); }));
            if (domNodeList.length == 0) {
                throw new Error("domNode not found \n" + JSON.stringify(_this.whereQuery, null, 2));
            }
            return _this.selectFn(domNodeList);
        };
    };
    MultipleDomSelector.prototype.extract = function (fn, defaultValue) {
        var _this = this;
        return function (body) {
            try {
                return NestArray_1.nestMap(_this.getDomNode().call({}, body), fn);
            }
            catch (e) {
                console.error(e);
                return defaultValue;
            }
        };
    };
    // FIXME 名前を変えたい
    /**
     *
     * @param fn
     * @returns
     */
    MultipleDomSelector.prototype.extractObjectWithSpec = function (fn) {
        var _this = this;
        return function (body) {
            try {
                return NestArray_1.nestMap(_this.getDomNode().call({}, body), function (domNode) {
                    return ExtractOption_1.extract(fn(new IdentityDomSelector_1.IdentityDomSelector(domNode)), domNode);
                });
            }
            catch (e) {
                console.error(e);
                return null;
            }
        };
    };
    MultipleDomSelector.prototype.extractObject = function (option) {
        var _this = this;
        return function (body) {
            try {
                return NestArray_1.nestMap(_this.getDomNode().call({}, body), function (domNode) {
                    return ExtractOption_1.extract(option, domNode);
                });
            }
            catch (e) {
                console.error(e);
                return null;
            }
        };
    };
    return MultipleDomSelector;
}());
exports.MultipleDomSelector = MultipleDomSelector;
//# sourceMappingURL=MultipleDomSelector.js.map