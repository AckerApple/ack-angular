import { Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
import * as i0 from "@angular/core";
export class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.inputChange = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
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
        this.inputChange.emit(this.contentModel);
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
ContentModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ContentModel, selector: "[contentModel]", inputs: { contentModel: "contentModel", placeholder: "placeholder", maxLength: "maxLength", enterEnds: "enterEnds", hasFocus: "hasFocus" }, outputs: { changeDone: "changeDone", inputChange: "inputChange", contentModelChange: "contentModelChange", enter: "enter", hasFocusChange: "hasFocusChange" }, host: { listeners: { "keydown": "onKeyDown($event)", "input": "onInput()", "focus": "onFocus()", "blur": "onBlur()" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ContentModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[contentModel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { changeDone: [{
                type: Output
            }], contentModel: [{
                type: Input
            }], inputChange: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNPLE1BQU0sRUFBRSxZQUFZLEVBQ2hDLEtBQUssRUFBRSxZQUFZLEVBQUUsU0FBUyxFQUMvQixNQUFNLGVBQWUsQ0FBQzs7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFzQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBckJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUQsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNEJBQTRCO1FBRzlFLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7UUFJbEcsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7UUFJN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUVwQyx1REFBdUQ7UUFDdkQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFFRCxNQUFNLGNBQWMsR0FB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aUJBQzNCO2lHQUNXLFVBQVU7c0JBQW5CLE1BQU07Z0JBRUUsWUFBWTtzQkFBcEIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVHLGtCQUFrQjtzQkFBM0IsTUFBTTtnQkFFRSxXQUFXO3NCQUFuQixLQUFLO2dCQUNHLFNBQVM7c0JBQWpCLEtBQUs7Z0JBRUcsU0FBUztzQkFBakIsS0FBSztnQkFDSSxLQUFLO3NCQUFkLE1BQU07Z0JBRUUsUUFBUTtzQkFBaEIsS0FBSztnQkFDSSxjQUFjO3NCQUF2QixNQUFNO2dCQWdEOEIsU0FBUztzQkFBN0MsWUFBWTt1QkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBNkJaLE9BQU87c0JBQTdCLFlBQVk7dUJBQUMsT0FBTztnQkFzQkUsT0FBTztzQkFBN0IsWUFBWTt1QkFBQyxPQUFPO2dCQWVDLE1BQU07c0JBQTNCLFlBQVk7dUJBQUMsTUFBTTs7QUFZdEIsU0FBUyxXQUFXLENBQUMsS0FBWTtJQUMvQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUE7SUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFBO0FBQ3pCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsIEhvc3RMaXN0ZW5lciwgRGlyZWN0aXZlLCBPbkNoYW5nZXMsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2NvbnRlbnRNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgQ29udGVudE1vZGVsIGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBAT3V0cHV0KCkgY2hhbmdlRG9uZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgY29udGVudE1vZGVsPzogc3RyaW5nO1xuICBAT3V0cHV0KCkgaW5wdXRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyBCZWxvdywgYXZvaWQgdXNpbmcgKGNvbnRlbnRNb2RlbENoYW5nZSkgLi4uIHVzZSAoaW5wdXRDaGFuZ2UpIGluc3RlYWRcbiAgQE91dHB1dCgpIGNvbnRlbnRNb2RlbENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG1heExlbmd0aD86IG51bWJlcjtcblxuICBASW5wdXQoKSBlbnRlckVuZHM/OiBib29sZWFuXG4gIEBPdXRwdXQoKSBlbnRlcjogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuICBASW5wdXQoKSBoYXNGb2N1cz86IGJvb2xlYW5cbiAgQE91dHB1dCgpIGhhc0ZvY3VzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuXG5cbiAgcmVjZW50SW5wdXRzID0gMDsgLy8gY2hlY2sgaW4vb3V0IHVzZXIgaW5wdXQgdG8gcHJldmVudCB1cGRhdGluZyBjb250ZW50IHJpZ2h0IGFmdGVyIHVzZXIgaW5wdXRcbiAgbGFzdFZhbHVlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbG06IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBkbyBub3QgcmVkcmF3IGlmIHdlIGFyZSBjdXJyZW50bHkgY2hhbmdpbmcgdGhlIGlucHV0XG4gICAgaWYgKHRoaXMucmVjZW50SW5wdXRzKSB7XG4gICAgICAtLXRoaXMucmVjZW50SW5wdXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgICBpZiAoIXVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgfVxuICB9XG5cbiAgZXZhbFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCB1c2VQbGFjZWhvbGRlciA9IHRoaXMuY29udGVudE1vZGVsID09IG51bGwgfHwgdGhpcy5jb250ZW50TW9kZWwgPT09ICcnO1xuXG4gICAgaWYgKHVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/IHRoaXMucGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNob3VsZENhbmNlbEV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGtleSA9IChldmVudCBhcyBhbnkpLndoaWNoIHx8IChldmVudCBhcyBhbnkpLmtleUNvZGU7XG4gICAgcmV0dXJuIHRoaXMuZW50ZXJFbmRzICYmIGtleSA9PT0gMTNcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5jaGVja1BsYWNlaG9sZGVyKCk7XG4gICAgY29uc3QgY2FuY2VsID0gdGhpcy5zaG91bGRDYW5jZWxFdmVudChldmVudClcblxuICAgIC8vIGVudGVyIGtleSB0cmVhdG1lbnRcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLm9uQmx1cigpXG4gICAgICBjYW5jZWxFdmVudChldmVudClcbiAgICAgIHRoaXMuZW50ZXIuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbClcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG4gICAgICBjb25zdCBtYXhlZCA9IHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aDtcbiAgICAgIGNvbnN0IGtleSA9IChldmVudCBhcyBhbnkpLndoaWNoIHx8IChldmVudCBhcyBhbnkpLmtleUNvZGU7XG5cbiAgICAgIGlmIChtYXhlZCkge1xuICAgICAgICBjb25zdCBpc0RlbGV0ZSA9IFs4LCA0Nl0uaW5kZXhPZigga2V5ICkgPj0gMDtcblxuICAgICAgICBpZiAoIWlzRGVsZXRlKSB7XG4gICAgICAgICAgY2FuY2VsRXZlbnQoZXZlbnQpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbklucHV0KCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICsrdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpXG4gICAgLy8gQmVsb3csIGNhdXNlZCBmb2N1cyBsb3NzIGJsdXIgYmVjYXVzZSB0aGUgbW9kZWwgdXBkYXRlcyBhbmQgY2F1c2VzIHJlZHJhdyBzbyBub3cgd2UgdXNlIHRoaXMucmVjZW50SW5wdXRzXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRoaXMuY29udGVudE1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuY29udGVudE1vZGVsID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudFxuICAgIHRoaXMuY29udGVudE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuXG4gICAgLy8gb25seSB1cGRhdGUgdGhpcyBvbmJsdXIgYW5kIGZvY3VzXG4gICAgLy8gdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMuaGFzRm9jdXNDaGFuZ2UuZW1pdCh0aGlzLmhhc0ZvY3VzID0gdHJ1ZSlcbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMuY29udGVudE1vZGVsO1xuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCcnKTtcbiAgICAvKiAxMC0xMjogbW92ZWQgaW50byBrZXlkb3duIGNoZWNrXG4gICAgdGhpcy5jaGVja1BsYWNlaG9sZGVyKCk7XG4gICAgKi9cbiAgfVxuXG4gIGNoZWNrUGxhY2Vob2xkZXIoKSB7XG4gICAgaWYgKHRoaXMucGxhY2Vob2xkZXIgJiYgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9PT0gdGhpcy5wbGFjZWhvbGRlcikge1xuICAgICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2JsdXInKSBvbkJsdXIoKSB7XG4gICAgaWYgKHRoaXMubGFzdFZhbHVlICE9PSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50KSB7XG4gICAgICB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgLy8gbm93IHVwZGF0ZSBpdFxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSgpIC8vIHdlIGhhdmUgdG8gZW1pdCBoZXJlIGZvciBjaGFuZ2Ugb3RoZXJ3aXNlIGtleWJvYXJkIGJsdXIgY2F1c2VkIGR1cmluZyBrZXkgY2hhbmdlc1xuICAgICAgdGhpcy5jaGFuZ2VEb25lLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCk7XG4gICAgdGhpcy5oYXNGb2N1c0NoYW5nZS5lbWl0KHRoaXMuaGFzRm9jdXMgPSBmYWxzZSlcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogRXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufSJdfQ==