import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let InnerHtmlModel = class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new EventEmitter();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ngOnChanges() {
        Promise.resolve().then(() => this.setModel());
    }
    setModel() {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModelChange", void 0);
InnerHtmlModel = __decorate([
    Directive({
        selector: '[innerHtmlModel]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], InnerHtmlModel);
export { InnerHtmlModel };
