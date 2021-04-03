---
title: "Class: LikeOperator"
---

# Class: LikeOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](likeoperator.md#constructor)

### Properties

- [attributeKey](likeoperator.md#attributekey)
- [value](likeoperator.md#value)

### Methods

- [addOperator](likeoperator.md#addoperator)
- [invoke](likeoperator.md#invoke)

## Constructors

### constructor

\+ **new LikeOperator**(`attributeKey`: *string*, `value`: *string*): [*LikeOperator*](likeoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`value` | *string* |

**Returns:** [*LikeOperator*](likeoperator.md)

Defined in: [query/Operator.ts:95](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L95)

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: [query/Operator.ts:94](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L94)

___

### value

• **value**: *string*

Defined in: [query/Operator.ts:95](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L95)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:120](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L120)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:101](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L101)
