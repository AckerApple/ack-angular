import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { getCurrentByActive } from "./RouteWatchReporter";
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
        const parent = current.parent;
        if (parent) {
            const config = parent.config;
            const ar = parent.ActivatedRoute;
            this.parentRoute = config;
            this.parent = ar;
            this.parentData = config.data;
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVSZXBvcnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yb3V0ZXIvUm91dGVSZXBvcnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUl0RSxPQUFPLEVBQzZCLGtCQUFrQixFQUNyRCxNQUFNLHNCQUFzQixDQUFBO0FBQzdCLE9BQU87QUFDTCxrQkFBa0I7QUFDbEIsYUFBYSxFQUNkLE1BQU0saUJBQWlCLENBQUM7Ozs7QUFLdEIsTUFBTSxPQUFPLGFBQWE7SUFnRDNCLFlBQ1MsTUFBYSxFQUNiLGtCQUFxQyxFQUNyQyxjQUE2QjtRQUY3QixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQUNyQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZTtRQS9DbEIsaUJBQVksR0FBcUMsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUMvRCxrQkFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFHaEQsb0JBQWUsR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdqRSxpQkFBWSxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBR25ELGVBQVUsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdqRCxnQkFBVyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2xELGdCQUFXLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUE7UUFJbEQsc0JBQWlCLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHMUQsaUJBQVksR0FBZ0MsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUc5RCxxQkFBZ0IsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU96RCxnQkFBVyxHQUE4QixJQUFJLFlBQVksRUFBRSxDQUFB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ckIsTUFBTTtnQkFFRSxVQUFVO3NCQUFsQixLQUFLO2dCQUNJLGdCQUFnQjtzQkFBekIsTUFBTTtnQkFLQSxPQUFPO3NCQUFmLEtBQUs7Z0JBQ0csS0FBSztzQkFBYixLQUFLO2dCQUNJLFdBQVc7c0JBQXBCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZSwgUm91dGVyXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHtcbiAgY3VycmVudFJvdXRlLCBSb3V0ZVdhdGNoUmVwb3J0ZXIsIGdldEN1cnJlbnRCeUFjdGl2ZVxufSBmcm9tIFwiLi9Sb3V0ZVdhdGNoUmVwb3J0ZXJcIlxuaW1wb3J0IHtcbiAgLy9OYXZpZ2F0aW9uU3RhcnQsXG4gIE5hdmlnYXRpb25FbmRcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwicm91dGUtcmVwb3J0ZXJcIixcbiAgZXhwb3J0QXM6XCJSb3V0ZVJlcG9ydGVyXCJcbn0pIGV4cG9ydCBjbGFzcyBSb3V0ZVJlcG9ydGVye1xuICAvL2RlcHJlY2F0ZWRcbiAgQElucHV0KCkgb25Mb2FkOiBhbnlcblxuICBAT3V0cHV0KFwib25DaGFuZ2VcIikgc3RhdGVDaGFuZ2VyOiBFdmVudEVtaXR0ZXI8Um91dGVXYXRjaFJlcG9ydGVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBAT3V0cHV0KFwiYmVmb3JlQ2hhbmdlXCIpIGJlZm9yZUNoYW5nZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBhY3RpdmF0ZWQhOiBBY3RpdmF0ZWRSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgYWN0aXZhdGVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxBY3RpdmF0ZWRSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBwYXJhbXM6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBwYXJhbXNDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBkYXRhOmFueS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHF1ZXJ5OmFueS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgcXVlcnlDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSByb3V0ZSE6IFJvdXRlLy9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSByb3V0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Um91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgLyogcGFyZW50IGJpbmRpbmdzICovXG4gICAgQElucHV0KCkgcGFyZW50Um91dGUhOiBSb3V0ZS8vaWdub3JlZCBpblxuICAgIEBPdXRwdXQoKSBwYXJlbnRSb3V0ZUNoYW5nZTpFdmVudEVtaXR0ZXI8Um91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgICBASW5wdXQoKSBwYXJlbnQhOiBBY3RpdmF0ZWRSb3V0ZS8vaWdub3JlZCBpblxuICAgIEBPdXRwdXQoKSBwYXJlbnRDaGFuZ2U6RXZlbnRFbWl0dGVyPEFjdGl2YXRlZFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICAgQElucHV0KCkgcGFyZW50RGF0YTphbnkvL2lnbm9yZWQgaW5cbiAgICBAT3V0cHV0KCkgcGFyZW50RGF0YUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvKiBlbmQ6IHBhcmVudCBiaW5kaW5ncyAqL1xuXG5cbiAgLy9kZXByZWNhdGVkXG4gIEBJbnB1dCgpIGN1cnJlbnQhOiBjdXJyZW50Um91dGVcbiAgQElucHV0KCkgc3RhdGUhOiBjdXJyZW50Um91dGUvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHN0YXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxjdXJyZW50Um91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgJGRvY3VtZW50XG4gICRzY29wZTogYW55XG5cbiAgLypzdGF0aWMgcGFyYW1ldGVycyA9IFtbXG4gICAgUm91dGVXYXRjaFJlcG9ydGVyXG4gIF1dKi9cbiAgZG9jQ2FsbGJhY2tzOiBhbnlcbiAgcXVlcnlTdWIhOiBTdWJzY3JpcHRpb25cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgUm91dGVyOlJvdXRlcixcbiAgICBwdWJsaWMgUm91dGVXYXRjaFJlcG9ydGVyOlJvdXRlV2F0Y2hSZXBvcnRlcixcbiAgICBwdWJsaWMgQWN0aXZhdGVkUm91dGU6QWN0aXZhdGVkUm91dGVcbiAgKXtcbiAgICB0aGlzLiRkb2N1bWVudCA9IGRvY3VtZW50XG4gICAgdGhpcy5hcHBseSgpXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuZG9jQ2FsbGJhY2tzID0gdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuZ2V0RG9jdW1lbnRDYWxsYmFja3MoKVxuXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoZXZlbnQ9PntcbiAgICAgIC8vaWYoZXZlbnQuY29uc3RydWN0b3IgPT0gTmF2aWdhdGlvblN0YXJ0KXt9XG4gICAgICBpZihldmVudC5jb25zdHJ1Y3RvciA9PT0gTmF2aWdhdGlvbkVuZCl7XG4gICAgICAgIHRoaXMuYmVmb3JlQ2hhbmdlci5lbWl0KCB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlciApXG5cbiAgICAgICAgLy9hbGxvdyBvbmUgcHJvY2VzcyB0byBvY2N1ciBiZWZvcmUgcmVwb3J0aW5nIHN0YXRlIGhhcyBjaGFuZ2VkXG4gICAgICAgIHRoaXMuYXBwbHkoKVxuICAgICAgICAvL3RoaXMuYWRkUm91dGVUb0hpc3RvcnkoKVxuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLmVtaXQoKSlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYoIHRoaXMuQWN0aXZhdGVkUm91dGUgKXtcbiAgICAgIHRoaXMuQWN0aXZhdGVkUm91dGUuZGF0YS5zdWJzY3JpYmUoZGF0YT0+XG4gICAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMuZGF0YT1kYXRhKVxuICAgICAgKVxuICAgIH1cblxuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLndhdGNoRG9jQnlDYWxsYmFja3ModGhpcy4kZG9jdW1lbnQsIHRoaXMuZG9jQ2FsbGJhY2tzKVxuICAgIHRoaXMuYXBwbHkoKVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgdGhpcy5lbWl0KClcblxuICAgICAgdGhpcy5xdWVyeVN1YiA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyXG4gICAgICAuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbXNcbiAgICAgIC5zdWJzY3JpYmUoIHF1ZXJ5PT50aGlzLnF1ZXJ5Q2hhbmdlLmVtaXQocXVlcnkpIClcbiAgICB9KVxuXG4gICAgaWYodGhpcy5vbkxvYWQpe1xuICAgICAgdGhpcy5vbkxvYWQoe1xuICAgICAgICBzdGF0ZTp0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5jdXJyZW50LFxuICAgICAgICBwYXJhbXM6dGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuY3VycmVudC5wYXJhbXMsXG4gICAgICAgIGN1cnJlbnQ6dGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuY3VycmVudFxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnVud2F0Y2hEb2NCeUNhbGxiYWNrcyh0aGlzLiRkb2N1bWVudCwgdGhpcy5kb2NDYWxsYmFja3MpXG5cbiAgICBpZiggdGhpcy5xdWVyeVN1YiApe1xuICAgICAgdGhpcy5xdWVyeVN1Yi51bnN1YnNjcmliZSgpXG4gICAgfVxuICB9XG4vKlxuICBhZGRSb3V0ZVRvSGlzdG9yeSgpOnZvaWR7XG4gICAgaWYoIXRoaXMucm91dGVIaXN0b3J5KXtcbiAgICAgIHRoaXMucm91dGVIaXN0b3J5PVtdXG4gICAgfVxuXG4gICAgY29uc3QgcHJpb3JQYWdlID0gdGhpcy5yb3V0ZUhpc3RvcnkubGVuZ3RoIC0gMVxuICAgIGlmKHRoaXMuUm91dGVyLnVybCA9PT0gdGhpcy5yb3V0ZUhpc3RvcnlbIHByaW9yUGFnZSBdKXtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vcmVtb3ZlIG9sZCBlbnRyaWVzXG4gICAgd2hpbGUodGhpcy5yb3V0ZUhpc3RvcnkubGVuZ3RoID4gdGhpcy5tYXhIaXN0b3J5KXtcbiAgICAgIHRoaXMucm91dGVIaXN0b3J5LnNoaWZ0KClcbiAgICB9XG5cbiAgICAvL29sZGVzdCB0byByZWNlbnQgQlVUIGVtYWlsZWQgYXMgcmVjZW50IHRvIG9sZGVzdFxuICAgIHRoaXMucm91dGVIaXN0b3J5LnB1c2godGhpcy5Sb3V0ZXIudXJsKVxuICB9XG4qL1xuICBhcHBseSgpe1xuICAgIGNvbnN0IGN1cnJlbnQgPSBnZXRDdXJyZW50QnlBY3RpdmUoIHRoaXMuQWN0aXZhdGVkUm91dGUgKVxuXG4gICAgdGhpcy5yb3V0ZSA9IGN1cnJlbnQuY29uZmlnXG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMuc3RhdGUgPSBjdXJyZW50XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBjdXJyZW50LkFjdGl2YXRlZFJvdXRlXG4gICAgdGhpcy5wYXJhbXMgPSBjdXJyZW50LnBhcmFtcyB8fCB7fVxuICAgIHRoaXMuZGF0YSA9IGN1cnJlbnQuY29uZmlnLmRhdGEgfHwge31cblxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnQucGFyZW50XG5cbiAgICBpZiggcGFyZW50ICl7XG4gICAgICBjb25zdCBjb25maWcgPSBwYXJlbnQuY29uZmlnXG4gICAgICBjb25zdCBhciA9IHBhcmVudC5BY3RpdmF0ZWRSb3V0ZVxuXG4gICAgICB0aGlzLnBhcmVudFJvdXRlID0gY29uZmlnXG4gICAgICB0aGlzLnBhcmVudCA9IGFyXG4gICAgICB0aGlzLnBhcmVudERhdGEgPSBjb25maWcuZGF0YVxuICAgIH1cbiAgfVxuXG4gIGVtaXQoKXtcbiAgICB0aGlzLnN0YXRlQ2hhbmdlci5lbWl0KCB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlciApXG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmdldEN1cnJlbnQoKVxuXG4gICAgdGhpcy5yb3V0ZUNoYW5nZS5lbWl0KCBjdXJyZW50LmNvbmZpZyApXG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KCBjdXJyZW50IClcbiAgICB0aGlzLmFjdGl2YXRlZENoYW5nZS5lbWl0KCBjdXJyZW50LkFjdGl2YXRlZFJvdXRlIClcblxuICAgIHRoaXMucGFyYW1zQ2hhbmdlLmVtaXQoIGN1cnJlbnQucGFyYW1zIClcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCggY3VycmVudC5jb25maWcuZGF0YSApXG5cbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50LnBhcmVudFxuXG4gICAgaWYoIHBhcmVudCApe1xuICAgICAgY29uc3QgY29uZmlnID0gcGFyZW50LmNvbmZpZ1xuICAgICAgY29uc3QgYXIgPSBwYXJlbnQuQWN0aXZhdGVkUm91dGVcblxuICAgICAgdGhpcy5wYXJlbnRSb3V0ZUNoYW5nZS5lbWl0KCBjb25maWcgKVxuICAgICAgdGhpcy5wYXJlbnRDaGFuZ2UuZW1pdCggYXIgKVxuICAgICAgdGhpcy5wYXJlbnREYXRhQ2hhbmdlLmVtaXQoIGNvbmZpZy5kYXRhIClcbiAgICB9XG4gIH1cblxuICBnb0JhY2tUbyhuYW1lOiBzdHJpbmcsIHBhcmFtczogYW55KXtcbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nb0JhY2tUbyhuYW1lLCBwYXJhbXMpXG4gIH1cblxuICB0cnlCYWNrKG5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnkpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnRyeUJhY2sobmFtZSwgcGFyYW1zKVxuICB9XG59XG4iXX0=