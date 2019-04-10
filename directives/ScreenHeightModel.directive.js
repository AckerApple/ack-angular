"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        var _this = this;
        Promise.resolve().then(function () {
            return _this.updateModel();
        });
        this.delayCheck(250);
        this.delayCheck(1500);
    };
    ScreenHeightModel.prototype.delayCheck = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        setTimeout(function () { return _this.updateModel(); }, num);
    };
    ScreenHeightModel.prototype.changed = function () {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.updateModel();
    };
    ScreenHeightModel.prototype.hasChanged = function () {
        return this.model !== window.innerHeight;
    };
    ScreenHeightModel.prototype.updateModel = function () {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    };
    __decorate([
        core_1.Input('screenHeightModel'),
        __metadata("design:type", Number)
    ], ScreenHeightModel.prototype, "model", void 0);
    __decorate([
        core_1.Output('screenHeightModelChange'),
        __metadata("design:type", core_1.EventEmitter)
    ], ScreenHeightModel.prototype, "modelChange", void 0);
    ScreenHeightModel = __decorate([
        core_1.Directive({
            selector: '[screenHeightModel]',
            exportAs: 'ScreenHeightModel'
        }),
        __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
    ], ScreenHeightModel);
    return ScreenHeightModel;
}());
exports.ScreenHeightModel = ScreenHeightModel;
