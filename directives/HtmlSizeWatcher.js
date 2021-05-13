"use strict";
//import { Subscription } from "rxjs/internal/Subscription"
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlSizeService = void 0;
var core_1 = require("@angular/core");
var HtmlSizeService = /** @class */ (function () {
    function HtmlSizeService() {
        var _this = this;
        this.change = new core_1.EventEmitter();
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
        { type: core_1.Injectable }
    ];
    HtmlSizeService.ctorParameters = function () { return []; };
    HtmlSizeService.propDecorators = {
        change: [{ type: core_1.Output }]
    };
    return HtmlSizeService;
}());
exports.HtmlSizeService = HtmlSizeService;
//# sourceMappingURL=HtmlSizeWatcher.js.map