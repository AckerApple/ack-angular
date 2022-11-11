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
AckModal.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckModal, selector: "ack-modal", inputs: { inline: "inline", isModelMode: "isModelMode", zIndex: "zIndex", valign: "valign", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", wrapContentClass: "wrapContentClass", backgroundColor: "backgroundColor", allowClose: "allowClose", showModel: "showModel" }, outputs: { showModelChange: "showModelChange", close: "close" }, queries: [{ propertyName: "body", first: true, predicate: ["body"], descendants: true }], viewQueries: [{ propertyName: "layout", first: true, predicate: ["placeholder"], descendants: true }], ngImport: i0, template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapContentClass]= \"wrapContentClass\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n", dependencies: [{ kind: "directive", type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "component", type: i3.AckModalLayout, selector: "ack-modal-layout", inputs: ["zIndex", "allowClose", "wrapStyle", "wrapContentClass", "wrapCellStyle", "backgroundColor", "valign", "isModelMode", "showModel"], outputs: ["close", "showModelChange"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModal, decorators: [{
            type: Component,
            args: [{ selector: "ack-modal", template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapContentClass]= \"wrapContentClass\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n" }]
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
            }], wrapContentClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNrLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFJWixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUE7Ozs7O0FBT25CLE1BQU0sT0FBTyxRQUFRO0lBd0J0QixZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFuQmIsV0FBTSxHQUFVLEVBQUUsQ0FBQTtRQUVsQixXQUFNLEdBQWdDLEtBQUssQ0FBQTtRQU0zQyxlQUFVLEdBQVcsSUFBSSxDQUFBO1FBSXhCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7UUFFcEUsMEJBQTBCO1FBQ2hCLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU1wRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxDQUFBO0lBQ3JELENBQUM7SUFFRCxjQUFjO1FBQ1osSUFBRyxJQUFJLENBQUMsTUFBTTtZQUFDLE9BQU07UUFFckIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1NBQ2hDO2FBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUE7WUFDcEMsT0FBTyxDQUFDLElBQUksQ0FBQywrSkFBK0osQ0FBQyxDQUFBO1NBQzlLO0lBQ0gsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUNuQyxDQUFDOztxR0E1Q2EsUUFBUTt5RkFBUixRQUFRLHFrQkNsQnhCLHMxQkF1QkE7MkZETGdCLFFBQVE7a0JBSHZCLFNBQVM7K0JBQ0MsV0FBVztzSEFHRSxJQUFJO3NCQUF6QixZQUFZO3VCQUFDLE1BQU07Z0JBQ00sTUFBTTtzQkFBL0IsU0FBUzt1QkFBQyxhQUFhO2dCQUdmLE1BQU07c0JBQWQsS0FBSztnQkFDRyxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLE1BQU07c0JBQWQsS0FBSztnQkFFRyxNQUFNO3NCQUFkLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUNHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLO2dCQUVHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBR0csU0FBUztzQkFBakIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNO2dCQUdHLEtBQUs7c0JBQWQsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRlbnRDaGlsZCxcbiAgLy9EaXJlY3RpdmUsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XCJhY2stbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6ICcuL2Fjay1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWx7XG4gIEBDb250ZW50Q2hpbGQoJ2JvZHknKSBib2R5ITpUZW1wbGF0ZVJlZjxhbnk+XG4gIEBWaWV3Q2hpbGQoJ3BsYWNlaG9sZGVyJykgbGF5b3V0ITogVGVtcGxhdGVSZWY8YW55PlxuXG4gIC8vb25lIHdheSBiaW5kc1xuICBASW5wdXQoKSBpbmxpbmU/OmJvb2xlYW5cbiAgQElucHV0KCkgaXNNb2RlbE1vZGU/OiBib29sZWFuIHwgbnVtYmVyXG4gIEBJbnB1dCgpIHpJbmRleDpudW1iZXIgPSAyMFxuICBcbiAgQElucHV0KCkgdmFsaWduOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAndG9wJ1xuICBASW5wdXQoKSB3cmFwU3R5bGU6IGFueVxuICBASW5wdXQoKSB3cmFwQ2VsbFN0eWxlOiBhbnlcbiAgQElucHV0KCkgd3JhcENvbnRlbnRDbGFzczogYW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xuICBcbiAgQElucHV0KCkgYWxsb3dDbG9zZTpib29sZWFuID0gdHJ1ZVxuXG4gIC8vdHdvIHdheSBiaW5kc1xuICBASW5wdXQoKSBzaG93TW9kZWw/OiBib29sZWFuIHwgbnVtYmVyXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgLy9vbmUgd2F5IGV4cHJlc3Npb24gYmluZHNcbiAgQE91dHB1dCgpIGNsb3NlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICBwdWJsaWMgQWNrQXBwOkFja0FwcFxuICApe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5kZXRlcm1pbmVTdGFnZSgpKVxuICB9XG5cbiAgZGV0ZXJtaW5lU3RhZ2UoKTp2b2lke1xuICAgIGlmKHRoaXMuaW5saW5lKXJldHVyblxuXG4gICAgaWYoIHRoaXMuQWNrQXBwLmZpeGVkRWxlbWVudFN0YWdlICl7XG4gICAgICB0aGlzLkFja0FwcC5yZWdpc3Rlck1vZGFsKHRoaXMpXG4gICAgfWVsc2UgaWYoICF0aGlzLkFja0FwcC53YXJuZWRGaXhFbGVtZW50cyApe1xuICAgICAgdGhpcy5BY2tBcHAud2FybmVkRml4RWxlbWVudHMgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBwdXQgdGhlIGVsZW1lbnQgdGFnIDxhY2stZml4ZWQtZWxlbWVudC1zdGFnZT4gaW5zaWRlIHlvdXIgYXBwIHNvIDxhY2stbW9kYWw+IHJlbmRlcnMgcHJvcGVybHkgYW1vbmdzdCBvdGhlciBlbGVtZW50cy4gT1Igc2V0IDxhY2stbW9kYWwgaW5saW5lPVwidHJ1ZVwiPicpXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLkFja0FwcC51bnJlZ2lzdGVyTW9kYWwodGhpcylcbiAgfVxufVxuIiwiPG5nLXRlbXBsYXRlICNwbGFjZWhvbGRlcj5cbiAgPGFjay1tb2RhbC1sYXlvdXRcbiAgICBbekluZGV4XSAgICAgICAgICA9IFwiekluZGV4XCJcbiAgICBbdmFsaWduXSAgICAgICAgICA9IFwidmFsaWduXCJcbiAgICAoY2xvc2UpICAgICAgICAgICA9IFwiY2xvc2UuZW1pdCgkZXZlbnQpXCJcbiAgICBbaXNNb2RlbE1vZGVdICAgICA9IFwiaXNNb2RlbE1vZGU9PW51bGwgPyBzaG93TW9kZWxDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCA6IGlzTW9kZWxNb2RlXCJcbiAgICBbc2hvd01vZGVsXSAgICAgICA9IFwic2hvd01vZGVsXCJcbiAgICAoc2hvd01vZGVsQ2hhbmdlKSA9IFwic2hvd01vZGVsQ2hhbmdlLmVtaXQoc2hvd01vZGVsPSRldmVudClcIlxuICAgIFtiYWNrZ3JvdW5kQ29sb3JdID0gXCJiYWNrZ3JvdW5kQ29sb3JcIlxuICAgIFt3cmFwU3R5bGVdICAgICAgID0gXCJ3cmFwU3R5bGVcIlxuICAgIFt3cmFwQ29udGVudENsYXNzXT0gXCJ3cmFwQ29udGVudENsYXNzXCJcbiAgICBbd3JhcENlbGxTdHlsZV0gICA9IFwid3JhcENlbGxTdHlsZVwiXG4gICAgW2FsbG93Q2xvc2VdICAgICAgPSBcImFsbG93Q2xvc2VcIlxuICA+XG4gICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImJvZHlcIj48L25nLXRlbXBsYXRlPlxuICAgIDxuZy1jb250ZW50ICpuZ0lmPVwiIWJvZHlcIj48L25nLWNvbnRlbnQ+XG4gIDwvYWNrLW1vZGFsLWxheW91dD5cbjwvbmctdGVtcGxhdGU+XG5cbjxuZy10ZW1wbGF0ZVxuICAqbmdJZj1cIiFBY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgfHwgaW5saW5lXCJcbiAgW25nVGVtcGxhdGVPdXRsZXRdPVwibGF5b3V0XCJcbj48L25nLXRlbXBsYXRlPlxuIl19