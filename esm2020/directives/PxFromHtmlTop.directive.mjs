import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
PxFromHtmlTop.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PxFromHtmlTop, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PxFromHtmlTop.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: PxFromHtmlTop, selector: "[pxFromHtmlTop]", inputs: { number: ["pxFromHtmlTop", "number"], watch: "watch" }, outputs: { numberChange: "pxFromHtmlTopChange" }, exportAs: ["PxFromHtmlTop"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PxFromHtmlTop, decorators: [{
            type: Directive,
            args: [{
                    selector: "[pxFromHtmlTop]",
                    exportAs: "PxFromHtmlTop"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { number: [{
                type: Input,
                args: ["pxFromHtmlTop"]
            }], numberChange: [{
                type: Output,
                args: ["pxFromHtmlTopChange"]
            }], watch: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHhGcm9tSHRtbFRvcC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9QeEZyb21IdG1sVG9wLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUM1QixNQUFNLGVBQWUsQ0FBQTs7QUFLbkIsTUFBTSxPQUFPLGFBQWE7SUFRM0IsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUhULGlCQUFZLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFJbkYsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO1FBQ2IsQ0FBQyxDQUFBO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDckMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFRCxNQUFNO1FBQ0osTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUE7UUFDckUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUEsQ0FBQSxPQUFPO1FBQ3hCLDhEQUE4RDtJQUNoRSxDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3JCLENBQUM7SUFFRCxTQUFTLENBQUUsTUFBVyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFFLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDYixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDVCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3JELENBQUM7OzBHQXREYSxhQUFhOzhGQUFiLGFBQWE7MkZBQWIsYUFBYTtrQkFINUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMxQixRQUFRLEVBQUMsZUFBZTtpQkFDMUI7aUdBSXlCLE1BQU07c0JBQTdCLEtBQUs7dUJBQUMsZUFBZTtnQkFDUyxZQUFZO3NCQUExQyxNQUFNO3VCQUFDLHFCQUFxQjtnQkFDcEIsS0FBSztzQkFBYixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBFbGVtZW50UmVmLFxuICBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3B4RnJvbUh0bWxUb3BdXCJcbiAgLGV4cG9ydEFzOlwiUHhGcm9tSHRtbFRvcFwiXG59KSBleHBvcnQgY2xhc3MgUHhGcm9tSHRtbFRvcHtcbiAgLy9wdWJsaWMgd2luZG93XG4gIG9uU2Nyb2xsPzogYW55XG5cbiAgQElucHV0KFwicHhGcm9tSHRtbFRvcFwiKSBudW1iZXI/OiBudW1iZXJcbiAgQE91dHB1dChcInB4RnJvbUh0bWxUb3BDaGFuZ2VcIikgbnVtYmVyQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIHdhdGNoOmFueS8vYW55dGltZSBpdCBjaGFuZ2Ugd2UgdXBkYXRlXG5cbiAgY29uc3RydWN0b3IocHVibGljIEVsZW1lbnRSZWY6RWxlbWVudFJlZil7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT57XG4gICAgICB0aGlzLnNldHRlcigpXG4gICAgICB0aGlzLmVtaXQoKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub25TY3JvbGwpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIGVtaXQoKXtcbiAgICB0aGlzLm51bWJlckNoYW5nZS5lbWl0KHRoaXMubnVtYmVyKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLnNldHRlcigpXG4gICAgICB0aGlzLmVtaXQoKVxuICAgIH0pXG5cbiAgICB0aGlzLmRlbGF5RmlyZSgyNTApXG4gICAgdGhpcy5kZWxheUZpcmUoNzUwKVxuICAgIHRoaXMuZGVsYXlGaXJlKDE1MDApXG4gIH1cblxuICBzZXR0ZXIoKXtcbiAgICBjb25zdCB0b3AgPSB0aGlzLkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcbiAgICB0aGlzLm51bWJlciA9IHRvcC8vIHx8IDBcbiAgICAvL3RoaXMubnVtYmVyID0gZ2V0T2Zmc2V0KCB0aGlzLkVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCApLnRvcFxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5kZWxheUZpcmUoKVxuICAgIHRoaXMuZGVsYXlGaXJlKDIwMClcbiAgfVxuXG4gIGRlbGF5RmlyZSggbnVtOm51bWJlcj0wICl7XG4gICAgc2V0VGltZW91dCgoKT0+e1xuICAgICAgdGhpcy5zZXR0ZXIoKVxuICAgICAgdGhpcy5lbWl0KClcbiAgICB9LCBudW0pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxufVxuXG4vKlxuZXhwb3J0IGZ1bmN0aW9uIGdldE9mZnNldCggZWwgKSB7XG4gICAgdmFyIF94ID0gMDtcbiAgICB2YXIgX3kgPSAwO1xuICAgIHdoaWxlKCBlbCAmJiAhaXNOYU4oIGVsLm9mZnNldExlZnQgKSAmJiAhaXNOYU4oIGVsLm9mZnNldFRvcCApICkge1xuICAgICAgICBfeCArPSBlbC5vZmZzZXRMZWZ0IC0gZWwuc2Nyb2xsTGVmdDtcbiAgICAgICAgX3kgKz0gZWwub2Zmc2V0VG9wIC0gZWwuc2Nyb2xsVG9wO1xuICAgICAgICBlbCA9IGVsLm9mZnNldFBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHsgdG9wOiBfeSwgbGVmdDogX3ggfTtcbn0qLyJdfQ==