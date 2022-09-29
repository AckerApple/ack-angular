import { Component, Input, Output, EventEmitter } from "@angular/core";
// import { AckApp } from "../providers/AckApp.provider"
import { animations } from "ack-angular-fx";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./AckCloseIcon.component";
export class AckModalLayout {
    //@Input() template:ElementRef<any>
    constructor(element) {
        this.element = element;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.valign = 'top';
        this.isModelMode = false;
        this.showModel = true; // when using, do not allow to be undefined
        this.showModelChange = new EventEmitter();
        //after possible double click, close on outside content click
        setTimeout(() => this.clickListenForClose(), 400);
    }
    clickListenForClose() {
        this.element.nativeElement.addEventListener('click', (event) => {
            if (!this.allowClose)
                return false;
            const eTar = event.srcElement || event.toElement || event.target;
            const isDirectChild = eTar == this.element.nativeElement.children[0] || eTar == this.element.nativeElement.children[0].children[0];
            if (isDirectChild) {
                this.fireClose();
            }
            return true;
        });
    }
    ngOnInit() {
        return Promise.resolve().then(() => {
            if (this.showModel !== undefined && this.showModelChange.observers.length) {
                this.isModelMode = true;
            }
        });
    }
    fireClose() {
        this.showModelChange.emit(this.showModel = false);
        this.close.emit(this);
    }
}
AckModalLayout.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModalLayout, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AckModalLayout.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckModalLayout, selector: "ack-modal-layout", inputs: { zIndex: "zIndex", allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", valign: "valign", isModelMode: "isModelMode", showModel: "showModel" }, outputs: { close: "close", showModelChange: "showModelChange" }, ngImport: i0, template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\"\n      border=\"0\"\n      cellpadding=\"0\"\n      cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div\n              style=\"\n                position: absolute;\n                bottom: -17px;\n                right: -16px;\n                border: 1px solid #ddd;\n                border-radius: 50%;\n                z-index: 20;\n              \"\n            >\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.AckCloseIcon, selector: "ack-close-icon" }], animations: animations });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModalLayout, decorators: [{
            type: Component,
            args: [{ selector: 'ack-modal-layout', animations: animations, template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\"\n      border=\"0\"\n      cellpadding=\"0\"\n      cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div\n              style=\"\n                position: absolute;\n                bottom: -17px;\n                right: -16px;\n                border: 1px solid #ddd;\n                border-radius: 50%;\n                z-index: 20;\n              \"\n            >\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { zIndex: [{
                type: Input
            }], close: [{
                type: Output
            }], allowClose: [{
                type: Input
            }], wrapStyle: [{
                type: Input
            }], wrapCellStyle: [{
                type: Input
            }], backgroundColor: [{
                type: Input
            }], valign: [{
                type: Input
            }], isModelMode: [{
                type: Input
            }], showModel: [{
                type: Input
            }], showModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNrLW1vZGFsLWxheW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFBO0FBRXRCLHdEQUF3RDtBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7QUFNeEMsTUFBTSxPQUFPLGNBQWM7SUFhNUIsbUNBQW1DO0lBRW5DLFlBQ1MsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQWZsQixXQUFNLEdBQW9CLEVBQUUsQ0FBQTtRQUMzQixVQUFLLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDekQsZUFBVSxHQUFxQixJQUFJLENBQUE7UUFLbkMsV0FBTSxHQUFnQyxLQUFLLENBQUE7UUFFM0MsZ0JBQVcsR0FBcUIsS0FBSyxDQUFBO1FBQ3JDLGNBQVMsR0FBWSxJQUFJLENBQUEsQ0FBQywyQ0FBMkM7UUFDcEUsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU9uRSw2REFBNkQ7UUFDN0QsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFDLEVBQUU7WUFDakUsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFDLE9BQU8sS0FBSyxDQUFBO1lBRWhDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFBO1lBQ2hFLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFbEksSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtZQUVELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFFLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7MkdBakRhLGNBQWM7K0ZBQWQsY0FBYyxtVkNmOUIsODFDQW1EQSxpU0RyQ0UsVUFBVTsyRkFDSSxjQUFjO2tCQUo3QixTQUFTOytCQUNDLGtCQUFrQixjQUUzQixVQUFVO2lHQUVELE1BQU07c0JBQWQsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0UsVUFBVTtzQkFBbEIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csZUFBZTtzQkFBdkIsS0FBSztnQkFDRyxNQUFNO3NCQUFkLEtBQUs7Z0JBRUcsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUNJLGVBQWU7c0JBQXhCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbi8vIGltcG9ydCB7IEFja0FwcCB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrQXBwLnByb3ZpZGVyXCJcbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tIFwiYWNrLWFuZ3VsYXItZnhcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1tb2RhbC1sYXlvdXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWNrLW1vZGFsLWxheW91dC5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnNcbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2RhbExheW91dCB7XG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyIHwgc3RyaW5nID0gMjBcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8QWNrTW9kYWxMYXlvdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6IGJvb2xlYW4gfCBudW1iZXIgPSB0cnVlXG5cbiAgQElucHV0KCkgd3JhcFN0eWxlOiBhbnlcbiAgQElucHV0KCkgd3JhcENlbGxTdHlsZTogYW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogYW55XG4gIEBJbnB1dCgpIHZhbGlnbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ3RvcCdcbiAgXG4gIEBJbnB1dCgpIGlzTW9kZWxNb2RlOiBib29sZWFuIHwgbnVtYmVyID0gZmFsc2VcbiAgQElucHV0KCkgc2hvd01vZGVsOiBib29sZWFuID0gdHJ1ZSAvLyB3aGVuIHVzaW5nLCBkbyBub3QgYWxsb3cgdG8gYmUgdW5kZWZpbmVkXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvL0BJbnB1dCgpIHRlbXBsYXRlOkVsZW1lbnRSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgLy8gcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICAvL2FmdGVyIHBvc3NpYmxlIGRvdWJsZSBjbGljaywgY2xvc2Ugb24gb3V0c2lkZSBjb250ZW50IGNsaWNrXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5jbGlja0xpc3RlbkZvckNsb3NlKCksIDQwMClcbiAgfVxuXG4gIGNsaWNrTGlzdGVuRm9yQ2xvc2UoKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KT0+e1xuICAgICAgaWYoIXRoaXMuYWxsb3dDbG9zZSlyZXR1cm4gZmFsc2VcblxuICAgICAgY29uc3QgZVRhciA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudG9FbGVtZW50IHx8IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgaXNEaXJlY3RDaGlsZCA9IGVUYXIgPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gfHwgZVRhciA9PSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXG4gICAgICBpZiggaXNEaXJlY3RDaGlsZCApe1xuICAgICAgICB0aGlzLmZpcmVDbG9zZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIGlmKCB0aGlzLnNob3dNb2RlbCE9PXVuZGVmaW5lZCAmJiB0aGlzLnNob3dNb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoICl7XG4gICAgICAgIHRoaXMuaXNNb2RlbE1vZGUgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZpcmVDbG9zZSgpe1xuICAgIHRoaXMuc2hvd01vZGVsQ2hhbmdlLmVtaXQoIHRoaXMuc2hvd01vZGVsPWZhbHNlIClcbiAgICB0aGlzLmNsb3NlLmVtaXQodGhpcylcbiAgfVxufVxuIiwiPGRpdiAqbmdJZj1cInNob3dNb2RlbCB8fCAhaXNNb2RlbE1vZGVcIlxuICBbQGZhZGVJbk91dFVwXT1cIjFcIlxuICBzdHlsZT1cIlxuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIFwiXG4gIFtzdHlsZS56LWluZGV4XT1cInpJbmRleCB8fCAyMFwiXG4+XG4gIDxkaXZcbiAgICBzdHlsZT1cImhlaWdodDogMTAwJTsgd2lkdGg6IDEwMCU7IHBhZGRpbmc6IDIwcHg7IGRpc3BsYXk6IGlubGluZS10YWJsZVwiXG4gICAgW25nU3R5bGVdPVwieyAnYmFja2dyb3VuZC1jb2xvcic6IGJhY2tncm91bmRDb2xvciB8fCAncmdiYSgwLDAsMCwuNyknIH1cIlxuICA+XG4gICAgPHRhYmxlXG4gICAgICBzdHlsZT1cImhlaWdodDogMTAwJTsgbWFyZ2luOiBhdXRvXCJcbiAgICAgIGJvcmRlcj1cIjBcIlxuICAgICAgY2VsbHBhZGRpbmc9XCIwXCJcbiAgICAgIGNlbGxzcGFjaW5nPVwiMFwiXG4gICAgICBbbmdTdHlsZV09XCJ3cmFwU3R5bGVcIlxuICAgID5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIChjbGljayk9XCJhbGxvd0Nsb3NlID8gZmlyZUNsb3NlKCkgOiAwXCI+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCBbYXR0ci52YWxpZ25dPVwidmFsaWduXCIgW25nU3R5bGVdPVwid3JhcENlbGxTdHlsZVwiPlxuICAgICAgICAgIDxkaXYgKm5nSWY9XCJhbGxvd0Nsb3NlXCIgc3R5bGU9XCJwb3NpdGlvbjogcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgc3R5bGU9XCJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAtMTdweDtcbiAgICAgICAgICAgICAgICByaWdodDogLTE2cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICAgei1pbmRleDogMjA7XG4gICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxhY2stY2xvc2UtaWNvbiAoY2xpY2spPVwiZmlyZUNsb3NlKClcIj48L2Fjay1jbG9zZS1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxuICAgICAgICA8L3RkPlxuICAgICAgPC90cj5cbiAgICAgIDx0cj5cbiAgICAgICAgPHRkIChjbGljayk9XCJhbGxvd0Nsb3NlID8gZmlyZUNsb3NlKCkgOiAwXCI+PC90ZD5cbiAgICAgIDwvdHI+XG4gICAgPC90YWJsZT5cbiAgPC9kaXY+XG48L2Rpdj5cbiJdfQ==