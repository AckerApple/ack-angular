"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StatusOfflineModel = void 0;
var core_1 = require("@angular/core");
var StatusOfflineModel = /** @class */ (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            _this.statusOfflineModel = !navigator.onLine;
            _this.statusOfflineModelChange.emit(_this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(function () { return _this.onChange(); });
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    StatusOfflineModel.decorators = [
        { type: core_1.Directive, args: [{ selector: '[statusOfflineModel]' },] }
    ];
    StatusOfflineModel.ctorParameters = function () { return []; };
    StatusOfflineModel.propDecorators = {
        statusOfflineModel: [{ type: core_1.Input }],
        statusOfflineModelChange: [{ type: core_1.Output }]
    };
    return StatusOfflineModel;
}());
exports.StatusOfflineModel = StatusOfflineModel;
//# sourceMappingURL=StatusOfflineModel.directive.js.map