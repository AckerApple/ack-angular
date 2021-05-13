import { Directive, Input, Output, EventEmitter } from "@angular/core";
var StatusOfflineModel = /** @class */ (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new EventEmitter();
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
        { type: Directive, args: [{ selector: '[statusOfflineModel]' },] }
    ];
    StatusOfflineModel.ctorParameters = function () { return []; };
    StatusOfflineModel.propDecorators = {
        statusOfflineModel: [{ type: Input }],
        statusOfflineModelChange: [{ type: Output }]
    };
    return StatusOfflineModel;
}());
export { StatusOfflineModel };
//# sourceMappingURL=StatusOfflineModel.directive.js.map