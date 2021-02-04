import { Directive, Output, EventEmitter } from "@angular/core";
export class Init {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
}
Init.decorators = [
    { type: Directive, args: [{
                selector: '[init]'
            },] }
];
Init.propDecorators = {
    init: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9Jbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFJbkIsTUFBTSxPQUFPLElBQUk7SUFGcEI7UUFHWSxTQUFJLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUtyQyxDQUFDO0lBSEMsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDbEIsQ0FBQzs7O1lBUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBQyxRQUFRO2FBQ2xCOzs7bUJBQ0UsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6J1tpbml0XSdcbn0pIGV4cG9ydCBjbGFzcyBJbml0e1xuICBAT3V0cHV0KCkgaW5pdCA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIG5nT25Jbml0KCl7XG4gICAgdGhpcy5pbml0LmVtaXQoKVxuICB9XG59XG4iXX0=