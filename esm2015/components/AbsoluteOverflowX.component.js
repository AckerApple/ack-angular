import { ElementRef, Component, Input } from "@angular/core";
import { string } from "./templates/absolute-overflow-x.pug";
export class AbsoluteOverflowX {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.active = true;
        this.overflow = 'auto';
    }
    ngOnInit() {
        this.checkDisplay();
    }
    ngOnChanges(changes) {
        if (changes.active) {
            this.checkDisplay();
        }
    }
    ngAfterViewInit() {
        this.ElementRef.nativeElement.style.display = 'block';
    }
    checkDisplay() {
        this.ElementRef.nativeElement.style.position = this.active ? 'relative' : 'static';
    }
}
AbsoluteOverflowX.decorators = [
    { type: Component, args: [{
                selector: 'absolute-overflow-x',
                template: string
            },] }
];
AbsoluteOverflowX.ctorParameters = () => [
    { type: ElementRef }
];
AbsoluteOverflowX.propDecorators = {
    scrollBars: [{ type: Input }],
    wrapClass: [{ type: Input }],
    active: [{ type: Input }],
    overflow: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvQWJzb2x1dGVPdmVyZmxvd1guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFDN0IsTUFBTSxlQUFlLENBQUE7QUFDdEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLHFDQUFxQyxDQUFBO0FBS3pELE1BQU0sT0FBTyxpQkFBaUI7SUFPL0IsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUgvQixXQUFNLEdBQWUsSUFBSSxDQUFBO1FBQ3pCLGFBQVEsR0FBbUMsTUFBTSxDQUFBO0lBRWhCLENBQUM7SUFFM0MsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRUQsV0FBVyxDQUFFLE9BQU87UUFDbEIsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQTtTQUNwQjtJQUNILENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7SUFDdkQsQ0FBQztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFBO0lBQ3BGLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLHFCQUFxQjtnQkFDOUIsUUFBUSxFQUFDLE1BQU07YUFDaEI7OztZQVBDLFVBQVU7Ozt5QkFTVCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRWxlbWVudFJlZiwgQ29tcG9uZW50LCBJbnB1dFxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBzdHJpbmcgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYWJzb2x1dGUtb3ZlcmZsb3cteC5wdWdcIlxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6J2Fic29sdXRlLW92ZXJmbG93LXgnLFxuICB0ZW1wbGF0ZTpzdHJpbmdcbn0pIGV4cG9ydCBjbGFzcyBBYnNvbHV0ZU92ZXJmbG93WHtcbiAgZWxlbWVudEhlaWdodE1vZGVsOm51bWJlclxuICBASW5wdXQoKSBzY3JvbGxCYXJzOmJvb2xlYW58YW55XG4gIEBJbnB1dCgpIHdyYXBDbGFzc1xuICBASW5wdXQoKSBhY3RpdmU6Ym9vbGVhbnxhbnkgPSB0cnVlXG4gIEBJbnB1dCgpIG92ZXJmbG93OidhdXRvJ3wnbm9uZSd8J2hpZGRlbid8J3Njcm9sbCcgPSAnYXV0bydcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgRWxlbWVudFJlZjpFbGVtZW50UmVmKXt9XG5cbiAgbmdPbkluaXQoKXtcbiAgICB0aGlzLmNoZWNrRGlzcGxheSgpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyggY2hhbmdlcyApe1xuICAgIGlmKCBjaGFuZ2VzLmFjdGl2ZSApe1xuICAgICAgdGhpcy5jaGVja0Rpc3BsYXkoKVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMuRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXG4gIH1cbiAgXG4gIGNoZWNrRGlzcGxheSgpe1xuICAgIHRoaXMuRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gdGhpcy5hY3RpdmUgPyAncmVsYXRpdmUnIDogJ3N0YXRpYydcbiAgfVxufSJdfQ==