import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
var StatusOnlineModel = /** @class */ (function () {
    function StatusOnlineModel() {
        var _this = this;
        this.statusOnlineModelChange = new EventEmitter();
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
    StatusOnlineModel.ɵfac = function StatusOnlineModel_Factory(t) { return new (t || StatusOnlineModel)(); };
    StatusOnlineModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: StatusOnlineModel, selectors: [["", "statusOnlineModel", ""]], inputs: { statusOnlineModel: "statusOnlineModel" }, outputs: { statusOnlineModelChange: "statusOnlineModelChange" } });
    return StatusOnlineModel;
}());
export { StatusOnlineModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(StatusOnlineModel, [{
        type: Directive,
        args: [{ selector: '[statusOnlineModel]' }]
    }], function () { return []; }, { statusOnlineModel: [{
            type: Input
        }], statusOnlineModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=StatusOnlineModel.directive.js.map