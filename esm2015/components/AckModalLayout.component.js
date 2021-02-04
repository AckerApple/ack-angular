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
        this.element.nativeElement.addEventListener('click', event => {
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
        Promise.resolve().then(() => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU87QUFDUCxjQUFjO0FBQ1osU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFBO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQTtBQU10RCxNQUFNLE9BQU8sY0FBYztJQVk1QixtQ0FBbUM7SUFFbkMsWUFDUyxPQUFrQixFQUNsQixNQUFhO1FBRGIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBZmIsV0FBTSxHQUFVLEVBQUUsQ0FBQTtRQUNqQixVQUFLLEdBQWdDLElBQUksWUFBWSxFQUFFLENBQUE7UUFDeEQsZUFBVSxHQUFXLElBQUksQ0FBQTtRQU16QixnQkFBVyxHQUFXLEtBQUssQ0FBQTtRQUMzQixjQUFTLEdBQVcsSUFBSSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7UUFPbEUsNkRBQTZEO1FBQzdELFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUEsRUFBRTtZQUMxRCxJQUFHLENBQUMsSUFBSSxDQUFDLFVBQVU7Z0JBQUMsT0FBTyxLQUFLLENBQUE7WUFFaEMsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFVBQVUsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUE7WUFDaEUsTUFBTSxhQUFhLEdBQUcsSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUVsSSxJQUFJLGFBQWEsRUFBRTtnQkFDakIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO2FBQ2pCO1lBRUQsT0FBTyxJQUFJLENBQUE7UUFDYixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxRQUFRO1FBQ04sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ3pGLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFBO2FBQ3hCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxTQUFTLEdBQUMsS0FBSyxDQUFFLENBQUE7UUFDakQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDdkIsQ0FBQzs7O1lBcERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsa0JBQWtCO2dCQUMzQixRQUFRLEVBQUMsTUFBTTtnQkFDZixVQUFVLEVBQUMsVUFBVTthQUN0Qjs7O1lBWEMsVUFBVTtZQUdILE1BQU07OztxQkFTWixLQUFLO29CQUNMLE1BQU07eUJBQ04sS0FBSzt3QkFFTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFFTCxLQUFLO3dCQUNMLEtBQUs7OEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4vLyAgRGlyZWN0aXZlLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7IEFja0FwcCB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrQXBwLnByb3ZpZGVyXCJcbmltcG9ydCB7IGFuaW1hdGlvbnMgfSBmcm9tIFwiYWNrLWFuZ3VsYXItZnhcIlxuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1tb2RhbC1sYXlvdXQucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidhY2stbW9kYWwtbGF5b3V0JyxcbiAgdGVtcGxhdGU6c3RyaW5nLFxuICBhbmltYXRpb25zOmFuaW1hdGlvbnNcbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2RhbExheW91dHtcbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDIwXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8QWNrTW9kYWxMYXlvdXQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcblxuICBASW5wdXQoKSB3cmFwU3R5bGU6YW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6YW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjphbnlcbiAgXG4gIEBJbnB1dCgpIGlzTW9kZWxNb2RlOmJvb2xlYW4gPSBmYWxzZSAgXG4gIEBJbnB1dCgpIHNob3dNb2RlbDpib29sZWFuID0gdHJ1ZVxuICBAT3V0cHV0KCkgc2hvd01vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAvL0BJbnB1dCgpIHRlbXBsYXRlOkVsZW1lbnRSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICAvL2FmdGVyIHBvc3NpYmxlIGRvdWJsZSBjbGljaywgY2xvc2Ugb24gb3V0c2lkZSBjb250ZW50IGNsaWNrXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5jbGlja0xpc3RlbkZvckNsb3NlKCksIDQwMClcbiAgfVxuXG4gIGNsaWNrTGlzdGVuRm9yQ2xvc2UoKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50PT57XG4gICAgICBpZighdGhpcy5hbGxvd0Nsb3NlKXJldHVybiBmYWxzZVxuXG4gICAgICBjb25zdCBlVGFyID0gZXZlbnQuc3JjRWxlbWVudCB8fCBldmVudC50b0VsZW1lbnQgfHwgZXZlbnQudGFyZ2V0XG4gICAgICBjb25zdCBpc0RpcmVjdENoaWxkID0gZVRhciA9PSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jaGlsZHJlblswXSB8fCBlVGFyID09IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICBcbiAgICAgIGlmKCBpc0RpcmVjdENoaWxkICl7XG4gICAgICAgIHRoaXMuZmlyZUNsb3NlKClcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuICB9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICBpZiggdGhpcy5pc01vZGVsTW9kZSB8fCAodGhpcy5pc01vZGVsTW9kZT09bnVsbCAmJiB0aGlzLnNob3dNb2RlbENoYW5nZS5vYnNlcnZlcnMubGVuZ3RoKSApe1xuICAgICAgICB0aGlzLmlzTW9kZWxNb2RlID0gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBmaXJlQ2xvc2UoKXtcbiAgICB0aGlzLnNob3dNb2RlbENoYW5nZS5lbWl0KCB0aGlzLnNob3dNb2RlbD1mYWxzZSApXG4gICAgdGhpcy5jbG9zZS5lbWl0KHRoaXMpXG4gIH1cbn0iXX0=