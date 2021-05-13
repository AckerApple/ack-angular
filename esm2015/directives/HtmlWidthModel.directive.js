import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
export class HtmlWidthModel {
    constructor(HtmlSizeService) {
        this.HtmlSizeService = HtmlSizeService;
        this.htmlWidthModelChange = new EventEmitter();
        this.sub = this.HtmlSizeService.change.subscribe(() => this.changed());
        this.HtmlSizeService.checkWatchers();
        /*if( this.HtmlSizeService.htmlSize ){
          this.changed()
        }*/
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => this.changed()); //two way bind often needs init override
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.HtmlSizeService.checkWatchers();
    }
    changed() {
        if (!this.HtmlSizeService.htmlSize || !this.hasChanged())
            return;
        this.setModel(this.HtmlSizeService.htmlSize);
    }
    hasChanged() {
        return this.htmlWidthModel !== window.document.documentElement.clientWidth;
    }
    setModel(htmlSize) {
        this.htmlWidthModel = htmlSize.width;
        this.htmlWidthModelChange.emit(this.htmlWidthModel);
    }
}
HtmlWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[htmlWidthModel]'
            },] }
];
HtmlWidthModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
HtmlWidthModel.propDecorators = {
    htmlWidthModel: [{ type: Input }],
    htmlWidthModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNLLGVBQWUsRUFDMUIsTUFBTSxtQkFBbUIsQ0FBQTtBQUl2QixNQUFNLE9BQU8sY0FBYztJQU01QixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5Qix5QkFBb0IsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUs3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBDOztXQUVHO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3BGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU07UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsUUFBUSxDQUFFLFFBQWtCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTtRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQTtJQUN2RCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQUxXLGVBQWU7Ozs2QkFReEIsS0FBSzttQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anMvaW50ZXJuYWwvU3Vic2NyaXB0aW9uXCJcblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQge1xuICBodG1sU2l6ZSwgSHRtbFNpemVTZXJ2aWNlXG59IGZyb20gXCIuL0h0bWxTaXplV2F0Y2hlclwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1todG1sV2lkdGhNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgSHRtbFdpZHRoTW9kZWx7XG4gIHN1YjpTdWJzY3JpcHRpb25cblxuICBASW5wdXQoKSBodG1sV2lkdGhNb2RlbD86IG51bWJlciB8IG51bGxcbiAgQE91dHB1dCgpIGh0bWxXaWR0aE1vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxudW1iZXIgfCBudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBIdG1sU2l6ZVNlcnZpY2U6SHRtbFNpemVTZXJ2aWNlXG4gICl7XG4gICAgdGhpcy5zdWIgPSB0aGlzLkh0bWxTaXplU2VydmljZS5jaGFuZ2Uuc3Vic2NyaWJlKCgpPT50aGlzLmNoYW5nZWQoKSlcblxuICAgIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoZWNrV2F0Y2hlcnMoKVxuXG4gICAgLyppZiggdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgKXtcbiAgICAgIHRoaXMuY2hhbmdlZCgpXG4gICAgfSovXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLmNoYW5nZWQoKSkvL3R3byB3YXkgYmluZCBvZnRlbiBuZWVkcyBpbml0IG92ZXJyaWRlXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKClcbiAgICB0aGlzLkh0bWxTaXplU2VydmljZS5jaGVja1dhdGNoZXJzKClcbiAgfVxuXG4gIGNoYW5nZWQoKXtcbiAgICBpZiggIXRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplIHx8ICF0aGlzLmhhc0NoYW5nZWQoKSApcmV0dXJuXG4gICAgdGhpcy5zZXRNb2RlbCggdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgKVxuICB9XG5cbiAgaGFzQ2hhbmdlZCgpe1xuICAgIHJldHVybiB0aGlzLmh0bWxXaWR0aE1vZGVsICE9PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoXG4gIH1cblxuICBzZXRNb2RlbCggaHRtbFNpemU6IGh0bWxTaXplICl7XG4gICAgdGhpcy5odG1sV2lkdGhNb2RlbCA9IGh0bWxTaXplLndpZHRoXG4gICAgdGhpcy5odG1sV2lkdGhNb2RlbENoYW5nZS5lbWl0KCB0aGlzLmh0bWxXaWR0aE1vZGVsIClcbiAgfVxufVxuIl19