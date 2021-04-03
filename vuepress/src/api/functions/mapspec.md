---
title: "Function: mapSpec"
---

# Function: mapSpec

▸ `Const`**mapSpec**<T, R\>(`fn`: (`spec`: T) => R): [*MapDomSelector*](../classes/mapdomselector.md)<[*IdentityDomSelector*](../classes/identitydomselector.md) \| [*SingleDomSelector*](../classes/singledomselector.md) \| [*MultipleDomSelector*](../classes/multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](../classes/domnode.md)\>\>, T, R\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | [*IdentityDomSelector*](../classes/identitydomselector.md) \| [*SingleDomSelector*](../classes/singledomselector.md) \| [*MultipleDomSelector*](../classes/multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](../classes/domnode.md)\>\> |
`R` | [*IdentityDomSelector*](../classes/identitydomselector.md) \| [*SingleDomSelector*](../classes/singledomselector.md) \| [*MultipleDomSelector*](../classes/multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](../classes/domnode.md)\>\> |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`spec`: T) => R |

**Returns:** [*MapDomSelector*](../classes/mapdomselector.md)<[*IdentityDomSelector*](../classes/identitydomselector.md) \| [*SingleDomSelector*](../classes/singledomselector.md) \| [*MultipleDomSelector*](../classes/multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](../classes/domnode.md)\>\>, T, R\>

Defined in: [selector/MapDomSelector.ts:47](https://github.com/44x1carbon/gigantes/blob/89b5bd4/src/selector/MapDomSelector.ts#L47)
