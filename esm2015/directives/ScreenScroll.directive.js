import { Directive, Output, EventEmitter } from "@angular/core";
export class ScreenScroll {
    constructor() {
        this.screenScroll = new EventEmitter();
        this.onScroll = () => this.screenScroll.emit({ x: window['pageXOffset'], y: window['pageYOffset'] });
        this.onScroll();
        window.addEventListener("scroll", this.onScroll);
    }
    ngOnInit() {
        Promise.resolve().then(() => this.onScroll()); //two way bind often needs init override
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    }
}
ScreenScroll.decorators = [
    { type: Directive, args: [{
                selector: '[screenScroll]'
            },] }
];
ScreenScroll.ctorParameters = () => [];
ScreenScroll.propDecorators = {
    screenScroll: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBSW5CLE1BQU0sT0FBTyxZQUFZO0lBTTFCO1FBRlUsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR3pDLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFLENBQ2xCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLEVBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFDLENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUE7UUFDZixNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNsRCxDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUEsQ0FBQSx3Q0FBd0M7SUFDckYsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7MkJBSUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2NyZWVuU2Nyb2xsXSdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5TY3JvbGx7XG4gIC8vcHVibGljIHdpbmRvd1xuICBvblNjcm9sbFxuXG4gIEBPdXRwdXQoKSBzY3JlZW5TY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT5cbiAgICAgIHRoaXMuc2NyZWVuU2Nyb2xsLmVtaXQoe3g6d2luZG93WydwYWdlWE9mZnNldCddLCB5OndpbmRvd1sncGFnZVlPZmZzZXQnXX0pXG4gICAgdGhpcy5vblNjcm9sbCgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5vblNjcm9sbCgpKS8vdHdvIHdheSBiaW5kIG9mdGVuIG5lZWRzIGluaXQgb3ZlcnJpZGVcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxufVxuIl19