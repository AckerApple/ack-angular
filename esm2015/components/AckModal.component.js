import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ElementRef, ViewChild, } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
// import { string } from "./templates/ack-modal.pug"
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
    /*ngOnInit(){
      return this.determineStage() // causes race error ExpressionChangedAfterItHasBeenCheckedError
    }*/
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
AckModal.decorators = [
    { type: Component, args: [{
                selector: "ack-modal",
                template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    [valign]          = \"valign\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n"
            },] }
];
AckModal.ctorParameters = () => [
    { type: ElementRef },
    { type: AckApp }
];
AckModal.propDecorators = {
    body: [{ type: ContentChild, args: ['body',] }],
    layout: [{ type: ViewChild, args: ['placeholder',] }],
    inline: [{ type: Input }],
    isModelMode: [{ type: Input }],
    zIndex: [{ type: Input }],
    valign: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    allowClose: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }],
    close: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBR1YsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUNyRCxxREFBcUQ7QUFRbEQsTUFBTSxPQUFPLFFBQVE7SUF1QnRCLFlBQ1MsT0FBa0IsRUFDbEIsTUFBYTtRQURiLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQWxCYixXQUFNLEdBQVUsRUFBRSxDQUFBO1FBRWxCLFdBQU0sR0FBZ0MsS0FBSyxDQUFBO1FBSzNDLGVBQVUsR0FBVyxJQUFJLENBQUE7UUFJeEIsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUVwRSwwQkFBMEI7UUFDaEIsVUFBSyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBTXBELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBRUgsY0FBYztRQUNaLElBQUcsSUFBSSxDQUFDLE1BQU07WUFBQyxPQUFNO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoQzthQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUM5SztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBckRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsV0FBVztnQkFDcEIsa3pCQUF5QzthQUkxQzs7O1lBZkMsVUFBVTtZQU1ILE1BQU07OzttQkFVWixZQUFZLFNBQUMsTUFBTTtxQkFDbkIsU0FBUyxTQUFDLGFBQWE7cUJBR3ZCLEtBQUs7MEJBQ0wsS0FBSztxQkFDTCxLQUFLO3FCQUVMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7eUJBRUwsS0FBSzt3QkFHTCxLQUFLOzhCQUNMLE1BQU07b0JBR04sTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbnRlbnRDaGlsZCxcbiAgLy9EaXJlY3RpdmUsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmLFxuXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuLy8gaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1tb2RhbC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XCJhY2stbW9kYWxcIixcbiAgdGVtcGxhdGVVcmw6ICcuL2Fjay1tb2RhbC5jb21wb25lbnQuaHRtbCcsXG4gIC8vIHRlbXBsYXRlOnN0cmluZ1xuICAvLyxleHBvcnRBczpcIkFja01vZGFsXCJcbiAgLy8sYW5pbWF0aW9uczphbmltYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWx7XG4gIEBDb250ZW50Q2hpbGQoJ2JvZHknKSBib2R5ITpUZW1wbGF0ZVJlZjxhbnk+XG4gIEBWaWV3Q2hpbGQoJ3BsYWNlaG9sZGVyJykgbGF5b3V0ITogRWxlbWVudFJlZlxuXG4gIC8vb25lIHdheSBiaW5kc1xuICBASW5wdXQoKSBpbmxpbmU/OmJvb2xlYW5cbiAgQElucHV0KCkgaXNNb2RlbE1vZGU/OmJvb2xlYW5cbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDIwXG4gIFxuICBASW5wdXQoKSB2YWxpZ246ICd0b3AnIHwgJ2NlbnRlcicgfCAnYm90dG9tJyA9ICd0b3AnXG4gIEBJbnB1dCgpIHdyYXBTdHlsZTogYW55XG4gIEBJbnB1dCgpIHdyYXBDZWxsU3R5bGU6IGFueVxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I/OiBzdHJpbmdcbiAgXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcblxuICAvL3R3byB3YXkgYmluZHNcbiAgQElucHV0KCkgc2hvd01vZGVsPzogYm9vbGVhblxuICBAT3V0cHV0KCkgc2hvd01vZGVsQ2hhbmdlOkV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIC8vb25lIHdheSBleHByZXNzaW9uIGJpbmRzXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYsXG4gICAgcHVibGljIEFja0FwcDpBY2tBcHBcbiAgKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMuZGV0ZXJtaW5lU3RhZ2UoKSlcbiAgfVxuXG4gIC8qbmdPbkluaXQoKXtcbiAgICByZXR1cm4gdGhpcy5kZXRlcm1pbmVTdGFnZSgpIC8vIGNhdXNlcyByYWNlIGVycm9yIEV4cHJlc3Npb25DaGFuZ2VkQWZ0ZXJJdEhhc0JlZW5DaGVja2VkRXJyb3JcbiAgfSovXG5cbiAgZGV0ZXJtaW5lU3RhZ2UoKTp2b2lke1xuICAgIGlmKHRoaXMuaW5saW5lKXJldHVyblxuXG4gICAgaWYoIHRoaXMuQWNrQXBwLmZpeGVkRWxlbWVudFN0YWdlICl7XG4gICAgICB0aGlzLkFja0FwcC5yZWdpc3Rlck1vZGFsKHRoaXMpXG4gICAgfWVsc2UgaWYoICF0aGlzLkFja0FwcC53YXJuZWRGaXhFbGVtZW50cyApe1xuICAgICAgdGhpcy5BY2tBcHAud2FybmVkRml4RWxlbWVudHMgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBwdXQgdGhlIGVsZW1lbnQgdGFnIDxhY2stZml4ZWQtZWxlbWVudC1zdGFnZT4gaW5zaWRlIHlvdXIgYXBwIHNvIDxhY2stbW9kYWw+IHJlbmRlcnMgcHJvcGVybHkgYW1vbmdzdCBvdGhlciBlbGVtZW50cy4gT1Igc2V0IDxhY2stbW9kYWwgaW5saW5lPVwidHJ1ZVwiPicpXG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLkFja0FwcC51bnJlZ2lzdGVyTW9kYWwodGhpcylcbiAgfVxufSJdfQ==