import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import { string as ackOptionsModal } from "./templates/ack-options-modal.pug";
export class AckOptionsModal extends AckOptions {
    constructor() {
        super(...arguments);
        //one way binds
        this.allowClose = true;
        //one way expressions
        this.close = new EventEmitter();
        this.backgroundColorChange = new EventEmitter();
        this.showModel = true;
        this.showModelChange = new EventEmitter();
    }
    fireModelChange(model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    }
}
AckOptionsModal.decorators = [
    { type: Component, args: [{
                selector: 'ack-options-modal',
                template: ackOptionsModal
            },] }
];
AckOptionsModal.propDecorators = {
    allowClose: [{ type: Input }],
    wrapStyle: [{ type: Input }],
    wrapCellStyle: [{ type: Input }],
    close: [{ type: Output }],
    backgroundColor: [{ type: Input }],
    backgroundColorChange: [{ type: Output }],
    showModel: [{ type: Input }],
    showModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrT3B0aW9uc01vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0Fja09wdGlvbnNNb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sd0JBQXdCLENBQUE7QUFFbkQsT0FBTyxFQUFFLE1BQU0sSUFBSSxlQUFlLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUkxRSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxVQUFVO0lBSGxEOztRQU9FLGVBQWU7UUFDTixlQUFVLEdBQVcsSUFBSSxDQUFBO1FBSWxDLHFCQUFxQjtRQUNYLFVBQUssR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUk1QywwQkFBcUIsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUM3RCxjQUFTLEdBQVcsSUFBSSxDQUFBO1FBQ3ZCLG9CQUFlLEdBQXlCLElBQUksWUFBWSxFQUFFLENBQUE7SUFNdEUsQ0FBQztJQUpDLGVBQWUsQ0FBQyxLQUFLO1FBQ25CLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUTtZQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUE7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDOUIsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMsbUJBQW1CO2dCQUM1QixRQUFRLEVBQUMsZUFBZTthQUN6Qjs7O3lCQUtFLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLO29CQUdMLE1BQU07OEJBR04sS0FBSztvQ0FDTCxNQUFNO3dCQUNOLEtBQUs7OEJBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IEFja09wdGlvbnMgfSBmcm9tIFwiLi9BY2tPcHRpb25zLmNvbXBvbmVudFwiXG5cbmltcG9ydCB7IHN0cmluZyBhcyBhY2tPcHRpb25zTW9kYWwgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYWNrLW9wdGlvbnMtbW9kYWwucHVnXCJcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjonYWNrLW9wdGlvbnMtbW9kYWwnLFxuICB0ZW1wbGF0ZTphY2tPcHRpb25zTW9kYWxcbn0pIGV4cG9ydCBjbGFzcyBBY2tPcHRpb25zTW9kYWwgZXh0ZW5kcyBBY2tPcHRpb25ze1xuICAvL2Fja01vZGFsXG4gIGFja09wdGlvbnM6QWNrT3B0aW9uc1xuICBcbiAgLy9vbmUgd2F5IGJpbmRzXG4gIEBJbnB1dCgpIGFsbG93Q2xvc2U6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgd3JhcFN0eWxlOmFueVxuICBASW5wdXQoKSB3cmFwQ2VsbFN0eWxlOmFueVxuICBcbiAgLy9vbmUgd2F5IGV4cHJlc3Npb25zXG4gIEBPdXRwdXQoKSBjbG9zZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBcbiAgLy90d28gd2F5IGJpbmRzXG4gIEBJbnB1dCgpIGJhY2tncm91bmRDb2xvcjphbnlcbiAgQE91dHB1dCgpIGJhY2tncm91bmRDb2xvckNoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBASW5wdXQoKSBzaG93TW9kZWw6Ym9vbGVhbiA9IHRydWVcbiAgQE91dHB1dCgpIHNob3dNb2RlbENoYW5nZTpFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBmaXJlTW9kZWxDaGFuZ2UobW9kZWwpe1xuICAgIGlmKCF0aGlzLm11bHRpcGxlKXRoaXMuY2xvc2UuZW1pdCgpXG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KG1vZGVsKVxuICB9XG59XG4iXX0=