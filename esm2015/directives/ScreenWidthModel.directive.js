import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { 
//htmlSize,
HtmlSizeService } from "./HtmlSizeWatcher";
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
ScreenWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[screenWidthModel]'
            },] }
];
ScreenWidthModel.ctorParameters = () => [
    { type: 
        //htmlSize,
        HtmlSizeService }
];
ScreenWidthModel.propDecorators = {
    screenWidthModel: [{ type: Input }],
    screenWidthModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5XaWR0aE1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU87QUFDTCxXQUFXO0FBQ1gsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFBO0FBSXZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFNOUIsWUFDUyxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIOUIsMkJBQXNCLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFLeEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVwQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRO2VBQy9CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFNO1FBRVAsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDekQsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1FBTkMsV0FBVztRQUNYLGVBQWU7OzsrQkFRZCxLQUFLO3FDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb25cIlxuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIC8vaHRtbFNpemUsXG4gIEh0bWxTaXplU2VydmljZVxufSBmcm9tIFwiLi9IdG1sU2l6ZVdhdGNoZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2NyZWVuV2lkdGhNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgU2NyZWVuV2lkdGhNb2RlbHtcbiAgc3ViOlN1YnNjcmlwdGlvblxuXG4gIEBJbnB1dCgpIHNjcmVlbldpZHRoTW9kZWw6bnVtYmVyXG4gIEBPdXRwdXQoKSBzY3JlZW5XaWR0aE1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuICAgIFxuICAgIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoZWNrV2F0Y2hlcnMoKVxuXG4gICAgaWYoIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplICl7XG4gICAgICB0aGlzLmNoYW5nZWQoKVxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZWQoKXtcbiAgICBpZiggIXRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplXG4gICAgfHwgIXRoaXMuaGFzQ2hhbmdlZCgpXG4gICAgKXJldHVyblxuICAgIFxuICAgIHRoaXMudXBkYXRlTW9kZWwoKVxuICB9XG5cbiAgaGFzQ2hhbmdlZCgpe1xuICAgIHJldHVybiB0aGlzLnNjcmVlbldpZHRoTW9kZWwgIT09IHdpbmRvdy5pbm5lcldpZHRoXG4gIH1cblxuICB1cGRhdGVNb2RlbCgpe1xuICAgIHRoaXMuc2NyZWVuV2lkdGhNb2RlbCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5zY3JlZW5XaWR0aE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5zY3JlZW5XaWR0aE1vZGVsKVxuICB9XG59Il19