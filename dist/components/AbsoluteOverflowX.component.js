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
var absolute_overflow_x_pug_1 = require("./templates/absolute-overflow-x.pug");
var AbsoluteOverflowX = (function () {
    function AbsoluteOverflowX(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    AbsoluteOverflowX.prototype.ngOnInit = function () {
        this.checkDisplay();
    };
    AbsoluteOverflowX.prototype.ngOnChanges = function (changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    };
    AbsoluteOverflowX.prototype.ngAfterViewInit = function () {
        this.ElementRef.nativeElement.style.display = 'block';
    };
    AbsoluteOverflowX.prototype.checkDisplay = function () {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AbsoluteOverflowX.prototype, "scrollBars", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AbsoluteOverflowX.prototype, "wrapClass", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AbsoluteOverflowX.prototype, "active", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AbsoluteOverflowX.prototype, "overflow", void 0);
    AbsoluteOverflowX = __decorate([
        core_1.Component({
            selector: 'absolute-overflow-x',
            template: absolute_overflow_x_pug_1.string
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AbsoluteOverflowX);
    return AbsoluteOverflowX;
}());
exports.AbsoluteOverflowX = AbsoluteOverflowX;
