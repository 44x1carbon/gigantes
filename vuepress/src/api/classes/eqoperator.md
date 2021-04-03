---
title: "Class: EqOperator"
---

# Class: EqOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](eqoperator.md#constructor)

### Properties

- [attributeKey](eqoperator.md#attributekey)
- [value](eqoperator.md#value)

### Methods

- [addOperator](eqoperator.md#addoperator)
- [invoke](eqoperator.md#invoke)

## Constructors

### constructor

\+ **new EqOperator**(`attributeKey`: *string*, `value`: *string*): [*EqOperator*](eqoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`value` | *string* |

**Returns:** [*EqOperator*](eqoperator.md)

Defined in: [query/Operator.ts:45](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L45)

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: [query/Operator.ts:44](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L44)

___

### value

• **value**: *string*

Defined in: [query/Operator.ts:45](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L45)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:71](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L71)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:51](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L51)
