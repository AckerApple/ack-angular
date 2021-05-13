import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { EventEmitter, Output, Input, ContentChildren, Directive, IterableDiffers } from "@angular/core";
import { AckAggregate } from "./AckAggregate.directive";
var AckArray = /** @class */ (function () {
    function AckArray(_iterableDiffers) {
        this._iterableDiffers = _iterableDiffers;
        this.pushed = {};
        this.inSort = false;
        this.sortArray = [];
        this.pageAt = 0; //when to page aka maxrows
        this.pagesChange = new BehaviorSubject(null);
        //@Output() pagesChange:EventEmitter<any[][]> = new EventEmitter()
        //a chance to know when current viewed page should be zero
        this.page = 0;
        this.pageChange = new EventEmitter();
        this.keyMapChange = new EventEmitter();
        this.loopStart = new EventEmitter();
        this.loopEach = new EventEmitter();
        this.loopEnd = new EventEmitter();
        this.arrayChange = new EventEmitter();
        //super()
        //watch deep changes
        var f = this._iterableDiffers.find([]);
        this.iterableDiffer = f.create();
    }
    AckArray.prototype.ngOnDestroy = function () {
        if (this.array$sub) {
            this.array$sub.unsubscribe();
        }
    };
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
    //watch array deep changes
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
        if (changes.array$) {
            if (this.array$sub) {
                this.array$sub.unsubscribe();
                delete this.array$sub;
            }
            if (this.array$) {
                this.array$sub = this.array$.subscribe(function (array) {
                    if (_this.merge) {
                        mergeArrays(_this.array, array, _this.idKeys);
                    }
                    else {
                        var reset = _this.array != array;
                        _this.array = array;
                        _this.loop(reset);
                    }
                });
            }
        }
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
    /*
      performJoins(){
        this.AckArrayJoins.forEach(join=>
          join.joinTo( this.array )
        )
      }
    */
    AckArray.prototype.pushAggregates = function (aggs) {
        var _this = this;
        aggs.forEach(function (agg) {
            var memory;
            switch (agg.type) {
                //default is to sum
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
        //super.loop( reset )
        if (!this.array) {
            this.array = [];
        }
        this.loopStart.emit(reset);
        var last = this.array.length;
        for (var x = 0; x < last; ++x) {
            this.loopEach.emit({ index: x, item: this.array[x] });
        }
        //this.performJoins()
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
    /** adds to loop functionality how to create pages */
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
            _this.pages.length = 0; //dont break binding if pages remembered
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
            //this.pagesChange.emit( this.pages )
            _this.pagesChange.next(_this.pages);
        });
    };
    //reduce array down to one item
    AckArray.prototype.only = function (item) {
        this.array.length = 0;
        this.array.push(item);
        this.arrayChange.emit(this.array);
        this.loop(true);
    };
    //looks up id or the item itself is an ID
    AckArray.prototype.getItemId = function (item) {
        return this.idKeys && this.idKeys[0] && item[this.idKeys[0]];
    };
    AckArray.prototype.getCompareArray = function () {
        if (this.array && this.idKeys && this.idKeys.length) {
            var idKey_1 = this.idKeys[0];
            return this.array.map(function (item) { return item[idKey_1]; });
        }
        return this.array || [];
    };
    /*
      selected(item){
        return this.itemIndex(item) >= 0 ? true : false
      }
    */
    AckArray.prototype.itemIndex = function (item) {
        var array = this.getCompareArray();
        for (var x = array.length - 1; x >= 0; --x) {
            if (dataKeysMatch(array[x], item, this.idKeys)) {
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
        var asc = false; //most lists come pre sorted asc, our default should be desc
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
                default: //STRING BASED SORT
                    if (asc) {
                        this.array.sort(function (a, b) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                    }
                    else {
                        this.array.sort(function (b, a) { return String(toKey(a) || "").toLowerCase() > String(toKey(b) || "").toLowerCase() ? 1 : -1; });
                    }
            }
        }
        //cleanup
        if (this.sortArray.length > 3) {
            this.sortArray.pop();
        }
        this.inSort = false;
        this.loop(true); //cause pages to be updated
    };
    AckArray.decorators = [
        { type: Directive, args: [{
                    selector: "ack-array",
                    exportAs: "AckArray"
                },] }
    ];
    AckArray.ctorParameters = function () { return [
        { type: IterableDiffers }
    ]; };
    AckArray.propDecorators = {
        pageAt: [{ type: Input }],
        pages: [{ type: Input }],
        pagesChange: [{ type: Output }],
        page: [{ type: Input }],
        pageChange: [{ type: Output }],
        keyMap: [{ type: Input }],
        keyMapChange: [{ type: Output }],
        AckAggregates: [{ type: ContentChildren, args: [AckAggregate,] }],
        idKeys: [{ type: Input }],
        merge: [{ type: Input }],
        array: [{ type: Input }],
        arrayChange: [{ type: Output }],
        array$: [{ type: Input }]
    };
    return AckArray;
}());
export { AckArray };
export function dataKeysMatch(ao, an, idKeys) {
    for (var x = idKeys.length - 1; x >= 0; --x) {
        var idKey = idKeys[x];
        if (ao[idKey] != null && ao[idKey] !== an[idKey]) {
            return false;
        }
    }
    return true;
}
export function mergeArrays(arrayOriginal, arrayNew, idKeys) {
    //removals
    for (var x = arrayOriginal.length - 1; x >= 0; --x) {
        var ao = arrayOriginal[x];
        var an = arrayNew[x];
        //quick match
        if (an && dataKeysMatch(ao, an, idKeys)) {
            continue;
        }
        var found = false;
        for (var xx = arrayNew.length - 1; xx >= 0; --xx) {
            if (dataKeysMatch(ao, arrayNew[xx], idKeys)) {
                found = true;
                break;
            }
        }
        if (found)
            continue;
        arrayOriginal.splice(x, 1);
    }
    //merge and add
    for (var x = 0; x < arrayNew.length; ++x) {
        var ao = arrayOriginal[x];
        var an = arrayNew[x];
        var found = false;
        //try by index match first, may to near identical arrays
        if (ao && dataKeysMatch(ao, an, idKeys)) {
            mergeObjects(ao, an);
            continue;
        }
        //try to match by loop against loop
        for (var xx = arrayOriginal.length - 1; xx >= 0; --xx) {
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
        //not found, add to array
        //arrayOriginal.unshift(an)
        arrayOriginal.splice(x, 0, an);
    }
}
function mergeObjects(ao, an) {
    for (var x in ao) {
        delete ao[x];
    }
    Object.assign(ao, an);
}
//# sourceMappingURL=AckArray.directive.js.map