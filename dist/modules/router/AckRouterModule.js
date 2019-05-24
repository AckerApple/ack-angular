"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var RouteReporter_directive_1 = require("./RouteReporter.directive");
exports.providers = [RouteWatchReporter_1.RouteWatchReporter];
var AckRouterModule = (function () {
    function AckRouterModule() {
    }
    AckRouterModule_1 = AckRouterModule;
    AckRouterModule.forRoot = function () {
        return {
            ngModule: AckRouterModule_1,
            providers: exports.providers
        };
    };
    var AckRouterModule_1;
    AckRouterModule = AckRouterModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [RouteReporter_directive_1.RouteReporter],
            exports: [
                RouteReporter_directive_1.RouteReporter,
                router_1.RouterModule
            ]
        })
    ], AckRouterModule);
    return AckRouterModule;
}());
exports.AckRouterModule = AckRouterModule;
