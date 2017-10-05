"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipes_class_1 = require("./pipes.class");
var core_1 = require("@angular/core");
var ack_options_pug_1 = require("./templates/ack-options.pug");
var AckOptions = /** @class */ (function () {
    function AckOptions() {
        this.array = [];
        this.stylize = true;
        this.multiple = false;
        //@Input() modelIsArray = false//support array of options to model-array, that array only allows a length of one
        this.toggleable = false; //multiple must be false
        this.modelChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
    }
    //constructor(public ElementRef:ElementRef){}
    AckOptions.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            //this.ref = Object.assign(this,this.ref)
            _this.refChange.emit(_this);
        }, 0);
    };
    AckOptions.prototype.selectItem = function (item) {
        var value = this.getArrayItemValue(item);
        if (this.multiple) {
            var modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(this.getArrayItemModel(item));
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
        var form = getParentByTagName(this.templateRef.elementRef.nativeElement, 'form');
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
        return {
            'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom': this.stylize,
            'bg-warning': this.stylize && selected,
            'hover-bg-grey-5x': this.stylize && !selected
        };
    };
    AckOptions.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'ack-options',
                    template: ack_options_pug_1.string
                },] },
    ];
    /** @nocollapse */
    AckOptions.ctorParameters = function () { return []; };
    AckOptions.propDecorators = {
        'array': [{ type: core_1.Input },],
        'stylize': [{ type: core_1.Input },],
        'multiple': [{ type: core_1.Input },],
        'toggleable': [{ type: core_1.Input },],
        'templateRef': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] }, { type: core_1.Input },],
        'model': [{ type: core_1.Input },],
        'modelChange': [{ type: core_1.Output },],
        'ref': [{ type: core_1.Input },],
        'refChange': [{ type: core_1.Output },],
        'arrayKey': [{ type: core_1.Input },],
        'modelKey': [{ type: core_1.Input },],
        'arrayToModelKey': [{ type: core_1.Input },],
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
