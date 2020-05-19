import { __decorate, __metadata } from "tslib";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { EventEmitter, Output, Input, ContentChildren, Directive, IterableDiffers } from "@angular/core";
import { AckAggregate } from "./AckAggregate.directive";
let AckArray = class AckArray {
    constructor(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0;
        this.pagesChange = new BehaviorSubject(null);
        this.page = 0;
        this.pageChange = new EventEmitter();
        this.keyMapChange = new EventEmitter();
        this.loopStart = new EventEmitter();
        this.loopEach = new EventEmitter();
        this.loopEnd = new EventEmitter();
        this.arrayChange = new EventEmitter();
        const f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
    }
    ngOnDestroy() {
        if (this.array$sub) {
            this.array$sub.unsubscribe();
        }
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
        if (changes.array$) {
            if (this.array$sub) {
                this.array$sub.unsubscribe();
                delete this.array$sub;
            }
            if (this.array$) {
                this.array$sub = this.array$.subscribe(array => {
                    if (this.merge) {
                        mergeArrays(this.array, array, this.idKeys);
                    }
                    else {
                        const reset = this.array != array;
                        this.array = array;
                        this.loop(reset);
                    }
                });
            }
        }
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
            this.pagesChange.next(this.pages);
        });
    }
    only(item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    }
    getItemId(item) {
        return this.idKeys && this.idKeys[0] && item[this.idKeys[0]];
    }
    getCompareArray() {
        if (this.array && this.idKeys && this.idKeys.length) {
            const idKey = this.idKeys[0];
            return this.array.map(item => item[idKey]);
        }
        return this.array || [];
    }
    itemIndex(item) {
        const array = this.getCompareArray();
        for (let x = array.length - 1; x >= 0; --x) {
            if (dataKeysMatch(array[x], item, this.idKeys)) {
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
    Input(),
    __metadata("design:type", Number)
], AckArray.prototype, "pageAt", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], AckArray.prototype, "pages", void 0);
__decorate([
    Output(),
    __metadata("design:type", BehaviorSubject)
], AckArray.prototype, "pagesChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], AckArray.prototype, "page", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], AckArray.prototype, "pageChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], AckArray.prototype, "keyMap", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AckArray.prototype, "keyMapChange", void 0);
__decorate([
    ContentChildren(AckAggregate),
    __metadata("design:type", Array)
], AckArray.prototype, "AckAggregates", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], AckArray.prototype, "idKeys", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], AckArray.prototype, "merge", void 0);
__decorate([
    Input(),
    __metadata("design:type", Array)
], AckArray.prototype, "array", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], AckArray.prototype, "arrayChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", EventEmitter)
], AckArray.prototype, "array$", void 0);
AckArray = __decorate([
    Directive({
        selector: "ack-array",
        exportAs: "AckArray"
    }),
    __metadata("design:paramtypes", [IterableDiffers])
], AckArray);
export { AckArray };
export function dataKeysMatch(ao, an, idKeys) {
    for (let x = idKeys.length - 1; x >= 0; --x) {
        let idKey = idKeys[x];
        if (ao[idKey] != null && ao[idKey] !== an[idKey]) {
            return false;
        }
    }
    return true;
}
export function mergeArrays(arrayOriginal, arrayNew, idKeys) {
    for (let x = arrayOriginal.length - 1; x >= 0; --x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        if (an && dataKeysMatch(ao, an, idKeys)) {
            continue;
        }
        let found = false;
        for (let xx = arrayNew.length - 1; xx >= 0; --xx) {
            if (dataKeysMatch(ao, arrayNew[xx], idKeys)) {
                found = true;
                break;
            }
        }
        if (found)
            continue;
        arrayOriginal.splice(x, 1);
    }
    for (let x = 0; x < arrayNew.length; ++x) {
        let ao = arrayOriginal[x];
        let an = arrayNew[x];
        let found = false;
        if (ao && dataKeysMatch(ao, an, idKeys)) {
            mergeObjects(ao, an);
            continue;
        }
        for (let xx = arrayOriginal.length - 1; xx >= 0; --xx) {
            ao = arrayOriginal[xx];
            if (dataKeysMatch(ao, an, idKeys)) {
                mergeObjects(ao, an);
                found = true;
                continue;
            }
        }
        if (found) {
            continue;
        }
        arrayOriginal.splice(x, 0, an);
    }
}
function mergeObjects(ao, an) {
    for (let x in ao) {
        delete ao[x];
    }
    Object.assign(ao, an);
}
