import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class ScreenScrollHeightDiff {
    constructor() {
        this.screenScrollHeightDiffChange = new EventEmitter();
        this.on = () => {
            this.apply();
        };
        window.addEventListener("scroll", this.on);
        window.addEventListener("resize", this.on);
    }
    apply() {
        this.screenScrollHeightDiff = document.body.scrollHeight - window.innerHeight;
        if (this.screenScrollHeightDiff < 0)
            this.screenScrollHeightDiff = 0;
        this.screenScrollHeightDiffChange.emit(this.screenScrollHeightDiff);
    }
    ngOnDestroy() {
        window.removeEventListener("scroll", this.on);
        window.removeEventListener("resize", this.on);
    }
}
ScreenScrollHeightDiff.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScrollHeightDiff, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ScreenScrollHeightDiff.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ScreenScrollHeightDiff, selector: "[screenScrollHeightDiff]", inputs: { screenScrollHeightDiff: "screenScrollHeightDiff" }, outputs: { screenScrollHeightDiffChange: "screenScrollHeightDiffChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScrollHeightDiff, decorators: [{
            type: Directive,
            args: [{
                    selector: '[screenScrollHeightDiff]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { screenScrollHeightDiff: [{
                type: Input
            }], screenScrollHeightDiffChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5TY3JvbGxIZWlnaHREaWZmLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBOztBQUluQixNQUFNLE9BQU8sc0JBQXNCO0lBS3BDO1FBRlUsaUNBQTRCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUd6RCxJQUFJLENBQUMsRUFBRSxHQUFHLEdBQUUsRUFBRTtZQUNaLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLHNCQUFzQixHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDN0UsSUFBRyxJQUFJLENBQUMsc0JBQXNCLEdBQUMsQ0FBQztZQUFDLElBQUksQ0FBQyxzQkFBc0IsR0FBQyxDQUFDLENBQUE7UUFDOUQsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsc0JBQXNCLENBQUUsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQy9DLENBQUM7O21IQXZCYSxzQkFBc0I7dUdBQXRCLHNCQUFzQjsyRkFBdEIsc0JBQXNCO2tCQUZyQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSwwQkFBMEI7aUJBQ3JDOzBFQUVVLHNCQUFzQjtzQkFBOUIsS0FBSztnQkFDSSw0QkFBNEI7c0JBQXJDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JlZW5TY3JvbGxIZWlnaHREaWZmXSdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5TY3JvbGxIZWlnaHREaWZme1xuICBvbjogYW55XG4gIEBJbnB1dCgpIHNjcmVlblNjcm9sbEhlaWdodERpZmY6IGFueVxuICBAT3V0cHV0KCkgc2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vbiA9ICgpPT57XG4gICAgICB0aGlzLmFwcGx5KClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMub24pXG4gIH1cblxuICBhcHBseSgpe1xuICAgIHRoaXMuc2NyZWVuU2Nyb2xsSGVpZ2h0RGlmZiA9IGRvY3VtZW50LmJvZHkuc2Nyb2xsSGVpZ2h0IC0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgaWYodGhpcy5zY3JlZW5TY3JvbGxIZWlnaHREaWZmPDApdGhpcy5zY3JlZW5TY3JvbGxIZWlnaHREaWZmPTBcbiAgICB0aGlzLnNjcmVlblNjcm9sbEhlaWdodERpZmZDaGFuZ2UuZW1pdCggdGhpcy5zY3JlZW5TY3JvbGxIZWlnaHREaWZmIClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub24pXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5vbilcbiAgfVxufVxuIl19