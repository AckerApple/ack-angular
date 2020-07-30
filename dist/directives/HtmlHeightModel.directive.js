import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
export class HtmlHeightModel extends HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
}
HtmlHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[htmlHeightModel]'
            },] }
];
HtmlHeightModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
HtmlHeightModel.propDecorators = {
    htmlHeightModel: [{ type: Input }],
    htmlHeightModelChange: [{ type: Output }]
};
