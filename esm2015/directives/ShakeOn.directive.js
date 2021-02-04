import { 
//hasClass,
addClass, removeClass } from "./FxOn.directive";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
/** runs shake instructions when condition returns a truthy value */
export class ShakeOn {
    constructor(element) {
        this.element = element;
        this.shakeConstant = false;
        this.shakeThen = new EventEmitter();
        //an array to be used in #ShakeOn refs for fx selectable options (see examples)
        this.shakeTypes = [
            'shake-slow', 'shake-hard', 'shake-little', 'shake-horizontal',
            'shake-vertical', 'shake-rotate', 'shake-opacity', 'shake-crazy',
            'shake-chunk'
        ];
    }
    ngOnInit() {
        Promise.resolve().then(() => this.update());
    }
    update() {
        this.shakeForMs = this.shakeForMs || 2000;
        this.shakeType = this.shakeType || 'shake-slow';
    }
    ngOnChanges(changes) {
        if (changes.shakeOn && changes.shakeOn.currentValue != null && changes.shakeOn.currentValue != changes.shakeOn.previousValue) {
            if (changes.shakeOn.currentValue) {
                this.onTrue();
            }
            else {
                this.onFalse();
            }
        }
        if (changes.shakeType && changes.shakeType.currentValue != changes.shakeType.previousValue) {
            if (this.shakeOn) {
                const pv = changes.shakeType.previousValue;
                if (pv) {
                    removeClass(this.element.nativeElement, pv);
                }
                this.applyType();
            }
            else {
                this.removeType();
            }
        }
    }
    onFalse() {
        removeClass(this.element.nativeElement, 'shake-constant');
        this.removeType();
        if (this.timeout) {
            clearTimeout(this.timeout);
            delete this.timeout;
        }
    }
    removeType() {
        removeClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    applyType() {
        addClass(this.element.nativeElement, this.shakeType || 'shake-slow');
    }
    onTrue() {
        addClass(this.element.nativeElement, 'shake-constant');
        this.applyType();
        if (!this.shakeConstant) {
            this.timeout = setTimeout(() => {
                //$scope.shakeOnController.shakeOn = false
                this.onFalse();
                this.shakeThen.emit(this);
            }, this.shakeForMs);
        }
    }
}
ShakeOn.decorators = [
    { type: Directive, args: [{
                selector: "[shakeOn]",
                exportAs: "ShakeOn"
            },] }
];
ShakeOn.ctorParameters = () => [
    { type: ElementRef }
];
ShakeOn.propDecorators = {
    shakeConstant: [{ type: Input }],
    shakeOn: [{ type: Input }],
    shakeForMs: [{ type: Input }],
    shakeType: [{ type: Input }],
    shakeThen: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hha2VPbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TaGFrZU9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBQ0wsV0FBVztBQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1osTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUV0QixvRUFBb0U7QUFJakUsTUFBTSxPQUFPLE9BQU87SUFnQnJCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFmNUIsa0JBQWEsR0FBRyxLQUFLLENBQUE7UUFJcEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFJeEMsK0VBQStFO1FBQy9FLGVBQVUsR0FBWTtZQUNwQixZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxrQkFBa0I7WUFDM0QsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxhQUFhO1lBQzdELGFBQWE7U0FDZCxDQUFBO0lBRXNDLENBQUM7SUFFeEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZLENBQUE7SUFDakQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFPO1FBQ2pCLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBRSxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDeEgsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7UUFFRCxJQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUM7WUFDdEYsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUNkLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFBO2dCQUMxQyxJQUFJLEVBQUUsRUFBRTtvQkFDTixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7aUJBQzVDO2dCQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBRSxZQUFZLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsU0FBUztRQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCxNQUFNO1FBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQVEsVUFBVSxDQUFDLEdBQUUsRUFBRTtnQkFDakMsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7OztZQWpGRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLFdBQVc7Z0JBQ25CLFFBQVEsRUFBQyxTQUFTO2FBQ3BCOzs7WUFQQyxVQUFVOzs7NEJBUVQsS0FBSztzQkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgLy9oYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59IGZyb20gXCIuL0Z4T24uZGlyZWN0aXZlXCJcblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vKiogcnVucyBzaGFrZSBpbnN0cnVjdGlvbnMgd2hlbiBjb25kaXRpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlwiW3NoYWtlT25dXCJcbiAgLGV4cG9ydEFzOlwiU2hha2VPblwiXG59KSBleHBvcnQgY2xhc3MgU2hha2VPbiB7XG4gIEBJbnB1dCgpIHNoYWtlQ29uc3RhbnQgPSBmYWxzZVxuICBASW5wdXQoKSBzaGFrZU9uXG4gIEBJbnB1dCgpIHNoYWtlRm9yTXNcbiAgQElucHV0KCkgc2hha2VUeXBlXG4gIEBPdXRwdXQoKSBzaGFrZVRoZW4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgXG4gIHRpbWVvdXQ6bnVtYmVyXG4gIFxuICAvL2FuIGFycmF5IHRvIGJlIHVzZWQgaW4gI1NoYWtlT24gcmVmcyBmb3IgZnggc2VsZWN0YWJsZSBvcHRpb25zIChzZWUgZXhhbXBsZXMpXG4gIHNoYWtlVHlwZXM6c3RyaW5nW10gPSBbXG4gICAgJ3NoYWtlLXNsb3cnLCdzaGFrZS1oYXJkJywnc2hha2UtbGl0dGxlJywnc2hha2UtaG9yaXpvbnRhbCcsXG4gICAgJ3NoYWtlLXZlcnRpY2FsJywnc2hha2Utcm90YXRlJywnc2hha2Utb3BhY2l0eScsJ3NoYWtlLWNyYXp5JyxcbiAgICAnc2hha2UtY2h1bmsnXG4gIF1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnVwZGF0ZSgpKVxuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5zaGFrZUZvck1zID0gdGhpcy5zaGFrZUZvck1zIHx8IDIwMDBcbiAgICB0aGlzLnNoYWtlVHlwZSA9IHRoaXMuc2hha2VUeXBlIHx8ICdzaGFrZS1zbG93J1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlcyl7XG4gICAgaWYgKGNoYW5nZXMuc2hha2VPbiAmJiBjaGFuZ2VzLnNoYWtlT24uY3VycmVudFZhbHVlIT1udWxsICYmIGNoYW5nZXMuc2hha2VPbi5jdXJyZW50VmFsdWUhPWNoYW5nZXMuc2hha2VPbi5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICBpZihjaGFuZ2VzLnNoYWtlT24uY3VycmVudFZhbHVlKXtcbiAgICAgICAgdGhpcy5vblRydWUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm9uRmFsc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnNoYWtlVHlwZSAmJiBjaGFuZ2VzLnNoYWtlVHlwZS5jdXJyZW50VmFsdWUhPWNoYW5nZXMuc2hha2VUeXBlLnByZXZpb3VzVmFsdWUpe1xuICAgICAgaWYodGhpcy5zaGFrZU9uKXtcbiAgICAgICAgY29uc3QgcHYgPSBjaGFuZ2VzLnNoYWtlVHlwZS5wcmV2aW91c1ZhbHVlXG4gICAgICAgIGlmKCBwdiApe1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBwdilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlUeXBlKClcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnJlbW92ZVR5cGUoKSAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25GYWxzZSgpe1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2hha2UtY29uc3RhbnQnKVxuICAgIHRoaXMucmVtb3ZlVHlwZSgpXG4gICAgaWYodGhpcy50aW1lb3V0KXtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gICAgICBkZWxldGUgdGhpcy50aW1lb3V0XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlVHlwZSgpe1xuICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNoYWtlVHlwZXx8J3NoYWtlLXNsb3cnKVxuICB9XG5cbiAgYXBwbHlUeXBlKCl7XG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuc2hha2VUeXBlfHwnc2hha2Utc2xvdycpXG4gIH1cblxuICBvblRydWUoKXtcbiAgICBhZGRDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NoYWtlLWNvbnN0YW50JylcbiAgICB0aGlzLmFwcGx5VHlwZSgpXG5cbiAgICBpZiggIXRoaXMuc2hha2VDb25zdGFudCApe1xuICAgICAgdGhpcy50aW1lb3V0ID0gPGFueT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgIC8vJHNjb3BlLnNoYWtlT25Db250cm9sbGVyLnNoYWtlT24gPSBmYWxzZVxuICAgICAgICB0aGlzLm9uRmFsc2UoKVxuICAgICAgICB0aGlzLnNoYWtlVGhlbi5lbWl0KHRoaXMpXG4gICAgICB9LCB0aGlzLnNoYWtlRm9yTXMpO1xuICAgIH1cbiAgfVxufSJdfQ==