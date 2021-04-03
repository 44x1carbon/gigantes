---
title: "Class: SingleOperator"
---

# Class: SingleOperator

## Implements

* [*Operator*](../interfaces/operator.md)

## Table of contents

### Constructors

- [constructor](singleoperator.md#constructor)

### Properties

- [operator](singleoperator.md#operator)

### Methods

- [addOperator](singleoperator.md#addoperator)
- [invoke](singleoperator.md#invoke)

## Constructors

### constructor

\+ **new SingleOperator**(): [*SingleOperator*](singleoperator.md)

**Returns:** [*SingleOperator*](singleoperator.md)

## Properties

### operator

• **operator**: [*Operator*](../interfaces/operator.md)

Defined in: query/Operator.ts:9

## Methods

### addOperator

▸ **addOperator**(`operator`: [*Operator*](../interfaces/operator.md)): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`operator` | [*Operator*](../interfaces/operator.md) |

**Returns:** *void*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:14

___

### invoke

▸ **invoke**(`domNode`: [*DomNode*](domnode.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** *boolean*

Implementation of: [Operator](../interfaces/operator.md)

Defined in: query/Operator.ts:11
