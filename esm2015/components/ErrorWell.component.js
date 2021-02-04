import { EventEmitter, Output, Input, ContentChild, Component } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
export class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    }
    getErrorMessage(error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    }
}
ErrorWell.decorators = [
    { type: Component, args: [{
                selector: 'error-well',
                template: errorWell,
                animations: animations
            },] }
];
ErrorWell.propDecorators = {
    moreDetails: [{ type: Input }],
    message: [{ type: Input }],
    error: [{ type: Input }],
    cssClasses: [{ type: Input }],
    closable: [{ type: Input }],
    allowDetails: [{ type: Input }],
    close: [{ type: Output }],
    titleFooter: [{ type: ContentChild, args: ["titleFooter",] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXJyb3JXZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Vycm9yV2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFlBQVksRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUMzQixZQUFZLEVBQUUsU0FBUyxFQUN4QixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDM0MsT0FBTyxFQUFFLE1BQU0sSUFBSSxTQUFTLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQU03RCxNQUFNLE9BQU8sU0FBUztJQUp6QjtRQVFXLFlBQU8sR0FBVSwwQkFBMEIsQ0FBQTtRQUczQyxhQUFRLEdBQVcsSUFBSSxDQUFBO1FBQ3ZCLGlCQUFZLEdBQVcsSUFBSSxDQUFBO1FBQzFCLFVBQUssR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQWN6RCxDQUFDO0lBWEMsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSw0Q0FBNEMsQ0FBQTtJQUNuRixDQUFDO0lBRUQsZUFBZSxDQUFFLEtBQVc7UUFDMUIsSUFBRyxDQUFDLEtBQUs7WUFBQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUE7UUFFN0IsSUFBRyxPQUFPLEtBQUssSUFBRSxRQUFRO1lBQUMsT0FBTyxLQUFLLENBQUE7UUFFdEMsT0FBTyxLQUFLLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFBO0lBQzdELENBQUM7OztZQTFCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLFlBQVk7Z0JBQ3JCLFFBQVEsRUFBQyxTQUFTO2dCQUNsQixVQUFVLEVBQUMsVUFBVTthQUN0Qjs7OzBCQUdFLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3lCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO29CQUNMLE1BQU07MEJBQ04sWUFBWSxTQUFDLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFdmVudEVtaXR0ZXIsIE91dHB1dCwgSW5wdXQsXG4gIENvbnRlbnRDaGlsZCwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBhbmltYXRpb25zIH0gZnJvbSBcImFjay1hbmd1bGFyLWZ4XCJcbmltcG9ydCB7IHN0cmluZyBhcyBlcnJvcldlbGwgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvZXJyb3Itd2VsbC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Vycm9yLXdlbGwnLFxuICB0ZW1wbGF0ZTplcnJvcldlbGwsXG4gIGFuaW1hdGlvbnM6YW5pbWF0aW9uc1xufSkgZXhwb3J0IGNsYXNzIEVycm9yV2VsbHtcbiAgZXJyb3JDbG9zZVxuXG4gIEBJbnB1dCgpIG1vcmVEZXRhaWxzOmJvb2xlYW4vL3Nob3cgbW9yZSBkZXRhaWxzXG4gIEBJbnB1dCgpIG1lc3NhZ2U6c3RyaW5nID0gJ1VuZXhwZWN0ZWQgRXJyb3IgT2NjdXJlZCdcbiAgQElucHV0KCkgZXJyb3I6RXJyb3JcbiAgQElucHV0KCkgY3NzQ2xhc3NlczpzdHJpbmdcbiAgQElucHV0KCkgY2xvc2FibGU6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgYWxsb3dEZXRhaWxzOmJvb2xlYW4gPSB0cnVlXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgQENvbnRlbnRDaGlsZChcInRpdGxlRm9vdGVyXCIpIHRpdGxlRm9vdGVyOlRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNzc0NsYXNzZXMgPSB0aGlzLmNzc0NsYXNzZXMgfHwgJ2JnLWRhbmdlciBib3JkZXIgYm9yZGVyLWRhbmdlciB0ZXh0LWRhbmdlcidcbiAgfVxuXG4gIGdldEVycm9yTWVzc2FnZSggZXJyb3I6RXJyb3IgKXtcbiAgICBpZighZXJyb3IpcmV0dXJuIHRoaXMubWVzc2FnZVxuICAgIFxuICAgIGlmKHR5cGVvZiBlcnJvcj09J3N0cmluZycpcmV0dXJuIGVycm9yXG5cbiAgICByZXR1cm4gZXJyb3IubWVzc2FnZSB8fCBlcnJvcltcInN0YXR1c1RleHRcIl0gfHwgdGhpcy5tZXNzYWdlXG4gIH1cbn0iXX0=