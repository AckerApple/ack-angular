import { 
//TemplateRef,
Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./Prompts";
export class AckApp {
    constructor(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.fixedElms = [];
        this.modals = [];
    }
    registerModal(item) {
        this.modals.push(item);
        return this;
    }
    unregisterModal(item) {
        for (let index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    }
}
AckApp.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckApp, deps: [{ token: i1.Prompts }], target: i0.ɵɵFactoryTarget.Injectable });
AckApp.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckApp });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckApp, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Prompts }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrQXBwLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUNMLGNBQWM7QUFDZCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUE7OztBQVdSLE1BQU0sT0FBTyxNQUFNO0lBTy9CLFlBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBTm5DLHNCQUFpQixHQUFZLElBQUksQ0FBQTtRQUdqQyxjQUFTLEdBQXFCLEVBQUUsQ0FBQTtRQUNoQyxXQUFNLEdBQWMsRUFBRSxDQUFBO0lBRWdCLENBQUM7SUFFdkMsYUFBYSxDQUFFLElBQWE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdEIsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRUQsZUFBZSxDQUFFLElBQWE7UUFDNUIsS0FBSSxJQUFJLEtBQUssR0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsS0FBSyxJQUFJLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBQztZQUN0RCxJQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUUsSUFBSSxFQUFDO2dCQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzNCLE1BQUs7YUFDTjtTQUNGO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDOzttR0F0QndCLE1BQU07dUdBQU4sTUFBTTsyRkFBTixNQUFNO2tCQUFoQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgLy9UZW1wbGF0ZVJlZixcbiAgSW5qZWN0YWJsZSxcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBBY2tNb2RhbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Fja01vZGFsLmNvbXBvbmVudFwiXG4vL2ltcG9ydCB7IEFja1NlY3Rpb25UZW1wbGF0ZXMgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2tTZWN0aW9uVGVtcGxhdGVzLmNvbXBvbmVudFwiXG4vL2ltcG9ydCB7IEFja0FwcEhlYWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Fja0FwcEhlYWRlci5jb21wb25lbnRcIlxuLy9pbXBvcnQgeyBBY2tBcHBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2tBcHBGb290ZXIuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja0ZpeGVkRWxlbWVudCB9IGZyb20gXCIuLi9jb21wb25lbnRzL0Fja0ZpeGVkRWxlbWVudC5jb21wb25lbnRcIlxuaW1wb3J0IHtcbiAgLy9wcm9tcHQsXG4gIFByb21wdHNcbn0gZnJvbSBcIi4vUHJvbXB0c1wiXG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIEFja0FwcHtcbiAgd2FybmVkRml4RWxlbWVudHM6IGJvb2xlYW4gPSB0cnVlXG4gIGZpeGVkRWxlbWVudFN0YWdlITogRWxlbWVudFJlZlxuXG4gIGZpeGVkRWxtczpBY2tGaXhlZEVsZW1lbnRbXSA9IFtdXG4gIG1vZGFsczpBY2tNb2RhbFtdID0gW11cblxuICBjb25zdHJ1Y3RvciggcHVibGljIHByb21wdHM6UHJvbXB0cyApe31cblxuICByZWdpc3Rlck1vZGFsKCBpdGVtOkFja01vZGFsICk6QWNrQXBwe1xuICAgIHRoaXMubW9kYWxzLnB1c2goaXRlbSlcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgdW5yZWdpc3Rlck1vZGFsKCBpdGVtOkFja01vZGFsICl7XG4gICAgZm9yKGxldCBpbmRleD10aGlzLm1vZGFscy5sZW5ndGgtMTsgaW5kZXggPj0gMDsgLS1pbmRleCl7XG4gICAgICBpZih0aGlzLm1vZGFsc1tpbmRleF09PWl0ZW0pe1xuICAgICAgICB0aGlzLm1vZGFscy5zcGxpY2UoaW5kZXgsMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXNcbiAgfVxufSJdfQ==