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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrQWdncmVnYXRlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi9zcmMvIiwic291cmNlcyI6WyJkaXJlY3RpdmVzL0Fja0FnZ3JlZ2F0ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUluRSxNQUFNLE9BQU8sWUFBWTtJQUY1QjtRQU9ZLGlCQUFZLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7SUFDbEUsQ0FBQzs7O1lBUkEsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxlQUFlO2FBQ3pCOzs7bUJBQ0UsS0FBSzttQkFDTCxLQUFLO3FCQUVMLEtBQUs7MkJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT3V0cHV0LCBJbnB1dCwgRGlyZWN0aXZlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J2Fjay1hZ2dyZWdhdGUnXG59KSBleHBvcnQgY2xhc3MgQWNrQWdncmVnYXRlIHtcbiAgQElucHV0KCkgdHlwZTonc3VtJ3xzdHJpbmdcbiAgQElucHV0KCkga2V5czpzdHJpbmdbXS8vcGF0aCB0byB2YXJpYWJsZVxuICBcbiAgQElucHV0KCkgb3V0cHV0Om51bWJlclxuICBAT3V0cHV0KCkgb3V0cHV0Q2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG59Il19