import { Directive, Input, Output, EventEmitter } from "@angular/core";
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
ScreenScrollModelY.decorators = [
    { type: Directive, args: [{
                selector: '[screenScrollModelY]',
                exportAs: 'ScreenScrollModelY'
            },] }
];
ScreenScrollModelY.ctorParameters = () => [];
ScreenScrollModelY.propDecorators = {
    screenScrollModelY: [{ type: Input }],
    screenScrollModelYChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsTW9kZWxZLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbE1vZGVsWS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQUtuQixNQUFNLE9BQU8sa0JBQWtCO0lBTWhDO1FBRlUsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQy9DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDN0QsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O2lDQUdFLEtBQUs7dUNBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NjcmVlblNjcm9sbE1vZGVsWV0nLFxuICBleHBvcnRBczogJ1NjcmVlblNjcm9sbE1vZGVsWSdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5TY3JvbGxNb2RlbFl7XG4gIG9uU2Nyb2xsXG5cbiAgQElucHV0KCkgc2NyZWVuU2Nyb2xsTW9kZWxZXG4gIEBPdXRwdXQoKSBzY3JlZW5TY3JvbGxNb2RlbFlDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgXG4gIGNvbnN0cnVjdG9yKCl7XG4gICAgdGhpcy5vblNjcm9sbCA9ICgpPT57XG4gICAgICB0aGlzLnNjcmVlblNjcm9sbE1vZGVsWSA9IHdpbmRvd1sncGFnZVlPZmZzZXQnXVxuICAgICAgdGhpcy5zY3JlZW5TY3JvbGxNb2RlbFlDaGFuZ2UuZW1pdCh0aGlzLnNjcmVlblNjcm9sbE1vZGVsWSlcbiAgICB9XG4gICAgdGhpcy5vblNjcm9sbCgpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5vblNjcm9sbCgpKS8vdHdvIHdheSBiaW5kIG9mdGVuIG5lZWRzIGluaXQgb3ZlcnJpZGVcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5vblNjcm9sbClcbiAgfVxufSJdfQ==