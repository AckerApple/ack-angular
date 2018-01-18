"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlWidthModel = (function () {
    function HtmlWidthModel() {
        var _this = this;
        this.htmlWidthModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (_this.htmlWidthModel !== window.document.documentElement.clientWidth) {
                _this.setModel();
            }
        };
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
    }
    HtmlWidthModel.prototype.ngDoCheck = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlWidthModel.prototype.setModel = function () {
        this.htmlWidthModel = window.document.documentElement.clientWidth;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    };
    HtmlWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
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
}());
exports.HtmlWidthModel = HtmlWidthModel;
