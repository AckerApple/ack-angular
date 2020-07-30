import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            else {
                setTimeout(() => this.update(), this.focusOnDelay);
            }
        }
    }
    update() {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    }
}
FocusOn.decorators = [
    { type: Directive, args: [{
                selector: '[focusOn]'
            },] }
];
FocusOn.ctorParameters = () => [
    { type: ElementRef }
];
FocusOn.propDecorators = {
    focusOn: [{ type: Input }],
    focusOnDelay: [{ type: Input }],
    focusThen: [{ type: Output }]
};
