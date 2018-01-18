"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        var _this = this;
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (_this.screenWidthModel !== window.innerWidth) {
                _this.setModel();
            }
        };
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    ScreenWidthModel.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    ScreenWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenWidthModel]'
                },] },
    ];
    ScreenWidthModel.ctorParameters = function () { return []; };
    ScreenWidthModel.propDecorators = {
        "screenWidthModel": [{ type: core_1.Input },],
        "screenWidthModelChange": [{ type: core_1.Output },],
    };
    return ScreenWidthModel;
}());
exports.ScreenWidthModel = ScreenWidthModel;
