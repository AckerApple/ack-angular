import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
let HtmlWidthModel = class HtmlWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.changed());
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.HtmlSizeService.checkWatchers();
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    }
    hasChanged() {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    }
    setModel(htmlSize) {
        this.htmlWidthModel = htmlSize.width;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Number)
], HtmlWidthModel.prototype, "htmlWidthModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HtmlWidthModel.prototype, "htmlWidthModelChange", void 0);
HtmlWidthModel = __decorate([
    Directive({
        selector: '[htmlWidthModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeService])
], HtmlWidthModel);
export { HtmlWidthModel };
