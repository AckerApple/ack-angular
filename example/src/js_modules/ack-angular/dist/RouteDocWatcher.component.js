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
let RouteDocWatcher = class RouteDocWatcher {
    constructor(RouteWatcher, TransitionService) {
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
        TransitionService.onStart({ to: '*' }, transition => {
            this.beforeChanger.emit(this.RouteWatcher);
        });
        TransitionService.onSuccess({ to: '*' }, transition => {
            //ensure smallest gap in digest occurs for things like animation swapping
            setTimeout(() => this.stateChanger.emit(this.RouteWatcher), 0);
        });
        RouteWatcher.watchDocByCallbacks(this.$document, this.docCallbacks);
    }
    ngOnDestroy() {
        this.RouteWatcher.unwatchDocByCallbacks(this.$document, this.docCallbacks);
    }
    ngOnInit() {
        this.ref = this.RouteWatcher;
        setTimeout(() => this.refChange.emit(this.ref), 0);
        if (this.onLoad) {
            this.onLoad({
                state: this.RouteWatcher.$state.current,
                params: this.RouteWatcher.$state.params,
                current: this.RouteWatcher.$state.current
            });
        }
    }
    goBackTo(name, params) {
        this.RouteWatcher.goBackTo(name, params);
    }
    tryBack(name, params) {
        this.RouteWatcher.tryBack(name, params);
    }
};
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