import { ViewChild, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
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
AckFixedElement.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element',
                template: '<ng-template #content><ng-content></ng-content></ng-template>'
            },] }
];
AckFixedElement.ctorParameters = () => [
    { type: AckApp }
];
AckFixedElement.propDecorators = {
    content: [{ type: ViewChild, args: ['content',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrRml4ZWRFbGVtZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fja0ZpeGVkRWxlbWVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNRLFNBQVMsRUFDdEIsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUtsRCxNQUFNLE9BQU8sZUFBZTtJQUc3QixZQUNTLE1BQWE7UUFBYixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBRXBCLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRUQsV0FBVztRQUNULEtBQUksSUFBSSxDQUFDLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFDO1lBQ3BELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZDLElBQUksTUFBTSxLQUFLLElBQUksRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtnQkFDakMsTUFBSzthQUNOO1NBQ0Y7SUFDSCxDQUFDOzs7WUFwQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxtQkFBbUI7Z0JBQzVCLFFBQVEsRUFBQywrREFBK0Q7YUFDekU7OztZQUxRLE1BQU07OztzQkFNWixTQUFTLFNBQUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsXG4gIENvbXBvbmVudFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYWNrLWZpeGVkLWVsZW1lbnQnLFxuICB0ZW1wbGF0ZTonPG5nLXRlbXBsYXRlICNjb250ZW50PjxuZy1jb250ZW50PjwvbmctY29udGVudD48L25nLXRlbXBsYXRlPidcbn0pIGV4cG9ydCBjbGFzcyBBY2tGaXhlZEVsZW1lbnR7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OlRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+XG4gIFxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgQWNrQXBwOkFja0FwcFxuICApe1xuICAgIHRoaXMuQWNrQXBwLmZpeGVkRWxtcy5wdXNoKHRoaXMpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIGZvcihsZXQgeD10aGlzLkFja0FwcC5maXhlZEVsbXMubGVuZ3RoLTE7IHggPj0gMDsgLS14KXtcbiAgICAgIGNvbnN0IGlDbGFzcyA9IHRoaXMuQWNrQXBwLmZpeGVkRWxtc1t4XVxuICAgICAgaWYoIGlDbGFzcyA9PT0gdGhpcyApe1xuICAgICAgICB0aGlzLkFja0FwcC5maXhlZEVsbXMuc3BsaWNlKHgsMSlcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0iXX0=