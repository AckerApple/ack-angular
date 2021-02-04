import { ViewChild, ElementRef, Component } from "@angular/core";
import { string } from "./templates/scroll-past-fixed.pug";
export class ScrollPastFixed {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
    }
    getReadElement() {
        const children = this.ElementRef.nativeElement.children;
        return children[children.length - 2];
    }
    init() {
        this.onScroll = () => this.check();
        window.addEventListener("scroll", this.onScroll);
        this.onScroll();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.init()); //prevent Expression has changed after it was checked error
    }
    check() {
        const scrollPos = window['pageYOffset'];
        if (this.placeholder && this.placeholder <= scrollPos) {
            return;
        }
        const elm = this.getReadElement();
        const offsetTop = this.placeholder || getDistanceFromTop(elm);
        if (offsetTop <= scrollPos) {
            this.currentPosition = 'fixed';
            this.placeholder = offsetTop;
            this.fillHeight = elm.offsetHeight;
        }
        else {
            delete this.fillHeight;
            delete this.placeholder;
            delete this.currentPosition;
        }
    }
}
ScrollPastFixed.decorators = [
    { type: Component, args: [{
                selector: 'scroll-past-fixed',
                template: string
            },] }
];
ScrollPastFixed.ctorParameters = () => [
    { type: ElementRef }
];
ScrollPastFixed.propDecorators = {
    template: [{ type: ViewChild, args: ['template',] }]
};
export function getDistanceFromTop(element) {
    let yPos = 0;
    while (element) {
        yPos += (element.offsetTop);
        element = element.offsetParent;
    }
    return yPos;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsUGFzdEZpeGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbFBhc3RGaXhlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQUUsU0FBUyxFQUN0QixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFLdkQsTUFBTSxPQUFPLGVBQWU7SUFRN0IsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUFFLENBQUM7SUFFM0MsY0FBYztRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQTtRQUN2RCxPQUFPLFFBQVEsQ0FBRSxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFBLDJEQUEyRDtJQUNwRyxDQUFDO0lBRUQsS0FBSztRQUNILE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUV2QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEVBQUM7WUFDcEQsT0FBTTtTQUNQO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFN0QsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFBO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQTtTQUNuQzthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtZQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUE7U0FDNUI7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxtQkFBbUI7Z0JBQzVCLFFBQVEsRUFBQyxNQUFNO2FBQ2hCOzs7WUFQQyxVQUFVOzs7dUJBYVQsU0FBUyxTQUFDLFVBQVU7O0FBeUN2QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBTztJQUN4QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUE7SUFFWixPQUFNLE9BQU8sRUFBRTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQTtLQUMvQjtJQUVELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsIENvbXBvbmVudFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvc2Nyb2xsLXBhc3QtZml4ZWQucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidzY3JvbGwtcGFzdC1maXhlZCcsXG4gIHRlbXBsYXRlOnN0cmluZ1xufSkgZXhwb3J0IGNsYXNzIFNjcm9sbFBhc3RGaXhlZHtcbiAgY3VycmVudFBvc2l0aW9uOlwiZml4ZWRcIlxuICBmaWxsSGVpZ2h0Om51bWJlclxuICBwbGFjZWhvbGRlcjpudW1iZXJcbiAgb25TY3JvbGw6KCk9PmFueVxuXG4gIEBWaWV3Q2hpbGQoJ3RlbXBsYXRlJykgdGVtcGxhdGU6VGVtcGxhdGVSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBFbGVtZW50UmVmOkVsZW1lbnRSZWYpe31cblxuICBnZXRSZWFkRWxlbWVudCgpe1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5cbiAgICByZXR1cm4gY2hpbGRyZW5bIGNoaWxkcmVuLmxlbmd0aC0yIF1cbiAgfVxuXG4gIGluaXQoKXtcbiAgICB0aGlzLm9uU2Nyb2xsID0gKCk9PiB0aGlzLmNoZWNrKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxuICAgIHRoaXMub25TY3JvbGwoKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5pbml0KCkpLy9wcmV2ZW50IEV4cHJlc3Npb24gaGFzIGNoYW5nZWQgYWZ0ZXIgaXQgd2FzIGNoZWNrZWQgZXJyb3JcbiAgfVxuXG4gIGNoZWNrKCl7XG4gICAgY29uc3Qgc2Nyb2xsUG9zID0gd2luZG93WydwYWdlWU9mZnNldCddXG5cbiAgICBpZiggdGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLnBsYWNlaG9sZGVyIDw9IHNjcm9sbFBvcyl7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBlbG0gPSB0aGlzLmdldFJlYWRFbGVtZW50KClcbiAgICBjb25zdCBvZmZzZXRUb3AgPSB0aGlzLnBsYWNlaG9sZGVyIHx8IGdldERpc3RhbmNlRnJvbVRvcChlbG0pXG5cbiAgICBpZiggb2Zmc2V0VG9wIDw9IHNjcm9sbFBvcyApe1xuICAgICAgdGhpcy5jdXJyZW50UG9zaXRpb24gPSAnZml4ZWQnXG4gICAgICB0aGlzLnBsYWNlaG9sZGVyID0gb2Zmc2V0VG9wXG4gICAgICB0aGlzLmZpbGxIZWlnaHQgPSBlbG0ub2Zmc2V0SGVpZ2h0XG4gICAgfWVsc2V7XG4gICAgICBkZWxldGUgdGhpcy5maWxsSGVpZ2h0XG4gICAgICBkZWxldGUgdGhpcy5wbGFjZWhvbGRlclxuICAgICAgZGVsZXRlIHRoaXMuY3VycmVudFBvc2l0aW9uXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXN0YW5jZUZyb21Ub3AoZWxlbWVudCk6bnVtYmVye1xuICBsZXQgeVBvcyA9IDBcblxuICB3aGlsZShlbGVtZW50KSB7XG4gICAgeVBvcyArPSAoZWxlbWVudC5vZmZzZXRUb3ApXG4gICAgZWxlbWVudCA9IGVsZW1lbnQub2Zmc2V0UGFyZW50XG4gIH1cblxuICByZXR1cm4geVBvc1xufSJdfQ==