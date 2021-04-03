---
title: "Class: IdentityDomSelector"
---

# Class: IdentityDomSelector

## Table of contents

### Constructors

- [constructor](identitydomselector.md#constructor)

### Properties

- [domNode](identitydomselector.md#domnode)
- [takeFn](identitydomselector.md#takefn)
- [whereQuery](identitydomselector.md#wherequery)

### Methods

- [child](identitydomselector.md#child)
- [extract](identitydomselector.md#extract)
- [extractObject](identitydomselector.md#extractobject)
- [getDomNode](identitydomselector.md#getdomnode)
- [next](identitydomselector.md#next)

## Constructors

### constructor

\+ **new IdentityDomSelector**(`domNode`: [*DomNode*](domnode.md)): [*IdentityDomSelector*](identitydomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`domNode` | [*DomNode*](domnode.md) |

**Returns:** [*IdentityDomSelector*](identitydomselector.md)

Defined in: selector/IdentityDomSelector.ts:10

## Properties

### domNode

• `Private` **domNode**: [*DomNode*](domnode.md)

Defined in: selector/IdentityDomSelector.ts:8

___

### takeFn

• **takeFn**: [*TakeFunction*](../types/takefunction.md)<[*DomNode*](domnode.md)\>

Defined in: selector/IdentityDomSelector.ts:10

___

### whereQuery

• **whereQuery**: [*SelectQuery*](../types/selectquery.md)

Defined in: selector/IdentityDomSelector.ts:9

## Methods

### child

▸ **child**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: selector/IdentityDomSelector.ts:20

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

Defined in: selector/IdentityDomSelector.ts:32

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

Defined in: selector/IdentityDomSelector.ts:46

___

### getDomNode

▸ **getDomNode**(): *function*

**Returns:** (`body`: [*DomNode*](domnode.md)) => [*DomNode*](domnode.md)

Defined in: selector/IdentityDomSelector.ts:16

___

### next

▸ **next**(`whereQuery`: [*SelectQuery*](../types/selectquery.md)): [*SingleDomSelector*](singledomselector.md)

#### Parameters:

Name | Type |
:------ | :------ |
`whereQuery` | [*SelectQuery*](../types/selectquery.md) |

**Returns:** [*SingleDomSelector*](singledomselector.md)

Defined in: selector/IdentityDomSelector.ts:26
