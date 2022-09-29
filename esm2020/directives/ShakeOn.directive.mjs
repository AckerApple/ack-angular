import { 
//hasClass,
addClass, removeClass } from "./FxOn.directive";
import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
ShakeOn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ShakeOn, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ShakeOn.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ShakeOn, selector: "[shakeOn]", inputs: { shakeConstant: "shakeConstant", shakeOn: "shakeOn", shakeForMs: "shakeForMs", shakeType: "shakeType" }, outputs: { shakeThen: "shakeThen" }, exportAs: ["ShakeOn"], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ShakeOn, decorators: [{
            type: Directive,
            args: [{
                    selector: "[shakeOn]",
                    exportAs: "ShakeOn"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { shakeConstant: [{
                type: Input
            }], shakeOn: [{
                type: Input
            }], shakeForMs: [{
                type: Input
            }], shakeType: [{
                type: Input
            }], shakeThen: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2hha2VPbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9TaGFrZU9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPO0FBQ0wsV0FBVztBQUNYLFFBQVEsRUFDUixXQUFXLEVBQ1osTUFBTSxrQkFBa0IsQ0FBQTtBQUV6QixPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFBOztBQUV0QixvRUFBb0U7QUFJakUsTUFBTSxPQUFPLE9BQU87SUFnQnJCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFmNUIsa0JBQWEsR0FBRyxLQUFLLENBQUE7UUFJcEIsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFJeEMsK0VBQStFO1FBQy9FLGVBQVUsR0FBWTtZQUNwQixZQUFZLEVBQUMsWUFBWSxFQUFDLGNBQWMsRUFBQyxrQkFBa0I7WUFDM0QsZ0JBQWdCLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyxhQUFhO1lBQzdELGFBQWE7U0FDZCxDQUFBO0lBRXNDLENBQUM7SUFFeEMsUUFBUTtRQUNOLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxDQUFBO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxZQUFZLENBQUE7SUFDakQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksSUFBRSxJQUFJLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxZQUFZLElBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUU7WUFDeEgsSUFBRyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBQztnQkFDOUIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7aUJBQUk7Z0JBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ2hCO1NBQ0Y7UUFFRCxJQUFHLE9BQU8sQ0FBQyxTQUFTLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxZQUFZLElBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUM7WUFDdEYsSUFBRyxJQUFJLENBQUMsT0FBTyxFQUFDO2dCQUNkLE1BQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFBO2dCQUMxQyxJQUFJLEVBQUUsRUFBRTtvQkFDTixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7aUJBQzVDO2dCQUVELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQTthQUNqQjtpQkFBSTtnQkFDSCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7YUFDbEI7U0FDRjtJQUNILENBQUM7SUFFRCxPQUFPO1FBQ0wsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDekQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO1FBQ2pCLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLFlBQVksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDMUIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFBO1NBQ3BCO0lBQ0gsQ0FBQztJQUVELFVBQVU7UUFDUixXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsSUFBRSxZQUFZLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0lBRUQsU0FBUztRQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsU0FBUyxJQUFFLFlBQVksQ0FBQyxDQUFBO0lBQ3BFLENBQUM7SUFFRCxNQUFNO1FBQ0osUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLENBQUE7UUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO1FBRWhCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQVEsVUFBVSxDQUFDLEdBQUUsRUFBRTtnQkFDakMsMENBQTBDO2dCQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7WUFDM0IsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNyQjtJQUNILENBQUM7O29HQTlFYSxPQUFPO3dGQUFQLE9BQU87MkZBQVAsT0FBTztrQkFIdEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsV0FBVztvQkFDbkIsUUFBUSxFQUFDLFNBQVM7aUJBQ3BCO2lHQUNVLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0csT0FBTztzQkFBZixLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBQ0csU0FBUztzQkFBakIsS0FBSztnQkFDSSxTQUFTO3NCQUFsQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgLy9oYXNDbGFzcyxcbiAgYWRkQ2xhc3MsXG4gIHJlbW92ZUNsYXNzXG59IGZyb20gXCIuL0Z4T24uZGlyZWN0aXZlXCJcblxuaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG4vKiogcnVucyBzaGFrZSBpbnN0cnVjdGlvbnMgd2hlbiBjb25kaXRpb24gcmV0dXJucyBhIHRydXRoeSB2YWx1ZSAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlwiW3NoYWtlT25dXCJcbiAgLGV4cG9ydEFzOlwiU2hha2VPblwiXG59KSBleHBvcnQgY2xhc3MgU2hha2VPbiB7XG4gIEBJbnB1dCgpIHNoYWtlQ29uc3RhbnQgPSBmYWxzZVxuICBASW5wdXQoKSBzaGFrZU9uOiBhbnlcbiAgQElucHV0KCkgc2hha2VGb3JNczogYW55XG4gIEBJbnB1dCgpIHNoYWtlVHlwZTogYW55XG4gIEBPdXRwdXQoKSBzaGFrZVRoZW4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICB0aW1lb3V0PzogbnVtYmVyXG5cbiAgLy9hbiBhcnJheSB0byBiZSB1c2VkIGluICNTaGFrZU9uIHJlZnMgZm9yIGZ4IHNlbGVjdGFibGUgb3B0aW9ucyAoc2VlIGV4YW1wbGVzKVxuICBzaGFrZVR5cGVzOnN0cmluZ1tdID0gW1xuICAgICdzaGFrZS1zbG93Jywnc2hha2UtaGFyZCcsJ3NoYWtlLWxpdHRsZScsJ3NoYWtlLWhvcml6b250YWwnLFxuICAgICdzaGFrZS12ZXJ0aWNhbCcsJ3NoYWtlLXJvdGF0ZScsJ3NoYWtlLW9wYWNpdHknLCdzaGFrZS1jcmF6eScsXG4gICAgJ3NoYWtlLWNodW5rJ1xuICBdXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7fVxuXG4gIG5nT25Jbml0KCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy51cGRhdGUoKSlcbiAgfVxuXG4gIHVwZGF0ZSgpe1xuICAgIHRoaXMuc2hha2VGb3JNcyA9IHRoaXMuc2hha2VGb3JNcyB8fCAyMDAwXG4gICAgdGhpcy5zaGFrZVR5cGUgPSB0aGlzLnNoYWtlVHlwZSB8fCAnc2hha2Utc2xvdydcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG4gICAgaWYgKGNoYW5nZXMuc2hha2VPbiAmJiBjaGFuZ2VzLnNoYWtlT24uY3VycmVudFZhbHVlIT1udWxsICYmIGNoYW5nZXMuc2hha2VPbi5jdXJyZW50VmFsdWUhPWNoYW5nZXMuc2hha2VPbi5wcmV2aW91c1ZhbHVlKSB7XG4gICAgICBpZihjaGFuZ2VzLnNoYWtlT24uY3VycmVudFZhbHVlKXtcbiAgICAgICAgdGhpcy5vblRydWUoKTtcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm9uRmFsc2UoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZihjaGFuZ2VzLnNoYWtlVHlwZSAmJiBjaGFuZ2VzLnNoYWtlVHlwZS5jdXJyZW50VmFsdWUhPWNoYW5nZXMuc2hha2VUeXBlLnByZXZpb3VzVmFsdWUpe1xuICAgICAgaWYodGhpcy5zaGFrZU9uKXtcbiAgICAgICAgY29uc3QgcHYgPSBjaGFuZ2VzLnNoYWtlVHlwZS5wcmV2aW91c1ZhbHVlXG4gICAgICAgIGlmKCBwdiApe1xuICAgICAgICAgIHJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBwdilcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXBwbHlUeXBlKClcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLnJlbW92ZVR5cGUoKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRmFsc2UoKXtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3NoYWtlLWNvbnN0YW50JylcbiAgICB0aGlzLnJlbW92ZVR5cGUoKVxuICAgIGlmKHRoaXMudGltZW91dCl7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KVxuICAgICAgZGVsZXRlIHRoaXMudGltZW91dFxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVR5cGUoKXtcbiAgICByZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5zaGFrZVR5cGV8fCdzaGFrZS1zbG93JylcbiAgfVxuXG4gIGFwcGx5VHlwZSgpe1xuICAgIGFkZENsYXNzKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCB0aGlzLnNoYWtlVHlwZXx8J3NoYWtlLXNsb3cnKVxuICB9XG5cbiAgb25UcnVlKCl7XG4gICAgYWRkQ2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdzaGFrZS1jb25zdGFudCcpXG4gICAgdGhpcy5hcHBseVR5cGUoKVxuXG4gICAgaWYoICF0aGlzLnNoYWtlQ29uc3RhbnQgKXtcbiAgICAgIHRoaXMudGltZW91dCA9IDxhbnk+c2V0VGltZW91dCgoKT0+e1xuICAgICAgICAvLyRzY29wZS5zaGFrZU9uQ29udHJvbGxlci5zaGFrZU9uID0gZmFsc2VcbiAgICAgICAgdGhpcy5vbkZhbHNlKClcbiAgICAgICAgdGhpcy5zaGFrZVRoZW4uZW1pdCh0aGlzKVxuICAgICAgfSwgdGhpcy5zaGFrZUZvck1zKTtcbiAgICB9XG4gIH1cbn0iXX0=