---
title: "Class: NEqOperator"
---

# Class: NEqOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](neqoperator.md#constructor)

### Properties

- [attributeKey](neqoperator.md#attributekey)
- [value](neqoperator.md#value)

### Methods

- [addOperator](neqoperator.md#addoperator)
- [invoke](neqoperator.md#invoke)

## Constructors

### constructor

\+ **new NEqOperator**(`attributeKey`: *string*, `value`: *string*): [*NEqOperator*](neqoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`value` | *string* |

**Returns:** [*NEqOperator*](neqoperator.md)

Defined in: [query/Operator.ts:78](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L78)

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: [query/Operator.ts:77](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L77)

___

### value

• **value**: *string*

Defined in: [query/Operator.ts:78](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L78)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:88](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L88)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:84](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L84)
