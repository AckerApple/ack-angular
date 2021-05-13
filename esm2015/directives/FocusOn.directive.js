import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class FocusOn {
    constructor(element) {
        this.element = element;
        this.focusOnDelay = 0;
        this.focusThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.focusOn && changes.focusOn.currentValue) {
            if (this.focusOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            else {
                setTimeout(() => this.update(), this.focusOnDelay);
            }
        }
    }
    update() {
        this.element.nativeElement.focus();
        this.focusThen.emit();
    }
}
FocusOn.decorators = [
    { type: Directive, args: [{
                selector: '[focusOn]'
            },] }
];
FocusOn.ctorParameters = () => [
    { type: ElementRef }
];
FocusOn.propDecorators = {
    focusOn: [{ type: Input }],
    focusOnDelay: [{ type: Input }],
    focusThen: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9jdXNPbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9Gb2N1c09uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUluQixNQUFNLE9BQU8sT0FBTztJQUtyQixZQUFtQixPQUFrQjtRQUFsQixZQUFPLEdBQVAsT0FBTyxDQUFXO1FBSDVCLGlCQUFZLEdBQUMsQ0FBQyxDQUFBO1FBQ2IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFFRCxDQUFDO0lBRXhDLFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUcsT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQztZQUNqRCxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUcsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBQzFDO2lCQUFJO2dCQUNILFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xEO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQzs7O1lBdEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsV0FBVzthQUNyQjs7O1lBTEMsVUFBVTs7O3NCQU1ULEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tmb2N1c09uXSdcbn0pIGV4cG9ydCBjbGFzcyBGb2N1c09ue1xuICBASW5wdXQoKSBmb2N1c09uOiBhbnlcbiAgQElucHV0KCkgZm9jdXNPbkRlbGF5PTBcbiAgQE91dHB1dCgpIGZvY3VzVGhlbiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBhbnkpe1xuICAgIGlmKGNoYW5nZXMuZm9jdXNPbiAmJiBjaGFuZ2VzLmZvY3VzT24uY3VycmVudFZhbHVlKXtcbiAgICAgIGlmKCB0aGlzLmZvY3VzT25EZWxheT09PTAgKXtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy51cGRhdGUoKSlcbiAgICAgIH1lbHNle1xuICAgICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLnVwZGF0ZSgpLCB0aGlzLmZvY3VzT25EZWxheSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmZvY3VzVGhlbi5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==