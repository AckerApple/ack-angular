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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHhGcm9tSHRtbFRvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vc3JjLyIsInNvdXJjZXMiOlsiZGlyZWN0aXZlcy9QeEZyb21IdG1sVG9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFFLFVBQVUsRUFDckIsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQzVCLE1BQU0sZUFBZSxDQUFBO0FBS25CLE1BQU0sT0FBTyxhQUFhO0lBUTNCLFlBQW1CLFVBQXFCO1FBQXJCLGVBQVUsR0FBVixVQUFVLENBQVc7UUFIVCxpQkFBWSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBSW5GLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNiLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3JDLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN0QixDQUFDO0lBRUQsTUFBTTtRQUNKLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLHFCQUFxQixFQUFFLENBQUMsR0FBRyxDQUFBO1FBQ3JFLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFBLENBQUEsT0FBTztRQUN4Qiw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUNyQixDQUFDO0lBRUQsU0FBUyxDQUFFLE1BQVcsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRSxFQUFFO1lBQ2IsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ1QsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNuRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzs7WUF6REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzFCLFFBQVEsRUFBQyxlQUFlO2FBQzFCOzs7WUFQWSxVQUFVOzs7cUJBV3BCLEtBQUssU0FBQyxlQUFlOzJCQUNyQixNQUFNLFNBQUMscUJBQXFCO29CQUM1QixLQUFLOztBQW1EUjs7Ozs7Ozs7OztHQVVHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuICBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3B4RnJvbUh0bWxUb3BdXCJcbiAgLGV4cG9ydEFzOlwiUHhGcm9tSHRtbFRvcFwiXG59KSBleHBvcnQgY2xhc3MgUHhGcm9tSHRtbFRvcHtcbiAgLy9wdWJsaWMgd2luZG93XG4gIG9uU2Nyb2xsXG4gIFxuICBASW5wdXQoXCJweEZyb21IdG1sVG9wXCIpIG51bWJlcjpudW1iZXJcbiAgQE91dHB1dChcInB4RnJvbUh0bWxUb3BDaGFuZ2VcIikgbnVtYmVyQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIHdhdGNoOmFueS8vYW55dGltZSBpdCBjaGFuZ2Ugd2UgdXBkYXRlXG4gIFxuICBjb25zdHJ1Y3RvcihwdWJsaWMgRWxlbWVudFJlZjpFbGVtZW50UmVmKXtcbiAgICB0aGlzLm9uU2Nyb2xsID0gKCk9PntcbiAgICAgIHRoaXMuc2V0dGVyKClcbiAgICAgIHRoaXMuZW1pdCgpXG4gICAgfVxuICAgIFxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25TY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIGVtaXQoKXtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLnNldHRlcigpXG4gICAgICB0aGlzLmVtaXQoKVxuICAgIH0pXG4gICAgXG4gICAgdGhpcy5kZWxheUZpcmUoMjUwKVxuICAgIHRoaXMuZGVsYXlGaXJlKDc1MClcbiAgICB0aGlzLmRlbGF5RmlyZSgxNTAwKVxuICB9XG5cbiAgc2V0dGVyKCl7XG4gICAgY29uc3QgdG9wID0gdGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wXG4gICAgdGhpcy5udW1iZXIgPSB0b3AvLyB8fCAwXG4gICAgLy90aGlzLm51bWJlciA9IGdldE9mZnNldCggdGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgKS50b3BcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuZGVsYXlGaXJlKClcbiAgICB0aGlzLmRlbGF5RmlyZSgyMDApXG4gIH1cblxuICBkZWxheUZpcmUoIG51bTpudW1iZXI9MCApe1xuICAgIHNldFRpbWVvdXQoKCk9PntcbiAgICAgIHRoaXMuc2V0dGVyKClcbiAgICAgIHRoaXMuZW1pdCgpXG4gICAgfSwgbnVtKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25TY3JvbGwpXG4gIH1cbn1cblxuLypcbmV4cG9ydCBmdW5jdGlvbiBnZXRPZmZzZXQoIGVsICkge1xuICAgIHZhciBfeCA9IDA7XG4gICAgdmFyIF95ID0gMDtcbiAgICB3aGlsZSggZWwgJiYgIWlzTmFOKCBlbC5vZmZzZXRMZWZ0ICkgJiYgIWlzTmFOKCBlbC5vZmZzZXRUb3AgKSApIHtcbiAgICAgICAgX3ggKz0gZWwub2Zmc2V0TGVmdCAtIGVsLnNjcm9sbExlZnQ7XG4gICAgICAgIF95ICs9IGVsLm9mZnNldFRvcCAtIGVsLnNjcm9sbFRvcDtcbiAgICAgICAgZWwgPSBlbC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuICAgIHJldHVybiB7IHRvcDogX3ksIGxlZnQ6IF94IH07XG59Ki8iXX0=