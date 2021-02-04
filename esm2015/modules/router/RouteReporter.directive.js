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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm91dGVSZXBvcnRlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9yb3V0ZXIvUm91dGVSZXBvcnRlci5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUN0RSxPQUFPLEVBQ0wsY0FBYyxFQUFTLE1BQU0sRUFDOUIsTUFBTSxpQkFBaUIsQ0FBQTtBQUN4QixPQUFPLEVBQ1Msa0JBQWtCLEVBQUUsa0JBQWtCLEVBQ3JELE1BQU0sc0JBQXNCLENBQUE7QUFDN0IsT0FBTztBQUNMLGtCQUFrQjtBQUNsQixhQUFhLEVBQ2QsTUFBTSxpQkFBaUIsQ0FBQztBQUt0QixNQUFNLE9BQU8sYUFBYTtJQWdEM0IsWUFDUyxNQUFhLEVBQ2Isa0JBQXFDLEVBQ3JDLGNBQTZCO1FBRjdCLFdBQU0sR0FBTixNQUFNLENBQU87UUFDYix1QkFBa0IsR0FBbEIsa0JBQWtCLENBQW1CO1FBQ3JDLG1CQUFjLEdBQWQsY0FBYyxDQUFlO1FBL0NsQixpQkFBWSxHQUFxQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBQy9ELGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdoRCxvQkFBZSxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2pFLGlCQUFZLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHbkQsZUFBVSxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBR2pELGdCQUFXLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHbEQsZ0JBQVcsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUlsRCxzQkFBaUIsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUcxRCxpQkFBWSxHQUFnQyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzlELHFCQUFnQixH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QUFHLE1BQU0sQ0FBQyxNQUFNLENBQUE7WUFDNUIsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQTtZQUVoQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFFLE1BQU0sQ0FBRSxDQUFBO1lBQ3JDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFFLEVBQUUsQ0FBRSxDQUFBO1lBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUUsTUFBTSxDQUFDLElBQUksQ0FBRSxDQUFBO1NBQzFDO0lBQ0gsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTTtRQUNuQixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQTtJQUNoRCxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQUksRUFBRSxNQUFNO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0lBQy9DLENBQUM7OztZQW5MRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsUUFBUSxFQUFDLGVBQWU7YUFDekI7OztZQWJ3QixNQUFNO1lBR2Ysa0JBQWtCO1lBSGhDLGNBQWM7OztxQkFlYixLQUFLOzJCQUVMLE1BQU0sU0FBQyxVQUFVOzRCQUNqQixNQUFNLFNBQUMsY0FBYzt3QkFFckIsS0FBSzs4QkFDTCxNQUFNO3FCQUVOLEtBQUs7MkJBQ0wsTUFBTTttQkFFTixLQUFLO3lCQUNMLE1BQU07b0JBRU4sS0FBSzswQkFDTCxNQUFNO29CQUVOLEtBQUs7MEJBQ0wsTUFBTTswQkFHSixLQUFLO2dDQUNMLE1BQU07cUJBRU4sS0FBSzsyQkFDTCxNQUFNO3lCQUVOLEtBQUs7K0JBQ0wsTUFBTTtzQkFLUixLQUFLO29CQUNMLEtBQUs7MEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvblwiXG5pbXBvcnQgeyBEaXJlY3RpdmUsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7XG4gIEFjdGl2YXRlZFJvdXRlLCBSb3V0ZSwgUm91dGVyXG59IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIlxuaW1wb3J0IHtcbiAgY3VycmVudFJvdXRlLCBSb3V0ZVdhdGNoUmVwb3J0ZXIsIGdldEN1cnJlbnRCeUFjdGl2ZVxufSBmcm9tIFwiLi9Sb3V0ZVdhdGNoUmVwb3J0ZXJcIlxuaW1wb3J0IHtcbiAgLy9OYXZpZ2F0aW9uU3RhcnQsXG4gIE5hdmlnYXRpb25FbmRcbn0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwicm91dGUtcmVwb3J0ZXJcIixcbiAgZXhwb3J0QXM6XCJSb3V0ZVJlcG9ydGVyXCJcbn0pIGV4cG9ydCBjbGFzcyBSb3V0ZVJlcG9ydGVye1xuICAvL2RlcHJlY2F0ZWRcbiAgQElucHV0KCkgb25Mb2FkXG5cbiAgQE91dHB1dChcIm9uQ2hhbmdlXCIpIHN0YXRlQ2hhbmdlcjogRXZlbnRFbWl0dGVyPFJvdXRlV2F0Y2hSZXBvcnRlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQE91dHB1dChcImJlZm9yZUNoYW5nZVwiKSBiZWZvcmVDaGFuZ2VyID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgQElucHV0KCkgcHVibGljIGFjdGl2YXRlZDpBY3RpdmF0ZWRSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgYWN0aXZhdGVkQ2hhbmdlOkV2ZW50RW1pdHRlcjxBY3RpdmF0ZWRSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBwYXJhbXM6YW55Ly9pZ25vcmVkIGluXG4gIEBPdXRwdXQoKSBwYXJhbXNDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSBkYXRhOmFueS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgZGF0YUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIHF1ZXJ5OmFueS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgcXVlcnlDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBASW5wdXQoKSByb3V0ZTpSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgcm91dGVDaGFuZ2U6RXZlbnRFbWl0dGVyPFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8qIHBhcmVudCBiaW5kaW5ncyAqL1xuICAgIEBJbnB1dCgpIHBhcmVudFJvdXRlOlJvdXRlLy9pZ25vcmVkIGluXG4gICAgQE91dHB1dCgpIHBhcmVudFJvdXRlQ2hhbmdlOkV2ZW50RW1pdHRlcjxSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAgIEBJbnB1dCgpIHBhcmVudDpBY3RpdmF0ZWRSb3V0ZS8vaWdub3JlZCBpblxuICAgIEBPdXRwdXQoKSBwYXJlbnRDaGFuZ2U6RXZlbnRFbWl0dGVyPEFjdGl2YXRlZFJvdXRlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gICAgQElucHV0KCkgcGFyZW50RGF0YTphbnkvL2lnbm9yZWQgaW5cbiAgICBAT3V0cHV0KCkgcGFyZW50RGF0YUNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvKiBlbmQ6IHBhcmVudCBiaW5kaW5ncyAqL1xuXG5cbiAgLy9kZXByZWNhdGVkXG4gIEBJbnB1dCgpIGN1cnJlbnQ6Y3VycmVudFJvdXRlXG4gIEBJbnB1dCgpIHN0YXRlOmN1cnJlbnRSb3V0ZS8vaWdub3JlZCBpblxuICBAT3V0cHV0KCkgc3RhdGVDaGFuZ2U6RXZlbnRFbWl0dGVyPGN1cnJlbnRSb3V0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAkZG9jdW1lbnRcbiAgJHNjb3BlXG5cbiAgLypzdGF0aWMgcGFyYW1ldGVycyA9IFtbXG4gICAgUm91dGVXYXRjaFJlcG9ydGVyXG4gIF1dKi9cbiAgZG9jQ2FsbGJhY2tzXG4gIHF1ZXJ5U3ViOlN1YnNjcmlwdGlvblxuICBcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIFJvdXRlcjpSb3V0ZXIsXG4gICAgcHVibGljIFJvdXRlV2F0Y2hSZXBvcnRlcjpSb3V0ZVdhdGNoUmVwb3J0ZXIsXG4gICAgcHVibGljIEFjdGl2YXRlZFJvdXRlOkFjdGl2YXRlZFJvdXRlXG4gICl7XG4gICAgdGhpcy4kZG9jdW1lbnQgPSBkb2N1bWVudFxuICAgIHRoaXMuYXBwbHkoKVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmRvY0NhbGxiYWNrcyA9IHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmdldERvY3VtZW50Q2FsbGJhY2tzKClcblxuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKGV2ZW50PT57XG4gICAgICAvL2lmKGV2ZW50LmNvbnN0cnVjdG9yID09IE5hdmlnYXRpb25TdGFydCl7fVxuICAgICAgaWYoZXZlbnQuY29uc3RydWN0b3IgPT09IE5hdmlnYXRpb25FbmQpe1xuICAgICAgICB0aGlzLmJlZm9yZUNoYW5nZXIuZW1pdCggdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIgKVxuXG4gICAgICAgIC8vYWxsb3cgb25lIHByb2Nlc3MgdG8gb2NjdXIgYmVmb3JlIHJlcG9ydGluZyBzdGF0ZSBoYXMgY2hhbmdlZFxuICAgICAgICB0aGlzLmFwcGx5KClcbiAgICAgICAgLy90aGlzLmFkZFJvdXRlVG9IaXN0b3J5KClcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5lbWl0KCkpXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmKCB0aGlzLkFjdGl2YXRlZFJvdXRlICl7XG4gICAgICB0aGlzLkFjdGl2YXRlZFJvdXRlLmRhdGEuc3Vic2NyaWJlKGRhdGE9PlxuICAgICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGE9ZGF0YSlcbiAgICAgIClcbiAgICB9XG5cbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci53YXRjaERvY0J5Q2FsbGJhY2tzKHRoaXMuJGRvY3VtZW50LCB0aGlzLmRvY0NhbGxiYWNrcylcbiAgICB0aGlzLmFwcGx5KClcblxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIHRoaXMuZW1pdCgpXG5cbiAgICAgIHRoaXMucXVlcnlTdWIgPSB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlclxuICAgICAgLmFjdGl2YXRlZFJvdXRlLnF1ZXJ5UGFyYW1zXG4gICAgICAuc3Vic2NyaWJlKCBxdWVyeT0+dGhpcy5xdWVyeUNoYW5nZS5lbWl0KHF1ZXJ5KSApXG4gICAgfSlcblxuICAgIGlmKHRoaXMub25Mb2FkKXtcbiAgICAgIHRoaXMub25Mb2FkKHtcbiAgICAgICAgc3RhdGU6dGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuY3VycmVudCxcbiAgICAgICAgcGFyYW1zOnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnQucGFyYW1zLFxuICAgICAgICBjdXJyZW50OnRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLmN1cnJlbnRcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLlJvdXRlV2F0Y2hSZXBvcnRlci51bndhdGNoRG9jQnlDYWxsYmFja3ModGhpcy4kZG9jdW1lbnQsIHRoaXMuZG9jQ2FsbGJhY2tzKVxuICAgIFxuICAgIGlmKCB0aGlzLnF1ZXJ5U3ViICl7XG4gICAgICB0aGlzLnF1ZXJ5U3ViLnVuc3Vic2NyaWJlKClcbiAgICB9XG4gIH1cbi8qXG4gIGFkZFJvdXRlVG9IaXN0b3J5KCk6dm9pZHtcbiAgICBpZighdGhpcy5yb3V0ZUhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnk9W11cbiAgICB9XG5cbiAgICBjb25zdCBwcmlvclBhZ2UgPSB0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggLSAxXG4gICAgaWYodGhpcy5Sb3V0ZXIudXJsID09PSB0aGlzLnJvdXRlSGlzdG9yeVsgcHJpb3JQYWdlIF0pe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy9yZW1vdmUgb2xkIGVudHJpZXNcbiAgICB3aGlsZSh0aGlzLnJvdXRlSGlzdG9yeS5sZW5ndGggPiB0aGlzLm1heEhpc3Rvcnkpe1xuICAgICAgdGhpcy5yb3V0ZUhpc3Rvcnkuc2hpZnQoKVxuICAgIH1cblxuICAgIC8vb2xkZXN0IHRvIHJlY2VudCBCVVQgZW1haWxlZCBhcyByZWNlbnQgdG8gb2xkZXN0XG4gICAgdGhpcy5yb3V0ZUhpc3RvcnkucHVzaCh0aGlzLlJvdXRlci51cmwpXG4gIH1cbiovXG4gIGFwcGx5KCl7XG4gICAgY29uc3QgY3VycmVudCA9IGdldEN1cnJlbnRCeUFjdGl2ZSggdGhpcy5BY3RpdmF0ZWRSb3V0ZSApXG4gICAgXG4gICAgdGhpcy5yb3V0ZSA9IGN1cnJlbnQuY29uZmlnXG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudFxuICAgIHRoaXMuc3RhdGUgPSBjdXJyZW50XG4gICAgdGhpcy5hY3RpdmF0ZWQgPSBjdXJyZW50LkFjdGl2YXRlZFJvdXRlXG4gICAgdGhpcy5wYXJhbXMgPSBjdXJyZW50LnBhcmFtcyB8fCB7fVxuICAgIHRoaXMuZGF0YSA9IGN1cnJlbnQuY29uZmlnLmRhdGEgfHwge31cblxuICAgIGNvbnN0IHBhcmVudCA9IGN1cnJlbnQucGFyZW50XG5cbiAgICBpZiggcGFyZW50ICl7XG4gICAgICBjb25zdCBjb25maWcgPSBwYXJlbnQuY29uZmlnXG4gICAgICBjb25zdCBhciA9IHBhcmVudC5BY3RpdmF0ZWRSb3V0ZVxuXG4gICAgICB0aGlzLnBhcmVudFJvdXRlID0gY29uZmlnXG4gICAgICB0aGlzLnBhcmVudCA9IGFyICAgICAgICBcbiAgICAgIHRoaXMucGFyZW50RGF0YSA9IGNvbmZpZy5kYXRhXG4gICAgfVxuICB9XG5cbiAgZW1pdCgpe1xuICAgIHRoaXMuc3RhdGVDaGFuZ2VyLmVtaXQoIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyIClcbiAgICBjb25zdCBjdXJyZW50ID0gdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuZ2V0Q3VycmVudCgpXG5cbiAgICB0aGlzLnJvdXRlQ2hhbmdlLmVtaXQoIGN1cnJlbnQuY29uZmlnIClcbiAgICB0aGlzLnN0YXRlQ2hhbmdlLmVtaXQoIGN1cnJlbnQgKVxuICAgIHRoaXMuYWN0aXZhdGVkQ2hhbmdlLmVtaXQoIGN1cnJlbnQuQWN0aXZhdGVkUm91dGUgKVxuICAgIFxuICAgIHRoaXMucGFyYW1zQ2hhbmdlLmVtaXQoIGN1cnJlbnQucGFyYW1zIClcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCggY3VycmVudC5jb25maWcuZGF0YSApXG5cbiAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50LnBhcmVudFxuXG4gICAgaWYoIHBhcmVudCApe1xuICAgICAgY29uc3QgY29uZmlnID0gcGFyZW50LmNvbmZpZ1xuICAgICAgY29uc3QgYXIgPSBwYXJlbnQuQWN0aXZhdGVkUm91dGVcblxuICAgICAgdGhpcy5wYXJlbnRSb3V0ZUNoYW5nZS5lbWl0KCBjb25maWcgKSAgICAgICAgXG4gICAgICB0aGlzLnBhcmVudENoYW5nZS5lbWl0KCBhciApXG4gICAgICB0aGlzLnBhcmVudERhdGFDaGFuZ2UuZW1pdCggY29uZmlnLmRhdGEgKVxuICAgIH1cbiAgfVxuXG4gIGdvQmFja1RvKG5hbWUsIHBhcmFtcyl7XG4gICAgdGhpcy5Sb3V0ZVdhdGNoUmVwb3J0ZXIuZ29CYWNrVG8obmFtZSwgcGFyYW1zKVxuICB9XG5cbiAgdHJ5QmFjayhuYW1lLCBwYXJhbXMpe1xuICAgIHRoaXMuUm91dGVXYXRjaFJlcG9ydGVyLnRyeUJhY2sobmFtZSwgcGFyYW1zKVxuICB9XG59XG4iXX0=