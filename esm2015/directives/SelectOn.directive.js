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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VsZWN0T24uZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvU2VsZWN0T24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFBO0FBSW5CLE1BQU0sT0FBTyxRQUFRO0lBS3RCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFINUIsa0JBQWEsR0FBQyxDQUFDLENBQUE7UUFDZCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUVGLENBQUM7SUFFeEMsV0FBVyxDQUFDLE9BQU87UUFDakIsSUFBRyxPQUFPLENBQUMsUUFBUSxJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFDO1lBQ25ELElBQUksSUFBSSxDQUFDLGFBQWEsS0FBRyxDQUFDLEVBQUU7Z0JBQzFCLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7YUFDMUM7WUFDRCxVQUFVLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCxNQUFNO1FBQ0osSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxZQUFZO2FBQ3RCOzs7WUFMQyxVQUFVOzs7dUJBTVQsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjonW3NlbGVjdE9uXSdcbn0pIGV4cG9ydCBjbGFzcyBTZWxlY3RPbntcbiAgQElucHV0KCkgc2VsZWN0T25cbiAgQElucHV0KCkgc2VsZWN0T25EZWxheT0wXG4gIEBPdXRwdXQoKSBzZWxlY3RUaGVuID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7fVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXMpe1xuICAgIGlmKGNoYW5nZXMuc2VsZWN0T24gJiYgY2hhbmdlcy5zZWxlY3RPbi5jdXJyZW50VmFsdWUpe1xuICAgICAgaWYoIHRoaXMuc2VsZWN0T25EZWxheT09PTAgKXtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy51cGRhdGUoKSlcbiAgICAgIH1cbiAgICAgIHNldFRpbWVvdXQoKCk9PnRoaXMudXBkYXRlKCksIHRoaXMuc2VsZWN0T25EZWxheSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlKCl7XG4gICAgdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2VsZWN0KCk7XG4gICAgdGhpcy5zZWxlY3RUaGVuLmVtaXQoKTsgICAgXG4gIH1cbn1cbiJdfQ==