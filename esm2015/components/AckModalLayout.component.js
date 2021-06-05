import { Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { animations } from "ack-angular-fx";
// import { string } from "./templates/ack-modal-layout.pug"
export class AckModalLayout {
    //@Input() template:ElementRef<any>
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
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
AckModalLayout.decorators = [
    { type: Component, args: [{
                selector: 'ack-modal-layout',
                // template:string,
                template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\"\n      border=\"0\"\n      align=\"center\"\n      cellpadding=\"0\"\n      cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td valign=\"top\" [ngStyle]=\"wrapCellStyle\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div\n              style=\"\n                position: absolute;\n                bottom: -17px;\n                right: -16px;\n                border: 1px solid #ddd;\n                border-radius: 50%;\n                z-index: 20;\n              \"\n            >\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n",
                animations
            },] }
];
AckModalLayout.ctorParameters = () => [
    { type: ElementRef },
    { type: AckApp }
];
AckModalLayout.propDecorators = {
    zIndex: [{ type: Input }],
    close: [{ type: Output }],
    allowClose: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    isModelMode: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsNERBQTREO0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBWTVCLG1DQUFtQztJQUVuQyxZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFmYixXQUFNLEdBQVcsRUFBRSxDQUFBO1FBQ2xCLFVBQUssR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUN6RCxlQUFVLEdBQVksSUFBSSxDQUFBO1FBTTFCLGdCQUFXLEdBQVksS0FBSyxDQUFBO1FBQzVCLGNBQVMsR0FBWSxJQUFJLENBQUEsQ0FBQywyQ0FBMkM7UUFDcEUsb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU9uRSw2REFBNkQ7UUFDN0QsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFDLEVBQUU7WUFDakUsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFDLE9BQU8sS0FBSyxDQUFBO1lBRWhDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFBO1lBQ2hFLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFbEksSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtZQUVELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFFLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsa0JBQWtCO2dCQUMzQixtQkFBbUI7Z0JBQ25CLHMzQ0FBZ0Q7Z0JBQ2hELFVBQVU7YUFDWDs7O1lBWkMsVUFBVTtZQUdILE1BQU07OztxQkFVWixLQUFLO29CQUNMLE1BQU07eUJBQ04sS0FBSzt3QkFFTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFFTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gXCJhY2stYW5ndWxhci1meFwiXG4vLyBpbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYWNrLW1vZGFsLWxheW91dC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1tb2RhbC1sYXlvdXQnLFxuICAvLyB0ZW1wbGF0ZTpzdHJpbmcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2stbW9kYWwtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uc1xufSkgZXhwb3J0IGNsYXNzIEFja01vZGFsTGF5b3V0e1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDIwXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPEFja01vZGFsTGF5b3V0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBASW5wdXQoKSBhbGxvd0Nsb3NlOiBib29sZWFuID0gdHJ1ZVxuXG4gIEBJbnB1dCgpIHdyYXBTdHlsZTogYW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6IGFueVxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IGFueVxuXG4gIEBJbnB1dCgpIGlzTW9kZWxNb2RlOiBib29sZWFuID0gZmFsc2VcbiAgQElucHV0KCkgc2hvd01vZGVsOiBib29sZWFuID0gdHJ1ZSAvLyB3aGVuIHVzaW5nLCBkbyBub3QgYWxsb3cgdG8gYmUgdW5kZWZpbmVkXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvL0BJbnB1dCgpIHRlbXBsYXRlOkVsZW1lbnRSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICAvL2FmdGVyIHBvc3NpYmxlIGRvdWJsZSBjbGljaywgY2xvc2Ugb24gb3V0c2lkZSBjb250ZW50IGNsaWNrXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5jbGlja0xpc3RlbkZvckNsb3NlKCksIDQwMClcbiAgfVxuXG4gIGNsaWNrTGlzdGVuRm9yQ2xvc2UoKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KT0+e1xuICAgICAgaWYoIXRoaXMuYWxsb3dDbG9zZSlyZXR1cm4gZmFsc2VcblxuICAgICAgY29uc3QgZVRhciA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudG9FbGVtZW50IHx8IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgaXNEaXJlY3RDaGlsZCA9IGVUYXIgPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gfHwgZVRhciA9PSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXG4gICAgICBpZiggaXNEaXJlY3RDaGlsZCApe1xuICAgICAgICB0aGlzLmZpcmVDbG9zZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIGlmKCB0aGlzLnNob3dNb2RlbCE9PXVuZGVmaW5lZCAmJiB0aGlzLnNob3dNb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoICl7XG4gICAgICAgIHRoaXMuaXNNb2RlbE1vZGUgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZpcmVDbG9zZSgpe1xuICAgIHRoaXMuc2hvd01vZGVsQ2hhbmdlLmVtaXQoIHRoaXMuc2hvd01vZGVsPWZhbHNlIClcbiAgICB0aGlzLmNsb3NlLmVtaXQodGhpcylcbiAgfVxufSJdfQ==