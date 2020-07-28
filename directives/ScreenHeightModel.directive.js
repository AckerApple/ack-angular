import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
export class ScreenHeightModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.modelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.updateModel());
        this.delayCheck(250);
        this.delayCheck(1500);
    }
    delayCheck(num = 0) {
        setTimeout(() => this.updateModel(), num);
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.model !== window.innerHeight;
    }
    updateModel() {
        this.model = window.innerHeight;
        this.modelChange.emit(this.model);
    }
}
ScreenHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[screenHeightModel]',
                exportAs: 'ScreenHeightModel'
            },] }
];
ScreenHeightModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
ScreenHeightModel.propDecorators = {
    model: [{ type: Input, args: ['screenHeightModel',] }],
    modelChange: [{ type: Output, args: ['screenHeightModelChange',] }]
};
