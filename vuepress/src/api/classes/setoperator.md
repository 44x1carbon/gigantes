---
title: "Class: SetOperator"
---

# Class: SetOperator

## Hierarchy

* **SetOperator**

  ↳ [*AndOperator*](andoperator.md)

  ↳ [*OrOperator*](oroperator.md)

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](setoperator.md#constructor)

### Properties

- [operators](setoperator.md#operators)

### Methods

- [addOperator](setoperator.md#addoperator)
- [invoke](setoperator.md#invoke)

## Constructors

### constructor

\+ **new SetOperator**(): [*SetOperator*](setoperator.md)

**Returns:** [*SetOperator*](setoperator.md)

## Properties

### operators

• **operators**: [*Operator*](../interfaces/operator.md)[]

Defined in: query/Operator.ts:20

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:26

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:22
