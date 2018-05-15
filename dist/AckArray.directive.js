"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AckAggregate_directive_1 = require("./AckAggregate.directive");
var AckArray = (function () {
    function AckArray() {
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.refChange = new core_1.EventEmitter();
        this.pageAt = 0;
        this.pagesChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
        this.keyMapChange = new core_1.EventEmitter();
        this.loopStart = new core_1.EventEmitter();
        this.loopEach = new core_1.EventEmitter();
        this.loopEnd = new core_1.EventEmitter();
    }
    AckArray.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.refChange.emit(_this);
        }, 0);
        if (this.keyMapChange.observers.length) {
            if (!this.keyMap) {
                setTimeout(function () {
                    _this.keyMap = {};
                    _this.keyMapChange.emit(_this.keyMap);
                }, 0);
            }
            this.pushCreateMap();
        }
    };
    AckArray.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.AckAggregates) {
            this.pushAggregates(this.AckAggregates);
        }
        this.inited = true;
        setTimeout(function () { return _this.loop(); }, 0);
    };
    AckArray.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var loop = changes.array ? true : false;
        if (changes.pageAt) {
            this.pushCreatePages();
            loop = true;
        }
        if (this.inited && loop) {
            setTimeout(function () { return _this.loop(); }, 0);
        }
    };
    AckArray.prototype.pushAggregates = function (aggs) {
        var _this = this;
        aggs.forEach(function (agg) {
            var memory;
            switch (agg.type) {
                default: {
                    _this.loopStart.subscribe(function () { return memory = 0; });
                    _this.loopEach.subscribe(function (loop) {
                        var value = _this.getItemValueByKeys(loop.item, agg.keys);
                        if (value) {
                            memory = memory + value;
                        }
                    });
                    _this.loopEnd.subscribe(function () {
                        agg.output = memory;
                        agg.outputChange.emit(memory);
                    });
                }
            }
        });
    };
    AckArray.prototype.getItemValueByKeys = function (item, keys) {
        for (var x = 0; x < keys.length; ++x) {
            var keyName = keys[x];
            item = item[keyName];
            if (item == null)
                return null;
        }
        return item;
    };
    AckArray.prototype.loop = function () {
        if (!this.array)
            return;
        this.loopStart.emit();
        var last = this.array.length;
        for (var x = 0; x < last; ++x) {
            this.loopEach.emit({ index: x, item: this.array[x] });
        }
        this.loopEnd.emit();
    };
    AckArray.prototype.pushCreateMap = function () {
        var _this = this;
        if (this.pushed.createMap)
            return;
        this.pushed.createMap = true;
        this.loopStart.subscribe(function () { return _this.keyMap = {}; });
        this.loopEach.subscribe(function (ob) {
            var key = _this.getItemId(ob.item);
            _this.keyMap[key] = ob.item;
        });
        this.loopEnd.subscribe(function () { return _this.keyMapChange.emit(_this.keyMap); });
    };
    AckArray.prototype.pushCreatePages = function () {
        var _this = this;
        if (this.pushed.createPages)
            return;
        this.pushed.createPages = true;
        var pos = 0;
        var last = 0;
        this.loopStart.subscribe(function () {
            pos = 0;
            last = _this.array.length;
            _this.pages = _this.pages || [];
            _this.pages.length = 0;
            _this.pages.push([]);
        });
        this.loopEach.subscribe(function (ob) {
            _this.pages[pos].push(ob.item);
            if (_this.pages[pos].length == _this.pageAt && ob.index < last - 1) {
                _this.pages.push([]);
                ++pos;
            }
        });
        this.loopEnd.subscribe(function () {
            _this.pagesChange.emit(_this.pages);
        });
    };
    AckArray.prototype.only = function (item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop();
    };
    AckArray.prototype.getItemId = function (item, itemIndexName) {
        itemIndexName = itemIndexName || this.idKey;
        return itemIndexName ? item[itemIndexName] : item;
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
    AckArray.prototype.itemIndex = function (item, itemIndexName) {
        var array = this.getCompareArray();
        var itemId = this.getItemId(item, itemIndexName);
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
        this.loop();
        return this;
    };
    AckArray.prototype.unshift = function (item) {
        this.param().unshift(item);
        return this;
    };
    AckArray.prototype.splice = function (x, y) {
        if (y === void 0) { y = 1; }
        this.param().splice(x, y);
        this.loop();
        return this;
    };
    AckArray.prototype.param = function () {
        if (!this.array)
            this.arrayChange.emit(this.array = []);
        return this.array;
    };
    AckArray.prototype.toggleSort = function (arrayKey, sortType) {
        if (this.inSort)
            return false;
        this.inSort = true;
        var asc = false;
        if (this.sortArray.length && this.sortArray[0].arrayKey) {
            asc = !this.sortArray[0].asc;
            this.sortArray[0] = {
                arrayKey: arrayKey,
                asc: !this.sortArray[0].asc
            };
        }
        else {
            this.sortArray.unshift({
                arrayKey: arrayKey,
                asc: asc
            });
        }
        var toKey = function (a, index) {
            if (index === void 0) { index = 0; }
            var value = a[arrayKey[index]];
            if (index == arrayKey.length - 1) {
                return value;
            }
            return toKey(value, index + 1);
        };
        if (arrayKey.constructor != Array) {
            arrayKey = [arrayKey];
        }
        var numberSort = !isNaN(sortType) && sortType === 'int';
        if (!numberSort) {
            switch (sortType) {
                case 'date':
                    if (asc) {
                        this.array.sort(function (a, b) {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == 'Invalid Date' || a > b ? -1 : b == 'Invalid Date' || a < b ? 1 : 0;
                        });
                    }
                    else {
                        this.array.sort(function (b, a) {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == 'Invalid Date' || a > b ? -1 : b == 'Invalid Date' || a < b ? 1 : 0;
                        });
                    }
                    break;
                default:
                    if (asc) {
                        this.array.sort(function (a, b) { return String(toKey(a) || '').toLowerCase() > String(toKey(b) || '').toLowerCase() ? 1 : -1; });
                    }
                    else {
                        this.array.sort(function (b, a) { return String(toKey(a) || '').toLowerCase() > String(toKey(b) || '').toLowerCase() ? 1 : -1; });
                    }
            }
        }
        else {
            if (asc) {
                this.array.sort(function (a, b) { return Number(toKey(a)) - Number(toKey(b)); });
            }
            else {
                this.array.sort(function (b, a) { return Number(toKey(a)) - Number(toKey(b)); });
            }
        }
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop();
    };
    AckArray.decorators = [
        { type: core_1.Directive, args: [{
                    selector: 'ack-array'
                },] },
    ];
    AckArray.propDecorators = {
        "idKey": [{ type: core_1.Input },],
        "ref": [{ type: core_1.Input },],
        "refChange": [{ type: core_1.Output },],
        "pageAt": [{ type: core_1.Input },],
        "pages": [{ type: core_1.Input },],
        "pagesChange": [{ type: core_1.Output },],
        "array": [{ type: core_1.Input },],
        "arrayChange": [{ type: core_1.Output },],
        "keyMap": [{ type: core_1.Input },],
        "keyMapChange": [{ type: core_1.Output },],
        "AckAggregates": [{ type: core_1.ContentChildren, args: [AckAggregate_directive_1.AckAggregate,] },],
    };
    return AckArray;
}());
exports.AckArray = AckArray;
