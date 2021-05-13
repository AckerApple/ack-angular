"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentModel = void 0;
var core_1 = require("@angular/core");
var ContentModel = /** @class */ (function () {
    function ContentModel(elm) {
        this.elm = elm;
        this.changeDone = new core_1.EventEmitter();
        this.inputChange = new core_1.EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
        this.contentModelChange = new core_1.EventEmitter();
        this.enter = new core_1.EventEmitter(); // fires when enter key used
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
            this.enter.emit();
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
    };
    ContentModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[contentModel]'
                },] }
    ];
    ContentModel.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    ContentModel.propDecorators = {
        changeDone: [{ type: core_1.Output }],
        contentModel: [{ type: core_1.Input }],
        inputChange: [{ type: core_1.Output }],
        contentModelChange: [{ type: core_1.Output }],
        placeholder: [{ type: core_1.Input }],
        maxLength: [{ type: core_1.Input }],
        enterEnds: [{ type: core_1.Input }],
        enter: [{ type: core_1.Output }],
        onKeyDown: [{ type: core_1.HostListener, args: ['keydown', ['$event'],] }],
        onInput: [{ type: core_1.HostListener, args: ['input',] }],
        onFocus: [{ type: core_1.HostListener, args: ['focus',] }],
        onBlur: [{ type: core_1.HostListener, args: ['blur',] }]
    };
    return ContentModel;
}());
exports.ContentModel = ContentModel;
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=ContentModel.directive.js.map