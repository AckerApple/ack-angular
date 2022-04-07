import { __extends } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
var HtmlHeightModel = /** @class */ (function (_super) {
    __extends(HtmlHeightModel, _super);
    function HtmlHeightModel(HtmlSizeService) {
        var _this = _super.call(this, HtmlSizeService) || this;
        _this.HtmlSizeService = HtmlSizeService;
        _this.htmlHeightModelChange = new EventEmitter();
        return _this;
    }
    HtmlHeightModel.prototype.hasChanged = function () {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    };
    HtmlHeightModel.prototype.setModel = function (model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.ɵfac = function HtmlHeightModel_Factory(t) { return new (t || HtmlHeightModel)(i0.ɵɵdirectiveInject(i1.HtmlSizeService)); };
    HtmlHeightModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HtmlHeightModel, selectors: [["", "htmlHeightModel", ""]], inputs: { htmlHeightModel: "htmlHeightModel" }, outputs: { htmlHeightModelChange: "htmlHeightModelChange" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return HtmlHeightModel;
}(HtmlWidthModel));
export { HtmlHeightModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HtmlHeightModel, [{
        type: Directive,
        args: [{
                selector: '[htmlHeightModel]'
            }]
    }], function () { return [{ type: i1.HtmlSizeService }]; }, { htmlHeightModel: [{
            type: Input
        }], htmlHeightModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=HtmlHeightModel.directive.js.map