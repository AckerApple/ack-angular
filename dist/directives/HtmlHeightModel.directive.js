"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlHeightModel = (function () {
    function HtmlHeightModel() {
        var _this = this;
        this.htmlHeightModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            if (this.htmlHeightModel !== window.document.documentElement.clientHeight) {
                this.setModel();
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.onResize(); }, 0);
    }
    HtmlHeightModel.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.onResize(); }, 0);
    };
    HtmlHeightModel.prototype.setModel = function () {
        this.htmlHeightModel = window.document.documentElement.clientHeight;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener('resize', this.onResize);
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
}());
exports.HtmlHeightModel = HtmlHeightModel;
