//import { Subscription } from "rxjs/internal/Subscription"
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
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
    HtmlHeightModel.decorators = [
        { type: Directive, args: [{
                    selector: '[htmlHeightModel]'
                },] }
    ];
    HtmlHeightModel.ctorParameters = function () { return [
        { type: HtmlSizeService }
    ]; };
    HtmlHeightModel.propDecorators = {
        htmlHeightModel: [{ type: Input }],
        htmlHeightModelChange: [{ type: Output }]
    };
    return HtmlHeightModel;
}(HtmlWidthModel));
export { HtmlHeightModel };
//# sourceMappingURL=HtmlHeightModel.directive.js.map