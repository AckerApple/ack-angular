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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrTW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWNrTW9kYWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZO0FBQ1osWUFBWTtBQUNaLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBR1YsU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLDZEQUE2RDtBQUM3RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sOEJBQThCLENBQUE7QUFDckQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLDJCQUEyQixDQUFBO0FBTy9DLE1BQU0sT0FBTyxRQUFRO0lBcUJ0QixZQUNTLE9BQWtCLEVBQ2xCLE1BQWE7UUFEYixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQU87UUFoQmIsZUFBVSxHQUFXLElBQUksQ0FBQTtRQUN6QixXQUFNLEdBQVUsRUFBRSxDQUFBO1FBUWpCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7UUFFcEUsMEJBQTBCO1FBQ2hCLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUtwRCxDQUFDO0lBRUgsUUFBUTtRQUNOLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN2QixDQUFDO0lBRUQsY0FBYztRQUNaLElBQUcsSUFBSSxDQUFDLE1BQU07WUFBQyxPQUFNO1FBRXJCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtZQUNqQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtTQUNoQzthQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO1lBQ3hDLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFBO1lBQ3BDLE9BQU8sQ0FBQyxJQUFJLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUM5SztJQUNILENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUE7SUFDbkMsQ0FBQzs7O1lBaERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsV0FBVztnQkFDcEIsUUFBUSxFQUFDLE1BQU07Z0JBQ2Ysc0JBQXNCO2dCQUN0Qix3QkFBd0I7YUFDekI7OztZQWZDLFVBQVU7WUFPSCxNQUFNOzs7bUJBU1osWUFBWSxTQUFDLE1BQU07cUJBQ25CLFNBQVMsU0FBQyxhQUFhO3FCQUd2QixLQUFLOzBCQUNMLEtBQUs7eUJBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUVMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLO3dCQUdMLEtBQUs7OEJBQ0wsTUFBTTtvQkFHTixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuICAvL0RpcmVjdGl2ZSxcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWYsXG4gIFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbi8vaW1wb3J0IHsgQWNrTW9kYWxMYXlvdXQgfSBmcm9tIFwiLi9BY2tNb2RhbExheW91dC5jb21wb25lbnRcIlxuaW1wb3J0IHsgQWNrQXBwIH0gZnJvbSBcIi4uL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXJcIlxuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1tb2RhbC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6XCJhY2stbW9kYWxcIixcbiAgdGVtcGxhdGU6c3RyaW5nXG4gIC8vLGV4cG9ydEFzOlwiQWNrTW9kYWxcIlxuICAvLyxhbmltYXRpb25zOmFuaW1hdGlvbnNcbn0pIGV4cG9ydCBjbGFzcyBBY2tNb2RhbHtcbiAgQENvbnRlbnRDaGlsZCgnYm9keScpIGJvZHk6VGVtcGxhdGVSZWY8YW55PlxuICBAVmlld0NoaWxkKCdwbGFjZWhvbGRlcicpIGxheW91dDogRWxlbWVudFJlZlxuXG4gIC8vb25lIHdheSBiaW5kc1xuICBASW5wdXQoKSBpbmxpbmU6Ym9vbGVhblxuICBASW5wdXQoKSBpc01vZGVsTW9kZTpib29sZWFuXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDIwXG5cbiAgQElucHV0KCkgd3JhcFN0eWxlOmFueVxuICBASW5wdXQoKSB3cmFwQ2VsbFN0eWxlOmFueVxuICBASW5wdXQoKSBiYWNrZ3JvdW5kQ29sb3I6c3RyaW5nXG5cbiAgLy90d28gd2F5IGJpbmRzXG4gIEBJbnB1dCgpIHNob3dNb2RlbDpib29sZWFuXG4gIEBPdXRwdXQoKSBzaG93TW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIFxuICAvL29uZSB3YXkgZXhwcmVzc2lvbiBiaW5kc1xuICBAT3V0cHV0KCkgY2xvc2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBBY2tBcHA6QWNrQXBwXG4gICl7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5kZXRlcm1pbmVTdGFnZSgpXG4gIH1cblxuICBkZXRlcm1pbmVTdGFnZSgpOnZvaWR7XG4gICAgaWYodGhpcy5pbmxpbmUpcmV0dXJuXG5cbiAgICBpZiggdGhpcy5BY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgKXtcbiAgICAgIHRoaXMuQWNrQXBwLnJlZ2lzdGVyTW9kYWwodGhpcylcbiAgICB9ZWxzZSBpZiggIXRoaXMuQWNrQXBwLndhcm5lZEZpeEVsZW1lbnRzICl7XG4gICAgICB0aGlzLkFja0FwcC53YXJuZWRGaXhFbGVtZW50cyA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIHB1dCB0aGUgZWxlbWVudCB0YWcgPGFjay1maXhlZC1lbGVtZW50LXN0YWdlPiBpbnNpZGUgeW91ciBhcHAgc28gPGFjay1tb2RhbD4gcmVuZGVycyBwcm9wZXJseSBhbW9uZ3N0IG90aGVyIGVsZW1lbnRzLiBPUiBzZXQgPGFjay1tb2RhbCBpbmxpbmU9XCJ0cnVlXCI+JylcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuQWNrQXBwLnVucmVnaXN0ZXJNb2RhbCh0aGlzKVxuICB9XG59Il19