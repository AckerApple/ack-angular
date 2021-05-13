import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
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
    HtmlWidthModel.decorators = [
        { type: Directive, args: [{
                    selector: '[htmlWidthModel]'
                },] }
    ];
    HtmlWidthModel.ctorParameters = function () { return [
        { type: HtmlSizeService }
    ]; };
    HtmlWidthModel.propDecorators = {
        htmlWidthModel: [{ type: Input }],
        htmlWidthModelChange: [{ type: Output }]
    };
    return HtmlWidthModel;
}());
export { HtmlWidthModel };
//# sourceMappingURL=HtmlWidthModel.directive.js.map