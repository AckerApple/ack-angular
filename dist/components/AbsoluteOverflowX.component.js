import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
export class AbsoluteOverflowX {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    ngOnInit() {
        this.checkDisplay();
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    }
    ngAfterViewInit() {
        this.ElementRef.nativeElement.style.display = 'block';
    }
    checkDisplay() {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    }
}
AbsoluteOverflowX.decorators = [
    { type: Component, args: [{
                selector: 'absolute-overflow-x',
                template: string
            },] }
];
AbsoluteOverflowX.ctorParameters = () => [
    { type: ElementRef }
];
AbsoluteOverflowX.propDecorators = {
    scrollBars: [{ type: Input }],
    wrapClass: [{ type: Input }],
    active: [{ type: Input }],
    overflow: [{ type: Input }]
};
