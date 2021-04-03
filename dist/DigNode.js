"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextAll = exports.digNode = void 0;
var digNode = function (domNode, operator) {
    if (!domNode) {
        return [];
    }
    if (operator.invoke(domNode)) {
        return [domNode];
    }
    else {
        return [].concat.apply([], domNode.children.map(function (childDomNode) { return exports.digNode(childDomNode, operator); }));
    }
};
exports.digNode = digNode;
var nextAll = function (domNode, operator) {
    return domNode.nextAll.filter(function (nextDomNode) { return operator.invoke(nextDomNode); });
};
exports.nextAll = nextAll;
//# sourceMappingURL=DigNode.js.map