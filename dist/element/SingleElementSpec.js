"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleElementSpec = void 0;
var DigNode_1 = require("../DigNode");
var ExtractOption_1 = require("../ExtractOption");
var ListElementSpec_1 = require("./ListElementSpec");
var LoggerFactory_1 = require("../logger/LoggerFactory");
var NestArray_1 = require("../NestArray");
var WhereQuery_1 = require("../WhereQuery");
var SelectFn_1 = require("./SelectFn");
var log = LoggerFactory_1.LoggerFactory.create("SingleElementSpec");
var SingleElementSpec = /** @class */ (function () {
    function SingleElementSpec(whereQuery) {
        this.selectFn = SelectFn_1.first();
        this.whereQuery = whereQuery;
    }
    SingleElementSpec.prototype.first = function () {
        var elementSpec = new SingleElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.first();
        return elementSpec;
    };
    SingleElementSpec.prototype.nth = function (n) {
        var elementSpec = new SingleElementSpec(this.whereQuery);
        elementSpec.selectFn = SelectFn_1.nth(n);
        return elementSpec;
    };
    SingleElementSpec.prototype.takeAll = function () {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFn_1.takeAll();
        return elementSpec;
    };
    SingleElementSpec.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFn_1.skipAndTake(n, skip);
        return elementSpec;
    };
    SingleElementSpec.prototype.skip = function (n) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFn_1.skip(n);
        return elementSpec;
    };
    SingleElementSpec.prototype.take = function (n) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFn_1.take(n);
        return elementSpec;
    };
    SingleElementSpec.prototype.select = function (selectFn) {
        var elementSpec = new ListElementSpec_1.ListElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = selectFn;
        return elementSpec;
    };
    SingleElementSpec.prototype.child = function (whereQuery) {
        var elementSpec = new SingleElementSpec(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    SingleElementSpec.prototype.next = function (whereQuery) {
        var elementSpec = new SingleElementSpec(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    SingleElementSpec.prototype.getDomNode = function () {
        var _this = this;
        if (this.parentElementSpec) {
            return function (body) {
                var domNodeList = DigNode_1.digNode(_this.parentElementSpec.getDomNode().call({}, body), WhereQuery_1.convertWhereQueryToOperator(_this.whereQuery));
                log.debug("has parent", "parent: " +
                    JSON.stringify(_this.parentElementSpec.whereQuery) +
                    " " +
                    _this.parentElementSpec.selectFn, "current: " + JSON.stringify(_this.whereQuery) + " " + _this.selectFn);
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
        }
        if (this.prevElementSpec) {
            return function (body) {
                var domNodeList = DigNode_1.nextAll(_this.prevElementSpec.getDomNode().call({}, body), WhereQuery_1.convertWhereQueryToOperator(_this.whereQuery));
                log.debug("has prev", "parent: " +
                    JSON.stringify(_this.prevElementSpec.whereQuery) +
                    " " +
                    _this.prevElementSpec.selectFn, "current: " + JSON.stringify(_this.whereQuery) + " " + _this.selectFn);
                log.debug(NestArray_1.nestMap(domNodeList, function (domNode) { return ({
                    text: domNode.text.slice(0, 20),
                    classNames: domNode.classNames,
                    tagName: domNode.tagName,
                }); }));
                if (domNodeList.length == 0) {
                    throw new Error("domNode not found \n" + JSON.stringify(_this.whereQuery, null, 2));
                }
                var d = _this.selectFn(domNodeList);
                return _this.selectFn(domNodeList);
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
    SingleElementSpec.prototype.copy = function () {
        var elementSpec = new SingleElementSpec(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        // elementSpec.selectQuery = this.selectQuery;
        return elementSpec;
    };
    SingleElementSpec.prototype.extract = function (fn, defaultValue) {
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
    SingleElementSpec.prototype.extractObject = function (option) {
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
    return SingleElementSpec;
}());
exports.SingleElementSpec = SingleElementSpec;
//# sourceMappingURL=SingleElementSpec.js.map