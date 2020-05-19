import { __decorate, __metadata } from "tslib";
import { Injectable, Output, EventEmitter } from "@angular/core";
let HtmlSizeService = class HtmlSizeService {
    constructor() {
        this.change = new EventEmitter();
        this.htmlSize = { width: null, height: null };
        this.onResize = () => {
            this.htmlSize.width = window.document.documentElement.clientWidth;
            this.htmlSize.height = window.document.documentElement.clientHeight;
            this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    checkWatchers() {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
        }
        else {
            window.removeEventListener('resize', this.onResize);
        }
    }
};
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], HtmlSizeService.prototype, "change", void 0);
HtmlSizeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], HtmlSizeService);
export { HtmlSizeService };
