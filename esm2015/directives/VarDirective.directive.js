import { Directive, Input, EventEmitter, Output } from "@angular/core";
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
VarDirective.decorators = [
    { type: Directive, args: [{
                selector: "[var]",
                exportAs: "var"
            },] }
];
VarDirective.propDecorators = {
    var: [{ type: Input }],
    changed: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFyRGlyZWN0aXZlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL1ZhckRpcmVjdGl2ZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFDdkMsTUFBTSxlQUFlLENBQUE7QUFLbkIsTUFBTSxPQUFPLFlBQVk7SUFINUI7UUFLWSxZQUFPLEdBQXFCLElBQUksWUFBWSxFQUFFLENBQUE7SUFPMUQsQ0FBQztJQUxDLFdBQVcsQ0FBRSxPQUFXO1FBQ3RCLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLENBQUE7U0FDMUQ7SUFDSCxDQUFDOzs7WUFYRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCOzs7a0JBQ0UsS0FBSztzQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBPdXRwdXRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6IFwiW3Zhcl1cIixcbiAgZXhwb3J0QXM6IFwidmFyXCJcbn0pIGV4cG9ydCBjbGFzcyBWYXJEaXJlY3RpdmUge1xuICBASW5wdXQoKSB2YXI6YW55O1xuICBAT3V0cHV0KCkgY2hhbmdlZDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG5nT25DaGFuZ2VzKCBjaGFuZ2VzOmFueSApe1xuICAgIGlmKCBjaGFuZ2VzLnZhciApe1xuICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5jaGFuZ2VkLmVtaXQoIHRoaXMudmFyICkpXG4gICAgfVxuICB9XG59Il19