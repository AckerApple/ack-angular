import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
var KeysPipe = /** @class */ (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (input) {
        var type = typeof (input) == 'object';
        var isOb = input && type;
        var isArray = isOb && input.constructor == Array;
        if (isArray) {
            return input.map(function (_value, index) { return index; });
        }
        return input ? Object.keys(input) : [];
    };
    KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
    KeysPipe.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "keys", type: KeysPipe, pure: true });
    return KeysPipe;
}());
export { KeysPipe };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(KeysPipe, [{
        type: Pipe,
        args: [{ name: 'keys' }]
    }], null, null); })();
//# sourceMappingURL=keys.pipe.js.map