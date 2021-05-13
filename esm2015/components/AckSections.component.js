import { ContentChild, Component, Input, ElementRef } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
import { string } from "./templates/ack-sections.pug";
export class AckSections {
    constructor(SectionProvider, ElementRef) {
        this.SectionProvider = SectionProvider;
        this.ElementRef = ElementRef;
        //clone is more performant in most cases but things duplicate like requests and timers may result
        this.mode = "calculate";
        this.zIndex = 19;
        const elmStyle = ElementRef.nativeElement.style;
        elmStyle.height = "100%";
        elmStyle.display = "block";
    }
}
AckSections.decorators = [
    { type: Component, args: [{
                selector: 'ack-sections',
                template: string,
                providers: [SectionProvider]
                //,exportAs:"AckSections"
            },] }
];
AckSections.ctorParameters = () => [
    { type: SectionProvider },
    { type: ElementRef }
];
AckSections.propDecorators = {
    mode: [{ type: Input }],
    zIndex: [{ type: Input }],
    table: [{ type: ContentChild, args: ["table",] }],
    headerWrap: [{ type: ContentChild, args: ["headerWrap",] }],
    bodyCell: [{ type: ContentChild, args: ["bodyCell",] }],
    leftBodyWrap: [{ type: ContentChild, args: ["leftBodyWrap",] }],
    rightBodyWrap: [{ type: ContentChild, args: ["rightBodyWrap",] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrU2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWNrU2VjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBRVosU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBR1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQU9sRCxNQUFNLE9BQU8sV0FBVztJQXdCekIsWUFDUyxlQUErQixFQUMvQixVQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXpCOUIsaUdBQWlHO1FBQ3hGLFNBQUksR0FBdUIsV0FBVyxDQUFBO1FBRXRDLFdBQU0sR0FBVSxFQUFFLENBQUE7UUF3QnpCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFBO1FBRS9DLFFBQVEsQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFBO1FBQ3pCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzVCLENBQUM7OztZQXJDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGNBQWM7Z0JBQ3ZCLFFBQVEsRUFBQyxNQUFNO2dCQUNmLFNBQVMsRUFBQyxDQUFFLGVBQWUsQ0FBRTtnQkFDN0IseUJBQXlCO2FBQzFCOzs7WUFSUSxlQUFlO1lBTHRCLFVBQVU7OzttQkFlVCxLQUFLO3FCQUVMLEtBQUs7b0JBRUwsWUFBWSxTQUFDLE9BQU87eUJBQ3BCLFlBQVksU0FBQyxZQUFZO3VCQUN6QixZQUFZLFNBQUMsVUFBVTsyQkFDdkIsWUFBWSxTQUFDLGNBQWM7NEJBQzNCLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG5cbiAgVGVtcGxhdGVSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBTZWN0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja1NlY3Rpb25zLnByb3ZpZGVyXCJcbmltcG9ydCB7IHN0cmluZyB9IGZyb20gXCIuL3RlbXBsYXRlcy9hY2stc2VjdGlvbnMucHVnXCJcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidhY2stc2VjdGlvbnMnLFxuICB0ZW1wbGF0ZTpzdHJpbmcsXG4gIHByb3ZpZGVyczpbIFNlY3Rpb25Qcm92aWRlciBdXG4gIC8vLGV4cG9ydEFzOlwiQWNrU2VjdGlvbnNcIlxufSkgZXhwb3J0IGNsYXNzIEFja1NlY3Rpb25ze1xuICAvL2Nsb25lIGlzIG1vcmUgcGVyZm9ybWFudCBpbiBtb3N0IGNhc2VzIGJ1dCB0aGluZ3MgZHVwbGljYXRlIGxpa2UgcmVxdWVzdHMgYW5kIHRpbWVycyBtYXkgcmVzdWx0XG4gIEBJbnB1dCgpIG1vZGU6XCJjYWxjdWxhdGVcInxcImNsb25lXCIgPSBcImNhbGN1bGF0ZVwiXG5cbiAgQElucHV0KCkgekluZGV4Om51bWJlciA9IDE5XG5cbiAgQENvbnRlbnRDaGlsZChcInRhYmxlXCIpIHRhYmxlITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKFwiaGVhZGVyV3JhcFwiKSBoZWFkZXJXcmFwITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKFwiYm9keUNlbGxcIikgYm9keUNlbGwhOiBUZW1wbGF0ZVJlZjxhbnk+XG4gIEBDb250ZW50Q2hpbGQoXCJsZWZ0Qm9keVdyYXBcIikgbGVmdEJvZHlXcmFwITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKFwicmlnaHRCb2R5V3JhcFwiKSByaWdodEJvZHlXcmFwITogVGVtcGxhdGVSZWY8YW55PlxuXG4gIC8vQENvbnRlbnRDaGlsZChcImhlYWRlclwiKSBoZWFkZXI6VGVtcGxhdGVSZWY8YW55PlxuICAvL0BDb250ZW50Q2hpbGQoXCJmb290ZXJcIikgZm9vdGVyOlRlbXBsYXRlUmVmPGFueT5cbiAgLy9AQ29udGVudENoaWxkKFwibGVmdEJvZHlcIikgbGVmdEJvZHk6VGVtcGxhdGVSZWY8YW55PlxuICAvL0BDb250ZW50Q2hpbGQoXCJyaWdodEJvZHlcIikgcmlnaHRCb2R5OlRlbXBsYXRlUmVmPGFueT5cblxuICBodG1sSGVpZ2h0TW9kZWwhOiBudW1iZXJcblxuICBoZWFkZXJIZWlnaHQhOiBudW1iZXJcbiAgbGVmdEJvZHlXaWR0aCE6IG51bWJlclxuICBmb290ZXJIZWlnaHQhOiBudW1iZXJcbiAgcmlnaHRCb2R5V2lkdGghOiBudW1iZXJcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgU2VjdGlvblByb3ZpZGVyOlNlY3Rpb25Qcm92aWRlcixcbiAgICBwdWJsaWMgRWxlbWVudFJlZjpFbGVtZW50UmVmXG4gICl7XG4gICAgY29uc3QgZWxtU3R5bGUgPSBFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuc3R5bGVcblxuICAgIGVsbVN0eWxlLmhlaWdodCAgPSBcIjEwMCVcIlxuICAgIGVsbVN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCJcbiAgfVxufSJdfQ==