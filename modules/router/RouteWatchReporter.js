import { __decorate, __metadata } from "tslib";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
let RouteWatchReporter = class RouteWatchReporter {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.current = {};
        this.$history = [];
        this.historyPos = 0;
        this.isBackMode = false;
        this.isOsAction = false;
        this.isNextBackMode = false;
        this.isNextBackHistory = false;
        this.activatedRoute = activatedRoute;
        router.events.subscribe(event => {
            if (event.constructor == NavigationEnd) {
                const current = this.getCurrent();
                this.recordStateChange(current.config, current.params);
            }
        });
        this.current = this.getCurrent();
    }
    $window() {
        return window;
    }
    getCurrent() {
        return getCurrentByActive(this.activatedRoute);
    }
    getCurrentConfig() {
        let target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return (target.routeConfig || target["config"] || target);
    }
    getCurrentParams() {
        let target = this.activatedRoute;
        while (target.firstChild)
            target = target.firstChild;
        return target.snapshot.params;
    }
    isTrapHistory(toState, toParams) {
        return this.isBackHistory(toState, toParams) && this.isForwardHistory(toState, toParams);
    }
    isBackHistory(toState, toParams) {
        const $history = this.$history;
        const isEven = $history.length > this.historyPos + 1;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos + 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos + 1].params);
    }
    isForwardHistory(toState, toParams) {
        const $history = this.$history;
        const isEven = !this.isNextBackMode && this.historyPos && $history.length > this.historyPos;
        const isNameMatch = isEven && toState && toState.name == $history[this.historyPos - 1].name;
        return isNameMatch && this.isParamsMatch(toParams, $history[this.historyPos - 1].params);
    }
    isParamsMatch(toParams, otherParams) {
        if (!toParams || !otherParams) {
            return false;
        }
        for (let x in toParams) {
            if (toParams[x] != otherParams[x]) {
                return false;
            }
        }
        return true;
    }
    recordStateChange(toState, toParams) {
        this.current = { params: toParams, config: toState };
        let isForward = this.isForwardHistory(toState, toParams);
        let isBackHistory = this.isNextBackHistory || this.isBackHistory(toState, toParams);
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
        const $history = this.$history;
        if (!toState)
            return;
        if (isForward) {
            --this.historyPos;
        }
        else if (this.isBackMode) {
            ++this.historyPos;
        }
        else {
            this.historyPos = 0;
            const hist = { name: toState.name, params: toParams };
            if (!Object.keys(toParams).length) {
                delete hist.params;
            }
            $history.unshift(hist);
        }
        this.isNextBackHistory = false;
    }
    goBackTo(name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    }
    tryBack(name, params) {
        if (this.$history.length) {
            this.isNextBackMode = true;
            this.isNextBackHistory = true;
            this.$window().history.back();
        }
        else {
            this.goBackTo(name, params);
        }
    }
    watchDocument($document) {
        this.watchDocByCallbacks($document, this.getDocumentCallbacks());
    }
    getDocumentCallbacks() {
        const isBackButton = () => {
            this.isOsAction = true;
        };
        const isNotBackButton = () => {
            this.isOsAction = false;
        };
        return {
            isBackButton: isBackButton,
            isNotBackButton: isNotBackButton
        };
    }
    watchDocByCallbacks($document, callbacks) {
        $document.addEventListener('mouseout', callbacks.isBackButton);
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    }
    unwatchDocByCallbacks($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    }
};
RouteWatchReporter = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute])
], RouteWatchReporter);
export { RouteWatchReporter };
export function getCurrentByActive(ActivatedRoute) {
    let parent = ActivatedRoute;
    let target = ActivatedRoute;
    while (target.firstChild) {
        parent = target;
        target = target.firstChild;
    }
    const snapshot = target.snapshot || {};
    const parentSnap = parent.snapshot || {};
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
