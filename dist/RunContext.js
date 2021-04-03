"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = exports.RunContext = void 0;
var CheerioWrapper_1 = require("./util/CheerioWrapper");
var DomNode_1 = require("./DomNode");
var ExtractOption_1 = require("./extract/ExtractOption");
var RunContext = /** @class */ (function () {
    function RunContext(url) {
        this.url = url;
    }
    RunContext.prototype.extractBody = function (option) {
        var $ = CheerioWrapper_1.fetchSync(this.url);
        var body = new DomNode_1.DomNode($("body"), $);
        return ExtractOption_1.extract(option, body);
    };
    return RunContext;
}());
exports.RunContext = RunContext;
var run = function (url) {
    return new RunContext(url);
};
exports.run = run;
//# sourceMappingURL=RunContext.js.map