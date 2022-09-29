import { Directive, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class InitDirective {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
}
InitDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InitDirective, deps: [], target: i0.ɵɵFactoryTarget.Directive });
InitDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: InitDirective, selector: "[init]", outputs: { init: "init" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: InitDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[init]'
                }]
        }], propDecorators: { init: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9Jbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7O0FBSW5CLE1BQU0sT0FBTyxhQUFhO0lBRjdCO1FBR1ksU0FBSSxHQUF1QixJQUFJLFlBQVksRUFBRSxDQUFBO0tBS3hEO0lBSEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEIsQ0FBQzs7MEdBTGEsYUFBYTs4RkFBYixhQUFhOzJGQUFiLGFBQWE7a0JBRjVCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFDLFFBQVE7aUJBQ2xCOzhCQUNXLElBQUk7c0JBQWIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tpbml0XSdcbn0pIGV4cG9ydCBjbGFzcyBJbml0RGlyZWN0aXZlIHtcbiAgQE91dHB1dCgpIGluaXQ6IEV2ZW50RW1pdHRlcjx2b2lkPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5pbml0LmVtaXQoKVxuICB9XG59XG4iXX0=