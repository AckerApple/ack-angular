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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuU2Nyb2xsTW9kZWxZLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1NjcmVlblNjcm9sbE1vZGVsWS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQUtuQixNQUFNLE9BQU8sa0JBQWtCO0lBTWhDO1FBRlUsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFBO1lBQy9DLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUE7UUFDN0QsQ0FBQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2YsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3JGLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O2lDQUdFLEtBQUs7dUNBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW3NjcmVlblNjcm9sbE1vZGVsWV0nLFxuICBleHBvcnRBczogJ1NjcmVlblNjcm9sbE1vZGVsWSdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5TY3JvbGxNb2RlbFl7XG4gIG9uU2Nyb2xsOiBhbnlcblxuICBASW5wdXQoKSBzY3JlZW5TY3JvbGxNb2RlbFk6IGFueVxuICBAT3V0cHV0KCkgc2NyZWVuU2Nyb2xsTW9kZWxZQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLm9uU2Nyb2xsID0gKCk9PntcbiAgICAgIHRoaXMuc2NyZWVuU2Nyb2xsTW9kZWxZID0gd2luZG93WydwYWdlWU9mZnNldCddXG4gICAgICB0aGlzLnNjcmVlblNjcm9sbE1vZGVsWUNoYW5nZS5lbWl0KHRoaXMuc2NyZWVuU2Nyb2xsTW9kZWxZKVxuICAgIH1cbiAgICB0aGlzLm9uU2Nyb2xsKClcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLm9uU2Nyb2xsKCkpLy90d28gd2F5IGJpbmQgb2Z0ZW4gbmVlZHMgaW5pdCBvdmVycmlkZVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsKVxuICB9XG59Il19