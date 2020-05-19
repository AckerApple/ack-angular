import { __decorate, __metadata } from "tslib";
import { Directive, Output, EventEmitter } from "@angular/core";
let ScreenScroll = class ScreenScroll {
    constructor() {
        this.screenScroll = new EventEmitter();
        this.onScroll = () => this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll());
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
};
__decorate([
    Output(),
    __metadata("design:type", Object)
], ScreenScroll.prototype, "screenScroll", void 0);
ScreenScroll = __decorate([
    Directive({
        selector: '[screenScroll]'
    }),
    __metadata("design:paramtypes", [])
], ScreenScroll);
export { ScreenScroll };
