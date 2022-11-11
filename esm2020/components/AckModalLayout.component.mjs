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
AckModalLayout.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckModalLayout, selector: "ack-modal-layout", inputs: { zIndex: "zIndex", allowClose: "allowClose", wrapStyle: "wrapStyle", wrapContentClass: "wrapContentClass", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", valign: "valign", isModelMode: "isModelMode", showModel: "showModel" }, outputs: { close: "close", showModelChange: "showModelChange" }, ngImport: i0, template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\" [ngClass]=\"wrapContentClass\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div style=\"position: absolute;bottom: -17px;right: -16px;z-index: 20;\">\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n", dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "component", type: i2.AckCloseIcon, selector: "ack-close-icon" }], animations: animations });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckModalLayout, decorators: [{
            type: Component,
            args: [{ selector: 'ack-modal-layout', animations: animations, template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\" border=\"0\" cellpadding=\"0\" cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\" [ngClass]=\"wrapContentClass\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div style=\"position: absolute;bottom: -17px;right: -16px;z-index: 20;\">\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n" }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { zIndex: [{
                type: Input
            }], close: [{
                type: Output
            }], allowClose: [{
                type: Input
            }], wrapStyle: [{
                type: Input
            }], wrapContentClass: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvYWNrLW1vZGFsLWxheW91dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFBO0FBRXRCLHdEQUF3RDtBQUN4RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7Ozs7QUFNeEMsTUFBTSxPQUFPLGNBQWM7SUFnQjVCLG1DQUFtQztJQUVuQyxZQUNTLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFsQmxCLFdBQU0sR0FBb0IsRUFBRSxDQUFBO1FBQzNCLFVBQUssR0FBaUMsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUN6RCxlQUFVLEdBQXFCLElBQUksQ0FBQTtRQVFuQyxXQUFNLEdBQWdDLEtBQUssQ0FBQTtRQUUzQyxnQkFBVyxHQUFxQixLQUFLLENBQUE7UUFDckMsY0FBUyxHQUFxQixJQUFJLENBQUEsQ0FBQywyQ0FBMkM7UUFDN0Usb0JBQWUsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQU9uRSw2REFBNkQ7UUFDN0QsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFFRCxtQkFBbUI7UUFDakIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLENBQUMsS0FBVSxFQUFDLEVBQUU7WUFDakUsSUFBRyxDQUFDLElBQUksQ0FBQyxVQUFVO2dCQUFDLE9BQU8sS0FBSyxDQUFBO1lBRWhDLE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxVQUFVLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFBO1lBQ2hFLE1BQU0sYUFBYSxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFFbEksSUFBSSxhQUFhLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtZQUVELE9BQU8sSUFBSSxDQUFBO1FBQ2IsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFHLFNBQVMsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFFLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7MkdBcERhLGNBQWM7K0ZBQWQsY0FBYyx5WENmOUIscXFDQXVDQSwrWER6QkUsVUFBVTsyRkFDSSxjQUFjO2tCQUo3QixTQUFTOytCQUNDLGtCQUFrQixjQUUzQixVQUFVO2lHQUVELE1BQU07c0JBQWQsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBQ0UsVUFBVTtzQkFBbEIsS0FBSztnQkFFRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLGdCQUFnQjtzQkFBeEIsS0FBSztnQkFDRyxhQUFhO3NCQUFyQixLQUFLO2dCQUVHLGVBQWU7c0JBQXZCLEtBQUs7Z0JBQ0csTUFBTTtzQkFBZCxLQUFLO2dCQUVHLFdBQVc7c0JBQW5CLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDSSxlQUFlO3NCQUF4QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vLyBpbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSBcImFjay1hbmd1bGFyLWZ4XCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidhY2stbW9kYWwtbGF5b3V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Fjay1tb2RhbC1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWxMYXlvdXQge1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciB8IHN0cmluZyA9IDIwXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPEFja01vZGFsTGF5b3V0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBASW5wdXQoKSBhbGxvd0Nsb3NlOiBib29sZWFuIHwgbnVtYmVyID0gdHJ1ZVxuXG4gIEBJbnB1dCgpIHdyYXBTdHlsZTogYW55XG4gIFxuICBASW5wdXQoKSB3cmFwQ29udGVudENsYXNzOiBhbnlcbiAgQElucHV0KCkgd3JhcENlbGxTdHlsZTogYW55XG4gIFxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IGFueVxuICBASW5wdXQoKSB2YWxpZ246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICd0b3AnXG4gIFxuICBASW5wdXQoKSBpc01vZGVsTW9kZTogYm9vbGVhbiB8IG51bWJlciA9IGZhbHNlXG4gIEBJbnB1dCgpIHNob3dNb2RlbDogYm9vbGVhbiB8IG51bWJlciA9IHRydWUgLy8gd2hlbiB1c2luZywgZG8gbm90IGFsbG93IHRvIGJlIHVuZGVmaW5lZFxuICBAT3V0cHV0KCkgc2hvd01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgLy9ASW5wdXQoKSB0ZW1wbGF0ZTpFbGVtZW50UmVmPGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgIC8vIHB1YmxpYyBBY2tBcHA6QWNrQXBwXG4gICl7XG4gICAgLy9hZnRlciBwb3NzaWJsZSBkb3VibGUgY2xpY2ssIGNsb3NlIG9uIG91dHNpZGUgY29udGVudCBjbGlja1xuICAgIHNldFRpbWVvdXQoKCk9PnRoaXMuY2xpY2tMaXN0ZW5Gb3JDbG9zZSgpLCA0MDApXG4gIH1cblxuICBjbGlja0xpc3RlbkZvckNsb3NlKCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIGlmKCF0aGlzLmFsbG93Q2xvc2UpcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNvbnN0IGVUYXIgPSBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRvRWxlbWVudCB8fCBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IGlzRGlyZWN0Q2hpbGQgPSBlVGFyID09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdIHx8IGVUYXIgPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblxuICAgICAgaWYoIGlzRGlyZWN0Q2hpbGQgKXtcbiAgICAgICAgdGhpcy5maXJlQ2xvc2UoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICBpZiggdGhpcy5zaG93TW9kZWwhPT11bmRlZmluZWQgJiYgdGhpcy5zaG93TW9kZWxDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCApe1xuICAgICAgICB0aGlzLmlzTW9kZWxNb2RlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmaXJlQ2xvc2UoKXtcbiAgICB0aGlzLnNob3dNb2RlbENoYW5nZS5lbWl0KCB0aGlzLnNob3dNb2RlbD1mYWxzZSApXG4gICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMpXG4gIH1cbn1cbiIsIjxkaXYgKm5nSWY9XCJzaG93TW9kZWwgfHwgIWlzTW9kZWxNb2RlXCJcbiAgW0BmYWRlSW5PdXRVcF09XCIxXCJcbiAgc3R5bGU9XCJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICBcIlxuICBbc3R5bGUuei1pbmRleF09XCJ6SW5kZXggfHwgMjBcIlxuPlxuICA8ZGl2XG4gICAgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IHdpZHRoOiAxMDAlOyBwYWRkaW5nOiAyMHB4OyBkaXNwbGF5OiBpbmxpbmUtdGFibGVcIlxuICAgIFtuZ1N0eWxlXT1cInsgJ2JhY2tncm91bmQtY29sb3InOiBiYWNrZ3JvdW5kQ29sb3IgfHwgJ3JnYmEoMCwwLDAsLjcpJyB9XCJcbiAgPlxuICAgIDx0YWJsZVxuICAgICAgc3R5bGU9XCJoZWlnaHQ6IDEwMCU7IG1hcmdpbjogYXV0b1wiIGJvcmRlcj1cIjBcIiBjZWxscGFkZGluZz1cIjBcIiBjZWxsc3BhY2luZz1cIjBcIlxuICAgICAgW25nU3R5bGVdPVwid3JhcFN0eWxlXCJcbiAgICA+XG4gICAgICA8dHI+XG4gICAgICAgIDx0ZCAoY2xpY2spPVwiYWxsb3dDbG9zZSA/IGZpcmVDbG9zZSgpIDogMFwiPjwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgW2F0dHIudmFsaWduXT1cInZhbGlnblwiIFtuZ1N0eWxlXT1cIndyYXBDZWxsU3R5bGVcIiBbbmdDbGFzc109XCJ3cmFwQ29udGVudENsYXNzXCI+XG4gICAgICAgICAgPGRpdiAqbmdJZj1cImFsbG93Q2xvc2VcIiBzdHlsZT1cInBvc2l0aW9uOiByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGRpdiBzdHlsZT1cInBvc2l0aW9uOiBhYnNvbHV0ZTtib3R0b206IC0xN3B4O3JpZ2h0OiAtMTZweDt6LWluZGV4OiAyMDtcIj5cbiAgICAgICAgICAgICAgPGFjay1jbG9zZS1pY29uIChjbGljayk9XCJmaXJlQ2xvc2UoKVwiPjwvYWNrLWNsb3NlLWljb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgICAgIDwvdGQ+XG4gICAgICA8L3RyPlxuICAgICAgPHRyPlxuICAgICAgICA8dGQgKGNsaWNrKT1cImFsbG93Q2xvc2UgPyBmaXJlQ2xvc2UoKSA6IDBcIj48L3RkPlxuICAgICAgPC90cj5cbiAgICA8L3RhYmxlPlxuICA8L2Rpdj5cbjwvZGl2PlxuIl19