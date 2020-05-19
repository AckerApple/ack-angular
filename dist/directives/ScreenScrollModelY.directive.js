import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
let ScreenScrollModelY = class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = () => {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        };
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
    Input(),
    __metadata("design:type", Object)
], ScreenScrollModelY.prototype, "screenScrollModelY", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ScreenScrollModelY.prototype, "screenScrollModelYChange", void 0);
ScreenScrollModelY = __decorate([
    Directive({
        selector: '[screenScrollModelY]',
        exportAs: 'ScreenScrollModelY'
    }),
    __metadata("design:paramtypes", [])
], ScreenScrollModelY);
export { ScreenScrollModelY };
