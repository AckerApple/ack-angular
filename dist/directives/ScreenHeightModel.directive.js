import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
let ScreenHeightModel = class ScreenHeightModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.updateModel());
        this.delayCheck(250);
        this.delayCheck(1500);
    }
    delayCheck(num = 0) {
        setTimeout(() => this.updateModel(), num);
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.model !== window.innerHeight;
    }
    updateModel() {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    }
};
__decorate([
    Input('screenHeightModel'),
    __metadata("design:type", Number)
], ScreenHeightModel.prototype, "model", void 0);
__decorate([
    Output('screenHeightModelChange'),
    __metadata("design:type", EventEmitter)
], ScreenHeightModel.prototype, "modelChange", void 0);
ScreenHeightModel = __decorate([
    Directive({
        selector: '[screenHeightModel]',
        exportAs: 'ScreenHeightModel'
    }),
    __metadata("design:paramtypes", [HtmlSizeService])
], ScreenHeightModel);
export { ScreenHeightModel };
