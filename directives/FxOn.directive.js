"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeClass = exports.addClass = exports.hasClass = exports.FxOn = void 0;
var core_1 = require("@angular/core");
/**
  Applies css class when condition returns a truthy value. Allows timed removal
  Html inline elms cannot be animated. They will be upgraded to display inline-block
*/
var FxOn = /** @class */ (function () {
    function FxOn(element) {
        this.element = element;
        this.fxThen = new core_1.EventEmitter();
        //an array to be used in #FxOn refs for fx selectable options (see examples)
        this.fxTypes = [
            "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello",
            "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"
        ];
    }
    FxOn.prototype.ngOnInit = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.update(); });
    };
    FxOn.prototype.update = function () {
        if (this.fxOn) {
            this.onTrue();
        }
        else {
            this.onFalse();
        }
    };
    FxOn.prototype.ngOnChanges = function (changes) {
        if (changes.fxOn && changes.fxOn.currentValue != null && changes.fxOn.currentValue != changes.fxOn.previousValue) {
            this.update();
        }
        if (changes.fxClass && changes.fxClass.currentValue != changes.fxClass.previousValue) {
            if (this.fxOn) {
                removeClass(this.element.nativeElement, changes.fxClass.previousValue);
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    };
    FxOn.prototype.onFalse = function () {
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    };
    FxOn.prototype.removeType = function () {
        var elm = this.element.nativeElement;
        removeClass(elm, this.fxClass);
        if (this.inlineTreated) {
            elm.style.display = 'inline';
            this.inlineTreated = false;
        }
    };
    FxOn.prototype.applyType = function () {
        var elm = this.element.nativeElement;
        if (elm.style && elm.style.display === 'inline' || getElementDefaultDisplay(elm) === 'inline') {
            this.inlineTreated = true;
            elm.style.display = 'inline-block';
        }
        addClass(elm, this.fxClass);
    };
    FxOn.prototype.onTrue = function () {
        var _this = this;
        this.applyType();
        if (this.fxForMs) {
            this.timeout = setTimeout(function () {
                _this.onFalse();
                _this.fxThen.emit();
            }, this.fxForMs);
        }
    };
    FxOn.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "[fxOn]",
                    exportAs: "FxOn"
                },] }
    ];
    FxOn.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    FxOn.propDecorators = {
        fxOn: [{ type: core_1.Input }],
        fxClass: [{ type: core_1.Input }],
        fxForMs: [{ type: core_1.Input }],
        fxThen: [{ type: core_1.Output }]
    };
    return FxOn;
}());
exports.FxOn = FxOn;
function hasClass(el, className) {
    var names = className.split(" ");
    for (var x = names.length - 1; x >= 0; --x) {
        if (el.classList) {
            if (el.classList.contains(names[x])) {
                continue;
            }
        }
        else {
            if (el.className.match(new RegExp('(\\s|^)' + names[x] + '(\\s|$)'))) {
                continue;
            }
        }
        return false;
    }
    return true;
}
exports.hasClass = hasClass;
function addClass(el, className) {
    className.split(' ').forEach(function (className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    });
}
exports.addClass = addClass;
function removeClass(el, className) {
    className.split(' ').forEach(function (className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    });
}
exports.removeClass = removeClass;
function getElementDefaultDisplay(tag) {
    var cStyle, t = tag, gcs = "getComputedStyle" in window;
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    return cStyle;
}
//# sourceMappingURL=FxOn.directive.js.map