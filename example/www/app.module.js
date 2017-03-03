"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
/*
import * as packJson from "./tsconfig.json"
console.log('packJson',packJson)
*/
var platform_browser_1 = require("@angular/platform-browser");
var states_object_1 = require("./states.object");
//import { StateManagerService } from "./dist/services/StateManagerService.class"
//import { StateDocWatcher } from "./dist/components/StateDocWatcher.class"
//console.log('StateDocWatcher',StateDocWatcher)
//import * as pack from "../package.json"
//console.log('pack', pack)
//import * as rjonAppStageTemplate from './templates/rjon-app-stage.pug'
//import * as someOtherTemplate from './templates/some-other-template.pug'
//import { animateDefaults, animateConfig } from 'ng2-animate';
//animateDefaults.igniter = 'void';
var AppComponent = (function () {
    function AppComponent() {
        this.date = Date.now();
        this.list = ['abc', 'defg', 'hij', 'klm', 'opq', 'rst', 'uvx', 'yz'];
        //    this.stateManagerService = new StateManagerService(stateService, window)
        //    this.stateManagerService.test0 = 22
        //    transitionService.onSuccess({to:'*'}, transition=>{
        //      this.stateManagerService.recordStateChange(transition._targetState._definition, transition._targetState._params)
        //
        //      console.log('this.stateManagerService',this.stateManagerService)
        //    })
    }
    AppComponent.prototype.checkState = function () {
        //    console.log('this.stateService', this.stateService)
        //console.log('this.stateRegistry', )
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'rjon-app-stage'
        //  ,template: rjonAppStageTemplate()
        ,
        animations: []
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
var declarations = [
    AppComponent
    //  ,StateDocWatcher
];
declarations.push.apply(declarations, states_object_1.default.declarations);
var ngModule = {
    imports: [
        platform_browser_1.BrowserModule,
        ui_router_ng2_1.UIRouterModule.forRoot({
            states: states_object_1.default.states,
            useHash: true
            //,otherwise: {name:'building', state: '/building', params: {}}
            ,
            otherwise: '/building'
        })
    ],
    declarations: declarations,
    providers: [],
    bootstrap: [AppComponent]
};
//ng2fx.addModule(ngModule)
//console.log('ngModule',ngModule)
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule(ngModule)
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map