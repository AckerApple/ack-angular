import { Output, EventEmitter, Input, ContentChildren, ContentChild, Directive, Component } from "@angular/core";
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
        this.editsMap = {}; //map of debug edits
    }
    ngAfterViewInit() {
        if (this.DebugItems.length === 1) {
            Promise.resolve().then(() => this.debugItem = this.DebugItems.first);
        }
    }
    //update data from debug area
    updateDataByJsonString(item, string, debugItem) {
        try {
            const json = JSON.parse(string);
            for (let x in item)
                delete item[x];
            Object.assign(item, json);
            //this.arrayChange.emit(this.array)
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
                selector: "debug-area", template
            },] }
];
DebugArea.propDecorators = {
    DebugItems: [{ type: ContentChildren, args: [DebugItem,] }]
};
export const debugDeclarations = [
    DebugItem, DebugArea
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdBcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2RlYnVnLWFyZWEvRGVidWdBcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUFFLFlBQVksRUFDcEIsS0FBSyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQ3BDLFNBQVMsRUFBRSxTQUFTLEVBQ3JCLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFBRSxNQUFNLElBQUksUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFJdkQsTUFBTSxPQUFPLFNBQVM7SUFGekI7UUFPWSxTQUFJLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7SUFDdkQsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxZQUFZO2FBQ3RCOzs7bUJBQ0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsWUFBWSxTQUFDLFVBQVU7bUJBQ3ZCLE1BQU07O0FBS04sTUFBTSxPQUFPLFNBQVM7SUFGekI7UUFLRSxhQUFRLEdBQVMsRUFBRSxDQUFBLENBQUEsb0JBQW9CO0lBNkJ6QyxDQUFDO0lBeEJDLGVBQWU7UUFDYixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFHLENBQUMsRUFBQztZQUM1QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFFRCw2QkFBNkI7SUFDN0Isc0JBQXNCLENBQUMsSUFBUSxFQUFFLE1BQWEsRUFBRSxTQUFvQjtRQUNsRSxJQUFHO1lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMvQixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7Z0JBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDekIsbUNBQW1DO1lBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDckM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVEsRUFBRSxJQUFXLEVBQUUsU0FBb0I7UUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFqQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxZQUFZLEVBQUUsUUFBUTthQUNoQzs7O3lCQU1FLGVBQWUsU0FBQyxTQUFTOztBQTRCNUIsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUc7SUFDL0IsU0FBUyxFQUFFLFNBQVM7Q0FDckIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZixcbiAgSW5wdXQsIENvbnRlbnRDaGlsZHJlbiwgQ29udGVudENoaWxkLFxuICBEaXJlY3RpdmUsIENvbXBvbmVudCwgUXVlcnlMaXN0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IHN0cmluZyBhcyB0ZW1wbGF0ZSB9IGZyb20gXCIuL2RlYnVnLWFyZWEudGVtcGxhdGVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XCJkZWJ1Zy1pdGVtXCJcbn0pIGV4cG9ydCBjbGFzcyBEZWJ1Z0l0ZW17XG4gIEBJbnB1dCgpIG5hbWUhOiBzdHJpbmdcbiAgQElucHV0KCkgdmFsdWU6IGFueVxuICBASW5wdXQoKSB0eXBlITogXCJhcnJheVwifHN0cmluZ1xuICBAQ29udGVudENoaWxkKFwicm93VGl0bGVcIikgcm93VGl0bGUhOiBUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPlxuICBAT3V0cHV0KCkgc2F2ZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XCJkZWJ1Zy1hcmVhXCIsIHRlbXBsYXRlXG59KSBleHBvcnQgY2xhc3MgRGVidWdBcmVhe1xuICBlZGl0ITpib29sZWFuXG4gIGRhdGFTdHJpbmchOiBzdHJpbmdcbiAgZWRpdHNNYXA/OiBhbnkgPSB7fS8vbWFwIG9mIGRlYnVnIGVkaXRzXG4gIGRlYnVnSXRlbSE6RGVidWdJdGVtXG5cbiAgQENvbnRlbnRDaGlsZHJlbihEZWJ1Z0l0ZW0pIERlYnVnSXRlbXMhOiBRdWVyeUxpc3Q8RGVidWdJdGVtPlxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIGlmKHRoaXMuRGVidWdJdGVtcy5sZW5ndGg9PT0xKXtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMuZGVidWdJdGVtID0gdGhpcy5EZWJ1Z0l0ZW1zLmZpcnN0KVxuICAgIH1cbiAgfVxuXG4gIC8vdXBkYXRlIGRhdGEgZnJvbSBkZWJ1ZyBhcmVhXG4gIHVwZGF0ZURhdGFCeUpzb25TdHJpbmcoaXRlbTphbnksIHN0cmluZzpzdHJpbmcsIGRlYnVnSXRlbTogRGVidWdJdGVtKXtcbiAgICB0cnl7XG4gICAgICBjb25zdCBqc29uID0gSlNPTi5wYXJzZShzdHJpbmcpXG4gICAgICBmb3IobGV0IHggaW4gaXRlbSlkZWxldGUgaXRlbVt4XVxuICAgICAgT2JqZWN0LmFzc2lnbihpdGVtLCBqc29uKVxuICAgICAgLy90aGlzLmFycmF5Q2hhbmdlLmVtaXQodGhpcy5hcnJheSlcbiAgICAgIGRlYnVnSXRlbS5zYXZlLmVtaXQoaXRlbSk7XG4gICAgfWNhdGNoKGUpe1xuICAgICAgY29uc29sZS5lcnJvcignaW52YWxpZCBqc29uIHN0cmluZycpXG4gICAgfVxuICB9XG5cbiAgYXBwbHkoaXRlbTphbnksIGpzb246c3RyaW5nLCBkZWJ1Z0l0ZW06IERlYnVnSXRlbSl7XG4gICAgY29uc3Qgb2IgPSBKU09OLnBhcnNlKGpzb24pXG4gICAgT2JqZWN0LmFzc2lnbihpdGVtLCBvYilcbiAgICBkZWJ1Z0l0ZW0uc2F2ZS5lbWl0KGl0ZW0pO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBkZWJ1Z0RlY2xhcmF0aW9ucyA9IFtcbiAgRGVidWdJdGVtLCBEZWJ1Z0FyZWFcbl0iXX0=