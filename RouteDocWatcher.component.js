"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var ui_router_ng2_1 = require("ui-router-ng2");
var core_1 = require("@angular/core");
var RouteWatcher_class_1 = require("./RouteWatcher.class");
var RouteDocWatcher = (function () {
    function RouteDocWatcher(RouteWatcher, transitionService) {
        var _this = this;
        this.RouteWatcher = RouteWatcher;
        this.transitionService = transitionService;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatcher.getDocumentCallbacks();
        transitionService.onStart({ to: '*' }, function (transition) {
            _this.beforeChanger.emit(_this.RouteWatcher);
        });
        transitionService.onSuccess({ to: '*' }, function (transition) {
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
__decorate([
    core_1.Output("onChange"),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "stateChanger", void 0);
__decorate([
    core_1.Output("beforeChange"),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "beforeChanger", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "onLoad", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "ref", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "refChange", void 0);
RouteDocWatcher = __decorate([
    core_1.Component({
        //inputs:['ref'],
        selector: 'route-doc-watcher',
        template: ''
    }),
    __metadata("design:paramtypes", [Object, Object])
], RouteDocWatcher);
exports.RouteDocWatcher = RouteDocWatcher;
//# sourceMappingURL=RouteDocWatcher.component.js.map