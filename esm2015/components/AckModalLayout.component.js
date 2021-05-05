import { 
//  Directive,
Component, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { animations } from "ack-angular-fx";
import { string } from "./templates/ack-modal-layout.pug";
export class AckModalLayout {
    //@Input() template:ElementRef<any>
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.close = new EventEmitter();
        this.allowClose = true;
        this.isModelMode = false;
        this.showModel = true;
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
            if (this.isModelMode || (this.isModelMode == null && this.showModelChange.observers.length)) {
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
                template: string,
                animations: animations
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU87QUFDUCxjQUFjO0FBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQU10RCxNQUFNLE9BQU8sY0FBYztJQVk1QixtQ0FBbUM7SUFFbkMsWUFDUyxPQUFrQixFQUNsQixNQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBZmIsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNsQixVQUFLLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDekQsZUFBVSxHQUFZLElBQUksQ0FBQTtRQU0xQixnQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFBO1FBQ3hCLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPbkUsNkRBQTZEO1FBQzdELFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBQyxFQUFFO1lBQ2pFLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBQyxPQUFPLEtBQUssQ0FBQTtZQUVoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQTtZQUNoRSxNQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWxJLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7YUFDakI7WUFFRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUN6RixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBRSxDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGtCQUFrQjtnQkFDM0IsUUFBUSxFQUFDLE1BQU07Z0JBQ2YsVUFBVSxFQUFDLFVBQVU7YUFDdEI7OztZQVhDLFVBQVU7WUFHSCxNQUFNOzs7cUJBU1osS0FBSztvQkFDTCxNQUFNO3lCQUNOLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuLy8gIERpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSBcImFjay1hbmd1bGFyLWZ4XCJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stbW9kYWwtbGF5b3V0LnB1Z1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYWNrLW1vZGFsLWxheW91dCcsXG4gIHRlbXBsYXRlOnN0cmluZyxcbiAgYW5pbWF0aW9uczphbmltYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWxMYXlvdXR7XG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMjBcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8QWNrTW9kYWxMYXlvdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6IGJvb2xlYW4gPSB0cnVlXG5cbiAgQElucHV0KCkgd3JhcFN0eWxlOiBhbnlcbiAgQElucHV0KCkgd3JhcENlbGxTdHlsZTogYW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogYW55XG5cbiAgQElucHV0KCkgaXNNb2RlbE1vZGU6IGJvb2xlYW4gPSBmYWxzZVxuICBASW5wdXQoKSBzaG93TW9kZWw6IGJvb2xlYW4gPSB0cnVlXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvL0BJbnB1dCgpIHRlbXBsYXRlOkVsZW1lbnRSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICAvL2FmdGVyIHBvc3NpYmxlIGRvdWJsZSBjbGljaywgY2xvc2Ugb24gb3V0c2lkZSBjb250ZW50IGNsaWNrXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5jbGlja0xpc3RlbkZvckNsb3NlKCksIDQwMClcbiAgfVxuXG4gIGNsaWNrTGlzdGVuRm9yQ2xvc2UoKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudDogYW55KT0+e1xuICAgICAgaWYoIXRoaXMuYWxsb3dDbG9zZSlyZXR1cm4gZmFsc2VcblxuICAgICAgY29uc3QgZVRhciA9IGV2ZW50LnNyY0VsZW1lbnQgfHwgZXZlbnQudG9FbGVtZW50IHx8IGV2ZW50LnRhcmdldFxuICAgICAgY29uc3QgaXNEaXJlY3RDaGlsZCA9IGVUYXIgPT0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2hpbGRyZW5bMF0gfHwgZVRhciA9PSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuXG4gICAgICBpZiggaXNEaXJlY3RDaGlsZCApe1xuICAgICAgICB0aGlzLmZpcmVDbG9zZSgpXG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25Jbml0KCl7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIGlmKCB0aGlzLmlzTW9kZWxNb2RlIHx8ICh0aGlzLmlzTW9kZWxNb2RlPT1udWxsICYmIHRoaXMuc2hvd01vZGVsQ2hhbmdlLm9ic2VydmVycy5sZW5ndGgpICl7XG4gICAgICAgIHRoaXMuaXNNb2RlbE1vZGUgPSB0cnVlXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGZpcmVDbG9zZSgpe1xuICAgIHRoaXMuc2hvd01vZGVsQ2hhbmdlLmVtaXQoIHRoaXMuc2hvd01vZGVsPWZhbHNlIClcbiAgICB0aGlzLmNsb3NlLmVtaXQodGhpcylcbiAgfVxufSJdfQ==