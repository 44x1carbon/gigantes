---
title: "Class: NInOperator"
---

# Class: NInOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](ninoperator.md#constructor)

### Properties

- [attributeKey](ninoperator.md#attributekey)
- [values](ninoperator.md#values)

### Methods

- [addOperator](ninoperator.md#addoperator)
- [invoke](ninoperator.md#invoke)

## Constructors

### constructor

\+ **new NInOperator**(`attributeKey`: *string*, `values`: *string*[]): [*NInOperator*](ninoperator.md)

#### Parameters:

Name | Type |
:------ | :------ |
`attributeKey` | *string* |
`values` | *string*[] |

**Returns:** [*NInOperator*](ninoperator.md)

Defined in: [query/Operator.ts:177](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L177)

## Properties

### attributeKey

• **attributeKey**: *string*

Defined in: [query/Operator.ts:176](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L176)

___

### values

• **values**: *string*[]

Defined in: [query/Operator.ts:177](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L177)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:187](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L187)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: [query/Operator.ts:183](https://github.com/44x1carbon/gigantes/blob/2721068/src/query/Operator.ts#L183)
