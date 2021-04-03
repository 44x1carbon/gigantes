"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SingleDomSelector = void 0;
var DigNode_1 = require("../DigNode");
var ExtractOption_1 = require("../extract/ExtractOption");
var MultipleDomSelector_1 = require("./MultipleDomSelector");
var LoggerFactory_1 = require("../util/logger/LoggerFactory");
var NestArray_1 = require("../NestArray");
var WhereQuery_1 = require("../query/WhereQuery");
var SelectFunction_1 = require("./SelectFunction");
var debug_1 = require("../util/debug");
var log = LoggerFactory_1.LoggerFactory.create("SingleElementSpec");
var SingleDomSelector = /** @class */ (function () {
    function SingleDomSelector(whereQuery) {
        this.selectFn = SelectFunction_1.first();
        this.whereQuery = whereQuery;
    }
    SingleDomSelector.prototype.first = function () {
        var elementSpec = new SingleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.first();
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        return elementSpec;
    };
    SingleDomSelector.prototype.nth = function (n) {
        var elementSpec = new SingleDomSelector(this.whereQuery);
        elementSpec.selectFn = SelectFunction_1.nth(n);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        return elementSpec;
    };
    SingleDomSelector.prototype.takeAll = function () {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFunction_1.takeAll();
        return elementSpec;
    };
    SingleDomSelector.prototype.skipAndTake = function (n, skip) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFunction_1.skipAndTake(n, skip);
        return elementSpec;
    };
    SingleDomSelector.prototype.skip = function (n) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFunction_1.skip(n);
        return elementSpec;
    };
    SingleDomSelector.prototype.take = function (n) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = SelectFunction_1.take(n);
        return elementSpec;
    };
    SingleDomSelector.prototype.select = function (selectFn) {
        var elementSpec = new MultipleDomSelector_1.MultipleDomSelector(this.whereQuery);
        elementSpec.parentElementSpec = this.parentElementSpec;
        elementSpec.prevElementSpec = this.prevElementSpec;
        elementSpec.selectFn = selectFn;
        return elementSpec;
    };
    SingleDomSelector.prototype.child = function (whereQuery) {
        var elementSpec = new SingleDomSelector(whereQuery);
        elementSpec.parentElementSpec = this;
        return elementSpec;
    };
    SingleDomSelector.prototype.next = function (whereQuery) {
        var elementSpec = new SingleDomSelector(whereQuery);
        elementSpec.prevElementSpec = this;
        return elementSpec;
    };
    SingleDomSelector.prototype.getDomNode = function () {
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
                throw new Error("domNode not found \nquery:" +
                    JSON.stringify(_this.whereQuery, null, 2) +
                    "\nparentNode: " +
                    JSON.stringify(debug_1.toDomNodeInfo(body)) +
                    "\nparentNode NextAll:" +
                    JSON.stringify(body.nextAll.map(debug_1.toDomNodeInfo), null, 2));
            }
            return _this.selectFn(domNodeList);
        };
    };
    SingleDomSelector.prototype.extract = function (fn, defaultValue) {
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
    SingleDomSelector.prototype.extractObject = function (option) {
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
    return SingleDomSelector;
}());
exports.SingleDomSelector = SingleDomSelector;
//# sourceMappingURL=SingleDomSelector.js.map