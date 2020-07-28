import { Directive, Input, Output, EventEmitter } from "@angular/core";
export class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new EventEmitter();
        this.on = () => {
            this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    apply() {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    }
}
ScreenScrollHeightDiff.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollHeightDiff]'
            },] }
];
ScreenScrollHeightDiff.ctorParameters = () => [];
ScreenScrollHeightDiff.propDecorators = {
    screenScrollHeightDiff: [{ type: Input }],
    screenScrollHeightDiffChange: [{ type: Output }]
};
