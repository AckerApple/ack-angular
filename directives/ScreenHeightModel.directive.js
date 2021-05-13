import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { 
//htmlSize,
HtmlSizeService } from "./HtmlSizeWatcher";
var ScreenHeightModel = /** @class */ (function () {
    function ScreenHeightModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
    }
    ScreenHeightModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            return _this.updateModel();
        });
        this.delayCheck(250);
        this.delayCheck(1500);
    };
    ScreenHeightModel.prototype.delayCheck = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        setTimeout(function () { return _this.updateModel(); }, num); //two way bind often needs init override
    };
    ScreenHeightModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.updateModel();
    };
    ScreenHeightModel.prototype.hasChanged = function () {
        return this.model !== window.innerHeight;
    };
    ScreenHeightModel.prototype.updateModel = function () {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    };
    ScreenHeightModel.decorators = [
        { type: Directive, args: [{
                    selector: '[screenHeightModel]',
                    exportAs: 'ScreenHeightModel'
                },] }
    ];
    ScreenHeightModel.ctorParameters = function () { return [
        { type: 
            //htmlSize,
            HtmlSizeService }
    ]; };
    ScreenHeightModel.propDecorators = {
        model: [{ type: Input, args: ['screenHeightModel',] }],
        modelChange: [{ type: Output, args: ['screenHeightModelChange',] }]
    };
    return ScreenHeightModel;
}());
export { ScreenHeightModel };
//# sourceMappingURL=ScreenHeightModel.directive.js.map