import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RouteWatchReporter, getCurrentByActive } from "./RouteWatchReporter";
import { NavigationEnd } from "@angular/router";
let RouteReporter = class RouteReporter {
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
            if (event.constructor === NavigationEnd) {
                this.beforeChanger.emit(this.RouteWatchReporter);
                this.apply();
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
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "onLoad", void 0);
__decorate([
    Output("onChange"),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "stateChanger", void 0);
__decorate([
    Output("beforeChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "beforeChanger", void 0);
__decorate([
    Input(),
    __metadata("design:type", ActivatedRoute)
], RouteReporter.prototype, "activated", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "activatedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "params", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "paramsChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "data", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "dataChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "query", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "queryChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "route", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "routeChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentRoute", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "parentRouteChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", ActivatedRoute)
], RouteReporter.prototype, "parent", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "parentChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentData", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "parentDataChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "current", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "state", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], RouteReporter.prototype, "stateChange", void 0);
RouteReporter = __decorate([
    Directive({
        selector: "route-reporter",
        exportAs: "RouteReporter"
    }),
    __metadata("design:paramtypes", [Router,
        RouteWatchReporter,
        ActivatedRoute])
], RouteReporter);
export { RouteReporter };
