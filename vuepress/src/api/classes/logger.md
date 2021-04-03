---
title: "Class: Logger"
---

# Class: Logger

## Table of contents

### Constructors

- [constructor](logger.md#constructor)

### Properties

- [config](logger.md#config)
- [id](logger.md#id)

### Methods

- [debug](logger.md#debug)
- [error](logger.md#error)
- [info](logger.md#info)
- [isOutput](logger.md#isoutput)
- [meta](logger.md#meta)
- [trace](logger.md#trace)
- [warn](logger.md#warn)

## Constructors

### constructor

\+ **new Logger**(`id`: *string*, `config`: [*LoggerConfig*](../types/loggerconfig.md)): [*Logger*](logger.md)

#### Parameters:

Name | Type |
:------ | :------ |
`id` | *string* |
`config` | [*LoggerConfig*](../types/loggerconfig.md) |

**Returns:** [*Logger*](logger.md)

Defined in: util/logger/Logger.ts:5

## Properties

### config

• **config**: [*LoggerConfig*](../types/loggerconfig.md)

Defined in: util/logger/Logger.ts:5

___

### id

• **id**: *string*

Defined in: util/logger/Logger.ts:4

## Methods

### debug

▸ **debug**(...`data`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...data` | *any* |

**Returns:** *void*

Defined in: util/logger/Logger.ts:27

___

### error

▸ **error**(...`data`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...data` | *any* |

**Returns:** *void*

Defined in: util/logger/Logger.ts:42

___

### info

▸ **info**(...`data`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...data` | *any* |

**Returns:** *void*

Defined in: util/logger/Logger.ts:32

___

### isOutput

▸ `Private`**isOutput**(`logLevel`: [*LogLevel*](../types/loglevel.md)): *boolean*

#### Parameters:

Name | Type |
:------ | :------ |
`logLevel` | [*LogLevel*](../types/loglevel.md) |

**Returns:** *boolean*

Defined in: util/logger/Logger.ts:12

___

### meta

▸ `Private`**meta**(`logLevel`: [*LogLevel*](../types/loglevel.md)): *string*

#### Parameters:

Name | Type |
:------ | :------ |
`logLevel` | [*LogLevel*](../types/loglevel.md) |

**Returns:** *string*

Defined in: util/logger/Logger.ts:18

___

### trace

▸ **trace**(...`data`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...data` | *any* |

**Returns:** *void*

Defined in: util/logger/Logger.ts:22

___

### warn

▸ **warn**(...`data`: *any*): *void*

#### Parameters:

Name | Type |
:------ | :------ |
`...data` | *any* |

**Returns:** *void*

Defined in: util/logger/Logger.ts:37
