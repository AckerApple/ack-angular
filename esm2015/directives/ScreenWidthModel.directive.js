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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5XaWR0aE1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU87QUFDTCxXQUFXO0FBQ1gsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFBO0FBSXZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFNOUIsWUFDUyxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIOUIsMkJBQXNCLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFLeEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVwQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRO2VBQy9CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFNO1FBRVAsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDekQsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1FBTkMsV0FBVztRQUNYLGVBQWU7OzsrQkFRZCxLQUFLO3FDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqcy9pbnRlcm5hbC9TdWJzY3JpcHRpb25cIlxuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIC8vaHRtbFNpemUsXG4gIEh0bWxTaXplU2VydmljZVxufSBmcm9tIFwiLi9IdG1sU2l6ZVdhdGNoZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbc2NyZWVuV2lkdGhNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgU2NyZWVuV2lkdGhNb2RlbHtcbiAgc3ViOiBTdWJzY3JpcHRpb25cblxuICBASW5wdXQoKSBzY3JlZW5XaWR0aE1vZGVsITogbnVtYmVyXG4gIEBPdXRwdXQoKSBzY3JlZW5XaWR0aE1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuXG4gICAgdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hlY2tXYXRjaGVycygpXG5cbiAgICBpZiggdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgKXtcbiAgICAgIHRoaXMuY2hhbmdlZCgpXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlZCgpe1xuICAgIGlmKCAhdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemVcbiAgICB8fCAhdGhpcy5oYXNDaGFuZ2VkKClcbiAgICApcmV0dXJuXG5cbiAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKXtcbiAgICByZXR1cm4gdGhpcy5zY3JlZW5XaWR0aE1vZGVsICE9PSB3aW5kb3cuaW5uZXJXaWR0aFxuICB9XG5cbiAgdXBkYXRlTW9kZWwoKXtcbiAgICB0aGlzLnNjcmVlbldpZHRoTW9kZWwgPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIHRoaXMuc2NyZWVuV2lkdGhNb2RlbENoYW5nZS5lbWl0KHRoaXMuc2NyZWVuV2lkdGhNb2RlbClcbiAgfVxufSJdfQ==