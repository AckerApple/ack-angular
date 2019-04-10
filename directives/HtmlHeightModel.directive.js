"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var HtmlWidthModel_directive_1 = require("./HtmlWidthModel.directive");
var HtmlHeightModel = (function (_super) {
    __extends(HtmlHeightModel, _super);
    function HtmlHeightModel(HtmlSizeService) {
        var _this = _super.call(this, HtmlSizeService) || this;
        _this.HtmlSizeService = HtmlSizeService;
        _this.htmlHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    HtmlHeightModel.prototype.hasChanged = function () {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    };
    HtmlHeightModel.prototype.setModel = function (model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], HtmlHeightModel.prototype, "htmlHeightModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HtmlHeightModel.prototype, "htmlHeightModelChange", void 0);
    HtmlHeightModel = __decorate([
        core_1.Directive({
            selector: '[htmlHeightModel]'
        }),
        __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
    ], HtmlHeightModel);
    return HtmlHeightModel;
}(HtmlWidthModel_directive_1.HtmlWidthModel));
exports.HtmlHeightModel = HtmlHeightModel;
