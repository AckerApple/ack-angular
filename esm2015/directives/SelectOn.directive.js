import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            setTimeout(() => this.update(), this.selectOnDelay);
        }
    }
    update() {
        this.element.nativeElement.select();
        this.selectThen.emit();
    }
}
SelectOn.decorators = [
    { type: Directive, args: [{
                selector: '[selectOn]'
            },] }
];
SelectOn.ctorParameters = () => [
    { type: ElementRef }
];
SelectOn.propDecorators = {
    selectOn: [{ type: Input }],
    selectOnDelay: [{ type: Input }],
    selectThen: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0T24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU2VsZWN0T24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFBO0FBSW5CLE1BQU0sT0FBTyxRQUFRO0lBS3RCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFINUIsa0JBQWEsR0FBRyxDQUFDLENBQUE7UUFDaEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFFRixDQUFDO0lBRXhDLFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUcsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsWUFBWTthQUN0Qjs7O1lBTEMsVUFBVTs7O3VCQU1ULEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tzZWxlY3RPbl0nXG59KSBleHBvcnQgY2xhc3MgU2VsZWN0T257XG4gIEBJbnB1dCgpIHNlbGVjdE9uOiBhbnlcbiAgQElucHV0KCkgc2VsZWN0T25EZWxheSA9IDBcbiAgQE91dHB1dCgpIHNlbGVjdFRoZW4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogYW55KXtcbiAgICBpZihjaGFuZ2VzLnNlbGVjdE9uICYmIGNoYW5nZXMuc2VsZWN0T24uY3VycmVudFZhbHVlKXtcbiAgICAgIGlmKCB0aGlzLnNlbGVjdE9uRGVsYXk9PT0wICl7XG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMudXBkYXRlKCkpXG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpPT50aGlzLnVwZGF0ZSgpLCB0aGlzLnNlbGVjdE9uRGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LnNlbGVjdCgpO1xuICAgIHRoaXMuc2VsZWN0VGhlbi5lbWl0KCk7XG4gIH1cbn1cbiJdfQ==