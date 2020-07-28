import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            setTimeout(() => this.update(), this.selectOnDelay);
        }
    }
    update() {
        this.element.nativeElement.select();
        this.selectThen.emit();
    }
}
SelectOn.decorators = [
    { type: Directive, args: [{
                selector: '[selectOn]'
            },] }
];
SelectOn.ctorParameters = () => [
    { type: ElementRef }
];
SelectOn.propDecorators = {
    selectOn: [{ type: Input }],
    selectOnDelay: [{ type: Input }],
    selectThen: [{ type: Output }]
};
