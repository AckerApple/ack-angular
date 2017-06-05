"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pipes_class_1 = require("./pipes.class");
var core_1 = require("@angular/core");
var ack_options_pug_1 = require("./templates/ack-options.pug");
var AckOptions = (function () {
    function AckOptions() {
        this.array = [];
        this.stylize = true;
        this.multiple = false;
        this.toggleable = false; //multiple must be false
        this.modelChange = new core_1.EventEmitter();
        this.refChange = new core_1.EventEmitter();
    }
    AckOptions.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.ref = Object.assign(_this, _this.ref);
            _this.refChange.emit(_this.ref);
        }, 0);
    };
    AckOptions.prototype.selectItem = function (item) {
        if (this.multiple) {
            var modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(item);
            }
        }
        else {
            if (this.toggleable && this.model == item) {
                this.model = null;
            }
            else {
                this.model = item;
            }
        }
        this.modelChange.emit(this.model);
    };
    AckOptions.prototype.modelIndex = function (item) {
        this.model = pipes_class_1.array(this.model);
        for (var i = this.model.length - 1; i >= 0; --i) {
            if (this.model[i] == item)
                return i;
        }
        return -1;
    };
    return AckOptions;
}());
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
    'model': [{ type: core_1.Input },],
    'modelChange': [{ type: core_1.Output },],
    'templateRef': [{ type: core_1.ContentChild, args: [core_1.TemplateRef,] }, { type: core_1.Input },],
    'ref': [{ type: core_1.Input },],
    'refChange': [{ type: core_1.Output },],
};
exports.AckOptions = AckOptions;
//# sourceMappingURL=AckOptions.component.js.map