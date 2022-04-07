import { Input, Output, EventEmitter, Directive } from "@angular/core";
import * as i0 from "@angular/core";
var ReplaceModel = /** @class */ (function () {
    function ReplaceModel() {
        this.replaceModelChange = new EventEmitter();
    }
    ReplaceModel.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(function () { return _this.run(); });
        }
    };
    ReplaceModel.prototype.run = function () {
        var rx = new RegExp(this.replaceExpression, 'gi');
        var oldModel = this.replaceModel;
        var newModel = this.replaceModel.replace(rx, '');
        //no change, nothing to do
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    };
    ReplaceModel.ɵfac = function ReplaceModel_Factory(t) { return new (t || ReplaceModel)(); };
    ReplaceModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ReplaceModel, selectors: [["", "replaceModel", ""]], inputs: { replaceModel: "replaceModel", replaceExpression: "replaceExpression" }, outputs: { replaceModelChange: "replaceModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    return ReplaceModel;
}());
export { ReplaceModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ReplaceModel, [{
        type: Directive,
        args: [{
                selector: '[replaceModel]'
            }]
    }], null, { replaceModel: [{
            type: Input
        }], replaceModelChange: [{
            type: Output
        }], replaceExpression: [{
            type: Input
        }] }); })();
//# sourceMappingURL=ReplaceModel.directive.js.map