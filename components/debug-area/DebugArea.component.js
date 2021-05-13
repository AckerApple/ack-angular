"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.declarations = exports.DebugArea = exports.DebugItem = void 0;
var core_1 = require("@angular/core");
var debug_area_template_1 = require("./debug-area.template");
var DebugItem = /** @class */ (function () {
    function DebugItem() {
        this.save = new core_1.EventEmitter();
    }
    DebugItem.decorators = [
        { type: core_1.Directive, args: [{
                    selector: "debug-item"
                },] }
    ];
    DebugItem.propDecorators = {
        name: [{ type: core_1.Input }],
        value: [{ type: core_1.Input }],
        type: [{ type: core_1.Input }],
        rowTitle: [{ type: core_1.ContentChild, args: ["rowTitle",] }],
        save: [{ type: core_1.Output }]
    };
    return DebugItem;
}());
exports.DebugItem = DebugItem;
var DebugArea = /** @class */ (function () {
    function DebugArea() {
        this.editsMap = {}; //map of debug edits
    }
    DebugArea.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(function () { return _this.debugItem = _this.DebugItems.first; });
        }
    };
    //update data from debug area
    DebugArea.prototype.updateDataByJsonString = function (item, string, debugItem) {
        try {
            var json = JSON.parse(string);
            for (var x in item)
                delete item[x];
            Object.assign(item, json);
            //this.arrayChange.emit(this.array)
            debugItem.save.emit(item);
        }
        catch (e) {
            console.error('invalid json string');
        }
    };
    DebugArea.prototype.apply = function (item, json, debugItem) {
        var ob = JSON.parse(json);
        Object.assign(item, ob);
        debugItem.save.emit(item);
    };
    DebugArea.decorators = [
        { type: core_1.Component, args: [{
                    selector: "debug-area",
                    template: debug_area_template_1.string
                },] }
    ];
    DebugArea.propDecorators = {
        DebugItems: [{ type: core_1.ContentChildren, args: [DebugItem,] }]
    };
    return DebugArea;
}());
exports.DebugArea = DebugArea;
exports.declarations = [
    DebugItem, DebugArea
];
//# sourceMappingURL=DebugArea.component.js.map