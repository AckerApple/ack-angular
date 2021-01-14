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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbGFjZU1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL1JlcGxhY2VNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLFNBQVMsRUFDeEIsTUFBTSxlQUFlLENBQUE7QUFJbkIsTUFBTSxPQUFPLFlBQVk7SUFGNUI7UUFJWSx1QkFBa0IsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQXVCeEUsQ0FBQztJQXBCQyxXQUFXLENBQUUsT0FBVztRQUN0QixNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEtBQUssTUFBTSxDQUFBO1FBQ3RHLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7SUFFRCxHQUFHO1FBQ0QsTUFBTSxFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25ELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUE7UUFDbEMsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1FBRWxELDBCQUEwQjtRQUMxQixJQUFJLFFBQVEsS0FBRyxRQUFRLEVBQUU7WUFDdkIsT0FBTTtTQUNQO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUE7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsWUFBWSxDQUFFLENBQUE7SUFDbkQsQ0FBQzs7O1lBMUJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7MkJBQ0UsS0FBSztpQ0FDTCxNQUFNO2dDQUNOLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbnB1dCwgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsIERpcmVjdGl2ZVxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tyZXBsYWNlTW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIFJlcGxhY2VNb2RlbHtcbiAgQElucHV0KCkgcmVwbGFjZU1vZGVsOnN0cmluZ1xuICBAT3V0cHV0KCkgcmVwbGFjZU1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIHJlcGxhY2VFeHByZXNzaW9uOnN0cmluZy8vcmVndWxhciBleHByZXNzaW9uXG5cbiAgbmdPbkNoYW5nZXMoIGNoYW5nZXM6YW55ICl7XG4gICAgY29uc3QgaXNTdHJpbmcgPSBjaGFuZ2VzLnJlcGxhY2VNb2RlbCAmJiB0aGlzLnJlcGxhY2VNb2RlbCAmJiB0aGlzLnJlcGxhY2VNb2RlbC5jb25zdHJ1Y3RvciA9PT0gU3RyaW5nXG4gICAgaWYoIGlzU3RyaW5nICl7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnJ1bigpKVxuICAgIH1cbiAgfVxuXG4gIHJ1bigpe1xuICAgIGNvbnN0IHJ4ID0gbmV3IFJlZ0V4cCh0aGlzLnJlcGxhY2VFeHByZXNzaW9uLCAnZ2knKVxuICAgIGNvbnN0IG9sZE1vZGVsID0gdGhpcy5yZXBsYWNlTW9kZWxcbiAgICBjb25zdCBuZXdNb2RlbCA9IHRoaXMucmVwbGFjZU1vZGVsLnJlcGxhY2UocngsICcnKVxuXG4gICAgLy9ubyBjaGFuZ2UsIG5vdGhpbmcgdG8gZG9cbiAgICBpZiggb2xkTW9kZWw9PT1uZXdNb2RlbCApe1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5yZXBsYWNlTW9kZWwgPSBuZXdNb2RlbFxuICAgIHRoaXMucmVwbGFjZU1vZGVsQ2hhbmdlLmVtaXQoIHRoaXMucmVwbGFjZU1vZGVsIClcbiAgfVxufVxuIl19