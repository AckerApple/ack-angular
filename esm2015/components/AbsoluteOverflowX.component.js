import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
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
AbsoluteOverflowX.decorators = [
    { type: Component, args: [{
                selector: 'absolute-overflow-x',
                template: string
            },] }
];
AbsoluteOverflowX.ctorParameters = () => [
    { type: ElementRef }
];
AbsoluteOverflowX.propDecorators = {
    scrollBars: [{ type: Input }],
    wrapClass: [{ type: Input }],
    active: [{ type: Input }],
    overflow: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDN0IsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBS3pELE1BQU0sT0FBTyxpQkFBaUI7SUFPL0IsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUgvQixXQUFNLEdBQWdCLElBQUksQ0FBQTtRQUMxQixhQUFRLEdBQW9DLE1BQU0sQ0FBQTtJQUVqQixDQUFDO0lBRTNDLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVELFdBQVcsQ0FBRSxPQUFZO1FBQ3ZCLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUE7U0FDcEI7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQ3ZELENBQUM7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQTtJQUNwRixDQUFDOzs7WUE1QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxxQkFBcUI7Z0JBQzlCLFFBQVEsRUFBQyxNQUFNO2FBQ2hCOzs7WUFQQyxVQUFVOzs7eUJBU1QsS0FBSzt3QkFDTCxLQUFLO3FCQUNMLEtBQUs7dUJBQ0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsIENvbXBvbmVudCwgSW5wdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fic29sdXRlLW92ZXJmbG93LXgucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidhYnNvbHV0ZS1vdmVyZmxvdy14JyxcbiAgdGVtcGxhdGU6c3RyaW5nXG59KSBleHBvcnQgY2xhc3MgQWJzb2x1dGVPdmVyZmxvd1h7XG4gIGVsZW1lbnRIZWlnaHRNb2RlbCE6IG51bWJlclxuICBASW5wdXQoKSBzY3JvbGxCYXJzOiBib29sZWFufGFueVxuICBASW5wdXQoKSB3cmFwQ2xhc3M6IGFueVxuICBASW5wdXQoKSBhY3RpdmU6IGJvb2xlYW58YW55ID0gdHJ1ZVxuICBASW5wdXQoKSBvdmVyZmxvdzogJ2F1dG8nfCdub25lJ3wnaGlkZGVuJ3wnc2Nyb2xsJyA9ICdhdXRvJ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBFbGVtZW50UmVmOkVsZW1lbnRSZWYpe31cblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuY2hlY2tEaXNwbGF5KClcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOiBhbnkgKXtcbiAgICBpZiggY2hhbmdlcy5hY3RpdmUgKXtcbiAgICAgIHRoaXMuY2hlY2tEaXNwbGF5KClcbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICB0aGlzLkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xuICB9XG5cbiAgY2hlY2tEaXNwbGF5KCl7XG4gICAgdGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSB0aGlzLmFjdGl2ZSA/ICdyZWxhdGl2ZScgOiAnc3RhdGljJ1xuICB9XG59Il19