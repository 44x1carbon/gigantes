"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapExtract = exports.extract = void 0;
var extract = function (option, domNode) {
    var result = {};
    Object.keys(option).forEach(function (key) {
        var value = option[key];
        if (typeof value === "object") {
            result[key] = exports.extract(value, domNode);
        }
        else {
            result[key] = value(domNode);
        }
    });
    return result;
};
exports.extract = extract;
var mapExtract = function (extractFn, mapFn) {
    return function (body) {
        return mapFn(extractFn(body));
    };
};
exports.mapExtract = mapExtract;
//# sourceMappingURL=ExtractOption.js.map