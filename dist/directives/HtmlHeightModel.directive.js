"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var HtmlHeightModel = (function () {
    function HtmlHeightModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new core_1.EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    HtmlHeightModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    HtmlHeightModel.prototype.hasChanged = function () {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    };
    HtmlHeightModel.prototype.setModel = function (model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    HtmlHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[htmlHeightModel]'
                },] },
    ];
    HtmlHeightModel.ctorParameters = function () { return [
        { type: HtmlSizeWatcher_1.HtmlSizeService, },
    ]; };
    HtmlHeightModel.propDecorators = {
        "htmlHeightModel": [{ type: core_1.Input },],
        "htmlHeightModelChange": [{ type: core_1.Output },],
    };
    return HtmlHeightModel;
}());
exports.HtmlHeightModel = HtmlHeightModel;
