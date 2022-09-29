import { Component, Directive, ContentChild } from "@angular/core";
import { string as readerHeaderBody } from "./templates/reader-header-body.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
//easy to use common full page templater
export class ReaderHeaderBody {
}
ReaderHeaderBody.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderHeaderBody, deps: [], target: i0.ɵɵFactoryTarget.Component });
ReaderHeaderBody.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: ReaderHeaderBody, selector: "reader-header-body", queries: [{ propertyName: "readerHeader", first: true, predicate: ["reader-header"], descendants: true }], ngImport: i0, template: "<div style=\"text-align:center;height:100%\"><div style=\"display:inline-block;width:100%;height:100%;max-width:1000px\"><div style=\"width:100%;height:100%;\"><table cellpadding=\"0\" cellspacing=\"0\" style=\"width:100%;height:100%;\"><tr *ngIf=\"readerHeader\"><td><ng-template *ngTemplateOutlet=\"readerHeader\"></ng-template></td></tr><tr><td style=\"height:100%\"><ng-content></ng-content></td></tr></table></div></div></div>", isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderHeaderBody, decorators: [{
            type: Component,
            args: [{
                    selector: 'reader-header-body',
                    template: readerHeaderBody
                }]
        }], propDecorators: { readerHeader: [{
                type: ContentChild,
                args: ['reader-header']
            }] } });
export class ReaderHeader {
}
ReaderHeader.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderHeader, deps: [], target: i0.ɵɵFactoryTarget.Directive });
ReaderHeader.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ReaderHeader, selector: "reader-header", ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderHeader, decorators: [{
            type: Directive,
            args: [{
                    selector: 'reader-header'
                }]
        }] });
export class ReaderBody {
    constructor(element) {
        this.element = element;
        element.nativeElement.style.height = '100%';
        element.nativeElement.style.display = 'block';
    }
}
ReaderBody.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderBody, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ReaderBody.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ReaderBody, selector: "reader-body", queries: [{ propertyName: "readerHeader", first: true, predicate: ["reader-header"], descendants: true }], ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ReaderBody, decorators: [{
            type: Directive,
            args: [{
                    selector: "reader-body"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { readerHeader: [{
                type: ContentChild,
                args: ['reader-header']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZGVySGVhZGVyQm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9SZWFkZXJIZWFkZXJCb2R5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFNBQVMsRUFDSyxZQUFZLEVBQ3JDLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE9BQU8sRUFBRSxNQUFNLElBQUksZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQTs7O0FBRS9FLHdDQUF3QztBQUlyQyxNQUFNLE9BQU8sZ0JBQWdCOzs2R0FBaEIsZ0JBQWdCO2lHQUFoQixnQkFBZ0I7MkZBQWhCLGdCQUFnQjtrQkFIL0IsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUMsb0JBQW9CO29CQUM3QixRQUFRLEVBQUMsZ0JBQWdCO2lCQUMxQjs4QkFDK0IsWUFBWTtzQkFBMUMsWUFBWTt1QkFBQyxlQUFlOztBQUszQixNQUFNLE9BQU8sWUFBWTs7eUdBQVosWUFBWTs2RkFBWixZQUFZOzJGQUFaLFlBQVk7a0JBRjNCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFDLGVBQWU7aUJBQ3pCOztBQUlFLE1BQU0sT0FBTyxVQUFVO0lBR3hCLFlBQW1CLE9BQW1CO1FBQW5CLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDcEMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUM1QyxPQUFPLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ2hELENBQUM7O3VHQU5hLFVBQVU7MkZBQVYsVUFBVTsyRkFBVixVQUFVO2tCQUZ6QixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBQyxhQUFhO2lCQUN2QjtpR0FDZ0MsWUFBWTtzQkFBMUMsWUFBWTt1QkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0Q29tcG9uZW50LCBEaXJlY3RpdmUsXG5cdEVsZW1lbnRSZWYsIFRlbXBsYXRlUmVmLCBDb250ZW50Q2hpbGRcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQgeyBzdHJpbmcgYXMgcmVhZGVySGVhZGVyQm9keSB9IGZyb20gXCIuL3RlbXBsYXRlcy9yZWFkZXItaGVhZGVyLWJvZHkucHVnXCJcblxuLy9lYXN5IHRvIHVzZSBjb21tb24gZnVsbCBwYWdlIHRlbXBsYXRlclxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOidyZWFkZXItaGVhZGVyLWJvZHknLFxuICB0ZW1wbGF0ZTpyZWFkZXJIZWFkZXJCb2R5XG59KSBleHBvcnQgY2xhc3MgUmVhZGVySGVhZGVyQm9keSB7XG5cdEBDb250ZW50Q2hpbGQoJ3JlYWRlci1oZWFkZXInKSByZWFkZXJIZWFkZXIhOiBUZW1wbGF0ZVJlZjxhbnk+XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjoncmVhZGVyLWhlYWRlcidcbn0pIGV4cG9ydCBjbGFzcyBSZWFkZXJIZWFkZXIge31cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOlwicmVhZGVyLWJvZHlcIlxufSkgZXhwb3J0IGNsYXNzIFJlYWRlckJvZHkge1xuICBAQ29udGVudENoaWxkKCdyZWFkZXItaGVhZGVyJykgcmVhZGVySGVhZGVyITpUZW1wbGF0ZVJlZjxhbnk+XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnRSZWYpe1xuICAgIGVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9XG59XG4iXX0=