import { Directive, Input, Output, EventEmitter } from "@angular/core";
var ScreenScrollHeightDiff = /** @class */ (function () {
    function ScreenScrollHeightDiff() {
        var _this = this;
        this.screenScrollHeightDiffChange = new EventEmitter();
        this.on = function () {
            _this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    ScreenScrollHeightDiff.prototype.apply = function () {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    };
    ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    };
    ScreenScrollHeightDiff.decorators = [
        { type: Directive, args: [{
                    selector: '[screenScrollHeightDiff]'
                },] }
    ];
    ScreenScrollHeightDiff.ctorParameters = function () { return []; };
    ScreenScrollHeightDiff.propDecorators = {
        screenScrollHeightDiff: [{ type: Input }],
        screenScrollHeightDiffChange: [{ type: Output }]
    };
    return ScreenScrollHeightDiff;
}());
export { ScreenScrollHeightDiff };
//# sourceMappingURL=ScreenScrollHeightDiff.directive.js.map