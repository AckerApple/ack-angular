"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        var _this = this;
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    ScreenHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
    };
    ScreenHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenHeightModel]'
                },] },
    ];
    ScreenHeightModel.ctorParameters = function () { return []; };
    ScreenHeightModel.propDecorators = {
        "screenHeightModel": [{ type: core_1.Input },],
        "screenHeightModelChange": [{ type: core_1.Output },],
    };
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
