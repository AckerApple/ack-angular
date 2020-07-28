import { Injectable, Output, EventEmitter } from "@angular/core";
export class HtmlSizeService {
    constructor() {
        this.change = new EventEmitter();
        this.htmlSize = { width: null, height: null };
        this.onResize = () => {
            this.htmlSize.width = window.document.documentElement.clientWidth;
            this.htmlSize.height = window.document.documentElement.clientHeight;
            this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    checkWatchers() {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
        }
        else {
            window.removeEventListener('resize', this.onResize);
        }
    }
}
HtmlSizeService.decorators = [
    { type: Injectable }
];
HtmlSizeService.ctorParameters = () => [];
HtmlSizeService.propDecorators = {
    change: [{ type: Output }]
};
