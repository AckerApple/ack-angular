"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ShakeOn = (function () {
    function ShakeOn(element) {
        this.element = element;
    }
    ShakeOn.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.update(); }, 0);
    };
    ShakeOn.prototype.update = function () {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeRef = this;
        this.shakeType = this.shakeType || 'shake-slow';
        this.shakeRefChange.emit(this.shakeRef);
        this.shakeTypeChange.emit(this.shakeType);
        this.shakeForMsChange.emit(this.shakeForMs);
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
                removeClass(this.element.nativeElement, changes.shakeType.previousValue);
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    };
    ShakeOn.prototype.onFalse = function () {
        removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    ShakeOn.prototype.removeType = function () {
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.applyType = function () {
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    };
    ShakeOn.prototype.onTrue = function () {
        var _this = this;
        addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(function () {
                _this.onFalse();
                _this.shakeThen.emit(_this);
            }, this.shakeForMs);
        }
    };
    return ShakeOn;
}());
exports.ShakeOn = ShakeOn;
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
}
exports.hasClass = hasClass;
function addClass(el, className) {
    if (el.classList) {
        el.classList.add(className);
    }
    else if (!hasClass(el, className))
        el.className += " " + className;
}
exports.addClass = addClass;
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}
exports.removeClass = removeClass;
