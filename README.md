# ack-angular
Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular2

Demos and Examples : [tap here](https://ackerapple.github.io/ack-angular/)

> Looking for Angular 1.5+ code, use [ack-angularjs](https://github.com/AckerApple/ack-angularjs)

### Table of Contents
- [Install](#install)
  - [Requirements](#requirements)
  - [ack-webpack install jsDependencies](#ack-webpack-install-jsdependencies)
  - [Manually Install jsDependencies](#manually-install-jsdependencies)
- [AoT Compatibility](#aot-compatiblity)
- [Include in Project](#include-in-project)
- [Dependency Map](#dependency-map)
- [Components](#components)
- [Work on This Project](#work-on-this-project)
  - [Building Example](#building-example)
- [Resources](#install)

# Install

## Requirements
Since you're using Angular, the following are expected to already be installed:

- reflect-metadata
- @angular/core

Two ways to install:

- Use ack-webpack to install jsDependencies
- Manually install jsDependencies

> AoT Compatiblity a concern? [READ HERE FIRST](#aot-compatiblity)

### ack-webpack install jsDependencies

> NOTE : [ack-webpack](https://www.npmjs.com/package/ack-webpack) auto adds a script entry to your package.json file to make CLI commands easier

Step 1
```bash
npm install ack-webpack --save-dev
```

Step 2 : **NOT** AoT Compatible
```bash
npm run ack-webpack -- install
```

Step 2 : Aot Compatible
```bash
npm run ack-webpack -- install:js
```


### Manually Install jsDependencies
If you don't use [ack-webpack](https://www.npmjs.com/package/ack-webpack) to install your dependencies, you can do it... but it may not be AoT compatible and you may not always include future undocumented dependencies

```bash
npm install --save-dev web-animations-js ack-angular-fx ui-router-ng2 ack-angular
```

### AoT Compatiblity
I, Acker Dawn Apple, have busted my tail to get a grip on Ahead-of-Time compiling. I've come up with a few custom measures to handle this beast:

**Biggest Note**: Your import modules for ack-angular, will need to be the source Typescript files, and they **cannot** live in the node_modules folder

First, a lot was learned here about AoT's requirements:
- https://medium.com/@isaacplmann/getting-your-angular-2-library-ready-for-aot-90d1347bcad
- https://medium.com/@isaacplmann/making-your-angular-2-library-statically-analyzable-for-aot-e1c6f3ebedd5

Second, for your code to include my code and to be AoT compatible:
- Your going to need to import my Typesscript source files
  - `import * as pipes from "ack-angular/pipes"`
  - `import { RouteDocWatcher } from "ack-angular/RouteDocWatcher.component"`
  - `import { RouteWatcher } from "ack-angular/RouteWatcher.class"`
  - And so on...
- This project uses a js_modules folder as a node_modules alternative, to be compatible with .ts source file import bundling
- The package [ack-webpack](https://www.npmjs.com/package/ack-webpack) and its CLI commands makes installing and targeting the js_modules folder, much easier
  - It reads jsDependencies of a packages.json file
  - Easy to use
    - Install one package : `ack-webpack install:js ack-angular-fx`
    - Install all jsDependencies : `ack-webpack install:js`
    - And so on...
- It is far easier to compile AoT with Typescript source files (.ts)
  - **IF** you include .ts source files from the **node_modules** folder, you'll run into errors
  - I created the js_modules folder concept
    - Took away the concept from [jspm](https://www.npmjs.com/package/jspm) which puts js files into non-node_modules folder
    - This allows .ts source file imports to occur without error

## Include in Project
ack-angular uses file based imports, importing the index does nothing.


### Import Samples

> If you attempt to import any of the following, certain dependencies must have already been installed.
>> [check dependency map](#dependency-map)

```javascript
import * as pipes from "ack-angular/pipes"

import * as RouteDocWatcher from "ack-angular/RouteDocWatcher.component"

import * as RouteWatcher from "ack-angular/RouteWatcher.class"
```

> Do NOT do this
```bash
import * as ackAngular from 'ack-angular';
```

## Dependency Map
If you import the following files, make sure you have installed it's dependencies

> You can ignore all of this if you used [ack-webpack to install jsDependencies](#ack-webpack-install-jsdependencies)

- ack-angular/fx
```javascript
import * as fx from "ack-angular/fx"
```
```bash
npm install ack-angular-fx --save-dev
```
- ack-angular/RouteDocWatcher.component
```javascript
import * as RouteDocWatcher from "ack-angular/RouteDocWatcher.component"
```
```bash
npm install ui-router-ng2 --save-dev
```
- ack-angular/RouteWatcher.class
```javascript
import * as RouteWatcher from "ack-angular/RouteWatcher.class"
```
```bash
npm install ui-router-ng2 --save-dev
```

> The [Extended Documentation](https://ackerapple.github.io/ack-angular/) will help further understanding what's required of and when

# Components

## route-doc-watcher
```javascript
import { UIRouterModule } from "ui-router-ng2";
import { RouteWatcher } from "ack-angular/RouteWatcher.class"
import { RouteDocWatcher } from "ack-angular/RouteDocWatcher.component"
import { NgModule } from '@angular/core';

@NgModule({
  imports:[ UIRouterModule.forRoot({states:...}) ],
  providers: [ RouteWatcher ],
  declarations:[RouteDocWatcher]
})
```

# Work on This Project
Everything in this topic is run in an command prompt terminal

Clone this project
```bash
git clone https://github.com/AckerApple/ack-angular
```

## Building Example

Dev Fast Project Watching
```bash
npm run watch:example:js:jit
```

Dev AoT Project Watching. Longer compile times, ensures production compatibility
```bash
npm run watch:example:js
```

When changing core code animations, the example prefx must be compiled
```bash
npm run compile:example:prefx
```

## Publishing

```bash
npm run build
```


## Resources
- [Examples and Docs](https://ackerapple.github.io/ack-angular/)
- [Repository](https://github.com/AckerApple/ack-angular)
- [Angular2 Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
