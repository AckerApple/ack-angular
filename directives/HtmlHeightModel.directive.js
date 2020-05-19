import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
let HtmlHeightModel = class HtmlHeightModel extends HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], HtmlHeightModel.prototype, "htmlHeightModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HtmlHeightModel.prototype, "htmlHeightModelChange", void 0);
HtmlHeightModel = __decorate([
    Directive({
        selector: '[htmlHeightModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeService])
], HtmlHeightModel);
export { HtmlHeightModel };
