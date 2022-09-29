import { EventEmitter, Output, Input, ContentChild, Component } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./AbsoluteOverflowX.component";
import * as i3 from "./AckCloseIcon.component";
import * as i4 from "../pipes";
export class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    }
    getErrorMessage(error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    }
}
ErrorWell.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ErrorWell, deps: [], target: i0.ɵɵFactoryTarget.Component });
ErrorWell.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: ErrorWell, selector: "error-well", inputs: { moreDetails: "moreDetails", message: "message", error: "error", cssClasses: "cssClasses", closable: "closable", allowDetails: "allowDetails" }, outputs: { close: "close" }, queries: [{ propertyName: "titleFooter", first: true, predicate: ["titleFooter"], descendants: true }], ngImport: i0, template: "<div *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\"><div *ngIf=\"error &amp;&amp; closable\" (click)=\"close.emit();errorClose=error\" style=\"position:relative\"><div style=\"position:absolute;bottom:-17px;right:-16px;border:1px solid #DDD;border-radius:50%;z-index:20\"><ack-close-icon></ack-close-icon></div></div><div class=\"pad-xxs\" *ngIf=\"error!=null &amp;&amp; errorClose!=error\" [@fadeInOutUp]=\"1\" [ngClass]=\"cssClasses\"><div class=\"flex-valign-center flex-wrap child-margin-xxs\"><div class=\"flex-1\"><div class=\"strong text-3x margin-0\" [class.cursor-pointer]=\"allowDetails\" (click)=\"!allowDetails || moreDetails=!moreDetails\">{{ getErrorMessage(error) }}</div></div><a class=\"text-blue underline text-xs\" *ngIf=\"allowDetails &amp;&amp; error &amp;&amp; (error|typeof)!='string'\" (click)=\"moreDetails=!moreDetails\">details</a></div><ng-container *ngTemplateOutlet=\"titleFooter\"></ng-container><div *ngIf=\"moreDetails\" [@fadeInOutUp]=\"1\"><absolute-overflow-x class=\"text-sm\"><pre class=\"margin-0 pad-xs\">{{ error|json }}</pre></absolute-overflow-x></div></div></div>", isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i2.AbsoluteOverflowX, selector: "absolute-overflow-x", inputs: ["scrollBars", "wrapClass", "active", "overflow"] }, { kind: "component", type: i3.AckCloseIcon, selector: "ack-close-icon" }, { kind: "pipe", type: i1.JsonPipe, name: "json" }, { kind: "pipe", type: i4.TypeofPipe, name: "typeof" }], animations: animations });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ErrorWell, decorators: [{
            type: Component,
            args: [{
                    selector: 'error-well',
                    template: errorWell,
                    animations: animations
                }]
        }], propDecorators: { moreDetails: [{
                type: Input
            }], message: [{
                type: Input
            }], error: [{
                type: Input
            }], cssClasses: [{
                type: Input
            }], closable: [{
                type: Input
            }], allowDetails: [{
                type: Input
            }], close: [{
                type: Output
            }], titleFooter: [{
                type: ContentChild,
                args: ["titleFooter"]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JXZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yV2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUMzQixZQUFZLEVBQUUsU0FBUyxFQUN4QixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsT0FBTyxFQUFFLE1BQU0sSUFBSSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTs7Ozs7O0FBTTdELE1BQU0sT0FBTyxTQUFTO0lBSnpCO1FBUVcsWUFBTyxHQUFXLDBCQUEwQixDQUFBO1FBRzVDLGFBQVEsR0FBWSxJQUFJLENBQUE7UUFDeEIsaUJBQVksR0FBWSxJQUFJLENBQUE7UUFDM0IsVUFBSyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO0tBY3pEO0lBWEMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSw0Q0FBNEMsQ0FBQTtJQUNuRixDQUFDO0lBRUQsZUFBZSxDQUFFLEtBQVc7UUFDMUIsSUFBRyxDQUFDLEtBQUs7WUFBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFFN0IsSUFBRyxPQUFPLEtBQUssSUFBRSxRQUFRO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFFdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQzdELENBQUM7O3NHQXRCYSxTQUFTOzBGQUFULFNBQVMseXBFQURaLFVBQVU7MkZBQ1AsU0FBUztrQkFKeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsWUFBWTtvQkFDckIsUUFBUSxFQUFDLFNBQVM7b0JBQ2xCLFVBQVUsRUFBQyxVQUFVO2lCQUN0Qjs4QkFHVSxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxLQUFLO3NCQUFiLEtBQUs7Z0JBQ0csVUFBVTtzQkFBbEIsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUNzQixXQUFXO3NCQUF2QyxZQUFZO3VCQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSBcImFjay1hbmd1bGFyLWZ4XCJcbmltcG9ydCB7IHN0cmluZyBhcyBlcnJvcldlbGwgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvZXJyb3Itd2VsbC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Vycm9yLXdlbGwnLFxuICB0ZW1wbGF0ZTplcnJvcldlbGwsXG4gIGFuaW1hdGlvbnM6YW5pbWF0aW9uc1xufSkgZXhwb3J0IGNsYXNzIEVycm9yV2VsbHtcbiAgZXJyb3JDbG9zZSE6IGFueVxuXG4gIEBJbnB1dCgpIG1vcmVEZXRhaWxzITogYm9vbGVhbi8vc2hvdyBtb3JlIGRldGFpbHNcbiAgQElucHV0KCkgbWVzc2FnZTogc3RyaW5nID0gJ1VuZXhwZWN0ZWQgRXJyb3IgT2NjdXJlZCdcbiAgQElucHV0KCkgZXJyb3IhOiBFcnJvclxuICBASW5wdXQoKSBjc3NDbGFzc2VzITogc3RyaW5nXG4gIEBJbnB1dCgpIGNsb3NhYmxlOiBib29sZWFuID0gdHJ1ZVxuICBASW5wdXQoKSBhbGxvd0RldGFpbHM6IGJvb2xlYW4gPSB0cnVlXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBDb250ZW50Q2hpbGQoXCJ0aXRsZUZvb3RlclwiKSB0aXRsZUZvb3RlciE6IFRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNzc0NsYXNzZXMgPSB0aGlzLmNzc0NsYXNzZXMgfHwgJ2JnLWRhbmdlciBib3JkZXIgYm9yZGVyLWRhbmdlciB0ZXh0LWRhbmdlcidcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSggZXJyb3I6RXJyb3IgKXtcbiAgICBpZighZXJyb3IpcmV0dXJuIHRoaXMubWVzc2FnZVxuXG4gICAgaWYodHlwZW9mIGVycm9yPT0nc3RyaW5nJylyZXR1cm4gZXJyb3JcblxuICAgIHJldHVybiBlcnJvci5tZXNzYWdlIHx8IGVycm9yW1wic3RhdHVzVGV4dFwiXSB8fCB0aGlzLm1lc3NhZ2VcbiAgfVxufSJdfQ==