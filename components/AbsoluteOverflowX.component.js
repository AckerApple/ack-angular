import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
var AbsoluteOverflowX = /** @class */ (function () {
    function AbsoluteOverflowX(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    AbsoluteOverflowX.prototype.ngOnInit = function () {
        this.checkDisplay();
    };
    AbsoluteOverflowX.prototype.ngOnChanges = function (changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    };
    AbsoluteOverflowX.prototype.ngAfterViewInit = function () {
        this.ElementRef.nativeElement.style.display = 'block';
    };
    AbsoluteOverflowX.prototype.checkDisplay = function () {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    };
    AbsoluteOverflowX.decorators = [
        { type: Component, args: [{
                    selector: 'absolute-overflow-x',
                    template: string
                },] }
    ];
    AbsoluteOverflowX.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AbsoluteOverflowX.propDecorators = {
        scrollBars: [{ type: Input }],
        wrapClass: [{ type: Input }],
        active: [{ type: Input }],
        overflow: [{ type: Input }]
    };
    return AbsoluteOverflowX;
}());
export { AbsoluteOverflowX };
//# sourceMappingURL=AbsoluteOverflowX.component.js.map