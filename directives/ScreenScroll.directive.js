import { Directive, Output, EventEmitter } from "@angular/core";
var ScreenScroll = /** @class */ (function () {
    function ScreenScroll() {
        var _this = this;
        this.screenScroll = new EventEmitter();
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
        { type: Directive, args: [{
                    selector: '[screenScroll]'
                },] }
    ];
    ScreenScroll.ctorParameters = function () { return []; };
    ScreenScroll.propDecorators = {
        screenScroll: [{ type: Output }]
    };
    return ScreenScroll;
}());
export { ScreenScroll };
//# sourceMappingURL=ScreenScroll.directive.js.map