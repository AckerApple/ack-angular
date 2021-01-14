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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGVidWdBcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJjb21wb25lbnRzL2RlYnVnLWFyZWEvRGVidWdBcmVhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsTUFBTSxFQUFFLFlBQVksRUFDcEIsS0FBSyxFQUFFLGVBQWUsRUFBRSxZQUFZLEVBQ3BDLFNBQVMsRUFBRSxTQUFTLEVBQ3JCLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFBRSxNQUFNLElBQUksUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUE7QUFJdkQsTUFBTSxPQUFPLFNBQVM7SUFGekI7UUFPWSxTQUFJLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7SUFDdkQsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxZQUFZO2FBQ3RCOzs7bUJBQ0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7dUJBQ0wsWUFBWSxTQUFDLFVBQVU7bUJBQ3ZCLE1BQU07O0FBTU4sTUFBTSxPQUFPLFNBQVM7SUFIekI7UUFNRSxhQUFRLEdBQU8sRUFBRSxDQUFBLENBQUEsb0JBQW9CO0lBNkJ2QyxDQUFDO0lBeEJDLGVBQWU7UUFDYixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxLQUFHLENBQUMsRUFBQztZQUM1QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNuRTtJQUNILENBQUM7SUFFRCw2QkFBNkI7SUFDN0Isc0JBQXNCLENBQUMsSUFBUSxFQUFFLE1BQWEsRUFBRSxTQUFvQjtRQUNsRSxJQUFHO1lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQTtZQUMvQixLQUFJLElBQUksQ0FBQyxJQUFJLElBQUk7Z0JBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDaEMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUE7WUFDekIsbUNBQW1DO1lBQ25DLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNCO1FBQUEsT0FBTSxDQUFDLEVBQUM7WUFDUCxPQUFPLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUE7U0FDckM7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLElBQVEsRUFBRSxJQUFXLEVBQUUsU0FBb0I7UUFDL0MsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUMzQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUN2QixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxZQUFZO2dCQUNyQixRQUFRLEVBQUMsUUFBUTthQUNsQjs7O3lCQU1FLGVBQWUsU0FBQyxTQUFTOztBQTRCNUIsTUFBTSxDQUFDLE1BQU0sWUFBWSxHQUFHO0lBQzFCLFNBQVMsRUFBRSxTQUFTO0NBQ3JCLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBPdXRwdXQsIEV2ZW50RW1pdHRlciwgVGVtcGxhdGVSZWYsIEVsZW1lbnRSZWYsXG4gIElucHV0LCBDb250ZW50Q2hpbGRyZW4sIENvbnRlbnRDaGlsZCxcbiAgRGlyZWN0aXZlLCBDb21wb25lbnQsIFF1ZXJ5TGlzdFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBzdHJpbmcgYXMgdGVtcGxhdGUgfSBmcm9tIFwiLi9kZWJ1Zy1hcmVhLnRlbXBsYXRlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlwiZGVidWctaXRlbVwiXG59KSBleHBvcnQgY2xhc3MgRGVidWdJdGVte1xuICBASW5wdXQoKSBuYW1lOnN0cmluZ1xuICBASW5wdXQoKSB2YWx1ZTphbnlcbiAgQElucHV0KCkgdHlwZTpcImFycmF5XCJ8c3RyaW5nXG4gIEBDb250ZW50Q2hpbGQoXCJyb3dUaXRsZVwiKSByb3dUaXRsZTpUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPlxuICBAT3V0cHV0KCkgc2F2ZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XCJkZWJ1Zy1hcmVhXCIsXG4gIHRlbXBsYXRlOnRlbXBsYXRlXG59KSBleHBvcnQgY2xhc3MgRGVidWdBcmVhe1xuICBlZGl0OmJvb2xlYW5cbiAgZGF0YVN0cmluZzogc3RyaW5nXG4gIGVkaXRzTWFwOmFueSA9IHt9Ly9tYXAgb2YgZGVidWcgZWRpdHNcbiAgZGVidWdJdGVtOkRlYnVnSXRlbVxuICBcbiAgQENvbnRlbnRDaGlsZHJlbihEZWJ1Z0l0ZW0pIERlYnVnSXRlbXM6UXVlcnlMaXN0PERlYnVnSXRlbT5cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBpZih0aGlzLkRlYnVnSXRlbXMubGVuZ3RoPT09MSl7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLmRlYnVnSXRlbSA9IHRoaXMuRGVidWdJdGVtcy5maXJzdClcbiAgICB9XG4gIH1cblxuICAvL3VwZGF0ZSBkYXRhIGZyb20gZGVidWcgYXJlYVxuICB1cGRhdGVEYXRhQnlKc29uU3RyaW5nKGl0ZW06YW55LCBzdHJpbmc6c3RyaW5nLCBkZWJ1Z0l0ZW06IERlYnVnSXRlbSl7XG4gICAgdHJ5e1xuICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2Uoc3RyaW5nKVxuICAgICAgZm9yKGxldCB4IGluIGl0ZW0pZGVsZXRlIGl0ZW1beF1cbiAgICAgIE9iamVjdC5hc3NpZ24oaXRlbSwganNvbilcbiAgICAgIC8vdGhpcy5hcnJheUNoYW5nZS5lbWl0KHRoaXMuYXJyYXkpXG4gICAgICBkZWJ1Z0l0ZW0uc2F2ZS5lbWl0KGl0ZW0pO1xuICAgIH1jYXRjaChlKXtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2ludmFsaWQganNvbiBzdHJpbmcnKVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5KGl0ZW06YW55LCBqc29uOnN0cmluZywgZGVidWdJdGVtOiBEZWJ1Z0l0ZW0pe1xuICAgIGNvbnN0IG9iID0gSlNPTi5wYXJzZShqc29uKVxuICAgIE9iamVjdC5hc3NpZ24oaXRlbSwgb2IpXG4gICAgZGVidWdJdGVtLnNhdmUuZW1pdChpdGVtKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZGVjbGFyYXRpb25zID0gW1xuICBEZWJ1Z0l0ZW0sIERlYnVnQXJlYVxuXSJdfQ==