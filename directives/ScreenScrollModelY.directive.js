import { Directive, Input, Output, EventEmitter } from "@angular/core";
var ScreenScrollModelY = /** @class */ (function () {
    function ScreenScrollModelY() {
        var _this = this;
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = function () {
            _this.screenScrollModelY = window['pageYOffset'];
            _this.screenScrollModelYChange.emit(_this.screenScrollModelY);
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScrollModelY.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.onScroll(); }); //two way bind often needs init override
    };
    ScreenScrollModelY.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    ScreenScrollModelY.decorators = [
        { type: Directive, args: [{
                    selector: '[screenScrollModelY]',
                    exportAs: 'ScreenScrollModelY'
                },] }
    ];
    ScreenScrollModelY.ctorParameters = function () { return []; };
    ScreenScrollModelY.propDecorators = {
        screenScrollModelY: [{ type: Input }],
        screenScrollModelYChange: [{ type: Output }]
    };
    return ScreenScrollModelY;
}());
export { ScreenScrollModelY };
//# sourceMappingURL=ScreenScrollModelY.directive.js.map