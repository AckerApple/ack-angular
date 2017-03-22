"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.strapTime = Date.now();
var core_1 = require("@angular/core");
var ui_router_ng2_1 = require("ui-router-ng2");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var pipes = require("pipes");
//import { RouteDocWatcher } from "src/RouteDocWatcher.component"
var RouteDocWatcher_component_1 = require("RouteDocWatcher.component");
//import { RouteDocWatcher } from "./RouteDocWatcher.component"
//import { RouteWatcher } from "src/RouteWatcher.class"
var RouteWatcher_class_1 = require("RouteWatcher.class");
//import { RouteWatcher } from "./RouteWatcher.class"
//import {version} from "package.json"
//import {version} from "package.json"
exports.version = '0.0.4';
//import * as ackFx from './prefx'
var prefx_1 = require("./prefx");
//import { fxArray } from 'ack-angular-fx/prefx'
//console.log('array', JSON.stringify(array))
var states = require("./states.object");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var ackAppStageTemplate = require("./templates/ack-app-stage.pug");
var animationExamples = require("./templates/animation-examples.pug");
var overviewExamples = require("./templates/overview-examples.pug");
var componentsExamples = require("./templates/components-examples.pug");
var pipesExamples = require("./templates/pipes-examples.pug");
var servicesExamples = require("./templates/services-examples.pug");
var AppComponent = (function () {
    function AppComponent() {
        this.version = exports.version;
    }
    //static parameters:any = [[window]]
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log('Total Wire Time:', Date.now() - exports.strapTime + 'ms');
        if (window['startAckTime']) {
            console.log('Total Script Load Time:', Date.now() - window['startAckTime'] + 'ms');
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ack-app-stage'
        //,template: 'hello world'//ackAppStageTemplate()
        //,template: ackAppStageTemplate()
        ,
        template: ackAppStageTemplate.string,
        animations: prefx_1.fxArray
        //,animations:[{"name":"absoluteSwap","definitions":[{"stateNameExpr":"fadeOut","styles":{"styles":[{"display":"none"}],"offset":null}}]}]
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AnimationExamples = (function () {
    function AnimationExamples() {
        this.list = ['abc', 'defg', 'hij', 'klm', 'opq', 'rst', 'uvx', 'yz'];
        //public delayArray = ackFx.delayArray
    }
    return AnimationExamples;
}());
AnimationExamples = __decorate([
    core_1.Component({
        selector: 'animation-examples'
        //,template: 'hello world'//animationExamples()
        ,
        template: animationExamples.string,
        animations: prefx_1.fxArray
    })
], AnimationExamples);
exports.AnimationExamples = AnimationExamples;
var OverviewExamples = (function () {
    function OverviewExamples() {
    }
    return OverviewExamples;
}());
OverviewExamples = __decorate([
    core_1.Component({
        selector: 'overview-examples'
        //,template: 'hello world'//overviewExamples()
        ,
        template: overviewExamples.string
    })
], OverviewExamples);
exports.OverviewExamples = OverviewExamples;
var ComponentsExamples = (function () {
    function ComponentsExamples() {
    }
    return ComponentsExamples;
}());
ComponentsExamples = __decorate([
    core_1.Component({
        selector: 'components-examples'
        //,template: 'hello world'//componentsExamples()
        ,
        template: componentsExamples.string,
        animations: prefx_1.fxArray
    })
], ComponentsExamples);
exports.ComponentsExamples = ComponentsExamples;
var PipesExamples = (function () {
    function PipesExamples() {
    }
    return PipesExamples;
}());
PipesExamples = __decorate([
    core_1.Component({
        selector: 'pipes-examples'
        //,template: 'hello world'//pipesExamples()
        ,
        template: pipesExamples.string
    })
], PipesExamples);
exports.PipesExamples = PipesExamples;
var ServicesExamples = (function () {
    function ServicesExamples() {
    }
    return ServicesExamples;
}());
ServicesExamples = __decorate([
    core_1.Component({
        selector: 'services-examples'
        //,template: 'hello world'//servicesExamples()
        ,
        template: servicesExamples.string
    })
], ServicesExamples);
exports.ServicesExamples = ServicesExamples;
var declarations = [
    AppComponent,
    RouteDocWatcher_component_1.RouteDocWatcher,
    AnimationExamples,
    OverviewExamples,
    ComponentsExamples,
    PipesExamples,
    ServicesExamples
].concat(pipes.declarations, states.declarations);
//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations, fxArray)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')
var routeConfig = {
    states: states.states,
    useHash: true,
    otherwise: '/overview'
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            ui_router_ng2_1.UIRouterModule.forRoot(routeConfig),
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot()
        ],
        declarations: declarations,
        providers: [RouteWatcher_class_1.RouteWatcher],
        bootstrap: [AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
console.log('Ng Define Time', Date.now() - exports.strapTime + 'ms');
//# sourceMappingURL=app.module.js.map