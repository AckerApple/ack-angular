import { Injectable, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export class Prompts {
    constructor() {
        this.prompts = [];
    }
    remove(prompt) {
        for (let x = this.prompts.length - 1; x >= 0; --x) {
            if (this.prompts[x] == prompt) {
                this.prompts.splice(x, 1);
                return;
            }
        }
    }
    issuePrompt(prompt) {
        this.prompts.push(prompt);
        prompt.emitter.subscribe(() => this.remove(prompt));
        return prompt.emitter;
    }
    alert(message, options = {}) {
        options.emitter = new EventEmitter();
        options.type = "alert";
        options.message = message;
        return this.issuePrompt(options);
    }
    confirm(message, options = {}) {
        options.emitter = new EventEmitter();
        options.type = "confirm";
        options.message = message;
        return this.issuePrompt(options);
    }
}
Prompts.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Prompts, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
Prompts.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Prompts });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: Prompts, decorators: [{
            type: Injectable
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvbXB0cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9wcm92aWRlcnMvUHJvbXB0cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFzQjNDLE1BQU0sT0FBTyxPQUFPO0lBQWxDO1FBQ0UsWUFBTyxHQUFZLEVBQUUsQ0FBQTtLQW9DdEI7SUFsQ0MsTUFBTSxDQUFDLE1BQWE7UUFDbEIsS0FBSSxJQUFJLENBQUMsR0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBQztZQUMzQyxJQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFDO2dCQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7Z0JBQ3pCLE9BQU07YUFDUDtTQUNGO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxNQUFhO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3pCLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTtRQUNqRCxPQUFPLE1BQU0sQ0FBQyxPQUFPLENBQUE7SUFDdkIsQ0FBQztJQUVELEtBQUssQ0FDSCxPQUFjLEVBQ2QsVUFBcUMsRUFBRTtRQUV2QyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDcEMsT0FBTyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7UUFDdEIsT0FBTyxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUE7UUFDekIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFVLE9BQU8sQ0FBRSxDQUFBO0lBQzVDLENBQUM7SUFFRCxPQUFPLENBQ0wsT0FBYyxFQUNkLFVBQXFDLEVBQUU7UUFFdkMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBQ3BDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsU0FBUyxDQUFBO1FBQ3hCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3pCLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBVSxPQUFPLENBQUUsQ0FBQTtJQUM1QyxDQUFDOztvR0FwQ3dCLE9BQU87d0dBQVAsT0FBTzsyRkFBUCxPQUFPO2tCQUFqQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgYnV0dG9ue1xuICB0ZXh0OiBzdHJpbmdcbiAgLy9yb2xlPzogXCJjYW5jZWxcIi8vd2hlbiBcImNhbmNlbFwiIHRoZW4gYXV0byBjb25maWdzIHRvIGNsb3NlIHByb21wdFxuICBoYW5kbGVyPzogKCkgPT4gYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgcHJvbXB0T3B0aW9uc3tcbiAgdGl0bGU/ICAgOiBzdHJpbmdcbiAgYnV0dG9ucz8gOiBidXR0b25bXS8vbm90IHlldCB1c2VkXG4gIGVtaXR0ZXI/IDogRXZlbnRFbWl0dGVyPGJvb2xlYW4+XG4gIG1lc3NhZ2U/IDogc3RyaW5nXG4gIHR5cGU/ICAgIDogXCJjb25maXJtXCJ8XCJhbGVydFwifFwic3RyaW5nXCJcbn1cblxuZXhwb3J0IGludGVyZmFjZSBwcm9tcHQgZXh0ZW5kcyBwcm9tcHRPcHRpb25ze1xuICB0eXBlOlwiY29uZmlybVwifFwiYWxlcnRcInxcInN0cmluZ1wiXG4gIG1lc3NhZ2U6c3RyaW5nXG4gIGVtaXR0ZXI6RXZlbnRFbWl0dGVyPGJvb2xlYW4+XG59XG5cbkBJbmplY3RhYmxlKCkgZXhwb3J0IGNsYXNzIFByb21wdHN7XG4gIHByb21wdHM6cHJvbXB0W10gPSBbXVxuIFxuICByZW1vdmUocHJvbXB0OnByb21wdCl7XG4gICAgZm9yKGxldCB4PXRoaXMucHJvbXB0cy5sZW5ndGgtMTsgeCA+PSAwOyAtLXgpe1xuICAgICAgaWYodGhpcy5wcm9tcHRzW3hdID09IHByb21wdCl7XG4gICAgICAgIHRoaXMucHJvbXB0cy5zcGxpY2UoeCwgMSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaXNzdWVQcm9tcHQocHJvbXB0OnByb21wdCl7XG4gICAgdGhpcy5wcm9tcHRzLnB1c2gocHJvbXB0KVxuICAgIHByb21wdC5lbWl0dGVyLnN1YnNjcmliZSgoKT0+dGhpcy5yZW1vdmUocHJvbXB0KSlcbiAgICByZXR1cm4gcHJvbXB0LmVtaXR0ZXJcbiAgfVxuXG4gIGFsZXJ0KFxuICAgIG1lc3NhZ2U6c3RyaW5nLFxuICAgIG9wdGlvbnM6cHJvbXB0T3B0aW9ucz08cHJvbXB0T3B0aW9ucz57fVxuICApOkV2ZW50RW1pdHRlcjxib29sZWFuPntcbiAgICBvcHRpb25zLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICBvcHRpb25zLnR5cGUgPSBcImFsZXJ0XCJcbiAgICBvcHRpb25zLm1lc3NhZ2UgPSBtZXNzYWdlXG4gICAgcmV0dXJuIHRoaXMuaXNzdWVQcm9tcHQoIDxwcm9tcHQ+b3B0aW9ucyApXG4gIH1cblxuICBjb25maXJtKFxuICAgIG1lc3NhZ2U6c3RyaW5nLFxuICAgIG9wdGlvbnM6cHJvbXB0T3B0aW9ucz08cHJvbXB0T3B0aW9ucz57fVxuICApOkV2ZW50RW1pdHRlcjxib29sZWFuPntcbiAgICBvcHRpb25zLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICBvcHRpb25zLnR5cGUgPSBcImNvbmZpcm1cIlxuICAgIG9wdGlvbnMubWVzc2FnZSA9IG1lc3NhZ2VcbiAgICByZXR1cm4gdGhpcy5pc3N1ZVByb21wdCggPHByb21wdD5vcHRpb25zIClcbiAgfVxufSJdfQ==