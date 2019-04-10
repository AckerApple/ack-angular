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
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const RouteWatchReporter_1 = require("./RouteWatchReporter");
const router_2 = require("@angular/router");
let RouteReporter = class RouteReporter {
    constructor(RouteWatchReporter, ActivatedRoute) {
        this.RouteWatchReporter = RouteWatchReporter;
        this.ActivatedRoute = ActivatedRoute;
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.activatedChange = new core_1.EventEmitter();
        this.paramsChange = new core_1.EventEmitter();
        this.dataChange = new core_1.EventEmitter();
        this.queryChange = new core_1.EventEmitter();
        this.routeChange = new core_1.EventEmitter();
        this.parentRouteChange = new core_1.EventEmitter();
        this.parentChange = new core_1.EventEmitter();
        this.parentDataChange = new core_1.EventEmitter();
        this.stateChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
        this.apply();
    }
    ngOnInit() {
        this.RouteWatchReporter.router.events.subscribe(event => {
            if (event.constructor === router_2.NavigationEnd) {
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
        const current = this.RouteWatchReporter.getCurrent();
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
RouteReporter.parameters = [[
        RouteWatchReporter_1.RouteWatchReporter
    ]];
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "onLoad", void 0);
__decorate([
    core_1.Output("onChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "stateChanger", void 0);
__decorate([
    core_1.Output("beforeChange"),
    __metadata("design:type", Object)
], RouteReporter.prototype, "beforeChanger", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", router_1.ActivatedRoute)
], RouteReporter.prototype, "activated", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "activatedChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "params", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "paramsChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "data", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "dataChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "query", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "queryChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "route", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "routeChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentRoute", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentRouteChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", router_1.ActivatedRoute)
], RouteReporter.prototype, "parent", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "parentData", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "parentDataChange", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "current", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RouteReporter.prototype, "state", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], RouteReporter.prototype, "stateChange", void 0);
RouteReporter = __decorate([
    core_1.Directive({
        selector: "route-reporter",
        exportAs: "RouteReporter"
    }),
    __metadata("design:paramtypes", [RouteWatchReporter_1.RouteWatchReporter,
        router_1.ActivatedRoute])
], RouteReporter);
exports.RouteReporter = RouteReporter;
