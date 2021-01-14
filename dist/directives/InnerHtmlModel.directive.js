import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class InnerHtmlModel {
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
}
InnerHtmlModel.decorators = [
    { type: Directive, args: [{
                selector: '[innerHtmlModel]'
            },] }
];
InnerHtmlModel.ctorParameters = () => [
    { type: ElementRef }
];
InnerHtmlModel.propDecorators = {
    innerHtmlModel: [{ type: Input }],
    innerHtmlModelChange: [{ type: Output }]
};
