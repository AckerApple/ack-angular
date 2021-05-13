import { array } from "../pipes.class";
import { ElementRef, ContentChildren, TemplateRef, Component, Input, Output, EventEmitter } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
import { string as ackOptions } from "./templates/ack-options.pug";
var AckOptions = /** @class */ (function () {
    function AckOptions(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new EventEmitter();
    }
    AckOptions.prototype.ngAfterViewInit = function () {
        var _this = this;
        Promise.resolve().then(function () {
            if (_this.inputTemplateRefs) {
                _this.TemplateReader.readTemplates(_this.inputTemplateRefs);
            }
            if (_this.templateRefs) {
                _this.TemplateReader.readTemplates(_this.templateRefs);
            }
        });
    };
    AckOptions.prototype.selectItem = function (item) {
        var value = this.getArrayItemValue(item);
        var isArrayMode = this.multiple || this.modelAsArray;
        if (isArrayMode) {
            var modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(this.getArrayItemModel(item));
            }
            if (this.max) {
                while (this.model.length > this.max) {
                    this.model.shift();
                }
            }
        }
        else {
            if (this.toggleable && this.model == value) {
                delete this.model;
            }
            else {
                this.model = this.getArrayItemModel(item);
            }
        }
        this.emitChange();
    };
    AckOptions.prototype.emitChange = function () {
        this.modelChange.emit(this.model);
        var form = getParentByTagName(this.ElementRef.nativeElement, 'form');
        if (form)
            this.fireFormEvents(form);
    };
    AckOptions.prototype.fireFormEvents = function (form) {
        var event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        form.dispatchEvent(event);
        event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        form.dispatchEvent(event);
    };
    AckOptions.prototype.getArrayItemModel = function (item) {
        if (this.arrayToModelKey != null) {
            if (this.arrayToModelKey == '') {
                return item;
            }
            var split = this.arrayToModelKey.split('.');
            var scope = item;
            while (split.length) {
                if (scope == null)
                    return null;
                var key = split.shift();
                scope = scope[key];
            }
            return scope;
        }
        return this.getArrayItemValue(item);
    };
    AckOptions.prototype.getArrayItemValue = function (item) {
        if (!this.arrayKey)
            return item;
        var items = this.arrayKey.split('.');
        var scope = item;
        while (items.length) {
            if (scope == null)
                return null;
            var firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    };
    AckOptions.prototype.getModelValueToArrayItem = function (modelValue) {
        if (!this.modelKey)
            return modelValue;
        var items = this.modelKey.split('.');
        var scope = modelValue;
        while (items.length) {
            if (scope == null)
                return null;
            var firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    };
    AckOptions.prototype.modelIndex = function (item) {
        this.model = array(this.model);
        for (var i = this.model.length - 1; i >= 0; --i) {
            var value = this.getArrayItemValue(item);
            var modelValue = this.getModelValueToArrayItem(this.model[i]);
            if (value == modelValue)
                return i;
        }
        return -1;
    };
    AckOptions.prototype.isItemSelected = function (item) {
        return this.modelIndex(item) >= 0;
    };
    AckOptions.prototype.getItemClass = function (item) {
        var selected = this.isItemSelected(item);
        var string = '';
        if (this.stylize) {
            string += 'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom ';
        }
        if (this.stylize && selected) {
            string += 'bg-warning ';
        }
        if (this.stylize && !selected) {
            string += 'hover-bg-grey-5x ';
        }
        return string;
    };
    AckOptions.decorators = [
        { type: Component, args: [{
                    selector: "ack-options",
                    template: ackOptions
                    //,exportAs:"AckOptions"
                },] }
    ];
    AckOptions.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    AckOptions.propDecorators = {
        array: [{ type: Input }],
        stylize: [{ type: Input }],
        multiple: [{ type: Input }],
        modelAsArray: [{ type: Input }],
        max: [{ type: Input }],
        toggleable: [{ type: Input }],
        templateRefs: [{ type: ContentChildren, args: [TemplateRef,] }],
        inputTemplateRefs: [{ type: Input }],
        model: [{ type: Input }],
        modelChange: [{ type: Output }],
        arrayKey: [{ type: Input }],
        modelKey: [{ type: Input }],
        arrayToModelKey: [{ type: Input }]
    };
    return AckOptions;
}());
export { AckOptions };
export function getParentByTagName(node, tagname) {
    var parent;
    if (node === null || tagname === '')
        return;
    parent = node.parentNode;
    tagname = tagname.toUpperCase();
    while (parent && parent.tagName !== "HTML") {
        if (parent.tagName === tagname) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return;
}
//# sourceMappingURL=AckOptions.component.js.map