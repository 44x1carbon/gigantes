"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggerFactory = exports._LoggerFactory = exports.LogLevelList = void 0;
var Logger_1 = require("./Logger");
exports.LogLevelList = [
    "trace",
    "debug",
    "info",
    "warn",
    "error",
];
var _LoggerFactory = /** @class */ (function () {
    function _LoggerFactory(config) {
        this.config = config;
    }
    _LoggerFactory.prototype.create = function (id) {
        return new Logger_1.Logger(id, this.config);
    };
    return _LoggerFactory;
}());
exports._LoggerFactory = _LoggerFactory;
exports.LoggerFactory = new _LoggerFactory({
    ListElementSpec: "trace",
    SingleElementSpec: "trace",
});
//# sourceMappingURL=LoggerFactory.js.map