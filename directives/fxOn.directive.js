import { __decorate, __metadata } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
let FxOn = class FxOn {
    constructor(element) {
        this.element = element;
        this.fxThen = new EventEmitter();
        this.fxTypes = [
            "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello",
            "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        if (this.fxOn) {
            this.onTrue();
        }
        else {
            this.onFalse();
        }
    }
    ngOnChanges(changes) {
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
    }
    onFalse() {
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        const elm = this.element.nativeElement;
        removeClass(elm, this.fxClass);
        if (this.inlineTreated) {
            elm.style.display = 'inline';
            this.inlineTreated = false;
        }
    }
    applyType() {
        const elm = this.element.nativeElement;
        if (elm.style && elm.style.display === 'inline' || getElementDefaultDisplay(elm) === 'inline') {
            this.inlineTreated = true;
            elm.style.display = 'inline-block';
        }
        addClass(elm, this.fxClass);
    }
    onTrue() {
        this.applyType();
        if (this.fxForMs) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.fxThen.emit();
            }, this.fxForMs);
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], FxOn.prototype, "fxOn", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], FxOn.prototype, "fxClass", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], FxOn.prototype, "fxForMs", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], FxOn.prototype, "fxThen", void 0);
FxOn = __decorate([
    Directive({
        selector: "[fxOn]",
        exportAs: "FxOn"
    }),
    __metadata("design:paramtypes", [ElementRef])
], FxOn);
export { FxOn };
export function hasClass(el, className) {
    const names = className.split(" ");
    for (let x = names.length - 1; x >= 0; --x) {
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
export function addClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    });
}
export function removeClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    });
}
function getElementDefaultDisplay(tag) {
    var cStyle, t = tag, gcs = "getComputedStyle" in window;
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    return cStyle;
}
