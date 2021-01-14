import { Directive, Input, Output, EventEmitter } from "@angular/core";
export class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = () => {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll());
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
}
ScreenScrollModelY.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollModelY]',
                exportAs: 'ScreenScrollModelY'
            },] }
];
ScreenScrollModelY.ctorParameters = () => [];
ScreenScrollModelY.propDecorators = {
    screenScrollModelY: [{ type: Input }],
    screenScrollModelYChange: [{ type: Output }]
};
