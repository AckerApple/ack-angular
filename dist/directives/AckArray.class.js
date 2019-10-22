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
var core_1 = require("@angular/core");
var AckArray = (function () {
    function AckArray() {
        this.arrayChange = new core_1.EventEmitter();
    }
    AckArray.prototype.ngOnDestroy = function () {
        if (this.array$sub) {
            this.array$sub.unsubscribe();
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
    };
    AckArray.prototype.loop = function (_reset) { };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], AckArray.prototype, "idKeys", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], AckArray.prototype, "merge", void 0);
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
        __metadata("design:type", core_1.EventEmitter)
    ], AckArray.prototype, "array$", void 0);
    return AckArray;
}());
exports.AckArray = AckArray;
function dataKeysMatch(ao, an, idKeys) {
    for (var x = idKeys.length - 1; x >= 0; --x) {
        var idKey = idKeys[x];
        if (ao[idKey] != null && ao[idKey] !== an[idKey]) {
            return false;
        }
    }
    return true;
}
exports.dataKeysMatch = dataKeysMatch;
function mergeArrays(arrayOriginal, arrayNew, idKeys) {
    for (var x = arrayOriginal.length - 1; x >= 0; --x) {
        var ao = arrayOriginal[x];
        var an = arrayNew[x];
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
    for (var x = 0; x < arrayNew.length; ++x) {
        var ao = arrayOriginal[x];
        var an = arrayNew[x];
        var found = false;
        if (ao && dataKeysMatch(ao, an, idKeys)) {
            mergeObjects(ao, an);
            continue;
        }
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
        arrayOriginal.splice(x, 0, an);
    }
}
exports.mergeArrays = mergeArrays;
function mergeObjects(ao, an) {
    for (var x in ao) {
        delete ao[x];
    }
    Object.assign(ao, an);
}
