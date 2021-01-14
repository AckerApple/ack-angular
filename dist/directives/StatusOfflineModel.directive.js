import { Directive, Input, Output, EventEmitter } from "@angular/core";
export class StatusOfflineModel {
    constructor() {
        this.statusOfflineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOfflineModel = !navigator.onLine;
            this.statusOfflineModelChange.emit(this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    }
}
StatusOfflineModel.decorators = [
    { type: Directive, args: [{ selector: '[statusOfflineModel]' },] }
];
StatusOfflineModel.ctorParameters = () => [];
StatusOfflineModel.propDecorators = {
    statusOfflineModel: [{ type: Input }],
    statusOfflineModelChange: [{ type: Output }]
};
