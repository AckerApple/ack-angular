"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaceModel = (function () {
    function ReplaceModel() {
        this.replaceModelChange = new core_1.EventEmitter();
    }
    ReplaceModel.prototype.ngOnChanges = function (changes) {
        var isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            this.run();
        }
    };
    ReplaceModel.prototype.run = function () {
        var _this = this;
        var rx = new RegExp(this.replaceExpression, 'gi');
        var oldModel = this.replaceModel;
        var newModel = this.replaceModel.replace(rx, '');
        if (oldModel === newModel) {
            return;
        }
        setTimeout(function () {
            _this.replaceModel = newModel;
            _this.replaceModelChange.emit(_this.replaceModel);
        }, 0);
    };
    ReplaceModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[replaceModel]'
                },] },
    ];
    ReplaceModel.propDecorators = {
        replaceModel: [{ type: core_1.Input }],
        replaceModelChange: [{ type: core_1.Output }],
        replaceExpression: [{ type: core_1.Input }]
    };
    return ReplaceModel;
}());
exports.ReplaceModel = ReplaceModel;
