"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RouteDocWatcher_component_1 = require("./RouteDocWatcher.component");
var RouteWatcher_class_1 = require("./RouteWatcher.class");
var RouteDocWatcherClass = RouteDocWatcherClass_1 = (function () {
    function RouteDocWatcherClass() {
    }
    RouteDocWatcherClass.forRoot = function () {
        return { ngModule: RouteDocWatcherClass_1, providers: [] };
    };
    return RouteDocWatcherClass;
}());
RouteDocWatcherClass = RouteDocWatcherClass_1 = __decorate([
    core_1.NgModule({
        declarations: [RouteDocWatcher_component_1.RouteDocWatcher],
        exports: [RouteWatcher_class_1.RouteWatcher, RouteDocWatcher_component_1.RouteDocWatcher]
    })
], RouteDocWatcherClass);
exports.RouteDocWatcherClass = RouteDocWatcherClass;
var RouteDocWatcherClass_1;
//# sourceMappingURL=RouteDocWatcher.module.js.map