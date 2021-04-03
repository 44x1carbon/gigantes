---
title: "Class: OrOperator"
---

# Class: OrOperator

## Hierarchy

* [*SetOperator*](setoperator.md)

  ↳ **OrOperator**

## Table of contents

### Constructors

- [constructor](oroperator.md#constructor)

### Properties

- [operators](oroperator.md#operators)

### Methods

- [addOperator](oroperator.md#addoperator)
- [invoke](oroperator.md#invoke)

## Constructors

### constructor

\+ **new OrOperator**(): [*OrOperator*](oroperator.md)

**Returns:** [*OrOperator*](oroperator.md)

Inherited from: [SetOperator](setoperator.md)

## Properties

### operators

• **operators**: [*Operator*](../interfaces/operator.md)[]

Inherited from: [SetOperator](setoperator.md).[operators](setoperator.md#operators)

Defined in: query/Operator.ts:20

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Inherited from: [SetOperator](setoperator.md)

Defined in: query/Operator.ts:26

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Overrides: [SetOperator](setoperator.md)

Defined in: query/Operator.ts:38
