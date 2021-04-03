"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSpec = exports.MapDomSelector = void 0;
var MapDomSelector = /** @class */ (function () {
    function MapDomSelector(fn) {
        this.fn = fn;
    }
    MapDomSelector.prototype.invoke = function (spec) {
        if (this.parent) {
            return this.fn(this.parent.invoke(spec));
        }
        return this.fn(spec);
    };
    MapDomSelector.prototype.map = function (fn) {
        var mapSpec = new MapDomSelector(fn);
        mapSpec.parent = this;
        return mapSpec;
    };
    return MapDomSelector;
}());
exports.MapDomSelector = MapDomSelector;
var mapSpec = function (fn) {
    return new MapDomSelector(fn);
};
exports.mapSpec = mapSpec;
//# sourceMappingURL=MapDomSelector.js.map