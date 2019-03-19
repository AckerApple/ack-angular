"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ReplaceModel = (function () {
    function ReplaceModel() {
        this.replaceModelChange = new core_1.EventEmitter();
    }
    ReplaceModel.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(function () { return _this.run(); });
        }
    };
    ReplaceModel.prototype.run = function () {
        var rx = new RegExp(this.replaceExpression, 'gi');
        var oldModel = this.replaceModel;
        var newModel = this.replaceModel.replace(rx, '');
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
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
