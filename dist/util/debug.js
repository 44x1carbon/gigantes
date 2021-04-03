"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toDomNodeInfo = void 0;
var toDomNodeInfo = function (domNode) {
    return {
        tagName: domNode.tagName,
        classNames: domNode.classNames,
        text: domNode.text,
    };
};
exports.toDomNodeInfo = toDomNodeInfo;
//# sourceMappingURL=debug.js.map