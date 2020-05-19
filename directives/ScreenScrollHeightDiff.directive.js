import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
let ScreenScrollHeightDiff = class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new EventEmitter();
        this.on = () => {
            this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    apply() {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiff", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiffChange", void 0);
ScreenScrollHeightDiff = __decorate([
    Directive({
        selector: '[screenScrollHeightDiff]'
    }),
    __metadata("design:paramtypes", [])
], ScreenScrollHeightDiff);
export { ScreenScrollHeightDiff };
