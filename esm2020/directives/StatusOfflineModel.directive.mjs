import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    }
}
StatusOfflineModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: StatusOfflineModel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StatusOfflineModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: StatusOfflineModel, selector: "[statusOfflineModel]", inputs: { statusOfflineModel: "statusOfflineModel" }, outputs: { statusOfflineModelChange: "statusOfflineModelChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: StatusOfflineModel, decorators: [{
            type: Directive,
            args: [{ selector: '[statusOfflineModel]' }]
        }], ctorParameters: function () { return []; }, propDecorators: { statusOfflineModel: [{
                type: Input
            }], statusOfflineModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzT2ZmbGluZU1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1N0YXR1c09mZmxpbmVNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTs7QUFHdEIsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QjtRQUZVLDZCQUF3QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFHckQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQTtZQUMzQyxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO1FBQzdELENBQUMsQ0FBQTtRQUVELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2pELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ2hELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7SUFDN0MsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLENBQUMsbUJBQW1CLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRCxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUNyRCxDQUFDOzsrR0FuQlUsa0JBQWtCO21HQUFsQixrQkFBa0I7MkZBQWxCLGtCQUFrQjtrQkFEOUIsU0FBUzttQkFBQyxFQUFDLFFBQVEsRUFBQyxzQkFBc0IsRUFBQzswRUFHakMsa0JBQWtCO3NCQUExQixLQUFLO2dCQUNJLHdCQUF3QjtzQkFBakMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1tzdGF0dXNPZmZsaW5lTW9kZWxdJ30pXG5leHBvcnQgY2xhc3MgU3RhdHVzT2ZmbGluZU1vZGVse1xuICBvbkNoYW5nZTogYW55XG4gIEBJbnB1dCgpIHN0YXR1c09mZmxpbmVNb2RlbDogYW55XG4gIEBPdXRwdXQoKSBzdGF0dXNPZmZsaW5lTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoKT0+e1xuICAgICAgdGhpcy5zdGF0dXNPZmZsaW5lTW9kZWwgPSAhbmF2aWdhdG9yLm9uTGluZVxuICAgICAgdGhpcy5zdGF0dXNPZmZsaW5lTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnN0YXR1c09mZmxpbmVNb2RlbClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9mZmxpbmVcIiwgdGhpcy5vbkNoYW5nZSlcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMub25DaGFuZ2UoKSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub25DaGFuZ2UpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJvbmxpbmVcIiwgdGhpcy5vbkNoYW5nZSlcbiAgfVxufSJdfQ==