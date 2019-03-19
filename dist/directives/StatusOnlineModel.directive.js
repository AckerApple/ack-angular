"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StatusOnlineModel = (function () {
    function StatusOnlineModel() {
        var _this = this;
        this.statusOnlineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            _this.statusOnlineModel = navigator.onLine;
            _this.statusOnlineModelChange.emit(_this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(function () { return _this.onChange(); });
    }
    StatusOnlineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    };
    StatusOnlineModel.decorators = [
        { type: core_1.Directive, args: [{ selector: '[statusOnlineModel]' },] },
    ];
    StatusOnlineModel.ctorParameters = function () { return []; };
    StatusOnlineModel.propDecorators = {
        statusOnlineModel: [{ type: core_1.Input }],
        statusOnlineModelChange: [{ type: core_1.Output }]
    };
    return StatusOnlineModel;
}());
exports.StatusOnlineModel = StatusOnlineModel;
