"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var RouteWatchReporter_1 = require("./RouteWatchReporter");
var router_1 = require("@angular/router");
var RouteReporter = (function () {
    function RouteReporter(RouteWatchReporter) {
        var _this = this;
        this.RouteWatchReporter = RouteWatchReporter;
        this.stateChanger = new core_1.EventEmitter();
        this.beforeChanger = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
        this.stateNameChange = new core_1.EventEmitter();
        this.paramsChange = new core_1.EventEmitter();
        this.dataChange = new core_1.EventEmitter();
        this.queryChange = new core_1.EventEmitter();
        this.stateChange = new core_1.EventEmitter();
        this.$document = document;
        this.docCallbacks = RouteWatchReporter.getDocumentCallbacks();
        RouteWatchReporter.router.events.subscribe(function (event) {
            if (event.constructor == router_1.NavigationEnd) {
                _this.beforeChanger.emit(_this.RouteWatchReporter);
                setTimeout(function () { return _this.emit(); }, 0);
            }
        });
        RouteWatchReporter.watchDocByCallbacks(this.$document, this.docCallbacks);
    }
    RouteReporter.prototype.ngOnInit = function () {
        var _this = this;
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
        if (this.RouteWatchReporter.current) {
            this.stateChange.emit(this.RouteWatchReporter.current);
            if (this.RouteWatchReporter.current.config) {
                var name_1 = this.RouteWatchReporter.current.config.name || this.RouteWatchReporter.current.config.path;
                this.stateNameChange.emit(this.stateName = name_1);
            }
            this.dataChange.emit(this.data = this.RouteWatchReporter.current.config.data);
            this.paramsChange.emit(this.params = this.RouteWatchReporter.current.params);
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
                    selector: 'route-reporter'
                },] },
    ];
    RouteReporter.ctorParameters = function () { return [
        { type: RouteWatchReporter_1.RouteWatchReporter, },
    ]; };
    RouteReporter.propDecorators = {
        "stateChanger": [{ type: core_1.Output, args: ["onChange",] },],
        "beforeChanger": [{ type: core_1.Output, args: ["beforeChange",] },],
        "onLoad": [{ type: core_1.Input },],
        "ref": [{ type: core_1.Input },],
        "refChange": [{ type: core_1.Output },],
        "stateName": [{ type: core_1.Input },],
        "stateNameChange": [{ type: core_1.Output },],
        "params": [{ type: core_1.Input },],
        "paramsChange": [{ type: core_1.Output },],
        "data": [{ type: core_1.Input },],
        "dataChange": [{ type: core_1.Output },],
        "query": [{ type: core_1.Input },],
        "queryChange": [{ type: core_1.Output },],
        "state": [{ type: core_1.Input },],
        "stateChange": [{ type: core_1.Output },],
    };
    return RouteReporter;
}());
exports.RouteReporter = RouteReporter;
