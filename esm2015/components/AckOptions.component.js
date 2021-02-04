import { array } from "../pipes.class";
import { ElementRef, ContentChildren, TemplateRef, Component, Input, Output, EventEmitter } from "@angular/core";
import { TemplateReader } from "../TemplateReader.class";
import { string as ackOptions } from "./templates/ack-options.pug";
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
AckOptions.decorators = [
    { type: Component, args: [{
                selector: "ack-options",
                template: ackOptions
                //,exportAs:"AckOptions"
            },] }
];
AckOptions.ctorParameters = () => [
    { type: ElementRef }
];
AckOptions.propDecorators = {
    array: [{ type: Input }],
    stylize: [{ type: Input }],
    multiple: [{ type: Input }],
    modelAsArray: [{ type: Input }],
    max: [{ type: Input }],
    toggleable: [{ type: Input }],
    templateRefs: [{ type: ContentChildren, args: [TemplateRef,] }],
    inputTemplateRefs: [{ type: Input }],
    model: [{ type: Input }],
    modelChange: [{ type: Output }],
    arrayKey: [{ type: Input }],
    modelKey: [{ type: Input }],
    arrayToModelKey: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrT3B0aW9ucy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9BY2tPcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZ0JBQWdCLENBQUE7QUFDdEMsT0FBTyxFQUNMLFVBQVUsRUFDVixlQUFlLEVBQ2YsV0FBVyxFQUNYLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQUN0QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUE7QUFDeEQsT0FBTyxFQUFFLE1BQU0sSUFBSSxVQUFVLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQTtBQU0vRCxNQUFNLE9BQU8sVUFBVTtJQTBCeEIsWUFBbUIsVUFBcUI7UUFBckIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXpCL0IsVUFBSyxHQUFHLEVBQUUsQ0FBQTtRQUNWLFlBQU8sR0FBVyxJQUFJLENBQUE7UUFNL0IsbUJBQWMsR0FBa0IsSUFBSSxjQUFjLENBQUM7WUFDakQsZ0JBQWdCLEVBQUMsYUFBYTtZQUM5QixLQUFLLEVBQUM7Z0JBQ0osTUFBTSxFQUFDLGFBQWE7Z0JBQ3BCLFFBQVEsRUFBQyxVQUFVO2FBQ3BCO1NBQ0YsQ0FBQyxDQUFBO1FBTVEsZ0JBQVcsR0FBcUIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQU1sQixDQUFDO0lBRTNDLGVBQWU7UUFDYixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDMUQ7WUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxj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QUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSztrQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBVUwsZUFBZSxTQUFDLFdBQVc7Z0NBQzNCLEtBQUs7b0JBRUwsS0FBSzswQkFDTCxNQUFNO3VCQUVOLEtBQUs7dUJBQ0wsS0FBSzs4QkFDTCxLQUFLOztBQTZJUixNQUFNLFVBQVUsa0JBQWtCLENBQUMsSUFBSSxFQUFFLE9BQU87SUFDOUMsSUFBSSxNQUFNLENBQUM7SUFDWCxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksT0FBTyxLQUFLLEVBQUU7UUFBRSxPQUFPO0lBQzVDLE1BQU0sR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzFCLE9BQU8sR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFFaEMsT0FBTyxNQUFNLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxNQUFNLEVBQUU7UUFDMUMsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtZQUM5QixPQUFPLE1BQU0sQ0FBQztTQUNmO1FBQ0QsTUFBTSxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7S0FDNUI7SUFFRCxPQUFPO0FBQ1QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFycmF5IH0gZnJvbSBcIi4uL3BpcGVzLmNsYXNzXCJcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVGVtcGxhdGVSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcbmltcG9ydCB7IFRlbXBsYXRlUmVhZGVyIH0gZnJvbSBcIi4uL1RlbXBsYXRlUmVhZGVyLmNsYXNzXCJcbmltcG9ydCB7IHN0cmluZyBhcyBhY2tPcHRpb25zIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Fjay1vcHRpb25zLnB1Z1wiXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjpcImFjay1vcHRpb25zXCIsXG4gIHRlbXBsYXRlOmFja09wdGlvbnNcbiAgLy8sZXhwb3J0QXM6XCJBY2tPcHRpb25zXCJcbn0pIGV4cG9ydCBjbGFzcyBBY2tPcHRpb25ze1xuICBASW5wdXQoKSBhcnJheSA9IFtdXG4gIEBJbnB1dCgpIHN0eWxpemU6Ym9vbGVhbiA9IHRydWVcbiAgQElucHV0KCkgbXVsdGlwbGU6Ym9vbGVhblxuICBASW5wdXQoKSBtb2RlbEFzQXJyYXk6Ym9vbGVhblxuICBASW5wdXQoKSBtYXg6bnVtYmVyXG4gIEBJbnB1dCgpIHRvZ2dsZWFibGU6Ym9vbGVhblxuXG4gIFRlbXBsYXRlUmVhZGVyOlRlbXBsYXRlUmVhZGVyID0gbmV3IFRlbXBsYXRlUmVhZGVyKHtcbiAgICBsYXN0VGVtcGxhdGVOYW1lOlwidGVtcGxhdGVSZWZcIixcbiAgICB0eXBlczp7XG4gICAgICBvcHRpb246XCJ0ZW1wbGF0ZVJlZlwiLFxuICAgICAgc2VsZWN0ZWQ6XCJzZWxlY3RlZFwiXG4gICAgfVxuICB9KVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oVGVtcGxhdGVSZWYpIHRlbXBsYXRlUmVmczphbnkvL1RlbXBsYXRlUmVmPGFueT5bXVxuICBASW5wdXQoKSBpbnB1dFRlbXBsYXRlUmVmczphbnkvL1RlbXBsYXRlUmVmPGFueT5bXVxuXG4gIEBJbnB1dCgpIG1vZGVsOmFueVxuICBAT3V0cHV0KCkgbW9kZWxDaGFuZ2U6RXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgXG4gIEBJbnB1dCgpIGFycmF5S2V5OnN0cmluZ1xuICBASW5wdXQoKSBtb2RlbEtleTpzdHJpbmdcbiAgQElucHV0KCkgYXJyYXlUb01vZGVsS2V5OnN0cmluZ1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBFbGVtZW50UmVmOkVsZW1lbnRSZWYpe31cblxuICBuZ0FmdGVyVmlld0luaXQoKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICBpZiggdGhpcy5pbnB1dFRlbXBsYXRlUmVmcyApe1xuICAgICAgICB0aGlzLlRlbXBsYXRlUmVhZGVyLnJlYWRUZW1wbGF0ZXModGhpcy5pbnB1dFRlbXBsYXRlUmVmcylcbiAgICAgIH1cbiAgICAgIGlmKCB0aGlzLnRlbXBsYXRlUmVmcyApe1xuICAgICAgICB0aGlzLlRlbXBsYXRlUmVhZGVyLnJlYWRUZW1wbGF0ZXModGhpcy50ZW1wbGF0ZVJlZnMpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNlbGVjdEl0ZW0oaXRlbSl7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldEFycmF5SXRlbVZhbHVlKGl0ZW0pXG4gICAgY29uc3QgaXNBcnJheU1vZGUgPSB0aGlzLm11bHRpcGxlIHx8IHRoaXMubW9kZWxBc0FycmF5XG5cbiAgICBpZiggaXNBcnJheU1vZGUgKXtcbiAgICAgIGNvbnN0IG1vZGVsSW5kZXggPSB0aGlzLm1vZGVsSW5kZXgoIGl0ZW0gKVxuICAgICAgaWYobW9kZWxJbmRleD49MCl7XG4gICAgICAgIHRoaXMubW9kZWwuc3BsaWNlKG1vZGVsSW5kZXgsIDEpXG4gICAgICB9ZWxzZXtcbiAgICAgICAgdGhpcy5tb2RlbC5wdXNoKCB0aGlzLmdldEFycmF5SXRlbU1vZGVsKGl0ZW0pIClcbiAgICAgIH1cblxuICAgICAgaWYodGhpcy5tYXgpe1xuICAgICAgICB3aGlsZSh0aGlzLm1vZGVsLmxlbmd0aCA+IHRoaXMubWF4KXtcbiAgICAgICAgICB0aGlzLm1vZGVsLnNoaWZ0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1lbHNle1xuICAgICAgaWYodGhpcy50b2dnbGVhYmxlICYmIHRoaXMubW9kZWw9PXZhbHVlKXtcbiAgICAgICAgZGVsZXRlIHRoaXMubW9kZWxcbiAgICAgIH1lbHNle1xuICAgICAgICB0aGlzLm1vZGVsID0gdGhpcy5nZXRBcnJheUl0ZW1Nb2RlbChpdGVtKVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuZW1pdENoYW5nZSgpXG4gIH1cblxuICBlbWl0Q2hhbmdlKCl7XG4gICAgdGhpcy5tb2RlbENoYW5nZS5lbWl0KCB0aGlzLm1vZGVsIClcblxuICAgIGNvbnN0IGZvcm0gPSBnZXRQYXJlbnRCeVRhZ05hbWUodGhpcy5FbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsJ2Zvcm0nKVxuICAgIGlmKGZvcm0pdGhpcy5maXJlRm9ybUV2ZW50cyhmb3JtKVxuICB9XG5cbiAgZmlyZUZvcm1FdmVudHMoZm9ybSl7XG4gICAgbGV0IGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChcImlucHV0XCIsIHRydWUsIHRydWUpO1xuICAgIGZvcm0uZGlzcGF0Y2hFdmVudChldmVudClcblxuICAgIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJIVE1MRXZlbnRzXCIpO1xuICAgIGV2ZW50LmluaXRFdmVudChcImNoYW5nZVwiLCB0cnVlLCB0cnVlKTtcbiAgICBmb3JtLmRpc3BhdGNoRXZlbnQoZXZlbnQpXG4gIH1cblxuICBnZXRBcnJheUl0ZW1Nb2RlbChpdGVtKXtcbiAgICBpZih0aGlzLmFycmF5VG9Nb2RlbEtleSE9bnVsbCl7XG4gICAgICBpZih0aGlzLmFycmF5VG9Nb2RlbEtleT09Jycpe1xuICAgICAgICByZXR1cm4gaXRlbVxuICAgICAgfVxuICAgICAgXG4gICAgICBjb25zdCBzcGxpdCA9IHRoaXMuYXJyYXlUb01vZGVsS2V5LnNwbGl0KCcuJylcbiAgICAgIHZhciBzY29wZSA9IGl0ZW1cbiAgICAgIHdoaWxlKHNwbGl0Lmxlbmd0aCl7XG4gICAgICAgIGlmKHNjb3BlPT1udWxsKXJldHVybiBudWxsXG4gICAgICAgIGxldCBrZXkgPSA8c3RyaW5nPnNwbGl0LnNoaWZ0KClcbiAgICAgICAgc2NvcGUgPSBzY29wZVsga2V5IF1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzY29wZVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5nZXRBcnJheUl0ZW1WYWx1ZSggaXRlbSApXG4gIH1cblxuICBnZXRBcnJheUl0ZW1WYWx1ZShpdGVtKXtcbiAgICBpZighdGhpcy5hcnJheUtleSlyZXR1cm4gaXRlbVxuXG4gICAgbGV0IGl0ZW1zID0gdGhpcy5hcnJheUtleS5zcGxpdCgnLicpXG4gICAgdmFyIHNjb3BlID0gaXRlbVxuICAgIHdoaWxlKGl0ZW1zLmxlbmd0aCl7XG4gICAgICBpZiggc2NvcGU9PW51bGwgKXJldHVybiBudWxsXG4gICAgICBsZXQgZmlyc3RJdGVtID0gPHN0cmluZz5pdGVtcy5zaGlmdCgpXG4gICAgICBzY29wZSA9IHNjb3BlWyBmaXJzdEl0ZW0gXVxuICAgIH1cblxuICAgIHJldHVybiBzY29wZVxuICB9XG5cbiAgZ2V0TW9kZWxWYWx1ZVRvQXJyYXlJdGVtKCBtb2RlbFZhbHVlOmFueSApOmFueXtcbiAgICBpZighdGhpcy5tb2RlbEtleSlyZXR1cm4gbW9kZWxWYWx1ZVxuXG4gICAgbGV0IGl0ZW1zOnN0cmluZ1tdID0gdGhpcy5tb2RlbEtleS5zcGxpdCgnLicpXG4gICAgdmFyIHNjb3BlID0gbW9kZWxWYWx1ZVxuICAgIHdoaWxlKCBpdGVtcy5sZW5ndGggKXtcbiAgICAgIGlmKCBzY29wZT09bnVsbCApcmV0dXJuIG51bGxcbiAgICAgIGxldCBmaXJzdEl0ZW0gPSA8c3RyaW5nPml0ZW1zLnNoaWZ0KClcbiAgICAgIHNjb3BlID0gc2NvcGVbIGZpcnN0SXRlbSBdXG4gICAgfVxuXG4gICAgcmV0dXJuIHNjb3BlXG4gIH1cblxuICBtb2RlbEluZGV4KGl0ZW0pe1xuICAgIHRoaXMubW9kZWwgPSBhcnJheSh0aGlzLm1vZGVsKVxuICAgIGZvcihsZXQgaT10aGlzLm1vZGVsLmxlbmd0aC0xOyBpID49IDA7IC0taSl7XG4gICAgICBsZXQgdmFsdWUgPSB0aGlzLmdldEFycmF5SXRlbVZhbHVlKCBpdGVtIClcbiAgICAgIGxldCBtb2RlbFZhbHVlID0gdGhpcy5nZXRNb2RlbFZhbHVlVG9BcnJheUl0ZW0oIHRoaXMubW9kZWxbaV0gKVxuICAgICAgaWYoIHZhbHVlID09IG1vZGVsVmFsdWUgKXJldHVybiBpXG4gICAgfVxuICAgIHJldHVybiAtMVxuICB9XG5cbiAgaXNJdGVtU2VsZWN0ZWQoaXRlbSl7XG4gICAgcmV0dXJuIHRoaXMubW9kZWxJbmRleChpdGVtKT49MFxuICB9XG5cbiAgZ2V0SXRlbUNsYXNzKGl0ZW0pOnN0cmluZ3tcbiAgICBjb25zdCBzZWxlY3RlZCA9IHRoaXMuaXNJdGVtU2VsZWN0ZWQoaXRlbSlcbiAgICBsZXQgc3RyaW5nID0gJydcbiAgICBcbiAgICBpZih0aGlzLnN0eWxpemUpe1xuICAgICAgc3RyaW5nICs9ICdjdXJzb3ItcG9pbnRlciBwYWQtaCBwYWQtdi1zbSBib3JkZXItZ3JleS02eCBib3JkZXItYm90dG9tICdcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0eWxpemUgJiYgc2VsZWN0ZWQpe1xuICAgICAgc3RyaW5nICs9ICdiZy13YXJuaW5nICdcbiAgICB9XG5cbiAgICBpZih0aGlzLnN0eWxpemUgJiYgIXNlbGVjdGVkKXtcbiAgICAgIHN0cmluZyArPSAnaG92ZXItYmctZ3JleS01eCAnXG4gICAgfVxuXG4gICAgcmV0dXJuIHN0cmluZ1xuXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmVudEJ5VGFnTmFtZShub2RlLCB0YWduYW1lKSB7XG4gIGxldCBwYXJlbnQ7XG4gIGlmIChub2RlID09PSBudWxsIHx8IHRhZ25hbWUgPT09ICcnKSByZXR1cm47XG4gIHBhcmVudCAgPSBub2RlLnBhcmVudE5vZGU7XG4gIHRhZ25hbWUgPSB0YWduYW1lLnRvVXBwZXJDYXNlKCk7XG5cbiAgd2hpbGUgKHBhcmVudCAmJiBwYXJlbnQudGFnTmFtZSAhPT0gXCJIVE1MXCIpIHtcbiAgICBpZiAocGFyZW50LnRhZ05hbWUgPT09IHRhZ25hbWUpIHtcbiAgICAgIHJldHVybiBwYXJlbnQ7XG4gICAgfVxuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICB9XG5cbiAgcmV0dXJuO1xufVxuIl19