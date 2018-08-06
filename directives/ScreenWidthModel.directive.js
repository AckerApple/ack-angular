"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var ScreenWidthModel = (function () {
    function ScreenWidthModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    ScreenWidthModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    ScreenWidthModel.prototype.hasChanged = function () {
        return this.screenWidthModel !== window.innerWidth;
    };
    ScreenWidthModel.prototype.setModel = function (model) {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenWidthModel]'
                },] },
    ];
    ScreenWidthModel.ctorParameters = function () { return [
        { type: HtmlSizeWatcher_1.HtmlSizeService }
    ]; };
    ScreenWidthModel.propDecorators = {
        screenWidthModel: [{ type: core_1.Input }],
        screenWidthModelChange: [{ type: core_1.Output }]
    };
    return ScreenWidthModel;
}());
exports.ScreenWidthModel = ScreenWidthModel;
