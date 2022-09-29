import { Directive, Input, EventEmitter, Output } from "@angular/core";
import * as i0 from "@angular/core";
export class VarDirective {
    constructor() {
        this.changed = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.var) {
            Promise.resolve().then(() => this.changed.emit(this.var));
        }
    }
}
VarDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: VarDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
VarDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: VarDirective, selector: "[var]", inputs: { var: "var" }, outputs: { changed: "changed" }, exportAs: ["var"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: VarDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: "[var]",
                    exportAs: "var"
                }]
        }], propDecorators: { var: [{
                type: Input
            }], changed: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyRGlyZWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1ZhckRpcmVjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDdkMsTUFBTSxlQUFlLENBQUE7O0FBS25CLE1BQU0sT0FBTyxZQUFZO0lBSDVCO1FBS1ksWUFBTyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO0tBT3pEO0lBTEMsV0FBVyxDQUFFLE9BQVc7UUFDdEIsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ2YsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsQ0FBQTtTQUMxRDtJQUNILENBQUM7O3lHQVJhLFlBQVk7NkZBQVosWUFBWTsyRkFBWixZQUFZO2tCQUgzQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxPQUFPO29CQUNqQixRQUFRLEVBQUUsS0FBSztpQkFDaEI7OEJBQ1UsR0FBRztzQkFBWCxLQUFLO2dCQUNJLE9BQU87c0JBQWhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsIElucHV0LCBFdmVudEVtaXR0ZXIsIE91dHB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogXCJbdmFyXVwiLFxuICBleHBvcnRBczogXCJ2YXJcIlxufSkgZXhwb3J0IGNsYXNzIFZhckRpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHZhcjphbnk7XG4gIEBPdXRwdXQoKSBjaGFuZ2VkOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgbmdPbkNoYW5nZXMoIGNoYW5nZXM6YW55ICl7XG4gICAgaWYoIGNoYW5nZXMudmFyICl7XG4gICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLmNoYW5nZWQuZW1pdCggdGhpcy52YXIgKSlcbiAgICB9XG4gIH1cbn0iXX0=