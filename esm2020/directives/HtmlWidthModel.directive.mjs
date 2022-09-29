import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "./HtmlSizeWatcher";
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
HtmlWidthModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlWidthModel, deps: [{ token: i1.HtmlSizeService }], target: i0.ɵɵFactoryTarget.Directive });
HtmlWidthModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: HtmlWidthModel, selector: "[htmlWidthModel]", inputs: { htmlWidthModel: "htmlWidthModel" }, outputs: { htmlWidthModelChange: "htmlWidthModelChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: HtmlWidthModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[htmlWidthModel]'
                }]
        }], ctorParameters: function () { return [{ type: i1.HtmlSizeService }]; }, propDecorators: { htmlWidthModel: [{
                type: Input
            }], htmlWidthModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7OztBQVFuQixNQUFNLE9BQU8sY0FBYztJQU01QixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5Qix5QkFBb0IsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUs3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBDOztXQUVHO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3BGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU07UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsUUFBUSxDQUFFLFFBQWtCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTtRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQTtJQUN2RCxDQUFDOzsyR0F2Q2EsY0FBYzsrRkFBZCxjQUFjOzJGQUFkLGNBQWM7a0JBRjdCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtpQkFDN0I7c0dBR1UsY0FBYztzQkFBdEIsS0FBSztnQkFDSSxvQkFBb0I7c0JBQTdCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tIFwicnhqc1wiXG5cbmltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHtcbiAgaHRtbFNpemUsIEh0bWxTaXplU2VydmljZVxufSBmcm9tIFwiLi9IdG1sU2l6ZVdhdGNoZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaHRtbFdpZHRoTW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIEh0bWxXaWR0aE1vZGVse1xuICBzdWI6U3Vic2NyaXB0aW9uXG5cbiAgQElucHV0KCkgaHRtbFdpZHRoTW9kZWw/OiBudW1iZXIgfCBudWxsXG4gIEBPdXRwdXQoKSBodG1sV2lkdGhNb2RlbENoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyIHwgbnVsbD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgSHRtbFNpemVTZXJ2aWNlOkh0bWxTaXplU2VydmljZVxuICApe1xuICAgIHRoaXMuc3ViID0gdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hhbmdlLnN1YnNjcmliZSgoKT0+dGhpcy5jaGFuZ2VkKCkpXG5cbiAgICB0aGlzLkh0bWxTaXplU2VydmljZS5jaGVja1dhdGNoZXJzKClcblxuICAgIC8qaWYoIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplICl7XG4gICAgICB0aGlzLmNoYW5nZWQoKVxuICAgIH0qL1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5jaGFuZ2VkKCkpLy90d28gd2F5IGJpbmQgb2Z0ZW4gbmVlZHMgaW5pdCBvdmVycmlkZVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpXG4gICAgdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hlY2tXYXRjaGVycygpXG4gIH1cblxuICBjaGFuZ2VkKCl7XG4gICAgaWYoICF0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZSB8fCAhdGhpcy5oYXNDaGFuZ2VkKCkgKXJldHVyblxuICAgIHRoaXMuc2V0TW9kZWwoIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmh0bWxTaXplIClcbiAgfVxuXG4gIGhhc0NoYW5nZWQoKXtcbiAgICByZXR1cm4gdGhpcy5odG1sV2lkdGhNb2RlbCAhPT0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aFxuICB9XG5cbiAgc2V0TW9kZWwoIGh0bWxTaXplOiBodG1sU2l6ZSApe1xuICAgIHRoaXMuaHRtbFdpZHRoTW9kZWwgPSBodG1sU2l6ZS53aWR0aFxuICAgIHRoaXMuaHRtbFdpZHRoTW9kZWxDaGFuZ2UuZW1pdCggdGhpcy5odG1sV2lkdGhNb2RlbCApXG4gIH1cbn1cbiJdfQ==