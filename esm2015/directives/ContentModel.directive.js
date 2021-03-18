import { ElementRef, Output, EventEmitter, Input, HostListener, Directive } from '@angular/core';
export class ContentModel {
    constructor(elm) {
        this.elm = elm;
        this.changeDone = new EventEmitter();
        this.inputChange = new EventEmitter();
        // Below, avoid using (contentModelChange) ... use (inputChange) instead
        this.contentModelChange = new EventEmitter();
        this.enterEnds = false;
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
    onKeyDown(event) {
        this.checkplaceholder();
        const key = event.which || event.keyCode;
        // enter key treatment
        if (this.enterEnds && key === 13) {
            event.preventDefault();
            event.stopPropagation();
            this.onBlur();
            this.enter.emit();
            return;
        }
        if (this.maxLength) {
            const newValue = this.elm.nativeElement.textContent;
            const maxLength = Number(this.maxLength);
            const maxed = this.maxLength && newValue.length > maxLength;
            if (maxed) {
                const isDelete = [8, 46].indexOf(key) >= 0;
                if (!isDelete) {
                    event.preventDefault();
                    event.stopPropagation();
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
        this.contentModel = newValue;
        // Below, caused focus loss blur because the model updates and causes redraw so now we use this.recentInputs
        this.contentModelChange.emit(this.contentModel);
        this.inputChange.emit(this.contentModel);
    }
    onFocus() {
        this.lastValue = this.contentModel;
        this.evalPlaceholder('');
        /* 10-12: moved into keydown check
        this.checkplaceholder();
        */
    }
    checkplaceholder() {
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
    onInput: [{ type: HostListener, args: ['input',] }],
    onFocus: [{ type: HostListener, args: ['focus',] }],
    onBlur: [{ type: HostListener, args: ['blur',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNoQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFpQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFLL0QsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNqQixVQUFLLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUMsQ0FBQyw0QkFBNEI7UUFFdEYsaUJBQVksR0FBRyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7UUFJN0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELFdBQVc7UUFDVCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUVwQyx1REFBdUQ7UUFDdkQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3JCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNwQixPQUFPO1NBQ1I7UUFFRCxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFB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QUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFcUIsTUFBTTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsb0ZBQW9GO1lBQ3JJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUN6QztRQUVELElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUF6SEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7OztZQU5DLFVBQVU7Ozt5QkFPVCxNQUFNOzJCQUVOLEtBQUs7MEJBQ0wsTUFBTTtpQ0FFTixNQUFNOzBCQUVOLEtBQUs7d0JBQ0wsS0FBSzt3QkFFTCxLQUFLO29CQUNMLE1BQU07d0JBeUNOLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7c0JBOEJsQyxZQUFZLFNBQUMsT0FBTztzQkFlcEIsWUFBWSxTQUFDLE9BQU87cUJBY3BCLFlBQVksU0FBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb250ZW50TW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIENvbnRlbnRNb2RlbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGNoYW5nZURvbmU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRNb2RlbCE6IHN0cmluZztcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gQmVsb3csIGF2b2lkIHVzaW5nIChjb250ZW50TW9kZWxDaGFuZ2UpIC4uLiB1c2UgKGlucHV0Q2hhbmdlKSBpbnN0ZWFkXG4gIEBPdXRwdXQoKSBjb250ZW50TW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGg/OiBudW1iZXI7XG5cbiAgQElucHV0KCkgZW50ZXJFbmRzID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBlbnRlcjogRXZlbnRFbWl0dGVyPHZvaWQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBmaXJlcyB3aGVuIGVudGVyIGtleSB1c2VkXG5cbiAgcmVjZW50SW5wdXRzID0gMDsgLy8gY2hlY2sgaW4vb3V0IHVzZXIgaW5wdXQgdG8gcHJldmVudCB1cGRhdGluZyBjb250ZW50IHJpZ2h0IGFmdGVyIHVzZXIgaW5wdXRcbiAgbGFzdFZhbHVlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbG06IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBkbyBub3QgcmVkcmF3IGlmIHdlIGFyZSBjdXJyZW50bHkgY2hhbmdpbmcgdGhlIGlucHV0XG4gICAgaWYgKHRoaXMucmVjZW50SW5wdXRzKSB7XG4gICAgICAtLXRoaXMucmVjZW50SW5wdXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgICBpZiAoIXVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgfVxuICB9XG5cbiAgZXZhbFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCB1c2VQbGFjZWhvbGRlciA9IHRoaXMuY29udGVudE1vZGVsID09IG51bGwgfHwgdGhpcy5jb250ZW50TW9kZWwgPT09ICcnO1xuXG4gICAgaWYgKHVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/IHRoaXMucGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQpIHtcbiAgICB0aGlzLmNoZWNrcGxhY2Vob2xkZXIoKTtcbiAgICBjb25zdCBrZXkgPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgLy8gZW50ZXIga2V5IHRyZWF0bWVudFxuICAgIGlmICh0aGlzLmVudGVyRW5kcyAmJiBrZXkgPT09IDEzKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB0aGlzLm9uQmx1cigpO1xuICAgICAgdGhpcy5lbnRlci5lbWl0KCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuICAgICAgY29uc3QgbWF4ZWQgPSB0aGlzLm1heExlbmd0aCAmJiBuZXdWYWx1ZS5sZW5ndGggPiBtYXhMZW5ndGg7XG5cbiAgICAgIGlmIChtYXhlZCkge1xuICAgICAgICBjb25zdCBpc0RlbGV0ZSA9IFs4LCA0Nl0uaW5kZXhPZigga2V5ICkgPj0gMDtcblxuICAgICAgICBpZiAoIWlzRGVsZXRlKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpIG9uSW5wdXQoKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50O1xuICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGggJiYgbmV3VmFsdWUubGVuZ3RoID4gbWF4TGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgKyt0aGlzLnJlY2VudElucHV0cztcbiAgICB0aGlzLmNvbnRlbnRNb2RlbCA9IG5ld1ZhbHVlO1xuICAgIC8vIEJlbG93LCBjYXVzZWQgZm9jdXMgbG9zcyBibHVyIGJlY2F1c2UgdGhlIG1vZGVsIHVwZGF0ZXMgYW5kIGNhdXNlcyByZWRyYXcgc28gbm93IHdlIHVzZSB0aGlzLnJlY2VudElucHV0c1xuICAgIHRoaXMuY29udGVudE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICAgIHRoaXMuaW5wdXRDaGFuZ2UuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpIG9uRm9jdXMoKSB7XG4gICAgdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbDtcbiAgICB0aGlzLmV2YWxQbGFjZWhvbGRlcignJyk7XG4gICAgLyogMTAtMTI6IG1vdmVkIGludG8ga2V5ZG93biBjaGVja1xuICAgIHRoaXMuY2hlY2twbGFjZWhvbGRlcigpO1xuICAgICovXG4gIH1cblxuICBjaGVja3BsYWNlaG9sZGVyKCkge1xuICAgIGlmICh0aGlzLnBsYWNlaG9sZGVyICYmIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPT09IHRoaXMucGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdibHVyJykgb25CbHVyKCkge1xuICAgIGlmICh0aGlzLmxhc3RWYWx1ZSAhPT0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCkge1xuICAgICAgdGhpcy5jb250ZW50TW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7IC8vIHdlIGhhdmUgdG8gZW1pdCBoZXJlIGZvciBjaGFuZ2Ugb3RoZXJ3aXNlIGtleWJvYXJkIGJsdXIgY2F1c2VkIGR1cmluZyBrZXkgY2hhbmdlc1xuICAgICAgdGhpcy5jaGFuZ2VEb25lLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuICAgIH1cblxuICAgIHRoaXMuZXZhbFBsYWNlaG9sZGVyKCk7XG4gIH1cbn1cbiJdfQ==