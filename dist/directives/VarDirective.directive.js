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
