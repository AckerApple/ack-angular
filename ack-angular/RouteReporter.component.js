"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { TransitionService } from "ui-router-ng2";
var core_1 = require("@angular/core");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var router_1 = require("@angular/router");
var RouteReporter = (function () {
    function RouteReporter(RouteWatchReporter) {
        var _this = this;
        this.RouteWatchReporter = RouteWatchReporter;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
        /*TransitionService.onStart({to:'*'}, transition=>{
          this.beforeChanger.emit( this.RouteWatchReporter )
        })
    
        TransitionService.onSuccess({to:'*'}, transition=>{
          //ensure smallest gap in digest occurs for things like animation swapping
          setTimeout(()=>this.stateChanger.emit( this.RouteWatchReporter ), 0)
        })*/
        RouteWatchReporter.router.events.subscribe(function (event) {
            //if(event.constructor == NavigationStart){}
            if (event.constructor == router_1.NavigationEnd) {
                _this.beforeChanger.emit(_this.RouteWatchReporter);
                //allow one process to occur before reporting state has changed
                setTimeout(function () { return _this.stateChanger.emit(_this.RouteWatchReporter); }, 0);
            }
        });
        RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        this.ref = this.RouteWatchReporter;
    }
    RouteReporter.prototype.ngOnDestroy = function () {
        this.RouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
    };
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.refChange.emit(_this.ref); }, 0);
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatchReporter.current,
                params: this.RouteWatchReporter.current.params,
                current: this.RouteWatchReporter.current
            });
        }
    };
    RouteReporter.prototype.goBackTo = function (name, params) {
        this.RouteWatchReporter.goBackTo(name, params);
    };
    RouteReporter.prototype.tryBack = function (name, params) {
        this.RouteWatchReporter.tryBack(name, params);
    };
    return RouteReporter;
}());
RouteReporter.parameters = [[
        RouteWatchReporter_1.RouteWatchReporter
    ]];
RouteReporter.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['ref'],
                selector: 'route-reporter'
            },] },
];
/** @nocollapse */
RouteReporter.ctorParameters = function () { return [
    { type: RouteWatchReporter_1.RouteWatchReporter, },
]; };
RouteReporter.propDecorators = {
    'stateChanger': [{ type: core_1.Output, args: ["onChange",] },],
    'beforeChanger': [{ type: core_1.Output, args: ["beforeChange",] },],
    'onLoad': [{ type: core_1.Input },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
};
exports.RouteReporter = RouteReporter;
//# sourceMappingURL=RouteReporter.component.js.map