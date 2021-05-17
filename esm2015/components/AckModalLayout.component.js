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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU87QUFDUCxjQUFjO0FBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQU10RCxNQUFNLE9BQU8sY0FBYztJQVk1QixtQ0FBbUM7SUFFbkMsWUFDUyxPQUFrQixFQUNsQixNQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBZmIsV0FBTSxHQUFXLEVBQUUsQ0FBQTtRQUNsQixVQUFLLEdBQWlDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDekQsZUFBVSxHQUFZLElBQUksQ0FBQTtRQU0xQixnQkFBVyxHQUFZLEtBQUssQ0FBQTtRQUM1QixjQUFTLEdBQVksSUFBSSxDQUFBLENBQUMsMkNBQTJDO1FBQ3BFLG9CQUFlLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPbkUsNkRBQTZEO1FBQzdELFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQVUsRUFBQyxFQUFFO1lBQ2pFLElBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVTtnQkFBQyxPQUFPLEtBQUssQ0FBQTtZQUVoQyxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQTtZQUNoRSxNQUFNLGFBQWEsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBRWxJLElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7YUFDakI7WUFFRCxPQUFPLElBQUksQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsS0FBRyxTQUFTLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFO2dCQUN2RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQTthQUN4QjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBRSxJQUFJLENBQUMsU0FBUyxHQUFDLEtBQUssQ0FBRSxDQUFBO1FBQ2pELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3ZCLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGtCQUFrQjtnQkFDM0IsUUFBUSxFQUFDLE1BQU07Z0JBQ2YsVUFBVSxFQUFDLFVBQVU7YUFDdEI7OztZQVhDLFVBQVU7WUFHSCxNQUFNOzs7cUJBU1osS0FBSztvQkFDTCxNQUFNO3lCQUNOLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBRUwsS0FBSzt3QkFDTCxLQUFLOzhCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuLy8gIERpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSBcImFjay1hbmd1bGFyLWZ4XCJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stbW9kYWwtbGF5b3V0LnB1Z1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYWNrLW1vZGFsLWxheW91dCcsXG4gIHRlbXBsYXRlOnN0cmluZyxcbiAgYW5pbWF0aW9uczphbmltYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWxMYXlvdXR7XG4gIEBJbnB1dCgpIHpJbmRleDogbnVtYmVyID0gMjBcbiAgQE91dHB1dCgpIGNsb3NlOiBFdmVudEVtaXR0ZXI8QWNrTW9kYWxMYXlvdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6IGJvb2xlYW4gPSB0cnVlXG5cbiAgQElucHV0KCkgd3JhcFN0eWxlOiBhbnlcbiAgQElucHV0KCkgd3JhcENlbGxTdHlsZTogYW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjogYW55XG5cbiAgQElucHV0KCkgaXNNb2RlbE1vZGU6IGJvb2xlYW4gPSBmYWxzZVxuICBASW5wdXQoKSBzaG93TW9kZWw6IGJvb2xlYW4gPSB0cnVlIC8vIHdoZW4gdXNpbmcsIGRvIG5vdCBhbGxvdyB0byBiZSB1bmRlZmluZWRcbiAgQE91dHB1dCgpIHNob3dNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIC8vQElucHV0KCkgdGVtcGxhdGU6RWxlbWVudFJlZjxhbnk+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICBwdWJsaWMgQWNrQXBwOkFja0FwcFxuICApe1xuICAgIC8vYWZ0ZXIgcG9zc2libGUgZG91YmxlIGNsaWNrLCBjbG9zZSBvbiBvdXRzaWRlIGNvbnRlbnQgY2xpY2tcbiAgICBzZXRUaW1lb3V0KCgpPT50aGlzLmNsaWNrTGlzdGVuRm9yQ2xvc2UoKSwgNDAwKVxuICB9XG5cbiAgY2xpY2tMaXN0ZW5Gb3JDbG9zZSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICBpZighdGhpcy5hbGxvd0Nsb3NlKXJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCBlVGFyID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50b0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCBpc0RpcmVjdENoaWxkID0gZVRhciA9PSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSB8fCBlVGFyID09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG5cbiAgICAgIGlmKCBpc0RpcmVjdENoaWxkICl7XG4gICAgICAgIHRoaXMuZmlyZUNsb3NlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgaWYoIHRoaXMuc2hvd01vZGVsIT09dW5kZWZpbmVkICYmIHRoaXMuc2hvd01vZGVsQ2hhbmdlLm9ic2VydmVycy5sZW5ndGggKXtcbiAgICAgICAgdGhpcy5pc01vZGVsTW9kZSA9IHRydWVcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgZmlyZUNsb3NlKCl7XG4gICAgdGhpcy5zaG93TW9kZWxDaGFuZ2UuZW1pdCggdGhpcy5zaG93TW9kZWw9ZmFsc2UgKVxuICAgIHRoaXMuY2xvc2UuZW1pdCh0aGlzKVxuICB9XG59Il19