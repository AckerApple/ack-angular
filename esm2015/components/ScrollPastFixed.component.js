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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsUGFzdEZpeGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Njcm9sbFBhc3RGaXhlZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQUUsU0FBUyxFQUN0QixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFLdkQsTUFBTSxPQUFPLGVBQWU7SUFRN0IsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztJQUFFLENBQUM7SUFFM0MsY0FBYztRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQTtRQUN2RCxPQUFPLFFBQVEsQ0FBRSxRQUFRLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7UUFDakMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQSxDQUFBLDJEQUEyRDtJQUNwRyxDQUFDO0lBRUQsS0FBSztRQUNILE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUV2QyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxTQUFTLEVBQUM7WUFDcEQsT0FBTTtTQUNQO1FBRUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFBO1FBQ2pDLE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLElBQUksa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUE7UUFFN0QsSUFBSSxTQUFTLElBQUksU0FBUyxFQUFFO1lBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFBO1lBQzlCLElBQUksQ0FBQyxXQUFXLEdBQUcsU0FBUyxDQUFBO1lBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQTtTQUNuQzthQUFJO1lBQ0gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFBO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQTtZQUN2QixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUE7U0FDNUI7SUFDSCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxtQkFBbUI7Z0JBQzVCLFFBQVEsRUFBQyxNQUFNO2FBQ2hCOzs7WUFQQyxVQUFVOzs7dUJBYVQsU0FBUyxTQUFDLFVBQVU7O0FBeUN2QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBWTtJQUM3QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUE7SUFFWixPQUFNLE9BQU8sRUFBRTtRQUNiLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUMzQixPQUFPLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQTtLQUMvQjtJQUVELE9BQU8sSUFBSSxDQUFBO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFZpZXdDaGlsZCwgVGVtcGxhdGVSZWYsXG4gIEVsZW1lbnRSZWYsIENvbXBvbmVudFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvc2Nyb2xsLXBhc3QtZml4ZWQucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidzY3JvbGwtcGFzdC1maXhlZCcsXG4gIHRlbXBsYXRlOnN0cmluZ1xufSkgZXhwb3J0IGNsYXNzIFNjcm9sbFBhc3RGaXhlZHtcbiAgY3VycmVudFBvc2l0aW9uPzogXCJmaXhlZFwiXG4gIGZpbGxIZWlnaHQ/OiBudW1iZXJcbiAgcGxhY2Vob2xkZXI/OiBudW1iZXJcbiAgb25TY3JvbGwhOiAoKT0+YW55XG5cbiAgQFZpZXdDaGlsZCgndGVtcGxhdGUnKSB0ZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT5cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgRWxlbWVudFJlZjpFbGVtZW50UmVmKXt9XG5cbiAgZ2V0UmVhZEVsZW1lbnQoKXtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMuRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNoaWxkcmVuXG4gICAgcmV0dXJuIGNoaWxkcmVuWyBjaGlsZHJlbi5sZW5ndGgtMiBdXG4gIH1cblxuICBpbml0KCl7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT4gdGhpcy5jaGVjaygpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgICB0aGlzLm9uU2Nyb2xsKClcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMuaW5pdCgpKS8vcHJldmVudCBFeHByZXNzaW9uIGhhcyBjaGFuZ2VkIGFmdGVyIGl0IHdhcyBjaGVja2VkIGVycm9yXG4gIH1cblxuICBjaGVjaygpe1xuICAgIGNvbnN0IHNjcm9sbFBvcyA9IHdpbmRvd1sncGFnZVlPZmZzZXQnXVxuXG4gICAgaWYoIHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5wbGFjZWhvbGRlciA8PSBzY3JvbGxQb3Mpe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgZWxtID0gdGhpcy5nZXRSZWFkRWxlbWVudCgpXG4gICAgY29uc3Qgb2Zmc2V0VG9wID0gdGhpcy5wbGFjZWhvbGRlciB8fCBnZXREaXN0YW5jZUZyb21Ub3AoZWxtKVxuXG4gICAgaWYoIG9mZnNldFRvcCA8PSBzY3JvbGxQb3MgKXtcbiAgICAgIHRoaXMuY3VycmVudFBvc2l0aW9uID0gJ2ZpeGVkJ1xuICAgICAgdGhpcy5wbGFjZWhvbGRlciA9IG9mZnNldFRvcFxuICAgICAgdGhpcy5maWxsSGVpZ2h0ID0gZWxtLm9mZnNldEhlaWdodFxuICAgIH1lbHNle1xuICAgICAgZGVsZXRlIHRoaXMuZmlsbEhlaWdodFxuICAgICAgZGVsZXRlIHRoaXMucGxhY2Vob2xkZXJcbiAgICAgIGRlbGV0ZSB0aGlzLmN1cnJlbnRQb3NpdGlvblxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzdGFuY2VGcm9tVG9wKGVsZW1lbnQ6IGFueSk6IG51bWJlcntcbiAgbGV0IHlQb3MgPSAwXG5cbiAgd2hpbGUoZWxlbWVudCkge1xuICAgIHlQb3MgKz0gKGVsZW1lbnQub2Zmc2V0VG9wKVxuICAgIGVsZW1lbnQgPSBlbGVtZW50Lm9mZnNldFBhcmVudFxuICB9XG5cbiAgcmV0dXJuIHlQb3Ncbn0iXX0=