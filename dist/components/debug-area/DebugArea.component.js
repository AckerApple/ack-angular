import { Output, EventEmitter, TemplateRef, Input, ContentChildren, ContentChild, Directive, Component, QueryList } from "@angular/core";
import { string as template } from "./debug-area.template";
export class DebugItem {
    constructor() {
        this.save = new EventEmitter();
    }
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
export class DebugArea {
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
}
DebugArea.decorators = [
    { type: Component, args: [{
                selector: "debug-area",
                template: template
            },] }
];
DebugArea.propDecorators = {
    DebugItems: [{ type: ContentChildren, args: [DebugItem,] }]
};
export const declarations = [
    DebugItem, DebugArea
];
