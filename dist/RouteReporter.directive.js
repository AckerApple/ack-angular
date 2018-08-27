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
        this.refChange = new core_1.EventEmitter();
        this.stateNameChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
    }
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
        this.RouteWatchReporter.router.events.subscribe(function (event) {
            if (event.constructor == router_2.NavigationEnd) {
                _this.beforeChanger.emit(_this.RouteWatchReporter);
                setTimeout(function () { return _this.emit(); }, 0);
            }
        });
        if (this.ActivatedRoute) {
            this.ActivatedRoute.data.subscribe(function (data) {
                return _this.dataChange.emit(_this.data = data);
            });
        }
        this.RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
        setTimeout(function () {
            _this.ref = _this.RouteWatchReporter;
            _this.refChange.emit(_this.ref);
            _this.emit();
            if (_this.queryChange.observers.length) {
                _this.querySub = _this.RouteWatchReporter
                    .activatedRoute.queryParams
                    .subscribe(function (query) { return _this.queryChange.emit(query); });
            }
        }, 0);
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
        if (this.queryChange.observers.length) {
            this.querySub.unsubscribe();
        }
    };
    RouteReporter.prototype.emit = function () {
        this.stateChanger.emit(this.RouteWatchReporter);
        var current = this.RouteWatchReporter.getCurrent();
        if (!current)
            return;
        this.route = current.config;
        this.routeChange.emit(current.config);
        this.state = current;
        this.stateChange.emit(current);
        this.activated = current.ActivatedRoute;
        this.activatedChange.emit(current.ActivatedRoute);
        if (current.config) {
            var name_1 = current.config.path;
            this.stateNameChange.emit(this.stateName = name_1);
        }
        this.paramsChange.emit(this.params = current.params);
        this.dataChange.emit(this.data = current.config.data);
        this.parentRoute = current.parent.config;
        this.parentRouteChange.emit(current.parent.config);
        this.parent = current.parent.ActivatedRoute;
        this.parentChange.emit(current.parent.ActivatedRoute);
        this.parentData = current.parent.config.data;
        this.parentDataChange.emit(current.parent.config.data);
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
                    selector: "route-reporter"
                },] },
    ];
    RouteReporter.ctorParameters = function () { return [
        { type: RouteWatchReporter_1.RouteWatchReporter },
        { type: router_1.ActivatedRoute }
    ]; };
    RouteReporter.propDecorators = {
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
        state: [{ type: core_1.Input }],
        stateChange: [{ type: core_1.Output }],
        onLoad: [{ type: core_1.Input }],
        ref: [{ type: core_1.Input }],
        refChange: [{ type: core_1.Output }],
        stateName: [{ type: core_1.Input }],
        stateNameChange: [{ type: core_1.Output }]
    };
    return RouteReporter;
}());
exports.RouteReporter = RouteReporter;
