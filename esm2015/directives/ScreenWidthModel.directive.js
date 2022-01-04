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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuV2lkdGhNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TY3JlZW5XaWR0aE1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU87QUFDTCxXQUFXO0FBQ1gsZUFBZSxFQUNoQixNQUFNLG1CQUFtQixDQUFBO0FBSXZCLE1BQU0sT0FBTyxnQkFBZ0I7SUFNOUIsWUFDUyxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFIOUIsMkJBQXNCLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFLeEUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUVwQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxFQUFFO1lBQ2pDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtTQUNmO0lBQ0gsQ0FBQztJQUVELE9BQU87UUFDTCxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRO2VBQy9CLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixPQUFNO1FBRVAsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLEtBQUssTUFBTSxDQUFDLFVBQVUsQ0FBQTtJQUNwRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7SUFDekQsQ0FBQzs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7O1FBTkMsV0FBVztRQUNYLGVBQWU7OzsrQkFRZCxLQUFLO3FDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgLy9odG1sU2l6ZSxcbiAgSHRtbFNpemVTZXJ2aWNlXG59IGZyb20gXCIuL0h0bWxTaXplV2F0Y2hlclwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JlZW5XaWR0aE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBTY3JlZW5XaWR0aE1vZGVse1xuICBzdWI6IFN1YnNjcmlwdGlvblxuXG4gIEBJbnB1dCgpIHNjcmVlbldpZHRoTW9kZWwhOiBudW1iZXJcbiAgQE91dHB1dCgpIHNjcmVlbldpZHRoTW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgSHRtbFNpemVTZXJ2aWNlOkh0bWxTaXplU2VydmljZVxuICApe1xuICAgIHRoaXMuc3ViID0gdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hhbmdlLnN1YnNjcmliZSgoKT0+dGhpcy5jaGFuZ2VkKCkpXG5cbiAgICB0aGlzLkh0bWxTaXplU2VydmljZS5jaGVja1dhdGNoZXJzKClcblxuICAgIGlmKCB0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZSApe1xuICAgICAgdGhpcy5jaGFuZ2VkKClcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VkKCl7XG4gICAgaWYoICF0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZVxuICAgIHx8ICF0aGlzLmhhc0NoYW5nZWQoKVxuICAgIClyZXR1cm5cblxuICAgIHRoaXMudXBkYXRlTW9kZWwoKVxuICB9XG5cbiAgaGFzQ2hhbmdlZCgpe1xuICAgIHJldHVybiB0aGlzLnNjcmVlbldpZHRoTW9kZWwgIT09IHdpbmRvdy5pbm5lcldpZHRoXG4gIH1cblxuICB1cGRhdGVNb2RlbCgpe1xuICAgIHRoaXMuc2NyZWVuV2lkdGhNb2RlbCA9IHdpbmRvdy5pbm5lcldpZHRoXG4gICAgdGhpcy5zY3JlZW5XaWR0aE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5zY3JlZW5XaWR0aE1vZGVsKVxuICB9XG59Il19