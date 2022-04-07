import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
var HtmlWidthModel = /** @class */ (function () {
    function HtmlWidthModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
        /*if( this.HtmlSizeService.htmlSize ){
          this.changed()
        }*/
    }
    HtmlWidthModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.changed(); }); //two way bind often needs init override
    };
    HtmlWidthModel.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.HtmlSizeService.checkWatchers();
    };
    HtmlWidthModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    HtmlWidthModel.prototype.hasChanged = function () {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    };
    HtmlWidthModel.prototype.setModel = function (htmlSize) {
        this.htmlWidthModel = htmlSize.width;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.ɵfac = function HtmlWidthModel_Factory(t) { return new (t || HtmlWidthModel)(i0.ɵɵdirectiveInject(i1.HtmlSizeService)); };
    HtmlWidthModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: HtmlWidthModel, selectors: [["", "htmlWidthModel", ""]], inputs: { htmlWidthModel: "htmlWidthModel" }, outputs: { htmlWidthModelChange: "htmlWidthModelChange" } });
    return HtmlWidthModel;
}());
export { HtmlWidthModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HtmlWidthModel, [{
        type: Directive,
        args: [{
                selector: '[htmlWidthModel]'
            }]
    }], function () { return [{ type: i1.HtmlSizeService }]; }, { htmlWidthModel: [{
            type: Input
        }], htmlWidthModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=HtmlWidthModel.directive.js.map