import { Injectable } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
var RouteHistory = /** @class */ (function () {
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
            if (event.constructor === NavigationEnd) {
                _this.addRouteToHistory();
            }
        }));
    };
    RouteHistory.prototype.ngOnDestroy = function () {
        this.subs.forEach(function (sub) { return sub.unsubscribe(); });
    };
    RouteHistory.prototype.addRouteToHistory = function () {
        var priorPage = this.historyIndex + 1;
        var nextPage = this.historyIndex - 1;
        var matchesBack = this.routeHistory.length >= priorPage && this.Router.url === this.routeHistory[priorPage];
        var matchesNext = this.routeHistory.length >= nextPage && this.Router.url === this.routeHistory[nextPage];
        var matchesCurrent = this.Router.url === this.routeHistory[this.historyIndex];
        if (matchesNext) {
            --this.historyIndex;
        }
        if (matchesBack) {
            ++this.historyIndex;
        }
        if (matchesNext || matchesCurrent || matchesBack) {
            this.applyNav();
            return;
        }
        //remove old entries
        while (this.routeHistory.length > this.maxHistory) {
            //this.routeHistory.shift()
            this.routeHistory.pop();
        }
        //this.routeHistory.push(this.Router.url)
        this.routeHistory.splice(this.historyIndex, 0, this.Router.url);
        this.applyNav();
    };
    RouteHistory.prototype.applyNav = function () {
        var posAvail = this.historyIndex < this.routeHistory.length - 1;
        if (posAvail) {
            this.back = this.routeHistory[this.historyIndex + 1];
        }
        else if (this.routeHistory.length) {
            var newBack = this.routeHistory[this.routeHistory.length - 1].split("/");
            newBack.pop();
            this.back = newBack.join("/");
            ++this.historyIndex;
        }
        else {
            delete this.back;
        }
        if (this.historyIndex > 0) {
            this.forward = this.routeHistory[this.historyIndex - 1];
        }
        else {
            delete this.forward;
        }
    };
    RouteHistory.prototype.goBack = function () {
        if (this.historyIndex === this.routeHistory.length - 1)
            return;
        //++this.historyIndex
        var rh = this.routeHistory[this.historyIndex + 1];
        this.Router.navigate([rh]);
    };
    RouteHistory.prototype.goForward = function () {
        if (this.historyIndex === 0)
            return;
        //--this.historyIndex
        var rh = this.routeHistory[this.historyIndex - 1];
        this.Router.navigate([rh]);
    };
    RouteHistory.decorators = [
        { type: Injectable }
    ];
    RouteHistory.ctorParameters = function () { return [
        { type: Router }
    ]; };
    return RouteHistory;
}());
export { RouteHistory };
//# sourceMappingURL=RouteHistory.provider.js.map