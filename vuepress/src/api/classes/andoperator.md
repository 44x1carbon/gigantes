---
title: "Class: AndOperator"
---

# Class: AndOperator

## Hierarchy

* [*SetOperator*](setoperator.md)

  ↳ **AndOperator**

## Table of contents

### Constructors

- [constructor](andoperator.md#constructor)

### Properties

- [operators](andoperator.md#operators)

### Methods

- [addOperator](andoperator.md#addoperator)
- [invoke](andoperator.md#invoke)

## Constructors

### constructor

\+ **new AndOperator**(): [*AndOperator*](andoperator.md)

**Returns:** [*AndOperator*](andoperator.md)

Inherited from: [SetOperator](setoperator.md)

## Properties

### operators

• **operators**: [*Operator*](../interfaces/operator.md)[]

Inherited from: [SetOperator](setoperator.md).[operators](setoperator.md#operators)

Defined in: [query/Operator.ts:20](https://github.com/44x1carbon/gigantes/blob/89b5bd4/src/query/Operator.ts#L20)

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Inherited from: [SetOperator](setoperator.md)

Defined in: [query/Operator.ts:26](https://github.com/44x1carbon/gigantes/blob/89b5bd4/src/query/Operator.ts#L26)

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Overrides: [SetOperator](setoperator.md)

Defined in: [query/Operator.ts:32](https://github.com/44x1carbon/gigantes/blob/89b5bd4/src/query/Operator.ts#L32)
