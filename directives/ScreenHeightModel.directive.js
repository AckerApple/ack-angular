"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var ScreenHeightModel = (function (_super) {
    __extends(ScreenHeightModel, _super);
    function ScreenHeightModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screenHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    ScreenHeightModel.prototype.hasChanged = function () {
        return this.screenHeightModel !== window.innerHeight;
    };
    ScreenHeightModel.prototype.setModel = function () {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenHeightModel]'
                },] },
    ];
    ScreenHeightModel.propDecorators = {
        "screenHeightModel": [{ type: core_1.Input },],
        "screenHeightModelChange": [{ type: core_1.Output },],
    };
    return ScreenHeightModel;
}(HtmlSizeWatcher_1.HtmlSizeWatcher));
exports.ScreenHeightModel = ScreenHeightModel;
