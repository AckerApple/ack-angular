import { Directive, Input, Output, EventEmitter } from "@angular/core";
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
    StatusOnlineModel.decorators = [
        { type: Directive, args: [{ selector: '[statusOnlineModel]' },] }
    ];
    StatusOnlineModel.ctorParameters = function () { return []; };
    StatusOnlineModel.propDecorators = {
        statusOnlineModel: [{ type: Input }],
        statusOnlineModelChange: [{ type: Output }]
    };
    return StatusOnlineModel;
}());
export { StatusOnlineModel };
//# sourceMappingURL=StatusOnlineModel.directive.js.map