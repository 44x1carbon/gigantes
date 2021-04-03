"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSetQuery = exports.isSingleQuery = exports.convertWhereQueryToOperator = void 0;
var Operator_1 = require("./Operator");
var convertWhereQueryToOperator = function (query) {
    if (exports.isSingleQuery(query)) {
        return convertSingleQuery(query);
    }
    else {
        return convertSetQuery(query);
    }
};
exports.convertWhereQueryToOperator = convertWhereQueryToOperator;
var convertSingleQuery = function (query) {
    var andOperator = new Operator_1.AndOperator();
    Object.keys(query).forEach(function (key) {
        if (query[key].eq) {
            andOperator.addOperator(new Operator_1.EqOperator(key, query[key].eq));
        }
        if (query[key].neq) {
            andOperator.addOperator(new Operator_1.NEqOperator(key, query[key].neq));
        }
        if (query[key].like) {
            andOperator.addOperator(new Operator_1.LikeOperator(key, query[key].like));
        }
        if (query[key].nlike) {
            andOperator.addOperator(new Operator_1.LikeOperator(key, query[key].nlike));
        }
        if (query[key].in) {
            andOperator.addOperator(new Operator_1.InOperator(key, query[key].in));
        }
        if (query[key].nin) {
            andOperator.addOperator(new Operator_1.NInOperator(key, query[key].nin));
        }
    });
    return andOperator;
};
var convertSetQuery = function (query) {
    var andOperator = new Operator_1.AndOperator();
    if (query.and) {
        query.and.forEach(function (q) {
            if (exports.isSingleQuery(q)) {
                andOperator.addOperator(convertSingleQuery(q));
            }
            else {
                andOperator.addOperator(convertSetQuery(q));
            }
        });
    }
    if (query.or) {
        var orOperator_1 = new Operator_1.OrOperator();
        query.or.forEach(function (q) {
            if (exports.isSingleQuery(q)) {
                orOperator_1.addOperator(convertSingleQuery(q));
            }
            else {
                orOperator_1.addOperator(convertSetQuery(q));
            }
        });
        andOperator.addOperator(orOperator_1);
    }
    return andOperator;
};
var isSingleQuery = function (query) {
    return !exports.isSetQuery(query);
};
exports.isSingleQuery = isSingleQuery;
var isSetQuery = function (query) {
    return Object.keys(query).some(function (key) { return ["and", "or"].includes(key); });
};
exports.isSetQuery = isSetQuery;
//# sourceMappingURL=WhereQuery.js.map