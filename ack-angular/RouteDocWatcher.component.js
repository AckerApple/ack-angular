"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
var RouteWatcher_class_1 = require("./RouteWatcher.class");
var RouteDocWatcher = (function () {
    function RouteDocWatcher(RouteWatcher, TransitionService) {
        var _this = this;
        this.RouteWatcher = RouteWatcher;
        this.TransitionService = TransitionService;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatcher.getDocumentCallbacks();
        TransitionService.onStart({ to: '*' }, function (transition) {
            _this.beforeChanger.emit(_this.RouteWatcher);
        });
        TransitionService.onSuccess({ to: '*' }, function (transition) {
            //ensure smallest gap in digest occurs for things like animation swapping
            setTimeout(function () { return _this.stateChanger.emit(_this.RouteWatcher); }, 0);
        });
        RouteWatcher.watchDocByCallbacks(this.$document, this.docCallbacks);
    }
    RouteDocWatcher.prototype.ngOnDestroy = function () {
        this.RouteWatcher.unwatchDocByCallbacks(this.$document, this.docCallbacks);
    };
    RouteDocWatcher.prototype.ngOnInit = function () {
        var _this = this;
        this.ref = this.RouteWatcher;
        setTimeout(function () { return _this.refChange.emit(_this.ref); }, 0);
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatcher.$state.current,
                params: this.RouteWatcher.$state.params,
                current: this.RouteWatcher.$state.current
            });
        }
    };
    RouteDocWatcher.prototype.goBackTo = function (name, params) {
        this.RouteWatcher.goBackTo(name, params);
    };
    RouteDocWatcher.prototype.tryBack = function (name, params) {
        this.RouteWatcher.tryBack(name, params);
    };
    return RouteDocWatcher;
}());
//public RouteWatcher : RouteWatcher
RouteDocWatcher.parameters = [[RouteWatcher_class_1.RouteWatcher], [ui_router_ng2_1.TransitionService]];
RouteDocWatcher.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['ref'],
                selector: 'route-doc-watcher'
            },] },
];
/** @nocollapse */
RouteDocWatcher.ctorParameters = function () { return [
    { type: RouteWatcher_class_1.RouteWatcher, },
    { type: ui_router_ng2_1.TransitionService, },
]; };
RouteDocWatcher.propDecorators = {
    'stateChanger': [{ type: core_1.Output, args: ["onChange",] },],
    'beforeChanger': [{ type: core_1.Output, args: ["beforeChange",] },],
    'onLoad': [{ type: core_1.Input },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
};
exports.RouteDocWatcher = RouteDocWatcher;
//# sourceMappingURL=RouteDocWatcher.component.js.map