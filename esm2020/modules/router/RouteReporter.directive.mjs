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
        this.data = current.config.data || {};
        this.attemptSetParentByCurrent(current);
        this.updateCrumbArray();
    }
    updateCrumbArray() {
        this.crumbArray = []; // reset the array
        this.populateCrumbArray(this.crumbArray, getRouteByActive(this.ActivatedRoute));
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
        this.routeChange.emit(current.config);
        this.stateChange.emit(current);
        this.activatedChange.emit(current.ActivatedRoute);
        this.paramsChange.emit(current.params);
        this.dataChange.emit(current.config.data);
        const parent = current.parent;
        if (parent) {
            const config = parent.config;
            const ar = parent.ActivatedRoute;
            this.parentRouteChange.emit(config);
            this.parentChange.emit(ar);
            this.parentDataChange.emit(config.data);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVSZXBvcnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yb3V0ZXIvUm91dGVSZXBvcnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUl0RSxPQUFPLEVBQzZCLGtCQUFrQixFQUFnQixnQkFBZ0IsRUFDckYsTUFBTSxzQkFBc0IsQ0FBQTtBQUM3QixPQUFPO0FBQ0wsa0JBQWtCO0FBQ2xCLGFBQWEsRUFDZCxNQUFNLGlCQUFpQixDQUFDOzs7O0FBS3RCLE1BQU0sT0FBTyxhQUFhO0lBNEMzQixZQUNTLE1BQWEsRUFDYixrQkFBcUMsRUFDckMsY0FBNkI7UUFGN0IsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUNiLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsbUJBQWMsR0FBZCxjQUFjLENBQWU7UUEzQ2xCLGlCQUFZLEdBQXFDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDL0Qsa0JBQWEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2hELG9CQUFlLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUE7UUFHakUsaUJBQVksR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUduRCxlQUFVLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHakQsZ0JBQVcsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdsRCxnQkFBVyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBSWxELHNCQUFpQixHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzFELGlCQUFZLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUE7UUFHOUQscUJBQWdCLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPekQsZ0JBQVcsR0FBOEIsSUFBSSxZ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QztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixRQUFRLEVBQUMsZUFBZTtpQkFDekI7MkpBRVUsTUFBTTtzQkFBZCxLQUFLO2dCQUVjLFlBQVk7c0JBQS9CLE1BQU07dUJBQUMsVUFBVTtnQkFDTSxhQUFhO3NCQUFwQyxNQUFNO3VCQUFDLGNBQWM7Z0JBRWIsU0FBUztzQkFBakIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNO2dCQUVFLE1BQU07c0JBQWQsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNO2dCQUVFLElBQUk7c0JBQVosS0FBSztnQkFDSSxVQUFVO3NCQUFuQixNQUFNO2dCQUVFLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVFLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNO2dCQUdJLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0ksaUJBQWlCO3NCQUExQixNQUFNO2dCQUVFLE1BQU07c0JBQWQsS0FBSztnQkFDSSxZQUFZO3NCQUFyQixNQUFNO2dCQUVFLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0ksZ0JBQWdCO3NCQUF6QixNQUFNO2dCQUtBLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksV0FBVztzQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGUsIFJvdXRlLCBSb3V0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5pbXBvcnQge1xuICBjdXJyZW50Um91dGUsIFJvdXRlV2F0Y2hSZXBvcnRlciwgZ2V0Q3VycmVudEJ5QWN0aXZlLCBSb3V0ZUluc2lnaHQsIGdldFJvdXRlQnlBY3RpdmVcbn0gZnJvbSBcIi4vUm91dGVXYXRjaFJlcG9ydGVyXCJcbmltcG9ydCB7XG4gIC8vTmF2aWdhdGlvblN0YXJ0LFxuICBOYXZpZ2F0aW9uRW5kXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiBcInJvdXRlLXJlcG9ydGVyXCIsXG4gIGV4cG9ydEFzOlwiUm91dGVSZXBvcnRlclwiXG59KSBleHBvcnQgY2xhc3MgUm91dGVSZXBvcnRlcntcbiAgLy9kZXByZWNhdGVkXG4gIEBJbnB1dCgpIG9uTG9hZDogYW55XG5cbiAgQE91dHB1dChcIm9uQ2hhbmdlXCIpIHN0YXRlQ2hhbmdlcjogRXZlbnRFbWl0dGVyPFJvdXRlV2F0Y2hSZXBvcnRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQE91dHB1dChcImJlZm9yZUNoYW5nZVwiKSBiZWZvcmVDaGFuZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgYWN0aXZhdGVkITogQWN0aXZhdGVkUm91dGUvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIGFjdGl2YXRlZENoYW5nZTpFdmVudEVtaXR0ZXI8QWN0aXZhdGVkUm91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgcGFyYW1zOmFueS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgcGFyYW1zQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgZGF0YTphbnkvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBxdWVyeTphbnkvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHF1ZXJ5Q2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgcm91dGUhOiBSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgcm91dGVDaGFuZ2U6RXZlbnRFbWl0dGVyPFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8qIHBhcmVudCBiaW5kaW5ncyAqL1xuICAgIEBJbnB1dCgpIHBhcmVudFJvdXRlPzogUm91dGUvL2lnbm9yZWQgaW5cbiAgICBAT3V0cHV0KCkgcGFyZW50Um91dGVDaGFuZ2U6RXZlbnRFbWl0dGVyPFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICAgQElucHV0KCkgcGFyZW50PzogQWN0aXZhdGVkUm91dGUvL2lnbm9yZWQgaW5cbiAgICBAT3V0cHV0KCkgcGFyZW50Q2hhbmdlOkV2ZW50RW1pdHRlcjxBY3RpdmF0ZWRSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAgIEBJbnB1dCgpIHBhcmVudERhdGE6YW55Ly9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudERhdGFDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgLyogZW5kOiBwYXJlbnQgYmluZGluZ3MgKi9cblxuXG4gIC8vZGVwcmVjYXRlZFxuICBASW5wdXQoKSBjdXJyZW50ITogY3VycmVudFJvdXRlXG4gIEBJbnB1dCgpIHN0YXRlITogY3VycmVudFJvdXRlLy9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBzdGF0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Y3VycmVudFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICRkb2N1bWVudFxuICAkc2NvcGU6IGFueVxuICBkb2NDYWxsYmFja3M6IGFueVxuICBxdWVyeVN1YiE6IFN1YnNjcmlwdGlvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBSb3V0ZXI6Um91dGVyLFxuICAgIHB1YmxpYyBSb3V0ZVdhdGNoUmVwb3J0ZXI6Um91dGVXYXRjaFJlcG9ydGVyLFxuICAgIHB1YmxpYyBBY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZVxuICApe1xuICAgIHRoaXMuJGRvY3VtZW50ID0gZG9jdW1lbnRcbiAgICB0aGlzLmFwcGx5KClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5kb2NDYWxsYmFja3MgPSB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nZXREb2N1bWVudENhbGxiYWNrcygpXG4gICAgXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQgPT4ge1xuICAgICAgLy9pZihldmVudC5jb25zdHJ1Y3RvciA9PSBOYXZpZ2F0aW9uU3RhcnQpe31cbiAgICAgIGlmKGV2ZW50LmNvbnN0cnVjdG9yID09PSBOYXZpZ2F0aW9uRW5kKXtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcbiAgICAgICAgXG4gICAgICAgIC8vYWxsb3cgb25lIHByb2Nlc3MgdG8gb2NjdXIgYmVmb3JlIHJlcG9ydGluZyBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLmFwcGx5KClcbiAgICAgICAgLy90aGlzLmFkZFJvdXRlVG9IaXN0b3J5KClcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5lbWl0KCkpXG4gICAgICB9XG4gICAgfSlcbiAgICBcbiAgICBpZiggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApe1xuICAgICAgdGhpcy5BY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhID0+IHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YT1kYXRhKSlcbiAgICB9XG4gICAgXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIud2F0Y2hEb2NCeUNhbGxiYWNrcyh0aGlzLiRkb2N1bWVudCwgdGhpcy5kb2NDYWxsYmFja3MpXG4gICAgdGhpcy5hcHBseSgpXG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgdGhpcy5lbWl0KClcbiAgICAgIFxuICAgICAgdGhpcy5xdWVyeVN1YiA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyXG4gICAgICAuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUoIHF1ZXJ5PT50aGlzLnF1ZXJ5Q2hhbmdlLmVtaXQocXVlcnkpIClcbiAgICB9KVxuICAgIFxuICAgIGlmKHRoaXMub25Mb2FkKXtcbiAgICAgIHRoaXMub25Mb2FkKHtcbiAgICAgICAgc3RhdGU6dGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuY3VycmVudCxcbiAgICAgICAgcGFyYW1zOnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnQucGFyYW1zLFxuICAgICAgICBjdXJyZW50OnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnRcbiAgICAgIH0pXG4gICAgfSAgICBcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIudW53YXRjaERvY0J5Q2FsbGJhY2tzKHRoaXMuJGRvY3VtZW50LCB0aGlzLmRvY0NhbGxiYWNrcylcblxuICAgIGlmKCB0aGlzLnF1ZXJ5U3ViICl7XG4gICAgICB0aGlzLnF1ZXJ5U3ViLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gIH1cbi8qXG4gIGFkZFJvdXRlVG9IaXN0b3J5KCk6dm9pZHtcbiAgICBpZighdGhpcy5yb3V0ZUhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnk9W11cbiAgICB9XG5cbiAgICBjb25zdCBwcmlvclBhZ2UgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggLSAxXG4gICAgaWYodGhpcy5Sb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlSGlzdG9yeVsgcHJpb3JQYWdlIF0pe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc2hpZnQoKVxuICAgIH1cblxuICAgIC8vb2xkZXN0IHRvIHJlY2VudCBCVVQgZW1haWxlZCBhcyByZWNlbnQgdG8gb2xkZXN0XG4gICAgdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gIH1cbiovXG4gIGFwcGx5KCl7XG4gICAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApXG4gICAgdGhpcy5yb3V0ZSA9IGN1cnJlbnQuY29uZmlnXG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMuc3RhdGUgPSBjdXJyZW50XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBjdXJyZW50LkFjdGl2YXRlZFJvdXRlXG4gICAgdGhpcy5wYXJhbXMgPSBjdXJyZW50LnBhcmFtcyB8fCB7fVxuICAgIHRoaXMuZGF0YSA9IGN1cnJlbnQuY29uZmlnLmRhdGEgfHwge31cbiAgICB0aGlzLmF0dGVtcHRTZXRQYXJlbnRCeUN1cnJlbnQoY3VycmVudClcbiAgICB0aGlzLnVwZGF0ZUNydW1iQXJyYXkoKVxuICB9XG5cbiAgY3J1bWJBcnJheTogUm91dGVJbnNpZ2h0W10gPSBbXVxuICB1cGRhdGVDcnVtYkFycmF5KCkge1xuICAgIHRoaXMuY3J1bWJBcnJheSA9IFtdIC8vIHJlc2V0IHRoZSBhcnJheVxuICAgIHRoaXMucG9wdWxhdGVDcnVtYkFycmF5KHRoaXMuY3J1bWJBcnJheSwgZ2V0Um91dGVCeUFjdGl2ZSh0aGlzLkFjdGl2YXRlZFJvdXRlKSlcbiAgfVxuXG4gIHBvcHVsYXRlQ3J1bWJBcnJheShhcnJheTogUm91dGVJbnNpZ2h0W10sIGN1cnJlbnQ6IEFjdGl2YXRlZFJvdXRlKTogdm9pZCB7XG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudC5wYXJlbnRcbiAgICBpZiAocGFyZW50Py5yb3V0ZUNvbmZpZykge1xuICAgICAgYXJyYXkudW5zaGlmdCh7XG4gICAgICAgICAgY29uZmlnOiBwYXJlbnQucm91dGVDb25maWcsXG4gICAgICAgICAgQWN0aXZhdGVkUm91dGU6IHBhcmVudCxcbiAgICAgIH0pXG4gICAgICBpZiAocGFyZW50LnBhcmVudD8ucm91dGVDb25maWcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5wb3B1bGF0ZUNydW1iQXJyYXkoYXJyYXksIHBhcmVudC5wYXJlbnQpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIGN1cnJlbnQucm91dGVDb25maWcgKSB7XG4gICAgICAgIHRoaXMucG9wdWxhdGVDcnVtYkFycmF5TGlrZXMoYXJyYXksIGN1cnJlbnQucm91dGVDb25maWcpO1xuICAgIH1cbiAgfVxuXG4gIHBvcHVsYXRlQ3J1bWJBcnJheUxpa2VzKGFycmF5OiBSb3V0ZUluc2lnaHRbXSwgY3VycmVudDogUm91dGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldExpa2VQYXJlbnQoY3VycmVudCk7XG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgYXJyYXkudW5zaGlmdCh7XG4gICAgICAgICAgY29uZmlnOiBwYXJlbnRcbiAgICAgIH0pXG4gICAgICBpZiAocGFyZW50LnBhdGg/Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMucG9wdWxhdGVDcnVtYkFycmF5TGlrZXMoYXJyYXksIHBhcmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgYXR0ZW1wdFNldFBhcmVudEJ5Q3VycmVudChjdXJyZW50OiBjdXJyZW50Um91dGUpIHtcbiAgICBjb25zdCBwYXJlbnQgPSB0aGlzLmdldENydW1iUGFyZW50Rm9yKGN1cnJlbnQpXG5cbiAgICBpZiAoIHBhcmVudCApIHtcbiAgICAgIHRoaXMucGFyZW50Um91dGUgPSBwYXJlbnQuY29uZmlnXG4gICAgICB0aGlzLnBhcmVudCA9IHBhcmVudC5BY3RpdmF0ZWRSb3V0ZVxuICAgICAgdGhpcy5wYXJlbnREYXRhID0gcGFyZW50LmNvbmZpZy5kYXRhXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBkZWxldGUgdGhpcy5wYXJlbnRSb3V0ZVxuICAgIGRlbGV0ZSB0aGlzLnBhcmVudFxuICAgIGRlbGV0ZSB0aGlzLnBhcmVudERhdGFcbiAgfVxuXG4gIGVtaXQoKXtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlci5lbWl0KCB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlciApXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmdldEN1cnJlbnQoKVxuXG4gICAgdGhpcy5yb3V0ZUNoYW5nZS5lbWl0KCBjdXJyZW50LmNvbmZpZyApXG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KCBjdXJyZW50IClcbiAgICB0aGlzLmFjdGl2YXRlZENoYW5nZS5lbWl0KCBjdXJyZW50LkFjdGl2YXRlZFJvdXRlIClcblxuICAgIHRoaXMucGFyYW1zQ2hhbmdlLmVtaXQoIGN1cnJlbnQucGFyYW1zIClcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCggY3VycmVudC5jb25maWcuZGF0YSApXG5cbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50LnBhcmVudFxuXG4gICAgaWYoIHBhcmVudCApe1xuICAgICAgY29uc3QgY29uZmlnID0gcGFyZW50LmNvbmZpZ1xuICAgICAgY29uc3QgYXIgPSBwYXJlbnQuQWN0aXZhdGVkUm91dGVcblxuICAgICAgdGhpcy5wYXJlbnRSb3V0ZUNoYW5nZS5lbWl0KCBjb25maWcgKVxuICAgICAgdGhpcy5wYXJlbnRDaGFuZ2UuZW1pdCggYXIgKVxuICAgICAgdGhpcy5wYXJlbnREYXRhQ2hhbmdlLmVtaXQoIGNvbmZpZy5kYXRhIClcbiAgICB9XG4gIH1cblxuICBnb0JhY2tUbyhuYW1lOiBzdHJpbmcsIHBhcmFtczogYW55KXtcbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nb0JhY2tUbyhuYW1lLCBwYXJhbXMpXG4gIH1cblxuICB0cnlCYWNrKG5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnkpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnRyeUJhY2sobmFtZSwgcGFyYW1zKVxuICB9XG4gIFxuICBnZXRDcnVtYlBhcmVudEZvcihjdXJyZW50OiBjdXJyZW50Um91dGUpOiBSb3V0ZUluc2lnaHQgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnQucGFyZW50XG4gICAgaWYoIHBhcmVudCAmJiBwYXJlbnQuQWN0aXZhdGVkUm91dGUucm91dGVDb25maWcgKXtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIEFjdGl2YXRlZFJvdXRlOiBwYXJlbnQuQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIGNvbmZpZzogcGFyZW50LmNvbmZpZ1xuICAgICAgfVxuICAgIH1cbiAgXG4gICAgY29uc3QgbGlrZVBhcmVudCA9IHRoaXMuZ2V0TGlrZVBhcmVudChjdXJyZW50LmNvbmZpZylcbiAgICBpZiAoIGxpa2VQYXJlbnQgKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBjb25maWc6IGxpa2VQYXJlbnRcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRMaWtlUGFyZW50KHJvdXRlOiBSb3V0ZSk6IFJvdXRlIHwgdW5kZWZpbmVkIHtcbiAgICAvLyB0cnkgdG8gZmluZCBhIHJlbGF0ZWQgcGF0aCBhdCBiYXNlXG4gICAgY29uc3QgY3VycmVudFBhdGhpbmcgPSByb3V0ZS5wYXRoPy5zcGxpdCgnLycpIHx8IFtdXG4gICAgbGV0IGxpa2VQYXJlbnQ6IFJvdXRlIHwgdW5kZWZpbmVkXG4gICAgY3VycmVudFBhdGhpbmcucG9wKCkgLy8gcmVtb3ZlIHRoZSBjdXJyZW50XG4gICAgd2hpbGUoIGN1cnJlbnRQYXRoaW5nLmxlbmd0aCApIHtcbiAgICAgIGNvbnN0IHRhcmdldFBhdGggPSBjdXJyZW50UGF0aGluZy5qb2luKCcvJylcbiAgXG4gICAgICAvLyB0cnkgdG8gZmluZCBwYXJlbnQgYnkgcGF0aCBtYXRjaGluZ1xuICAgICAgbGlrZVBhcmVudCA9IHRoaXMuUm91dGVyLmNvbmZpZy5maW5kKHJvdXRlID0+IHJvdXRlLnBhdGggPT09IHRhcmdldFBhdGgpXG4gICAgICBcbiAgICAgIGlmICggbGlrZVBhcmVudCApIHtcbiAgICAgICAgcmV0dXJuIGxpa2VQYXJlbnRcbiAgICAgIH1cbiAgICAgIGN1cnJlbnRQYXRoaW5nLnBvcCgpXG4gICAgfVxuXG4gICAgLy8gbG9vayBmb3IgYSByZWRpcmVjdCBwYXJlbnQgYnV0IGVuc3VyZSBpdCBkb2VzIG5vdCByZWRpcmVjdCB0byBjdXJyZW50IHJvdXRlXG4gICAgY29uc3QgcmVkaXJlY3RSb290ID0gdGhpcy5Sb3V0ZXIuY29uZmlnLmZpbmQoeCA9PiB4LnBhdGggPT09ICcnICYmIHgucmVkaXJlY3RUbyAmJiB4LnJlZGlyZWN0VG8gIT09IHJvdXRlLnBhdGgpXG4gICAgaWYgKCByZWRpcmVjdFJvb3QgKSB7XG4gICAgICByZXR1cm4gdGhpcy5Sb3V0ZXIuY29uZmlnLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gcmVkaXJlY3RSb290LnJlZGlyZWN0VG8pXG4gICAgfVxuICB9XG59XG4iXX0=