---
title: "Class: DomNode"
---

# Class: DomNode

## Table of contents

### Constructors

- [constructor](domnode.md#constructor)

### Properties

- [cheerio](domnode.md#cheerio)
- [root](domnode.md#root)

### Accessors

- [children](domnode.md#children)
- [classNames](domnode.md#classnames)
- [nextAll](domnode.md#nextall)
- [tagName](domnode.md#tagname)
- [text](domnode.md#text)

### Methods

- [attr](domnode.md#attr)
- [css](domnode.md#css)

## Constructors

### constructor

\+ **new DomNode**(`cheerio`: Cheerio, `root`: Root): [*DomNode*](domnode.md)

#### Parameters:

Name | Type |
:------ | :------ |
`cheerio` | Cheerio |
`root` | Root |

**Returns:** [*DomNode*](domnode.md)

Defined in: [DomNode.ts:3](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L3)

## Properties

### cheerio

• **cheerio**: Cheerio

Defined in: [DomNode.ts:2](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L2)

___

### root

• `Private` **root**: Root

Defined in: [DomNode.ts:3](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L3)

## Accessors

### children

• get **children**(): [*DomNode*](domnode.md)[]

**Returns:** [*DomNode*](domnode.md)[]

Defined in: [DomNode.ts:10](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L10)

___

### classNames

• get **classNames**(): *string*[]

**Returns:** *string*[]

Defined in: [DomNode.ts:34](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L34)

___

### nextAll

• get **nextAll**(): [*DomNode*](domnode.md)[]

**Returns:** [*DomNode*](domnode.md)[]

Defined in: [DomNode.ts:18](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L18)

___

### tagName

• get **tagName**(): *string*

**Returns:** *string*

Defined in: [DomNode.ts:41](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L41)

___

### text

• get **text**(): *string*

**Returns:** *string*

Defined in: [DomNode.ts:45](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L45)

## Methods

### attr

▸ **attr**(`attributeKey`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |

**Returns:** *string*

Defined in: [DomNode.ts:26](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L26)

___

### css

▸ **css**(`propertyName`: *string*): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`propertyName` | *string* |

**Returns:** *string*

Defined in: [DomNode.ts:30](https://github.com/44x1carbon/gigantes/blob/2721068/src/DomNode.ts#L30)
