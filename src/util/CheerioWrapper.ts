import { CheerioStaticEx } from "cheerio-httpcli";

const client = require("cheerio-httpcli");
const cheerio = require("cheerio");
const SyncDiskCache = require("sync-disk-cache");

const pkgDir = require("pkg-dir");
const packgageJson = require(pkgDir.sync() + "/package.json");

const cache = new SyncDiskCache(packgageJson.name);

export const fetchSync = (url): cheerio.Root => {
  // if (cache.has(url)) {
  //   console.debug(`chache hit ${url}`);
  //   const $ = cheerio.load(cache.get(url).value);
  //   return $;
  // } else {
  const { $, error } = client.fetchSync(url);
  console.debug(`chache set ${url}`);
  cache.set(url, $.html());
  return $;
  // }
};
