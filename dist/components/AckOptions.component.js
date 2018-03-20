"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipes_class_1 = require("../pipes.class");
var core_1 = require("@angular/core");
var TemplateReader_class_1 = require("../TemplateReader.class");
var ack_options_pug_1 = require("./templates/ack-options.pug");
var AckOptions = (function () {
    function AckOptions(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.multiple = false;
        this.modelAsArray = false;
        this.toggleable = false;
        this.TemplateReader = new TemplateReader_class_1.TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
    }
    AckOptions.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.refChange.emit(_this);
        }, 0);
    };
    AckOptions.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.inputTemplateRefs) {
                _this.TemplateReader.readTemplates(_this.inputTemplateRefs);
            }
            if (_this.templateRefs) {
                _this.TemplateReader.readTemplates(_this.templateRefs);
            }
        }, 0);
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
                this.model = null;
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
            scope = scope[items.shift()];
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
            scope = scope[items.shift()];
        }
        return scope;
    };
    AckOptions.prototype.modelIndex = function (item) {
        this.model = pipes_class_1.array(this.model);
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
        { type: core_1.Component, args: [{
                    selector: 'ack-options',
                    template: ack_options_pug_1.string
                },] },
    ];
    AckOptions.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    AckOptions.propDecorators = {
        "array": [{ type: core_1.Input },],
        "stylize": [{ type: core_1.Input },],
        "multiple": [{ type: core_1.Input },],
        "modelAsArray": [{ type: core_1.Input },],
        "max": [{ type: core_1.Input },],
        "toggleable": [{ type: core_1.Input },],
        "templateRefs": [{ type: core_1.ContentChildren, args: [core_1.TemplateRef,] },],
        "inputTemplateRefs": [{ type: core_1.Input },],
        "model": [{ type: core_1.Input },],
        "modelChange": [{ type: core_1.Output },],
        "ref": [{ type: core_1.Input },],
        "refChange": [{ type: core_1.Output },],
        "arrayKey": [{ type: core_1.Input },],
        "modelKey": [{ type: core_1.Input },],
        "arrayToModelKey": [{ type: core_1.Input },],
    };
    return AckOptions;
}());
exports.AckOptions = AckOptions;
function getParentByTagName(node, tagname) {
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
exports.getParentByTagName = getParentByTagName;
