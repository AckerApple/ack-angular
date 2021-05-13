import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteWatchReporter, getCurrentByActive } from "./RouteWatchReporter";
import { 
//NavigationStart,
NavigationEnd } from "@angular/router";
var RouteReporter = /** @class */ (function () {
    function RouteReporter(Router, RouteWatchReporter, ActivatedRoute) {
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
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        this.docCallbacks = this.RouteWatchReporter.getDocumentCallbacks();
        this.RouteWatchReporter.router.events.subscribe(function (event) {
            //if(event.constructor == NavigationStart){}
            if (event.constructor === NavigationEnd) {
                _this.beforeChanger.emit(_this.RouteWatchReporter);
                //allow one process to occur before reporting state has changed
                _this.apply();
                //this.addRouteToHistory()
                Promise.resolve().then(function () { return _this.emit(); });
            }
        });
        if (this.ActivatedRoute) {
            this.ActivatedRoute.data.subscribe(function (data) {
                return _this.dataChange.emit(_this.data = data);
            });
        }
        this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        this.apply();
        Promise.resolve().then(function () {
            _this.emit();
            _this.querySub = _this.RouteWatchReporter
                .activatedRoute.queryParams
                .subscribe(function (query) { return _this.queryChange.emit(query); });
        });
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatchReporter.current,
                params: this.RouteWatchReporter.current.params,
                current: this.RouteWatchReporter.current
            });
        }
    };
    RouteReporter.prototype.ngOnDestroy = function () {
        this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
        if (this.querySub) {
            this.querySub.unsubscribe();
        }
    };
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
    RouteReporter.prototype.apply = function () {
        var current = getCurrentByActive(this.ActivatedRoute);
        this.route = current.config;
        this.current = current;
        this.state = current;
        this.activated = current.ActivatedRoute;
        this.params = current.params || {};
        this.data = current.config.data || {};
        var parent = current.parent;
        if (parent) {
            var config = parent.config;
            var ar = parent.ActivatedRoute;
            this.parentRoute = config;
            this.parent = ar;
            this.parentData = config.data;
        }
    };
    RouteReporter.prototype.emit = function () {
        this.stateChanger.emit(this.RouteWatchReporter);
        var current = this.RouteWatchReporter.getCurrent();
        this.routeChange.emit(current.config);
        this.stateChange.emit(current);
        this.activatedChange.emit(current.ActivatedRoute);
        this.paramsChange.emit(current.params);
        this.dataChange.emit(current.config.data);
        var parent = current.parent;
        if (parent) {
            var config = parent.config;
            var ar = parent.ActivatedRoute;
            this.parentRouteChange.emit(config);
            this.parentChange.emit(ar);
            this.parentDataChange.emit(config.data);
        }
    };
    RouteReporter.prototype.goBackTo = function (name, params) {
        this.RouteWatchReporter.goBackTo(name, params);
    };
    RouteReporter.prototype.tryBack = function (name, params) {
        this.RouteWatchReporter.tryBack(name, params);
    };
    RouteReporter.decorators = [
        { type: Directive, args: [{
                    selector: "route-reporter",
                    exportAs: "RouteReporter"
                },] }
    ];
    RouteReporter.ctorParameters = function () { return [
        { type: Router },
        { type: RouteWatchReporter },
        { type: ActivatedRoute }
    ]; };
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
    return RouteReporter;
}());
export { RouteReporter };
//# sourceMappingURL=RouteReporter.directive.js.map