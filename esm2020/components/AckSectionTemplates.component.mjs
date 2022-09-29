import { Directive, ContentChild } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckSections.provider";
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
AckSectionTemplates.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckSectionTemplates, deps: [{ token: i1.SectionProvider }], target: i0.ɵɵFactoryTarget.Directive });
AckSectionTemplates.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: AckSectionTemplates, selector: "ack-section-templates", queries: [{ propertyName: "header", first: true, predicate: ["sectionHeader"], descendants: true }, { propertyName: "footer", first: true, predicate: ["sectionFooter"], descendants: true }, { propertyName: "leftBody", first: true, predicate: ["sectionLeftBody"], descendants: true }, { propertyName: "rightBody", first: true, predicate: ["sectionRightBody"], descendants: true }], usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckSectionTemplates, decorators: [{
            type: Directive,
            args: [{
                    selector: "ack-section-templates"
                }]
        }], ctorParameters: function () { return [{ type: i1.SectionProvider }]; }, propDecorators: { header: [{
                type: ContentChild,
                args: ['sectionHeader']
            }], footer: [{
                type: ContentChild,
                args: ['sectionFooter']
            }], leftBody: [{
                type: ContentChild,
                args: ['sectionLeftBody']
            }], rightBody: [{
                type: ContentChild,
                args: ['sectionRightBody']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrU2VjdGlvblRlbXBsYXRlcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2tTZWN0aW9uVGVtcGxhdGVzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFlLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQTs7O0FBS2pFLE1BQU0sT0FBTyxtQkFBbUI7SUFTakMsWUFDUyxlQUErQjtRQUEvQixvQkFBZSxHQUFmLGVBQWUsQ0FBZ0I7SUFDdEMsQ0FBQztJQUVILGVBQWU7UUFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUE7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNwQixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO1NBQ2I7SUFDSCxDQUFDO0lBRUQsS0FBSztRQUNILElBQUksSUFBSSxDQUFDLE1BQU07WUFBRSxPQUFNO1FBRXZCLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFFLENBQUE7U0FDNUQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxDQUFBO1NBQzVEO1FBRUQsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxlQUFlLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQTtTQUNoRTtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLE9BQU8sQ0FBRSxJQUFJLENBQUMsU0FBUyxDQUFFLENBQUE7U0FDbEU7UUFFRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtJQUNwQixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUE7SUFDL0MsQ0FBQztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQTtRQUNuQixJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQTtRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLHdCQUF3QixDQUFFLElBQUksQ0FBQyxNQUFNLENBQUUsQ0FBQTtRQUM1RCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFFLElBQUksQ0FBQyxRQUFRLENBQUUsQ0FBQTtRQUN4RCxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFFLElBQUksQ0FBQyxTQUFTLENBQUUsQ0FBQTtJQUMzRCxDQUFDOztnSEExRGEsbUJBQW1CO29HQUFuQixtQkFBbUI7MkZBQW5CLG1CQUFtQjtrQkFGbEMsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsdUJBQXVCO2lCQUNqQztzR0FJZ0MsTUFBTTtzQkFBcEMsWUFBWTt1QkFBQyxlQUFlO2dCQUNFLE1BQU07c0JBQXBDLFlBQVk7dUJBQUMsZUFBZTtnQkFDSSxRQUFRO3NCQUF4QyxZQUFZO3VCQUFDLGlCQUFpQjtnQkFDRyxTQUFTO3NCQUExQyxZQUFZO3VCQUFDLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgVGVtcGxhdGVSZWYsIENvbnRlbnRDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IFNlY3Rpb25Qcm92aWRlciB9IGZyb20gXCIuLi9wcm92aWRlcnMvQWNrU2VjdGlvbnMucHJvdmlkZXJcIlxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6XCJhY2stc2VjdGlvbi10ZW1wbGF0ZXNcIlxufSkgZXhwb3J0IGNsYXNzIEFja1NlY3Rpb25UZW1wbGF0ZXN7XG4gIGluaXRlZCE6IGJvb2xlYW5cbiAgcHVzaGVkITogYm9vbGVhblxuXG4gIEBDb250ZW50Q2hpbGQoJ3NlY3Rpb25IZWFkZXInKSBoZWFkZXIhOiBUZW1wbGF0ZVJlZjxhbnk+XG4gIEBDb250ZW50Q2hpbGQoJ3NlY3Rpb25Gb290ZXInKSBmb290ZXIhOiBUZW1wbGF0ZVJlZjxhbnk+XG4gIEBDb250ZW50Q2hpbGQoJ3NlY3Rpb25MZWZ0Qm9keScpIGxlZnRCb2R5ITogVGVtcGxhdGVSZWY8YW55PlxuICBAQ29udGVudENoaWxkKCdzZWN0aW9uUmlnaHRCb2R5JykgcmlnaHRCb2R5ITogVGVtcGxhdGVSZWY8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBTZWN0aW9uUHJvdmlkZXI6U2VjdGlvblByb3ZpZGVyXG4gICl7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIHRoaXMuY2hlY2soKVxuICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgaWYoIHRoaXMuaW5pdGVkICl7XG4gICAgICB0aGlzLmNoZWNrKClcbiAgICB9XG4gIH1cblxuICBjaGVjaygpe1xuICAgIGlmKCB0aGlzLnB1c2hlZCApcmV0dXJuXG5cbiAgICBpZiggdGhpcy5oZWFkZXIgKXtcbiAgICAgIHRoaXMuU2VjdGlvblByb3ZpZGVyLmhlYWRlclRlbXBsYXRlcy51bnNoaWZ0KCB0aGlzLmhlYWRlciApXG4gICAgfVxuXG4gICAgaWYoIHRoaXMuZm9vdGVyICl7XG4gICAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci5mb290ZXJUZW1wbGF0ZXMudW5zaGlmdCggdGhpcy5mb290ZXIgKVxuICAgIH1cblxuICAgIGlmKCB0aGlzLmxlZnRCb2R5ICl7XG4gICAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci5sZWZ0Qm9keVRlbXBsYXRlcy51bnNoaWZ0KCB0aGlzLmxlZnRCb2R5IClcbiAgICB9XG5cbiAgICBpZiggdGhpcy5yaWdodEJvZHkgKXtcbiAgICAgIHRoaXMuU2VjdGlvblByb3ZpZGVyLnJpZ2h0Qm9keVRlbXBsYXRlcy51bnNoaWZ0KCB0aGlzLnJpZ2h0Qm9keSApXG4gICAgfVxuXG4gICAgdGhpcy5wdXNoZWQgPSB0cnVlXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PnRoaXMudW5yZWdpc3RlcigpKVxuICB9XG5cbiAgdW5yZWdpc3Rlcigpe1xuICAgIHRoaXMucHVzaGVkID0gZmFsc2VcbiAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci51bnJlZ2lzdGVySGVhZGVyVGVtcGxhdGUoIHRoaXMuaGVhZGVyIClcbiAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci51bnJlZ2lzdGVyRm9vdGVyVGVtcGxhdGUoIHRoaXMuZm9vdGVyIClcbiAgICB0aGlzLlNlY3Rpb25Qcm92aWRlci51bnJlZ2lzdGVyVGVtcGxhdGUoIHRoaXMubGVmdEJvZHkgKVxuICAgIHRoaXMuU2VjdGlvblByb3ZpZGVyLnVucmVnaXN0ZXJUZW1wbGF0ZSggdGhpcy5yaWdodEJvZHkgKVxuICB9XG59Il19