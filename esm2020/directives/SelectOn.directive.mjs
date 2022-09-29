import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
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
SelectOn.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SelectOn, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
SelectOn.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: SelectOn, selector: "[selectOn]", inputs: { selectOn: "selectOn", selectOnDelay: "selectOnDelay" }, outputs: { selectThen: "selectThen" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SelectOn, decorators: [{
            type: Directive,
            args: [{
                    selector: '[selectOn]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { selectOn: [{
                type: Input
            }], selectOnDelay: [{
                type: Input
            }], selectThen: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0T24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU2VsZWN0T24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBRWIsTUFBTSxlQUFlLENBQUE7O0FBSW5CLE1BQU0sT0FBTyxRQUFRO0lBS3RCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFINUIsa0JBQWEsR0FBRyxDQUFDLENBQUE7UUFDaEIsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFFRixDQUFDO0lBRXhDLFdBQVcsQ0FBQyxPQUFZO1FBQ3RCLElBQUcsT0FBTyxDQUFDLFFBQVEsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBQztZQUNuRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUcsQ0FBQyxFQUFFO2dCQUMxQixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsVUFBVSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbkQ7SUFDSCxDQUFDO0lBRUQsTUFBTTtRQUNKLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7cUdBbkJhLFFBQVE7eUZBQVIsUUFBUTsyRkFBUixRQUFRO2tCQUZ2QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBQyxZQUFZO2lCQUN0QjtpR0FDVSxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLGFBQWE7c0JBQXJCLEtBQUs7Z0JBQ0ksVUFBVTtzQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbc2VsZWN0T25dJ1xufSkgZXhwb3J0IGNsYXNzIFNlbGVjdE9ue1xuICBASW5wdXQoKSBzZWxlY3RPbjogYW55XG4gIEBJbnB1dCgpIHNlbGVjdE9uRGVsYXkgPSAwXG4gIEBPdXRwdXQoKSBzZWxlY3RUaGVuID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IGFueSl7XG4gICAgaWYoY2hhbmdlcy5zZWxlY3RPbiAmJiBjaGFuZ2VzLnNlbGVjdE9uLmN1cnJlbnRWYWx1ZSl7XG4gICAgICBpZiggdGhpcy5zZWxlY3RPbkRlbGF5PT09MCApe1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnVwZGF0ZSgpKVxuICAgICAgfVxuICAgICAgc2V0VGltZW91dCgoKT0+dGhpcy51cGRhdGUoKSwgdGhpcy5zZWxlY3RPbkRlbGF5KTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKXtcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zZWxlY3QoKTtcbiAgICB0aGlzLnNlbGVjdFRoZW4uZW1pdCgpO1xuICB9XG59XG4iXX0=