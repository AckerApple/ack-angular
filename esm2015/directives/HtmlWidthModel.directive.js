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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUNLLGVBQWUsRUFDMUIsTUFBTSxtQkFBbUIsQ0FBQTtBQUl2QixNQUFNLE9BQU8sY0FBYztJQU01QixZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5Qix5QkFBb0IsR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUs3RSxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQTtRQUVwRSxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBRXBDOztXQUVHO0lBQ0wsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFBLENBQUEsd0NBQXdDO0lBQ3BGLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3RDLENBQUM7SUFFRCxPQUFPO1FBQ0wsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUFFLE9BQU07UUFDaEUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBRSxDQUFBO0lBQ2hELENBQUM7SUFFRCxVQUFVO1FBQ1IsT0FBTyxJQUFJLENBQUMsY0FBYyxLQUFLLE1BQU0sQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsUUFBUSxDQUFFLFFBQWtCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTtRQUNwQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxjQUFjLENBQUUsQ0FBQTtJQUN2RCxDQUFDOzs7WUF6Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7OztZQUxXLGVBQWU7Ozs2QkFReEIsS0FBSzttQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSBcInJ4anNcIlxuXG5pbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7XG4gIGh0bWxTaXplLCBIdG1sU2l6ZVNlcnZpY2Vcbn0gZnJvbSBcIi4vSHRtbFNpemVXYXRjaGVyXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2h0bWxXaWR0aE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBIdG1sV2lkdGhNb2RlbHtcbiAgc3ViOlN1YnNjcmlwdGlvblxuXG4gIEBJbnB1dCgpIGh0bWxXaWR0aE1vZGVsPzogbnVtYmVyIHwgbnVsbFxuICBAT3V0cHV0KCkgaHRtbFdpZHRoTW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPG51bWJlciB8IG51bGw+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIEh0bWxTaXplU2VydmljZTpIdG1sU2l6ZVNlcnZpY2VcbiAgKXtcbiAgICB0aGlzLnN1YiA9IHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoYW5nZS5zdWJzY3JpYmUoKCk9PnRoaXMuY2hhbmdlZCgpKVxuXG4gICAgdGhpcy5IdG1sU2l6ZVNlcnZpY2UuY2hlY2tXYXRjaGVycygpXG5cbiAgICAvKmlmKCB0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZSApe1xuICAgICAgdGhpcy5jaGFuZ2VkKClcbiAgICB9Ki9cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMuY2hhbmdlZCgpKS8vdHdvIHdheSBiaW5kIG9mdGVuIG5lZWRzIGluaXQgb3ZlcnJpZGVcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5zdWIudW5zdWJzY3JpYmUoKVxuICAgIHRoaXMuSHRtbFNpemVTZXJ2aWNlLmNoZWNrV2F0Y2hlcnMoKVxuICB9XG5cbiAgY2hhbmdlZCgpe1xuICAgIGlmKCAhdGhpcy5IdG1sU2l6ZVNlcnZpY2UuaHRtbFNpemUgfHwgIXRoaXMuaGFzQ2hhbmdlZCgpIClyZXR1cm5cbiAgICB0aGlzLnNldE1vZGVsKCB0aGlzLkh0bWxTaXplU2VydmljZS5odG1sU2l6ZSApXG4gIH1cblxuICBoYXNDaGFuZ2VkKCl7XG4gICAgcmV0dXJuIHRoaXMuaHRtbFdpZHRoTW9kZWwgIT09IHdpbmRvdy5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGhcbiAgfVxuXG4gIHNldE1vZGVsKCBodG1sU2l6ZTogaHRtbFNpemUgKXtcbiAgICB0aGlzLmh0bWxXaWR0aE1vZGVsID0gaHRtbFNpemUud2lkdGhcbiAgICB0aGlzLmh0bWxXaWR0aE1vZGVsQ2hhbmdlLmVtaXQoIHRoaXMuaHRtbFdpZHRoTW9kZWwgKVxuICB9XG59XG4iXX0=