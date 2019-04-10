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
var FxOn_directive_1 = require("./FxOn.directive");
var core_1 = require("@angular/core");
var ShakeOn = (function () {
    function ShakeOn(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new core_1.EventEmitter();
        this.shakeTypes = [
            'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
            'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
            'shake-chunk'
        ];
    }
    ShakeOn.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.update(); });
    };
    ShakeOn.prototype.update = function () {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeType = this.shakeType || 'shake-slow';
    };
    ShakeOn.prototype.ngOnChanges = function (changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue != null && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            if (changes.shakeOn.currentValue) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        }
        if (changes.shakeType && changes.shakeType.currentValue != changes.shakeType.previousValue) {
            if (this.shakeOn) {
                var pv = changes.shakeType.previousValue;
                if (pv) {
                    FxOn_directive_1.removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    };
    ShakeOn.prototype.onFalse = function () {
        FxOn_directive_1.removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    };
    ShakeOn.prototype.removeType = function () {
        FxOn_directive_1.removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.applyType = function () {
        FxOn_directive_1.addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        FxOn_directive_1.addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(function () {
                _this.onFalse();
                _this.shakeThen.emit(_this);
            }, this.shakeForMs);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShakeOn.prototype, "shakeConstant", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShakeOn.prototype, "shakeOn", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShakeOn.prototype, "shakeForMs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ShakeOn.prototype, "shakeType", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ShakeOn.prototype, "shakeThen", void 0);
    ShakeOn = __decorate([
        core_1.Directive({
            selector: "[shakeOn]",
            exportAs: "ShakeOn"
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ShakeOn);
    return ShakeOn;
}());
exports.ShakeOn = ShakeOn;
