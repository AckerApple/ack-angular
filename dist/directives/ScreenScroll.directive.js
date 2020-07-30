import { Directive, Output, EventEmitter } from "@angular/core";
export class ScreenScroll {
    constructor() {
        this.screenScroll = new EventEmitter();
        this.onScroll = () => this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
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
ScreenScroll.decorators = [
    { type: Directive, args: [{
                selector: '[screenScroll]'
            },] }
];
ScreenScroll.ctorParameters = () => [];
ScreenScroll.propDecorators = {
    screenScroll: [{ type: Output }]
};
