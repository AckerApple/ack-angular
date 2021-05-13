"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InitDirective = void 0;
var core_1 = require("@angular/core");
var InitDirective = /** @class */ (function () {
    function InitDirective() {
        this.init = new core_1.EventEmitter();
    }
    InitDirective.prototype.ngOnInit = function () {
        this.init.emit();
    };
    InitDirective.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[init]'
                },] }
    ];
    InitDirective.propDecorators = {
        init: [{ type: core_1.Output }]
    };
    return InitDirective;
}());
exports.InitDirective = InitDirective;
//# sourceMappingURL=Init.directive.js.map