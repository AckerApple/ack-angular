# ack-angular
Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular

> Demos and Examples : [tap here](https://ackerapple.github.io/ack-angular/)

> Source Repository : [src branch here](https://github.com/AckerApple/ack-angular/tree/src)

> AngularJs 1.5+ code : [ack-angularjs](https://github.com/AckerApple/ack-angularjs)

### Table of Contents
- [Install](#install)
  - [Install jsDependencies via ack-webpack](#install-jsdependencies-via-ack-webpack)
  - [Manually Install Dependencies](#manually-install-dependencies)
- [Importing into Project](#importing-into-project)
- [Dependency Map](#dependency-map)
- [AoT Compatibility](#aot-compatibility)
- [Components](#components)
- [Work on This Project](#work-on-this-project)
  - [Building Example](#building-example)
- [Resources](#install)

# Install

Two ways to install:

- Install jsDependencies via ack-webpack
- Manually Install Dependencies

### Install jsDependencies via ack-webpack
[ack-webpack](https://www.npmjs.com/package/ack-webpack) reads the jsDependencies in a package.json to then install defined packages and any sub-jsDependencies of installed packages

> NOTE : ack-webpack auto adds a script entry to your package.json file to make CLI commands easier

Step 1
```bash
npm install ack-webpack --save-dev
```

Step 2
```bash
npm run ack-webpack -- install ack-angular
```


### Manually Install Dependencies
If you don't use [ack-webpack](https://www.npmjs.com/package/ack-webpack) to install your dependencies, you can install dependencies yourself

Minimal Install
```bash
npm install --save-dev web-animations-js ack-angular-fx ack-angular
```

Full Install
```bash
npm install --save-dev reflect-metadata @angular/common @angular/core @angular/forms @angular/animations rxjs zone.js
```

## Importing into Project
ack-angular uses file based imports, importing the index does nothing.

> NOTE : You need to have the [`allowSyntheticDefaultImports` compiler option](https://www.typescriptlang.org/docs/handbook/compiler-options.html) set to `true` in your [tsconfig.json](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html).

### Import Samples

#### Various Import Examples
```javascript
import { pipes, components } from "ack-angular"

//save as above
import { declarations as pipes } from "ack-angular/pipes"
import { declarations as components } from "ack-angular/components"
```

#### Dependency Based Import Examples
If you attempt to import any of the following, certain dependencies must have already been installed.

[check dependency map](#dependency-map)

```javascript
//requires @angular/router imports
import { RouteReporter } from "ack-angular/RouteReporter.directive"
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"

//requires ui-router-ng2 imports : broken as of 3/29/17 when @angular released 4.0.0
import { UiRouteReporter } from "ack-angular/UiRouteReporter.directive"
import { UiRouteWatchReporter } from "ack-angular/UiRouteWatchReporter"
```

## Dependency Map
If you import the following files, make sure you have installed it's dependencies

> You can ignore all of this if you used [ack-webpack to install jsDependencies](#ack-webpack-install-jsdependencies)

- ack-angular/**fx.ts**
  - Import Example : `import * as fx from "ack-angular/fx"`
  - Dependency Install : `npm install ack-angular-fx --save-dev`
- ack-angular/**RouteReporter.directive.ts**
  - Import Example : `import { RouteReporter } from "ack-angular/RouteReporter.directive"`
  - Dependency Install `npm install @angular/router --save-dev`
- ack-angular/**RouteWatchReporter.ts**
  - Import Example : `import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"`
  - Dependency Install `npm install @angular/router --save-dev`
- ack-angular/**UiRouteReporter.directive.ts**
  - **broken** as of 3/29/17 when @angular released 4.0.0
  - Import Example : `import { UiRouteReporter } from "ack-angular/UiRouteReporter.directive"`
  - Dependency Install `npm install ui-router-ng2 --save-dev`
- ack-angular/**UiRouteWatchReporter.ts**
  - **broken** as of 3/29/17 when @angular released 4.0.0
  - Import Example : `import { UiRouteWatchReporter } from "ack-angular/UiRouteWatchReporter"`
  - Dependency Install `npm install ui-router-ng2 --save-dev`

> The [Extended Documentation](https://ackerapple.github.io/ack-angular/) may help bring further understanding as to what is required and when to import dependencies


### AoT Compatibility
I, Acker Dawn Apple, have busted my tail to make this package compatible with Ahead-of-Time compiling.

Everything in this package is tested working with AoT compiling. Animations provided by [ack-angular-fx](https://www.npmjs.com/package/ack-angular-fx), must be pre-compiled to a TypeScript file (dynamic animations are not AoT compatible).

#### Precompile Animations with ack-angular-fx for Aot Compatibility
Dynamic animations are not supported for AoT compiling. Precompile animations to TypeScript file.

- Step 1 : Add script entry to your package.json file
```javascript
"scripts":{
  "compile:prefx": "ack-angular-fx --select animateSwap,400,500 --effects fade,slide --out ./src/prefx.ts"
}
```
- Step 2 : Run script in a command prompt terminal
```bash
npm run compile:prefx
```

# Components
Directives and Components making development life more joyful

## Common Components
Include one file and access several

```javascript
import { pipes as ackPipes , components as ackComps } from "ack-angular/components";
import { NgModule } from '@angular/core';

@NgModule({
  declarations:[...ackComps, ...ackPipes]
})
```

## Complex Components
Components that have additional dependencies or restrictions

### route-reporter
A directive that exposes @angular/router metadata for use in a component template
```javascript
import { RouterModule } from '@angular/router';
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
import { RouteReporter } from "ack-angular/RouteReporter.directive"
import { NgModule } from '@angular/core';

@NgModule({
  imports:[ RouterModule.forRoot([], {}) ],
  providers: [ UiRouteWatchReporter ],
  declarations:[ UiRouteReporter ]
})
```

### ui-route-reporter
A directive that exposes ui-router-ng2 route metadata for use in a component template

> **broken** as of 3/29/17 when @angular released 4.0.0

```javascript
import { UIRouterModule } from "ui-router-ng2";
import { UiRouteWatchReporter } from "ack-angular/UiRouteWatchReporter"
import { UiRouteReporter } from "ack-angular/UiRouteReporter.directive"
import { NgModule } from '@angular/core';

@NgModule({
  imports:[ UIRouterModule.forRoot({states:[]}) ],
  providers: [ UiRouteWatchReporter ],
  declarations:[ UiRouteReporter ]
})
```

# Work on This Project
Everything in this topic is run in an command prompt terminal

Clone project source files
```bash
git clone -b src https://github.com/AckerApple/ack-angular
```

## Building Example

Install example dependencies
```bash
npm run build
```

Dev Project Watching
```bash
npm run watch
```

When changing core code animations, the example prefx must be compiled
```bash
npm run compile:example:prefx
```

### Publish Package

Before publishing, update the package version number in:
- package.json
- ack-angular/package.json

After running the build command:
- git push `/ack-angular` to `master` branch
- npm publish `ack-angular` folder
- git push `/example/www/` to `gh-pages` branch
- git push `/` to `src` branch

## Resources
- [Examples and Docs](https://ackerapple.github.io/ack-angular/)
- [Repository](https://github.com/AckerApple/ack-angular)
- [Angular Cheatsheet](https://angular.io/docs/ts/latest/guide/cheatsheet.html)
