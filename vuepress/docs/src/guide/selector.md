---
sidebarDepth: 1
---

# DOM 要素を特定する

## 要素を特定する条件を指定する

SelectQuery を使って情報を抽出したい DOM 要素を特定します。
キーにはタグ名・クラス名・属性名、値には条件を書きます。

```typescript
const selector = domSelector({
  tagName: {
    eq: "h1";
  },
  class: {
    like: "blue"
  },
  id: {
      in: [ "hoge", "fuga" ]
  }
});
```

| 条件名 |                                    | 指定できる値    |
| :----- | :--------------------------------- | --------------- |
| eq     | 指定した値に一致した場合           | string          |
| neq    | 指定した値に一致しない場合         | string          |
| like   | 指定した値が含まれている場合       | string \| regex |
| nlike  | 指定した値が含まれていない場合     | string \| regex |
| in     | 指定した値のどれかに一致した場合   | string[]        |
| nin    | 指定した値のどれにも一致しない場合 | tring[]         |

## 複数の条件を組み合わせる

and や or を使って複数の条件を組み合わせる事ができます。

### and

and では指定した全ての条件に一致する DOM 要素のみ取得できます。

```typescript
const selector = domSelector({
  and: [
    {
      tagName: {
        eq: "h1",
      },
    },
    {
      class: {
        like: "blue",
      },
    },
  ],
});
```

### or

or では指定したいずれかの条件に一致する DOM 要素のみ取得できます。

```typescript
const selector = domSelector({
  or: [
    {
      tagName: {
        eq: "h1",
      },
    },
    {
      class: {
        like: "blue",
      },
    },
  ],
});
```

## 取得する範囲を指定する

DomSelector のメソッドを呼び出し取得する範囲を指定する事ができます。

```typescript
const selector = domSelector({
  tagName: {
    eq: "h1";
  }
}).first();
```

| メソッド名        |                                               |
| :---------------- | :-------------------------------------------- |
| first()           | 最初の 1 要素を取得します。                   |
| nth(n)            | n 番目の要素を取得します。(0 始まり)          |
| takeAll()         | 全ての要素を取得します。                      |
| take(n)           | 先頭から n 個の要素を取得します。(0 始まり)   |
| skip(n)           | 先頭から n 個を除いた全ての要素を取得します。 |
| skipAndTake(n, m) | n 番目 ~ m 番目の要素を取得します。           |

## 子要素や兄弟要素を指定する

定義した DomSelector の child や next メソッドを呼び出す事で子要素や兄弟要素を指定する事ができます。

### 子要素を指定する

```typescript
const parentSelector = domSelector({
  class: {
    eq: "parent";
  }
}).first();

const childSelector = parentSelector.child({
    class: {
        eq: "child"
    }
});
```

### 兄弟要素を指定する

```typescript
const prevSelector = domSelector({
  class: {
    eq: "prev";
  }
}).first();

const nextSelector = parentSelector.next({
    class: {
        eq: "next"
    }
});
```

## DomSelector の種類

### 基本的な DomSelector

#### SingleDomSelector

単一の Dom 要素を返す DomSelector です。
extract や extractObject を呼び出した場合は単一の値を返します。

```typescript
const h1SingleSelector = domSelector({
  tagName: { eq: "h1" },
}).first();

const h1SingleText = h1SingleSelector.extract((domNode) => domNode.text);

const result = run("https://xxxxx.xxx").extractBody({
  h1Text: h1SingleText,
});

console.log(result); // { h1Text: 'Hoge' }
```

#### MultipleDomSelector

複数の Dom 要素を返す DomSelector です。
extract や extractObject を呼び出した場合は複数の値を配列形式で返します。

```typescript
const h1MultipleSelector = domSelector({
  tagName: { eq: "h1" },
}).takeAll();

const h1MultipleText = h1MultipleSelector.extract((domNode) => domNode.text);

const result = run("https://xxxxx.xxx").extractBody({
  h1Text: h1MultipleText,
});

console.log(result); // [ { h1Text: 'Hoge' }, { h1Text: 'Fuga' } ]
```

### 特殊な DomSelector

#### RootDomSelector

domSelector メソッドの戻り値として使われる DomSelector
その後呼び出すメソッドにより SingleDomSelector か MultipleDomSelector に変換されます。

```typescript
const rootDomSelector = domSelector({...});

const singleDomSelector = rootDomSelector.first();

const multipleDomSelector = rootDomSelector.takeAll();
```

#### IdentityDomSelector

TBD

#### MapDomSelector

TBD
