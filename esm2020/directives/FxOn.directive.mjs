import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
/**
  Applies css class when condition returns a truthy value. Allows timed removal
  Html inline elms cannot be animated. They will be upgraded to display inline-block
*/
export class FxOn {
    constructor(element) {
        this.element = element;
        this.fxThen = new EventEmitter();
        //an array to be used in #FxOn refs for fx selectable options (see examples)
        this.fxTypes = [
            "bounce", "flash", "pulse", "rubberBand", "shake", "swing", "tada", "wobble", "jello",
            "bounceIn", "bounceInDown", "bounceInLeft", "bounceInRight", "bounceInUp"
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        if (this.fxOn) {
            this.onTrue();
        }
        else {
            this.onFalse();
        }
    }
    ngOnChanges(changes) {
        if (changes.fxOn && changes.fxOn.currentValue != null && changes.fxOn.currentValue != changes.fxOn.previousValue) {
            this.update();
        }
        if (changes.fxClass && changes.fxClass.currentValue != changes.fxClass.previousValue) {
            if (this.fxOn) {
                removeClass(this.element.nativeElement, changes.fxClass.previousValue);
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        const elm = this.element.nativeElement;
        removeClass(elm, this.fxClass);
        if (this.inlineTreated) {
            elm.style.display = 'inline';
            this.inlineTreated = false;
        }
    }
    applyType() {
        const elm = this.element.nativeElement;
        if (elm.style && elm.style.display === 'inline' || getElementDefaultDisplay(elm) === 'inline') {
            this.inlineTreated = true;
            elm.style.display = 'inline-block';
        }
        addClass(elm, this.fxClass);
    }
    onTrue() {
        this.applyType();
        if (this.fxForMs) {
            this.timeout = setTimeout(() => {
                this.onFalse();
                this.fxThen.emit();
            }, this.fxForMs);
        }
    }
}
FxOn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FxOn, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
FxOn.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: FxOn, selector: "[fxOn]", inputs: { fxOn: "fxOn", fxClass: "fxClass", fxForMs: "fxForMs" }, outputs: { fxThen: "fxThen" }, exportAs: ["FxOn"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: FxOn, decorators: [{
            type: Directive,
            args: [{
                    selector: "[fxOn]",
                    exportAs: "FxOn"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { fxOn: [{
                type: Input
            }], fxClass: [{
                type: Input
            }], fxForMs: [{
                type: Input
            }], fxThen: [{
                type: Output
            }] } });
export function hasClass(el, className) {
    const names = className.split(" ");
    for (let x = names.length - 1; x >= 0; --x) {
        if (el.classList) {
            if (el.classList.contains(names[x])) {
                continue;
            }
        }
        else {
            if (el.className.match(new RegExp('(\\s|^)' + names[x] + '(\\s|$)'))) {
                continue;
            }
        }
        return false;
    }
    return true;
}
export function addClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!hasClass(el, className)) {
            el.className += " " + className;
        }
    });
}
export function removeClass(el, className) {
    className.split(' ').forEach(className => {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    });
}
function getElementDefaultDisplay(tag) {
    var cStyle, t = tag, gcs = "getComputedStyle" in window;
    cStyle = (gcs ? window.getComputedStyle(t, "") : t.currentStyle).display;
    return cStyle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRnhPbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9GeE9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFBOztBQUV0Qjs7O0VBR0U7QUFJQyxNQUFNLE9BQU8sSUFBSTtJQWNsQixZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBVjNCLFdBQU0sR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUl6RCw0RUFBNEU7UUFDNUUsWUFBTyxHQUFZO1lBQ2pCLFFBQVEsRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLFlBQVksRUFBQyxPQUFPLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsT0FBTztZQUM3RSxVQUFVLEVBQUMsY0FBYyxFQUFDLGNBQWMsRUFBQyxlQUFlLEVBQUMsWUFBWTtTQUN0RSxDQUFBO0lBRXNDLENBQUM7SUFFeEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDYixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7U0FDZDthQUFJO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFBO1NBQ2Y7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQVk7UUFDdEIsSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFFLElBQUksSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUM1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LENBQUE7U0FDNUM7SUFDSCxDQUFDLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFRCxTQUFTLHdCQUF3QixDQUFDLEdBQVE7SUFDeEMsSUFBSSxNQUFNLEVBQ04sQ0FBQyxHQUFHLEdBQUcsRUFDUCxHQUFHLEdBQUcsa0JBQWtCLElBQUksTUFBTSxDQUFDO0lBRXZDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLE9BQU8sQ0FBQztJQUV6RSxPQUFPLE1BQU0sQ0FBQztBQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vKipcbiAgQXBwbGllcyBjc3MgY2xhc3Mgd2hlbiBjb25kaXRpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZS4gQWxsb3dzIHRpbWVkIHJlbW92YWxcbiAgSHRtbCBpbmxpbmUgZWxtcyBjYW5ub3QgYmUgYW5pbWF0ZWQuIFRoZXkgd2lsbCBiZSB1cGdyYWRlZCB0byBkaXNwbGF5IGlubGluZS1ibG9ja1xuKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjpcIltmeE9uXVwiXG4gICxleHBvcnRBczpcIkZ4T25cIlxufSkgZXhwb3J0IGNsYXNzIEZ4T24ge1xuICBASW5wdXQoKSBmeE9uITogYm9vbGVhblxuICBASW5wdXQoKSBmeENsYXNzITogc3RyaW5nXG4gIEBJbnB1dCgpIGZ4Rm9yTXMhOiBudW1iZXJcbiAgQE91dHB1dCgpIGZ4VGhlbjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgaW5saW5lVHJlYXRlZCE6IGJvb2xlYW5cbiAgdGltZW91dD86IG51bWJlclxuICAvL2FuIGFycmF5IHRvIGJlIHVzZWQgaW4gI0Z4T24gcmVmcyBmb3IgZnggc2VsZWN0YWJsZSBvcHRpb25zIChzZWUgZXhhbXBsZXMpXG4gIGZ4VHlwZXM6c3RyaW5nW10gPSBbXG4gICAgXCJib3VuY2VcIixcImZsYXNoXCIsXCJwdWxzZVwiLFwicnViYmVyQmFuZFwiLFwic2hha2VcIixcInN3aW5nXCIsXCJ0YWRhXCIsXCJ3b2JibGVcIixcImplbGxvXCIsXG4gICAgXCJib3VuY2VJblwiLFwiYm91bmNlSW5Eb3duXCIsXCJib3VuY2VJbkxlZnRcIixcImJvdW5jZUluUmlnaHRcIixcImJvdW5jZUluVXBcIlxuICBdXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy51cGRhdGUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIGlmKCB0aGlzLmZ4T24gKXtcbiAgICAgIHRoaXMub25UcnVlKClcbiAgICB9ZWxzZXtcbiAgICAgIHRoaXMub25GYWxzZSgpXG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcbiAgICBpZiAoY2hhbmdlcy5meE9uICYmIGNoYW5nZXMuZnhPbi5jdXJyZW50VmFsdWUhPW51bGwgJiYgY2hhbmdlcy5meE9uLmN1cnJlbnRWYWx1ZSE9Y2hhbmdlcy5meE9uLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIHRoaXMudXBkYXRlKClcbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLmZ4Q2xhc3MgJiYgY2hhbmdlcy5meENsYXNzLmN1cnJlbnRWYWx1ZSE9Y2hhbmdlcy5meENsYXNzLnByZXZpb3VzVmFsdWUpe1xuICAgICAgaWYoIHRoaXMuZnhPbiApe1xuICAgICAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgY2hhbmdlcy5meENsYXNzLnByZXZpb3VzVmFsdWUpXG4gICAgICAgIHRoaXMuYXBwbHlUeXBlKClcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnJlbW92ZVR5cGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRmFsc2UoKXtcbiAgICB0aGlzLnJlbW92ZVR5cGUoKVxuICAgIGlmKHRoaXMudGltZW91dCl7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgZGVsZXRlIHRoaXMudGltZW91dFxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVR5cGUoKXtcbiAgICBjb25zdCBlbG0gPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudFxuXG4gICAgcmVtb3ZlQ2xhc3MoZWxtLCB0aGlzLmZ4Q2xhc3MpXG5cbiAgICBpZiggdGhpcy5pbmxpbmVUcmVhdGVkICl7XG4gICAgICBlbG0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnXG4gICAgICB0aGlzLmlubGluZVRyZWF0ZWQgPSBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGFwcGx5VHlwZSgpe1xuICAgIGNvbnN0IGVsbSA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50XG5cbiAgICBpZiggZWxtLnN0eWxlICYmIGVsbS5zdHlsZS5kaXNwbGF5PT09J2lubGluZScgfHwgZ2V0RWxlbWVudERlZmF1bHREaXNwbGF5KGVsbSk9PT0naW5saW5lJyApe1xuICAgICAgdGhpcy5pbmxpbmVUcmVhdGVkID0gdHJ1ZVxuICAgICAgZWxtLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJ1xuICAgIH1cblxuICAgIGFkZENsYXNzKGVsbSwgdGhpcy5meENsYXNzKVxuICB9XG5cbiAgb25UcnVlKCl7XG4gICAgdGhpcy5hcHBseVR5cGUoKVxuXG4gICAgaWYoIHRoaXMuZnhGb3JNcyApe1xuICAgICAgdGhpcy50aW1lb3V0ID0gPGFueT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIHRoaXMub25GYWxzZSgpXG4gICAgICAgIHRoaXMuZnhUaGVuLmVtaXQoKVxuICAgICAgfSwgdGhpcy5meEZvck1zKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0NsYXNzKGVsOiBhbnksIGNsYXNzTmFtZTpzdHJpbmcpIHtcbiAgY29uc3QgbmFtZXMgPSBjbGFzc05hbWUuc3BsaXQoXCIgXCIpXG5cbiAgZm9yKGxldCB4PW5hbWVzLmxlbmd0aC0xOyB4ID49IDA7IC0teCl7XG4gICAgaWYoIGVsLmNsYXNzTGlzdCApe1xuICAgICAgaWYoIGVsLmNsYXNzTGlzdC5jb250YWlucyggbmFtZXNbeF0gKSApe1xuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgaWYoIGVsLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCcoXFxcXHN8XiknICsgbmFtZXNbeF0gKyAnKFxcXFxzfCQpJykpICl7XG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gdHJ1ZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQ2xhc3MoZWw6IGFueSwgY2xhc3NOYW1lOnN0cmluZykge1xuICBjbGFzc05hbWUuc3BsaXQoJyAnKS5mb3JFYWNoKGNsYXNzTmFtZT0+e1xuICAgIGlmIChlbC5jbGFzc0xpc3Qpe1xuICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXG4gICAgfWVsc2UgaWYoIWhhc0NsYXNzKGVsLCBjbGFzc05hbWUpKXtcbiAgICAgIGVsLmNsYXNzTmFtZSArPSBcIiBcIiArIGNsYXNzTmFtZVxuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKGVsOiBhbnksIGNsYXNzTmFtZTpzdHJpbmcpIHtcbiAgY2xhc3NOYW1lLnNwbGl0KCcgJykuZm9yRWFjaChjbGFzc05hbWU9PntcbiAgICBpZiAoZWwuY2xhc3NMaXN0KXtcbiAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKVxuICAgIH1lbHNlIGlmIChoYXNDbGFzcyhlbCwgY2xhc3NOYW1lKSkge1xuICAgICAgdmFyIHJlZyA9IG5ldyBSZWdFeHAoJyhcXFxcc3xeKScgKyBjbGFzc05hbWUgKyAnKFxcXFxzfCQpJylcbiAgICAgIGVsLmNsYXNzTmFtZT1lbC5jbGFzc05hbWUucmVwbGFjZShyZWcsICcgJylcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnREZWZhdWx0RGlzcGxheSh0YWc6IGFueSkge1xuICB2YXIgY1N0eWxlLFxuICAgICAgdCA9IHRhZyxcbiAgICAgIGdjcyA9IFwiZ2V0Q29tcHV0ZWRTdHlsZVwiIGluIHdpbmRvdztcblxuICBjU3R5bGUgPSAoZ2NzID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUodCwgXCJcIikgOiB0LmN1cnJlbnRTdHlsZSkuZGlzcGxheTtcblxuICByZXR1cm4gY1N0eWxlO1xufSJdfQ==