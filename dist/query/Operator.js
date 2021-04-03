"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.NInOperator = exports.InOperator = exports.NLikeOperator = exports.LikeOperator = exports.NEqOperator = exports.EqOperator = exports.OrOperator = exports.AndOperator = exports.SetOperator = exports.SingleOperator = void 0;
var SingleOperator = /** @class */ (function () {
    function SingleOperator() {
    }
    SingleOperator.prototype.invoke = function (domNode) {
        throw new Error("Method not implemented.");
    };
    SingleOperator.prototype.addOperator = function (operator) {
        this.operator = operator;
    };
    return SingleOperator;
}());
exports.SingleOperator = SingleOperator;
var SetOperator = /** @class */ (function () {
    function SetOperator() {
        this.operators = [];
    }
    SetOperator.prototype.invoke = function (domNode) {
        throw new Error("Method not implemented.");
    };
    SetOperator.prototype.addOperator = function (operator) {
        this.operators.push(operator);
    };
    return SetOperator;
}());
exports.SetOperator = SetOperator;
var AndOperator = /** @class */ (function (_super) {
    __extends(AndOperator, _super);
    function AndOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndOperator.prototype.invoke = function (domNode) {
        return this.operators.every(function (operator) { return operator.invoke(domNode); });
    };
    return AndOperator;
}(SetOperator));
exports.AndOperator = AndOperator;
var OrOperator = /** @class */ (function (_super) {
    __extends(OrOperator, _super);
    function OrOperator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OrOperator.prototype.invoke = function (domNode) {
        return this.operators.some(function (operator) { return operator.invoke(domNode); });
    };
    return OrOperator;
}(SetOperator));
exports.OrOperator = OrOperator;
var EqOperator = /** @class */ (function () {
    function EqOperator(attributeKey, value) {
        this.attributeKey = attributeKey;
        this.value = value;
    }
    EqOperator.prototype.invoke = function (domNode) {
        if (!domNode) {
            return false;
        }
        switch (this.attributeKey) {
            case "class":
                return domNode.classNames.includes(this.value);
            case "text":
                return domNode.text === this.value;
            case "tagName":
                return domNode.tagName === this.value;
            default: {
                return (domNode.css(this.attributeKey) === this.value ||
                    domNode.attr(this.attributeKey) === this.value);
            }
        }
    };
    EqOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return EqOperator;
}());
exports.EqOperator = EqOperator;
var NEqOperator = /** @class */ (function () {
    function NEqOperator(attributeKey, value) {
        this.attributeKey = attributeKey;
        this.value = value;
    }
    NEqOperator.prototype.invoke = function (domNode) {
        return !new EqOperator(this.attributeKey, this.value).invoke(domNode);
    };
    NEqOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return NEqOperator;
}());
exports.NEqOperator = NEqOperator;
var LikeOperator = /** @class */ (function () {
    function LikeOperator(attributeKey, value) {
        this.attributeKey = attributeKey;
        this.value = value;
    }
    LikeOperator.prototype.invoke = function (domNode) {
        var _this = this;
        switch (this.attributeKey) {
            case "class":
                return domNode.classNames.some(function (className) {
                    return className.includes(_this.value);
                });
            case "text":
                return domNode.text.includes(this.value);
            case "tagName":
                return domNode.tagName.includes(this.value);
            default: {
                return (domNode.css(this.attributeKey).includes(this.value) ||
                    domNode.attr(this.attributeKey).includes(this.value));
            }
        }
    };
    LikeOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return LikeOperator;
}());
exports.LikeOperator = LikeOperator;
var NLikeOperator = /** @class */ (function () {
    function NLikeOperator(attributeKey, value) {
        this.attributeKey = attributeKey;
        this.value = value;
    }
    NLikeOperator.prototype.invoke = function (domNode) {
        return !new LikeOperator(this.attributeKey, this.value).invoke(domNode);
    };
    NLikeOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return NLikeOperator;
}());
exports.NLikeOperator = NLikeOperator;
var InOperator = /** @class */ (function () {
    function InOperator(attributeKey, values) {
        this.attributeKey = attributeKey;
        this.values = values;
    }
    InOperator.prototype.invoke = function (domNode) {
        var _this = this;
        switch (this.attributeKey) {
            case "class":
                return domNode.classNames.some(function (className) {
                    return _this.values.includes(className);
                });
            case "text":
                return this.values.includes(domNode.text);
            case "tagName":
                return this.values.includes(domNode.tagName);
            default: {
                return (this.values.includes(domNode.css(this.attributeKey)) ||
                    this.values.includes(domNode.attr(this.attributeKey)));
            }
        }
    };
    InOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return InOperator;
}());
exports.InOperator = InOperator;
var NInOperator = /** @class */ (function () {
    function NInOperator(attributeKey, values) {
        this.attributeKey = attributeKey;
        this.values = values;
    }
    NInOperator.prototype.invoke = function (domNode) {
        return !new InOperator(this.attributeKey, this.values).invoke(domNode);
    };
    NInOperator.prototype.addOperator = function (operator) {
        throw new Error("Method not implemented.");
    };
    return NInOperator;
}());
exports.NInOperator = NInOperator;
//# sourceMappingURL=Operator.js.map