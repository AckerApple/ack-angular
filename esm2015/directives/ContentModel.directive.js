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
            this.recordValue();
            cancelEvent(event);
            this.onBlur();
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
    onInput(event) {
        if (this.shouldCancelEvent(event)) {
        }
        const newValue = this.elm.nativeElement.textContent;
        const maxLength = Number(this.maxLength);
        if (this.maxLength && newValue.length > maxLength) {
            return;
        }
        ++this.recentInputs;
        this.recordValue();
        this.contentModel = newValue;
        // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
        this.contentModelChange.emit(this.contentModel);
        this.inputChange.emit(this.contentModel);
    }
    recordValue() {
        this.contentModel = this.elm.nativeElement.textContent;
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
            this.contentModelChange.emit(this.contentModel); // we have to emit here for change otherwise keyboard blur caused during key changes
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
    onInput: [{ type: HostListener, args: ['input', ['$event'],] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNoQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFpQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUQsVUFBSyxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNEJBQTRCO1FBRXRGLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1FBSTdGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFcEMsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FB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QUMsUUFBUSxDQUFDO3NCQXdCaEMsWUFBWSxTQUFDLE9BQU87cUJBY3BCLFlBQVksU0FBQyxNQUFNOztBQVV0QixTQUFTLFdBQVcsQ0FBQyxLQUFZO0lBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgSG9zdExpc3RlbmVyLCBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29udGVudE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBDb250ZW50TW9kZWwgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBjaGFuZ2VEb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBjb250ZW50TW9kZWwhOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEJlbG93LCBhdm9pZCB1c2luZyAoY29udGVudE1vZGVsQ2hhbmdlKSAuLi4gdXNlIChpbnB1dENoYW5nZSkgaW5zdGVhZFxuICBAT3V0cHV0KCkgY29udGVudE1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGVudGVyRW5kcz86IGJvb2xlYW5cbiAgQE91dHB1dCgpIGVudGVyOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7IC8vIGZpcmVzIHdoZW4gZW50ZXIga2V5IHVzZWRcblxuICByZWNlbnRJbnB1dHMgPSAwOyAvLyBjaGVjayBpbi9vdXQgdXNlciBpbnB1dCB0byBwcmV2ZW50IHVwZGF0aW5nIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdXNlciBpbnB1dFxuICBsYXN0VmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsbTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIGRvIG5vdCByZWRyYXcgaWYgd2UgYXJlIGN1cnJlbnRseSBjaGFuZ2luZyB0aGUgaW5wdXRcbiAgICBpZiAodGhpcy5yZWNlbnRJbnB1dHMpIHtcbiAgICAgIC0tdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlUGxhY2Vob2xkZXIgPSB0aGlzLmV2YWxQbGFjZWhvbGRlcigpO1xuICAgIGlmICghdXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB9XG4gIH1cblxuICBldmFsUGxhY2Vob2xkZXIocGxhY2Vob2xkZXI/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5jb250ZW50TW9kZWwgPT0gbnVsbCB8fCB0aGlzLmNvbnRlbnRNb2RlbCA9PT0gJyc7XG5cbiAgICBpZiAodXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSBwbGFjZWhvbGRlciA9PSBudWxsID8gdGhpcy5wbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcbiAgICByZXR1cm4gdGhpcy5lbnRlckVuZHMgJiYga2V5ID09PSAxM1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICBjb25zdCBjYW5jZWwgPSB0aGlzLnNob3VsZENhbmNlbEV2ZW50KGV2ZW50KVxuXG4gICAgLy8gZW50ZXIga2V5IHRyZWF0bWVudFxuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMucmVjb3JkVmFsdWUoKVxuICAgICAgY2FuY2VsRXZlbnQoZXZlbnQpXG4gICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgdGhpcy5lbnRlci5lbWl0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuICAgICAgY29uc3QgbWF4ZWQgPSB0aGlzLm1heExlbmd0aCAmJiBuZXdWYWx1ZS5sZW5ndGggPiBtYXhMZW5ndGg7XG4gICAgICBjb25zdCBrZXkgPSAoZXZlbnQgYXMgYW55KS53aGljaCB8fCAoZXZlbnQgYXMgYW55KS5rZXlDb2RlO1xuXG4gICAgICBpZiAobWF4ZWQpIHtcbiAgICAgICAgY29uc3QgaXNEZWxldGUgPSBbOCwgNDZdLmluZGV4T2YoIGtleSApID49IDA7XG5cbiAgICAgICAgaWYgKCFpc0RlbGV0ZSkge1xuICAgICAgICAgIGNhbmNlbEV2ZW50KGV2ZW50KVxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2lucHV0JywgWyckZXZlbnQnXSkgb25JbnB1dChldmVudDogRXZlbnQpIHtcbiAgICBpZiAodGhpcy5zaG91bGRDYW5jZWxFdmVudChldmVudCkpIHtcblxuICAgIH1cblxuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICsrdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgdGhpcy5yZWNvcmRWYWx1ZSgpXG4gICAgdGhpcy5jb250ZW50TW9kZWwgPSBuZXdWYWx1ZTtcbiAgICAvLyBCZWxvdywgY2F1c2VkIGZvY3VzIGxvc3MgYmx1ciBiZWNhdXNlIHRoZSBtb2RlbCB1cGRhdGVzIGFuZCBjYXVzZXMgcmVkcmF3IHNvIG5vdyB3ZSB1c2UgdGhpcy5yZWNlbnRJbnB1dHNcbiAgICB0aGlzLmNvbnRlbnRNb2RlbENoYW5nZS5lbWl0KHRoaXMuY29udGVudE1vZGVsKTtcbiAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICB9XG5cbiAgcmVjb3JkVmFsdWUoKSB7XG4gICAgdGhpcy5jb250ZW50TW9kZWwgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB0aGlzLmV2YWxQbGFjZWhvbGRlcignJyk7XG4gICAgLyogMTAtMTI6IG1vdmVkIGludG8ga2V5ZG93biBjaGVja1xuICAgIHRoaXMuY2hlY2tQbGFjZWhvbGRlcigpO1xuICAgICovXG4gIH1cblxuICBjaGVja1BsYWNlaG9sZGVyKCkge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPT09IHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmxhc3RWYWx1ZSAhPT0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50TW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7IC8vIHdlIGhhdmUgdG8gZW1pdCBoZXJlIGZvciBjaGFuZ2Ugb3RoZXJ3aXNlIGtleWJvYXJkIGJsdXIgY2F1c2VkIGR1cmluZyBrZXkgY2hhbmdlc1xuICAgICAgdGhpcy5jaGFuZ2VEb25lLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbn0iXX0=