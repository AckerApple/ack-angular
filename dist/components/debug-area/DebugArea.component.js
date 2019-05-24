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
var debug_area_template_1 = require("./debug-area.template");
var DebugItem = (function () {
    function DebugItem() {
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DebugItem.prototype, "name", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], DebugItem.prototype, "value", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], DebugItem.prototype, "type", void 0);
    __decorate([
        core_1.ContentChild("rowTitle"),
        __metadata("design:type", core_1.TemplateRef)
    ], DebugItem.prototype, "rowTitle", void 0);
    DebugItem = __decorate([
        core_1.Directive({
            selector: "debug-item"
        })
    ], DebugItem);
    return DebugItem;
}());
exports.DebugItem = DebugItem;
var DebugArea = (function () {
    function DebugArea() {
        this.editsMap = {};
    }
    DebugArea.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(function () { return _this.debugItem = _this.DebugItems.first; });
        }
    };
    DebugArea.prototype.updateDataByJsonString = function (item, string) {
        try {
            var json = JSON.parse(string);
            for (var x in item)
                delete item[x];
            Object.assign(item, json);
        }
        catch (e) {
            console.error('invalid json string');
        }
    };
    DebugArea.prototype.apply = function (item, json) {
        var ob = JSON.parse(json);
        Object.assign(item, ob);
    };
    __decorate([
        core_1.ContentChildren(DebugItem),
        __metadata("design:type", core_1.QueryList)
    ], DebugArea.prototype, "DebugItems", void 0);
    DebugArea = __decorate([
        core_1.Component({
            selector: "debug-area",
            template: debug_area_template_1.string
        })
    ], DebugArea);
    return DebugArea;
}());
exports.DebugArea = DebugArea;
exports.declarations = [
    DebugItem, DebugArea
];
