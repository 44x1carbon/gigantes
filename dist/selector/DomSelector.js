"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.domSelector = void 0;
var RootDomSelector_1 = require("./RootDomSelector");
var domSelector = function (whereQuery) {
    var elementSpec = new RootDomSelector_1.RootDomSelector(whereQuery);
    return elementSpec;
};
exports.domSelector = domSelector;
//# sourceMappingURL=DomSelector.js.map