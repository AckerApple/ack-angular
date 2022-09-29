import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new EventEmitter();
        this.onChange = () => {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    }
}
StatusOnlineModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: StatusOnlineModel, deps: [], target: i0.ɵɵFactoryTarget.Directive });
StatusOnlineModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: StatusOnlineModel, selector: "[statusOnlineModel]", inputs: { statusOnlineModel: "statusOnlineModel" }, outputs: { statusOnlineModelChange: "statusOnlineModelChange" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: StatusOnlineModel, decorators: [{
            type: Directive,
            args: [{ selector: '[statusOnlineModel]' }]
        }], ctorParameters: function () { return []; }, propDecorators: { statusOnlineModel: [{
                type: Input
            }], statusOnlineModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7O0FBR3RCLE1BQU0sT0FBTyxpQkFBaUI7SUFLNUI7UUFGVSw0QkFBdUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBR3BELElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxTQUFTLENBQUMsTUFBTSxDQUFBO1lBQ3pDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFDM0QsQ0FBQyxDQUFBO1FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDaEQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFFakQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBRUQsV0FBVztRQUNULE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ25ELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RELENBQUM7OzhHQXBCVSxpQkFBaUI7a0dBQWpCLGlCQUFpQjsyRkFBakIsaUJBQWlCO2tCQUQ3QixTQUFTO21CQUFDLEVBQUMsUUFBUSxFQUFDLHFCQUFxQixFQUFDOzBFQUdoQyxpQkFBaUI7c0JBQXpCLEtBQUs7Z0JBQ0ksdUJBQXVCO3NCQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW3N0YXR1c09ubGluZU1vZGVsXSd9KVxuZXhwb3J0IGNsYXNzIFN0YXR1c09ubGluZU1vZGVse1xuICBvbkNoYW5nZTogYW55XG4gIEBJbnB1dCgpIHN0YXR1c09ubGluZU1vZGVsOiBhbnlcbiAgQE91dHB1dCgpIHN0YXR1c09ubGluZU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IoKXtcbiAgICB0aGlzLm9uQ2hhbmdlID0gKCk9PntcbiAgICAgIHRoaXMuc3RhdHVzT25saW5lTW9kZWwgPSBuYXZpZ2F0b3Iub25MaW5lXG4gICAgICB0aGlzLnN0YXR1c09ubGluZU1vZGVsQ2hhbmdlLmVtaXQodGhpcy5zdGF0dXNPbmxpbmVNb2RlbClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5vbkNoYW5nZSgpKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICB9XG59Il19