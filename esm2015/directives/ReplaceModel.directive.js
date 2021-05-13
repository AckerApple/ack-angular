import { Input, Output, EventEmitter, Directive } from "@angular/core";
export class ReplaceModel {
    constructor() {
        this.replaceModelChange = new EventEmitter();
    }
    ngOnChanges(changes) {
        const isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(() => this.run());
        }
    }
    run() {
        const rx = new RegExp(this.replaceExpression, 'gi');
        const oldModel = this.replaceModel;
        const newModel = this.replaceModel.replace(rx, '');
        //no change, nothing to do
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    }
}
ReplaceModel.decorators = [
    { type: Directive, args: [{
                selector: '[replaceModel]'
            },] }
];
ReplaceModel.propDecorators = {
    replaceModel: [{ type: Input }],
    replaceModelChange: [{ type: Output }],
    replaceExpression: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbGFjZU1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1JlcGxhY2VNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLFNBQVMsRUFDeEIsTUFBTSxlQUFlLENBQUE7QUFJbkIsTUFBTSxPQUFPLFlBQVk7SUFGNUI7UUFJWSx1QkFBa0IsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQXVCeEUsQ0FBQztJQXBCQyxXQUFXLENBQUUsT0FBVztRQUN0QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFBO1FBQ3RHLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7SUFFRCxHQUFHO1FBQ0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxELDBCQUEwQjtRQUMxQixJQUFJLFFBQVEsS0FBRyxRQUFRLEVBQUU7WUFDdkIsT0FBTTtTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUE7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUE7SUFDbkQsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7MkJBQ0UsS0FBSztpQ0FDTCxNQUFNO2dDQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXBsYWNlTW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIFJlcGxhY2VNb2RlbHtcbiAgQElucHV0KCkgcmVwbGFjZU1vZGVsITogc3RyaW5nXG4gIEBPdXRwdXQoKSByZXBsYWNlTW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQElucHV0KCkgcmVwbGFjZUV4cHJlc3Npb24hOiBzdHJpbmcvL3JlZ3VsYXIgZXhwcmVzc2lvblxuXG4gIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOmFueSApe1xuICAgIGNvbnN0IGlzU3RyaW5nID0gY2hhbmdlcy5yZXBsYWNlTW9kZWwgJiYgdGhpcy5yZXBsYWNlTW9kZWwgJiYgdGhpcy5yZXBsYWNlTW9kZWwuY29uc3RydWN0b3IgPT09IFN0cmluZ1xuICAgIGlmKCBpc1N0cmluZyApe1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5ydW4oKSlcbiAgICB9XG4gIH1cblxuICBydW4oKXtcbiAgICBjb25zdCByeCA9IG5ldyBSZWdFeHAodGhpcy5yZXBsYWNlRXhwcmVzc2lvbiwgJ2dpJylcbiAgICBjb25zdCBvbGRNb2RlbCA9IHRoaXMucmVwbGFjZU1vZGVsXG4gICAgY29uc3QgbmV3TW9kZWwgPSB0aGlzLnJlcGxhY2VNb2RlbC5yZXBsYWNlKHJ4LCAnJylcblxuICAgIC8vbm8gY2hhbmdlLCBub3RoaW5nIHRvIGRvXG4gICAgaWYoIG9sZE1vZGVsPT09bmV3TW9kZWwgKXtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMucmVwbGFjZU1vZGVsID0gbmV3TW9kZWxcbiAgICB0aGlzLnJlcGxhY2VNb2RlbENoYW5nZS5lbWl0KCB0aGlzLnJlcGxhY2VNb2RlbCApXG4gIH1cbn1cbiJdfQ==