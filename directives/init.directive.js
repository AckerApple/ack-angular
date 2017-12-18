"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Init = (function () {
    function Init() {
        this.init = new core_1.EventEmitter();
    }
    Init.prototype.ngOnInit = function () {
        this.init.emit();
    };
    Init.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[init]'
                },] },
    ];
    Init.ctorParameters = function () { return []; };
    Init.propDecorators = {
        "init": [{ type: core_1.Output },],
    };
    return Init;
}());
exports.Init = Init;
