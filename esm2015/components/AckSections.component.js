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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrU2VjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQWNrU2VjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxZQUFZLEVBRVosU0FBUyxFQUNULEtBQUssRUFDTCxVQUFVLEVBR1gsTUFBTSxlQUFlLENBQUE7QUFFdEIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG1DQUFtQyxDQUFBO0FBQ25FLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQTtBQU9sRCxNQUFNLE9BQU8sV0FBVztJQTJCekIsWUFDUyxlQUErQixFQUMvQixVQUFxQjtRQURyQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7UUFDL0IsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQTVCOUIsaUdBQWlHO1FBQ3hGLFNBQUksR0FBdUIsV0FBVyxDQUFBO1FBRXRDLFdBQU0sR0FBVSxFQUFFLENBQUE7UUEyQnpCLE1BQU0sUUFBUSxHQUFHLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFBO1FBRS9DLFFBQVEsQ0FBQyxNQUFNLEdBQUksTUFBTSxDQUFBO1FBQ3pCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO0lBQzVCLENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLGNBQWM7Z0JBQ3ZCLFFBQVEsRUFBQyxNQUFNO2dCQUNmLFNBQVMsRUFBQyxDQUFFLGVBQWUsQ0FBRTtnQkFDN0IseUJBQXlCO2FBQzFCOzs7WUFSUSxlQUFlO1lBTHRCLFVBQVU7OzttQkFlVCxLQUFLO3FCQUVMLEtBQUs7b0JBRUwsWUFBWSxTQUFDLE9BQU87eUJBQ3BCLFlBQVksU0FBQyxZQUFZO3VCQUV6QixZQUFZLFNBQUMsVUFBVTsyQkFFdkIsWUFBWSxTQUFDLGNBQWM7NEJBRTNCLFlBQVksU0FBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29udGVudENoaWxkLFxuXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIEVsZW1lbnRSZWYsXG4gIFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbmltcG9ydCB7IFNlY3Rpb25Qcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrU2VjdGlvbnMucHJvdmlkZXJcIlxuaW1wb3J0IHsgc3RyaW5nIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1zZWN0aW9ucy5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fjay1zZWN0aW9ucycsXG4gIHRlbXBsYXRlOnN0cmluZyxcbiAgcHJvdmlkZXJzOlsgU2VjdGlvblByb3ZpZGVyIF1cbiAgLy8sZXhwb3J0QXM6XCJBY2tTZWN0aW9uc1wiXG59KSBleHBvcnQgY2xhc3MgQWNrU2VjdGlvbnN7XG4gIC8vY2xvbmUgaXMgbW9yZSBwZXJmb3JtYW50IGluIG1vc3QgY2FzZXMgYnV0IHRoaW5ncyBkdXBsaWNhdGUgbGlrZSByZXF1ZXN0cyBhbmQgdGltZXJzIG1heSByZXN1bHRcbiAgQElucHV0KCkgbW9kZTpcImNhbGN1bGF0ZVwifFwiY2xvbmVcIiA9IFwiY2FsY3VsYXRlXCJcblxuICBASW5wdXQoKSB6SW5kZXg6bnVtYmVyID0gMTlcbiAgXG4gIEBDb250ZW50Q2hpbGQoXCJ0YWJsZVwiKSB0YWJsZTpUZW1wbGF0ZVJlZjxhbnk+XG4gIEBDb250ZW50Q2hpbGQoXCJoZWFkZXJXcmFwXCIpIGhlYWRlcldyYXA6VGVtcGxhdGVSZWY8YW55PlxuICBcbiAgQENvbnRlbnRDaGlsZChcImJvZHlDZWxsXCIpIGJvZHlDZWxsOlRlbXBsYXRlUmVmPGFueT5cbiAgXG4gIEBDb250ZW50Q2hpbGQoXCJsZWZ0Qm9keVdyYXBcIikgbGVmdEJvZHlXcmFwOlRlbXBsYXRlUmVmPGFueT5cblxuICBAQ29udGVudENoaWxkKFwicmlnaHRCb2R5V3JhcFwiKSByaWdodEJvZHlXcmFwOlRlbXBsYXRlUmVmPGFueT5cblxuICAvL0BDb250ZW50Q2hpbGQoXCJoZWFkZXJcIikgaGVhZGVyOlRlbXBsYXRlUmVmPGFueT5cbiAgLy9AQ29udGVudENoaWxkKFwiZm9vdGVyXCIpIGZvb3RlcjpUZW1wbGF0ZVJlZjxhbnk+XG4gIC8vQENvbnRlbnRDaGlsZChcImxlZnRCb2R5XCIpIGxlZnRCb2R5OlRlbXBsYXRlUmVmPGFueT5cbiAgLy9AQ29udGVudENoaWxkKFwicmlnaHRCb2R5XCIpIHJpZ2h0Qm9keTpUZW1wbGF0ZVJlZjxhbnk+XG5cbiAgaHRtbEhlaWdodE1vZGVsOm51bWJlclxuXG4gIGhlYWRlckhlaWdodDogbnVtYmVyXG4gIGxlZnRCb2R5V2lkdGg6IG51bWJlclxuICBmb290ZXJIZWlnaHQ6IG51bWJlclxuICByaWdodEJvZHlXaWR0aDogbnVtYmVyXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIFNlY3Rpb25Qcm92aWRlcjpTZWN0aW9uUHJvdmlkZXIsXG4gICAgcHVibGljIEVsZW1lbnRSZWY6RWxlbWVudFJlZlxuICApe1xuICAgIGNvbnN0IGVsbVN0eWxlID0gRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlXG4gICAgXG4gICAgZWxtU3R5bGUuaGVpZ2h0ICA9IFwiMTAwJVwiXG4gICAgZWxtU3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICB9XG59Il19