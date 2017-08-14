"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckArray = (function () {
    function AckArray() {
        this.refChange = new core_1.EventEmitter();
        this.page = 0;
        this.pageAt = 0;
        this.pages = [];
        this.pagesChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
        //an system of creating an object by keys of array nodes
        this.keyMap = {};
        this.keyMapChange = new core_1.EventEmitter();
    }
    AckArray.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.pages = _this.pages || [];
            _this.createPages();
            _this.buildMap();
            _this.refChange.emit(_this);
        }, 0);
    };
    AckArray.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (this.pages && (changes.pageAt || changes.array)) {
            if (changes.array)
                setTimeout(function () { return _this.buildMap(); }, 0);
            setTimeout(function () { return _this.createPages(); }, 0);
        }
    };
    AckArray.prototype.buildMap = function () {
        if (!this.keyMapChange.observers.length || !this.array) {
            return this.keyMapChange.emit(this.keyMap = {});
        }
        this.keyMap = {};
        for (var x = this.array.length - 1; x >= 0; --x) {
            var key = this.getItemId(this.array[x]);
            this.keyMap[key] = this.array[x];
        }
        this.keyMapChange.emit(this.keyMap);
    };
    AckArray.prototype.only = function (item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.buildMap();
    };
    AckArray.prototype.createPages = function () {
        this.pages.length = 0;
        if (!this.array || !this.array.length) {
            this.pages[0] = this.array;
            this.pagesChange.emit(this.pages);
            return;
        }
        var pos = 0;
        var last = this.array.length;
        this.pages.push([]);
        for (var x = 0; x < last; ++x) {
            this.pages[pos].push(this.array[x]);
            if (this.pages[pos].length == this.pageAt && x < last - 1) {
                this.pages.push([]);
                ++pos;
            }
        }
        this.pagesChange.emit(this.pages);
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
            return this.splice(index);
        }
        return this.push(item);
    };
    AckArray.prototype.push = function (item) {
        this.param().push(item);
        this.createPages();
        this.buildMap();
        return this;
    };
    AckArray.prototype.unshift = function (item) {
        this.param().unshift(item);
        return this;
    };
    AckArray.prototype.splice = function (x, y) {
        if (y === void 0) { y = 1; }
        this.param().splice(x, y);
        this.createPages();
        this.buildMap();
        return this;
    };
    AckArray.prototype.param = function () {
        if (!this.array)
            this.arrayChange.emit(this.array = []);
        return this.array;
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
        'pageAt': [{ type: core_1.Input },],
        'pages': [{ type: core_1.Input },],
        'pagesChange': [{ type: core_1.Output },],
        'array': [{ type: core_1.Input },],
        'arrayChange': [{ type: core_1.Output },],
        'keyMap': [{ type: core_1.Input },],
        'keyMapChange': [{ type: core_1.Output },],
    };
    return AckArray;
}());
exports.AckArray = AckArray;
//# sourceMappingURL=AckArray.directive.js.map