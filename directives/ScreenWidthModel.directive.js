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
var ScreenWidthModel = (function (_super) {
    __extends(ScreenWidthModel, _super);
    function ScreenWidthModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.screenWidthModelChange = new core_1.EventEmitter();
        return _this;
    }
    ScreenWidthModel.prototype.hasChanged = function () {
        return this.screenWidthModel !== window.innerWidth;
    };
    ScreenWidthModel.prototype.setModel = function () {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenWidthModel]'
                },] },
    ];
    ScreenWidthModel.propDecorators = {
        "screenWidthModel": [{ type: core_1.Input },],
        "screenWidthModelChange": [{ type: core_1.Output },],
    };
    return ScreenWidthModel;
}(HtmlSizeWatcher_1.HtmlSizeWatcher));
exports.ScreenWidthModel = ScreenWidthModel;
