"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomNode = void 0;
var DomNode = /** @class */ (function () {
    function DomNode(cheerio, root) {
        this.cheerio = cheerio;
        this.root = root;
    }
    Object.defineProperty(DomNode.prototype, "children", {
        get: function () {
            var _this = this;
            return this.cheerio
                .children("*")
                .toArray()
                .map(function (element) { return _this.root(element); })
                .map(function (cheerio) { return new DomNode(cheerio, _this.root); });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomNode.prototype, "nextAll", {
        get: function () {
            var _this = this;
            return this.cheerio
                .nextAll()
                .toArray()
                .map(function (element) { return _this.root(element); })
                .map(function (cheerio) { return new DomNode(cheerio, _this.root); });
        },
        enumerable: false,
        configurable: true
    });
    DomNode.prototype.attr = function (attributeKey) {
        return this.cheerio.attr(attributeKey);
    };
    DomNode.prototype.css = function (propertyName) {
        return this.cheerio.css(propertyName);
    };
    Object.defineProperty(DomNode.prototype, "classNames", {
        get: function () {
            var className = this.cheerio.attr("class");
            return className
                ? className.split(" ").filter(function (className) { return className; })
                : [];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomNode.prototype, "tagName", {
        get: function () {
            return this.cheerio.prop("tagName").toLowerCase();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DomNode.prototype, "text", {
        get: function () {
            return this.cheerio.text();
        },
        enumerable: false,
        configurable: true
    });
    return DomNode;
}());
exports.DomNode = DomNode;
//# sourceMappingURL=DomNode.js.map