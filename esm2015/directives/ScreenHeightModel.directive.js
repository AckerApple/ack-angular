import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { 
//htmlSize,
HtmlSizeService } from "./HtmlSizeWatcher";
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
ScreenHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[screenHeightModel]',
                exportAs: 'ScreenHeightModel'
            },] }
];
ScreenHeightModel.ctorParameters = () => [
    { type: 
        //htmlSize,
        HtmlSizeService }
];
ScreenHeightModel.propDecorators = {
    model: [{ type: Input, args: ['screenHeightModel',] }],
    modelChange: [{ type: Output, args: ['screenHeightModelChange',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTztBQUNMLFdBQVc7QUFDWCxlQUFlLEVBQ2hCLE1BQU0sbUJBQW1CLENBQUE7QUFLdkIsTUFBTSxPQUFPLGlCQUFpQjtJQU0vQixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUhMLGdCQUFXLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFLdEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDbkIsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQVcsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ2pGLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU07UUFDaEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUE7SUFDMUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFBO0lBQ3JDLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDOUIsUUFBUSxFQUFFLG1CQUFtQjthQUMvQjs7OztRQVBDLFdBQVc7UUFDWCxlQUFlOzs7b0JBU2QsS0FBSyxTQUFDLG1CQUFtQjswQkFDekIsTUFBTSxTQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvblwiXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgLy9odG1sU2l6ZSxcbiAgSHRtbFNpemVTZXJ2aWNlXG59IGZyb20gXCIuL0h0bWxTaXplV2F0Y2hlclwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JlZW5IZWlnaHRNb2RlbF0nXG4gICxleHBvcnRBczogJ1NjcmVlbkhlaWdodE1vZGVsJ1xufSkgZXhwb3J0IGNsYXNzIFNjcmVlbkhlaWdodE1vZGVse1xuICBzdWI6U3Vic2NyaXB0aW9uXG5cbiAgQElucHV0KCdzY3JlZW5IZWlnaHRNb2RlbCcpIG1vZGVsITogbnVtYmVyXG4gIEBPdXRwdXQoJ3NjcmVlbkhlaWdodE1vZGVsQ2hhbmdlJykgbW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgSHRtbFNpemVTZXJ2aWNlOkh0bWxTaXplU2VydmljZVxuICApe1xuICAgIHRoaXMuc3ViID0gdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hhbmdlLnN1YnNjcmliZSgoKT0+dGhpcy5jaGFuZ2VkKCkpXG5cbiAgICB0aGlzLkh0bWxTaXplU2VydmljZS5jaGVja1dhdGNoZXJzKClcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PlxuICAgICAgdGhpcy51cGRhdGVNb2RlbCgpXG4gICAgKVxuICAgIHRoaXMuZGVsYXlDaGVjaygyNTApXG4gICAgdGhpcy5kZWxheUNoZWNrKDE1MDApXG4gIH1cblxuICBkZWxheUNoZWNrKG51bTpudW1iZXI9MCl7XG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy51cGRhdGVNb2RlbCgpLCBudW0pLy90d28gd2F5IGJpbmQgb2Z0ZW4gbmVlZHMgaW5pdCBvdmVycmlkZVxuICB9XG5cbiAgY2hhbmdlZCgpe1xuICAgIGlmKCAhdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgfHwgIXRoaXMuaGFzQ2hhbmdlZCgpIClyZXR1cm5cbiAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKXtcbiAgICByZXR1cm4gdGhpcy5tb2RlbCAhPT0gd2luZG93LmlubmVySGVpZ2h0XG4gIH1cblxuICB1cGRhdGVNb2RlbCgpe1xuICAgIHRoaXMubW9kZWwgPSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgICB0aGlzLm1vZGVsQ2hhbmdlLmVtaXQoIHRoaXMubW9kZWwgKVxuICB9XG59Il19