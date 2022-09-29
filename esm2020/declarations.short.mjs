import { Component, Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class EnterKey {
    constructor(element) {
        this.element = element;
        this.enterKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) >= 0;
            if (yesNo) {
                this.enterKey.emit(event);
            }
        });
    }
}
EnterKey.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EnterKey, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
EnterKey.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: EnterKey, selector: "[enterKey]", outputs: { enterKey: "enterKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EnterKey, decorators: [{
            type: Directive,
            args: [{ selector: '[enterKey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { enterKey: [{
                type: Output
            }] } });
export class EscapeKey {
    constructor(element) {
        this.element = element;
        this.escapeKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            const code = event.which || event.keyCode;
            if (code == 27) {
                this.escapeKey.emit(event);
            }
        });
    }
}
EscapeKey.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EscapeKey, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
EscapeKey.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: EscapeKey, selector: "[escapeKey]", outputs: { escapeKey: "escapeKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: EscapeKey, decorators: [{
            type: Directive,
            args: [{ selector: '[escapeKey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { escapeKey: [{
                type: Output
            }] } });
/** Disallow keyboard access to the backspace key */
export class PreventBackKey {
    constructor(element) {
        this.element = element;
        this.preventBackKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [8].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventBackKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
}
PreventBackKey.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PreventBackKey, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PreventBackKey.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: PreventBackKey, selector: "[preventBackKey]", outputs: { preventBackKey: "preventBackKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PreventBackKey, decorators: [{
            type: Directive,
            args: [{ selector: '[preventBackKey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { preventBackKey: [{
                type: Output
            }] } });
/** Disallow keyboard access to the enter keys */
export class PreventEnterKey {
    constructor(element) {
        this.element = element;
        this.preventEnterKey = new EventEmitter();
        element.nativeElement.addEventListener('keydown', (event) => {
            var yesNo = [13, 10].indexOf(event.which || event.keyCode) < 0;
            if (!yesNo) {
                this.preventEnterKey.emit(event);
                if (event.preventDefault) {
                    event.preventDefault();
                }
            }
            return yesNo;
        });
    }
}
PreventEnterKey.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PreventEnterKey, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
PreventEnterKey.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: PreventEnterKey, selector: "[preventEnterKey]", outputs: { preventEnterKey: "preventEnterKey" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: PreventEnterKey, decorators: [{
            type: Directive,
            args: [{ selector: '[preventEnterKey]' }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { preventEnterKey: [{
                type: Output
            }] } });
export class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
}
InputHint.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InputHint, deps: [], target: i0.ɵɵFactoryTarget.Component });
InputHint.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: InputHint, selector: "input-hint", inputs: { hintStyle: "hintStyle" }, ngImport: i0, template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>', isInline: true, dependencies: [{ kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InputHint, decorators: [{
            type: Component,
            args: [{
                    selector: 'input-hint',
                    template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
                }]
        }], propDecorators: { hintStyle: [{
                type: Input
            }] } });
/** adds form element onchange listener via addEventListener('change') that calls formChanged scope argument */
export class FormChanged {
    constructor(element) {
        this.element = element;
        this.formChanged = new EventEmitter();
        this.onChange = (event) => {
            this.formChanged.emit(event);
        };
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
    }
}
FormChanged.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormChanged, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormChanged.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: FormChanged, selector: "[formChanged]", outputs: { formChanged: "formChanged" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormChanged, decorators: [{
            type: Directive,
            args: [{
                    selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { formChanged: [{
                type: Output
            }] } });
/** when ever change or input form event triggered, bindings are called */
export class FormAlter {
    constructor(element) {
        this.element = element;
        this.formAlter = new EventEmitter();
        this.onChange = (event) => {
            this.formAlter.emit(event);
        };
        element.nativeElement.addEventListener('input', this.onChange);
        element.nativeElement.addEventListener('change', this.onChange);
    }
    ngOnDestroy() {
        this.element.nativeElement.removeEventListener('change', this.onChange);
        this.element.nativeElement.removeEventListener('input', this.onChange);
    }
}
FormAlter.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormAlter, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FormAlter.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: FormAlter, selector: "[formAlter]", outputs: { formAlter: "formAlter" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FormAlter, decorators: [{
            type: Directive,
            args: [{
                    selector: '[formAlter]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { formAlter: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb25zLnNob3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2xhcmF0aW9ucy5zaG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFFYixNQUFNLGVBQWUsQ0FBQTs7O0FBR3RCLE1BQU0sT0FBTyxRQUFRO0lBRW5CLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFEM0IsYUFBUSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRXpELE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFDLEVBQUU7WUFDOUQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFFLENBQUMsQ0FBQTtZQUMxRCxJQUFHLEtBQUssRUFBQztnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTthQUMxQjtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7cUdBVFUsUUFBUTt5RkFBUixRQUFROzJGQUFSLFFBQVE7a0JBRHBCLFNBQVM7bUJBQUMsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDO2lHQUV0QixRQUFRO3NCQUFqQixNQUFNOztBQVlULE1BQU0sT0FBTyxTQUFTO0lBR3BCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGM0IsY0FBUyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO1FBRzFELE9BQU8sQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBVSxFQUFDLEVBQUU7WUFDOUQsTUFBTSxJQUFJLEdBQUcsS0FB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QTtRQUN0RSxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3ZFLENBQUM7O3NHQWpCYSxTQUFTOzBGQUFULFNBQVM7MkZBQVQsU0FBUztrQkFGeEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsYUFBYTtpQkFDdkI7aUdBR1csU0FBUztzQkFBbEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VudGVyS2V5XSd9KVxuZXhwb3J0IGNsYXNzIEVudGVyS2V5e1xuICBAT3V0cHV0KCkgZW50ZXJLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KT0+e1xuICAgICAgdmFyIHllc05vID0gWzEzLDEwXS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKT49MFxuICAgICAgaWYoeWVzTm8pe1xuICAgICAgICB0aGlzLmVudGVyS2V5LmVtaXQoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VzY2FwZUtleV0nfSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVLZXl7XG4gIEBPdXRwdXQoKSBlc2NhcGVLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGVcbiAgICAgIGlmKGNvZGU9PTI3KXtcbiAgICAgICAgdGhpcy5lc2NhcGVLZXkuZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKiBEaXNhbGxvdyBrZXlib2FyZCBhY2Nlc3MgdG8gdGhlIGJhY2tzcGFjZSBrZXkgKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOidbcHJldmVudEJhY2tLZXldJ30pXG5leHBvcnQgY2xhc3MgUHJldmVudEJhY2tLZXkge1xuICBAT3V0cHV0KCkgcHJldmVudEJhY2tLZXkgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIHZhciB5ZXNObyA9IFs4XS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKTwwXG4gICAgICBpZigheWVzTm8pe1xuICAgICAgICB0aGlzLnByZXZlbnRCYWNrS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuLyoqIERpc2FsbG93IGtleWJvYXJkIGFjY2VzcyB0byB0aGUgZW50ZXIga2V5cyAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1twcmV2ZW50RW50ZXJLZXldJ30pXG5leHBvcnQgY2xhc3MgUHJldmVudEVudGVyS2V5e1xuICBAT3V0cHV0KCkgcHJldmVudEVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICB2YXIgeWVzTm8gPSBbMTMsMTBdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPDBcbiAgICAgIGlmKCF5ZXNObyl7XG4gICAgICAgIHRoaXMucHJldmVudEVudGVyS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidpbnB1dC1oaW50JyxcbiAgdGVtcGxhdGU6JzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtcIiBbbmdTdHlsZV09XCJoaW50U3R5bGVcIj48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MTAwJVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj48L2Rpdj4nXG59KSBleHBvcnQgY2xhc3MgSW5wdXRIaW50IHtcbiAgQElucHV0KCkgaGludFN0eWxlID0geydmb250LXNpemUnOic3NSUnLCdjb2xvcic6JyNCQkInfVxufVxuXG5cbi8qKiBhZGRzIGZvcm0gZWxlbWVudCBvbmNoYW5nZSBsaXN0ZW5lciB2aWEgYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJykgdGhhdCBjYWxscyBmb3JtQ2hhbmdlZCBzY29wZSBhcmd1bWVudCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUNoYW5nZWRdJy8vQWxzbyB0cnkgOiAoZm9ybUFsdGVyKSBkaXJlY3RpdmUgdGhhdCB3YXRjaGVzIHRoZSBmb3JtIFwiaW5wdXRcIiBldmVudFxufSkgZXhwb3J0IGNsYXNzIEZvcm1DaGFuZ2Vke1xuICAvL3N0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2U6IGFueVxuXG4gIEBPdXRwdXQoKSBmb3JtQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KT0+e1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlZC5lbWl0KGV2ZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgfVxufVxuXG4vKiogd2hlbiBldmVyIGNoYW5nZSBvciBpbnB1dCBmb3JtIGV2ZW50IHRyaWdnZXJlZCwgYmluZGluZ3MgYXJlIGNhbGxlZCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUFsdGVyXSdcbn0pIGV4cG9ydCBjbGFzcyBGb3JtQWx0ZXJ7XG4gIC8vLXN0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2U6IChFdmVudDogRXZlbnQpPT52b2lkXG4gIEBPdXRwdXQoKSBmb3JtQWx0ZXI6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQ6RXZlbnQpPT57XG4gICAgICB0aGlzLmZvcm1BbHRlci5lbWl0KGV2ZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsdGhpcy5vbkNoYW5nZSlcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyx0aGlzLm9uQ2hhbmdlKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLHRoaXMub25DaGFuZ2UpXG4gIH1cbn0iXX0=