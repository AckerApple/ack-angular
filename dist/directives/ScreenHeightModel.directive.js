"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var ScreenHeightModel = (function () {
    function ScreenHeightModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    ScreenHeightModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    ScreenHeightModel.prototype.hasChanged = function () {
        return this.screenHeightModel !== window.innerHeight;
    };
    ScreenHeightModel.prototype.setModel = function (model) {
        this.screenHeightModel = window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenHeightModel]'
                },] },
    ];
    ScreenHeightModel.ctorParameters = function () { return [
        { type: HtmlSizeWatcher_1.HtmlSizeService }
    ]; };
    ScreenHeightModel.propDecorators = {
        screenHeightModel: [{ type: core_1.Input }],
        screenHeightModelChange: [{ type: core_1.Output }]
    };
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
