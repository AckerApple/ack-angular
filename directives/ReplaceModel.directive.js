import { Input, Output, EventEmitter, Directive } from "@angular/core";
var ReplaceModel = /** @class */ (function () {
    function ReplaceModel() {
        this.replaceModelChange = new EventEmitter();
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
        //no change, nothing to do
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    };
    ReplaceModel.decorators = [
        { type: Directive, args: [{
                    selector: '[replaceModel]'
                },] }
    ];
    ReplaceModel.propDecorators = {
        replaceModel: [{ type: Input }],
        replaceModelChange: [{ type: Output }],
        replaceExpression: [{ type: Input }]
    };
    return ReplaceModel;
}());
export { ReplaceModel };
//# sourceMappingURL=ReplaceModel.directive.js.map