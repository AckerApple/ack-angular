"use strict";
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
    RouteReporter.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "route-reporter",
                    exportAs: "RouteReporter"
                },] },
    ];
    RouteReporter.ctorParameters = function () { return [
        { type: RouteWatchReporter_1.RouteWatchReporter },
        { type: router_1.ActivatedRoute }
    ]; };
    RouteReporter.propDecorators = {
        onLoad: [{ type: core_1.Input }],
        stateChanger: [{ type: core_1.Output, args: ["onChange",] }],
        beforeChanger: [{ type: core_1.Output, args: ["beforeChange",] }],
        activated: [{ type: core_1.Input }],
        activatedChange: [{ type: core_1.Output }],
        params: [{ type: core_1.Input }],
        paramsChange: [{ type: core_1.Output }],
        data: [{ type: core_1.Input }],
        dataChange: [{ type: core_1.Output }],
        query: [{ type: core_1.Input }],
        queryChange: [{ type: core_1.Output }],
        route: [{ type: core_1.Input }],
        routeChange: [{ type: core_1.Output }],
        parentRoute: [{ type: core_1.Input }],
        parentRouteChange: [{ type: core_1.Output }],
        parent: [{ type: core_1.Input }],
        parentChange: [{ type: core_1.Output }],
        parentData: [{ type: core_1.Input }],
        parentDataChange: [{ type: core_1.Output }],
        current: [{ type: core_1.Input }],
        state: [{ type: core_1.Input }],
        stateChange: [{ type: core_1.Output }]
    };
    return RouteReporter;
}());
exports.RouteReporter = RouteReporter;
