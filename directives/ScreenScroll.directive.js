"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenScroll = void 0;
var core_1 = require("@angular/core");
var ScreenScroll = /** @class */ (function () {
    function ScreenScroll() {
        var _this = this;
        this.screenScroll = new core_1.EventEmitter();
        this.onScroll = function () {
            return _this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScroll.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
    };
    ScreenScroll.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScroll.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenScroll]'
                },] }
    ];
    ScreenScroll.ctorParameters = function () { return []; };
    ScreenScroll.propDecorators = {
        screenScroll: [{ type: core_1.Output }]
    };
    return ScreenScroll;
}());
exports.ScreenScroll = ScreenScroll;
//# sourceMappingURL=ScreenScroll.directive.js.map