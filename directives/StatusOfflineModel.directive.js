import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
let StatusOfflineModel = class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], StatusOfflineModel.prototype, "statusOfflineModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], StatusOfflineModel.prototype, "statusOfflineModelChange", void 0);
StatusOfflineModel = __decorate([
    Directive({ selector: '[statusOfflineModel]' }),
    __metadata("design:paramtypes", [])
], StatusOfflineModel);
export { StatusOfflineModel };
