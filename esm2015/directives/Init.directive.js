import { Directive, Output, EventEmitter } from "@angular/core";
export class InitDirective {
    constructor() {
        this.init = new EventEmitter();
    }
    ngOnInit() {
        this.init.emit();
    }
}
InitDirective.decorators = [
    { type: Directive, args: [{
                selector: '[init]'
            },] }
];
InitDirective.propDecorators = {
    init: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5pdC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9Jbml0LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFJbkIsTUFBTSxPQUFPLGFBQWE7SUFGN0I7UUFHWSxTQUFJLEdBQXVCLElBQUksWUFBWSxFQUFFLENBQUE7SUFLekQsQ0FBQztJQUhDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2xCLENBQUM7OztZQVBGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsUUFBUTthQUNsQjs7O21CQUNFLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOidbaW5pdF0nXG59KSBleHBvcnQgY2xhc3MgSW5pdERpcmVjdGl2ZSB7XG4gIEBPdXRwdXQoKSBpbml0OiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBuZ09uSW5pdCgpe1xuICAgIHRoaXMuaW5pdC5lbWl0KClcbiAgfVxufVxuIl19