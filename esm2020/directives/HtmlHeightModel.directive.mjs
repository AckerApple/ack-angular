import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
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
HtmlHeightModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlHeightModel, deps: [{ token: i1.HtmlSizeService }], target: i0.ɵɵFactoryTarget.Directive });
HtmlHeightModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: HtmlHeightModel, selector: "[htmlHeightModel]", inputs: { htmlHeightModel: "htmlHeightModel" }, outputs: { htmlHeightModelChange: "htmlHeightModelChange" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlHeightModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[htmlHeightModel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.HtmlSizeService }]; }, propDecorators: { htmlHeightModel: [{
                type: Input
            }], htmlHeightModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbEhlaWdodE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0h0bWxIZWlnaHRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQU10QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUE7OztBQUl4RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjO0lBSXBELFlBQ1MsZUFBK0I7UUFFdEMsS0FBSyxDQUFFLGVBQWUsQ0FBRSxDQUFBO1FBRmpCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5QiwwQkFBcUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQU0vRSxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUE7SUFDOUUsQ0FBQztJQUVELFFBQVEsQ0FBRSxLQUFjO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsQ0FBQTtJQUN6RCxDQUFDOzs0R0FqQmEsZUFBZTtnR0FBZixlQUFlOzJGQUFmLGVBQWU7a0JBRjlCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLG1CQUFtQjtpQkFDOUI7c0dBQ1UsZUFBZTtzQkFBdkIsS0FBSztnQkFDSSxxQkFBcUI7c0JBQTlCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIGh0bWxTaXplLCBIdG1sU2l6ZVNlcnZpY2Vcbn0gZnJvbSBcIi4vSHRtbFNpemVXYXRjaGVyXCJcblxuaW1wb3J0IHsgSHRtbFdpZHRoTW9kZWwgfSBmcm9tIFwiLi9IdG1sV2lkdGhNb2RlbC5kaXJlY3RpdmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaHRtbEhlaWdodE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBIdG1sSGVpZ2h0TW9kZWwgZXh0ZW5kcyBIdG1sV2lkdGhNb2RlbHtcbiAgQElucHV0KCkgaHRtbEhlaWdodE1vZGVsITogbnVtYmVyIHwgbnVsbFxuICBAT3V0cHV0KCkgaHRtbEhlaWdodE1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXIgfG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICBzdXBlciggSHRtbFNpemVTZXJ2aWNlIClcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKXtcbiAgICByZXR1cm4gdGhpcy5odG1sSGVpZ2h0TW9kZWwgIT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG4gIH1cblxuICBzZXRNb2RlbCggbW9kZWw6aHRtbFNpemUgKXtcbiAgICB0aGlzLmh0bWxIZWlnaHRNb2RlbCA9IG1vZGVsLmhlaWdodFxuICAgIHRoaXMuaHRtbEhlaWdodE1vZGVsQ2hhbmdlLmVtaXQoIHRoaXMuaHRtbEhlaWdodE1vZGVsIClcbiAgfVxufVxuIl19