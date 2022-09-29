import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class ScreenScrollModelY {
    constructor() {
        this.screenScrollModelYChange = new EventEmitter();
        this.onScroll = () => {
            this.screenScrollModelY = window['pageYOffset'];
            this.screenScrollModelYChange.emit(this.screenScrollModelY);
        };
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
ScreenScrollModelY.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScrollModelY, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ScreenScrollModelY.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ScreenScrollModelY, selector: "[screenScrollModelY]", inputs: { screenScrollModelY: "screenScrollModelY" }, outputs: { screenScrollModelYChange: "screenScrollModelYChange" }, exportAs: ["ScreenScrollModelY"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenScrollModelY, decorators: [{
            type: Directive,
            args: [{
                    selector: '[screenScrollModelY]',
                    exportAs: 'ScreenScrollModelY'
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { screenScrollModelY: [{
                type: Input
            }], screenScrollModelYChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsTW9kZWxZLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbE1vZGVsWS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTs7QUFLbkIsTUFBTSxPQUFPLGtCQUFrQjtJQU1oQztRQUZVLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFHckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUMvQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQzdELENBQUMsQ0FBQTtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNmLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ2xELENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQSxDQUFBLHdDQUF3QztJQUNyRixDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3JELENBQUM7OytHQXJCYSxrQkFBa0I7bUdBQWxCLGtCQUFrQjsyRkFBbEIsa0JBQWtCO2tCQUhqQyxTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxzQkFBc0I7b0JBQ2hDLFFBQVEsRUFBRSxvQkFBb0I7aUJBQy9COzBFQUdVLGtCQUFrQjtzQkFBMUIsS0FBSztnQkFDSSx3QkFBd0I7c0JBQWpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JlZW5TY3JvbGxNb2RlbFldJyxcbiAgZXhwb3J0QXM6ICdTY3JlZW5TY3JvbGxNb2RlbFknXG59KSBleHBvcnQgY2xhc3MgU2NyZWVuU2Nyb2xsTW9kZWxZe1xuICBvblNjcm9sbDogYW55XG5cbiAgQElucHV0KCkgc2NyZWVuU2Nyb2xsTW9kZWxZOiBhbnlcbiAgQE91dHB1dCgpIHNjcmVlblNjcm9sbE1vZGVsWUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT57XG4gICAgICB0aGlzLnNjcmVlblNjcm9sbE1vZGVsWSA9IHdpbmRvd1sncGFnZVlPZmZzZXQnXVxuICAgICAgdGhpcy5zY3JlZW5TY3JvbGxNb2RlbFlDaGFuZ2UuZW1pdCh0aGlzLnNjcmVlblNjcm9sbE1vZGVsWSlcbiAgICB9XG4gICAgdGhpcy5vblNjcm9sbCgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5vblNjcm9sbCgpKS8vdHdvIHdheSBiaW5kIG9mdGVuIG5lZWRzIGluaXQgb3ZlcnJpZGVcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxufSJdfQ==