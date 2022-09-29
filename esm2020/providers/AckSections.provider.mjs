import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
export class SectionProvider {
    constructor() {
        //appTemplates:AckSectionTemplates[] = []
        this.headerTemplates = [];
        this.footerTemplates = [];
        this.leftBodyTemplates = [];
        this.rightBodyTemplates = [];
    }
    unregisterHeaderTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
    }
    unregisterFooterTemplate(item) {
        this.unregisterTemplateFrom(item, this.footerTemplates);
    }
    unregisterTemplateFrom(item, templates) {
        for (let x = templates.length - 1; x >= 0; --x) {
            if (templates[x] === item) {
                templates.splice(x, 1);
                break;
            }
        }
    }
    unregisterTemplate(item) {
        this.unregisterTemplateFrom(item, this.headerTemplates);
        this.unregisterTemplateFrom(item, this.footerTemplates);
        this.unregisterTemplateFrom(item, this.leftBodyTemplates);
        this.unregisterTemplateFrom(item, this.rightBodyTemplates);
    }
}
SectionProvider.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SectionProvider, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SectionProvider.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SectionProvider });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: SectionProvider, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrU2VjdGlvbnMucHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcHJvdmlkZXJzL0Fja1NlY3Rpb25zLnByb3ZpZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDUSxVQUFVLEVBQ3hCLE1BQU0sZUFBZSxDQUFBOztBQUVSLE1BQU0sT0FBTyxlQUFlO0lBQTFDO1FBQ0UseUNBQXlDO1FBQ3pDLG9CQUFlLEdBQTZCLEVBQUUsQ0FBQTtRQUM5QyxvQkFBZSxHQUE2QixFQUFFLENBQUE7UUFFOUMsc0JBQWlCLEdBQTZCLEVBQUUsQ0FBQTtRQUNoRCx1QkFBa0IsR0FBNkIsRUFBRSxDQUFBO0tBNEJsRDtJQTFCQyx3QkFBd0IsQ0FBRSxJQUE0QjtRQUNwRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQTtJQUN6RCxDQUFDO0lBRUQsd0JBQXdCLENBQUUsSUFBNEI7UUFDcEQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7SUFDekQsQ0FBQztJQUVELHNCQUFzQixDQUNwQixJQUE0QixFQUM1QixTQUFtQztRQUVuQyxLQUFJLElBQUksQ0FBQyxHQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDeEMsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUcsSUFBSSxFQUFFO2dCQUN2QixTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQTtnQkFDckIsTUFBSzthQUNOO1NBQ0Y7SUFDSCxDQUFDO0lBRUQsa0JBQWtCLENBQUUsSUFBNEI7UUFDOUMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDdkQsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUN6RCxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQzVELENBQUM7OzRHQWpDd0IsZUFBZTtnSEFBZixlQUFlOzJGQUFmLGVBQWU7a0JBQXpDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBUZW1wbGF0ZVJlZiwgSW5qZWN0YWJsZSwgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFNlY3Rpb25Qcm92aWRlcntcbiAgLy9hcHBUZW1wbGF0ZXM6QWNrU2VjdGlvblRlbXBsYXRlc1tdID0gW11cbiAgaGVhZGVyVGVtcGxhdGVzOlRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+W10gPSBbXVxuICBmb290ZXJUZW1wbGF0ZXM6VGVtcGxhdGVSZWY8RWxlbWVudFJlZj5bXSA9IFtdXG4gIFxuICBsZWZ0Qm9keVRlbXBsYXRlczpUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPltdID0gW11cbiAgcmlnaHRCb2R5VGVtcGxhdGVzOlRlbXBsYXRlUmVmPEVsZW1lbnRSZWY+W10gPSBbXVxuXG4gIHVucmVnaXN0ZXJIZWFkZXJUZW1wbGF0ZSggaXRlbTpUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPiApe1xuICAgIHRoaXMudW5yZWdpc3RlclRlbXBsYXRlRnJvbShpdGVtLCB0aGlzLmhlYWRlclRlbXBsYXRlcylcbiAgfVxuXG4gIHVucmVnaXN0ZXJGb290ZXJUZW1wbGF0ZSggaXRlbTpUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPiApe1xuICAgIHRoaXMudW5yZWdpc3RlclRlbXBsYXRlRnJvbShpdGVtLCB0aGlzLmZvb3RlclRlbXBsYXRlcylcbiAgfVxuXG4gIHVucmVnaXN0ZXJUZW1wbGF0ZUZyb20oXG4gICAgaXRlbTpUZW1wbGF0ZVJlZjxFbGVtZW50UmVmPixcbiAgICB0ZW1wbGF0ZXM6VGVtcGxhdGVSZWY8RWxlbWVudFJlZj5bXVxuICApe1xuICAgIGZvcihsZXQgeD10ZW1wbGF0ZXMubGVuZ3RoLTE7IHggPj0gMDsgLS14KXtcbiAgICAgIGlmKCB0ZW1wbGF0ZXNbeF09PT1pdGVtICl7XG4gICAgICAgIHRlbXBsYXRlcy5zcGxpY2UoeCwxKVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgIH0gICAgXG4gIH1cblxuICB1bnJlZ2lzdGVyVGVtcGxhdGUoIGl0ZW06VGVtcGxhdGVSZWY8RWxlbWVudFJlZj4gKXtcbiAgICB0aGlzLnVucmVnaXN0ZXJUZW1wbGF0ZUZyb20oaXRlbSwgdGhpcy5oZWFkZXJUZW1wbGF0ZXMpXG4gICAgdGhpcy51bnJlZ2lzdGVyVGVtcGxhdGVGcm9tKGl0ZW0sIHRoaXMuZm9vdGVyVGVtcGxhdGVzKVxuICAgIHRoaXMudW5yZWdpc3RlclRlbXBsYXRlRnJvbShpdGVtLCB0aGlzLmxlZnRCb2R5VGVtcGxhdGVzKVxuICAgIHRoaXMudW5yZWdpc3RlclRlbXBsYXRlRnJvbShpdGVtLCB0aGlzLnJpZ2h0Qm9keVRlbXBsYXRlcylcbiAgfVxufSJdfQ==