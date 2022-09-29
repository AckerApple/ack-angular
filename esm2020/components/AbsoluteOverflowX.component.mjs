import { Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../directives/ElementSizeModel.directive";
export class AbsoluteOverflowX {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    ngOnInit() {
        this.checkDisplay();
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    }
    ngAfterViewInit() {
        this.ElementRef.nativeElement.style.display = 'block';
    }
    checkDisplay() {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    }
}
AbsoluteOverflowX.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AbsoluteOverflowX, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AbsoluteOverflowX.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AbsoluteOverflowX, selector: "absolute-overflow-x", inputs: { scrollBars: "scrollBars", wrapClass: "wrapClass", active: "active", overflow: "overflow" }, usesOnChanges: true, ngImport: i0, template: "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"elementHeightModel &amp;&amp; active\" style=\"visibility:hidden;overflow:hidden;width:100%\" [style.height.px]=\"elementHeightModel\">&nbsp;</div>", isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "directive", type: i2.ElementHeightModel, selector: "[elementHeightModel]", inputs: ["elementHeightModel"], outputs: ["elementHeightModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AbsoluteOverflowX, decorators: [{
            type: Component,
            args: [{
                    selector: 'absolute-overflow-x',
                    template: string
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { scrollBars: [{
                type: Input
            }], wrapClass: [{
                type: Input
            }], active: [{
                type: Input
            }], overflow: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTyxTQUFTLEVBQUUsS0FBSyxFQUM3QixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0scUNBQXFDLENBQUE7Ozs7QUFLekQsTUFBTSxPQUFPLGlCQUFpQjtJQU8vQixZQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBSC9CLFdBQU0sR0FBZ0IsSUFBSSxDQUFBO1FBQzFCLGFBQVEsR0FBb0MsTUFBTSxDQUFBO0lBRWpCLENBQUM7SUFFM0MsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFFLE9BQVk7UUFDdkIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUNwQjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDdkQsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO0lBQ3BGLENBQUM7OzhHQXpCYSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUhoQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBQyxxQkFBcUI7b0JBQzlCLFFBQVEsRUFBQyxNQUFNO2lCQUNoQjtpR0FFVSxVQUFVO3NCQUFsQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUNHLFFBQVE7c0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLCBDb21wb25lbnQsIElucHV0XG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hYnNvbHV0ZS1vdmVyZmxvdy14LnB1Z1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYWJzb2x1dGUtb3ZlcmZsb3cteCcsXG4gIHRlbXBsYXRlOnN0cmluZ1xufSkgZXhwb3J0IGNsYXNzIEFic29sdXRlT3ZlcmZsb3dYe1xuICBlbGVtZW50SGVpZ2h0TW9kZWwhOiBudW1iZXJcbiAgQElucHV0KCkgc2Nyb2xsQmFyczogYm9vbGVhbnxhbnlcbiAgQElucHV0KCkgd3JhcENsYXNzOiBhbnlcbiAgQElucHV0KCkgYWN0aXZlOiBib29sZWFufGFueSA9IHRydWVcbiAgQElucHV0KCkgb3ZlcmZsb3c6ICdhdXRvJ3wnbm9uZSd8J2hpZGRlbid8J3Njcm9sbCcgPSAnYXV0bydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgRWxlbWVudFJlZjpFbGVtZW50UmVmKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNoZWNrRGlzcGxheSgpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyggY2hhbmdlczogYW55ICl7XG4gICAgaWYoIGNoYW5nZXMuYWN0aXZlICl7XG4gICAgICB0aGlzLmNoZWNrRGlzcGxheSgpXG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcbiAgfVxuXG4gIGNoZWNrRGlzcGxheSgpe1xuICAgIHRoaXMuRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdGhpcy5hY3RpdmUgPyAncmVsYXRpdmUnIDogJ3N0YXRpYydcbiAgfVxufSJdfQ==