//import { Subscription } from "rxjs/internal/Subscription"
import { Injectable, Output, EventEmitter } from "@angular/core";
var HtmlSizeService = /** @class */ (function () {
    function HtmlSizeService() {
        var _this = this;
        this.change = new EventEmitter();
        this.htmlSize = { width: null, height: null };
        this.onResize = function () {
            _this.htmlSize.width = window.document.documentElement.clientWidth;
            _this.htmlSize.height = window.document.documentElement.clientHeight;
            _this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    HtmlSizeService.prototype.checkWatchers = function () {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
            //window.addEventListener('scroll', this.onResize)
        }
        else {
            window.removeEventListener('resize', this.onResize);
            //window.removeEventListener('scroll', this.onResize)
        }
    };
    HtmlSizeService.decorators = [
        { type: Injectable }
    ];
    HtmlSizeService.ctorParameters = function () { return []; };
    HtmlSizeService.propDecorators = {
        change: [{ type: Output }]
    };
    return HtmlSizeService;
}());
export { HtmlSizeService };
//# sourceMappingURL=HtmlSizeWatcher.js.map