import { ViewChild, Component } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
export class AckFixedElement {
    constructor(AckApp) {
        this.AckApp = AckApp;
        this.AckApp.fixedElms.push(this);
    }
    ngOnDestroy() {
        for (let x = this.AckApp.fixedElms.length - 1; x >= 0; --x) {
            const iClass = this.AckApp.fixedElms[x];
            if (iClass === this) {
                this.AckApp.fixedElms.splice(x, 1);
                break;
            }
        }
    }
}
AckFixedElement.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckFixedElement, deps: [{ token: i1.AckApp }], target: i0.ɵɵFactoryTarget.Component });
AckFixedElement.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckFixedElement, selector: "ack-fixed-element", viewQueries: [{ propertyName: "content", first: true, predicate: ["content"], descendants: true }], ngImport: i0, template: '<ng-template #content><ng-content></ng-content></ng-template>', isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckFixedElement, decorators: [{
            type: Component,
            args: [{
                    selector: 'ack-fixed-element',
                    template: '<ng-template #content><ng-content></ng-content></ng-template>'
                }]
        }], ctorParameters: function () { return [{ type: i1.AckApp }]; }, propDecorators: { content: [{
                type: ViewChild,
                args: ['content']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrRml4ZWRFbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fja0ZpeGVkRWxlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNRLFNBQVMsRUFDdEIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBOzs7QUFNbkIsTUFBTSxPQUFPLGVBQWU7SUFHN0IsWUFDUyxNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQUVwQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbEMsQ0FBQztJQUVELFdBQVc7UUFDVCxLQUFJLElBQUksQ0FBQyxHQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQztZQUNwRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUN2QyxJQUFJLE1BQU0sS0FBSyxJQUFJLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ2pDLE1BQUs7YUFDTjtTQUNGO0lBQ0gsQ0FBQzs7NEdBakJhLGVBQWU7Z0dBQWYsZUFBZSw2SkFEcEIsK0RBQStEOzJGQUMxRCxlQUFlO2tCQUg5QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBQyxtQkFBbUI7b0JBQzVCLFFBQVEsRUFBQywrREFBK0Q7aUJBQ3pFOzZGQUN1QixPQUFPO3NCQUE1QixTQUFTO3VCQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBFbGVtZW50UmVmLFxuICBDb21wb25lbnRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1maXhlZC1lbGVtZW50JyxcbiAgdGVtcGxhdGU6JzxuZy10ZW1wbGF0ZSAjY29udGVudD48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nXG59KSBleHBvcnQgY2xhc3MgQWNrRml4ZWRFbGVtZW50e1xuICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudCE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICB0aGlzLkFja0FwcC5maXhlZEVsbXMucHVzaCh0aGlzKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBmb3IobGV0IHg9dGhpcy5BY2tBcHAuZml4ZWRFbG1zLmxlbmd0aC0xOyB4ID49IDA7IC0teCl7XG4gICAgICBjb25zdCBpQ2xhc3MgPSB0aGlzLkFja0FwcC5maXhlZEVsbXNbeF1cbiAgICAgIGlmKCBpQ2xhc3MgPT09IHRoaXMgKXtcbiAgICAgICAgdGhpcy5BY2tBcHAuZml4ZWRFbG1zLnNwbGljZSh4LDEpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICB9XG59Il19