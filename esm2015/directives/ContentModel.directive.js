import { ElementRef, Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
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
    hasFocus: [{ type: Input }],
    hasFocusChange: [{ type: Output }],
    onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
    onInput: [{ type: HostListener, args: ['input',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
function cancelEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNoQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFzQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBckJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUQsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNEJBQTRCO1FBRzlFLG1CQUFjLEdBQTBCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7UUFJbEcsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7UUFJN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUVwQyx1REFBdUQ7UUFDdkQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFFRCxNQUFN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TUFBTTsyQkFFTixLQUFLOzBCQUNMLE1BQU07aUNBRU4sTUFBTTswQkFFTixLQUFLO3dCQUNMLEtBQUs7d0JBRUwsS0FBSztvQkFDTCxNQUFNO3VCQUVOLEtBQUs7NkJBQ0wsTUFBTTt3QkFnRE4sWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztzQkE2QmxDLFlBQVksU0FBQyxPQUFPO3NCQXNCcEIsWUFBWSxTQUFDLE9BQU87cUJBZXBCLFlBQVksU0FBQyxNQUFNOztBQVl0QixTQUFTLFdBQVcsQ0FBQyxLQUFZO0lBQy9CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQTtJQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUE7QUFDekIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEVsZW1lbnRSZWYsIE91dHB1dCwgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCwgSG9zdExpc3RlbmVyLCBEaXJlY3RpdmUsIE9uQ2hhbmdlcywgT25EZXN0cm95XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY29udGVudE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBDb250ZW50TW9kZWwgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIEBPdXRwdXQoKSBjaGFuZ2VEb25lOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBjb250ZW50TW9kZWwhOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSBpbnB1dENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIC8vIEJlbG93LCBhdm9pZCB1c2luZyAoY29udGVudE1vZGVsQ2hhbmdlKSAuLi4gdXNlIChpbnB1dENoYW5nZSkgaW5zdGVhZFxuICBAT3V0cHV0KCkgY29udGVudE1vZGVsQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKSBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgQElucHV0KCkgbWF4TGVuZ3RoPzogbnVtYmVyO1xuXG4gIEBJbnB1dCgpIGVudGVyRW5kcz86IGJvb2xlYW5cbiAgQE91dHB1dCgpIGVudGVyOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gZmlyZXMgd2hlbiBlbnRlciBrZXkgdXNlZFxuXG4gIEBJbnB1dCgpIGhhc0ZvY3VzPzogYm9vbGVhblxuICBAT3V0cHV0KCkgaGFzRm9jdXNDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gZmlyZXMgd2hlbiBlbnRlciBrZXkgdXNlZFxuXG5cblxuICByZWNlbnRJbnB1dHMgPSAwOyAvLyBjaGVjayBpbi9vdXQgdXNlciBpbnB1dCB0byBwcmV2ZW50IHVwZGF0aW5nIGNvbnRlbnQgcmlnaHQgYWZ0ZXIgdXNlciBpbnB1dFxuICBsYXN0VmFsdWU/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsbTogRWxlbWVudFJlZikge1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQuc2V0QXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnLCB0cnVlKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5lbG0ubmF0aXZlRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2NvbnRlbnRlZGl0YWJsZScpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKXtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIC8vIGRvIG5vdCByZWRyYXcgaWYgd2UgYXJlIGN1cnJlbnRseSBjaGFuZ2luZyB0aGUgaW5wdXRcbiAgICBpZiAodGhpcy5yZWNlbnRJbnB1dHMpIHtcbiAgICAgIC0tdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdXNlUGxhY2Vob2xkZXIgPSB0aGlzLmV2YWxQbGFjZWhvbGRlcigpO1xuICAgIGlmICghdXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB9XG4gIH1cblxuICBldmFsUGxhY2Vob2xkZXIocGxhY2Vob2xkZXI/OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBjb25zdCBuRWxtID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudDtcblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5jb250ZW50TW9kZWwgPT0gbnVsbCB8fCB0aGlzLmNvbnRlbnRNb2RlbCA9PT0gJyc7XG5cbiAgICBpZiAodXNlUGxhY2Vob2xkZXIpIHtcbiAgICAgIG5FbG0udGV4dENvbnRlbnQgPSBwbGFjZWhvbGRlciA9PSBudWxsID8gdGhpcy5wbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVyO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc2hvdWxkQ2FuY2VsRXZlbnQoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcbiAgICByZXR1cm4gdGhpcy5lbnRlckVuZHMgJiYga2V5ID09PSAxM1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pIG9uS2V5RG93bihldmVudDogRXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICBjb25zdCBjYW5jZWwgPSB0aGlzLnNob3VsZENhbmNlbEV2ZW50KGV2ZW50KVxuXG4gICAgLy8gZW50ZXIga2V5IHRyZWF0bWVudFxuICAgIGlmIChjYW5jZWwpIHtcbiAgICAgIHRoaXMub25CbHVyKClcbiAgICAgIGNhbmNlbEV2ZW50KGV2ZW50KVxuICAgICAgdGhpcy5lbnRlci5lbWl0KHRoaXMuY29udGVudE1vZGVsKVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm1heExlbmd0aCkge1xuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbWF4TGVuZ3RoID0gTnVtYmVyKHRoaXMubWF4TGVuZ3RoKTtcbiAgICAgIGNvbnN0IG1heGVkID0gdGhpcy5tYXhMZW5ndGggJiYgbmV3VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoO1xuICAgICAgY29uc3Qga2V5ID0gKGV2ZW50IGFzIGFueSkud2hpY2ggfHwgKGV2ZW50IGFzIGFueSkua2V5Q29kZTtcblxuICAgICAgaWYgKG1heGVkKSB7XG4gICAgICAgIGNvbnN0IGlzRGVsZXRlID0gWzgsIDQ2XS5pbmRleE9mKCBrZXkgKSA+PSAwO1xuXG4gICAgICAgIGlmICghaXNEZWxldGUpIHtcbiAgICAgICAgICBjYW5jZWxFdmVudChldmVudClcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9uSW5wdXQoKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGggJiYgbmV3VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKyt0aGlzLnJlY2VudElucHV0cztcbiAgICB0aGlzLnVwZGF0ZVZhbHVlKClcbiAgICAvLyBCZWxvdywgY2F1c2VkIGZvY3VzIGxvc3MgYmx1ciBiZWNhdXNlIHRoZSBtb2RlbCB1cGRhdGVzIGFuZCBjYXVzZXMgcmVkcmF3IHNvIG5vdyB3ZSB1c2UgdGhpcy5yZWNlbnRJbnB1dHNcbiAgICB0aGlzLmlucHV0Q2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICB9XG5cbiAgdXBkYXRlVmFsdWUoKSB7XG4gICAgdGhpcy5jb250ZW50TW9kZWwgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50XG4gICAgdGhpcy5jb250ZW50TW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7XG5cbiAgICAvLyBvbmx5IHVwZGF0ZSB0aGlzIG9uYmx1ciBhbmQgZm9jdXNcbiAgICAvLyB0aGlzLmxhc3RWYWx1ZSA9IHRoaXMuY29udGVudE1vZGVsXG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5oYXNGb2N1c0NoYW5nZS5lbWl0KHRoaXMuaGFzRm9jdXMgPSB0cnVlKVxuICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoJycpO1xuICAgIC8qIDEwLTEyOiBtb3ZlZCBpbnRvIGtleWRvd24gY2hlY2tcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICAqL1xuICB9XG5cbiAgY2hlY2tQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID09PSB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5sYXN0VmFsdWUgIT09IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCAvLyBub3cgdXBkYXRlIGl0XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCkgLy8gd2UgaGF2ZSB0byBlbWl0IGhlcmUgZm9yIGNoYW5nZSBvdGhlcndpc2Uga2V5Ym9hcmQgYmx1ciBjYXVzZWQgZHVyaW5nIGtleSBjaGFuZ2VzXG4gICAgICB0aGlzLmNoYW5nZURvbmUuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgICB0aGlzLmhhc0ZvY3VzQ2hhbmdlLmVtaXQodGhpcy5oYXNGb2N1cyA9IGZhbHNlKVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbEV2ZW50KGV2ZW50OiBFdmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG59Il19