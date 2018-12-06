"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            _this.statusOfflineModel = !navigator.onLine;
            _this.statusOfflineModelChange.emit(_this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        setTimeout(function () { return _this.onChange(); }, 0);
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    StatusOfflineModel.decorators = [
        { type: core_1.Directive, args: [{ selector: '[statusOfflineModel]' },] },
    ];
    StatusOfflineModel.ctorParameters = function () { return []; };
    StatusOfflineModel.propDecorators = {
        statusOfflineModel: [{ type: core_1.Input }],
        statusOfflineModelChange: [{ type: core_1.Output }]
    };
    return StatusOfflineModel;
}());
exports.StatusOfflineModel = StatusOfflineModel;