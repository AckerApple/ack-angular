import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { 
//htmlSize,
HtmlSizeService } from "./HtmlSizeWatcher";
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
    ScreenWidthModel.decorators = [
        { type: Directive, args: [{
                    selector: '[screenWidthModel]'
                },] }
    ];
    ScreenWidthModel.ctorParameters = function () { return [
        { type: 
            //htmlSize,
            HtmlSizeService }
    ]; };
    ScreenWidthModel.propDecorators = {
        screenWidthModel: [{ type: Input }],
        screenWidthModelChange: [{ type: Output }]
    };
    return ScreenWidthModel;
}());
export { ScreenWidthModel };
//# sourceMappingURL=ScreenWidthModel.directive.js.map