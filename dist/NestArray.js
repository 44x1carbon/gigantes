"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nestMap = void 0;
// 構造を保ちつつ終端の要素をマップする
var nestMap = function (nestArray, mapFn) {
    if (nestArray instanceof Array) {
        if (!(nestArray[0] instanceof Array)) {
            // @ts-ignore
            return nestArray.map(function (item) { return mapFn(item); });
        }
        else {
            // @ts-ignore
            return nestArray.map(function (item) { return exports.nestMap(item, mapFn); });
        }
    }
    // @ts-ignore
    return mapFn(nestArray);
};
exports.nestMap = nestMap;
//# sourceMappingURL=NestArray.js.map