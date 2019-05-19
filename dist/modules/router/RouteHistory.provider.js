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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RouteHistory = (function () {
    function RouteHistory(Router) {
        this.Router = Router;
        this.routeHistory = [];
        this.maxHistory = 10;
        this.historyIndex = 0;
        this.subs = [];
        this.monitor();
    }
    RouteHistory.prototype.monitor = function () {
        var _this = this;
        this.subs.push(this.Router.events.subscribe(function (event) {
            if (event.constructor === router_1.NavigationEnd) {
                _this.addRouteToHistory();
            }
        }));
    };
    RouteHistory.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    RouteHistory.prototype.addRouteToHistory = function () {
        var priorPage = this.routeHistory.length - 1;
        var matchesLast = this.Router.url === this.routeHistory[priorPage];
        var matchesCurrent = this.Router.url === this.routeHistory[this.historyIndex];
        if (matchesCurrent || matchesLast) {
            return;
        }
        while (this.routeHistory.length > this.maxHistory) {
            this.routeHistory.pop();
        }
        this.routeHistory.splice(this.historyIndex, 0, this.Router.url);
        console.log('this.routeHistory', this.historyIndex, this.routeHistory);
    };
    RouteHistory.prototype.goBack = function () {
        if (this.historyIndex === this.routeHistory.length - 1)
            return;
        ++this.historyIndex;
        var rh = this.routeHistory[this.historyIndex];
        this.Router.navigate([rh]);
    };
    RouteHistory.prototype.goForward = function () {
        if (this.historyIndex === 0)
            return;
        --this.historyIndex;
        var rh = this.routeHistory[this.historyIndex];
        this.Router.navigate([rh]);
    };
    RouteHistory = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], RouteHistory);
    return RouteHistory;
}());
exports.RouteHistory = RouteHistory;
