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
var ScreenScrollHeightDiff = (function () {
    function ScreenScrollHeightDiff() {
        var _this = this;
        this.screenScrollHeightDiffChange = new core_1.EventEmitter();
        this.on = function () {
            _this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    ScreenScrollHeightDiff.prototype.apply = function () {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    };
    ScreenScrollHeightDiff.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiff", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ScreenScrollHeightDiff.prototype, "screenScrollHeightDiffChange", void 0);
    ScreenScrollHeightDiff = __decorate([
        core_1.Directive({
            selector: '[screenScrollHeightDiff]'
        }),
        __metadata("design:paramtypes", [])
    ], ScreenScrollHeightDiff);
    return ScreenScrollHeightDiff;
}());
exports.ScreenScrollHeightDiff = ScreenScrollHeightDiff;
