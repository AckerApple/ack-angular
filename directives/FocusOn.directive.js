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
var FocusOn = (function () {
    function FocusOn(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new core_1.EventEmitter();
    }
    FocusOn.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(function () { return _this.update(); });
            }
            else {
                setTimeout(function () { return _this.update(); }, this.focusOnDelay);
            }
        }
    };
    FocusOn.prototype.update = function () {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FocusOn.prototype, "focusOn", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], FocusOn.prototype, "focusOnDelay", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], FocusOn.prototype, "focusThen", void 0);
    FocusOn = __decorate([
        core_1.Directive({
            selector: '[focusOn]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], FocusOn);
    return FocusOn;
}());
exports.FocusOn = FocusOn;
