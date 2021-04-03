import { fetchSync } from "./util/CheerioWrapper";
import { DomNode } from "./DomNode";
import { ExtractOption, extract } from "./extract/ExtractOption";

export class RunContext {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  extractBody<T>(option: ExtractOption<T>): T {
    const $ = fetchSync(this.url);
    const body = new DomNode($("body"), $);

    return extract(option, body);
  }
}

export const run = (url: string): RunContext => {
  return new RunContext(url);
};
