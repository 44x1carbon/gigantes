---
sidebarDepth: 1
---

# Identify the DOM element

## Specifying conditions to identify an element

Use `SelectQuery` to identify the DOM elements from which you want to extract information.
Write the tag name, class name, or attribute name as the key, and the condition as the value.

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

| Condition Name |                                                  | Possible values |
| :------------- | :----------------------------------------------- | --------------- |
| eq             | If the value matches the specified value         | string          |
| neq            | If the value does not match the specified value  | string          |
| like           | If the specified value is included               | string \| regex |
| nlike          | If the specified value is not included           | string \| regex |
| in             | If any of the specified values are matched       | string[]        |
| nin            | If it does not match any of the specified values | tring[]         |

## Combining multiple conditions

You can use `and` and `or` to combine multiple conditions.

### and

With `and`, only DOM elements that match all the specified criteria can be retrieved.

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

With `or`, only DOM elements that match one of the specified conditions can be retrieved.

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

## Specify the range to retrieve

You can call the `DomSelector` method to specify the range to get.

```typescript
const selector = domSelector({
  tagName: {
    eq: "h1";
  }
}).first();
```

| Method name       |                                           |
| :---------------- | :---------------------------------------- |
| first()           | Get the first element.                    |
| nth(n)            | Get the nth element. (starting at 0)      |
| takeAll()         | Get all elements.                         |
| take(n)           | Get the first n elements. (starting at 0) |
| skip(n)           | Get all elements except the first n.      |
| skipAndTake(n, m) | Get the nth ~ mth element.                |

## Specifying child and sibling elements

By calling the `child` or `next` method of the defined `DomSelector`, you can specify the child or sibling elements.

### Specify a child element

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

### Specify a sibling element

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

## DomSelector Types

### Basic DomSelector

#### SingleDomSelector

A DomSelector that returns a single Dom element.
If you call `extract` or `extractObject`, it will return a single value.

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

A DomSelector that returns multiple Dom elements.
If you call `extract` or `extractObject`, it will return multiple values in an array format.

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

### Special DomSelector

#### RootDomSelector

DomSelector used as the return value of the domSelector method
Depending on the method called afterwards, it will be converted to `SingleDomSelector` or `MultipleDomSelector`.

```typescript
const rootDomSelector = domSelector({...});

const singleDomSelector = rootDomSelector.first();

const multipleDomSelector = rootDomSelector.takeAll();
```

#### IdentityDomSelector

TBD

#### MapDomSelector

TBD
