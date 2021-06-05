import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ElementRef, ViewChild, } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
// import { string } from "./templates/ack-modal.pug"
export class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
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
                template: "<ng-template #placeholder>\n  <ack-modal-layout\n    [zIndex]          = \"zIndex\"\n    (close)           = \"close.emit($event)\"\n    [isModelMode]     = \"isModelMode==null ? showModelChange.observers.length : isModelMode\"\n    [showModel]       = \"showModel\"\n    (showModelChange) = \"showModelChange.emit(showModel=$event)\"\n    [backgroundColor] = \"backgroundColor\"\n    [wrapStyle]       = \"wrapStyle\"\n    [wrapCellStyle]   = \"wrapCellStyle\"\n    [allowClose]      = \"allowClose\"\n  >\n    <ng-template [ngTemplateOutlet]=\"body\"></ng-template>\n    <ng-content *ngIf=\"!body\"></ng-content>\n  </ack-modal-layout>\n</ng-template>\n\n<ng-template\n  *ngIf=\"!AckApp.fixedElementStage || inline\"\n  [ngTemplateOutlet]=\"layout\"\n></ng-template>\n"
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
    allowClose: [{ type: Input }],
    zIndex: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    backgroundColor: [{ type: Input }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }],
    close: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBR1YsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUNyRCxxREFBcUQ7QUFRbEQsTUFBTSxPQUFPLFFBQVE7SUFxQnRCLFlBQ1MsT0FBa0IsRUFDbEIsTUFBYTtRQURiLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBTztRQWhCYixlQUFVLEdBQVcsSUFBSSxDQUFBO1FBQ3pCLFdBQU0sR0FBVSxFQUFFLENBQUE7UUFRakIsb0JBQWUsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUVwRSwwQkFBMEI7UUFDaEIsVUFBSyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO1FBTXBELE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVEOztPQUVHO0lBRUgsY0FBYztRQUNaLElBQUcsSUFBSSxDQUFDLE1BQU07WUFBQyxPQUFNO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoQzthQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUM5SztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBbkRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsV0FBVztnQkFDcEIsOHdCQUF5QzthQUkxQzs7O1lBZkMsVUFBVTtZQU1ILE1BQU07OzttQkFVWixZQUFZLFNBQUMsTUFBTTtxQkFDbkIsU0FBUyxTQUFDLGFBQWE7cUJBR3ZCLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7d0JBRUwsS0FBSzs0QkFDTCxLQUFLOzhCQUNMLEtBQUs7d0JBR0wsS0FBSzs4QkFDTCxNQUFNO29CQUdOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb250ZW50Q2hpbGQsXG4gIC8vRGlyZWN0aXZlLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZixcblxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7IEFja0FwcCB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrQXBwLnByb3ZpZGVyXCJcbi8vIGltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stbW9kYWwucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOlwiYWNrLW1vZGFsXCIsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2stbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICAvLyB0ZW1wbGF0ZTpzdHJpbmdcbiAgLy8sZXhwb3J0QXM6XCJBY2tNb2RhbFwiXG4gIC8vLGFuaW1hdGlvbnM6YW5pbWF0aW9uc1xufSkgZXhwb3J0IGNsYXNzIEFja01vZGFse1xuICBAQ29udGVudENoaWxkKCdib2R5JykgYm9keSE6VGVtcGxhdGVSZWY8YW55PlxuICBAVmlld0NoaWxkKCdwbGFjZWhvbGRlcicpIGxheW91dCE6IEVsZW1lbnRSZWZcblxuICAvL29uZSB3YXkgYmluZHNcbiAgQElucHV0KCkgaW5saW5lPzpib29sZWFuXG4gIEBJbnB1dCgpIGlzTW9kZWxNb2RlPzpib29sZWFuXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDIwXG5cbiAgQElucHV0KCkgd3JhcFN0eWxlOiBhbnlcbiAgQElucHV0KCkgd3JhcENlbGxTdHlsZTogYW55XG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcj86IHN0cmluZ1xuXG4gIC8vdHdvIHdheSBiaW5kc1xuICBASW5wdXQoKSBzaG93TW9kZWw/OiBib29sZWFuXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgLy9vbmUgd2F5IGV4cHJlc3Npb24gYmluZHNcbiAgQE91dHB1dCgpIGNsb3NlOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZixcbiAgICBwdWJsaWMgQWNrQXBwOkFja0FwcFxuICApe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5kZXRlcm1pbmVTdGFnZSgpKVxuICB9XG5cbiAgLypuZ09uSW5pdCgpe1xuICAgIHJldHVybiB0aGlzLmRldGVybWluZVN0YWdlKCkgLy8gY2F1c2VzIHJhY2UgZXJyb3IgRXhwcmVzc2lvbkNoYW5nZWRBZnRlckl0SGFzQmVlbkNoZWNrZWRFcnJvclxuICB9Ki9cblxuICBkZXRlcm1pbmVTdGFnZSgpOnZvaWR7XG4gICAgaWYodGhpcy5pbmxpbmUpcmV0dXJuXG5cbiAgICBpZiggdGhpcy5BY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgKXtcbiAgICAgIHRoaXMuQWNrQXBwLnJlZ2lzdGVyTW9kYWwodGhpcylcbiAgICB9ZWxzZSBpZiggIXRoaXMuQWNrQXBwLndhcm5lZEZpeEVsZW1lbnRzICl7XG4gICAgICB0aGlzLkFja0FwcC53YXJuZWRGaXhFbGVtZW50cyA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIHB1dCB0aGUgZWxlbWVudCB0YWcgPGFjay1maXhlZC1lbGVtZW50LXN0YWdlPiBpbnNpZGUgeW91ciBhcHAgc28gPGFjay1tb2RhbD4gcmVuZGVycyBwcm9wZXJseSBhbW9uZ3N0IG90aGVyIGVsZW1lbnRzLiBPUiBzZXQgPGFjay1tb2RhbCBpbmxpbmU9XCJ0cnVlXCI+JylcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuQWNrQXBwLnVucmVnaXN0ZXJNb2RhbCh0aGlzKVxuICB9XG59Il19