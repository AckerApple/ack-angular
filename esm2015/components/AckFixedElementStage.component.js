import { ElementRef, Component } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import { string } from "./templates/ack-fixed-element-stage.pug";
export class AckFixedElementStage {
    constructor(AckApp, ElementRef) {
        this.AckApp = AckApp;
        this.ElementRef = ElementRef;
        AckApp.fixedElementStage = ElementRef;
    }
}
AckFixedElementStage.decorators = [
    { type: Component, args: [{
                selector: 'ack-fixed-element-stage',
                template: string
            },] }
];
AckFixedElementStage.ctorParameters = () => [
    { type: AckApp },
    { type: ElementRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrRml4ZWRFbGVtZW50U3RhZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWNrRml4ZWRFbGVtZW50U3RhZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3JELE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQUVyRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0seUNBQXlDLENBQUE7QUFLN0QsTUFBTSxPQUFPLG9CQUFvQjtJQUNsQyxZQUNTLE1BQWEsRUFDYixVQUFxQjtRQURyQixXQUFNLEdBQU4sTUFBTSxDQUFPO1FBQ2IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUU1QixNQUFNLENBQUMsaUJBQWlCLEdBQUcsVUFBVSxDQUFBO0lBQ3ZDLENBQUM7OztZQVRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUMseUJBQXlCO2dCQUNsQyxRQUFRLEVBQUMsTUFBTTthQUNoQjs7O1lBUFEsTUFBTTtZQUROLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50UmVmLCBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBBY2tBcHAgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja0FwcC5wcm92aWRlclwiXG5cbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stZml4ZWQtZWxlbWVudC1zdGFnZS5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1maXhlZC1lbGVtZW50LXN0YWdlJyxcbiAgdGVtcGxhdGU6c3RyaW5nXG59KSBleHBvcnQgY2xhc3MgQWNrRml4ZWRFbGVtZW50U3RhZ2V7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBBY2tBcHA6QWNrQXBwLFxuICAgIHB1YmxpYyBFbGVtZW50UmVmOkVsZW1lbnRSZWZcbiAgKXtcbiAgICBBY2tBcHAuZml4ZWRFbGVtZW50U3RhZ2UgPSBFbGVtZW50UmVmXG4gIH1cbn0iXX0=