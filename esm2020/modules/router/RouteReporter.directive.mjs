import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { getCurrentByActive, getRouteByActive } from "./RouteWatchReporter";
import { 
//NavigationStart,
NavigationEnd } from "@angular/router";
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
import * as i2 from "./RouteWatchReporter";
export class RouteReporter {
    constructor(Router, RouteWatchReporter, ActivatedRoute) {
        this.Router = Router;
        this.RouteWatchReporter = RouteWatchReporter;
        this.ActivatedRoute = ActivatedRoute;
        this.stateChanger = new EventEmitter();
        this.beforeChanger = new EventEmitter();
        this.activatedChange = new EventEmitter();
        this.paramsChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.queryChange = new EventEmitter();
        this.routeChange = new EventEmitter();
        this.parentRouteChange = new EventEmitter();
        this.parentChange = new EventEmitter();
        this.parentDataChange = new EventEmitter();
        this.stateChange = new EventEmitter();
        this.crumbArray = [];
        this.$document = document;
        this.apply();
    }
    ngOnInit() {
        this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks();
        this.RouteWatchReporter.router.events.subscribe(event => {
            //if(event.constructor == NavigationStart){}
            if (event.constructor === NavigationEnd) {
                this.beforeChanger.emit(this.RouteWatchReporter);
                //allow one process to occur before reporting state has changed
                this.apply();
                //this.addRouteToHistory()
                Promise.resolve().then(() => this.emit());
            }
        });
        if (this.ActivatedRoute) {
            this.ActivatedRoute.data.subscribe(data => this.dataChange.emit(this.data = data));
        }
        this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        this.apply();
        Promise.resolve().then(() => {
            this.emit();
            this.querySub = this.RouteWatchReporter
                .activatedRoute.queryParams
                .subscribe(query => this.queryChange.emit(query));
        });
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatchReporter.current,
                params: this.RouteWatchReporter.current.params,
                current: this.RouteWatchReporter.current
            });
        }
    }
    ngOnDestroy() {
        this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
        if (this.querySub) {
            this.querySub.unsubscribe();
        }
    }
    /*
      addRouteToHistory():void{
        if(!this.routeHistory){
          this.routeHistory=[]
        }
    
        const priorPage = this.routeHistory.length - 1
        if(this.Router.url === this.routeHistory[ priorPage ]){
          return
        }
    
        //remove old entries
        while(this.routeHistory.length > this.maxHistory){
          this.routeHistory.shift()
        }
    
        //oldest to recent BUT emailed as recent to oldest
        this.routeHistory.push(this.Router.url)
      }
    */
    apply() {
        const current = getCurrentByActive(this.ActivatedRoute);
        this.route = current.config;
        this.current = current;
        this.state = current;
        this.activated = current.ActivatedRoute;
        this.params = current.params || {};
        this.data = current.config?.data || {};
        this.attemptSetParentByCurrent(current);
        this.updateCrumbArray();
    }
    updateCrumbArray() {
        const activeRoute = getRouteByActive(this.ActivatedRoute);
        // reset the array
        this.crumbArray = [];
        // add current if it is not the root
        if (activeRoute.routeConfig) {
            this.crumbArray.push({
                config: activeRoute.routeConfig,
                ActivatedRoute: activeRoute,
            });
        }
        this.populateCrumbArray(this.crumbArray, activeRoute);
    }
    populateCrumbArray(array, current) {
        const parent = current.parent;
        if (parent?.routeConfig) {
            array.unshift({
                config: parent.routeConfig,
                ActivatedRoute: parent,
            });
            if (parent.parent?.routeConfig) {
                return this.populateCrumbArray(array, parent.parent);
            }
        }
        if (current.routeConfig) {
            this.populateCrumbArrayLikes(array, current.routeConfig);
        }
    }
    populateCrumbArrayLikes(array, current) {
        const parent = this.getLikeParent(current);
        if (parent) {
            array.unshift({
                config: parent
            });
            if (parent.path?.length) {
                this.populateCrumbArrayLikes(array, parent);
            }
        }
    }
    attemptSetParentByCurrent(current) {
        const parent = this.getCrumbParentFor(current);
        if (parent) {
            this.parentRoute = parent.config;
            this.parent = parent.ActivatedRoute;
            this.parentData = parent.config.data;
            return;
        }
        delete this.parentRoute;
        delete this.parent;
        delete this.parentData;
    }
    emit() {
        this.stateChanger.emit(this.RouteWatchReporter);
        const current = this.RouteWatchReporter.getCurrent();
        this.stateChange.emit(current);
        this.activatedChange.emit(current.ActivatedRoute);
        this.paramsChange.emit(current.params);
        if (current.config) {
            this.routeChange.emit(current.config);
            this.dataChange.emit(current.config.data);
        }
        const parent = current.parent;
        if (parent) {
            const config = parent.config;
            const ar = parent.ActivatedRoute;
            this.parentChange.emit(ar);
            if (config) {
                this.parentRouteChange.emit(config);
                this.parentDataChange.emit(config.data);
            }
        }
    }
    goBackOrUp() {
        if (this.RouteWatchReporter.$history.length) {
            this.RouteWatchReporter.goHistoryBack();
            return;
        }
        this.goUp();
    }
    goUp() {
        const target = this.crumbArray[this.crumbArray.length - 1];
        const route = target.config;
        if (!route) {
            return;
        }
        this.Router.navigateByUrl(route.path);
    }
    goBackTo(name, params) {
        this.RouteWatchReporter.goBackTo(name, params);
    }
    tryBack(name, params) {
        this.RouteWatchReporter.tryBack(name, params);
    }
    getCrumbParentFor(current) {
        const parent = current.parent;
        if (parent && parent.ActivatedRoute.routeConfig) {
            return {
                ActivatedRoute: parent.ActivatedRoute,
                config: parent.config
            };
        }
        if (!current.config) {
            return;
        }
        const likeParent = this.getLikeParent(current.config);
        if (likeParent) {
            return {
                config: likeParent
            };
        }
    }
    getLikeParent(route) {
        // try to find a related path at base
        const currentPathing = route.path?.split('/') || [];
        let likeParent;
        currentPathing.pop(); // remove the current
        while (currentPathing.length) {
            const targetPath = currentPathing.join('/');
            // try to find parent by path matching
            likeParent = this.Router.config.find(route => route.path === targetPath);
            if (likeParent) {
                return likeParent;
            }
            currentPathing.pop();
        }
        // look for a redirect parent but ensure it does not redirect to current route
        const redirectRoot = this.Router.config.find(x => x.path === '' && x.redirectTo && x.redirectTo !== route.path);
        if (redirectRoot) {
            return this.Router.config.find(route => route.path === redirectRoot.redirectTo);
        }
    }
}
RouteReporter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteReporter, deps: [{ token: i1.Router }, { token: i2.RouteWatchReporter }, { token: i1.ActivatedRoute }], target: i0.ɵɵFactoryTarget.Directive });
RouteReporter.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: RouteReporter, selector: "route-reporter", inputs: { onLoad: "onLoad", activated: "activated", params: "params", data: "data", query: "query", route: "route", parentRoute: "parentRoute", parent: "parent", parentData: "parentData", current: "current", state: "state" }, outputs: { stateChanger: "onChange", beforeChanger: "beforeChange", activatedChange: "activatedChange", paramsChange: "paramsChange", dataChange: "dataChange", queryChange: "queryChange", routeChange: "routeChange", parentRouteChange: "parentRouteChange", parentChange: "parentChange", parentDataChange: "parentDataChange", stateChange: "stateChange" }, exportAs: ["RouteReporter"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: RouteReporter, decorators: [{
            type: Directive,
            args: [{
                    selector: "route-reporter",
                    exportAs: "RouteReporter"
                }]
        }], ctorParameters: function () { return [{ type: i1.Router }, { type: i2.RouteWatchReporter }, { type: i1.ActivatedRoute }]; }, propDecorators: { onLoad: [{
                type: Input
            }], stateChanger: [{
                type: Output,
                args: ["onChange"]
            }], beforeChanger: [{
                type: Output,
                args: ["beforeChange"]
            }], activated: [{
                type: Input
            }], activatedChange: [{
                type: Output
            }], params: [{
                type: Input
            }], paramsChange: [{
                type: Output
            }], data: [{
                type: Input
            }], dataChange: [{
                type: Output
            }], query: [{
                type: Input
            }], queryChange: [{
                type: Output
            }], route: [{
                type: Input
            }], routeChange: [{
                type: Output
            }], parentRoute: [{
                type: Input
            }], parentRouteChange: [{
                type: Output
            }], parent: [{
                type: Input
            }], parentChange: [{
                type: Output
            }], parentData: [{
                type: Input
            }], parentDataChange: [{
                type: Output
            }], current: [{
                type: Input
            }], state: [{
                type: Input
            }], stateChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVSZXBvcnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yb3V0ZXIvUm91dGVSZXBvcnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUl0RSxPQUFPLEVBQzZCLGtCQUFrQixFQUFnQixnQkFBZ0IsRUFDckYsTUFBTSxzQkFBc0IsQ0FBQTtBQUM3QixPQUFPO0FBQ0wsa0JBQWtCO0FBQ2xCLGFBQWEsRUFDZCxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3RCLE1BQU0sT0FBTyxhQUFhO0lBNEMzQixZQUNTLE1BQWEsRUFDYixrQkFBcUMsRUFDckMsY0FBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUEzQ2xCLGlCQUFZLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDL0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2hELG9CQUFlLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUE7UUFHakUsaUJBQVksR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUduRCxlQUFVLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHakQsZ0JBQVcsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdsRCxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBSWxELHNCQUFpQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzFELGlCQUFZLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUE7UUFHOUQscUJBQWdCLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPekQsZ0JBQVcsR0FBOEIsSUFBSSxZ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QkFFRSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksWUFBWTtzQkFBckIsTUFBTTtnQkFFRSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0ksVUFBVTtzQkFBbkIsTUFBTTtnQkFFRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTTtnQkFFRSxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTTtnQkFHSSxXQUFXO3NCQUFuQixLQUFLO2dCQUNJLGlCQUFpQjtzQkFBMUIsTUFBTTtnQkFFRSxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksWUFBWTtzQkFBckIsTUFBTTtnQkFFRSxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFLQSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZSwgUm91dGVyXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHtcbiAgY3VycmVudFJvdXRlLCBSb3V0ZVdhdGNoUmVwb3J0ZXIsIGdldEN1cnJlbnRCeUFjdGl2ZSwgUm91dGVJbnNpZ2h0LCBnZXRSb3V0ZUJ5QWN0aXZlXG59IGZyb20gXCIuL1JvdXRlV2F0Y2hSZXBvcnRlclwiXG5pbXBvcnQge1xuICAvL05hdmlnYXRpb25TdGFydCxcbiAgTmF2aWdhdGlvbkVuZFxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJyb3V0ZS1yZXBvcnRlclwiLFxuICBleHBvcnRBczpcIlJvdXRlUmVwb3J0ZXJcIlxufSkgZXhwb3J0IGNsYXNzIFJvdXRlUmVwb3J0ZXJ7XG4gIC8vZGVwcmVjYXRlZFxuICBASW5wdXQoKSBvbkxvYWQ6IGFueVxuXG4gIEBPdXRwdXQoXCJvbkNoYW5nZVwiKSBzdGF0ZUNoYW5nZXI6IEV2ZW50RW1pdHRlcjxSb3V0ZVdhdGNoUmVwb3J0ZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBPdXRwdXQoXCJiZWZvcmVDaGFuZ2VcIikgYmVmb3JlQ2hhbmdlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIGFjdGl2YXRlZCE6IEFjdGl2YXRlZFJvdXRlLy9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZWRDaGFuZ2U6RXZlbnRFbWl0dGVyPEFjdGl2YXRlZFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHBhcmFtczphbnkvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHBhcmFtc0NoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIGRhdGE6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgcXVlcnk6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBxdWVyeUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHJvdXRlITogUm91dGUvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHJvdXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvKiBwYXJlbnQgYmluZGluZ3MgKi9cbiAgICBASW5wdXQoKSBwYXJlbnRSb3V0ZT86IFJvdXRlLy9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudFJvdXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAgIEBJbnB1dCgpIHBhcmVudD86IEFjdGl2YXRlZFJvdXRlLy9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudENoYW5nZTpFdmVudEVtaXR0ZXI8QWN0aXZhdGVkUm91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgICBASW5wdXQoKSBwYXJlbnREYXRhOmFueS8vaWdub3JlZCBpblxuICAgIEBPdXRwdXQoKSBwYXJlbnREYXRhQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIC8qIGVuZDogcGFyZW50IGJpbmRpbmdzICovXG5cblxuICAvLyBkZXByZWNhdGVkP1xuICBASW5wdXQoKSBjdXJyZW50ITogY3VycmVudFJvdXRlXG4gIEBJbnB1dCgpIHN0YXRlITogY3VycmVudFJvdXRlLy9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBzdGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Y3VycmVudFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICRkb2N1bWVudFxuICAkc2NvcGU6IGFueVxuICBkb2NDYWxsYmFja3M6IGFueVxuICBxdWVyeVN1YiE6IFN1YnNjcmlwdGlvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBSb3V0ZXI6Um91dGVyLFxuICAgIHB1YmxpYyBSb3V0ZVdhdGNoUmVwb3J0ZXI6Um91dGVXYXRjaFJlcG9ydGVyLFxuICAgIHB1YmxpYyBBY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZVxuICApe1xuICAgIHRoaXMuJGRvY3VtZW50ID0gZG9jdW1lbnRcbiAgICB0aGlzLmFwcGx5KClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5kb2NDYWxsYmFja3MgPSB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nZXREb2N1bWVudENhbGxiYWNrcygpXG4gICAgXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgLy9pZihldmVudC5jb25zdHJ1Y3RvciA9PSBOYXZpZ2F0aW9uU3RhcnQpe31cbiAgICAgIGlmKGV2ZW50LmNvbnN0cnVjdG9yID09PSBOYXZpZ2F0aW9uRW5kKXtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcbiAgICAgICAgXG4gICAgICAgIC8vYWxsb3cgb25lIHByb2Nlc3MgdG8gb2NjdXIgYmVmb3JlIHJlcG9ydGluZyBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLmFwcGx5KClcbiAgICAgICAgLy90aGlzLmFkZFJvdXRlVG9IaXN0b3J5KClcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5lbWl0KCkpXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBpZiggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApe1xuICAgICAgdGhpcy5BY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YT1kYXRhKSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIud2F0Y2hEb2NCeUNhbGxiYWNrcyh0aGlzLiRkb2N1bWVudCwgdGhpcy5kb2NDYWxsYmFja3MpXG4gICAgdGhpcy5hcHBseSgpXG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgdGhpcy5lbWl0KClcbiAgICAgIFxuICAgICAgdGhpcy5xdWVyeVN1YiA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyXG4gICAgICAuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUoIHF1ZXJ5PT50aGlzLnF1ZXJ5Q2hhbmdlLmVtaXQocXVlcnkpIClcbiAgICB9KVxuICAgIFxuICAgIGlmKHRoaXMub25Mb2FkKXtcbiAgICAgIHRoaXMub25Mb2FkKHtcbiAgICAgICAgc3RhdGU6dGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuY3VycmVudCxcbiAgICAgICAgcGFyYW1zOnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnQucGFyYW1zLFxuICAgICAgICBjdXJyZW50OnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnRcbiAgICAgIH0pXG4gICAgfSAgICBcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIudW53YXRjaERvY0J5Q2FsbGJhY2tzKHRoaXMuJGRvY3VtZW50LCB0aGlzLmRvY0NhbGxiYWNrcylcblxuICAgIGlmKCB0aGlzLnF1ZXJ5U3ViICl7XG4gICAgICB0aGlzLnF1ZXJ5U3ViLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gIH1cbi8qXG4gIGFkZFJvdXRlVG9IaXN0b3J5KCk6dm9pZHtcbiAgICBpZighdGhpcy5yb3V0ZUhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnk9W11cbiAgICB9XG5cbiAgICBjb25zdCBwcmlvclBhZ2UgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggLSAxXG4gICAgaWYodGhpcy5Sb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlSGlzdG9yeVsgcHJpb3JQYWdlIF0pe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc2hpZnQoKVxuICAgIH1cblxuICAgIC8vb2xkZXN0IHRvIHJlY2VudCBCVVQgZW1haWxlZCBhcyByZWNlbnQgdG8gb2xkZXN0XG4gICAgdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gIH1cbiovXG4gIGFwcGx5KCl7XG4gICAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApXG4gICAgdGhpcy5yb3V0ZSA9IGN1cnJlbnQuY29uZmlnXG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMuc3RhdGUgPSBjdXJyZW50XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBjdXJyZW50LkFjdGl2YXRlZFJvdXRlXG4gICAgdGhpcy5wYXJhbXMgPSBjdXJyZW50LnBhcmFtcyB8fCB7fVxuICAgIHRoaXMuZGF0YSA9IGN1cnJlbnQuY29uZmlnPy5kYXRhIHx8IHt9XG4gICAgdGhpcy5hdHRlbXB0U2V0UGFyZW50QnlDdXJyZW50KGN1cnJlbnQpXG4gICAgdGhpcy51cGRhdGVDcnVtYkFycmF5KClcbiAgfVxuXG4gIGNydW1iQXJyYXk6IFJvdXRlSW5zaWdodFtdID0gW11cbiAgdXBkYXRlQ3J1bWJBcnJheSgpIHtcbiAgICBjb25zdCBhY3RpdmVSb3V0ZSA9IGdldFJvdXRlQnlBY3RpdmUodGhpcy5BY3RpdmF0ZWRSb3V0ZSlcbiAgICBcbiAgICAvLyByZXNldCB0aGUgYXJyYXlcbiAgICB0aGlzLmNydW1iQXJyYXkgPSBbXVxuXG4gICAgLy8gYWRkIGN1cnJlbnQgaWYgaXQgaXMgbm90IHRoZSByb290XG4gICAgaWYgKCBhY3RpdmVSb3V0ZS5yb3V0ZUNvbmZpZyApIHtcbiAgICAgICAgdGhpcy5jcnVtYkFycmF5LnB1c2goe1xuICAgICAgICAgICAgY29uZmlnOiBhY3RpdmVSb3V0ZS5yb3V0ZUNvbmZpZyxcbiAgICAgICAgICAgIEFjdGl2YXRlZFJvdXRlOiBhY3RpdmVSb3V0ZSxcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB0aGlzLnBvcHVsYXRlQ3J1bWJBcnJheSh0aGlzLmNydW1iQXJyYXksIGFjdGl2ZVJvdXRlKVxuICB9XG5cbiAgcG9wdWxhdGVDcnVtYkFycmF5KGFycmF5OiBSb3V0ZUluc2lnaHRbXSwgY3VycmVudDogQWN0aXZhdGVkUm91dGUpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50LnBhcmVudFxuICAgIGlmIChwYXJlbnQ/LnJvdXRlQ29uZmlnKSB7XG4gICAgICBhcnJheS51bnNoaWZ0KHtcbiAgICAgICAgICBjb25maWc6IHBhcmVudC5yb3V0ZUNvbmZpZyxcbiAgICAgICAgICBBY3RpdmF0ZWRSb3V0ZTogcGFyZW50LFxuICAgICAgfSlcbiAgICAgIGlmIChwYXJlbnQucGFyZW50Py5yb3V0ZUNvbmZpZykge1xuICAgICAgICAgIHJldHVybiB0aGlzLnBvcHVsYXRlQ3J1bWJBcnJheShhcnJheSwgcGFyZW50LnBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICAgIFxuICAgIGlmICggY3VycmVudC5yb3V0ZUNvbmZpZyApIHtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUNydW1iQXJyYXlMaWtlcyhhcnJheSwgY3VycmVudC5yb3V0ZUNvbmZpZyk7XG4gICAgfVxuICB9XG5cbiAgcG9wdWxhdGVDcnVtYkFycmF5TGlrZXMoYXJyYXk6IFJvdXRlSW5zaWdodFtdLCBjdXJyZW50OiBSb3V0ZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0TGlrZVBhcmVudChjdXJyZW50KTtcbiAgICBpZiAocGFyZW50KSB7XG4gICAgICBhcnJheS51bnNoaWZ0KHtcbiAgICAgICAgICBjb25maWc6IHBhcmVudFxuICAgICAgfSlcbiAgICAgIGlmIChwYXJlbnQucGF0aD8ubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5wb3B1bGF0ZUNydW1iQXJyYXlMaWtlcyhhcnJheSwgcGFyZW50KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBhdHRlbXB0U2V0UGFyZW50QnlDdXJyZW50KGN1cnJlbnQ6IGN1cnJlbnRSb3V0ZSkge1xuICAgIGNvbnN0IHBhcmVudCA9IHRoaXMuZ2V0Q3J1bWJQYXJlbnRGb3IoY3VycmVudClcblxuICAgIGlmICggcGFyZW50ICkge1xuICAgICAgdGhpcy5wYXJlbnRSb3V0ZSA9IHBhcmVudC5jb25maWdcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyZW50LkFjdGl2YXRlZFJvdXRlXG4gICAgICB0aGlzLnBhcmVudERhdGEgPSBwYXJlbnQuY29uZmlnLmRhdGFcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGRlbGV0ZSB0aGlzLnBhcmVudFJvdXRlXG4gICAgZGVsZXRlIHRoaXMucGFyZW50XG4gICAgZGVsZXRlIHRoaXMucGFyZW50RGF0YVxuICB9XG5cbiAgZW1pdCgpe1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuZ2V0Q3VycmVudCgpXG5cbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQoIGN1cnJlbnQgKVxuICAgIHRoaXMuYWN0aXZhdGVkQ2hhbmdlLmVtaXQoIGN1cnJlbnQuQWN0aXZhdGVkUm91dGUgKVxuICAgIHRoaXMucGFyYW1zQ2hhbmdlLmVtaXQoIGN1cnJlbnQucGFyYW1zIClcbiAgICBpZiAoIGN1cnJlbnQuY29uZmlnICkge1xuICAgICAgdGhpcy5yb3V0ZUNoYW5nZS5lbWl0KCBjdXJyZW50LmNvbmZpZyApXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCggY3VycmVudC5jb25maWcuZGF0YSApXG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudC5wYXJlbnRcblxuICAgIGlmKCBwYXJlbnQgKXtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHBhcmVudC5jb25maWdcbiAgICAgIGNvbnN0IGFyID0gcGFyZW50LkFjdGl2YXRlZFJvdXRlXG5cbiAgICAgIHRoaXMucGFyZW50Q2hhbmdlLmVtaXQoIGFyIClcbiAgICAgIGlmICggY29uZmlnICkge1xuICAgICAgICB0aGlzLnBhcmVudFJvdXRlQ2hhbmdlLmVtaXQoIGNvbmZpZyApXG4gICAgICAgIHRoaXMucGFyZW50RGF0YUNoYW5nZS5lbWl0KCBjb25maWcuZGF0YSApXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ29CYWNrT3JVcCgpIHtcbiAgICBpZiAoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLiRoaXN0b3J5Lmxlbmd0aCApIHtcbiAgICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmdvSGlzdG9yeUJhY2soKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5nb1VwKClcbiAgfVxuXG4gIGdvVXAoKSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5jcnVtYkFycmF5WyB0aGlzLmNydW1iQXJyYXkubGVuZ3RoIC0gMSBdXG4gICAgY29uc3Qgcm91dGUgPSB0YXJnZXQuY29uZmlnXG4gICAgXG4gICAgaWYgKCAhcm91dGUgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLlJvdXRlci5uYXZpZ2F0ZUJ5VXJsKCByb3V0ZS5wYXRoIGFzIHN0cmluZyApXG4gIH1cblxuICBnb0JhY2tUbyhuYW1lOiBzdHJpbmcsIHBhcmFtczogYW55KXtcbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nb0JhY2tUbyhuYW1lLCBwYXJhbXMpXG4gIH1cblxuICB0cnlCYWNrKG5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnkpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnRyeUJhY2sobmFtZSwgcGFyYW1zKVxuICB9XG4gIFxuICBnZXRDcnVtYlBhcmVudEZvcihjdXJyZW50OiBjdXJyZW50Um91dGUpOiBSb3V0ZUluc2lnaHQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnQucGFyZW50XG4gICAgaWYoIHBhcmVudCAmJiBwYXJlbnQuQWN0aXZhdGVkUm91dGUucm91dGVDb25maWcgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEFjdGl2YXRlZFJvdXRlOiBwYXJlbnQuQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIGNvbmZpZzogcGFyZW50LmNvbmZpZ1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICggIWN1cnJlbnQuY29uZmlnICkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgbGlrZVBhcmVudCA9IHRoaXMuZ2V0TGlrZVBhcmVudChjdXJyZW50LmNvbmZpZylcbiAgICBpZiAoIGxpa2VQYXJlbnQgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWc6IGxpa2VQYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRMaWtlUGFyZW50KHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICAvLyB0cnkgdG8gZmluZCBhIHJlbGF0ZWQgcGF0aCBhdCBiYXNlXG4gICAgY29uc3QgY3VycmVudFBhdGhpbmcgPSByb3V0ZS5wYXRoPy5zcGxpdCgnLycpIHx8IFtdXG4gICAgbGV0IGxpa2VQYXJlbnQ6IFJvdXRlIHwgdW5kZWZpbmVkXG4gICAgY3VycmVudFBhdGhpbmcucG9wKCkgLy8gcmVtb3ZlIHRoZSBjdXJyZW50XG4gICAgd2hpbGUoIGN1cnJlbnRQYXRoaW5nLmxlbmd0aCApIHtcbiAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBjdXJyZW50UGF0aGluZy5qb2luKCcvJylcbiAgXG4gICAgICAvLyB0cnkgdG8gZmluZCBwYXJlbnQgYnkgcGF0aCBtYXRjaGluZ1xuICAgICAgbGlrZVBhcmVudCA9IHRoaXMuUm91dGVyLmNvbmZpZy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09IHRhcmdldFBhdGgpXG4gICAgICBcbiAgICAgIGlmICggbGlrZVBhcmVudCApIHtcbiAgICAgICAgcmV0dXJuIGxpa2VQYXJlbnRcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRQYXRoaW5nLnBvcCgpXG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgYSByZWRpcmVjdCBwYXJlbnQgYnV0IGVuc3VyZSBpdCBkb2VzIG5vdCByZWRpcmVjdCB0byBjdXJyZW50IHJvdXRlXG4gICAgY29uc3QgcmVkaXJlY3RSb290ID0gdGhpcy5Sb3V0ZXIuY29uZmlnLmZpbmQoeCA9PiB4LnBhdGggPT09ICcnICYmIHgucmVkaXJlY3RUbyAmJiB4LnJlZGlyZWN0VG8gIT09IHJvdXRlLnBhdGgpXG4gICAgaWYgKCByZWRpcmVjdFJvb3QgKSB7XG4gICAgICByZXR1cm4gdGhpcy5Sb3V0ZXIuY29uZmlnLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gcmVkaXJlY3RSb290LnJlZGlyZWN0VG8pXG4gICAgfVxuICB9XG59XG4iXX0=