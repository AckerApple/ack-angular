//import { StateService,TransitionService,Transition } from "ui-router-ng2";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
var RouteWatchReporter = /** @class */ (function () {
    function RouteWatchReporter(router, activatedRoute) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.current = {};
        this.$history = [];
        //$window  : any
        this.historyPos = 0;
        this.isBackMode = false;
        this.isOsAction = false;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.activatedRoute = activatedRoute;
        router.events.subscribe(function (event) {
            if (event.constructor == NavigationEnd) {
                //const params = {}//COMING REALLY SOON
                var current = _this.getCurrent();
                _this.recordStateChange(current.config, current.params);
            }
        });
        this.current = this.getCurrent();
    }
    RouteWatchReporter.prototype.$window = function () {
        return window;
    };
    RouteWatchReporter.prototype.getCurrent = function () {
        return getCurrentByActive(this.activatedRoute);
    };
    RouteWatchReporter.prototype.getCurrentConfig = function () {
        var target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return (target.routeConfig || target["config"] || target);
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
        if (!toParams || !otherParams) {
            return false;
        }
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
        if (!toState)
            return;
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            //const $state = this.$state()
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
        return {
            isBackButton: isBackButton,
            isNotBackButton: isNotBackButton
        };
    };
    RouteWatchReporter.prototype.watchDocByCallbacks = function ($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        //$document.addEventListener('mouseover', callbacks.mouseover)
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    };
    RouteWatchReporter.prototype.unwatchDocByCallbacks = function ($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    };
    RouteWatchReporter.decorators = [
        { type: Injectable }
    ];
    RouteWatchReporter.ctorParameters = function () { return [
        { type: Router },
        { type: ActivatedRoute }
    ]; };
    return RouteWatchReporter;
}());
export { RouteWatchReporter };
export function getCurrentByActive(ActivatedRoute) {
    var parent = ActivatedRoute;
    var target = ActivatedRoute;
    while (target.firstChild) {
        parent = target;
        target = target.firstChild;
    }
    var snapshot = target.snapshot || {};
    var parentSnap = parent.snapshot || {};
    return {
        ActivatedRoute: target,
        config: (target.routeConfig || target["config"] || target),
        params: snapshot.params,
        parent: {
            ActivatedRoute: parent,
            config: (parent.routeConfig || target["config"] || parent),
            params: parentSnap.params
        }
    };
}
//# sourceMappingURL=RouteWatchReporter.js.map