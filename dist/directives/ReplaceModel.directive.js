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
