import { Injectable, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
    HtmlSizeService.ɵfac = function HtmlSizeService_Factory(t) { return new (t || HtmlSizeService)(); };
    HtmlSizeService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: HtmlSizeService, factory: HtmlSizeService.ɵfac });
    return HtmlSizeService;
}());
export { HtmlSizeService };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(HtmlSizeService, [{
        type: Injectable
    }], function () { return []; }, { change: [{
            type: Output
        }] }); })();
//# sourceMappingURL=HtmlSizeWatcher.js.map