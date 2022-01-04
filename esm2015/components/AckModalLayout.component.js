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
AckModalLayout.decorators = [
    { type: Component, args: [{
                selector: 'ack-modal-layout',
                // template:string,
                template: "<div *ngIf=\"showModel || !isModelMode\"\n  [@fadeInOutUp]=\"1\"\n  style=\"\n    position: fixed;\n    top: 0;\n    left: 0;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n  \"\n  [style.z-index]=\"zIndex || 20\"\n>\n  <div\n    style=\"height: 100%; width: 100%; padding: 20px; display: inline-table\"\n    [ngStyle]=\"{ 'background-color': backgroundColor || 'rgba(0,0,0,.7)' }\"\n  >\n    <table\n      style=\"height: 100%; margin: auto\"\n      border=\"0\"\n      align=\"center\"\n      cellpadding=\"0\"\n      cellspacing=\"0\"\n      [ngStyle]=\"wrapStyle\"\n    >\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n      <tr>\n        <td [attr.valign]=\"valign\" [ngStyle]=\"wrapCellStyle\">\n          <div *ngIf=\"allowClose\" style=\"position: relative\">\n            <div\n              style=\"\n                position: absolute;\n                bottom: -17px;\n                right: -16px;\n                border: 1px solid #ddd;\n                border-radius: 50%;\n                z-index: 20;\n              \"\n            >\n              <ack-close-icon (click)=\"fireClose()\"></ack-close-icon>\n            </div>\n          </div>\n          <ng-content></ng-content>\n        </td>\n      </tr>\n      <tr>\n        <td (click)=\"allowClose ? fireClose() : 0\"></td>\n      </tr>\n    </table>\n  </div>\n</div>\n",
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
    valign: [{ type: Input }],
    isModelMode: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsNERBQTREO0FBT3pELE1BQU0sT0FBTyxjQUFjO0lBYTVCLG1DQUFtQztJQUVuQyxZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFoQmIsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNsQixVQUFLLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDekQsZUFBVSxHQUFZLElBQUksQ0FBQTtRQUsxQixXQUFNLEdBQWdDLEtBQUssQ0FBQTtRQUUzQyxnQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFBLENBQUMsMkNBQTJDO1FBQ3BFLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPbkUsNkRBQTZEO1FBQzdELFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBQyxFQUFFO1lBQ2pFLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBQyxPQUFPLEtBQUssQ0FBQTtZQUVoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQTtZQUNoRSxNQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWxJLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7YUFDakI7WUFFRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBRSxDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGtCQUFrQjtnQkFDM0IsbUJBQW1CO2dCQUNuQixnNENBQWdEO2dCQUNoRCxVQUFVO2FBQ1g7OztZQVpDLFVBQVU7WUFHSCxNQUFNOzs7cUJBVVosS0FBSztvQkFDTCxNQUFNO3lCQUNOLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuaW1wb3J0IHsgYW5pbWF0aW9ucyB9IGZyb20gXCJhY2stYW5ndWxhci1meFwiXG4vLyBpbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYWNrLW1vZGFsLWxheW91dC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1tb2RhbC1sYXlvdXQnLFxuICAvLyB0ZW1wbGF0ZTpzdHJpbmcsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2stbW9kYWwtbGF5b3V0LmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9uc1xufSkgZXhwb3J0IGNsYXNzIEFja01vZGFsTGF5b3V0e1xuICBASW5wdXQoKSB6SW5kZXg6IG51bWJlciA9IDIwXG4gIEBPdXRwdXQoKSBjbG9zZTogRXZlbnRFbWl0dGVyPEFja01vZGFsTGF5b3V0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBASW5wdXQoKSBhbGxvd0Nsb3NlOiBib29sZWFuID0gdHJ1ZVxuXG4gIEBJbnB1dCgpIHdyYXBTdHlsZTogYW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6IGFueVxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6IGFueVxuICBASW5wdXQoKSB2YWxpZ246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICd0b3AnXG4gIFxuICBASW5wdXQoKSBpc01vZGVsTW9kZTogYm9vbGVhbiA9IGZhbHNlXG4gIEBJbnB1dCgpIHNob3dNb2RlbDogYm9vbGVhbiA9IHRydWUgLy8gd2hlbiB1c2luZywgZG8gbm90IGFsbG93IHRvIGJlIHVuZGVmaW5lZFxuICBAT3V0cHV0KCkgc2hvd01vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgLy9ASW5wdXQoKSB0ZW1wbGF0ZTpFbGVtZW50UmVmPGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBBY2tBcHA6QWNrQXBwXG4gICl7XG4gICAgLy9hZnRlciBwb3NzaWJsZSBkb3VibGUgY2xpY2ssIGNsb3NlIG9uIG91dHNpZGUgY29udGVudCBjbGlja1xuICAgIHNldFRpbWVvdXQoKCk9PnRoaXMuY2xpY2tMaXN0ZW5Gb3JDbG9zZSgpLCA0MDApXG4gIH1cblxuICBjbGlja0xpc3RlbkZvckNsb3NlKCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIGlmKCF0aGlzLmFsbG93Q2xvc2UpcmV0dXJuIGZhbHNlXG5cbiAgICAgIGNvbnN0IGVUYXIgPSBldmVudC5zcmNFbGVtZW50IHx8IGV2ZW50LnRvRWxlbWVudCB8fCBldmVudC50YXJnZXRcbiAgICAgIGNvbnN0IGlzRGlyZWN0Q2hpbGQgPSBlVGFyID09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdIHx8IGVUYXIgPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF1cblxuICAgICAgaWYoIGlzRGlyZWN0Q2hpbGQgKXtcbiAgICAgICAgdGhpcy5maXJlQ2xvc2UoKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBuZ09uSW5pdCgpe1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICBpZiggdGhpcy5zaG93TW9kZWwhPT11bmRlZmluZWQgJiYgdGhpcy5zaG93TW9kZWxDaGFuZ2Uub2JzZXJ2ZXJzLmxlbmd0aCApe1xuICAgICAgICB0aGlzLmlzTW9kZWxNb2RlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmaXJlQ2xvc2UoKXtcbiAgICB0aGlzLnNob3dNb2RlbENoYW5nZS5lbWl0KCB0aGlzLnNob3dNb2RlbD1mYWxzZSApXG4gICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMpXG4gIH1cbn0iXX0=