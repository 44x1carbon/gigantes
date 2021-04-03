export class DomNode {
  cheerio: cheerio.Cheerio;
  private root: cheerio.Root;

  constructor(cheerio: cheerio.Cheerio, root: cheerio.Root) {
    this.cheerio = cheerio;
    this.root = root;
  }

  get children(): DomNode[] {
    return this.cheerio
      .children("*")
      .toArray()
      .map((element) => this.root(element))
      .map((cheerio) => new DomNode(cheerio, this.root));
  }

  get nextAll(): DomNode[] {
    return this.cheerio
      .nextAll()
      .toArray()
      .map((element) => this.root(element))
      .map((cheerio) => new DomNode(cheerio, this.root));
  }

  attr(attributeKey: string): string {
    return this.cheerio.attr(attributeKey);
  }

  css(propertyName: string): string {
    return this.cheerio.css(propertyName);
  }

  get classNames(): string[] {
    const className = this.cheerio.attr("class");
    return className
      ? className.split(" ").filter((className) => className)
      : [];
  }

  get tagName(): string {
    return this.cheerio.prop("tagName").toLowerCase();
  }

  get text(): string {
    return this.cheerio.text();
  }
}
