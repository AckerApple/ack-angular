"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var BehaviorSubject_1 = require("rxjs/internal/BehaviorSubject");
var core_1 = require("@angular/core");
var AckAggregate_directive_1 = require("./AckAggregate.directive");
var AckArray = (function () {
    function AckArray(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0;
        this.pagesChange = new BehaviorSubject_1.BehaviorSubject(null);
        this.page = 0;
        this.pageChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
        this.keyMapChange = new core_1.EventEmitter();
        this.loopStart = new core_1.EventEmitter();
        this.loopEach = new core_1.EventEmitter();
        this.loopEnd = new core_1.EventEmitter();
        var f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
    }
    AckArray.prototype.ngOnInit = function () {
        var _this = this;
        if (this.keyMapChange.observers.length) {
            if (!this.keyMap) {
                Promise.resolve().then(function () {
                    _this.keyMap = {};
                    _this.keyMapChange.emit(_this.keyMap);
                });
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
        Promise.resolve().then(function () {
            return _this.loop(true);
        });
    };
    AckArray.prototype.ngDoCheck = function () {
        var _this = this;
        if (!this.inited)
            return;
        var changes = this.iterableDiffer.diff(this.array);
        if (changes) {
            Promise.resolve().then(function () {
                return _this.loop(false);
            });
        }
    };
    AckArray.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var loop = changes.array ? true : false;
        if (changes.pageAt) {
            this.pushCreatePages();
            loop = true;
        }
        if (this.inited && loop) {
            Promise.resolve().then(function () {
                return _this.loop(true);
            });
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
    AckArray.prototype.loop = function (reset) {
        if (!this.array) {
            this.array = [];
        }
        this.loopStart.emit(reset);
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
        this.loopStart.subscribe(function (reset) {
            pos = 0;
            last = _this.array.length;
            if (reset) {
                _this.pageChange.emit(_this.page = 0);
            }
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
            if (_this.page && _this.page >= _this.pages.length) {
                _this.pageChange.emit(_this.page = 0);
            }
            _this.pagesChange.next(_this.pages);
        });
    };
    AckArray.prototype.only = function (item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
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
        this.loop(false);
        return this;
    };
    AckArray.prototype.unshift = function (item) {
        this.param().unshift(item);
        return this;
    };
    AckArray.prototype.splice = function (x, y) {
        if (y === void 0) { y = 1; }
        this.param().splice(x, y);
        this.loop(false);
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
            if (value == null || index == arrayKey.length - 1) {
                return value;
            }
            return toKey(value, index + 1);
        };
        if (arrayKey.constructor != Array) {
            arrayKey = [arrayKey];
        }
        var numberSort = !isNaN(sortType) || ["int", "number"].indexOf(sortType) >= 0;
        if (numberSort) {
            if (asc) {
                this.array.sort(function (a, b) { return Number(toKey(a)) - Number(toKey(b)); });
            }
            else {
                this.array.sort(function (b, a) { return Number(toKey(a)) - Number(toKey(b)); });
            }
        }
        else {
            switch (sortType) {
                case "date":
                case "time":
                case "datetime":
                    if (asc) {
                        this.array.sort(function (a, b) {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    else {
                        this.array.sort(function (b, a) {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    break;
                default:
                    if (asc) {
                        this.array.sort(function (a, b) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                    }
                    else {
                        this.array.sort(function (b, a) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                    }
            }
        }
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop(true);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckArray.prototype, "idKey", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckArray.prototype, "pageAt", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckArray.prototype, "pages", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", BehaviorSubject_1.BehaviorSubject)
    ], AckArray.prototype, "pagesChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], AckArray.prototype, "page", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], AckArray.prototype, "pageChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckArray.prototype, "array", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AckArray.prototype, "arrayChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], AckArray.prototype, "keyMap", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AckArray.prototype, "keyMapChange", void 0);
    __decorate([
        core_1.ContentChildren(AckAggregate_directive_1.AckAggregate),
        __metadata("design:type", Array)
    ], AckArray.prototype, "AckAggregates", void 0);
    AckArray = __decorate([
        core_1.Directive({
            selector: "ack-array",
            exportAs: "AckArray"
        }),
        __metadata("design:paramtypes", [core_1.IterableDiffers])
    ], AckArray);
    return AckArray;
}());
exports.AckArray = AckArray;
