import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ViewChild, } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
import * as i2 from "@angular/common";
import * as i3 from "./AckModalLayout.component";
export class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.valign = 'top';
        this.allowClose = true;
        this.showModelChange = new EventEmitter();
        //one way expression binds
        this.close = new EventEmitter();
        Promise.resolve().then(() => this.determineStage());
    }
    determineStage() {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
        }
    }
    ngOnDestroy() {
        this.AckApp.unregisterModal(this);
    }
}
AckModal.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModal, deps: [{ token: i0.ElementRef }, { token: i1.AckApp }], target: i0.ɵɵFactoryTarget.Component });
AckModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckModal, selector: "ack-modal", inputs: { inline: "inline", isModelMode: "isModelMode", zIndex: "zIndex", valign: "valign", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", allowClose: "allowClose", showModel: "showModel" }, outputs: { showModelChange: "showModelChange", close: "close" }, queries: [{ propertyName: "body", first: true, predicate: ["body"], descendants: true }], viewQueries: [{ propertyName: "layout", first: true, predicate: ["placeholder"], descendants: true }], ngImport: i0, template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.AckModalLayout, selector: "ack-modal-layout", inputs: ["zIndex", "allowClose", "wrapStyle", "wrapCellStyle", "backgroundColor", "valign", "isModelMode", "showModel"], outputs: ["close", "showModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModal, decorators: [{
            type: Component,
            args: [{ selector: "ack-modal", template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i1.AckApp }]; }, propDecorators: { body: [{
                type: ContentChild,
                args: ['body']
            }], layout: [{
                type: ViewChild,
                args: ['placeholder']
            }], inline: [{
                type: Input
            }], isModelMode: [{
                type: Input
            }], zIndex: [{
                type: Input
            }], valign: [{
                type: Input
            }], wrapStyle: [{
                type: Input
            }], wrapCellStyle: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], allowClose: [{
                type: Input
            }], showModel: [{
                type: Input
            }], showModelChange: [{
                type: Output
            }], close: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNrLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFJWixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUE7Ozs7O0FBT25CLE1BQU0sT0FBTyxRQUFRO0lBdUJ0QixZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFsQmIsV0FBTSxHQUFVLEVBQUUsQ0FBQTtRQUVsQixXQUFNLEdBQWdDLEtBQUssQ0FBQTtRQUszQyxlQUFVLEdBQVcsSUFBSSxDQUFBO1FBSXhCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7UUFFcEUsMEJBQTBCO1FBQ2hCLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU1wRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBRyxJQUFJLENBQUMsTUFBTTtZQUFDLE9BQU07UUFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2hDO2FBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUE7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQywrSkFBK0osQ0FBQyxDQUFBO1NBQzlLO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQyxDQUFDOztxR0EzQ2EsUUFBUTt5RkFBUixRQUFRLCtoQkNsQnhCLHd5QkFzQkE7MkZESmdCLFFBQVE7a0JBSHZCLFNBQVM7K0JBQ0MsV0FBVztzSEFHRSxJQUFJO3NCQUF6QixZQUFZO3VCQUFDLE1BQU07Z0JBQ00sTUFBTTtzQkFBL0IsU0FBUzt1QkFBQyxhQUFhO2dCQUdmLE1BQU07c0JBQWQsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBRUcsVUFBVTtzQkFBbEIsS0FBSztnQkFHRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU07Z0JBR0csS0FBSztzQkFBZCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuICAvL0RpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG5cbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcImFjay1tb2RhbFwiLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNrLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2RhbHtcbiAgQENvbnRlbnRDaGlsZCgnYm9keScpIGJvZHkhOlRlbXBsYXRlUmVmPGFueT5cbiAgQFZpZXdDaGlsZCgncGxhY2Vob2xkZXInKSBsYXlvdXQhOiBUZW1wbGF0ZVJlZjxhbnk+XG5cbiAgLy9vbmUgd2F5IGJpbmRzXG4gIEBJbnB1dCgpIGlubGluZT86Ym9vbGVhblxuICBASW5wdXQoKSBpc01vZGVsTW9kZT86IGJvb2xlYW4gfCBudW1iZXJcbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDIwXG4gIFxuICBASW5wdXQoKSB2YWxpZ246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICd0b3AnXG4gIEBJbnB1dCgpIHdyYXBTdHlsZTogYW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6IGFueVxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmdcbiAgXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcblxuICAvL3R3byB3YXkgYmluZHNcbiAgQElucHV0KCkgc2hvd01vZGVsPzogYm9vbGVhblxuICBAT3V0cHV0KCkgc2hvd01vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vb25lIHdheSBleHByZXNzaW9uIGJpbmRzXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuZGV0ZXJtaW5lU3RhZ2UoKSlcbiAgfVxuXG4gIGRldGVybWluZVN0YWdlKCk6dm9pZHtcbiAgICBpZih0aGlzLmlubGluZSlyZXR1cm5cblxuICAgIGlmKCB0aGlzLkFja0FwcC5maXhlZEVsZW1lbnRTdGFnZSApe1xuICAgICAgdGhpcy5BY2tBcHAucmVnaXN0ZXJNb2RhbCh0aGlzKVxuICAgIH1lbHNlIGlmKCAhdGhpcy5BY2tBcHAud2FybmVkRml4RWxlbWVudHMgKXtcbiAgICAgIHRoaXMuQWNrQXBwLndhcm5lZEZpeEVsZW1lbnRzID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKCdQbGVhc2UgcHV0IHRoZSBlbGVtZW50IHRhZyA8YWNrLWZpeGVkLWVsZW1lbnQtc3RhZ2U+IGluc2lkZSB5b3VyIGFwcCBzbyA8YWNrLW1vZGFsPiByZW5kZXJzIHByb3Blcmx5IGFtb25nc3Qgb3RoZXIgZWxlbWVudHMuIE9SIHNldCA8YWNrLW1vZGFsIGlubGluZT1cInRydWVcIj4nKVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5BY2tBcHAudW5yZWdpc3Rlck1vZGFsKHRoaXMpXG4gIH1cbn1cbiIsIjxuZy10ZW1wbGF0ZSAjcGxhY2Vob2xkZXI+XG4gIDxhY2stbW9kYWwtbGF5b3V0XG4gICAgW3pJbmRleF0gICAgICAgICAgPSBcInpJbmRleFwiXG4gICAgW3ZhbGlnbl0gICAgICAgICAgPSBcInZhbGlnblwiXG4gICAgKGNsb3NlKSAgICAgICAgICAgPSBcImNsb3NlLmVtaXQoJGV2ZW50KVwiXG4gICAgW2lzTW9kZWxNb2RlXSAgICAgPSBcImlzTW9kZWxNb2RlPT1udWxsID8gc2hvd01vZGVsQ2hhbmdlLm9ic2VydmVycy5sZW5ndGggOiBpc01vZGVsTW9kZVwiXG4gICAgW3Nob3dNb2RlbF0gICAgICAgPSBcInNob3dNb2RlbFwiXG4gICAgKHNob3dNb2RlbENoYW5nZSkgPSBcInNob3dNb2RlbENoYW5nZS5lbWl0KHNob3dNb2RlbD0kZXZlbnQpXCJcbiAgICBbYmFja2dyb3VuZENvbG9yXSA9IFwiYmFja2dyb3VuZENvbG9yXCJcbiAgICBbd3JhcFN0eWxlXSAgICAgICA9IFwid3JhcFN0eWxlXCJcbiAgICBbd3JhcENlbGxTdHlsZV0gICA9IFwid3JhcENlbGxTdHlsZVwiXG4gICAgW2FsbG93Q2xvc2VdICAgICAgPSBcImFsbG93Q2xvc2VcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlcIj48L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWJvZHlcIj48L25nLWNvbnRlbnQ+XG4gIDwvYWNrLW1vZGFsLWxheW91dD5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZVxuICAqbmdJZj1cIiFBY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgfHwgaW5saW5lXCJcbiAgW25nVGVtcGxhdGVPdXRsZXRdPVwibGF5b3V0XCJcbj48L25nLXRlbXBsYXRlPlxuIl19