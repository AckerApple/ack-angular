import { ElementRef, Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
import * as i0 from "@angular/core";
var ContentModel = /** @class */ (function () {
    function ContentModel(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.inputChange = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
        this.contentModelChange = new EventEmitter();
        this.enter = new EventEmitter(); // fires when enter key used
        this.hasFocusChange = new EventEmitter(); // fires when enter key used
        this.recentInputs = 0; // check in/out user input to prevent updating content right after user input
        this.elm.nativeElement.setAttribute('contenteditable', true);
    }
    ContentModel.prototype.ngOnDestroy = function () {
        this.elm.nativeElement.removeAttribute('contenteditable');
    };
    ContentModel.prototype.ngOnChanges = function () {
        var nElm = this.elm.nativeElement;
        // do not redraw if we are currently changing the input
        if (this.recentInputs) {
            --this.recentInputs;
            return;
        }
        var usePlaceholder = this.evalPlaceholder();
        if (!usePlaceholder) {
            nElm.textContent = this.contentModel;
        }
    };
    ContentModel.prototype.evalPlaceholder = function (placeholder) {
        var nElm = this.elm.nativeElement;
        var usePlaceholder = this.contentModel == null || this.contentModel === '';
        if (usePlaceholder) {
            nElm.textContent = placeholder == null ? this.placeholder : placeholder;
            return true;
        }
        return false;
    };
    ContentModel.prototype.shouldCancelEvent = function (event) {
        var key = event.which || event.keyCode;
        return this.enterEnds && key === 13;
    };
    ContentModel.prototype.onKeyDown = function (event) {
        this.checkPlaceholder();
        var cancel = this.shouldCancelEvent(event);
        // enter key treatment
        if (cancel) {
            this.onBlur();
            cancelEvent(event);
            this.enter.emit(this.contentModel);
            return;
        }
        if (this.maxLength) {
            var newValue = this.elm.nativeElement.textContent;
            var maxLength = Number(this.maxLength);
            var maxed = this.maxLength && newValue.length > maxLength;
            var key = event.which || event.keyCode;
            if (maxed) {
                var isDelete = [8, 46].indexOf(key) >= 0;
                if (!isDelete) {
                    cancelEvent(event);
                    return;
                }
            }
        }
    };
    ContentModel.prototype.onInput = function () {
        var newValue = this.elm.nativeElement.textContent;
        var maxLength = Number(this.maxLength);
        if (this.maxLength && newValue.length > maxLength) {
            return;
        }
        ++this.recentInputs;
        this.updateValue();
        // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
        this.inputChange.emit(this.contentModel);
    };
    ContentModel.prototype.updateValue = function () {
        this.contentModel = this.elm.nativeElement.textContent;
        this.contentModelChange.emit(this.contentModel);
        // only update this onblur and focus
        // this.lastValue = this.contentModel
    };
    ContentModel.prototype.onFocus = function () {
        this.hasFocusChange.emit(this.hasFocus = true);
        this.lastValue = this.contentModel;
        this.evalPlaceholder('');
        /* 10-12: moved into keydown check
        this.checkPlaceholder();
        */
    };
    ContentModel.prototype.checkPlaceholder = function () {
        if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
            this.elm.nativeElement.textContent = '';
        }
    };
    ContentModel.prototype.onBlur = function () {
        if (this.lastValue !== this.elm.nativeElement.textContent) {
            this.lastValue = this.elm.nativeElement.textContent; // now update it
            this.updateValue(); // we have to emit here for change otherwise keyboard blur caused during key changes
            this.changeDone.emit(this.contentModel);
        }
        this.evalPlaceholder();
        this.hasFocusChange.emit(this.hasFocus = false);
    };
    ContentModel.ɵfac = function ContentModel_Factory(t) { return new (t || ContentModel)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ContentModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ContentModel, selectors: [["", "contentModel", ""]], hostBindings: function ContentModel_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function ContentModel_keydown_HostBindingHandler($event) { return ctx.onKeyDown($event); })("input", function ContentModel_input_HostBindingHandler() { return ctx.onInput(); })("focus", function ContentModel_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ContentModel_blur_HostBindingHandler() { return ctx.onBlur(); });
        } }, inputs: { contentModel: "contentModel", placeholder: "placeholder", maxLength: "maxLength", enterEnds: "enterEnds", hasFocus: "hasFocus" }, outputs: { changeDone: "changeDone", inputChange: "inputChange", contentModelChange: "contentModelChange", enter: "enter", hasFocusChange: "hasFocusChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    return ContentModel;
}());
export { ContentModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ContentModel, [{
        type: Directive,
        args: [{
                selector: '[contentModel]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { changeDone: [{
            type: Output
        }], contentModel: [{
            type: Input
        }], inputChange: [{
            type: Output
        }], contentModelChange: [{
            type: Output
        }], placeholder: [{
            type: Input
        }], maxLength: [{
            type: Input
        }], enterEnds: [{
            type: Input
        }], enter: [{
            type: Output
        }], hasFocus: [{
            type: Input
        }], hasFocusChange: [{
            type: Output
        }], onKeyDown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], onInput: [{
            type: HostListener,
            args: ['input']
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=ContentModel.directive.js.map