"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
var LoggerFactory_1 = require("./LoggerFactory");
var Logger = /** @class */ (function () {
    function Logger(id, config) {
        this.id = id;
        this.config = config;
    }
    Logger.prototype.isOutput = function (logLevel) {
        var configLevel = this.config[this.id] || "info";
        var index = LoggerFactory_1.LogLevelList.indexOf(configLevel);
        return LoggerFactory_1.LogLevelList.slice(index).includes(logLevel);
    };
    Logger.prototype.meta = function (logLevel) {
        return "\u3010" + logLevel + ":" + this.id + "\u3011" + new Date().toUTCString() + "\n";
    };
    Logger.prototype.trace = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (this.isOutput("trace")) {
            console.debug.apply(console, __spreadArray(__spreadArray([this.meta("trace")], data), ["\n"]));
        }
    };
    Logger.prototype.debug = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (this.isOutput("debug")) {
            console.debug.apply(console, __spreadArray(__spreadArray([this.meta("debug")], data), ["\n"]));
        }
    };
    Logger.prototype.info = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (this.isOutput("info")) {
            console.info.apply(console, __spreadArray(__spreadArray([this.meta("info")], data), ["\n"]));
        }
    };
    Logger.prototype.warn = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (this.isOutput("warn")) {
            console.warn.apply(console, __spreadArray(__spreadArray([this.meta("warn")], data), ["\n"]));
        }
    };
    Logger.prototype.error = function () {
        var data = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            data[_i] = arguments[_i];
        }
        if (this.isOutput("error")) {
            console.error.apply(console, __spreadArray(__spreadArray([this.meta("error")], data), ["\n"]));
        }
    };
    return Logger;
}());
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map