import { EventEmitter, Output, Input, Directive } from "@angular/core";
export class AckAggregate {
    constructor() {
        this.outputChange = new EventEmitter();
    }
}
AckAggregate.decorators = [
    { type: Directive, args: [{
                selector: 'ack-aggregate'
            },] }
];
AckAggregate.propDecorators = {
    type: [{ type: Input }],
    keys: [{ type: Input }],
    output: [{ type: Input }],
    outputChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrQWdncmVnYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0Fja0FnZ3JlZ2F0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUluRSxNQUFNLE9BQU8sWUFBWTtJQUY1QjtRQU9ZLGlCQUFZLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7SUFDbEUsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxlQUFlO2FBQ3pCOzs7bUJBQ0UsS0FBSzttQkFDTCxLQUFLO3FCQUVMLEtBQUs7MkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J2Fjay1hZ2dyZWdhdGUnXG59KSBleHBvcnQgY2xhc3MgQWNrQWdncmVnYXRlIHtcbiAgQElucHV0KCkgdHlwZSE6ICdzdW0nfHN0cmluZ1xuICBASW5wdXQoKSBrZXlzITogc3RyaW5nW10vL3BhdGggdG8gdmFyaWFibGVcblxuICBASW5wdXQoKSBvdXRwdXQhOiBudW1iZXJcbiAgQE91dHB1dCgpIG91dHB1dENoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxufSJdfQ==