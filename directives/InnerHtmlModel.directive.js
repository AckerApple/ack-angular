import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
var InnerHtmlModel = /** @class */ (function () {
    function InnerHtmlModel(element) {
        var _this = this;
        this.element = element;
        this.innerHtmlModelChange = new EventEmitter();
        this.observer = new MutationObserver(function () { return _this.setModel(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.setModel(); });
    };
    InnerHtmlModel.prototype.setModel = function () {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    };
    InnerHtmlModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    InnerHtmlModel.ɵfac = function InnerHtmlModel_Factory(t) { return new (t || InnerHtmlModel)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    InnerHtmlModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: InnerHtmlModel, selectors: [["", "innerHtmlModel", ""]], inputs: { innerHtmlModel: "innerHtmlModel" }, outputs: { innerHtmlModelChange: "innerHtmlModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    return InnerHtmlModel;
}());
export { InnerHtmlModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InnerHtmlModel, [{
        type: Directive,
        args: [{
                selector: '[innerHtmlModel]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { innerHtmlModel: [{
            type: Input
        }], innerHtmlModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=InnerHtmlModel.directive.js.map