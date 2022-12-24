import { Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.change = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (change) instead
        this.contentModelChange = new EventEmitter();
        this.enter = new EventEmitter(); // fires when enter key used
        this.hasFocusChange = new EventEmitter(); // fires when enter key used
        this.recentInputs = 0; // check in/out user input to prevent updating content right after user input
        this.elm.nativeElement.setAttribute('contenteditable', true);
    }
    ngOnDestroy() {
        this.elm.nativeElement.removeAttribute('contenteditable');
    }
    ngOnChanges() {
        const nElm = this.elm.nativeElement;
        // do not redraw if we are currently changing the input
        if (this.recentInputs) {
            --this.recentInputs;
            return;
        }
        const usePlaceholder = this.evalPlaceholder();
        if (!usePlaceholder) {
            nElm.textContent = this.contentModel;
        }
    }
    evalPlaceholder(placeholder) {
        const nElm = this.elm.nativeElement;
        const usePlaceholder = this.contentModel == null || this.contentModel === '';
        if (usePlaceholder) {
            nElm.textContent = placeholder == null ? this.placeholder : placeholder;
            return true;
        }
        return false;
    }
    shouldCancelEvent(event) {
        const key = event.which || event.keyCode;
        return this.enterEnds && key === 13;
    }
    onKeyDown(event) {
        this.checkPlaceholder();
        const cancel = this.shouldCancelEvent(event);
        // enter key treatment
        if (cancel) {
            this.onBlur();
            cancelEvent(event);
            this.enter.emit(this.contentModel);
            return;
        }
        if (this.maxLength) {
            const newValue = this.elm.nativeElement.textContent;
            const maxLength = Number(this.maxLength);
            const maxed = this.maxLength && newValue.length > maxLength;
            const key = event.which || event.keyCode;
            if (maxed) {
                const isDelete = [8, 46].indexOf(key) >= 0;
                if (!isDelete) {
                    cancelEvent(event);
                    return;
                }
            }
        }
    }
    onInput() {
        const newValue = this.elm.nativeElement.textContent;
        const maxLength = Number(this.maxLength);
        if (this.maxLength && newValue.length > maxLength) {
            return;
        }
        ++this.recentInputs;
        this.updateValue();
        // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
        this.change.emit(this.contentModel);
    }
    updateValue() {
        this.contentModel = this.elm.nativeElement.textContent;
        this.contentModelChange.emit(this.contentModel);
        // only update this onblur and focus
        // this.lastValue = this.contentModel
    }
    onFocus() {
        this.hasFocusChange.emit(this.hasFocus = true);
        this.lastValue = this.contentModel;
        this.evalPlaceholder('');
        /* 10-12: moved into keydown check
        this.checkPlaceholder();
        */
    }
    checkPlaceholder() {
        if (this.placeholder && this.elm.nativeElement.textContent === this.placeholder) {
            this.elm.nativeElement.textContent = '';
        }
    }
    onBlur() {
        if (this.lastValue !== this.elm.nativeElement.textContent) {
            this.lastValue = this.elm.nativeElement.textContent; // now update it
            this.updateValue(); // we have to emit here for change otherwise keyboard blur caused during key changes
            this.changeDone.emit(this.contentModel);
        }
        this.evalPlaceholder();
        this.hasFocusChange.emit(this.hasFocus = false);
    }
}
ContentModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ContentModel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ContentModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ContentModel, selector: "[contentModel]", inputs: { contentModel: "contentModel", placeholder: "placeholder", maxLength: "maxLength", enterEnds: "enterEnds", hasFocus: "hasFocus" }, outputs: { changeDone: "changeDone", change: "change", contentModelChange: "contentModelChange", enter: "enter", hasFocusChange: "hasFocusChange" }, host: { listeners: { "keydown": "onKeyDown($event)", "input": "onInput()", "focus": "onFocus()", "blur": "onBlur()" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ContentModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[contentModel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { changeDone: [{
                type: Output
            }], contentModel: [{
                type: Input
            }], change: [{
                type: Output
            }], contentModelChange: [{
                type: Output
            }], placeholder: [{
                type: Input
            }], maxLength: [{
                type: Input
            }], enterEnds: [{
                type: Input
            }], enter: [{
                type: Output
            }], hasFocus: [{
                type: Input
            }], hasFocusChange: [{
                type: Output
            }], onKeyDown: [{
                type: HostListener,
                args: ['keydown', ['$event']]
            }], onInput: [{
                type: HostListener,
                args: ['input']
            }], onFocus: [{
                type: HostListener,
                args: ['focus']
            }], onBlur: [{
                type: HostListener,
                args: ['blur']
            }] } });
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNPLE1BQU0sRUFBRSxZQUFZLEVBQ2hDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUMvQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFvQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBbkJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsV0FBTSxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVELG1FQUFtRTtRQUN6RCx1QkFBa0IsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU05RCxVQUFLLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7UUFHOUUsbUJBQWMsR0FBMEIsSUFBSSxZQUFZLEVBQUUsQ0FBQyxDQUFDLDRCQUE0QjtRQUVsRyxpQkFBWSxHQUFHLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtRQUk3RixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDO1FBRXBDLHVEQUF1RDtRQUN2RCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ3BCLE9BQU87U0FDUjtRQUVELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN0QztJQUNILENBQUM7SUFFRCxlQUFlLENBQUMsV0FBb0I7UUFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFcEMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksS0FBSyxFQUFFLENBQUM7UUFFN0UsSUFBSSxjQUFjLEVBQUU7WUFDbEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7WUFDeEUsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQixDQUFDLEtBQVk7UUFDNUIsTUFBTSxHQUFHLEdBQUksS0FBYSxDQUFDLEtBQUssSUFBSyxLQUFhLENBQUMsT0FBTyxDQUFDO1FBQzNELE9BQU8sSUFBSSxDQUFDLFNBQVMsSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFBO0lBQ3JDLENBQUM7SUFFb0MsU0FBUyxDQUFDLEtBQVk7UUFDekQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDeEIsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBRTVDLHNCQUFzQjtRQUN0QixJQUFJLE1BQU0sRUFBRTtZQUNWLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQTtZQUNiLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7WUFDbEMsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztZQUNwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQ3pDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7WUFDNUQsTUFBTSxHQUFHLEdBQUksS0FBYSxDQUFDLEtBQUssSUFBSyxLQUFhLENBQUMsT0FBTyxDQUFDO1lBRTNELElBQUksS0FBSyxFQUFFO2dCQUNULE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxHQUFHLENBQUUsSUFBSSxDQUFDLENBQUM7Z0JBRTdDLElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNsQixPQUFPO2lCQUNSO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFc0IsT0FBTztRQUM1QixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7UUFDcEQsTUFBTSxTQUFTLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUV6QyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxTQUFTLEVBQUU7WUFDakQsT0FBTztTQUNSO1FBRUQsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQTtRQUNsQiw0R0FBNEc7UUFDNUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUE7UUFDdEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFFaEQsb0NBQW9DO1FBQ3BDLHFDQUFxQztJQUN2QyxDQUFDO0lBRXNCLE9BQU87UUFDNUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6Qjs7VUFFRTtJQUNKLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFcUIsTUFBTTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBLENBQUMsZ0JBQWdCO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQSxDQUFDLG9GQUFvRjtZQUN2RyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUMsQ0FBQTtJQUNqRCxDQUFDOzt5R0F4SWEsWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBRjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtpQkFDM0I7aUdBQ1csVUFBVTtzQkFBbkIsTUFBTTtnQkFFRSxZQUFZO3NCQUFwQixLQUFLO2dCQUNJLE1BQU07c0JBQWYsTUFBTTtnQkFFRyxrQkFBa0I7c0JBQTNCLE1BQU07Z0JBRUUsV0FBVztzQkFBbkIsS0FBSztnQkFDRyxTQUFTO3NCQUFqQixLQUFLO2dCQUVHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBQ0ksS0FBSztzQkFBZCxNQUFNO2dCQUVFLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0ksY0FBYztzQkFBdkIsTUFBTTtnQkE4QzhCLFNBQVM7c0JBQTdDLFlBQVk7dUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO2dCQTZCWixPQUFPO3NCQUE3QixZQUFZO3VCQUFDLE9BQU87Z0JBc0JFLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTztnQkFlQyxNQUFNO3NCQUEzQixZQUFZO3VCQUFDLE1BQU07O0FBWXRCLFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3RCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb250ZW50TW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIENvbnRlbnRNb2RlbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGNoYW5nZURvbmU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRNb2RlbD86IHN0cmluZztcbiAgQE91dHB1dCgpIGNoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEJlbG93LCBhdm9pZCB1c2luZyAoY29udGVudE1vZGVsQ2hhbmdlKSAuLi4gdXNlIChjaGFuZ2UpIGluc3RlYWRcbiAgQE91dHB1dCgpIGNvbnRlbnRNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aD86IG51bWJlcjtcblxuICBASW5wdXQoKSBlbnRlckVuZHM/OiBib29sZWFuXG4gIEBPdXRwdXQoKSBlbnRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuICBASW5wdXQoKSBoYXNGb2N1cz86IGJvb2xlYW5cbiAgQE91dHB1dCgpIGhhc0ZvY3VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuICByZWNlbnRJbnB1dHMgPSAwOyAvLyBjaGVjayBpbi9vdXQgdXNlciBpbnB1dCB0byBwcmV2ZW50IHVwZGF0aW5nIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdXNlciBpbnB1dFxuICBsYXN0VmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsbTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIGRvIG5vdCByZWRyYXcgaWYgd2UgYXJlIGN1cnJlbnRseSBjaGFuZ2luZyB0aGUgaW5wdXRcbiAgICBpZiAodGhpcy5yZWNlbnRJbnB1dHMpIHtcbiAgICAgIC0tdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlUGxhY2Vob2xkZXIgPSB0aGlzLmV2YWxQbGFjZWhvbGRlcigpO1xuICAgIGlmICghdXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB9XG4gIH1cblxuICBldmFsUGxhY2Vob2xkZXIocGxhY2Vob2xkZXI/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5jb250ZW50TW9kZWwgPT0gbnVsbCB8fCB0aGlzLmNvbnRlbnRNb2RlbCA9PT0gJyc7XG5cbiAgICBpZiAodXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSBwbGFjZWhvbGRlciA9PSBudWxsID8gdGhpcy5wbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcbiAgICByZXR1cm4gdGhpcy5lbnRlckVuZHMgJiYga2V5ID09PSAxM1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICBjb25zdCBjYW5jZWwgPSB0aGlzLnNob3VsZENhbmNlbEV2ZW50KGV2ZW50KVxuXG4gICAgLy8gZW50ZXIga2V5IHRyZWF0bWVudFxuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMub25CbHVyKClcbiAgICAgIGNhbmNlbEV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy5lbnRlci5lbWl0KHRoaXMuY29udGVudE1vZGVsKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heExlbmd0aCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbWF4TGVuZ3RoID0gTnVtYmVyKHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgIGNvbnN0IG1heGVkID0gdGhpcy5tYXhMZW5ndGggJiYgbmV3VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoO1xuICAgICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcblxuICAgICAgaWYgKG1heGVkKSB7XG4gICAgICAgIGNvbnN0IGlzRGVsZXRlID0gWzgsIDQ2XS5pbmRleE9mKCBrZXkgKSA+PSAwO1xuXG4gICAgICAgIGlmICghaXNEZWxldGUpIHtcbiAgICAgICAgICBjYW5jZWxFdmVudChldmVudClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9uSW5wdXQoKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGggJiYgbmV3VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKyt0aGlzLnJlY2VudElucHV0cztcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKClcbiAgICAvLyBCZWxvdywgY2F1c2VkIGZvY3VzIGxvc3MgYmx1ciBiZWNhdXNlIHRoZSBtb2RlbCB1cGRhdGVzIGFuZCBjYXVzZXMgcmVkcmF3IHNvIG5vdyB3ZSB1c2UgdGhpcy5yZWNlbnRJbnB1dHNcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuY29udGVudE1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuY29udGVudE1vZGVsID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudFxuICAgIHRoaXMuY29udGVudE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuXG4gICAgLy8gb25seSB1cGRhdGUgdGhpcyBvbmJsdXIgYW5kIGZvY3VzXG4gICAgLy8gdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuaGFzRm9jdXNDaGFuZ2UuZW1pdCh0aGlzLmhhc0ZvY3VzID0gdHJ1ZSlcbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMuY29udGVudE1vZGVsO1xuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCcnKTtcbiAgICAvKiAxMC0xMjogbW92ZWQgaW50byBrZXlkb3duIGNoZWNrXG4gICAgdGhpcy5jaGVja1BsYWNlaG9sZGVyKCk7XG4gICAgKi9cbiAgfVxuXG4gIGNoZWNrUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9PT0gdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMubGFzdFZhbHVlICE9PSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgLy8gbm93IHVwZGF0ZSBpdFxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpIC8vIHdlIGhhdmUgdG8gZW1pdCBoZXJlIGZvciBjaGFuZ2Ugb3RoZXJ3aXNlIGtleWJvYXJkIGJsdXIgY2F1c2VkIGR1cmluZyBrZXkgY2hhbmdlc1xuICAgICAgdGhpcy5jaGFuZ2VEb25lLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCk7XG4gICAgdGhpcy5oYXNGb2N1c0NoYW5nZS5lbWl0KHRoaXMuaGFzRm9jdXMgPSBmYWxzZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogRXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufSJdfQ==