import { Directive, ElementRef, Input, Output, EventEmitter } from "@angular/core";
export class PxFromHtmlTop {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.numberChange = new EventEmitter();
        this.onScroll = () => {
            this.setter();
            this.emit();
        };
        window.addEventListener("resize", this.onScroll);
        window.addEventListener("scroll", this.onScroll);
    }
    emit() {
        this.numberChange.emit(this.number);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            this.setter();
            this.emit();
        });
        this.delayFire(250);
        this.delayFire(750);
        this.delayFire(1500);
    }
    setter() {
        const top = this.ElementRef.nativeElement.getBoundingClientRect().top;
        this.number = top; // || 0
        //this.number = getOffset( this.ElementRef.nativeElement ).top
    }
    ngAfterViewInit() {
        this.delayFire();
        this.delayFire(200);
    }
    delayFire(num = 0) {
        setTimeout(() => {
            this.setter();
            this.emit();
        }, num);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.onScroll);
        window.removeEventListener("resize", this.onScroll);
    }
}
PxFromHtmlTop.decorators = [
    { type: Directive, args: [{
                selector: "[pxFromHtmlTop]",
                exportAs: "PxFromHtmlTop"
            },] }
];
PxFromHtmlTop.ctorParameters = () => [
    { type: ElementRef }
];
PxFromHtmlTop.propDecorators = {
    number: [{ type: Input, args: ["pxFromHtmlTop",] }],
    numberChange: [{ type: Output, args: ["pxFromHtmlTopChange",] }],
    watch: [{ type: Input }]
};
/*
export function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}*/ 
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHhGcm9tSHRtbFRvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9QeEZyb21IdG1sVG9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFDckIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQzVCLE1BQU0sZUFBZSxDQUFBO0FBS25CLE1BQU0sT0FBTyxhQUFhO0lBUTNCLFlBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFIVCxpQkFBWSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBSW5GLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBLENBQUEsT0FBTztRQUN4Qiw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsU0FBUyxDQUFFLE1BQVcsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBQyxlQUFlO2FBQzFCOzs7WUFQWSxVQUFVOzs7cUJBV3BCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixNQUFNLFNBQUMscUJBQXFCO29CQUM1QixLQUFLOztBQW1EUjs7Ozs7Ozs7OztHQVVHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuICBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3B4RnJvbUh0bWxUb3BdXCJcbiAgLGV4cG9ydEFzOlwiUHhGcm9tSHRtbFRvcFwiXG59KSBleHBvcnQgY2xhc3MgUHhGcm9tSHRtbFRvcHtcbiAgLy9wdWJsaWMgd2luZG93XG4gIG9uU2Nyb2xsPzogYW55XG5cbiAgQElucHV0KFwicHhGcm9tSHRtbFRvcFwiKSBudW1iZXI/OiBudW1iZXJcbiAgQE91dHB1dChcInB4RnJvbUh0bWxUb3BDaGFuZ2VcIikgbnVtYmVyQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIHdhdGNoOmFueS8vYW55dGltZSBpdCBjaGFuZ2Ugd2UgdXBkYXRlXG5cbiAgY29uc3RydWN0b3IocHVibGljIEVsZW1lbnRSZWY6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT57XG4gICAgICB0aGlzLnNldHRlcigpXG4gICAgICB0aGlzLmVtaXQoKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25TY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIGVtaXQoKXtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLnNldHRlcigpXG4gICAgICB0aGlzLmVtaXQoKVxuICAgIH0pXG5cbiAgICB0aGlzLmRlbGF5RmlyZSgyNTApXG4gICAgdGhpcy5kZWxheUZpcmUoNzUwKVxuICAgIHRoaXMuZGVsYXlGaXJlKDE1MDApXG4gIH1cblxuICBzZXR0ZXIoKXtcbiAgICBjb25zdCB0b3AgPSB0aGlzLkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICB0aGlzLm51bWJlciA9IHRvcC8vIHx8IDBcbiAgICAvL3RoaXMubnVtYmVyID0gZ2V0T2Zmc2V0KCB0aGlzLkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApLnRvcFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5kZWxheUZpcmUoKVxuICAgIHRoaXMuZGVsYXlGaXJlKDIwMClcbiAgfVxuXG4gIGRlbGF5RmlyZSggbnVtOm51bWJlcj0wICl7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgdGhpcy5zZXR0ZXIoKVxuICAgICAgdGhpcy5lbWl0KClcbiAgICB9LCBudW0pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldCggZWwgKSB7XG4gICAgdmFyIF94ID0gMDtcbiAgICB2YXIgX3kgPSAwO1xuICAgIHdoaWxlKCBlbCAmJiAhaXNOYU4oIGVsLm9mZnNldExlZnQgKSAmJiAhaXNOYU4oIGVsLm9mZnNldFRvcCApICkge1xuICAgICAgICBfeCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgX3kgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9wOiBfeSwgbGVmdDogX3ggfTtcbn0qLyJdfQ==