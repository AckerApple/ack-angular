import { Directive, Input, Output, EventEmitter } from "@angular/core";
export class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    }
}
StatusOnlineModel.decorators = [
    { type: Directive, args: [{ selector: '[statusOnlineModel]' },] }
];
StatusOnlineModel.ctorParameters = () => [];
StatusOnlineModel.propDecorators = {
    statusOnlineModel: [{ type: Input }],
    statusOnlineModelChange: [{ type: Output }]
};
