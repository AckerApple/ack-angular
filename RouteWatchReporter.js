"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var RouteWatchReporter = (function () {
    function RouteWatchReporter(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.current = {};
        this.historyPos = 0;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.isBackMode = false;
        this.isOsAction = false;
        this.activatedRoute = activatedRoute;
        this.$window = function () { return window; };
        this.$history = [];
        router.events.subscribe(function (event) {
            if (event.constructor == router_1.NavigationEnd) {
                var params = {};
                var current = _this.getCurrent();
                _this.recordStateChange(current.config, current.params);
            }
        });
        this.current = this.getCurrent();
    }
    RouteWatchReporter.prototype.getCurrent = function () {
        var target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return {
            config: target.routeConfig,
            params: target.snapshot.params
        };
    };
    RouteWatchReporter.prototype.getCurrentConfig = function () {
        var target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.routeConfig;
    };
    RouteWatchReporter.prototype.getCurrentParams = function () {
        var target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.snapshot.params;
    };
    RouteWatchReporter.prototype.isTrapHistory = function (toState, toParams) {
        return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
    };
    RouteWatchReporter.prototype.isBackHistory = function (toState, toParams) {
        var $history = this.$history;
        var isEven = $history.length > this.historyPos + 1;
        var isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
    };
    RouteWatchReporter.prototype.isForwardHistory = function (toState, toParams) {
        var $history = this.$history;
        var isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
        var isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
    };
    RouteWatchReporter.prototype.isParamsMatch = function (toParams, otherParams) {
        for (var x in toParams) {
            if (toParams[x] != otherParams[x]) {
                return false;
            }
        }
        return true;
    };
    RouteWatchReporter.prototype.recordStateChange = function (toState, toParams) {
        this.current = { params: toParams, config: toState };
        var isForward = this.isForwardHistory(toState, toParams);
        var isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
        if (this.isOsAction && this.isTrapHistory(toState, toParams)) {
            if (this.isBackMode) {
                isForward = false;
            }
            else {
                isBackHistory = false;
            }
        }
        else {
            this.isBackMode = this.isNextBackMode || (this.isOsAction && isBackHistory);
        }
        var $history = this.$history;
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            this.historyPos = 0;
            var hist = { name: toState.name, params: toParams };
            if (!Object.keys(toParams).length) {
                delete hist.params;
            }
            $history.unshift(hist);
        }
        this.isNextBackHistory = false;
    };
    RouteWatchReporter.prototype.goBackTo = function (name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    };
    RouteWatchReporter.prototype.tryBack = function (name, params) {
        if (this.$history.length) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$window().history.back();
        }
        else {
            this.goBackTo(name, params);
        }
    };
    RouteWatchReporter.prototype.watchDocument = function ($document) {
        this.watchDocByCallbacks($document, this.getDocumentCallbacks());
    };
    RouteWatchReporter.prototype.getDocumentCallbacks = function () {
        var _this = this;
        var isBackButton = function () {
            _this.isOsAction = true;
        };
        var isNotBackButton = function () {
            _this.isOsAction = false;
        };
        return { isBackButton: isBackButton, isNotBackButton: isNotBackButton };
    };
    RouteWatchReporter.prototype.watchDocByCallbacks = function ($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    };
    RouteWatchReporter.prototype.unwatchDocByCallbacks = function ($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    };
    RouteWatchReporter.decorators = [
        { type: core_1.Injectable },
    ];
    RouteWatchReporter.ctorParameters = function () { return [
        { type: router_1.Router, },
        { type: router_1.ActivatedRoute, },
    ]; };
    return RouteWatchReporter;
}());
exports.RouteWatchReporter = RouteWatchReporter;
