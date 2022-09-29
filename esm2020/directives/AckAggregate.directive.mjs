import { EventEmitter, Output, Input, Directive } from "@angular/core";
import * as i0 from "@angular/core";
export class AckAggregate {
    constructor() {
        this.outputChange = new EventEmitter();
    }
}
AckAggregate.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckAggregate, deps: [], target: i0.ɵɵFactoryTarget.Directive });
AckAggregate.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: AckAggregate, selector: "ack-aggregate", inputs: { type: "type", keys: "keys", output: "output" }, outputs: { outputChange: "outputChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckAggregate, decorators: [{
            type: Directive,
            args: [{
                    selector: 'ack-aggregate'
                }]
        }], propDecorators: { type: [{
                type: Input
            }], keys: [{
                type: Input
            }], output: [{
                type: Input
            }], outputChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrQWdncmVnYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0Fja0FnZ3JlZ2F0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTs7QUFJbkUsTUFBTSxPQUFPLFlBQVk7SUFGNUI7UUFPWSxpQkFBWSxHQUF3QixJQUFJLFlBQVksRUFBRSxDQUFBO0tBQ2pFOzt5R0FOZSxZQUFZOzZGQUFaLFlBQVk7MkZBQVosWUFBWTtrQkFGM0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsZUFBZTtpQkFDekI7OEJBQ1UsSUFBSTtzQkFBWixLQUFLO2dCQUNHLElBQUk7c0JBQVosS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0ksWUFBWTtzQkFBckIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J2Fjay1hZ2dyZWdhdGUnXG59KSBleHBvcnQgY2xhc3MgQWNrQWdncmVnYXRlIHtcbiAgQElucHV0KCkgdHlwZSE6ICdzdW0nfHN0cmluZ1xuICBASW5wdXQoKSBrZXlzITogc3RyaW5nW10vL3BhdGggdG8gdmFyaWFibGVcblxuICBASW5wdXQoKSBvdXRwdXQhOiBudW1iZXJcbiAgQE91dHB1dCgpIG91dHB1dENoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufSJdfQ==