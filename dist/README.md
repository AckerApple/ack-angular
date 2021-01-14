# ack-angular
Extra special directives, components, providers and pipes to aide in tackling everyday interface development needs in Angular. [Demos and Examples here](https://ackerapple.github.io/ack-angular/)

[![hire me](https://ackerapple.github.io/resume/assets/images/hire-me-badge.svg)](https://ackerapple.github.io/resume/)
[![npm version](https://badge.fury.io/js/ack-angular.svg)](http://badge.fury.io/js/ack-angular)
[![npm downloads](https://img.shields.io/npm/dm/ack-angular.svg)](https://npmjs.org/ack-angular)
[![Dependency Status](https://david-dm.org/ackerapple/ack-angular.svg)](https://david-dm.org/ackerapple/ack-angular)

> Source Repository : [src branch here](https://github.com/AckerApple/ack-angular/tree/src)

<details>
  <summary>Table of Contents</summary>

- [Install](#install)
- [Importing into Project](#importing-into-project)
- [Dependency Map](#dependency-map)
- [Components](#components)
- [Work on This Project](#work-on-this-project)
  - [Building Example](#building-example)
- [Resources](#resources)

</details>

# Install

```bash
npm install --save-dev web-animations-js ack-x ack-angular-fx ack-angular
```

## Importing into Project
ack-angular uses file based imports, importing the index does nothing.

### Import Samples

#### Various Import Examples
```javascript
import { pipes, components } from "ack-angular"

//save as above
import { declarations as pipes } from "ack-angular/pipes"
import { declarations as components } from "ack-angular/declarations"
```

#### Dependency Based Import Examples
If you attempt to import any of the following, certain dependencies must have already been installed.

[check dependency map](#dependency-map)

```javascript
//requires @angular/router imports
import { RouteReporter } from "ack-angular/RouteReporter.directive"
import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"
```

## Dependency Map
If you import the following files, make sure you have installed it's dependencies

> You can ignore all of this if you used [ack-webpack to install jsDependencies](#ack-webpack-install-jsdependencies)

- ack-angular/**RouteReporter.directive.ts**
  - Import Example : `import { RouteReporter } from "ack-angular/RouteReporter.directive"`
  - Dependency Install `npm install @angular/router --save-dev`
- ack-angular/**RouteWatchReporter.ts**
  - Import Example : `import { RouteWatchReporter } from "ack-angular/RouteWatchReporter"`
  - Dependency Install `npm install @angular/router --save-dev`

> The [Extended Documentation](https://ackerapple.github.io/ack-angular/) may help bring further understanding as to what is required and when to import dependencies

# Components
Directives and Components making development life more joyful

## Common Components
Include one file and access several

```javascript
import { pipes as ackPipes , components as ackComps } from "ack-angular/declarations";
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
  imports:[ RouterModule.forRoot() ]
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
