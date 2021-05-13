import { Directive, ContentChild } from "@angular/core";
import { SectionProvider } from "../providers/AckSections.provider";
export class AckSectionTemplates {
    constructor(SectionProvider) {
        this.SectionProvider = SectionProvider;
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            this.check();
            this.inited = true;
        });
    }
    ngOnChanges() {
        if (this.inited) {
            this.check();
        }
    }
    check() {
        if (this.pushed)
            return;
        if (this.header) {
            this.SectionProvider.headerTemplates.unshift(this.header);
        }
        if (this.footer) {
            this.SectionProvider.footerTemplates.unshift(this.footer);
        }
        if (this.leftBody) {
            this.SectionProvider.leftBodyTemplates.unshift(this.leftBody);
        }
        if (this.rightBody) {
            this.SectionProvider.rightBodyTemplates.unshift(this.rightBody);
        }
        this.pushed = true;
    }
    ngOnDestroy() {
        Promise.resolve().then(() => this.unregister());
    }
    unregister() {
        this.pushed = false;
        this.SectionProvider.unregisterHeaderTemplate(this.header);
        this.SectionProvider.unregisterFooterTemplate(this.footer);
        this.SectionProvider.unregisterTemplate(this.leftBody);
        this.SectionProvider.unregisterTemplate(this.rightBody);
    }
}
AckSectionTemplates.decorators = [
    { type: Directive, args: [{
                selector: "ack-section-templates"
            },] }
];
AckSectionTemplates.ctorParameters = () => [
    { type: SectionProvider }
];
AckSectionTemplates.propDecorators = {
    header: [{ type: ContentChild, args: ['sectionHeader',] }],
    footer: [{ type: ContentChild, args: ['sectionFooter',] }],
    leftBody: [{ type: ContentChild, args: ['sectionLeftBody',] }],
    rightBody: [{ type: ContentChild, args: ['sectionRightBody',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrU2VjdGlvblRlbXBsYXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2tTZWN0aW9uVGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTtBQUNwRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sbUNBQW1DLENBQUE7QUFJaEUsTUFBTSxPQUFPLG1CQUFtQjtJQVNqQyxZQUNTLGVBQStCO1FBQS9CLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtJQUN0QyxDQUFDO0lBRUgsZUFBZTtRQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQTtZQUNaLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7U0FDYjtJQUNILENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxJQUFJLENBQUMsTUFBTTtZQUFFLE9BQU07UUFFdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQTtTQUM1RDtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUE7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFBO1NBQ2hFO1FBRUQsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQTtTQUNsRTtRQUVELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQTtJQUMvQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ25CLElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsd0JBQXdCLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO1FBQzVELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBRSxDQUFBO1FBQ3hELElBQUksQ0FBQyxlQUFlLENBQUMsa0JBQWtCLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxDQUFBO0lBQzNELENBQUM7OztZQTVERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFDLHVCQUF1QjthQUNqQzs7O1lBSlEsZUFBZTs7O3FCQVFyQixZQUFZLFNBQUMsZUFBZTtxQkFDNUIsWUFBWSxTQUFDLGVBQWU7dUJBQzVCLFlBQVksU0FBQyxpQkFBaUI7d0JBQzlCLFlBQVksU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5pbXBvcnQgeyBTZWN0aW9uUHJvdmlkZXIgfSBmcm9tIFwiLi4vcHJvdmlkZXJzL0Fja1NlY3Rpb25zLnByb3ZpZGVyXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlwiYWNrLXNlY3Rpb24tdGVtcGxhdGVzXCJcbn0pIGV4cG9ydCBjbGFzcyBBY2tTZWN0aW9uVGVtcGxhdGVze1xuICBpbml0ZWQhOiBib29sZWFuXG4gIHB1c2hlZCE6IGJvb2xlYW5cblxuICBAQ29udGVudENoaWxkKCdzZWN0aW9uSGVhZGVyJykgaGVhZGVyITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKCdzZWN0aW9uRm9vdGVyJykgZm9vdGVyITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKCdzZWN0aW9uTGVmdEJvZHknKSBsZWZ0Qm9keSE6IFRlbXBsYXRlUmVmPGFueT5cbiAgQENvbnRlbnRDaGlsZCgnc2VjdGlvblJpZ2h0Qm9keScpIHJpZ2h0Qm9keSE6IFRlbXBsYXRlUmVmPGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgU2VjdGlvblByb3ZpZGVyOlNlY3Rpb25Qcm92aWRlclxuICApe31cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLmNoZWNrKClcbiAgICAgIHRoaXMuaW5pdGVkID0gdHJ1ZVxuICAgIH0pXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpe1xuICAgIGlmKCB0aGlzLmluaXRlZCApe1xuICAgICAgdGhpcy5jaGVjaygpXG4gICAgfVxuICB9XG5cbiAgY2hlY2soKXtcbiAgICBpZiggdGhpcy5wdXNoZWQgKXJldHVyblxuXG4gICAgaWYoIHRoaXMuaGVhZGVyICl7XG4gICAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci5oZWFkZXJUZW1wbGF0ZXMudW5zaGlmdCggdGhpcy5oZWFkZXIgKVxuICAgIH1cblxuICAgIGlmKCB0aGlzLmZvb3RlciApe1xuICAgICAgdGhpcy5TZWN0aW9uUHJvdmlkZXIuZm9vdGVyVGVtcGxhdGVzLnVuc2hpZnQoIHRoaXMuZm9vdGVyIClcbiAgICB9XG5cbiAgICBpZiggdGhpcy5sZWZ0Qm9keSApe1xuICAgICAgdGhpcy5TZWN0aW9uUHJvdmlkZXIubGVmdEJvZHlUZW1wbGF0ZXMudW5zaGlmdCggdGhpcy5sZWZ0Qm9keSApXG4gICAgfVxuXG4gICAgaWYoIHRoaXMucmlnaHRCb2R5ICl7XG4gICAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci5yaWdodEJvZHlUZW1wbGF0ZXMudW5zaGlmdCggdGhpcy5yaWdodEJvZHkgKVxuICAgIH1cblxuICAgIHRoaXMucHVzaGVkID0gdHJ1ZVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnVucmVnaXN0ZXIoKSlcbiAgfVxuXG4gIHVucmVnaXN0ZXIoKXtcbiAgICB0aGlzLnB1c2hlZCA9IGZhbHNlXG4gICAgdGhpcy5TZWN0aW9uUHJvdmlkZXIudW5yZWdpc3RlckhlYWRlclRlbXBsYXRlKCB0aGlzLmhlYWRlciApXG4gICAgdGhpcy5TZWN0aW9uUHJvdmlkZXIudW5yZWdpc3RlckZvb3RlclRlbXBsYXRlKCB0aGlzLmZvb3RlciApXG4gICAgdGhpcy5TZWN0aW9uUHJvdmlkZXIudW5yZWdpc3RlclRlbXBsYXRlKCB0aGlzLmxlZnRCb2R5IClcbiAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci51bnJlZ2lzdGVyVGVtcGxhdGUoIHRoaXMucmlnaHRCb2R5IClcbiAgfVxufSJdfQ==