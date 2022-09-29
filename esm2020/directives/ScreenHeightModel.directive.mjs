import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
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
        setTimeout(() => this.updateModel(), num); //two way bind often needs init override
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
ScreenHeightModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenHeightModel, deps: [{ token: i1.HtmlSizeService }], target: i0.ɵɵFactoryTarget.Directive });
ScreenHeightModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ScreenHeightModel, selector: "[screenHeightModel]", inputs: { model: ["screenHeightModel", "model"] }, outputs: { modelChange: "screenHeightModelChange" }, exportAs: ["ScreenHeightModel"], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenHeightModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[screenHeightModel]',
                    exportAs: 'ScreenHeightModel'
                }]
        }], ctorParameters: function () { return [{ type: i1.HtmlSizeService }]; }, propDecorators: { model: [{
                type: Input,
                args: ['screenHeightModel']
            }], modelChange: [{
                type: Output,
                args: ['screenHeightModelChange']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7OztBQVVuQixNQUFNLE9BQU8saUJBQWlCO0lBTS9CLFlBQ1MsZUFBK0I7UUFBL0Isb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBSEwsZ0JBQVcsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUt0RixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUNuQixDQUFBO1FBQ0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7SUFFRCxVQUFVLENBQUMsTUFBVyxDQUFDO1FBQ3JCLFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUEsQ0FBQSx3Q0FBd0M7SUFDakYsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQUUsT0FBTTtRQUNoRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLFdBQVcsQ0FBQTtJQUMxQyxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQTtRQUMvQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBSyxDQUFFLENBQUE7SUFDckMsQ0FBQzs7OEdBdENhLGlCQUFpQjtrR0FBakIsaUJBQWlCOzJGQUFqQixpQkFBaUI7a0JBSGhDLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDOUIsUUFBUSxFQUFFLG1CQUFtQjtpQkFDL0I7c0dBRzZCLEtBQUs7c0JBQWhDLEtBQUs7dUJBQUMsbUJBQW1CO2dCQUNTLFdBQVc7c0JBQTdDLE1BQU07dUJBQUMseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIlxuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIC8vaHRtbFNpemUsXG4gIEh0bWxTaXplU2VydmljZVxufSBmcm9tIFwiLi9IdG1sU2l6ZVdhdGNoZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2NyZWVuSGVpZ2h0TW9kZWxdJ1xuICAsZXhwb3J0QXM6ICdTY3JlZW5IZWlnaHRNb2RlbCdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5IZWlnaHRNb2RlbHtcbiAgc3ViOlN1YnNjcmlwdGlvblxuXG4gIEBJbnB1dCgnc2NyZWVuSGVpZ2h0TW9kZWwnKSBtb2RlbCE6IG51bWJlclxuICBAT3V0cHV0KCdzY3JlZW5IZWlnaHRNb2RlbENoYW5nZScpIG1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuXG4gICAgdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hlY2tXYXRjaGVycygpXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT5cbiAgICAgIHRoaXMudXBkYXRlTW9kZWwoKVxuICAgIClcbiAgICB0aGlzLmRlbGF5Q2hlY2soMjUwKVxuICAgIHRoaXMuZGVsYXlDaGVjaygxNTAwKVxuICB9XG5cbiAgZGVsYXlDaGVjayhudW06bnVtYmVyPTApe1xuICAgIHNldFRpbWVvdXQoKCk9PnRoaXMudXBkYXRlTW9kZWwoKSwgbnVtKS8vdHdvIHdheSBiaW5kIG9mdGVuIG5lZWRzIGluaXQgb3ZlcnJpZGVcbiAgfVxuXG4gIGNoYW5nZWQoKXtcbiAgICBpZiggIXRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplIHx8ICF0aGlzLmhhc0NoYW5nZWQoKSApcmV0dXJuXG4gICAgdGhpcy51cGRhdGVNb2RlbCgpXG4gIH1cblxuICBoYXNDaGFuZ2VkKCl7XG4gICAgcmV0dXJuIHRoaXMubW9kZWwgIT09IHdpbmRvdy5pbm5lckhlaWdodFxuICB9XG5cbiAgdXBkYXRlTW9kZWwoKXtcbiAgICB0aGlzLm1vZGVsID0gd2luZG93LmlubmVySGVpZ2h0XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KCB0aGlzLm1vZGVsIClcbiAgfVxufSJdfQ==