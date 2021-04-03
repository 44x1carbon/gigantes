---
title: "Class: InOperator"
---

# Class: InOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](inoperator.md#constructor)

### Properties

- [attributeKey](inoperator.md#attributekey)
- [values](inoperator.md#values)

### Methods

- [addOperator](inoperator.md#addoperator)
- [invoke](inoperator.md#invoke)

## Constructors

### constructor

\+ **new InOperator**(`attributeKey`: *string*, `values`: *string*[]): [*InOperator*](inoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`values` | *string*[] |

**Returns:** [*InOperator*](inoperator.md)

Defined in: [query/Operator.ts:144](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L144)

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: [query/Operator.ts:143](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L143)

___

### values

• **values**: *string*[]

Defined in: [query/Operator.ts:144](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L144)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:170](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L170)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:151](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L151)
