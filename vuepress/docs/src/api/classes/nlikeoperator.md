---
title: "Class: NLikeOperator"
---

# Class: NLikeOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](nlikeoperator.md#constructor)

### Properties

- [attributeKey](nlikeoperator.md#attributekey)
- [value](nlikeoperator.md#value)

### Methods

- [addOperator](nlikeoperator.md#addoperator)
- [invoke](nlikeoperator.md#invoke)

## Constructors

### constructor

\+ **new NLikeOperator**(`attributeKey`: *string*, `value`: *string*): [*NLikeOperator*](nlikeoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`value` | *string* |

**Returns:** [*NLikeOperator*](nlikeoperator.md)

Defined in: query/Operator.ts:127

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: query/Operator.ts:126

___

### value

• **value**: *string*

Defined in: query/Operator.ts:127

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:137

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:133
