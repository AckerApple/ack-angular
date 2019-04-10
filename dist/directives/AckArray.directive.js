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
const core_1 = require("@angular/core");
const AckAggregate_directive_1 = require("./AckAggregate.directive");
let AckArray = class AckArray {
    constructor(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0;
        this.pagesChange = new core_1.EventEmitter();
        this.page = 0;
        this.pageChange = new core_1.EventEmitter();
        this.arrayChange = new core_1.EventEmitter();
        this.keyMapChange = new core_1.EventEmitter();
        this.loopStart = new core_1.EventEmitter();
        this.loopEach = new core_1.EventEmitter();
        this.loopEnd = new core_1.EventEmitter();
        const f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
    }
    ngOnInit() {
        if (this.keyMapChange.observers.length) {
            if (!this.keyMap) {
                Promise.resolve().then(() => {
                    this.keyMap = {};
                    this.keyMapChange.emit(this.keyMap);
                });
            }
            this.pushCreateMap();
        }
    }
    ngAfterViewInit() {
        if (this.AckAggregates) {
            this.pushAggregates(this.AckAggregates);
        }
        this.inited = true;
        Promise.resolve().then(() => this.loop(true));
    }
    ngDoCheck() {
        if (!this.inited)
            return;
        let changes = this.iterableDiffer.diff(this.array);
        if (changes) {
            Promise.resolve().then(() => this.loop(false));
        }
    }
    ngOnChanges(changes) {
        let loop = changes.array ? true : false;
        if (changes.pageAt) {
            this.pushCreatePages();
            loop = true;
        }
        if (this.inited && loop) {
            Promise.resolve().then(() => this.loop(true));
        }
    }
    pushAggregates(aggs) {
        aggs.forEach(agg => {
            let memory;
            switch (agg.type) {
                default: {
                    this.loopStart.subscribe(() => memory = 0);
                    this.loopEach.subscribe(loop => {
                        const value = this.getItemValueByKeys(loop.item, agg.keys);
                        if (value) {
                            memory = memory + value;
                        }
                    });
                    this.loopEnd.subscribe(() => {
                        agg.output = memory;
                        agg.outputChange.emit(memory);
                    });
                }
            }
        });
    }
    getItemValueByKeys(item, keys) {
        for (let x = 0; x < keys.length; ++x) {
            let keyName = keys[x];
            item = item[keyName];
            if (item == null)
                return null;
        }
        return item;
    }
    loop(reset) {
        if (!this.array) {
            this.array = [];
        }
        this.loopStart.emit(reset);
        const last = this.array.length;
        for (let x = 0; x < last; ++x) {
            this.loopEach.emit({ index: x, item: this.array[x] });
        }
        this.loopEnd.emit();
    }
    pushCreateMap() {
        if (this.pushed.createMap)
            return;
        this.pushed.createMap = true;
        this.loopStart.subscribe(() => this.keyMap = {});
        this.loopEach.subscribe(ob => {
            let key = this.getItemId(ob.item);
            this.keyMap[key] = ob.item;
        });
        this.loopEnd.subscribe(() => this.keyMapChange.emit(this.keyMap));
    }
    pushCreatePages() {
        if (this.pushed.createPages)
            return;
        this.pushed.createPages = true;
        let pos = 0;
        let last = 0;
        this.loopStart.subscribe(reset => {
            pos = 0;
            last = this.array.length;
            if (reset) {
                this.pageChange.emit(this.page = 0);
            }
            this.pages = this.pages || [];
            this.pages.length = 0;
            this.pages.push([]);
        });
        this.loopEach.subscribe(ob => {
            this.pages[pos].push(ob.item);
            if (this.pages[pos].length == this.pageAt && ob.index < last - 1) {
                this.pages.push([]);
                ++pos;
            }
        });
        this.loopEnd.subscribe(() => {
            if (this.page && this.page >= this.pages.length) {
                this.pageChange.emit(this.page = 0);
            }
            this.pagesChange.emit(this.pages);
        });
    }
    only(item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    }
    getItemId(item, itemIndexName) {
        itemIndexName = itemIndexName || this.idKey;
        return itemIndexName ? item[itemIndexName] : item;
    }
    getCompareArray() {
        if (this.array && this.idKey) {
            return this.array.map(item => item[this.idKey]);
        }
        return this.array || [];
    }
    selected(item) {
        return this.itemIndex(item) >= 0 ? true : false;
    }
    itemIndex(item, itemIndexName) {
        const array = this.getCompareArray();
        const itemId = this.getItemId(item, itemIndexName);
        for (let x = array.length - 1; x >= 0; --x) {
            if (itemId == array[x]) {
                return x;
            }
        }
        return -1;
    }
    toggle(item) {
        const index = this.itemIndex(item);
        if (index >= 0) {
            return this.splice(index);
        }
        return this.push(item);
    }
    push(item) {
        this.param().push(item);
        this.loop(false);
        return this;
    }
    unshift(item) {
        this.param().unshift(item);
        return this;
    }
    splice(x, y = 1) {
        this.param().splice(x, y);
        this.loop(false);
        return this;
    }
    param() {
        if (!this.array)
            this.arrayChange.emit(this.array = []);
        return this.array;
    }
    toggleSort(arrayKey, sortType) {
        if (this.inSort)
            return false;
        this.inSort = true;
        let asc = false;
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
        const toKey = function (a, index = 0) {
            const value = a[arrayKey[index]];
            if (value == null || index == arrayKey.length - 1) {
                return value;
            }
            return toKey(value, index + 1);
        };
        if (arrayKey.constructor != Array) {
            arrayKey = [arrayKey];
        }
        const numberSort = !isNaN(sortType) || ["int", "number"].indexOf(sortType) >= 0;
        if (numberSort) {
            if (asc) {
                this.array.sort((a, b) => Number(toKey(a)) - Number(toKey(b)));
            }
            else {
                this.array.sort((b, a) => Number(toKey(a)) - Number(toKey(b)));
            }
        }
        else {
            switch (sortType) {
                case "date":
                case "time":
                case "datetime":
                    if (asc) {
                        this.array.sort((a, b) => {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    else {
                        this.array.sort((b, a) => {
                            a = new Date(toKey(a, 0));
                            b = new Date(toKey(b, 0));
                            return a == "Invalid Date" || a > b ? -1 : b == "Invalid Date" || a < b ? 1 : 0;
                        });
                    }
                    break;
                default:
                    if (asc) {
                        this.array.sort((a, b) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
                    else {
                        this.array.sort((b, a) => String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1);
                    }
            }
        }
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop(true);
    }
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
    __metadata("design:type", Object)
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
exports.AckArray = AckArray;
