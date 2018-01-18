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
var HtmlWidthModel = (function (_super) {
    __extends(HtmlWidthModel, _super);
    function HtmlWidthModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlWidthModelChange = new core_1.EventEmitter();
        return _this;
    }
    HtmlWidthModel.prototype.hasChanged = function () {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    };
    HtmlWidthModel.prototype.setModel = function () {
        this.htmlWidthModel = window.document.documentElement.clientWidth;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlWidthModel]'
                },] },
    ];
    HtmlWidthModel.ctorParameters = function () { return []; };
    HtmlWidthModel.propDecorators = {
        "htmlWidthModel": [{ type: core_1.Input },],
        "htmlWidthModelChange": [{ type: core_1.Output },],
    };
    return HtmlWidthModel;
}(HtmlSizeWatcher_1.HtmlSizeWatcher));
exports.HtmlWidthModel = HtmlWidthModel;
