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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGVudE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0NvbnRlbnRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFVBQVUsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUNoQyxLQUFLLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFDL0IsTUFBTSxlQUFlLENBQUM7QUFJcEIsTUFBTSxPQUFPLFlBQVk7SUFpQjFCLFlBQW1CLEdBQWU7UUFBZixRQUFHLEdBQUgsR0FBRyxDQUFZO1FBaEJ4QixlQUFVLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHdEQsZ0JBQVcsR0FBeUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNqRSx3RUFBd0U7UUFDOUQsdUJBQWtCLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFNOUQsVUFBSyxHQUF5QixJQUFJLFlBQVksRUFBRSxDQUFDLENBQUMsNEJBQTRCO1FBRXhGLGlCQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsNkVBQTZFO1FBSTdGLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVELENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUM7UUFFcEMsdURBQXVEO1FBQ3ZELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDcEIsT0FBTztTQUNSO1FBRUQsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELGVBQWUsQ0FBQyxXQUFvQjtRQUNsQyxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQztRQUVwQyxNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLEVBQUUsQ0FBQztRQUU3RSxJQUFJLGNBQWMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLFdBQVcsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQztZQUN4RSxPQUFPLElBQUksQ0FBQztTQUNiO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBWTtRQUM1QixNQUFNLEdBQUcsR0FBSSxLQUFhLENBQUMsS0FBSyxJQUFLLEtBQWEsQ0FBQyxPQUFPLENBQUM7UUFDM0QsT0FBTyxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsS0FBSyxFQUFFLENBQUE7SUFDckMsQ0FBQztJQUVvQyxTQUFTLENBQUMsS0FBWTtRQUN6RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLENBQUE7UUFFNUMsc0JBQXNCO1FBQ3RCLElBQUksTUFBTSxFQUFFO1lBQ1YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO1lBQ2IsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUNsQyxPQUFPO1NBQ1I7UUFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDO1lBQ3BELE1BQU0sU0FBUyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDekMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztZQUM1RCxNQUFNLEdBQUcsR0FBSSxLQUFhLENBQUMsS0FBSyxJQUFLLEtBQWEsQ0FBQyxPQUFPLENBQUM7WUFFM0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1QsTUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFFLEdBQUcsQ0FBRSxJQUFJLENBQUMsQ0FBQztnQkFFN0MsSUFBSSxDQUFDLFFBQVEsRUFBRTtvQkFDYixXQUFXLENBQUMsS0FBSyxDQUFDLENBQUE7b0JBQ2xCLE9BQU87aUJBQ1I7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVzQixPQUFPO1FBQzVCLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUNwRCxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXpDLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFBRTtZQUNqRCxPQUFPO1NBQ1I7UUFFRCxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFBO1FBQ2xCLDRHQUE0RztRQUM1RyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQTtRQUN0RCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUVoRCxvQ0FBb0M7UUFDcEMscUNBQXFDO0lBQ3ZDLENBQUM7SUFFc0IsT0FBTztRQUM1QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN6Qjs7VUFFRTtJQUNKLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDL0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztTQUN6QztJQUNILENBQUM7SUFFcUIsTUFBTTtRQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBLENBQUMsZ0JBQWdCO1lBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQSxDQUFDLG9GQUFvRjtZQUN2RyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBcklGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2FBQzNCOzs7WUFOQyxVQUFVOzs7eUJBT1QsTUFBTTsyQkFFTixLQUFLOzBCQUNMLE1BQU07aUNBRU4sTUFBTTswQkFFTixLQUFLO3dCQUNMLEtBQUs7d0JBRUwsS0FBSztvQkFDTCxNQUFNO3dCQThDTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDO3NCQTZCbEMsWUFBWSxTQUFDLE9BQU87c0JBc0JwQixZQUFZLFNBQUMsT0FBTztxQkFjcEIsWUFBWSxTQUFDLE1BQU07O0FBV3RCLFNBQVMsV0FBVyxDQUFDLEtBQVk7SUFDL0IsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFBO0lBQ3RCLEtBQUssQ0FBQyxlQUFlLEVBQUUsQ0FBQTtBQUN6QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZiwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsXG4gIElucHV0LCBIb3N0TGlzdGVuZXIsIERpcmVjdGl2ZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tjb250ZW50TW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIENvbnRlbnRNb2RlbCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQE91dHB1dCgpIGNoYW5nZURvbmU6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIGNvbnRlbnRNb2RlbCE6IHN0cmluZztcbiAgQE91dHB1dCgpIGlucHV0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLy8gQmVsb3csIGF2b2lkIHVzaW5nIChjb250ZW50TW9kZWxDaGFuZ2UpIC4uLiB1c2UgKGlucHV0Q2hhbmdlKSBpbnN0ZWFkXG4gIEBPdXRwdXQoKSBjb250ZW50TW9kZWxDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICBASW5wdXQoKSBtYXhMZW5ndGg/OiBudW1iZXI7XG5cbiAgQElucHV0KCkgZW50ZXJFbmRzPzogYm9vbGVhblxuICBAT3V0cHV0KCkgZW50ZXI6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBmaXJlcyB3aGVuIGVudGVyIGtleSB1c2VkXG5cbiAgcmVjZW50SW5wdXRzID0gMDsgLy8gY2hlY2sgaW4vb3V0IHVzZXIgaW5wdXQgdG8gcHJldmVudCB1cGRhdGluZyBjb250ZW50IHJpZ2h0IGFmdGVyIHVzZXIgaW5wdXRcbiAgbGFzdFZhbHVlPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbG06IEVsZW1lbnRSZWYpIHtcbiAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnNldEF0dHJpYnV0ZSgnY29udGVudGVkaXRhYmxlJywgdHJ1ZSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdjb250ZW50ZWRpdGFibGUnKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICAvLyBkbyBub3QgcmVkcmF3IGlmIHdlIGFyZSBjdXJyZW50bHkgY2hhbmdpbmcgdGhlIGlucHV0XG4gICAgaWYgKHRoaXMucmVjZW50SW5wdXRzKSB7XG4gICAgICAtLXRoaXMucmVjZW50SW5wdXRzO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVzZVBsYWNlaG9sZGVyID0gdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgICBpZiAoIXVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgfVxuICB9XG5cbiAgZXZhbFBsYWNlaG9sZGVyKHBsYWNlaG9sZGVyPzogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgY29uc3QgbkVsbSA9IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgICBjb25zdCB1c2VQbGFjZWhvbGRlciA9IHRoaXMuY29udGVudE1vZGVsID09IG51bGwgfHwgdGhpcy5jb250ZW50TW9kZWwgPT09ICcnO1xuXG4gICAgaWYgKHVzZVBsYWNlaG9sZGVyKSB7XG4gICAgICBuRWxtLnRleHRDb250ZW50ID0gcGxhY2Vob2xkZXIgPT0gbnVsbCA/IHRoaXMucGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcjtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHNob3VsZENhbmNlbEV2ZW50KGV2ZW50OiBFdmVudCkge1xuICAgIGNvbnN0IGtleSA9IChldmVudCBhcyBhbnkpLndoaWNoIHx8IChldmVudCBhcyBhbnkpLmtleUNvZGU7XG4gICAgcmV0dXJuIHRoaXMuZW50ZXJFbmRzICYmIGtleSA9PT0gMTNcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbJyRldmVudCddKSBvbktleURvd24oZXZlbnQ6IEV2ZW50KSB7XG4gICAgdGhpcy5jaGVja1BsYWNlaG9sZGVyKCk7XG4gICAgY29uc3QgY2FuY2VsID0gdGhpcy5zaG91bGRDYW5jZWxFdmVudChldmVudClcblxuICAgIC8vIGVudGVyIGtleSB0cmVhdG1lbnRcbiAgICBpZiAoY2FuY2VsKSB7XG4gICAgICB0aGlzLm9uQmx1cigpXG4gICAgICBjYW5jZWxFdmVudChldmVudClcbiAgICAgIHRoaXMuZW50ZXIuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbClcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tYXhMZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG1heExlbmd0aCA9IE51bWJlcih0aGlzLm1heExlbmd0aCk7XG4gICAgICBjb25zdCBtYXhlZCA9IHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aDtcbiAgICAgIGNvbnN0IGtleSA9IChldmVudCBhcyBhbnkpLndoaWNoIHx8IChldmVudCBhcyBhbnkpLmtleUNvZGU7XG5cbiAgICAgIGlmIChtYXhlZCkge1xuICAgICAgICBjb25zdCBpc0RlbGV0ZSA9IFs4LCA0Nl0uaW5kZXhPZigga2V5ICkgPj0gMDtcblxuICAgICAgICBpZiAoIWlzRGVsZXRlKSB7XG4gICAgICAgICAgY2FuY2VsRXZlbnQoZXZlbnQpXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKSBvbklucHV0KCkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBtYXhMZW5ndGggPSBOdW1iZXIodGhpcy5tYXhMZW5ndGgpO1xuXG4gICAgaWYgKHRoaXMubWF4TGVuZ3RoICYmIG5ld1ZhbHVlLmxlbmd0aCA+IG1heExlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgICsrdGhpcy5yZWNlbnRJbnB1dHM7XG4gICAgdGhpcy51cGRhdGVWYWx1ZSgpXG4gICAgLy8gQmVsb3csIGNhdXNlZCBmb2N1cyBsb3NzIGJsdXIgYmVjYXVzZSB0aGUgbW9kZWwgdXBkYXRlcyBhbmQgY2F1c2VzIHJlZHJhdyBzbyBub3cgd2UgdXNlIHRoaXMucmVjZW50SW5wdXRzXG4gICAgdGhpcy5pbnB1dENoYW5nZS5lbWl0KHRoaXMuY29udGVudE1vZGVsKTtcbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKCkge1xuICAgIHRoaXMuY29udGVudE1vZGVsID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudFxuICAgIHRoaXMuY29udGVudE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5jb250ZW50TW9kZWwpO1xuXG4gICAgLy8gb25seSB1cGRhdGUgdGhpcyBvbmJsdXIgYW5kIGZvY3VzXG4gICAgLy8gdGhpcy5sYXN0VmFsdWUgPSB0aGlzLmNvbnRlbnRNb2RlbFxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKSBvbkZvY3VzKCkge1xuICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5jb250ZW50TW9kZWw7XG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoJycpO1xuICAgIC8qIDEwLTEyOiBtb3ZlZCBpbnRvIGtleWRvd24gY2hlY2tcbiAgICB0aGlzLmNoZWNrUGxhY2Vob2xkZXIoKTtcbiAgICAqL1xuICB9XG5cbiAgY2hlY2tQbGFjZWhvbGRlcigpIHtcbiAgICBpZiAodGhpcy5wbGFjZWhvbGRlciAmJiB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID09PSB0aGlzLnBsYWNlaG9sZGVyKSB7XG4gICAgICB0aGlzLmVsbS5uYXRpdmVFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpIG9uQmx1cigpIHtcbiAgICBpZiAodGhpcy5sYXN0VmFsdWUgIT09IHRoaXMuZWxtLm5hdGl2ZUVsZW1lbnQudGV4dENvbnRlbnQpIHtcbiAgICAgIHRoaXMubGFzdFZhbHVlID0gdGhpcy5lbG0ubmF0aXZlRWxlbWVudC50ZXh0Q29udGVudCAvLyBub3cgdXBkYXRlIGl0XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCkgLy8gd2UgaGF2ZSB0byBlbWl0IGhlcmUgZm9yIGNoYW5nZSBvdGhlcndpc2Uga2V5Ym9hcmQgYmx1ciBjYXVzZWQgZHVyaW5nIGtleSBjaGFuZ2VzXG4gICAgICB0aGlzLmNoYW5nZURvbmUuZW1pdCh0aGlzLmNvbnRlbnRNb2RlbCk7XG4gICAgfVxuXG4gICAgdGhpcy5ldmFsUGxhY2Vob2xkZXIoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogRXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxufSJdfQ==