"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
var UiRouteWatchReporter_class_1 = require("./UiRouteWatchReporter.class");
var UiRouteReporter = (function () {
    function UiRouteReporter(UiRouteWatchReporter, TransitionService) {
        var _this = this;
        this.UiRouteWatchReporter = UiRouteWatchReporter;
        this.TransitionService = TransitionService;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = UiRouteWatchReporter.getDocumentCallbacks();
        TransitionService.onStart({ to: '*' }, function (transition) {
            _this.beforeChanger.emit(_this.UiRouteWatchReporter);
        });
        TransitionService.onSuccess({ to: '*' }, function (transition) {
            //ensure smallest gap in digest occurs for things like animation swapping
            setTimeout(function () { return _this.stateChanger.emit(_this.UiRouteWatchReporter); }, 0);
        });
        UiRouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
    }
    UiRouteReporter.prototype.ngOnDestroy = function () {
        this.UiRouteWatchReporter.unwatchDocByCallbacks(this.$document, this.docCallbacks);
    };
    UiRouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        this.ref = this.UiRouteWatchReporter;
        setTimeout(function () { return _this.refChange.emit(_this.ref); }, 0);
        if (this.onLoad) {
            this.onLoad({
                state: this.UiRouteWatchReporter.$state.current,
                params: this.UiRouteWatchReporter.$state.params,
                current: this.UiRouteWatchReporter.$state.current
            });
        }
    };
    UiRouteReporter.prototype.goBackTo = function (name, params) {
        this.UiRouteWatchReporter.goBackTo(name, params);
    };
    UiRouteReporter.prototype.tryBack = function (name, params) {
        this.UiRouteWatchReporter.tryBack(name, params);
    };
    return UiRouteReporter;
}());
UiRouteReporter.parameters = [[UiRouteWatchReporter_class_1.UiRouteWatchReporter], [ui_router_ng2_1.TransitionService]];
UiRouteReporter.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['ref'],
                selector: 'ui-route-reporter'
            },] },
];
/** @nocollapse */
UiRouteReporter.ctorParameters = function () { return [
    { type: UiRouteWatchReporter_class_1.UiRouteWatchReporter, },
    { type: ui_router_ng2_1.TransitionService, },
]; };
UiRouteReporter.propDecorators = {
    'stateChanger': [{ type: core_1.Output, args: ["onChange",] },],
    'beforeChanger': [{ type: core_1.Output, args: ["beforeChange",] },],
    'onLoad': [{ type: core_1.Input },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
};
exports.UiRouteReporter = UiRouteReporter;
//# sourceMappingURL=UiRouteReporter.component.js.map