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
var ScreenScroll = (function () {
    function ScreenScroll() {
        var _this = this;
        this.screenScroll = new core_1.EventEmitter();
        this.onScroll = function () {
            return _this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        };
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ScreenScroll.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.onScroll(); });
    };
    ScreenScroll.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ScreenScroll.prototype, "screenScroll", void 0);
    ScreenScroll = __decorate([
        core_1.Directive({
            selector: '[screenScroll]'
        }),
        __metadata("design:paramtypes", [])
    ], ScreenScroll);
    return ScreenScroll;
}());
exports.ScreenScroll = ScreenScroll;
