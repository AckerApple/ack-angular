import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class ElementSizeModel {
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
}
ElementSizeModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementSizeModel]'
            },] }
];
ElementSizeModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementSizeModel.propDecorators = {
    elementSizeModelWatch: [{ type: Input }],
    elementSizeModel: [{ type: Input }],
    elementSizeModelChange: [{ type: Output }]
};
export class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
}
ElementHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementHeightModel]'
            },] }
];
ElementHeightModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementHeightModel.propDecorators = {
    elementHeightModel: [{ type: Input }],
    elementHeightModelChange: [{ type: Output }]
};
export class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
}
ElementWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementWidthModel]',
                exportAs: 'ElementWidthModel'
            },] }
];
ElementWidthModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementWidthModel.propDecorators = {
    elementWidthModel: [{ type: Input }],
    elementWidthModelChange: [{ type: Output }]
};
