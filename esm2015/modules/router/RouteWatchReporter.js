//import { StateService,TransitionService,Transition } from "ui-router-ng2";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';
/** A stateful connection to ui-router history
 - .stateChange() with arguments MUST be called at every state change
 - Has 99% accuracy of knowing if OS back or forward button has been used
   - Their is no web event for knowing if OS button is used.
*/
export class RouteWatchReporter {
    constructor(router, activatedRoute) {
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
        router.events.subscribe(event => {
            if (event.constructor == NavigationEnd) {
                //const params = {}//COMING REALLY SOON
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
            //const $state = this.$state()
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
        //$document.addEventListener('mouseover', callbacks.mouseover)
        $document.addEventListener('mousedown', callbacks.isNotBackButton);
    }
    unwatchDocByCallbacks($document, callbacks) {
        $document.removeEventListener('mouseout', callbacks.isBackButton);
        $document.removeEventListener('mouseover', callbacks.isNotBackButton);
        $document.removeEventListener('mousedown', callbacks.isNotBackButton);
    }
}
RouteWatchReporter.decorators = [
    { type: Injectable }
];
RouteWatchReporter.ctorParameters = () => [
    { type: Router },
    { type: ActivatedRoute }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVXYXRjaFJlcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL1JvdXRlV2F0Y2hSZXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFDNUUsT0FBTyxFQUNFLE1BQU0sRUFBRSxhQUFhLEVBQzVCLGNBQWMsRUFDZixNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTM0M7Ozs7RUFJRTtBQUNZLE1BQU0sT0FBTyxrQkFBa0I7SUFZM0MsWUFDUyxNQUFhLEVBQ2IsY0FBNkI7UUFEN0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBYnRDLFlBQU8sR0FBVSxFQUFFLENBQUE7UUFDbkIsYUFBUSxHQUFTLEVBQUUsQ0FBQTtRQUVuQixnQkFBZ0I7UUFFaEIsZUFBVSxHQUFZLENBQUMsQ0FBQTtRQUN2QixlQUFVLEdBQWEsS0FBSyxDQUFBO1FBQzVCLGVBQVUsR0FBYSxLQUFLLENBQUE7UUFDNUIsbUJBQWMsR0FBYSxLQUFLLENBQUE7UUFDaEMsc0JBQWlCLEdBQWEsS0FBSyxDQUFBO1FBTWpDLElBQUksQ0FBQyxjQUFjLEdBQUcsY0FBYyxDQUFBO1FBRXBDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQSxFQUFFO1lBQzdCLElBQUcsS0FBSyxDQUFDLFdBQVcsSUFBRSxhQUFhLEVBQUM7Z0JBQ2xDLHVDQUF1QztnQkFDdkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO2dCQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQ3BCLE9BQU8sQ0FBQyxNQUFNLEVBQ2QsT0FBTyxDQUFDLE1BQU0sQ0FDZCxDQUFBO2FBQ0g7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxD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ckIsTUFBTSxFQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksTUFBTSxDQUFDO1lBQ2hFLE1BQU0sRUFBQyxVQUFVLENBQUMsTUFBTTtTQUN6QjtLQUNGLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgeyBTdGF0ZVNlcnZpY2UsVHJhbnNpdGlvblNlcnZpY2UsVHJhbnNpdGlvbiB9IGZyb20gXCJ1aS1yb3V0ZXItbmcyXCI7XG5pbXBvcnQge1xuICBSb3V0ZSwgUm91dGVyLCBOYXZpZ2F0aW9uRW5kLFxuICBBY3RpdmF0ZWRSb3V0ZSwgQWN0aXZhdGVkUm91dGVTbmFwc2hvdFxufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIGN1cnJlbnRSb3V0ZXtcbiAgQWN0aXZhdGVkUm91dGUgOiBBY3RpdmF0ZWRSb3V0ZVxuICBjb25maWcgIDogUm91dGUvL3xBY3RpdmF0ZWRSb3V0ZVxuICBwYXJhbXMgIDogYW55XG4gIHBhcmVudD8gOiBjdXJyZW50Um91dGUvL3xBY3RpdmF0ZWRSb3V0ZVxufVxuXG4vKiogQSBzdGF0ZWZ1bCBjb25uZWN0aW9uIHRvIHVpLXJvdXRlciBoaXN0b3J5XG4gLSAuc3RhdGVDaGFuZ2UoKSB3aXRoIGFyZ3VtZW50cyBNVVNUIGJlIGNhbGxlZCBhdCBldmVyeSBzdGF0ZSBjaGFuZ2VcbiAtIEhhcyA5OSUgYWNjdXJhY3kgb2Yga25vd2luZyBpZiBPUyBiYWNrIG9yIGZvcndhcmQgYnV0dG9uIGhhcyBiZWVuIHVzZWRcbiAgIC0gVGhlaXIgaXMgbm8gd2ViIGV2ZW50IGZvciBrbm93aW5nIGlmIE9TIGJ1dHRvbiBpcyB1c2VkLlxuKi9cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFJvdXRlV2F0Y2hSZXBvcnRlcntcbiAgY3VycmVudCAgOiBhbnkgPSB7fVxuICAkaGlzdG9yeSA6IGFueSA9IFtdXG4gICRzdGF0ZSAgIDogYW55XG4gIC8vJHdpbmRvdyAgOiBhbnlcblxuICBoaXN0b3J5UG9zIDogbnVtYmVyID0gMFxuICBpc0JhY2tNb2RlIDogYm9vbGVhbiA9IGZhbHNlXG4gIGlzT3NBY3Rpb24gOiBib29sZWFuID0gZmFsc2VcbiAgaXNOZXh0QmFja01vZGUgOiBib29sZWFuID0gZmFsc2VcbiAgaXNOZXh0QmFja0hpc3RvcnkgOiBib29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOlJvdXRlcixcbiAgICBwdWJsaWMgYWN0aXZhdGVkUm91dGU6QWN0aXZhdGVkUm91dGVcbiAgKXtcbiAgICB0aGlzLmFjdGl2YXRlZFJvdXRlID0gYWN0aXZhdGVkUm91dGVcblxuICAgIHJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50PT57XG4gICAgICBpZihldmVudC5jb25zdHJ1Y3Rvcj09TmF2aWdhdGlvbkVuZCl7XG4gICAgICAgIC8vY29uc3QgcGFyYW1zID0ge30vL0NPTUlORyBSRUFMTFkgU09PTlxuICAgICAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50KClcbiAgICAgICAgdGhpcy5yZWNvcmRTdGF0ZUNoYW5nZShcbiAgICAgICAgICBjdXJyZW50LmNvbmZpZyxcbiAgICAgICAgICBjdXJyZW50LnBhcmFtc1xuICAgICAgICAgKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmdldEN1cnJlbnQoKVxuICB9XG5cbiAgJHdpbmRvdygpe1xuICAgIHJldHVybiB3aW5kb3dcbiAgfVxuXG4gIGdldEN1cnJlbnQoKTpjdXJyZW50Um91dGV7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5hY3RpdmF0ZWRSb3V0ZSApXG4gIH1cblxuICBnZXRDdXJyZW50Q29uZmlnKCk6Um91dGV7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICB3aGlsZSh0YXJnZXQuZmlyc3RDaGlsZCl0YXJnZXQ9dGFyZ2V0LmZpcnN0Q2hpbGRcbiAgICByZXR1cm4gPFJvdXRlPih0YXJnZXQucm91dGVDb25maWcgfHwgdGFyZ2V0W1wiY29uZmlnXCJdIHx8IHRhcmdldClcbiAgfVxuXG4gIGdldEN1cnJlbnRQYXJhbXMoKTphbnl7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICB3aGlsZSh0YXJnZXQuZmlyc3RDaGlsZCl0YXJnZXQ9dGFyZ2V0LmZpcnN0Q2hpbGRcbiAgICByZXR1cm4gdGFyZ2V0LnNuYXBzaG90LnBhcmFtc1xuICB9XG5cbiAgaXNUcmFwSGlzdG9yeSh0b1N0YXRlOiBhbnksIHRvUGFyYW1zOiBhbnkpOiBib29sZWFue1xuICAgIHJldHVybiB0aGlzLmlzQmFja0hpc3RvcnkodG9TdGF0ZSwgdG9QYXJhbXMpICYmIHRoaXMuaXNGb3J3YXJkSGlzdG9yeSh0b1N0YXRlLCB0b1BhcmFtcylcbiAgfVxuXG4gIGlzQmFja0hpc3RvcnkodG9TdGF0ZTogYW55LCB0b1BhcmFtczogYW55KTogYm9vbGVhbntcbiAgICBjb25zdCAkaGlzdG9yeSA9IHRoaXMuJGhpc3RvcnlcbiAgICBjb25zdCBpc0V2ZW4gPSAkaGlzdG9yeS5sZW5ndGggPiB0aGlzLmhpc3RvcnlQb3MrMVxuICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gaXNFdmVuICYmIHRvU3RhdGUgJiYgdG9TdGF0ZS5uYW1lPT0kaGlzdG9yeVt0aGlzLmhpc3RvcnlQb3MrMV0ubmFtZVxuICAgIHJldHVybiBpc05hbWVNYXRjaCAmJiB0aGlzLmlzUGFyYW1zTWF0Y2godG9QYXJhbXMsICRoaXN0b3J5W3RoaXMuaGlzdG9yeVBvcysxXS5wYXJhbXMpXG4gIH1cblxuICBpc0ZvcndhcmRIaXN0b3J5KHRvU3RhdGU6IGFueSwgdG9QYXJhbXM6IGFueSk6IGJvb2xlYW57XG4gICAgY29uc3QgJGhpc3RvcnkgPSB0aGlzLiRoaXN0b3J5XG4gICAgY29uc3QgaXNFdmVuID0gIXRoaXMuaXNOZXh0QmFja01vZGUgJiYgdGhpcy5oaXN0b3J5UG9zICYmICRoaXN0b3J5Lmxlbmd0aD50aGlzLmhpc3RvcnlQb3NcbiAgICBjb25zdCBpc05hbWVNYXRjaCA9IGlzRXZlbiAmJiB0b1N0YXRlICYmIHRvU3RhdGUubmFtZT09JGhpc3RvcnlbdGhpcy5oaXN0b3J5UG9zLTFdLm5hbWVcbiAgICByZXR1cm4gaXNOYW1lTWF0Y2ggJiYgdGhpcy5pc1BhcmFtc01hdGNoKHRvUGFyYW1zLCAkaGlzdG9yeVt0aGlzLmhpc3RvcnlQb3MtMV0ucGFyYW1zKVxuICB9XG5cbiAgaXNQYXJhbXNNYXRjaCh0b1BhcmFtczogYW55LCBvdGhlclBhcmFtczogYW55KTpib29sZWFue1xuICAgIGlmKCAhdG9QYXJhbXMgfHwgIW90aGVyUGFyYW1zICl7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBmb3IobGV0IHggaW4gdG9QYXJhbXMpe1xuICAgICAgaWYodG9QYXJhbXNbeF0hPW90aGVyUGFyYW1zW3hdKXtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWVcbiAgfVxuXG4gIHJlY29yZFN0YXRlQ2hhbmdlKHRvU3RhdGU6IGFueSwgdG9QYXJhbXM6IGFueSl7XG4gICAgdGhpcy5jdXJyZW50ID0geyBwYXJhbXM6dG9QYXJhbXMsIGNvbmZpZzp0b1N0YXRlIH1cbiAgICBsZXQgaXNGb3J3YXJkID0gdGhpcy5pc0ZvcndhcmRIaXN0b3J5KHRvU3RhdGUsIHRvUGFyYW1zKVxuICAgIGxldCBpc0JhY2tIaXN0b3J5ID0gdGhpcy5pc05leHRCYWNrSGlzdG9yeSB8fCB0aGlzLmlzQmFja0hpc3RvcnkodG9TdGF0ZSwgdG9QYXJhbXMpXG5cbiAgICBpZih0aGlzLmlzT3NBY3Rpb24gJiYgdGhpcy5pc1RyYXBIaXN0b3J5KHRvU3RhdGUsIHRvUGFyYW1zKSl7XG4gICAgICBpZih0aGlzLmlzQmFja01vZGUpe1xuICAgICAgICBpc0ZvcndhcmQgPSBmYWxzZVxuICAgICAgfWVsc2V7XG4gICAgICAgIGlzQmFja0hpc3RvcnkgPSBmYWxzZVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5pc0JhY2tNb2RlID0gdGhpcy5pc05leHRCYWNrTW9kZSB8fCAodGhpcy5pc09zQWN0aW9uICYmIGlzQmFja0hpc3RvcnkpXG4gICAgfVxuXG4gICAgY29uc3QgJGhpc3RvcnkgPSB0aGlzLiRoaXN0b3J5XG5cbiAgICBpZighdG9TdGF0ZSlyZXR1cm5cblxuICAgIGlmKGlzRm9yd2FyZCl7XG4gICAgICAtLXRoaXMuaGlzdG9yeVBvc1xuICAgIH1lbHNlIGlmKHRoaXMuaXNCYWNrTW9kZSl7XG4gICAgICArK3RoaXMuaGlzdG9yeVBvc1xuICAgIH1lbHNle1xuICAgICAgLy9jb25zdCAkc3RhdGUgPSB0aGlzLiRzdGF0ZSgpXG4gICAgICB0aGlzLmhpc3RvcnlQb3MgPSAwXG4gICAgICBjb25zdCBoaXN0ID0ge25hbWU6dG9TdGF0ZS5uYW1lLCBwYXJhbXM6dG9QYXJhbXN9XG5cbiAgICAgIGlmKCAhT2JqZWN0LmtleXModG9QYXJhbXMpLmxlbmd0aCApe1xuICAgICAgICBkZWxldGUgaGlzdC5wYXJhbXNcbiAgICAgIH1cblxuICAgICAgJGhpc3RvcnkudW5zaGlmdChoaXN0KVxuICAgIH1cblxuICAgIHRoaXMuaXNOZXh0QmFja0hpc3RvcnkgPSBmYWxzZVxuICB9XG5cbiAgZ29CYWNrVG8obmFtZTogYW55LCBwYXJhbXM6IGFueSl7XG4gICAgdGhpcy5pc05leHRCYWNrTW9kZSA9IHRydWVcbiAgICB0aGlzLmlzTmV4dEJhY2tIaXN0b3J5ID0gdHJ1ZVxuICAgIHRoaXMuJHN0YXRlKCkuZ28obmFtZSwgcGFyYW1zKVxuICB9XG5cbiAgdHJ5QmFjayhuYW1lOiBhbnksIHBhcmFtczogYW55KXtcbiAgICBpZih0aGlzLiRoaXN0b3J5Lmxlbmd0aCl7XG4gICAgICB0aGlzLmlzTmV4dEJhY2tNb2RlID0gdHJ1ZVxuICAgICAgdGhpcy5pc05leHRCYWNrSGlzdG9yeSA9IHRydWVcbiAgICAgIHRoaXMuJHdpbmRvdygpLmhpc3RvcnkuYmFjaygpXG4gICAgfWVsc2V7XG4gICAgICB0aGlzLmdvQmFja1RvKG5hbWUsIHBhcmFtcylcbiAgICB9XG4gIH1cblxuICB3YXRjaERvY3VtZW50KCRkb2N1bWVudDogYW55KXtcbiAgICB0aGlzLndhdGNoRG9jQnlDYWxsYmFja3MoJGRvY3VtZW50LCB0aGlzLmdldERvY3VtZW50Q2FsbGJhY2tzKCkpXG4gIH1cblxuICBnZXREb2N1bWVudENhbGxiYWNrcygpe1xuICAgIGNvbnN0IGlzQmFja0J1dHRvbiA9ICgpPT57XG4gICAgICB0aGlzLmlzT3NBY3Rpb24gPSB0cnVlXG4gICAgfVxuXG4gICAgY29uc3QgaXNOb3RCYWNrQnV0dG9uID0gKCk9PntcbiAgICAgIHRoaXMuaXNPc0FjdGlvbiA9IGZhbHNlXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGlzQmFja0J1dHRvbiAgICA6IGlzQmFja0J1dHRvbixcbiAgICAgIGlzTm90QmFja0J1dHRvbiA6IGlzTm90QmFja0J1dHRvblxuICAgIH1cbiAgfVxuXG4gIHdhdGNoRG9jQnlDYWxsYmFja3MoJGRvY3VtZW50OiBhbnksIGNhbGxiYWNrczogYW55KXtcbiAgICAkZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjYWxsYmFja3MuaXNCYWNrQnV0dG9uKVxuICAgIC8vJGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxiYWNrcy5tb3VzZW92ZXIpXG4gICAgJGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbGxiYWNrcy5pc05vdEJhY2tCdXR0b24pXG4gIH1cblxuICB1bndhdGNoRG9jQnlDYWxsYmFja3MoJGRvY3VtZW50OiBhbnksIGNhbGxiYWNrczogYW55KXtcbiAgICAkZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCBjYWxsYmFja3MuaXNCYWNrQnV0dG9uKVxuICAgICRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBjYWxsYmFja3MuaXNOb3RCYWNrQnV0dG9uKVxuICAgICRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBjYWxsYmFja3MuaXNOb3RCYWNrQnV0dG9uKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50QnlBY3RpdmUoIEFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlICl7XG4gIGxldCBwYXJlbnQgPSBBY3RpdmF0ZWRSb3V0ZVxuICBsZXQgdGFyZ2V0ID0gQWN0aXZhdGVkUm91dGVcbiAgd2hpbGUodGFyZ2V0LmZpcnN0Q2hpbGQpe1xuICAgIHBhcmVudCA9IHRhcmdldFxuICAgIHRhcmdldCA9IHRhcmdldC5maXJzdENoaWxkXG4gIH1cblxuICBjb25zdCBzbmFwc2hvdCA9IHRhcmdldC5zbmFwc2hvdCB8fCA8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD57fVxuICBjb25zdCBwYXJlbnRTbmFwID0gcGFyZW50LnNuYXBzaG90IHx8IDxBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90Pnt9XG5cbiAgcmV0dXJuIHtcbiAgICBBY3RpdmF0ZWRSb3V0ZTp0YXJnZXQsXG4gICAgY29uZmlnOjxSb3V0ZT4odGFyZ2V0LnJvdXRlQ29uZmlnIHx8IHRhcmdldFtcImNvbmZpZ1wiXSB8fCB0YXJnZXQpLFxuICAgIHBhcmFtczpzbmFwc2hvdC5wYXJhbXMsXG4gICAgcGFyZW50OntcbiAgICAgIEFjdGl2YXRlZFJvdXRlOnBhcmVudCxcbiAgICAgIGNvbmZpZzo8Um91dGU+KHBhcmVudC5yb3V0ZUNvbmZpZyB8fCB0YXJnZXRbXCJjb25maWdcIl0gfHwgcGFyZW50KSxcbiAgICAgIHBhcmFtczpwYXJlbnRTbmFwLnBhcmFtc1xuICAgIH1cbiAgfVxufSJdfQ==