import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteWatchReporter, getCurrentByActive } from "./RouteWatchReporter";
import { 
//NavigationStart,
NavigationEnd } from "@angular/router";
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
RouteReporter.decorators = [
    { type: Directive, args: [{
                selector: "route-reporter",
                exportAs: "RouteReporter"
            },] }
];
RouteReporter.ctorParameters = () => [
    { type: Router },
    { type: RouteWatchReporter },
    { type: ActivatedRoute }
];
RouteReporter.propDecorators = {
    onLoad: [{ type: Input }],
    stateChanger: [{ type: Output, args: ["onChange",] }],
    beforeChanger: [{ type: Output, args: ["beforeChange",] }],
    activated: [{ type: Input }],
    activatedChange: [{ type: Output }],
    params: [{ type: Input }],
    paramsChange: [{ type: Output }],
    data: [{ type: Input }],
    dataChange: [{ type: Output }],
    query: [{ type: Input }],
    queryChange: [{ type: Output }],
    route: [{ type: Input }],
    routeChange: [{ type: Output }],
    parentRoute: [{ type: Input }],
    parentRouteChange: [{ type: Output }],
    parent: [{ type: Input }],
    parentChange: [{ type: Output }],
    parentData: [{ type: Input }],
    parentDataChange: [{ type: Output }],
    current: [{ type: Input }],
    state: [{ type: Input }],
    stateChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVSZXBvcnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yb3V0ZXIvUm91dGVSZXBvcnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RSxPQUFPLEVBQ0wsY0FBYyxFQUFTLE1BQU0sRUFDOUIsTUFBTSxpQkFBaUIsQ0FBQTtBQUN4QixPQUFPLEVBQ1Msa0JBQWtCLEVBQUUsa0JBQWtCLEVBQ3JELE1BQU0sc0JBQXNCLENBQUE7QUFDN0IsT0FBTztBQUNMLGtCQUFrQjtBQUNsQixhQUFhLEVBQ2QsTUFBTSxpQkFBaUIsQ0FBQztBQUt0QixNQUFNLE9BQU8sYUFBYTtJQWdEM0IsWUFDUyxNQUFhLEVBQ2Isa0JBQXFDLEVBQ3JDLGNBQTZCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBL0NsQixpQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBQy9ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdoRCxvQkFBZSxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2pFLGlCQUFZLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHbkQsZUFBVSxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2pELGdCQUFXLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHbEQsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUlsRCxzQkFBaUIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUcxRCxpQkFBWSxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzlELHFCQUFnQixHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBT3pELGdCQUFXLEdBQThCLElBQUksWUFBWSxFQUFFLENBQUE7UUFnQm5FLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFBO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtJQUNkLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUVsRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFBLEVBQUU7WUFDckQsNENBQTRDO1lBQzVDLElBQUcsS0FBSyxDQUFDLFdBQVcsS0FBSyxhQUFhLEVBQUM7Z0JBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBRSxDQUFBO2dCQUVsRCwrREFBK0Q7Z0JBQy9ELElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDWiwwQkFBMEI7Z0JBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7YUFDeEM7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFBLEVBQUUsQ0FDdkMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBQyxJQUFJLENBQUMsQ0FDckMsQ0FBQTtTQUNGO1FBRUQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQzlFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUVaLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtZQUVYLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjtpQkFDdEMsY0FBYyxDQUFDLFdBQVc7aUJBQzFCLFNBQVMsQ0FBRSxLQUFLLENBQUEsRUFBRSxDQUFBLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFFLENBQUE7UUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFHLElBQUksQ0FBQyxNQUFNLEVBQUM7WUFDYixJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUNWLEtBQUssRUFBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTztnQkFDckMsTUFBTSxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsTUFBTTtnQkFDN0MsT0FBTyxFQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPO2FBQ3hDLENBQUMsQ0FBQTtTQUNIO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsa0JBQWtCLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7UUFFaEYsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUE7U0FDNUI7SUFDSCxDQUFDO0lBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFtQkU7SUFDQSxLQUFLO1FBQ0gsTUFBTSxPQUFPLEdBQUcsa0JBQWtCLENBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBRSxDQUFBO1FBRXpELElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUMzQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQTtRQUN0QixJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQTtRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUE7UUFDdkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxJQUFJLEVBQUUsQ0FBQTtRQUNsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQTtRQUVyQyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFBO1FBRTdCLElBQUksTUFBTSxFQUFFO1lBQ1YsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQTtZQUM1QixNQUFNLEVBQUUsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFBO1lBRWhDLElBQUksQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFBO1lBQ3pCLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFBO1lBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQTtTQUM5QjtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFFLENBQUE7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsRUFBRSxDQUFBO1FBRXBELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUUsQ0FBQTtRQUN2QyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUUsQ0FBQTtRQUNoQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxPQUFPLENBQUMsY0FBYyxDQUFFLENBQUE7UUFFbkQsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBRSxDQUFBO1FBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFFLENBQUE7UUFFM0MsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQTtRQUU3QixJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDNUIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQTtZQUVoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFBO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFBO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFBO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFZLEVBQUUsTUFBVztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVksRUFBRSxNQUFXO1FBQy9CLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLENBQUM7OztZQW5MRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFDLGVBQWU7YUFDekI7OztZQWJ3QixNQUFNO1lBR2Ysa0JBQWtCO1lBSGhDLGNBQWM7OztxQkFlYixLQUFLOzJCQUVMLE1BQU0sU0FBQyxVQUFVOzRCQUNqQixNQUFNLFNBQUMsY0FBYzt3QkFFckIsS0FBSzs4QkFDTCxNQUFNO3FCQUVOLEtBQUs7MkJBQ0wsTUFBTTttQkFFTixLQUFLO3lCQUNMLE1BQU07b0JBRU4sS0FBSzswQkFDTCxNQUFNO29CQUVOLEtBQUs7MEJBQ0wsTUFBTTswQkFHSixLQUFLO2dDQUNMLE1BQU07cUJBRU4sS0FBSzsyQkFDTCxNQUFNO3lCQUVOLEtBQUs7K0JBQ0wsTUFBTTtzQkFLUixLQUFLO29CQUNMLEtBQUs7MEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzXCJcbmltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHtcbiAgQWN0aXZhdGVkUm91dGUsIFJvdXRlLCBSb3V0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiXG5pbXBvcnQge1xuICBjdXJyZW50Um91dGUsIFJvdXRlV2F0Y2hSZXBvcnRlciwgZ2V0Q3VycmVudEJ5QWN0aXZlXG59IGZyb20gXCIuL1JvdXRlV2F0Y2hSZXBvcnRlclwiXG5pbXBvcnQge1xuICAvL05hdmlnYXRpb25TdGFydCxcbiAgTmF2aWdhdGlvbkVuZFxufSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJyb3V0ZS1yZXBvcnRlclwiLFxuICBleHBvcnRBczpcIlJvdXRlUmVwb3J0ZXJcIlxufSkgZXhwb3J0IGNsYXNzIFJvdXRlUmVwb3J0ZXJ7XG4gIC8vZGVwcmVjYXRlZFxuICBASW5wdXQoKSBvbkxvYWQ6IGFueVxuXG4gIEBPdXRwdXQoXCJvbkNoYW5nZVwiKSBzdGF0ZUNoYW5nZXI6IEV2ZW50RW1pdHRlcjxSb3V0ZVdhdGNoUmVwb3J0ZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBPdXRwdXQoXCJiZWZvcmVDaGFuZ2VcIikgYmVmb3JlQ2hhbmdlciA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIGFjdGl2YXRlZCE6IEFjdGl2YXRlZFJvdXRlLy9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBhY3RpdmF0ZWRDaGFuZ2U6RXZlbnRFbWl0dGVyPEFjdGl2YXRlZFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHBhcmFtczphbnkvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHBhcmFtc0NoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIGRhdGE6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgcXVlcnk6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBxdWVyeUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHJvdXRlITogUm91dGUvL2lnbm9yZWQgaW5cbiAgQE91dHB1dCgpIHJvdXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvKiBwYXJlbnQgYmluZGluZ3MgKi9cbiAgICBASW5wdXQoKSBwYXJlbnRSb3V0ZSE6IFJvdXRlLy9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudFJvdXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAgIEBJbnB1dCgpIHBhcmVudCE6IEFjdGl2YXRlZFJvdXRlLy9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudENoYW5nZTpFdmVudEVtaXR0ZXI8QWN0aXZhdGVkUm91dGU+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgICBASW5wdXQoKSBwYXJlbnREYXRhOmFueS8vaWdub3JlZCBpblxuICAgIEBPdXRwdXQoKSBwYXJlbnREYXRhQ2hhbmdlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIC8qIGVuZDogcGFyZW50IGJpbmRpbmdzICovXG5cblxuICAvL2RlcHJlY2F0ZWRcbiAgQElucHV0KCkgY3VycmVudCE6IGN1cnJlbnRSb3V0ZVxuICBASW5wdXQoKSBzdGF0ZSE6IGN1cnJlbnRSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGN1cnJlbnRSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAkZG9jdW1lbnRcbiAgJHNjb3BlOiBhbnlcblxuICAvKnN0YXRpYyBwYXJhbWV0ZXJzID0gW1tcbiAgICBSb3V0ZVdhdGNoUmVwb3J0ZXJcbiAgXV0qL1xuICBkb2NDYWxsYmFja3M6IGFueVxuICBxdWVyeVN1YiE6IFN1YnNjcmlwdGlvblxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBSb3V0ZXI6Um91dGVyLFxuICAgIHB1YmxpYyBSb3V0ZVdhdGNoUmVwb3J0ZXI6Um91dGVXYXRjaFJlcG9ydGVyLFxuICAgIHB1YmxpYyBBY3RpdmF0ZWRSb3V0ZTpBY3RpdmF0ZWRSb3V0ZVxuICApe1xuICAgIHRoaXMuJGRvY3VtZW50ID0gZG9jdW1lbnRcbiAgICB0aGlzLmFwcGx5KClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5kb2NDYWxsYmFja3MgPSB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5nZXREb2N1bWVudENhbGxiYWNrcygpXG5cbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZShldmVudD0+e1xuICAgICAgLy9pZihldmVudC5jb25zdHJ1Y3RvciA9PSBOYXZpZ2F0aW9uU3RhcnQpe31cbiAgICAgIGlmKGV2ZW50LmNvbnN0cnVjdG9yID09PSBOYXZpZ2F0aW9uRW5kKXtcbiAgICAgICAgdGhpcy5iZWZvcmVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcblxuICAgICAgICAvL2FsbG93IG9uZSBwcm9jZXNzIHRvIG9jY3VyIGJlZm9yZSByZXBvcnRpbmcgc3RhdGUgaGFzIGNoYW5nZWRcbiAgICAgICAgdGhpcy5hcHBseSgpXG4gICAgICAgIC8vdGhpcy5hZGRSb3V0ZVRvSGlzdG9yeSgpXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMuZW1pdCgpKVxuICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApe1xuICAgICAgdGhpcy5BY3RpdmF0ZWRSb3V0ZS5kYXRhLnN1YnNjcmliZShkYXRhPT5cbiAgICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhPWRhdGEpXG4gICAgICApXG4gICAgfVxuXG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIud2F0Y2hEb2NCeUNhbGxiYWNrcyh0aGlzLiRkb2N1bWVudCwgdGhpcy5kb2NDYWxsYmFja3MpXG4gICAgdGhpcy5hcHBseSgpXG5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLmVtaXQoKVxuXG4gICAgICB0aGlzLnF1ZXJ5U3ViID0gdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXJcbiAgICAgIC5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtc1xuICAgICAgLnN1YnNjcmliZSggcXVlcnk9PnRoaXMucXVlcnlDaGFuZ2UuZW1pdChxdWVyeSkgKVxuICAgIH0pXG5cbiAgICBpZih0aGlzLm9uTG9hZCl7XG4gICAgICB0aGlzLm9uTG9hZCh7XG4gICAgICAgIHN0YXRlOnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnQsXG4gICAgICAgIHBhcmFtczp0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5jdXJyZW50LnBhcmFtcyxcbiAgICAgICAgY3VycmVudDp0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci5jdXJyZW50XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIudW53YXRjaERvY0J5Q2FsbGJhY2tzKHRoaXMuJGRvY3VtZW50LCB0aGlzLmRvY0NhbGxiYWNrcylcblxuICAgIGlmKCB0aGlzLnF1ZXJ5U3ViICl7XG4gICAgICB0aGlzLnF1ZXJ5U3ViLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gIH1cbi8qXG4gIGFkZFJvdXRlVG9IaXN0b3J5KCk6dm9pZHtcbiAgICBpZighdGhpcy5yb3V0ZUhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnk9W11cbiAgICB9XG5cbiAgICBjb25zdCBwcmlvclBhZ2UgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggLSAxXG4gICAgaWYodGhpcy5Sb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlSGlzdG9yeVsgcHJpb3JQYWdlIF0pe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc2hpZnQoKVxuICAgIH1cblxuICAgIC8vb2xkZXN0IHRvIHJlY2VudCBCVVQgZW1haWxlZCBhcyByZWNlbnQgdG8gb2xkZXN0XG4gICAgdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gIH1cbiovXG4gIGFwcGx5KCl7XG4gICAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApXG5cbiAgICB0aGlzLnJvdXRlID0gY3VycmVudC5jb25maWdcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50XG4gICAgdGhpcy5zdGF0ZSA9IGN1cnJlbnRcbiAgICB0aGlzLmFjdGl2YXRlZCA9IGN1cnJlbnQuQWN0aXZhdGVkUm91dGVcbiAgICB0aGlzLnBhcmFtcyA9IGN1cnJlbnQucGFyYW1zIHx8IHt9XG4gICAgdGhpcy5kYXRhID0gY3VycmVudC5jb25maWcuZGF0YSB8fCB7fVxuXG4gICAgY29uc3QgcGFyZW50ID0gY3VycmVudC5wYXJlbnRcblxuICAgIGlmKCBwYXJlbnQgKXtcbiAgICAgIGNvbnN0IGNvbmZpZyA9IHBhcmVudC5jb25maWdcbiAgICAgIGNvbnN0IGFyID0gcGFyZW50LkFjdGl2YXRlZFJvdXRlXG5cbiAgICAgIHRoaXMucGFyZW50Um91dGUgPSBjb25maWdcbiAgICAgIHRoaXMucGFyZW50ID0gYXJcbiAgICAgIHRoaXMucGFyZW50RGF0YSA9IGNvbmZpZy5kYXRhXG4gICAgfVxuICB9XG5cbiAgZW1pdCgpe1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuZ2V0Q3VycmVudCgpXG5cbiAgICB0aGlzLnJvdXRlQ2hhbmdlLmVtaXQoIGN1cnJlbnQuY29uZmlnIClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQoIGN1cnJlbnQgKVxuICAgIHRoaXMuYWN0aXZhdGVkQ2hhbmdlLmVtaXQoIGN1cnJlbnQuQWN0aXZhdGVkUm91dGUgKVxuXG4gICAgdGhpcy5wYXJhbXNDaGFuZ2UuZW1pdCggY3VycmVudC5wYXJhbXMgKVxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KCBjdXJyZW50LmNvbmZpZy5kYXRhIClcblxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnQucGFyZW50XG5cbiAgICBpZiggcGFyZW50ICl7XG4gICAgICBjb25zdCBjb25maWcgPSBwYXJlbnQuY29uZmlnXG4gICAgICBjb25zdCBhciA9IHBhcmVudC5BY3RpdmF0ZWRSb3V0ZVxuXG4gICAgICB0aGlzLnBhcmVudFJvdXRlQ2hhbmdlLmVtaXQoIGNvbmZpZyApXG4gICAgICB0aGlzLnBhcmVudENoYW5nZS5lbWl0KCBhciApXG4gICAgICB0aGlzLnBhcmVudERhdGFDaGFuZ2UuZW1pdCggY29uZmlnLmRhdGEgKVxuICAgIH1cbiAgfVxuXG4gIGdvQmFja1RvKG5hbWU6IHN0cmluZywgcGFyYW1zOiBhbnkpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmdvQmFja1RvKG5hbWUsIHBhcmFtcylcbiAgfVxuXG4gIHRyeUJhY2sobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSl7XG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIudHJ5QmFjayhuYW1lLCBwYXJhbXMpXG4gIH1cbn1cbiJdfQ==