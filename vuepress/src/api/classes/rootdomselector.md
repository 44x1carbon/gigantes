---
title: "Class: RootDomSelector"
---

# Class: RootDomSelector

## Table of contents

### Constructors

- [constructor](rootdomselector.md#constructor)

### Properties

- [whereQuery](rootdomselector.md#wherequery)

### Methods

- [child](rootdomselector.md#child)
- [first](rootdomselector.md#first)
- [next](rootdomselector.md#next)
- [nth](rootdomselector.md#nth)
- [skip](rootdomselector.md#skip)
- [skipAndTake](rootdomselector.md#skipandtake)
- [take](rootdomselector.md#take)
- [takeAll](rootdomselector.md#takeall)

## Constructors

### constructor

\+ **new RootDomSelector**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*RootDomSelector*](rootdomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*RootDomSelector*](rootdomselector.md)

Defined in: [selector/RootDomSelector.ts:9](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L9)

## Properties

### whereQuery

• **whereQuery**: [*SelectQuery*](../types/selectquery.md)

Defined in: [selector/RootDomSelector.ts:9](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L9)

## Methods

### child

▸ **child**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray2*](../types/nestarray2.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray2*](../types/nestarray2.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:62](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L62)

___

### first

▸ **first**(): [*SingleDomSelector*](singledomselector.md)

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/RootDomSelector.ts:15](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L15)

___

### next

▸ **next**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray2*](../types/nestarray2.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray2*](../types/nestarray2.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:70](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L70)

___

### nth

▸ **nth**(`n`: *number*): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/RootDomSelector.ts:21](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L21)

___

### skip

▸ **skip**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:46](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L46)

___

### skipAndTake

▸ **skipAndTake**(`n`: *number*, `skip`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |
`skip` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:35](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L35)

___

### take

▸ **take**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:54](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L54)

___

### takeAll

▸ **takeAll**(): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/RootDomSelector.ts:27](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/RootDomSelector.ts#L27)
