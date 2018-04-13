"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TemplateReader_class_1 = require("../TemplateReader.class");
var TemplateSwitch = (function () {
    function TemplateSwitch() {
        this.TemplateReader = new TemplateReader_class_1.TemplateReader();
    }
    TemplateSwitch.prototype.ngAfterViewInit = function () {
        this.TemplateReader.readTemplates(this.templates);
        console.log('this.templates', this.templates, this.TemplateReader.templates);
    };
    TemplateSwitch.prototype.ngOnChanges = function () {
        this.templateRef = this.TemplateReader.templates[this.template];
        console.log('x', this.templateRef, this.template, this.TemplateReader.templates);
    };
    TemplateSwitch.decorators = [
        { type: core_1.Component, args: [{
                    selector: "template-switch",
                    template: "<ng-template *ngTemplateOutlet=\"templateRef\"></ng-template>"
                },] },
    ];
    TemplateSwitch.ctorParameters = function () { return []; };
    TemplateSwitch.propDecorators = {
        "template": [{ type: core_1.Input },],
        "templates": [{ type: core_1.ContentChildren, args: [core_1.TemplateRef,] },],
    };
    return TemplateSwitch;
}());
exports.TemplateSwitch = TemplateSwitch;
