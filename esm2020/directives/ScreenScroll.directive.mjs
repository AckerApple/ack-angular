import { Directive, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
ScreenScroll.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScroll, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ScreenScroll.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ScreenScroll, selector: "[screenScroll]", outputs: { screenScroll: "screenScroll" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScroll, decorators: [{
            type: Directive,
            args: [{
                    selector: '[screenScroll]'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { screenScroll: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBOztBQUluQixNQUFNLE9BQU8sWUFBWTtJQU0xQjtRQUZVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUd6QyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUUsRUFBRSxDQUNsQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFDLENBQUMsRUFBQyxNQUFNLENBQUMsYUFBYSxDQUFDLEVBQUUsQ0FBQyxFQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7eUdBbkJhLFlBQVk7NkZBQVosWUFBWTsyRkFBWixZQUFZO2tCQUYzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzBFQUlXLFlBQVk7c0JBQXJCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NjcmVlblNjcm9sbF0nXG59KSBleHBvcnQgY2xhc3MgU2NyZWVuU2Nyb2xse1xuICAvL3B1YmxpYyB3aW5kb3dcbiAgb25TY3JvbGw6IGFueVxuXG4gIEBPdXRwdXQoKSBzY3JlZW5TY3JvbGwgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMub25TY3JvbGwgPSAoKT0+XG4gICAgICB0aGlzLnNjcmVlblNjcm9sbC5lbWl0KHt4OndpbmRvd1sncGFnZVhPZmZzZXQnXSwgeTp3aW5kb3dbJ3BhZ2VZT2Zmc2V0J119KVxuICAgIHRoaXMub25TY3JvbGwoKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMub25TY3JvbGwoKSkvL3R3byB3YXkgYmluZCBvZnRlbiBuZWVkcyBpbml0IG92ZXJyaWRlXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMub25TY3JvbGwpXG4gIH1cbn1cbiJdfQ==