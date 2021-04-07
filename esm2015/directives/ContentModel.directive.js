import { ElementRef, Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
export class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.inputChange = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
        this.contentModelChange = new EventEmitter();
        this.enter = new EventEmitter(); // fires when enter key used
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
            this.enter.emit();
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
    }
}
ContentModel.decorators = [
    { type: Directive, args: [{
                selector: '[contentModel]'
            },] }
];
ContentModel.ctorParameters = () => [
    { type: ElementRef }
];
ContentModel.propDecorators = {
    changeDone: [{ type: Output }],
    contentModel: [{ type: Input }],
    inputChange: [{ type: Output }],
    contentModelChange: [{ type: Output }],
    placeholder: [{ type: Input }],
    maxLength: [{ type: Input }],
    enterEnds: [{ type: Input }],
    enter: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNoQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFpQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUQsVUFBSyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNEJBQTRCO1FBRXRGLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1FBSTdGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFcEMsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FB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QyxLQUFZO0lBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgSG9zdExpc3RlbmVyLCBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29udGVudE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBDb250ZW50TW9kZWwgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBjaGFuZ2VEb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBjb250ZW50TW9kZWwhOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEJlbG93LCBhdm9pZCB1c2luZyAoY29udGVudE1vZGVsQ2hhbmdlKSAuLi4gdXNlIChpbnB1dENoYW5nZSkgaW5zdGVhZFxuICBAT3V0cHV0KCkgY29udGVudE1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGVudGVyRW5kcz86IGJvb2xlYW5cbiAgQE91dHB1dCgpIGVudGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuICByZWNlbnRJbnB1dHMgPSAwOyAvLyBjaGVjayBpbi9vdXQgdXNlciBpbnB1dCB0byBwcmV2ZW50IHVwZGF0aW5nIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdXNlciBpbnB1dFxuICBsYXN0VmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsbTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIGRvIG5vdCByZWRyYXcgaWYgd2UgYXJlIGN1cnJlbnRseSBjaGFuZ2luZyB0aGUgaW5wdXRcbiAgICBpZiAodGhpcy5yZWNlbnRJbnB1dHMpIHtcbiAgICAgIC0tdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlUGxhY2Vob2xkZXIgPSB0aGlzLmV2YWxQbGFjZWhvbGRlcigpO1xuICAgIGlmICghdXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB9XG4gIH1cblxuICBldmFsUGxhY2Vob2xkZXIocGxhY2Vob2xkZXI/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5jb250ZW50TW9kZWwgPT0gbnVsbCB8fCB0aGlzLmNvbnRlbnRNb2RlbCA9PT0gJyc7XG5cbiAgICBpZiAodXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSBwbGFjZWhvbGRlciA9PSBudWxsID8gdGhpcy5wbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcbiAgICByZXR1cm4gdGhpcy5lbnRlckVuZHMgJiYga2V5ID09PSAxM1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICBjb25zdCBjYW5jZWwgPSB0aGlzLnNob3VsZENhbmNlbEV2ZW50KGV2ZW50KVxuXG4gICAgLy8gZW50ZXIga2V5IHRyZWF0bWVudFxuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMub25CbHVyKClcbiAgICAgIGNhbmNlbEV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy5lbnRlci5lbWl0KClcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG4gICAgICBjb25zdCBtYXhlZCA9IHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aDtcbiAgICAgIGNvbnN0IGtleSA9IChldmVudCBhcyBhbnkpLndoaWNoIHx8IChldmVudCBhcyBhbnkpLmtleUNvZGU7XG5cbiAgICAgIGlmIChtYXhlZCkge1xuICAgICAgICBjb25zdCBpc0RlbGV0ZSA9IFs4LCA0Nl0uaW5kZXhPZigga2V5ICkgPj0gMDtcblxuICAgICAgICBpZiAoIWlzRGVsZXRlKSB7XG4gICAgICAgICAgY2FuY2VsRXZlbnQoZXZlbnQpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbklucHV0KCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICsrdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpXG4gICAgLy8gQmVsb3csIGNhdXNlZCBmb2N1cyBsb3NzIGJsdXIgYmVjYXVzZSB0aGUgbW9kZWwgdXBkYXRlcyBhbmQgY2F1c2VzIHJlZHJhdyBzbyBub3cgd2UgdXNlIHRoaXMucmVjZW50SW5wdXRzXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRoaXMuY29udGVudE1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuY29udGVudE1vZGVsID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudFxuICAgIHRoaXMuY29udGVudE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuXG4gICAgLy8gb25seSB1cGRhdGUgdGhpcyBvbmJsdXIgYW5kIGZvY3VzXG4gICAgLy8gdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoJycpO1xuICAgIC8qIDEwLTEyOiBtb3ZlZCBpbnRvIGtleWRvd24gY2hlY2tcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICAqL1xuICB9XG5cbiAgY2hlY2tQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID09PSB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5sYXN0VmFsdWUgIT09IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCAvLyBub3cgdXBkYXRlIGl0XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCkgLy8gd2UgaGF2ZSB0byBlbWl0IGhlcmUgZm9yIGNoYW5nZSBvdGhlcndpc2Uga2V5Ym9hcmQgYmx1ciBjYXVzZWQgZHVyaW5nIGtleSBjaGFuZ2VzXG4gICAgICB0aGlzLmNoYW5nZURvbmUuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogRXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufSJdfQ==