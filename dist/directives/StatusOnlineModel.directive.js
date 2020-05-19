import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
let StatusOnlineModel = class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModelChange", void 0);
StatusOnlineModel = __decorate([
    Directive({ selector: '[statusOnlineModel]' }),
    __metadata("design:paramtypes", [])
], StatusOnlineModel);
export { StatusOnlineModel };
