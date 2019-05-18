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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var router_2 = require("@angular/router");
var RouteReporter = (function () {
    function RouteReporter(RouteWatchReporter, ActivatedRoute) {
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
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        this.RouteWatchReporter.router.events.subscribe(function (event) {
            if (event.constructor === router_2.NavigationEnd) {
                _this.beforeChanger.emit(_this.RouteWatchReporter);
                _this.apply();
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
    RouteReporter.prototype.apply = function () {
        var current = this.RouteWatchReporter.getCurrent();
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
    return RouteReporter;
}());
exports.RouteReporter = RouteReporter;
