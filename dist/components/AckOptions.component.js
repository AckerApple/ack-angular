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
var pipes_class_1 = require("../pipes.class");
var core_1 = require("@angular/core");
var TemplateReader_class_1 = require("../TemplateReader.class");
var ack_options_pug_1 = require("./templates/ack-options.pug");
var AckOptions = (function () {
    function AckOptions(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new TemplateReader_class_1.TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckOptions.prototype, "array", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckOptions.prototype, "stylize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckOptions.prototype, "multiple", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckOptions.prototype, "modelAsArray", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckOptions.prototype, "max", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckOptions.prototype, "toggleable", void 0);
    __decorate([
        core_1.ContentChildren(core_1.TemplateRef),
        __metadata("design:type", Object)
    ], AckOptions.prototype, "templateRefs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckOptions.prototype, "inputTemplateRefs", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckOptions.prototype, "model", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckOptions.prototype, "modelChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckOptions.prototype, "arrayKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckOptions.prototype, "modelKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], AckOptions.prototype, "arrayToModelKey", void 0);
    AckOptions = __decorate([
        core_1.Component({
            selector: "ack-options",
            template: ack_options_pug_1.string
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], AckOptions);
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
