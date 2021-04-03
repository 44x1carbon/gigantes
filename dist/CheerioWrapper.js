"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchSync = void 0;
var client = require("cheerio-httpcli");
var cheerio = require("cheerio");
var SyncDiskCache = require("sync-disk-cache");
var pkgDir = require("pkg-dir");
var packgageJson = require(pkgDir.sync() + "/package.json");
var cache = new SyncDiskCache(packgageJson.name);
var fetchSync = function (url) {
    if (cache.has(url)) {
        console.debug("chache hit " + url);
        var $ = cheerio.load(cache.get(url).value);
        return $;
    }
    else {
        var _a = client.fetchSync(url), $ = _a.$, error = _a.error;
        console.debug("chache set " + url);
        cache.set(url, $.html());
        return $;
    }
};
exports.fetchSync = fetchSync;
//# sourceMappingURL=CheerioWrapper.js.map