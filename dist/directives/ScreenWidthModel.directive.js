import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
let ScreenWidthModel = class ScreenWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize
            || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.screenWidthModel !== window.innerWidth;
    }
    updateModel() {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], ScreenWidthModel.prototype, "screenWidthModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ScreenWidthModel.prototype, "screenWidthModelChange", void 0);
ScreenWidthModel = __decorate([
    Directive({
        selector: '[screenWidthModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeService])
], ScreenWidthModel);
export { ScreenWidthModel };
