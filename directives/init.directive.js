import { Directive, Output, EventEmitter } from "@angular/core";
export class Init {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
}
Init.decorators = [
    { type: Directive, args: [{
                selector: '[init]'
            },] }
];
Init.propDecorators = {
    init: [{ type: Output }]
};
