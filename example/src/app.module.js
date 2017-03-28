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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var animations_1 = require("@angular/platform-browser/animations");
//import { RouteWatcher } from "ack-angular/RouteWatcher.class"
//import { RouteDocWatcher } from "ack-angular/RouteDocWatcher.component"
var RouteWatchReporter_class_1 = require("ack-angular/RouteWatchReporter.class");
var RouteReporter_component_1 = require("ack-angular/RouteReporter.component");
var pipes = require("ack-angular/pipes");
var ackComponents = require("ack-angular/components");
var packJson = require("ack-angular/package.json");
var ackFx = require("ack-angular-fx");
var prefx_1 = require("./prefx");
var ng2_page_scroll_1 = require("ng2-page-scroll");
var ack_app_stage_pug_1 = require("./templates/ack-app-stage.pug");
var animation_examples_pug_1 = require("./templates/animation-examples.pug");
var overview_examples_pug_1 = require("./templates/overview-examples.pug");
var components_examples_pug_1 = require("./templates/components-examples.pug");
var pipes_examples_pug_1 = require("./templates/pipes-examples.pug");
var services_examples_pug_1 = require("./templates/services-examples.pug");
var route_test_1 = require("./route-test");
var AppComponent = (function () {
    function AppComponent() {
        this.panelAnim = 'slideInLeft';
        this.version = packJson['version'];
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        console.log('Total Wire Time:', Date.now() - exports.strapTime + 'ms');
        if (window['startAckTime']) {
            console.log('Overall Load Time:', Date.now() - window['startAckTime'] + 'ms', '@', getServerTime());
        }
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'ack-app-stage',
        template: ack_app_stage_pug_1.string,
        animations: prefx_1.fxArray
        //,template:'Hello World<router-outlet></router-outlet>'
        //,template:'Hello World<div *ngIf="show" [@500]="\'slideInLeft\'">Inner Content</div>'
    })
], AppComponent);
exports.AppComponent = AppComponent;
var AnimationExamples = (function () {
    function AnimationExamples() {
        this.list = ['abc', 'defg', 'hij', 'klm', 'opq', 'rst', 'uvx', 'yz'];
        this.delayArray = ackFx.delayArray;
    }
    return AnimationExamples;
}());
AnimationExamples = __decorate([
    core_1.Component({
        selector: 'animation-examples',
        template: animation_examples_pug_1.string,
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
        selector: 'overview-examples',
        template: overview_examples_pug_1.string
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
        selector: 'components-examples',
        template: components_examples_pug_1.string,
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
        selector: 'pipes-examples',
        template: pipes_examples_pug_1.string
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
        selector: 'services-examples',
        template: services_examples_pug_1.string
    })
], ServicesExamples);
exports.ServicesExamples = ServicesExamples;
exports.declarations = [
    AppComponent
    //,RouteDocWatcher
    ,
    RouteReporter_component_1.RouteReporter,
    AnimationExamples,
    OverviewExamples,
    ComponentsExamples,
    PipesExamples,
    ServicesExamples
].concat(pipes.declarations, route_test_1.declarations, ackComponents.declarations);
//const fxLoadTime = Date.now()
//ackFx.upgradeComponents(declarations, fxArray)
//console.log('FX Load Time', Date.now()-fxLoadTime+'ms')
//BrowserAnimationsModule()
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            animations_1.BrowserAnimationsModule
            //,NoopAnimationsModule
            ,
            forms_1.FormsModule
            //,UIRouterModule.forRoot(routeConfig)
            ,
            route_test_1.routing,
            ng2_page_scroll_1.Ng2PageScrollModule.forRoot()
        ]
        //,declarations: [ AppComponent ]
        ,
        declarations: exports.declarations,
        providers: [
            RouteWatchReporter_class_1.RouteWatchReporter
            //RouteWatcher
        ],
        bootstrap: [AppComponent]
        //,schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
], AppModule);
exports.AppModule = AppModule;
console.log('Ng Define Time', Date.now() - exports.strapTime + 'ms', '@', getServerTime());
function getServerTime(d) {
    d = d || new Date();
    var h = d.getHours(), t = 'AM', m = d.getMinutes();
    m = m < 10 ? '0' + m : m;
    h = h >= 12 ? (t = 'PM', h - 12 || 12) : h == 0 ? 12 : h;
    return ('0' + h).slice(-2) + ':' + m + ':' + ('0' + d.getSeconds()).slice(-2) + '.' + d.getMilliseconds() + ' ' + t;
}
//# sourceMappingURL=app.module.js.map