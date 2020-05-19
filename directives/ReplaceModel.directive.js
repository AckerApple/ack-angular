import { __decorate, __metadata } from "tslib";
import { Input, Output, EventEmitter, Directive } from "@angular/core";
let ReplaceModel = class ReplaceModel {
    constructor() {
        this.replaceModelChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(() => this.run());
        }
    }
    run() {
        const rx = new RegExp(this.replaceExpression, 'gi');
        const oldModel = this.replaceModel;
        const newModel = this.replaceModel.replace(rx, '');
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], ReplaceModel.prototype, "replaceModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ReplaceModel.prototype, "replaceModelChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ReplaceModel.prototype, "replaceExpression", void 0);
ReplaceModel = __decorate([
    Directive({
        selector: '[replaceModel]'
    })
], ReplaceModel);
export { ReplaceModel };
