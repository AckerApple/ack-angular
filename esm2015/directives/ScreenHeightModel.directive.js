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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvU2NyZWVuSGVpZ2h0TW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTztBQUNMLFdBQVc7QUFDWCxlQUFlLEVBQ2hCLE1BQU0sbUJBQW1CLENBQUE7QUFLdkIsTUFBTSxPQUFPLGlCQUFpQjtJQU0vQixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUhMLGdCQUFXLEdBQXdCLElBQUksWUFBWSxFQUFFLENBQUE7UUFLdEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUE7UUFFcEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN0QyxDQUFDO0lBRUQsZUFBZTtRQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQ3pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDbkIsQ0FBQTtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUE7UUFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN2QixDQUFDO0lBRUQsVUFBVSxDQUFDLE1BQVcsQ0FBQztRQUNyQixVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ2pGLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU07UUFDaEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxXQUFXLENBQUE7SUFDMUMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUE7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUUsSUFBSSxDQUFDLEtBQUssQ0FBRSxDQUFBO0lBQ3JDLENBQUM7OztZQXpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDOUIsUUFBUSxFQUFFLG1CQUFtQjthQUMvQjs7OztRQVBDLFdBQVc7UUFDWCxlQUFlOzs7b0JBU2QsS0FBSyxTQUFDLG1CQUFtQjswQkFDekIsTUFBTSxTQUFDLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gXCJyeGpzL2ludGVybmFsL1N1YnNjcmlwdGlvblwiXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgLy9odG1sU2l6ZSxcbiAgSHRtbFNpemVTZXJ2aWNlXG59IGZyb20gXCIuL0h0bWxTaXplV2F0Y2hlclwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tzY3JlZW5IZWlnaHRNb2RlbF0nXG4gICxleHBvcnRBczogJ1NjcmVlbkhlaWdodE1vZGVsJ1xufSkgZXhwb3J0IGNsYXNzIFNjcmVlbkhlaWdodE1vZGVse1xuICBzdWI6U3Vic2NyaXB0aW9uXG5cbiAgQElucHV0KCdzY3JlZW5IZWlnaHRNb2RlbCcpIG1vZGVsOm51bWJlclxuICBAT3V0cHV0KCdzY3JlZW5IZWlnaHRNb2RlbENoYW5nZScpIG1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuICAgIFxuICAgIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoZWNrV2F0Y2hlcnMoKVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+XG4gICAgICB0aGlzLnVwZGF0ZU1vZGVsKClcbiAgICApXG4gICAgdGhpcy5kZWxheUNoZWNrKDI1MClcbiAgICB0aGlzLmRlbGF5Q2hlY2soMTUwMClcbiAgfVxuXG4gIGRlbGF5Q2hlY2sobnVtOm51bWJlcj0wKXtcbiAgICBzZXRUaW1lb3V0KCgpPT50aGlzLnVwZGF0ZU1vZGVsKCksIG51bSkvL3R3byB3YXkgYmluZCBvZnRlbiBuZWVkcyBpbml0IG92ZXJyaWRlXG4gIH1cblxuICBjaGFuZ2VkKCl7XG4gICAgaWYoICF0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZSB8fCAhdGhpcy5oYXNDaGFuZ2VkKCkgKXJldHVyblxuICAgIHRoaXMudXBkYXRlTW9kZWwoKVxuICB9XG5cbiAgaGFzQ2hhbmdlZCgpe1xuICAgIHJldHVybiB0aGlzLm1vZGVsICE9PSB3aW5kb3cuaW5uZXJIZWlnaHRcbiAgfVxuXG4gIHVwZGF0ZU1vZGVsKCl7XG4gICAgdGhpcy5tb2RlbCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIHRoaXMubW9kZWxDaGFuZ2UuZW1pdCggdGhpcy5tb2RlbCApXG4gIH1cbn0iXX0=