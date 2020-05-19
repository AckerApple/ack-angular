import { __decorate, __metadata } from "tslib";
import { Output, EventEmitter, TemplateRef, Input, ContentChildren, ContentChild, Directive, Component, QueryList } from "@angular/core";
import { string as template } from "./debug-area.template";
let DebugItem = class DebugItem {
    constructor() {
        this.save = new EventEmitter();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], DebugItem.prototype, "name", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], DebugItem.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], DebugItem.prototype, "type", void 0);
__decorate([
    ContentChild("rowTitle"),
    __metadata("design:type", TemplateRef)
], DebugItem.prototype, "rowTitle", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], DebugItem.prototype, "save", void 0);
DebugItem = __decorate([
    Directive({
        selector: "debug-item"
    })
], DebugItem);
export { DebugItem };
let DebugArea = class DebugArea {
    constructor() {
        this.editsMap = {};
    }
    ngAfterViewInit() {
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(() => this.debugItem = this.DebugItems.first);
        }
    }
    updateDataByJsonString(item, string, debugItem) {
        try {
            const json = JSON.parse(string);
            for (let x in item)
                delete item[x];
            Object.assign(item, json);
            debugItem.save.emit(item);
        }
        catch (e) {
            console.error('invalid json string');
        }
    }
    apply(item, json, debugItem) {
        const ob = JSON.parse(json);
        Object.assign(item, ob);
        debugItem.save.emit(item);
    }
};
__decorate([
    ContentChildren(DebugItem),
    __metadata("design:type", QueryList)
], DebugArea.prototype, "DebugItems", void 0);
DebugArea = __decorate([
    Component({
        selector: "debug-area",
        template: template
    })
], DebugArea);
export { DebugArea };
export const declarations = [
    DebugItem, DebugArea
];
