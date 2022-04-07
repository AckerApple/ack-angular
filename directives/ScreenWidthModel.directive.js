import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { 
//htmlSize,
HtmlSizeService } from "./HtmlSizeWatcher";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
var ScreenWidthModel = /** @class */ (function () {
    function ScreenWidthModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    ScreenWidthModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize
            || !this.hasChanged())
            return;
        this.updateModel();
    };
    ScreenWidthModel.prototype.hasChanged = function () {
        return this.screenWidthModel !== window.innerWidth;
    };
    ScreenWidthModel.prototype.updateModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.ɵfac = function ScreenWidthModel_Factory(t) { return new (t || ScreenWidthModel)(i0.ɵɵdirectiveInject(i1.HtmlSizeService)); };
    ScreenWidthModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ScreenWidthModel, selectors: [["", "screenWidthModel", ""]], inputs: { screenWidthModel: "screenWidthModel" }, outputs: { screenWidthModelChange: "screenWidthModelChange" } });
    return ScreenWidthModel;
}());
export { ScreenWidthModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ScreenWidthModel, [{
        type: Directive,
        args: [{
                selector: '[screenWidthModel]'
            }]
    }], function () { return [{ type: i1.HtmlSizeService }]; }, { screenWidthModel: [{
            type: Input
        }], screenWidthModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ScreenWidthModel.directive.js.map