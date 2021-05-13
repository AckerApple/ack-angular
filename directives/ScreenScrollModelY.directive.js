"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScreenScrollModelY = void 0;
var core_1 = require("@angular/core");
var ScreenScrollModelY = /** @class */ (function () {
    function ScreenScrollModelY() {
        var _this = this;
        this.screenScrollModelYChange = new core_1.EventEmitter();
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
        { type: core_1.Directive, args: [{
                    selector: '[screenScrollModelY]',
                    exportAs: 'ScreenScrollModelY'
                },] }
    ];
    ScreenScrollModelY.ctorParameters = function () { return []; };
    ScreenScrollModelY.propDecorators = {
        screenScrollModelY: [{ type: core_1.Input }],
        screenScrollModelYChange: [{ type: core_1.Output }]
    };
    return ScreenScrollModelY;
}());
exports.ScreenScrollModelY = ScreenScrollModelY;
//# sourceMappingURL=ScreenScrollModelY.directive.js.map