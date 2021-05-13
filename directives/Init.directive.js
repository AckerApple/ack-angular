import { Directive, Output, EventEmitter } from "@angular/core";
var InitDirective = /** @class */ (function () {
    function InitDirective() {
        this.init = new EventEmitter();
    }
    InitDirective.prototype.ngOnInit = function () {
        this.init.emit();
    };
    InitDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[init]'
                },] }
    ];
    InitDirective.propDecorators = {
        init: [{ type: Output }]
    };
    return InitDirective;
}());
export { InitDirective };
//# sourceMappingURL=Init.directive.js.map