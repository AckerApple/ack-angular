# ack-angular
Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular2

Demos and Examples : [tap here](https://ackerapple.github.io/ack-angular/)

> Looking for Angular 1.5+ code, use [ack-angularjs](https://github.com/AckerApple/ack-angularjs)

### Table of Contents
- [Install](#install)
  - [Requirements](#requirements)
  - [ack-webpack install jsDependencies](#ack-webpack-install-jsdependencies)
  - [Manually Install jsDependencies](#manually-install-jsdependencies)
- [Include in Project](#include-in-project)
- [Dependency Map](#dependency-map)
- [Resources](#install)

# Install

## Requirements
Since you're using Angular, the following are expected to already be installed:

- reflect-metadata
- @angular/core

Two ways to install:

- Use ack-webpack to install jsDependencies
- Manually install jsDependencies

### ack-webpack install jsDependencies

> NOTE : ack-webpack auto adds a script entry to your package.json file to make CLI commands easier

Step 1
```
npm install ack-webpack --save-dev
```

Step 2
```
npm run ack-webpack -- install
```

### Manually Install jsDependencies

```bash
npm install --save-dev web-animations-js ack-angular-fx ui-router-ng2 ack-angular
```

## Include in Project
ack-angular uses file based imports, importing the index does nothing.


### Import Samples

> If you attempt to import any of the following, certain dependencies must have already been installed.
>> [check dependency map](#dependency-map)

```
import * as fx from "ack-angular/fx"

import * as RouteDocWatcher from "ack-angular/RouteDocWatcher.component"

import * as RouteWatcher from "ack-angular/RouteWatcher.class"
```

> Do NOT do this
```
import * as ackAngular from 'ack-angular';
```

## Dependency Map
If you import the following files, make sure you have installed it's dependencies

> You can ignore all of this if you used [ack-webpack to install jsDependencies](#ack-webpack-install-jsdependencies)

- ack-angular/fx
```
import * as fx from "ack-angular/fx"
```
```
npm install ack-angular-fx --save-dev
```
- ack-angular/RouteDocWatcher.component
```
import * as RouteDocWatcher from "ack-angular/RouteDocWatcher.component"
```
```
npm install ui-router-ng2 --save-dev
```
- ack-angular/RouteWatcher.class
```
import * as RouteWatcher from "ack-angular/RouteWatcher.class"
```
```
npm install ui-router-ng2 --save-dev
```

> The [Extended Documentation](https://ackerapple.github.io/ack-angular/) will help further understanding what's required of and when



## Resources
- [Examples and Docs](https://ackerapple.github.io/ack-angular/)
- [Repository](https://github.com/AckerApple/ack-angular)
- [Angular2 Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
