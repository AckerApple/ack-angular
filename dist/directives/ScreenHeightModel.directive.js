"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
var ScreenHeightModel = (function () {
    function ScreenHeightModel(HtmlSizeService) {
        var _this = this;
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new core_1.EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(function () { return _this.changed(); });
        this.HtmlSizeService.checkWatchers();
    }
    ScreenHeightModel.prototype.ngAfterViewInit = function () {
        this.delayCheck();
        this.delayCheck(250);
        this.delayCheck(1500);
    };
    ScreenHeightModel.prototype.delayCheck = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        setTimeout(function () { return _this.setModel(_this.HtmlSizeService.htmlSize); }, num);
    };
    ScreenHeightModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    };
    ScreenHeightModel.prototype.hasChanged = function () {
        return this.model !== window.innerHeight;
    };
    ScreenHeightModel.prototype.setModel = function (model) {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    };
    ScreenHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[screenHeightModel]',
                    exportAs: 'ScreenHeightModel'
                },] },
    ];
    ScreenHeightModel.ctorParameters = function () { return [
        { type: HtmlSizeWatcher_1.HtmlSizeService }
    ]; };
    ScreenHeightModel.propDecorators = {
        model: [{ type: core_1.Input, args: ['screenHeightModel',] }],
        modelChange: [{ type: core_1.Output, args: ['screenHeightModelChange',] }]
    };
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
