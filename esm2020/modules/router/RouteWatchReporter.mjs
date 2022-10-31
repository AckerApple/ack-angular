//import { StateService,TransitionService,Transition } from "ui-router-ng2";
import { NavigationEnd } from '@angular/router';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
            const hist = {
                name: toState.name,
                title: toState.title,
                data: toState.data,
                params: toParams
            };
            if (!Object.keys(toParams).length) {
                delete hist.params;
            }
            $history.unshift(hist);
        }
        this.isNextBackHistory = false;
    }
    /** deprecated and most likely not working */
    goBackTo(name, params) {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$state().go(name, params);
    }
    tryBack(name, params) {
        if (this.$history.length) {
            this.goHistoryBack();
        }
        else {
            this.goBackTo(name, params);
        }
    }
    goHistoryBack() {
        this.isNextBackMode = true;
        this.isNextBackHistory = true;
        this.$window().history.back();
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
RouteWatchReporter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteWatchReporter, deps: [{ token: i1.Router }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Injectable });
RouteWatchReporter.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteWatchReporter });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteWatchReporter, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i1.ActivatedRoute }]; } });
export function getCurrentByActive(ActivatedRoute) {
    let parent = ActivatedRoute;
    let target = ActivatedRoute;
    while (target.firstChild) {
        parent = target;
        target = target.firstChild;
    }
    return {
        ...breakdownActivated(target),
        parent: breakdownActivated(parent),
    };
}
export function getRouteByActive(ActivatedRoute) {
    let target = ActivatedRoute;
    while (target.firstChild) {
        target = target.firstChild;
    }
    return target;
}
function breakdownActivated(target) {
    const snapshot = target.snapshot || {};
    return {
        ActivatedRoute: target,
        config: (target.routeConfig || target['config']),
        params: snapshot.params,
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVXYXRjaFJlcG9ydGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvcm91dGVyL1JvdXRlV2F0Y2hSZXBvcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw0RUFBNEU7QUFDNUUsT0FBTyxFQUNVLGFBQWEsRUFFN0IsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QixPQUFPLEVBQUUsVUFBVSxFQUFRLE1BQU0sZUFBZSxDQUFDOzs7QUFvQmpEOzs7O0VBSUU7QUFDWSxNQUFNLE9BQU8sa0JBQWtCO0lBWTNDLFlBQ1MsTUFBYyxFQUNkLGNBQTZCO1FBRDdCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQWJ0QyxZQUFPLEdBQVUsRUFBRSxDQUFBO1FBQ25CLGFBQVEsR0FBZSxFQUFFLENBQUE7UUFFekIsZ0JBQWdCO1FBRWhCLGVBQVUsR0FBWSxDQUFDLENBQUE7UUFDdkIsZUFBVSxHQUFhLEtBQUssQ0FBQTtRQUM1QixlQUFVLEdBQWEsS0FBSyxDQUFBO1FBQzVCLG1CQUFjLEdBQWEsS0FBSyxDQUFBO1FBQ2hDLHNCQUFpQixHQUFhLEtBQUssQ0FBQTtRQU1qQyxJQUFJLENBQUMsY0FBYyxHQUFHLGNBQWMsQ0FBQTtRQUVwQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUEsRUFBRTtZQUM3QixJQUFHLEtBQUssQ0FBQyxXQUFXLElBQUUsYUFBYSxFQUFDO2dCQUNsQyx1Q0FBdUM7Z0JBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtnQkFDakMsSUFBSSxDQUFDLGlCQUFpQixDQUNwQixPQUFPLENBQUMsTUFBTSxFQUNkLE9BQU8sQ0FBQyxNQUFNLENBQ2QsQ0FBQTthQUNIO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FB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QUFNLEdBQUcsY0FBYyxDQUFBO0lBQzNCLE9BQU0sTUFBTSxDQUFDLFVBQVUsRUFBQztRQUN0QixNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQTtLQUMzQjtJQUVELE9BQU8sTUFBTSxDQUFBO0FBQ2YsQ0FBQztBQUVELFNBQVMsa0JBQWtCLENBQUMsTUFBc0I7SUFDaEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBNEIsRUFBRSxDQUFBO0lBQzlELE9BQU87UUFDTCxjQUFjLEVBQUUsTUFBTTtRQUN0QixNQUFNLEVBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0RCxNQUFNLEVBQUUsUUFBUSxDQUFDLE1BQU07S0FDeEIsQ0FBQTtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IFN0YXRlU2VydmljZSxUcmFuc2l0aW9uU2VydmljZSxUcmFuc2l0aW9uIH0gZnJvbSBcInVpLXJvdXRlci1uZzJcIjtcbmltcG9ydCB7XG4gIFJvdXRlLCBSb3V0ZXIsIE5hdmlnYXRpb25FbmQsXG4gIEFjdGl2YXRlZFJvdXRlLCBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90LCBEYXRhLCBSZXNvbHZlLCBSZXNvbHZlRm4sIFBhcmFtc1xufSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgVHlwZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlSW5zaWdodCB7XG4gIGNvbmZpZyAgOiBSb3V0ZS8vfEFjdGl2YXRlZFJvdXRlXG4gIEFjdGl2YXRlZFJvdXRlPzogQWN0aXZhdGVkUm91dGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBjdXJyZW50Um91dGUgZXh0ZW5kcyBSb3V0ZUluc2lnaHQge1xuICBBY3RpdmF0ZWRSb3V0ZSA6IEFjdGl2YXRlZFJvdXRlXG4gIHBhcmFtcyAgOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+XG4gIHBhcmVudD8gOiBjdXJyZW50Um91dGUvL3xBY3RpdmF0ZWRSb3V0ZVxufVxuXG5pbnRlcmZhY2UgSGlzdG9yeSB7XG4gIG5hbWU6IHN0cmluZ1xuICB0aXRsZT86IHN0cmluZyB8IFR5cGU8UmVzb2x2ZTxzdHJpbmc+PiB8IFJlc29sdmVGbjxzdHJpbmc+XG4gIHBhcmFtcz86IGFueVxuICBkYXRhPzogRGF0YVxufVxuXG4vKiogQSBzdGF0ZWZ1bCBjb25uZWN0aW9uIHRvIHVpLXJvdXRlciBoaXN0b3J5XG4gLSAuc3RhdGVDaGFuZ2UoKSB3aXRoIGFyZ3VtZW50cyBNVVNUIGJlIGNhbGxlZCBhdCBldmVyeSBzdGF0ZSBjaGFuZ2VcbiAtIEhhcyA5OSUgYWNjdXJhY3kgb2Yga25vd2luZyBpZiBPUyBiYWNrIG9yIGZvcndhcmQgYnV0dG9uIGhhcyBiZWVuIHVzZWRcbiAgIC0gVGhlaXIgaXMgbm8gd2ViIGV2ZW50IGZvciBrbm93aW5nIGlmIE9TIGJ1dHRvbiBpcyB1c2VkLlxuKi9cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFJvdXRlV2F0Y2hSZXBvcnRlcntcbiAgY3VycmVudCAgOiBhbnkgPSB7fVxuICAkaGlzdG9yeSA6IEhpc3RvcnlbXSA9IFtdXG4gICRzdGF0ZSAgIDogYW55XG4gIC8vJHdpbmRvdyAgOiBhbnlcblxuICBoaXN0b3J5UG9zIDogbnVtYmVyID0gMFxuICBpc0JhY2tNb2RlIDogYm9vbGVhbiA9IGZhbHNlXG4gIGlzT3NBY3Rpb24gOiBib29sZWFuID0gZmFsc2VcbiAgaXNOZXh0QmFja01vZGUgOiBib29sZWFuID0gZmFsc2VcbiAgaXNOZXh0QmFja0hpc3RvcnkgOiBib29sZWFuID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHVibGljIGFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlXG4gICl7XG4gICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZSA9IGFjdGl2YXRlZFJvdXRlXG5cbiAgICByb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudD0+e1xuICAgICAgaWYoZXZlbnQuY29uc3RydWN0b3I9PU5hdmlnYXRpb25FbmQpe1xuICAgICAgICAvL2NvbnN0IHBhcmFtcyA9IHt9Ly9DT01JTkcgUkVBTExZIFNPT05cbiAgICAgICAgY29uc3QgY3VycmVudCA9IHRoaXMuZ2V0Q3VycmVudCgpXG4gICAgICAgIHRoaXMucmVjb3JkU3RhdGVDaGFuZ2UoXG4gICAgICAgICAgY3VycmVudC5jb25maWcsXG4gICAgICAgICAgY3VycmVudC5wYXJhbXNcbiAgICAgICAgIClcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgdGhpcy5jdXJyZW50ID0gdGhpcy5nZXRDdXJyZW50KClcbiAgfVxuXG4gICR3aW5kb3coKXtcbiAgICByZXR1cm4gd2luZG93XG4gIH1cblxuICBnZXRDdXJyZW50KCkgOiBjdXJyZW50Um91dGV7XG4gICAgcmV0dXJuIGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5hY3RpdmF0ZWRSb3V0ZSApXG4gIH1cblxuICBnZXRDdXJyZW50Q29uZmlnKCk6Um91dGV7XG4gICAgbGV0IHRhcmdldCA9IHRoaXMuYWN0aXZhdGVkUm91dGVcbiAgICB3aGlsZSh0YXJnZXQuZmlyc3RDaGlsZCl0YXJnZXQ9dGFyZ2V0LmZpcnN0Q2hpbGRcbiAgICByZXR1cm4gPFJvdXRlPih0YXJnZXQucm91dGVDb25maWcgfHwgdGFyZ2V0W1wiY29uZmlnXCJdIHx8IHRhcmdldClcbiAgfVxuXG4gIGdldEN1cnJlbnRQYXJhbXMoKTogUGFyYW1zIHwgdW5kZWZpbmVkIHtcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5hY3RpdmF0ZWRSb3V0ZVxuICAgIHdoaWxlKHRhcmdldC5maXJzdENoaWxkKXRhcmdldD10YXJnZXQuZmlyc3RDaGlsZFxuICAgIHJldHVybiB0YXJnZXQuc25hcHNob3QucGFyYW1zXG4gIH1cblxuICBpc1RyYXBIaXN0b3J5KHRvU3RhdGU6IGFueSwgdG9QYXJhbXM6IGFueSk6IGJvb2xlYW57XG4gICAgcmV0dXJuIHRoaXMuaXNCYWNrSGlzdG9yeSh0b1N0YXRlLCB0b1BhcmFtcykgJiYgdGhpcy5pc0ZvcndhcmRIaXN0b3J5KHRvU3RhdGUsIHRvUGFyYW1zKVxuICB9XG5cbiAgaXNCYWNrSGlzdG9yeSh0b1N0YXRlOiBhbnksIHRvUGFyYW1zOiBhbnkpOiBib29sZWFue1xuICAgIGNvbnN0ICRoaXN0b3J5ID0gdGhpcy4kaGlzdG9yeVxuICAgIGNvbnN0IGlzRXZlbiA9ICRoaXN0b3J5Lmxlbmd0aCA+IHRoaXMuaGlzdG9yeVBvcysxXG4gICAgY29uc3QgaXNOYW1lTWF0Y2ggPSBpc0V2ZW4gJiYgdG9TdGF0ZSAmJiB0b1N0YXRlLm5hbWU9PSRoaXN0b3J5W3RoaXMuaGlzdG9yeVBvcysxXS5uYW1lXG4gICAgcmV0dXJuIGlzTmFtZU1hdGNoICYmIHRoaXMuaXNQYXJhbXNNYXRjaCh0b1BhcmFtcywgJGhpc3RvcnlbdGhpcy5oaXN0b3J5UG9zKzFdLnBhcmFtcylcbiAgfVxuXG4gIGlzRm9yd2FyZEhpc3RvcnkodG9TdGF0ZTogYW55LCB0b1BhcmFtczogYW55KTogYm9vbGVhbntcbiAgICBjb25zdCAkaGlzdG9yeSA9IHRoaXMuJGhpc3RvcnlcbiAgICBjb25zdCBpc0V2ZW4gPSAhdGhpcy5pc05leHRCYWNrTW9kZSAmJiB0aGlzLmhpc3RvcnlQb3MgJiYgJGhpc3RvcnkubGVuZ3RoPnRoaXMuaGlzdG9yeVBvc1xuICAgIGNvbnN0IGlzTmFtZU1hdGNoID0gaXNFdmVuICYmIHRvU3RhdGUgJiYgdG9TdGF0ZS5uYW1lPT0kaGlzdG9yeVt0aGlzLmhpc3RvcnlQb3MtMV0ubmFtZVxuICAgIHJldHVybiBpc05hbWVNYXRjaCAmJiB0aGlzLmlzUGFyYW1zTWF0Y2godG9QYXJhbXMsICRoaXN0b3J5W3RoaXMuaGlzdG9yeVBvcy0xXS5wYXJhbXMpXG4gIH1cblxuICBpc1BhcmFtc01hdGNoKHRvUGFyYW1zOiBhbnksIG90aGVyUGFyYW1zOiBhbnkpOmJvb2xlYW57XG4gICAgaWYoICF0b1BhcmFtcyB8fCAhb3RoZXJQYXJhbXMgKXtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGZvcihsZXQgeCBpbiB0b1BhcmFtcyl7XG4gICAgICBpZih0b1BhcmFtc1t4XSE9b3RoZXJQYXJhbXNbeF0pe1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZVxuICB9XG5cbiAgcmVjb3JkU3RhdGVDaGFuZ2UodG9TdGF0ZTogUm91dGUsIHRvUGFyYW1zOiBhbnkpe1xuICAgIHRoaXMuY3VycmVudCA9IHsgcGFyYW1zOnRvUGFyYW1zLCBjb25maWc6dG9TdGF0ZSB9XG4gICAgbGV0IGlzRm9yd2FyZCA9IHRoaXMuaXNGb3J3YXJkSGlzdG9yeSh0b1N0YXRlLCB0b1BhcmFtcylcbiAgICBsZXQgaXNCYWNrSGlzdG9yeSA9IHRoaXMuaXNOZXh0QmFja0hpc3RvcnkgfHwgdGhpcy5pc0JhY2tIaXN0b3J5KHRvU3RhdGUsIHRvUGFyYW1zKVxuXG4gICAgaWYodGhpcy5pc09zQWN0aW9uICYmIHRoaXMuaXNUcmFwSGlzdG9yeSh0b1N0YXRlLCB0b1BhcmFtcykpe1xuICAgICAgaWYodGhpcy5pc0JhY2tNb2RlKXtcbiAgICAgICAgaXNGb3J3YXJkID0gZmFsc2VcbiAgICAgIH1lbHNle1xuICAgICAgICBpc0JhY2tIaXN0b3J5ID0gZmFsc2VcbiAgICAgIH1cbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMuaXNCYWNrTW9kZSA9IHRoaXMuaXNOZXh0QmFja01vZGUgfHwgKHRoaXMuaXNPc0FjdGlvbiAmJiBpc0JhY2tIaXN0b3J5KVxuICAgIH1cblxuICAgIGNvbnN0ICRoaXN0b3J5ID0gdGhpcy4kaGlzdG9yeVxuXG4gICAgaWYoIXRvU3RhdGUpcmV0dXJuXG5cbiAgICBpZihpc0ZvcndhcmQpe1xuICAgICAgLS10aGlzLmhpc3RvcnlQb3NcbiAgICB9ZWxzZSBpZih0aGlzLmlzQmFja01vZGUpe1xuICAgICAgKyt0aGlzLmhpc3RvcnlQb3NcbiAgICB9ZWxzZXtcbiAgICAgIC8vY29uc3QgJHN0YXRlID0gdGhpcy4kc3RhdGUoKVxuICAgICAgdGhpcy5oaXN0b3J5UG9zID0gMFxuICAgICAgY29uc3QgaGlzdDogSGlzdG9yeSA9IHtcbiAgICAgICAgbmFtZTogKHRvU3RhdGUgYXMgYW55KS5uYW1lLFxuICAgICAgICB0aXRsZTogdG9TdGF0ZS50aXRsZSxcbiAgICAgICAgZGF0YTogdG9TdGF0ZS5kYXRhLFxuICAgICAgICBwYXJhbXM6dG9QYXJhbXNcbiAgICAgIH1cblxuICAgICAgaWYoICFPYmplY3Qua2V5cyh0b1BhcmFtcykubGVuZ3RoICl7XG4gICAgICAgIGRlbGV0ZSBoaXN0LnBhcmFtc1xuICAgICAgfVxuXG4gICAgICAkaGlzdG9yeS51bnNoaWZ0KGhpc3QpXG4gICAgfVxuXG4gICAgdGhpcy5pc05leHRCYWNrSGlzdG9yeSA9IGZhbHNlXG4gIH1cblxuICAvKiogZGVwcmVjYXRlZCBhbmQgbW9zdCBsaWtlbHkgbm90IHdvcmtpbmcgKi9cbiAgZ29CYWNrVG8obmFtZTogYW55LCBwYXJhbXM6IGFueSl7XG4gICAgdGhpcy5pc05leHRCYWNrTW9kZSA9IHRydWVcbiAgICB0aGlzLmlzTmV4dEJhY2tIaXN0b3J5ID0gdHJ1ZVxuICAgIHRoaXMuJHN0YXRlKCkuZ28obmFtZSwgcGFyYW1zKVxuICB9XG5cbiAgdHJ5QmFjayhuYW1lOiBhbnksIHBhcmFtczogYW55KXtcbiAgICBpZih0aGlzLiRoaXN0b3J5Lmxlbmd0aCl7XG4gICAgICB0aGlzLmdvSGlzdG9yeUJhY2soKVxuICAgIH1lbHNle1xuICAgICAgdGhpcy5nb0JhY2tUbyhuYW1lLCBwYXJhbXMpXG4gICAgfVxuICB9XG5cbiAgZ29IaXN0b3J5QmFjaygpIHtcbiAgICB0aGlzLmlzTmV4dEJhY2tNb2RlID0gdHJ1ZVxuICAgIHRoaXMuaXNOZXh0QmFja0hpc3RvcnkgPSB0cnVlXG4gICAgdGhpcy4kd2luZG93KCkuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIHdhdGNoRG9jdW1lbnQoJGRvY3VtZW50OiBhbnkpe1xuICAgIHRoaXMud2F0Y2hEb2NCeUNhbGxiYWNrcygkZG9jdW1lbnQsIHRoaXMuZ2V0RG9jdW1lbnRDYWxsYmFja3MoKSlcbiAgfVxuXG4gIGdldERvY3VtZW50Q2FsbGJhY2tzKCl7XG4gICAgY29uc3QgaXNCYWNrQnV0dG9uID0gKCk9PntcbiAgICAgIHRoaXMuaXNPc0FjdGlvbiA9IHRydWVcbiAgICB9XG5cbiAgICBjb25zdCBpc05vdEJhY2tCdXR0b24gPSAoKT0+e1xuICAgICAgdGhpcy5pc09zQWN0aW9uID0gZmFsc2VcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXNCYWNrQnV0dG9uICAgIDogaXNCYWNrQnV0dG9uLFxuICAgICAgaXNOb3RCYWNrQnV0dG9uIDogaXNOb3RCYWNrQnV0dG9uXG4gICAgfVxuICB9XG5cbiAgd2F0Y2hEb2NCeUNhbGxiYWNrcygkZG9jdW1lbnQ6IGFueSwgY2FsbGJhY2tzOiBhbnkpe1xuICAgICRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxiYWNrcy5pc0JhY2tCdXR0b24pXG4gICAgLy8kZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgY2FsbGJhY2tzLm1vdXNlb3ZlcilcbiAgICAkZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgY2FsbGJhY2tzLmlzTm90QmFja0J1dHRvbilcbiAgfVxuXG4gIHVud2F0Y2hEb2NCeUNhbGxiYWNrcygkZG9jdW1lbnQ6IGFueSwgY2FsbGJhY2tzOiBhbnkpe1xuICAgICRkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIGNhbGxiYWNrcy5pc0JhY2tCdXR0b24pXG4gICAgJGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIGNhbGxiYWNrcy5pc05vdEJhY2tCdXR0b24pXG4gICAgJGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGNhbGxiYWNrcy5pc05vdEJhY2tCdXR0b24pXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEN1cnJlbnRCeUFjdGl2ZSggQWN0aXZhdGVkUm91dGU6QWN0aXZhdGVkUm91dGUgKTogY3VycmVudFJvdXRlIHtcbiAgbGV0IHBhcmVudCA9IEFjdGl2YXRlZFJvdXRlXG4gIGxldCB0YXJnZXQgPSBBY3RpdmF0ZWRSb3V0ZVxuICB3aGlsZSh0YXJnZXQuZmlyc3RDaGlsZCl7XG4gICAgcGFyZW50ID0gdGFyZ2V0XG4gICAgdGFyZ2V0ID0gdGFyZ2V0LmZpcnN0Q2hpbGRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgLi4uYnJlYWtkb3duQWN0aXZhdGVkKHRhcmdldCksXG4gICAgcGFyZW50OiBicmVha2Rvd25BY3RpdmF0ZWQocGFyZW50KSxcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVCeUFjdGl2ZSggQWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlICk6IEFjdGl2YXRlZFJvdXRlIHtcbiAgbGV0IHRhcmdldCA9IEFjdGl2YXRlZFJvdXRlXG4gIHdoaWxlKHRhcmdldC5maXJzdENoaWxkKXtcbiAgICB0YXJnZXQgPSB0YXJnZXQuZmlyc3RDaGlsZFxuICB9XG5cbiAgcmV0dXJuIHRhcmdldFxufVxuXG5mdW5jdGlvbiBicmVha2Rvd25BY3RpdmF0ZWQodGFyZ2V0OiBBY3RpdmF0ZWRSb3V0ZSkge1xuICBjb25zdCBzbmFwc2hvdCA9IHRhcmdldC5zbmFwc2hvdCB8fCA8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD57fVxuICByZXR1cm4ge1xuICAgIEFjdGl2YXRlZFJvdXRlOiB0YXJnZXQsXG4gICAgY29uZmlnOjxSb3V0ZT4odGFyZ2V0LnJvdXRlQ29uZmlnIHx8IHRhcmdldFsnY29uZmlnJ10pLCAvLyAgfHwgdGFyZ2V0XG4gICAgcGFyYW1zOiBzbmFwc2hvdC5wYXJhbXMsXG4gIH1cbn0iXX0=