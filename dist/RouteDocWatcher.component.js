var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { TransitionService } from "ui-router-ng2";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { RouteWatcher } from "./RouteWatcher.class";
var RouteDocWatcher = (function () {
    function RouteDocWatcher(RouteWatcher, TransitionService) {
        var _this = this;
        this.RouteWatcher = RouteWatcher;
        this.TransitionService = TransitionService;
        //public isBackButton
        //public isNotBackButton
        //public mouseover
        this.stateChanger = new EventEmitter();
        this.beforeChanger = new EventEmitter();
        this.refChange = new EventEmitter();
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
RouteDocWatcher.parameters = [[RouteWatcher], [TransitionService]];
__decorate([
    Output("onChange"),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "stateChanger", void 0);
__decorate([
    Output("beforeChange"),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "beforeChanger", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "onLoad", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "ref", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], RouteDocWatcher.prototype, "refChange", void 0);
RouteDocWatcher = __decorate([
    Component({
        //inputs:['ref'],
        selector: 'route-doc-watcher',
        template: ''
    }),
    __metadata("design:paramtypes", [RouteWatcher, TransitionService])
], RouteDocWatcher);
export { RouteDocWatcher };
//# sourceMappingURL=RouteDocWatcher.component.js.map