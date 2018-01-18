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
var HtmlHeightModel = (function (_super) {
    __extends(HtmlHeightModel, _super);
    function HtmlHeightModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.htmlHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    HtmlHeightModel.prototype.hasChanged = function () {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    };
    HtmlHeightModel.prototype.setModel = function () {
        this.htmlHeightModel = window.document.documentElement.clientHeight;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlHeightModel]'
                },] },
    ];
    HtmlHeightModel.ctorParameters = function () { return []; };
    HtmlHeightModel.propDecorators = {
        "htmlHeightModel": [{ type: core_1.Input },],
        "htmlHeightModelChange": [{ type: core_1.Output },],
    };
    return HtmlHeightModel;
}(HtmlSizeWatcher_1.HtmlSizeWatcher));
exports.HtmlHeightModel = HtmlHeightModel;
