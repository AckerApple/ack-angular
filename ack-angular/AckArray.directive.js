"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckArray = (function () {
    function AckArray() {
        this.refChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
    }
    AckArray.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.refChange.emit(_this); }, 0);
    };
    AckArray.prototype.getItemId = function (item) {
        return this.idKey ? item[this.idKey] : item;
    };
    AckArray.prototype.getCompareArray = function () {
        var _this = this;
        if (this.array && this.idKey) {
            return this.array.map(function (item) { return item[_this.idKey]; });
        }
        return this.array || [];
    };
    AckArray.prototype.selected = function (item) {
        return this.itemIndex(item) >= 0 ? true : false;
    };
    AckArray.prototype.itemIndex = function (item) {
        var array = this.getCompareArray();
        var itemId = this.getItemId(item);
        for (var x = array.length - 1; x >= 0; --x) {
            if (itemId == array[x]) {
                return x;
            }
        }
        return -1;
    };
    AckArray.prototype.toggle = function (item) {
        var index = this.itemIndex(item);
        if (index >= 0) {
            return this.array.splice(index, 1);
        }
        if (!this.array) {
            this.arrayChange.emit(this.array = []);
        }
        this.array.push(item);
    };
    AckArray.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ack-array'
                },] },
    ];
    /** @nocollapse */
    AckArray.ctorParameters = function () { return []; };
    AckArray.propDecorators = {
        'idKey': [{ type: core_1.Input },],
        'ref': [{ type: core_1.Input },],
        'refChange': [{ type: core_1.Output },],
        'array': [{ type: core_1.Input },],
        'arrayChange': [{ type: core_1.Output },],
    };
    return AckArray;
}());
exports.AckArray = AckArray;
//# sourceMappingURL=AckArray.directive.js.map