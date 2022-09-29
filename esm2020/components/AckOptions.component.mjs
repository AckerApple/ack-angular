import { array } from "../pipes.class";
import { ContentChildren, TemplateRef, Component, Input, Output, EventEmitter } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
import { string as ackOptions } from "./templates/ack-options.pug";
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../pipes";
export class AckOptions {
    constructor(ElementRef) {
        this.ElementRef = ElementRef;
        this.array = [];
        this.stylize = true;
        this.TemplateReader = new TemplateReader({
            lastTemplateName: "templateRef",
            types: {
                option: "templateRef",
                selected: "selected"
            }
        });
        this.modelChange = new EventEmitter();
    }
    ngAfterViewInit() {
        Promise.resolve().then(() => {
            if (this.inputTemplateRefs) {
                this.TemplateReader.readTemplates(this.inputTemplateRefs);
            }
            if (this.templateRefs) {
                this.TemplateReader.readTemplates(this.templateRefs);
            }
        });
    }
    selectItem(item) {
        const value = this.getArrayItemValue(item);
        const isArrayMode = this.multiple || this.modelAsArray;
        if (isArrayMode) {
            const modelIndex = this.modelIndex(item);
            if (modelIndex >= 0) {
                this.model.splice(modelIndex, 1);
            }
            else {
                this.model.push(this.getArrayItemModel(item));
            }
            if (this.max) {
                while (this.model.length > this.max) {
                    this.model.shift();
                }
            }
        }
        else {
            if (this.toggleable && this.model == value) {
                delete this.model;
            }
            else {
                this.model = this.getArrayItemModel(item);
            }
        }
        this.emitChange();
    }
    emitChange() {
        this.modelChange.emit(this.model);
        const form = getParentByTagName(this.ElementRef.nativeElement, 'form');
        if (form)
            this.fireFormEvents(form);
    }
    fireFormEvents(form) {
        let event = document.createEvent("HTMLEvents");
        event.initEvent("input", true, true);
        form.dispatchEvent(event);
        event = document.createEvent("HTMLEvents");
        event.initEvent("change", true, true);
        form.dispatchEvent(event);
    }
    getArrayItemModel(item) {
        if (this.arrayToModelKey != null) {
            if (this.arrayToModelKey == '') {
                return item;
            }
            const split = this.arrayToModelKey.split('.');
            var scope = item;
            while (split.length) {
                if (scope == null)
                    return null;
                let key = split.shift();
                scope = scope[key];
            }
            return scope;
        }
        return this.getArrayItemValue(item);
    }
    getArrayItemValue(item) {
        if (!this.arrayKey)
            return item;
        let items = this.arrayKey.split('.');
        var scope = item;
        while (items.length) {
            if (scope == null)
                return null;
            let firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    }
    getModelValueToArrayItem(modelValue) {
        if (!this.modelKey)
            return modelValue;
        let items = this.modelKey.split('.');
        var scope = modelValue;
        while (items.length) {
            if (scope == null)
                return null;
            let firstItem = items.shift();
            scope = scope[firstItem];
        }
        return scope;
    }
    modelIndex(item) {
        this.model = array(this.model);
        for (let i = this.model.length - 1; i >= 0; --i) {
            let value = this.getArrayItemValue(item);
            let modelValue = this.getModelValueToArrayItem(this.model[i]);
            if (value == modelValue)
                return i;
        }
        return -1;
    }
    isItemSelected(item) {
        return this.modelIndex(item) >= 0;
    }
    getItemClass(item) {
        const selected = this.isItemSelected(item);
        let string = '';
        if (this.stylize) {
            string += 'cursor-pointer pad-h pad-v-sm border-grey-6x border-bottom ';
        }
        if (this.stylize && selected) {
            string += 'bg-warning ';
        }
        if (this.stylize && !selected) {
            string += 'hover-bg-grey-5x ';
        }
        return string;
    }
}
AckOptions.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckOptions, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Component });
AckOptions.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.2.4", type: AckOptions, selector: "ack-options", inputs: { array: "array", stylize: "stylize", multiple: "multiple", modelAsArray: "modelAsArray", max: "max", toggleable: "toggleable", inputTemplateRefs: "inputTemplateRefs", model: "model", arrayKey: "arrayKey", modelKey: "modelKey", arrayToModelKey: "arrayToModelKey" }, outputs: { modelChange: "modelChange" }, queries: [{ propertyName: "templateRefs", predicate: TemplateRef }], ngImport: i0, template: "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"TemplateReader.templates.selected &amp;&amp; isItemSelected(item)\" [ngTemplateOutlet]=\"TemplateReader.templates.selected\" [ngTemplateOutletContext]=\"{item:item}\"></ng-template><ng-template *ngIf=\"TemplateReader.templates.templateRef &amp;&amp; (!TemplateReader.templates.selected || !isItemSelected(item))\" [ngTemplateOutlet]=\"TemplateReader.templates.templateRef\" [ngTemplateOutletContext]=\"{item:item, selected:isItemSelected(item)}\"></ng-template><span *ngIf=\"!TemplateReader.templates.templateRef\">{{ item }}</span></div>", isInline: true, dependencies: [{ kind: "directive", type: i1.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { kind: "directive", type: i1.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "pipe", type: i2.ForceArray, name: "array" }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: AckOptions, decorators: [{
            type: Component,
            args: [{
                    selector: "ack-options",
                    template: ackOptions
                    //,exportAs:"AckOptions"
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { array: [{
                type: Input
            }], stylize: [{
                type: Input
            }], multiple: [{
                type: Input
            }], modelAsArray: [{
                type: Input
            }], max: [{
                type: Input
            }], toggleable: [{
                type: Input
            }], templateRefs: [{
                type: ContentChildren,
                args: [TemplateRef]
            }], inputTemplateRefs: [{
                type: Input
            }], model: [{
                type: Input
            }], modelChange: [{
                type: Output
            }], arrayKey: [{
                type: Input
            }], modelKey: [{
                type: Input
            }], arrayToModelKey: [{
                type: Input
            }] } });
export function getParentByTagName(node, tagname) {
    let parent;
    if (node === null || tagname === '')
        return;
    parent = node.parentNode;
    tagname = tagname.toUpperCase();
    while (parent && parent.tagName !== "HTML") {
        if (parent.tagName === tagname) {
            return parent;
        }
        parent = parent.parentNode;
    }
    return;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrT3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2tPcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDdEMsT0FBTyxFQUVMLGVBQWUsRUFDZixXQUFXLEVBQ1gsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFBO0FBQ3RCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQTtBQUN4RCxPQUFPLEVBQUUsTUFBTSxJQUFJLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFBOzs7O0FBTS9ELE1BQU0sT0FBTyxVQUFVO0lBMEJ4QixZQUFtQixVQUFxQjtRQUFyQixlQUFVLEdBQVYsVUFBVSxDQUFXO1FBekIvQixVQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ1YsWUFBTyxHQUFXLElBQUksQ0FBQTtRQU0vQixtQkFBYyxHQUFrQixJQUFJLGNBQWMsQ0FBQztZQUNqRCxnQkFBZ0IsRUFBQyxhQUFhO1lBQzlCLEtBQUssRUFBQztnQkFDSixNQUFNLEVBQUMsYUFBYTtnQkFDcEIsUUFBUSxFQUFDLFVBQVU7YUFDcEI7U0FDRixDQUFDLENBQUE7UUFNUSxnQkFBVyxHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFBO0lBTWxCLENBQUM7SUFFM0MsZUFBZTtRQUNiLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRSxFQUFFO1lBQ3pCLElBQUksSUFBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUMxRDtZQUNELElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDckIsSUFBSSxDQUFDLGNBQWMsQ0FB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QUF3QjtpQkFDekI7aUdBQ1UsS0FBSztzQkFBYixLQUFLO2dCQUNHLE9BQU87c0JBQWYsS0FBSztnQkFDRyxRQUFRO3NCQUFoQixLQUFLO2dCQUNHLFlBQVk7c0JBQXBCLEtBQUs7Z0JBQ0csR0FBRztzQkFBWCxLQUFLO2dCQUNHLFVBQVU7c0JBQWxCLEtBQUs7Z0JBVXdCLFlBQVk7c0JBQXpDLGVBQWU7dUJBQUMsV0FBVztnQkFDbkIsaUJBQWlCO3NCQUF6QixLQUFLO2dCQUVHLEtBQUs7c0JBQWIsS0FBSztnQkFDSSxXQUFXO3NCQUFwQixNQUFNO2dCQUVFLFFBQVE7c0JBQWhCLEtBQUs7Z0JBQ0csUUFBUTtzQkFBaEIsS0FBSztnQkFDRyxlQUFlO3NCQUF2QixLQUFLOztBQTZJUixNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBUyxFQUFFLE9BQVk7SUFDeEQsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEVBQUU7UUFBRSxPQUFPO0lBQzVDLE1BQU0sR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFCLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFaEMsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7UUFDMUMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM5QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7S0FDNUI7SUFFRCxPQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFycmF5IH0gZnJvbSBcIi4uL3BpcGVzLmNsYXNzXCJcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IFRlbXBsYXRlUmVhZGVyIH0gZnJvbSBcIi4uL1RlbXBsYXRlUmVhZGVyLmNsYXNzXCJcbmltcG9ydCB7IHN0cmluZyBhcyBhY2tPcHRpb25zIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1vcHRpb25zLnB1Z1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcImFjay1vcHRpb25zXCIsXG4gIHRlbXBsYXRlOmFja09wdGlvbnNcbiAgLy8sZXhwb3J0QXM6XCJBY2tPcHRpb25zXCJcbn0pIGV4cG9ydCBjbGFzcyBBY2tPcHRpb25ze1xuICBASW5wdXQoKSBhcnJheSA9IFtdXG4gIEBJbnB1dCgpIHN0eWxpemU6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgbXVsdGlwbGUhOiBib29sZWFuXG4gIEBJbnB1dCgpIG1vZGVsQXNBcnJheSE6IGJvb2xlYW5cbiAgQElucHV0KCkgbWF4ITogbnVtYmVyXG4gIEBJbnB1dCgpIHRvZ2dsZWFibGUhOiBib29sZWFuXG5cbiAgVGVtcGxhdGVSZWFkZXI6VGVtcGxhdGVSZWFkZXIgPSBuZXcgVGVtcGxhdGVSZWFkZXIoe1xuICAgIGxhc3RUZW1wbGF0ZU5hbWU6XCJ0ZW1wbGF0ZVJlZlwiLFxuICAgIHR5cGVzOntcbiAgICAgIG9wdGlvbjpcInRlbXBsYXRlUmVmXCIsXG4gICAgICBzZWxlY3RlZDpcInNlbGVjdGVkXCJcbiAgICB9XG4gIH0pXG5cbiAgQENvbnRlbnRDaGlsZHJlbihUZW1wbGF0ZVJlZikgdGVtcGxhdGVSZWZzOmFueS8vVGVtcGxhdGVSZWY8YW55PltdXG4gIEBJbnB1dCgpIGlucHV0VGVtcGxhdGVSZWZzOmFueS8vVGVtcGxhdGVSZWY8YW55PltdXG5cbiAgQElucHV0KCkgbW9kZWw6YW55XG4gIEBPdXRwdXQoKSBtb2RlbENoYW5nZTpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIEBJbnB1dCgpIGFycmF5S2V5ITogc3RyaW5nXG4gIEBJbnB1dCgpIG1vZGVsS2V5ITogc3RyaW5nXG4gIEBJbnB1dCgpIGFycmF5VG9Nb2RlbEtleSE6IHN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBFbGVtZW50UmVmOkVsZW1lbnRSZWYpe31cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICBpZiggdGhpcy5pbnB1dFRlbXBsYXRlUmVmcyApe1xuICAgICAgICB0aGlzLlRlbXBsYXRlUmVhZGVyLnJlYWRUZW1wbGF0ZXModGhpcy5pbnB1dFRlbXBsYXRlUmVmcylcbiAgICAgIH1cbiAgICAgIGlmKCB0aGlzLnRlbXBsYXRlUmVmcyApe1xuICAgICAgICB0aGlzLlRlbXBsYXRlUmVhZGVyLnJlYWRUZW1wbGF0ZXModGhpcy50ZW1wbGF0ZVJlZnMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNlbGVjdEl0ZW0oaXRlbTogYW55KSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEFycmF5SXRlbVZhbHVlKGl0ZW0pXG4gICAgY29uc3QgaXNBcnJheU1vZGUgPSB0aGlzLm11bHRpcGxlIHx8IHRoaXMubW9kZWxBc0FycmF5XG5cbiAgICBpZiggaXNBcnJheU1vZGUgKXtcbiAgICAgIGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLm1vZGVsSW5kZXgoIGl0ZW0gKVxuICAgICAgaWYobW9kZWxJbmRleD49MCl7XG4gICAgICAgIHRoaXMubW9kZWwuc3BsaWNlKG1vZGVsSW5kZXgsIDEpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5tb2RlbC5wdXNoKCB0aGlzLmdldEFycmF5SXRlbU1vZGVsKGl0ZW0pIClcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5tYXgpe1xuICAgICAgICB3aGlsZSh0aGlzLm1vZGVsLmxlbmd0aCA+IHRoaXMubWF4KXtcbiAgICAgICAgICB0aGlzLm1vZGVsLnNoaWZ0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgaWYodGhpcy50b2dnbGVhYmxlICYmIHRoaXMubW9kZWw9PXZhbHVlKXtcbiAgICAgICAgZGVsZXRlIHRoaXMubW9kZWxcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nZXRBcnJheUl0ZW1Nb2RlbChpdGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICBlbWl0Q2hhbmdlKCl7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KCB0aGlzLm1vZGVsIClcblxuICAgIGNvbnN0IGZvcm0gPSBnZXRQYXJlbnRCeVRhZ05hbWUodGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ2Zvcm0nKVxuICAgIGlmKGZvcm0pdGhpcy5maXJlRm9ybUV2ZW50cyhmb3JtKVxuICB9XG5cbiAgZmlyZUZvcm1FdmVudHMoZm9ybTogYW55KSB7XG4gICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChcImlucHV0XCIsIHRydWUsIHRydWUpO1xuICAgIGZvcm0uZGlzcGF0Y2hFdmVudChldmVudClcblxuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChcImNoYW5nZVwiLCB0cnVlLCB0cnVlKTtcbiAgICBmb3JtLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gIH1cblxuICBnZXRBcnJheUl0ZW1Nb2RlbChpdGVtOiBhbnkpIHtcbiAgICBpZih0aGlzLmFycmF5VG9Nb2RlbEtleSE9bnVsbCl7XG4gICAgICBpZih0aGlzLmFycmF5VG9Nb2RlbEtleT09Jycpe1xuICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgfVxuXG4gICAgICBjb25zdCBzcGxpdCA9IHRoaXMuYXJyYXlUb01vZGVsS2V5LnNwbGl0KCcuJylcbiAgICAgIHZhciBzY29wZSA9IGl0ZW1cbiAgICAgIHdoaWxlKHNwbGl0Lmxlbmd0aCl7XG4gICAgICAgIGlmKHNjb3BlPT1udWxsKXJldHVybiBudWxsXG4gICAgICAgIGxldCBrZXkgPSA8c3RyaW5nPnNwbGl0LnNoaWZ0KClcbiAgICAgICAgc2NvcGUgPSBzY29wZVsga2V5IF1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzY29wZVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRBcnJheUl0ZW1WYWx1ZSggaXRlbSApXG4gIH1cblxuICBnZXRBcnJheUl0ZW1WYWx1ZShpdGVtOiBhbnkpe1xuICAgIGlmKCF0aGlzLmFycmF5S2V5KXJldHVybiBpdGVtXG5cbiAgICBsZXQgaXRlbXMgPSB0aGlzLmFycmF5S2V5LnNwbGl0KCcuJylcbiAgICB2YXIgc2NvcGUgPSBpdGVtXG4gICAgd2hpbGUoaXRlbXMubGVuZ3RoKXtcbiAgICAgIGlmKCBzY29wZT09bnVsbCApcmV0dXJuIG51bGxcbiAgICAgIGxldCBmaXJzdEl0ZW0gPSA8c3RyaW5nPml0ZW1zLnNoaWZ0KClcbiAgICAgIHNjb3BlID0gc2NvcGVbIGZpcnN0SXRlbSBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjb3BlXG4gIH1cblxuICBnZXRNb2RlbFZhbHVlVG9BcnJheUl0ZW0oIG1vZGVsVmFsdWU6YW55ICk6YW55e1xuICAgIGlmKCF0aGlzLm1vZGVsS2V5KXJldHVybiBtb2RlbFZhbHVlXG5cbiAgICBsZXQgaXRlbXM6c3RyaW5nW10gPSB0aGlzLm1vZGVsS2V5LnNwbGl0KCcuJylcbiAgICB2YXIgc2NvcGUgPSBtb2RlbFZhbHVlXG4gICAgd2hpbGUoIGl0ZW1zLmxlbmd0aCApe1xuICAgICAgaWYoIHNjb3BlPT1udWxsIClyZXR1cm4gbnVsbFxuICAgICAgbGV0IGZpcnN0SXRlbSA9IDxzdHJpbmc+aXRlbXMuc2hpZnQoKVxuICAgICAgc2NvcGUgPSBzY29wZVsgZmlyc3RJdGVtIF1cbiAgICB9XG5cbiAgICByZXR1cm4gc2NvcGVcbiAgfVxuXG4gIG1vZGVsSW5kZXgoaXRlbTogYW55KSB7XG4gICAgdGhpcy5tb2RlbCA9IGFycmF5KHRoaXMubW9kZWwpXG4gICAgZm9yKGxldCBpPXRoaXMubW9kZWwubGVuZ3RoLTE7IGkgPj0gMDsgLS1pKXtcbiAgICAgIGxldCB2YWx1ZSA9IHRoaXMuZ2V0QXJyYXlJdGVtVmFsdWUoIGl0ZW0gKVxuICAgICAgbGV0IG1vZGVsVmFsdWUgPSB0aGlzLmdldE1vZGVsVmFsdWVUb0FycmF5SXRlbSggdGhpcy5tb2RlbFtpXSApXG4gICAgICBpZiggdmFsdWUgPT0gbW9kZWxWYWx1ZSApcmV0dXJuIGlcbiAgICB9XG4gICAgcmV0dXJuIC0xXG4gIH1cblxuICBpc0l0ZW1TZWxlY3RlZChpdGVtOiBhbnkpIHtcbiAgICByZXR1cm4gdGhpcy5tb2RlbEluZGV4KGl0ZW0pPj0wXG4gIH1cblxuICBnZXRJdGVtQ2xhc3MoaXRlbTogYW55KTogc3RyaW5ne1xuICAgIGNvbnN0IHNlbGVjdGVkID0gdGhpcy5pc0l0ZW1TZWxlY3RlZChpdGVtKVxuICAgIGxldCBzdHJpbmcgPSAnJ1xuXG4gICAgaWYodGhpcy5zdHlsaXplKXtcbiAgICAgIHN0cmluZyArPSAnY3Vyc29yLXBvaW50ZXIgcGFkLWggcGFkLXYtc20gYm9yZGVyLWdyZXktNnggYm9yZGVyLWJvdHRvbSAnXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdHlsaXplICYmIHNlbGVjdGVkKXtcbiAgICAgIHN0cmluZyArPSAnYmctd2FybmluZyAnXG4gICAgfVxuXG4gICAgaWYodGhpcy5zdHlsaXplICYmICFzZWxlY3RlZCl7XG4gICAgICBzdHJpbmcgKz0gJ2hvdmVyLWJnLWdyZXktNXggJ1xuICAgIH1cblxuICAgIHJldHVybiBzdHJpbmdcblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRQYXJlbnRCeVRhZ05hbWUobm9kZTogYW55LCB0YWduYW1lOiBhbnkpIHtcbiAgbGV0IHBhcmVudDtcbiAgaWYgKG5vZGUgPT09IG51bGwgfHwgdGFnbmFtZSA9PT0gJycpIHJldHVybjtcbiAgcGFyZW50ICA9IG5vZGUucGFyZW50Tm9kZTtcbiAgdGFnbmFtZSA9IHRhZ25hbWUudG9VcHBlckNhc2UoKTtcblxuICB3aGlsZSAocGFyZW50ICYmIHBhcmVudC50YWdOYW1lICE9PSBcIkhUTUxcIikge1xuICAgIGlmIChwYXJlbnQudGFnTmFtZSA9PT0gdGFnbmFtZSkge1xuICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICB9XG4gICAgcGFyZW50ID0gcGFyZW50LnBhcmVudE5vZGU7XG4gIH1cblxuICByZXR1cm47XG59XG4iXX0=