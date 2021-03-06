---
title: "Class: MultipleDomSelector<S>"
---

# Class: MultipleDomSelector<S\>

## Type parameters

Name | Type |
:------ | :------ |
`S` | [*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\> |

## Table of contents

### Constructors

- [constructor](multipledomselector.md#constructor)

### Properties

- [parentElementSpec](multipledomselector.md#parentelementspec)
- [prevElementSpec](multipledomselector.md#prevelementspec)
- [takeFn](multipledomselector.md#takefn)
- [whereQuery](multipledomselector.md#wherequery)

### Methods

- [child](multipledomselector.md#child)
- [extract](multipledomselector.md#extract)
- [extractObject](multipledomselector.md#extractobject)
- [extractObjectWithSpec](multipledomselector.md#extractobjectwithspec)
- [first](multipledomselector.md#first)
- [getDomNode](multipledomselector.md#getdomnode)
- [next](multipledomselector.md#next)
- [nth](multipledomselector.md#nth)
- [select](multipledomselector.md#select)
- [skip](multipledomselector.md#skip)
- [skipAndTake](multipledomselector.md#skipandtake)
- [take](multipledomselector.md#take)
- [takeAll](multipledomselector.md#takeall)

## Constructors

### constructor

\+ **new MultipleDomSelector**<S\>(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*MultipleDomSelector*](multipledomselector.md)<S\>

#### Type parameters:

Name | Type |
:------ | :------ |
`S` | [*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\> |

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<S\>

Defined in: [selector/MultipleDomSelector.ts:38](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L38)

## Properties

### parentElementSpec

• **parentElementSpec**: [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*DecrementNest*](../types/decrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:30](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L30)

___

### prevElementSpec

• **prevElementSpec**: [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*DecrementNest*](../types/decrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:34](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L34)

___

### takeFn

• **takeFn**: [*TakeFunction*](../types/takefunction.md)<[*TakeFunctionReturnType*](../types/takefunctionreturntype.md)\>

Defined in: [selector/MultipleDomSelector.ts:38](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L38)

___

### whereQuery

• **whereQuery**: [*SelectQuery*](../types/selectquery.md)

Defined in: [selector/MultipleDomSelector.ts:29](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L29)

## Methods

### child

▸ **child**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:101](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L101)

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

**Returns:** (`parent`: [*DomNode*](domnode.md)) => [*NestMapType*](../types/nestmaptype.md)<[*DomNode*](domnode.md), S, T\>

Defined in: [selector/MultipleDomSelector.ts:240](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L240)

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

**Returns:** (`parent`: [*DomNode*](domnode.md)) => [*NestMapType*](../types/nestmaptype.md)<[*DomNode*](domnode.md), S, T\>

Defined in: [selector/MultipleDomSelector.ts:275](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L275)

___

### extractObjectWithSpec

▸ **extractObjectWithSpec**<T\>(`fn`: (`spec`: [*IdentityDomSelector*](identitydomselector.md)) => [*ExtractOption*](../types/extractoption.md)<T\>): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`spec`: [*IdentityDomSelector*](identitydomselector.md)) => [*ExtractOption*](../types/extractoption.md)<T\> |

**Returns:** (`parent`: [*DomNode*](domnode.md)) => [*NestMapType*](../types/nestmaptype.md)<[*DomNode*](domnode.md), S, T\>

Defined in: [selector/MultipleDomSelector.ts:260](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L260)

___

### first

▸ **first**(): [*MultipleDomSelector*](multipledomselector.md)<S\>

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<S\>

Defined in: [selector/MultipleDomSelector.ts:44](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L44)

___

### getDomNode

▸ **getDomNode**(): *function*

**Returns:** (`body`: [*DomNode*](domnode.md)) => [*NestArray*](../types/nestarray.md)<[*TakeFunctionReturnType*](../types/takefunctionreturntype.md)\>

Defined in: [selector/MultipleDomSelector.ts:125](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L125)

___

### next

▸ **next**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:113](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L113)

___

### nth

▸ **nth**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<S\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<S\>

Defined in: [selector/MultipleDomSelector.ts:50](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L50)

___

### select

▸ **select**(`selectFn`: [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)[]\>): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`selectFn` | [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)[]\> |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:91](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L91)

___

### skip

▸ **skip**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:75](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L75)

___

### skipAndTake

▸ **skipAndTake**(`n`: *number*, `skip`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |
`skip` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:64](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L64)

___

### take

▸ **take**(`n`: *number*): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

#### Parameters:

Name | Type |
:------ | :------ |
`n` | *number* |

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:83](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L83)

___

### takeAll

▸ **takeAll**(): [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

**Returns:** [*MultipleDomSelector*](multipledomselector.md)<[*IncrementNest*](../types/incrementnest.md)<[*DomNode*](domnode.md), S\>\>

Defined in: [selector/MultipleDomSelector.ts:56](https://github.com/44x1carbon/gigantes/blob/2721068/src/selector/MultipleDomSelector.ts#L56)
