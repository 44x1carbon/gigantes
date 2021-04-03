"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListElementSpec = void 0;
var DigNode_1 = require("../DigNode");
var ExtractOption_1 = require("../ExtractOption");
var LoggerFactory_1 = require("../logger/LoggerFactory");
var NestArray_1 = require("../NestArray");
var WhereQuery_1 = require("../WhereQuery");
var SelectFn_1 = require("./SelectFn");
var IdentitySpec_1 = require("./IdentitySpec");
var log = LoggerFactory_1.LoggerFactory.create("ListElementSpec");
var ListElementSpec = /** @class */ (function () {
    function ListElementSpec(whereQuery) {
        this.selectFn = SelectFn_1.takeAll();
        this.whereQuery = whereQuery;
    }
    ListElementSpec.prototype.first = function () {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.first();
        return elementSpec;
    };
    ListElementSpec.prototype.nth = function (n) {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.nth(n);
        return elementSpec;
    };
    ListElementSpec.prototype.takeAll = function () {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.takeAll();
        return elementSpec;
    };
    ListElementSpec.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.skipAndTake(n, skip);
        return elementSpec;
    };
    ListElementSpec.prototype.skip = function (n) {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.skip(n);
        return elementSpec;
    };
    ListElementSpec.prototype.take = function (n) {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.take(n);
        return elementSpec;
    };
    ListElementSpec.prototype.select = function (selectFn) {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.selectFn = selectFn;
        return elementSpec;
    };
    ListElementSpec.prototype.child = function (whereQuery) {
        var elementSpec = new ListElementSpec(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    ListElementSpec.prototype.next = function (whereQuery) {
        var elementSpec = new ListElementSpec(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    ListElementSpec.prototype.copy = function () {
        var elementSpec = new ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        // elementSpec.selectQuery = this.selectQuery;
        return elementSpec;
    };
    ListElementSpec.prototype.getDomNode = function () {
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
    ListElementSpec.prototype.extract = function (fn, defaultValue) {
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
    ListElementSpec.prototype.extractObjectWithSpec = function (fn) {
        var _this = this;
        return function (body) {
            try {
                return NestArray_1.nestMap(_this.getDomNode().call({}, body), function (domNode) {
                    return ExtractOption_1.extract(fn(new IdentitySpec_1.IdentitySpec(domNode)), domNode);
                });
            }
            catch (e) {
                console.error(e);
                return null;
            }
        };
    };
    ListElementSpec.prototype.extractObject = function (option) {
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
    return ListElementSpec;
}());
exports.ListElementSpec = ListElementSpec;
//# sourceMappingURL=ListElementSpec.js.map