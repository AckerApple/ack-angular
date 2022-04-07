import { 
//TemplateRef,
Injectable } from "@angular/core";
import { 
//prompt,
Prompts } from "./Prompts";
export class AckApp {
    constructor(prompts) {
        this.prompts = prompts;
        this.warnedFixElements = true;
        this.fixedElms = [];
        this.modals = [];
    }
    registerModal(item) {
        this.modals.push(item);
        return this;
    }
    unregisterModal(item) {
        for (let index = this.modals.length - 1; index >= 0; --index) {
            if (this.modals[index] == item) {
                this.modals.splice(index, 1);
                break;
            }
        }
        return this;
    }
}
AckApp.decorators = [
    { type: Injectable }
];
AckApp.ctorParameters = () => [
    { type: 
        //prompt,
        Prompts }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWNrQXBwLnByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3Byb3ZpZGVycy9BY2tBcHAucHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTztBQUNMLGNBQWM7QUFDZCxVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUE7QUFNdEIsT0FBTztBQUNMLFNBQVM7QUFDVCxPQUFPLEVBQ1IsTUFBTSxXQUFXLENBQUE7QUFFSixNQUFNLE9BQU8sTUFBTTtJQU8vQixZQUFvQixPQUFlO1FBQWYsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5uQyxzQkFBaUIsR0FBWSxJQUFJLENBQUE7UUFHakMsY0FBUyxHQUFxQixFQUFFLENBQUE7UUFDaEMsV0FBTSxHQUFjLEVBQUUsQ0FBQTtJQUVnQixDQUFDO0lBRXZDLGFBQWEsQ0FBRSxJQUFhO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3RCLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELGVBQWUsQ0FBRSxJQUFhO1FBQzVCLEtBQUksSUFBSSxLQUFLLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUM7WUFDdEQsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFFLElBQUksRUFBQztnQkFDMUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUMzQixNQUFLO2FBQ047U0FDRjtRQUNELE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQzs7O1lBdEJGLFVBQVU7Ozs7UUFKVCxTQUFTO1FBQ1QsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIC8vVGVtcGxhdGVSZWYsXG4gIEluamVjdGFibGUsXG4gIEVsZW1lbnRSZWZcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuaW1wb3J0IHsgQWNrTW9kYWwgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2tNb2RhbC5jb21wb25lbnRcIlxuLy9pbXBvcnQgeyBBY2tTZWN0aW9uVGVtcGxhdGVzIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNrU2VjdGlvblRlbXBsYXRlcy5jb21wb25lbnRcIlxuLy9pbXBvcnQgeyBBY2tBcHBIZWFkZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2tBcHBIZWFkZXIuY29tcG9uZW50XCJcbi8vaW1wb3J0IHsgQWNrQXBwRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNrQXBwRm9vdGVyLmNvbXBvbmVudFwiXG5pbXBvcnQgeyBBY2tGaXhlZEVsZW1lbnQgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2tGaXhlZEVsZW1lbnQuY29tcG9uZW50XCJcbmltcG9ydCB7XG4gIC8vcHJvbXB0LFxuICBQcm9tcHRzXG59IGZyb20gXCIuL1Byb21wdHNcIlxuXG5ASW5qZWN0YWJsZSgpIGV4cG9ydCBjbGFzcyBBY2tBcHB7XG4gIHdhcm5lZEZpeEVsZW1lbnRzOiBib29sZWFuID0gdHJ1ZVxuICBmaXhlZEVsZW1lbnRTdGFnZSE6IEVsZW1lbnRSZWZcblxuICBmaXhlZEVsbXM6QWNrRml4ZWRFbGVtZW50W10gPSBbXVxuICBtb2RhbHM6QWNrTW9kYWxbXSA9IFtdXG5cbiAgY29uc3RydWN0b3IoIHB1YmxpYyBwcm9tcHRzOlByb21wdHMgKXt9XG5cbiAgcmVnaXN0ZXJNb2RhbCggaXRlbTpBY2tNb2RhbCApOkFja0FwcHtcbiAgICB0aGlzLm1vZGFscy5wdXNoKGl0ZW0pXG4gICAgcmV0dXJuIHRoaXNcbiAgfVxuXG4gIHVucmVnaXN0ZXJNb2RhbCggaXRlbTpBY2tNb2RhbCApe1xuICAgIGZvcihsZXQgaW5kZXg9dGhpcy5tb2RhbHMubGVuZ3RoLTE7IGluZGV4ID49IDA7IC0taW5kZXgpe1xuICAgICAgaWYodGhpcy5tb2RhbHNbaW5kZXhdPT1pdGVtKXtcbiAgICAgICAgdGhpcy5tb2RhbHMuc3BsaWNlKGluZGV4LDEpXG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzXG4gIH1cbn0iXX0=