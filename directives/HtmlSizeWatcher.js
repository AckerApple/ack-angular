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
var HtmlSizeService = (function () {
    function HtmlSizeService() {
        var _this = this;
        this.change = new core_1.EventEmitter();
        this.htmlSize = { width: null, height: null };
        this.onResize = function () {
            _this.htmlSize.width = window.document.documentElement.clientWidth;
            _this.htmlSize.height = window.document.documentElement.clientHeight;
            _this.change.emit();
        };
        this.checkWatchers();
        this.onResize();
    }
    HtmlSizeService.prototype.checkWatchers = function () {
        if (this.change.observers.length) {
            window.addEventListener('resize', this.onResize);
        }
        else {
            window.removeEventListener('resize', this.onResize);
        }
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], HtmlSizeService.prototype, "change", void 0);
    HtmlSizeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], HtmlSizeService);
    return HtmlSizeService;
}());
exports.HtmlSizeService = HtmlSizeService;
