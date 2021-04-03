---
title: "Class: MapDomSelector<RT, T, R>"
---

# Class: MapDomSelector<RT, T, R\>

## Type parameters

Name | Type |
:------ | :------ |
`RT` | [*IdentityDomSelector*](identitydomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> \| [*SingleDomSelector*](singledomselector.md) |
`T` | [*IdentityDomSelector*](identitydomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> \| [*SingleDomSelector*](singledomselector.md) |
`R` | [*IdentityDomSelector*](identitydomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> \| [*SingleDomSelector*](singledomselector.md) |

## Table of contents

### Constructors

- [constructor](mapdomselector.md#constructor)

### Properties

- [fn](mapdomselector.md#fn)
- [parent](mapdomselector.md#parent)

### Methods

- [invoke](mapdomselector.md#invoke)
- [map](mapdomselector.md#map)

## Constructors

### constructor

\+ **new MapDomSelector**<RT, T, R\>(`fn`: (`spec`: T) => R): [*MapDomSelector*](mapdomselector.md)<RT, T, R\>

#### Type parameters:

Name | Type |
:------ | :------ |
`RT` | [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> |
`T` | [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> |
`R` | [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`spec`: T) => R |

**Returns:** [*MapDomSelector*](mapdomselector.md)<RT, T, R\>

Defined in: selector/MapDomSelector.ts:22

## Properties

### fn

• **fn**: (`spec`: RT \| T) => R

#### Type declaration:

▸ (`spec`: RT \| T): R

#### Parameters:

Name | Type |
:------ | :------ |
`spec` | RT \| T |

**Returns:** R

Defined in: selector/MapDomSelector.ts:21

Defined in: selector/MapDomSelector.ts:21

___

### parent

• **parent**: [*MapDomSelector*](mapdomselector.md)<RT, any, T\>

Defined in: selector/MapDomSelector.ts:22

## Methods

### invoke

▸ **invoke**(`spec`: RT): R

#### Parameters:

Name | Type |
:------ | :------ |
`spec` | RT |

**Returns:** R

Defined in: selector/MapDomSelector.ts:28

___

### map

▸ **map**<R2\>(`fn`: (`spec`: R) => R2): [*MapDomSelector*](mapdomselector.md)<RT, R, R2\>

#### Type parameters:

Name | Type |
:------ | :------ |
`R2` | [*IdentityDomSelector*](identitydomselector.md) \| [*SingleDomSelector*](singledomselector.md) \| [*MultipleDomSelector*](multipledomselector.md)<[*NestArray*](../types/nestarray.md)<[*DomNode*](domnode.md)\>\> |

#### Parameters:

Name | Type |
:------ | :------ |
`fn` | (`spec`: R) => R2 |

**Returns:** [*MapDomSelector*](mapdomselector.md)<RT, R, R2\>

Defined in: selector/MapDomSelector.ts:35
