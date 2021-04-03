---
title: "Class: SingleDomSelector"
---

# Class: SingleDomSelector

## Table of contents

### Constructors

- [constructor](singledomselector.md#constructor)

### Properties

- [parentElementSpec](singledomselector.md#parentelementspec)
- [prevElementSpec](singledomselector.md#prevelementspec)
- [takeFn](singledomselector.md#takefn)
- [whereQuery](singledomselector.md#wherequery)

### Methods

- [child](singledomselector.md#child)
- [extract](singledomselector.md#extract)
- [extractObject](singledomselector.md#extractobject)
- [first](singledomselector.md#first)
- [getDomNode](singledomselector.md#getdomnode)
- [next](singledomselector.md#next)
- [nth](singledomselector.md#nth)
- [select](singledomselector.md#select)
- [skip](singledomselector.md#skip)
- [skipAndTake](singledomselector.md#skipandtake)
- [take](singledomselector.md#take)
- [takeAll](singledomselector.md#takeall)

## Constructors

### constructor

\+ **new SingleDomSelector**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:26](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L26)

## Properties

### parentElementSpec

• **parentElementSpec**: [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:24](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L24)

___

### prevElementSpec

• **prevElementSpec**: [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:25](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L25)

___

### takeFn

• **takeFn**: [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)\>

Defined in: [selector/SingleDomSelector.ts:26](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L26)

___

### whereQuery

• **whereQuery**: [*SelectQuery*](../types/selectquery.md)

Defined in: [selector/SingleDomSelector.ts:23](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L23)

## Methods

### child

▸ **child**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:95](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L95)

___

### extract

▸ **extract**<T\>(`fn`: (`domNode`: [*DomNode*](domnode.md)) => T, `defaultValue?`: T): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`domNode`: [*DomNode*](domnode.md)) => T |
`defaultValue?` | T |

**Returns:** (`parent`: [*DomNode*](domnode.md)) => T

Defined in: [selector/SingleDomSelector.ts:209](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L209)

___

### extractObject

▸ **extractObject**<T\>(`option`: [*ExtractOption*](../types/extractoption.md)<T\>): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`option` | [*ExtractOption*](../types/extractoption.md)<T\> |

**Returns:** (`parent`: [*DomNode*](domnode.md)) => T

Defined in: [selector/SingleDomSelector.ts:223](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L223)

___

### first

▸ **first**(): [*SingleDomSelector*](singledomselector.md)

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:32](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L32)

___

### getDomNode

▸ **getDomNode**(): *function*

**Returns:** (`body`: [*DomNode*](domnode.md)) => [*DomNode*](domnode.md)

Defined in: [selector/SingleDomSelector.ts:107](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L107)

___

### next

▸ **next**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:101](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L101)

___

### nth

▸ **nth**(`n`: *number*): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: [selector/SingleDomSelector.ts:40](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L40)

___

### select

▸ **select**(`selectFn`: [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)[]\>): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`selectFn` | [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)[]\> |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/SingleDomSelector.ts:83](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L83)

___

### skip

▸ **skip**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/SingleDomSelector.ts:67](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L67)

___

### skipAndTake

▸ **skipAndTake**(`n`: *number*, `skip`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |
`skip` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/SingleDomSelector.ts:56](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L56)

___

### take

▸ **take**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/SingleDomSelector.ts:75](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L75)

___

### takeAll

▸ **takeAll**(): [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*NestArray1*](../types/nestarray1.md)<[*DomNode*](domnode.md)\>\>

Defined in: [selector/SingleDomSelector.ts:48](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/SingleDomSelector.ts#L48)
