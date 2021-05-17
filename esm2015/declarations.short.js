import { Component, Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
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
EnterKey.decorators = [
    { type: Directive, args: [{ selector: '[enterKey]' },] }
];
EnterKey.ctorParameters = () => [
    { type: ElementRef }
];
EnterKey.propDecorators = {
    enterKey: [{ type: Output }]
};
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
EscapeKey.decorators = [
    { type: Directive, args: [{ selector: '[escapeKey]' },] }
];
EscapeKey.ctorParameters = () => [
    { type: ElementRef }
];
EscapeKey.propDecorators = {
    escapeKey: [{ type: Output }]
};
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
PreventBackKey.decorators = [
    { type: Directive, args: [{ selector: '[preventBackKey]' },] }
];
PreventBackKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventBackKey.propDecorators = {
    preventBackKey: [{ type: Output }]
};
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
PreventEnterKey.decorators = [
    { type: Directive, args: [{ selector: '[preventEnterKey]' },] }
];
PreventEnterKey.ctorParameters = () => [
    { type: ElementRef }
];
PreventEnterKey.propDecorators = {
    preventEnterKey: [{ type: Output }]
};
export class InputHint {
    constructor() {
        this.hintStyle = { 'font-size': '75%', 'color': '#BBB' };
    }
}
InputHint.decorators = [
    { type: Component, args: [{
                selector: 'input-hint',
                template: '<div style="position:relative;" [ngStyle]="hintStyle"><div style="position:absolute;top:0;width:100%"><ng-content></ng-content></div></div>'
            },] }
];
InputHint.propDecorators = {
    hintStyle: [{ type: Input }]
};
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
FormChanged.decorators = [
    { type: Directive, args: [{
                selector: '[formChanged]' //Also try : (formAlter) directive that watches the form "input" event
            },] }
];
FormChanged.ctorParameters = () => [
    { type: ElementRef }
];
FormChanged.propDecorators = {
    formChanged: [{ type: Output }]
};
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
FormAlter.decorators = [
    { type: Directive, args: [{
                selector: '[formAlter]'
            },] }
];
FormAlter.ctorParameters = () => [
    { type: ElementRef }
];
FormAlter.propDecorators = {
    formAlter: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjbGFyYXRpb25zLnNob3J0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2RlY2xhcmF0aW9ucy5zaG9ydC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixVQUFVLEVBQ1gsTUFBTSxlQUFlLENBQUE7QUFHdEIsTUFBTSxPQUFPLFFBQVE7SUFFbkIsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUQzQixhQUFRLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUE7UUFFekQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUMsRUFBRTtZQUM5RCxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsRUFBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBRSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUUsQ0FBQyxDQUFBO1lBQzFELElBQUcsS0FBSyxFQUFDO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7WUFWRixTQUFTLFNBQUMsRUFBQyxRQUFRLEVBQUMsWUFBWSxFQUFDOzs7WUFIaEMsVUFBVTs7O3VCQUtULE1BQU07O0FBWVQsTUFBTSxPQUFPLFNBQVM7SUFHcEIsWUFBbUIsT0FBa0I7UUFBbEIsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUYzQixjQUFTLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUE7UUFHMUQsT0FBTyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxLQUFVLEVBQUMsRUFBRTtZQUM5RCxNQUFNLElBQUksR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFFLEtBQUssQ0FB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bmVudCxcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VudGVyS2V5XSd9KVxuZXhwb3J0IGNsYXNzIEVudGVyS2V5e1xuICBAT3V0cHV0KCkgZW50ZXJLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudDogYW55KT0+e1xuICAgICAgdmFyIHllc05vID0gWzEzLDEwXS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKT49MFxuICAgICAgaWYoeWVzTm8pe1xuICAgICAgICB0aGlzLmVudGVyS2V5LmVtaXQoZXZlbnQpXG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW2VzY2FwZUtleV0nfSlcbmV4cG9ydCBjbGFzcyBFc2NhcGVLZXl7XG4gIEBPdXRwdXQoKSBlc2NhcGVLZXk6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICBjb25zdCBjb2RlID0gZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGVcbiAgICAgIGlmKGNvZGU9PTI3KXtcbiAgICAgICAgdGhpcy5lc2NhcGVLZXkuZW1pdChldmVudClcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbi8qKiBEaXNhbGxvdyBrZXlib2FyZCBhY2Nlc3MgdG8gdGhlIGJhY2tzcGFjZSBrZXkgKi9cbkBEaXJlY3RpdmUoe3NlbGVjdG9yOidbcHJldmVudEJhY2tLZXldJ30pXG5leHBvcnQgY2xhc3MgUHJldmVudEJhY2tLZXkge1xuICBAT3V0cHV0KCkgcHJldmVudEJhY2tLZXkgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQ6IGFueSk9PntcbiAgICAgIHZhciB5ZXNObyA9IFs4XS5pbmRleE9mKGV2ZW50LndoaWNofHxldmVudC5rZXlDb2RlKTwwXG4gICAgICBpZigheWVzTm8pe1xuICAgICAgICB0aGlzLnByZXZlbnRCYWNrS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuLyoqIERpc2FsbG93IGtleWJvYXJkIGFjY2VzcyB0byB0aGUgZW50ZXIga2V5cyAqL1xuQERpcmVjdGl2ZSh7c2VsZWN0b3I6J1twcmV2ZW50RW50ZXJLZXldJ30pXG5leHBvcnQgY2xhc3MgUHJldmVudEVudGVyS2V5e1xuICBAT3V0cHV0KCkgcHJldmVudEVudGVyS2V5ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50OiBhbnkpPT57XG4gICAgICB2YXIgeWVzTm8gPSBbMTMsMTBdLmluZGV4T2YoZXZlbnQud2hpY2h8fGV2ZW50LmtleUNvZGUpPDBcbiAgICAgIGlmKCF5ZXNObyl7XG4gICAgICAgIHRoaXMucHJldmVudEVudGVyS2V5LmVtaXQoZXZlbnQpXG4gICAgICAgIGlmKGV2ZW50LnByZXZlbnREZWZhdWx0KXtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB5ZXNOb1xuICAgIH0pXG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidpbnB1dC1oaW50JyxcbiAgdGVtcGxhdGU6JzxkaXYgc3R5bGU9XCJwb3NpdGlvbjpyZWxhdGl2ZTtcIiBbbmdTdHlsZV09XCJoaW50U3R5bGVcIj48ZGl2IHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7dG9wOjA7d2lkdGg6MTAwJVwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj48L2Rpdj4nXG59KSBleHBvcnQgY2xhc3MgSW5wdXRIaW50IHtcbiAgQElucHV0KCkgaGludFN0eWxlID0geydmb250LXNpemUnOic3NSUnLCdjb2xvcic6JyNCQkInfVxufVxuXG5cbi8qKiBhZGRzIGZvcm0gZWxlbWVudCBvbmNoYW5nZSBsaXN0ZW5lciB2aWEgYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJykgdGhhdCBjYWxscyBmb3JtQ2hhbmdlZCBzY29wZSBhcmd1bWVudCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUNoYW5nZWRdJy8vQWxzbyB0cnkgOiAoZm9ybUFsdGVyKSBkaXJlY3RpdmUgdGhhdCB3YXRjaGVzIHRoZSBmb3JtIFwiaW5wdXRcIiBldmVudFxufSkgZXhwb3J0IGNsYXNzIEZvcm1DaGFuZ2Vke1xuICAvL3N0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2U6IGFueVxuXG4gIEBPdXRwdXQoKSBmb3JtQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQ6IEV2ZW50KT0+e1xuICAgICAgdGhpcy5mb3JtQ2hhbmdlZC5lbWl0KGV2ZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsdGhpcy5vbkNoYW5nZSlcbiAgfVxufVxuXG4vKiogd2hlbiBldmVyIGNoYW5nZSBvciBpbnB1dCBmb3JtIGV2ZW50IHRyaWdnZXJlZCwgYmluZGluZ3MgYXJlIGNhbGxlZCAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbZm9ybUFsdGVyXSdcbn0pIGV4cG9ydCBjbGFzcyBGb3JtQWx0ZXJ7XG4gIC8vLXN0YXRpYyBwYXJhbWV0ZXJzID0gW1tFbGVtZW50UmVmXV1cbiAgb25DaGFuZ2U6IChFdmVudDogRXZlbnQpPT52b2lkXG4gIEBPdXRwdXQoKSBmb3JtQWx0ZXI6RXZlbnRFbWl0dGVyPEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoZXZlbnQ6RXZlbnQpPT57XG4gICAgICB0aGlzLmZvcm1BbHRlci5lbWl0KGV2ZW50KVxuICAgIH1cblxuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsdGhpcy5vbkNoYW5nZSlcbiAgICBlbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyx0aGlzLm9uQ2hhbmdlKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLHRoaXMub25DaGFuZ2UpXG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLHRoaXMub25DaGFuZ2UpXG4gIH1cbn0iXX0=