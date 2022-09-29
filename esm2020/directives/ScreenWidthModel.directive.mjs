import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
export class ScreenWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.screenWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
        if (this.HtmlSizeService.htmlSize) {
            this.changed();
        }
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize
            || !this.hasChanged())
            return;
        this.updateModel();
    }
    hasChanged() {
        return this.screenWidthModel !== window.innerWidth;
    }
    updateModel() {
        this.screenWidthModel = window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    }
}
ScreenWidthModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenWidthModel, deps: [{ token: i1.HtmlSizeService }], target: i0.ɵɵFactoryTarget.Directive });
ScreenWidthModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ScreenWidthModel, selector: "[screenWidthModel]", inputs: { screenWidthModel: "screenWidthModel" }, outputs: { screenWidthModelChange: "screenWidthModelChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ScreenWidthModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[screenWidthModel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.HtmlSizeService }]; }, propDecorators: { screenWidthModel: [{
                type: Input
            }], screenWidthModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5XaWR0aE1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBOzs7QUFTbkIsTUFBTSxPQUFPLGdCQUFnQjtJQU05QixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5QiwyQkFBc0IsR0FBd0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUt4RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVE7ZUFDL0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLE9BQU07UUFFUCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDcEIsQ0FBQztJQUVELFVBQVU7UUFDUixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxNQUFNLENBQUMsVUFBVSxDQUFBO0lBQ3BELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUE7UUFDekMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUN6RCxDQUFDOzs2R0FqQ2EsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFGL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2lCQUMvQjtzR0FHVSxnQkFBZ0I7c0JBQXhCLEtBQUs7Z0JBQ0ksc0JBQXNCO3NCQUEvQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIlxuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIC8vaHRtbFNpemUsXG4gIEh0bWxTaXplU2VydmljZVxufSBmcm9tIFwiLi9IdG1sU2l6ZVdhdGNoZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2NyZWVuV2lkdGhNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgU2NyZWVuV2lkdGhNb2RlbHtcbiAgc3ViOiBTdWJzY3JpcHRpb25cblxuICBASW5wdXQoKSBzY3JlZW5XaWR0aE1vZGVsITogbnVtYmVyXG4gIEBPdXRwdXQoKSBzY3JlZW5XaWR0aE1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuXG4gICAgdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hlY2tXYXRjaGVycygpXG5cbiAgICBpZiggdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgKXtcbiAgICAgIHRoaXMuY2hhbmdlZCgpXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlZCgpe1xuICAgIGlmKCAhdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemVcbiAgICB8fCAhdGhpcy5oYXNDaGFuZ2VkKClcbiAgICApcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKXtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW5XaWR0aE1vZGVsICE9PSB3aW5kb3cuaW5uZXJXaWR0aFxuICB9XG5cbiAgdXBkYXRlTW9kZWwoKXtcbiAgICB0aGlzLnNjcmVlbldpZHRoTW9kZWwgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuc2NyZWVuV2lkdGhNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2NyZWVuV2lkdGhNb2RlbClcbiAgfVxufSJdfQ==