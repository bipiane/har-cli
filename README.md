har-cli
=======

HAR file analyzer

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/har-cli.svg)](https://npmjs.org/package/har-cli)
[![CircleCI](https://circleci.com/gh/bipiane/har-cli/tree/master.svg?style=shield)](https://circleci.com/gh/bipiane/har-cli/tree/master)
[![Downloads/week](https://img.shields.io/npm/dw/har-cli.svg)](https://npmjs.org/package/har-cli)
[![License](https://img.shields.io/npm/l/har-cli.svg)](https://github.com/bipiane/har-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g har-cli
$ har-cli COMMAND
running command...
$ har-cli (-v|--version|version)
har-cli/0.0.1 darwin-x64 node-v12.16.3
$ har-cli --help [COMMAND]
USAGE
  $ har-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`har-cli har [FILE]`](#har-cli-har-file)
* [`har-cli help [COMMAND]`](#har-cli-help-command)

## `har-cli har [FILE]`

Export a CSV file from a HAR file

```
USAGE
  $ har-cli har [FILE]

OPTIONS
  -h, --help           show CLI help
  -o, --output=output  [default: export.scv] output file
```

_See code: [src/commands/har.ts](https://github.com/bipiane/har-cli/blob/v0.0.1/src/commands/har.ts)_

## `har-cli help [COMMAND]`

display help for har-cli

```
USAGE
  $ har-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.2/src/commands/help.ts)_
<!-- commandsstop -->
