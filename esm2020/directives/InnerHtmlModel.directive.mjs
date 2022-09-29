import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new EventEmitter();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
    }
    ngOnChanges() {
        Promise.resolve().then(() => this.setModel());
    }
    setModel() {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
}
InnerHtmlModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InnerHtmlModel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
InnerHtmlModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: InnerHtmlModel, selector: "[innerHtmlModel]", inputs: { innerHtmlModel: "innerHtmlModel" }, outputs: { innerHtmlModelChange: "innerHtmlModelChange" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InnerHtmlModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[innerHtmlModel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { innerHtmlModel: [{
                type: Input
            }], innerHtmlModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5uZXJIdG1sTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvSW5uZXJIdG1sTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUE7O0FBSW5CLE1BQU0sT0FBTyxjQUFjO0lBUTVCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGM0IseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUUsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUE7UUFFM0QsTUFBTSxNQUFNLEdBQUc7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFELDRFQUE0RTtRQUM1RSwwRUFBMEU7SUFDNUUsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUE7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzVCLENBQUM7OzJHQWxDYSxjQUFjOytGQUFkLGNBQWM7MkZBQWQsY0FBYztrQkFGN0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2lCQUM3QjtpR0FLVSxjQUFjO3NCQUF0QixLQUFLO2dCQUNJLG9CQUFvQjtzQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lubmVySHRtbE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBJbm5lckh0bWxNb2RlbHtcbiAgcHVibGljIG9uQ2hhbmdlOiBhbnlcbiAgcHVibGljIG9ic2VydmVyXG4gIHB1YmxpYyB0aW1lb3V0OiBhbnlcblxuICBASW5wdXQoKSBpbm5lckh0bWxNb2RlbDogYW55XG4gIEBPdXRwdXQoKSBpbm5lckh0bWxNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggKCk9PnRoaXMuc2V0TW9kZWwoKSApXG5cbiAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICBhdHRyaWJ1dGVzOiB0cnVlLFxuICAgICAgY2hpbGRMaXN0OiB0cnVlLFxuICAgICAgY2hhcmFjdGVyRGF0YTogdHJ1ZSxcbiAgICAgIHN1YnRyZWU6IHRydWVcbiAgICB9XG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xuXG4gICAgLy90aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCgpPT50aGlzLnNldE1vZGVsKCkpXG4gICAgLy90aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwoKT0+dGhpcy5zZXRNb2RlbCgpKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnNldE1vZGVsKCkpXG4gIH1cblxuICBzZXRNb2RlbCgpe1xuICAgIHRoaXMuaW5uZXJIdG1sTW9kZWwgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5pbm5lckhUTUxcbiAgICB0aGlzLmlubmVySHRtbE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5pbm5lckh0bWxNb2RlbClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgfVxufSJdfQ==