import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let ElementSizeModel = class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new EventEmitter();
    }
    ngAfterViewInit() {
        this.onResize = () => {
            this.setModel();
        };
        window.addEventListener('resize', this.onResize);
        Promise.resolve().then(() => this.setModel());
        this.observer = new MutationObserver(() => {
            this.setModel();
        });
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        setTimeout(() => this.setModel(), 800);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            if (!this.inChange) {
                this.setModel();
            }
        });
    }
    setModel() {
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        Promise.resolve().then(() => {
            this.inChange = false;
        });
    }
    ngOnDestroy() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelWatch", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelChange", void 0);
ElementSizeModel = __decorate([
    Directive({
        selector: '[elementSizeModel]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], ElementSizeModel);
export { ElementSizeModel };
let ElementHeightModel = class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModelChange", void 0);
ElementHeightModel = __decorate([
    Directive({
        selector: '[elementHeightModel]'
    }),
    __metadata("design:paramtypes", [ElementRef])
], ElementHeightModel);
export { ElementHeightModel };
let ElementWidthModel = class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModel", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModelChange", void 0);
ElementWidthModel = __decorate([
    Directive({
        selector: '[elementWidthModel]',
        exportAs: 'ElementWidthModel'
    }),
    __metadata("design:paramtypes", [ElementRef])
], ElementWidthModel);
export { ElementWidthModel };
