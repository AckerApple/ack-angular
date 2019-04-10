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
var PxFromHtmlTop = (function () {
    function PxFromHtmlTop(ElementRef) {
        var _this = this;
        this.ElementRef = ElementRef;
        this.numberChange = new core_1.EventEmitter();
        this.onScroll = function () {
            _this.setter();
            _this.emit();
        };
        window.addEventListener("resize", this.onScroll);
        window.addEventListener("scroll", this.onScroll);
    }
    PxFromHtmlTop.prototype.emit = function () {
        this.numberChange.emit(this.number);
    };
    PxFromHtmlTop.prototype.ngOnChanges = function () {
        var _this = this;
        Promise.resolve().then(function () {
            _this.setter();
            _this.emit();
        });
        this.delayFire(250);
        this.delayFire(750);
        this.delayFire(1500);
    };
    PxFromHtmlTop.prototype.setter = function () {
        var top = this.ElementRef.nativeElement.getBoundingClientRect().top;
        this.number = top;
    };
    PxFromHtmlTop.prototype.ngAfterViewInit = function () {
        this.delayFire();
        this.delayFire(200);
    };
    PxFromHtmlTop.prototype.delayFire = function (num) {
        var _this = this;
        if (num === void 0) { num = 0; }
        setTimeout(function () {
            _this.setter();
            _this.emit();
        }, num);
    };
    PxFromHtmlTop.prototype.ngOnDestroy = function () {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    };
    __decorate([
        core_1.Input("pxFromHtmlTop"),
        __metadata("design:type", Number)
    ], PxFromHtmlTop.prototype, "number", void 0);
    __decorate([
        core_1.Output("pxFromHtmlTopChange"),
        __metadata("design:type", core_1.EventEmitter)
    ], PxFromHtmlTop.prototype, "numberChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], PxFromHtmlTop.prototype, "watch", void 0);
    PxFromHtmlTop = __decorate([
        core_1.Directive({
            selector: "[pxFromHtmlTop]",
            exportAs: "PxFromHtmlTop"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], PxFromHtmlTop);
    return PxFromHtmlTop;
}());
exports.PxFromHtmlTop = PxFromHtmlTop;
