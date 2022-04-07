import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
    StatusOfflineModel.ɵfac = function StatusOfflineModel_Factory(t) { return new (t || StatusOfflineModel)(); };
    StatusOfflineModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StatusOfflineModel, selectors: [["", "statusOfflineModel", ""]], inputs: { statusOfflineModel: "statusOfflineModel" }, outputs: { statusOfflineModelChange: "statusOfflineModelChange" } });
    return StatusOfflineModel;
}());
export { StatusOfflineModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusOfflineModel, [{
        type: Directive,
        args: [{ selector: '[statusOfflineModel]' }]
    }], function () { return []; }, { statusOfflineModel: [{
            type: Input
        }], statusOfflineModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=StatusOfflineModel.directive.js.map