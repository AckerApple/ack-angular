import { Input, Output, EventEmitter, Directive } from "@angular/core";
import * as i0 from "@angular/core";
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
ReplaceModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReplaceModel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ReplaceModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ReplaceModel, selector: "[replaceModel]", inputs: { replaceModel: "replaceModel", replaceExpression: "replaceExpression" }, outputs: { replaceModelChange: "replaceModelChange" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReplaceModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[replaceModel]'
                }]
        }], propDecorators: { replaceModel: [{
                type: Input
            }], replaceModelChange: [{
                type: Output
            }], replaceExpression: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwbGFjZU1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1JlcGxhY2VNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEtBQUssRUFBRSxNQUFNLEVBQ2IsWUFBWSxFQUFFLFNBQVMsRUFDeEIsTUFBTSxlQUFlLENBQUE7O0FBSW5CLE1BQU0sT0FBTyxZQUFZO0lBRjVCO1FBSVksdUJBQWtCLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7S0F1QnZFO0lBcEJDLFdBQVcsQ0FBRSxPQUFXO1FBQ3RCLE1BQU0sUUFBUSxHQUFHLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsS0FBSyxNQUFNLENBQUE7UUFDdEcsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFBO1NBQ3ZDO0lBQ0gsQ0FBQztJQUVELEdBQUc7UUFDRCxNQUFNLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDbkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQTtRQUNsQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFFbEQsMEJBQTBCO1FBQzFCLElBQUksUUFBUSxLQUFHLFFBQVEsRUFBRTtZQUN2QixPQUFNO1NBQ1A7UUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQTtRQUM1QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxZQUFZLENBQUUsQ0FBQTtJQUNuRCxDQUFDOzt5R0F4QmEsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBRjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7OEJBQ1UsWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBQ0UsaUJBQWlCO3NCQUF6QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLCBEaXJlY3RpdmVcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbcmVwbGFjZU1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBSZXBsYWNlTW9kZWx7XG4gIEBJbnB1dCgpIHJlcGxhY2VNb2RlbCE6IHN0cmluZ1xuICBAT3V0cHV0KCkgcmVwbGFjZU1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIHJlcGxhY2VFeHByZXNzaW9uITogc3RyaW5nLy9yZWd1bGFyIGV4cHJlc3Npb25cblxuICBuZ09uQ2hhbmdlcyggY2hhbmdlczphbnkgKXtcbiAgICBjb25zdCBpc1N0cmluZyA9IGNoYW5nZXMucmVwbGFjZU1vZGVsICYmIHRoaXMucmVwbGFjZU1vZGVsICYmIHRoaXMucmVwbGFjZU1vZGVsLmNvbnN0cnVjdG9yID09PSBTdHJpbmdcbiAgICBpZiggaXNTdHJpbmcgKXtcbiAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMucnVuKCkpXG4gICAgfVxuICB9XG5cbiAgcnVuKCl7XG4gICAgY29uc3QgcnggPSBuZXcgUmVnRXhwKHRoaXMucmVwbGFjZUV4cHJlc3Npb24sICdnaScpXG4gICAgY29uc3Qgb2xkTW9kZWwgPSB0aGlzLnJlcGxhY2VNb2RlbFxuICAgIGNvbnN0IG5ld01vZGVsID0gdGhpcy5yZXBsYWNlTW9kZWwucmVwbGFjZShyeCwgJycpXG5cbiAgICAvL25vIGNoYW5nZSwgbm90aGluZyB0byBkb1xuICAgIGlmKCBvbGRNb2RlbD09PW5ld01vZGVsICl7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLnJlcGxhY2VNb2RlbCA9IG5ld01vZGVsXG4gICAgdGhpcy5yZXBsYWNlTW9kZWxDaGFuZ2UuZW1pdCggdGhpcy5yZXBsYWNlTW9kZWwgKVxuICB9XG59XG4iXX0=