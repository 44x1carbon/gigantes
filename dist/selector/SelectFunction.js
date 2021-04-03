"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.skip = exports.skipAndTake = exports.take = exports.takeAll = exports.nth = exports.first = void 0;
var first = function () { return function (domNodeList) { return domNodeList[0]; }; };
exports.first = first;
var nth = function (n) { return function (domNodeList) { return domNodeList[n - 1]; }; };
exports.nth = nth;
var takeAll = function () { return function (domNodeList) { return domNodeList; }; };
exports.takeAll = takeAll;
var take = function (n) { return function (domNodeList) { return domNodeList.slice(0, n); }; };
exports.take = take;
var skipAndTake = function (n, skip) { return function (domNodeList) { return domNodeList.slice(skip, skip + n); }; };
exports.skipAndTake = skipAndTake;
var skip = function (skip) { return function (domNodeList) { return domNodeList.slice(skip); }; };
exports.skip = skip;
//# sourceMappingURL=SelectFunction.js.map