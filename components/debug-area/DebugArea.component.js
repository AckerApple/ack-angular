import { Output, EventEmitter, TemplateRef, Input, ContentChildren, ContentChild, Directive, Component, QueryList } from "@angular/core";
import { string as template } from "./debug-area.template";
var DebugItem = /** @class */ (function () {
    function DebugItem() {
        this.save = new EventEmitter();
    }
    DebugItem.decorators = [
        { type: Directive, args: [{
                    selector: "debug-item"
                },] }
    ];
    DebugItem.propDecorators = {
        name: [{ type: Input }],
        value: [{ type: Input }],
        type: [{ type: Input }],
        rowTitle: [{ type: ContentChild, args: ["rowTitle",] }],
        save: [{ type: Output }]
    };
    return DebugItem;
}());
export { DebugItem };
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
        { type: Component, args: [{
                    selector: "debug-area",
                    template: template
                },] }
    ];
    DebugArea.propDecorators = {
        DebugItems: [{ type: ContentChildren, args: [DebugItem,] }]
    };
    return DebugArea;
}());
export { DebugArea };
export var declarations = [
    DebugItem, DebugArea
];
//# sourceMappingURL=DebugArea.component.js.map