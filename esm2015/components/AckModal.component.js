import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ElementRef, ViewChild, } from "@angular/core";
//import { AckModalLayout } from "./AckModalLayout.component"
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-modal.pug";
export class AckModal {
    constructor(element, AckApp) {
        this.element = element;
        this.AckApp = AckApp;
        this.allowClose = true;
        this.zIndex = 20;
        this.showModelChange = new EventEmitter();
        //one way expression binds
        this.close = new EventEmitter();
    }
    ngOnInit() {
        this.determineStage();
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
AckModal.decorators = [
    { type: Component, args: [{
                selector: "ack-modal",
                template: string
                //,exportAs:"AckModal"
                //,animations:animations
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBR1YsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBTy9DLE1BQU0sT0FBTyxRQUFRO0lBcUJ0QixZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFoQmIsZUFBVSxHQUFXLElBQUksQ0FBQTtRQUN6QixXQUFNLEdBQVUsRUFBRSxDQUFBO1FBUWpCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7UUFFcEUsMEJBQTBCO1FBQ2hCLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUtwRCxDQUFDO0lBRUgsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUcsSUFBSSxDQUFDLE1BQU07WUFBQyxPQUFNO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoQzthQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUM5SztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsV0FBVztnQkFDcEIsUUFBUSxFQUFDLE1BQU07Z0JBQ2Ysc0JBQXNCO2dCQUN0Qix3QkFBd0I7YUFDekI7OztZQWZDLFVBQVU7WUFPSCxNQUFNOzs7bUJBU1osWUFBWSxTQUFDLE1BQU07cUJBQ25CLFNBQVMsU0FBQyxhQUFhO3FCQUd2QixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUVMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUdMLEtBQUs7OEJBQ0wsTUFBTTtvQkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuICAvL0RpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG5cbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vL2ltcG9ydCB7IEFja01vZGFsTGF5b3V0IH0gZnJvbSBcIi4vQWNrTW9kYWxMYXlvdXQuY29tcG9uZW50XCJcbmltcG9ydCB7IEFja0FwcCB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrQXBwLnByb3ZpZGVyXCJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stbW9kYWwucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOlwiYWNrLW1vZGFsXCIsXG4gIHRlbXBsYXRlOnN0cmluZ1xuICAvLyxleHBvcnRBczpcIkFja01vZGFsXCJcbiAgLy8sYW5pbWF0aW9uczphbmltYXRpb25zXG59KSBleHBvcnQgY2xhc3MgQWNrTW9kYWx7XG4gIEBDb250ZW50Q2hpbGQoJ2JvZHknKSBib2R5ITpUZW1wbGF0ZVJlZjxhbnk+XG4gIEBWaWV3Q2hpbGQoJ3BsYWNlaG9sZGVyJykgbGF5b3V0ITogRWxlbWVudFJlZlxuXG4gIC8vb25lIHdheSBiaW5kc1xuICBASW5wdXQoKSBpbmxpbmU/OmJvb2xlYW5cbiAgQElucHV0KCkgaXNNb2RlbE1vZGU/OmJvb2xlYW5cbiAgQElucHV0KCkgYWxsb3dDbG9zZTpib29sZWFuID0gdHJ1ZVxuICBASW5wdXQoKSB6SW5kZXg6bnVtYmVyID0gMjBcblxuICBASW5wdXQoKSB3cmFwU3R5bGU6IGFueVxuICBASW5wdXQoKSB3cmFwQ2VsbFN0eWxlOiBhbnlcbiAgQElucHV0KCkgYmFja2dyb3VuZENvbG9yPzogc3RyaW5nXG5cbiAgLy90d28gd2F5IGJpbmRzXG4gIEBJbnB1dCgpIHNob3dNb2RlbD86IGJvb2xlYW5cbiAgQE91dHB1dCgpIHNob3dNb2RlbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICAvL29uZSB3YXkgZXhwcmVzc2lvbiBiaW5kc1xuICBAT3V0cHV0KCkgY2xvc2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBBY2tBcHA6QWNrQXBwXG4gICl7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5kZXRlcm1pbmVTdGFnZSgpXG4gIH1cblxuICBkZXRlcm1pbmVTdGFnZSgpOnZvaWR7XG4gICAgaWYodGhpcy5pbmxpbmUpcmV0dXJuXG5cbiAgICBpZiggdGhpcy5BY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgKXtcbiAgICAgIHRoaXMuQWNrQXBwLnJlZ2lzdGVyTW9kYWwodGhpcylcbiAgICB9ZWxzZSBpZiggIXRoaXMuQWNrQXBwLndhcm5lZEZpeEVsZW1lbnRzICl7XG4gICAgICB0aGlzLkFja0FwcC53YXJuZWRGaXhFbGVtZW50cyA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIHB1dCB0aGUgZWxlbWVudCB0YWcgPGFjay1maXhlZC1lbGVtZW50LXN0YWdlPiBpbnNpZGUgeW91ciBhcHAgc28gPGFjay1tb2RhbD4gcmVuZGVycyBwcm9wZXJseSBhbW9uZ3N0IG90aGVyIGVsZW1lbnRzLiBPUiBzZXQgPGFjay1tb2RhbCBpbmxpbmU9XCJ0cnVlXCI+JylcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuQWNrQXBwLnVucmVnaXN0ZXJNb2RhbCh0aGlzKVxuICB9XG59Il19