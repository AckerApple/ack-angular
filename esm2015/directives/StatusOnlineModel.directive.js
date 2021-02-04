import { Directive, Input, Output, EventEmitter } from "@angular/core";
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
StatusOnlineModel.decorators = [
    { type: Directive, args: [{ selector: '[statusOnlineModel]' },] }
];
StatusOnlineModel.ctorParameters = () => [];
StatusOnlineModel.propDecorators = {
    statusOnlineModel: [{ type: Input }],
    statusOnlineModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2RpcmVjdGl2ZXMvU3RhdHVzT25saW5lTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUE7QUFHdEIsTUFBTSxPQUFPLGlCQUFpQjtJQUs1QjtRQUZVLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFHcEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxHQUFFLEVBQUU7WUFDbEIsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUE7WUFDekMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUMzRCxDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVqRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxXQUFXO1FBQ1QsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDbkQsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDdEQsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBQyxxQkFBcUIsRUFBQzs7OztnQ0FHeEMsS0FBSztzQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5ARGlyZWN0aXZlKHtzZWxlY3RvcjonW3N0YXR1c09ubGluZU1vZGVsXSd9KVxuZXhwb3J0IGNsYXNzIFN0YXR1c09ubGluZU1vZGVse1xuICBvbkNoYW5nZVxuICBASW5wdXQoKSBzdGF0dXNPbmxpbmVNb2RlbFxuICBAT3V0cHV0KCkgc3RhdHVzT25saW5lTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3Rvcigpe1xuICAgIHRoaXMub25DaGFuZ2UgPSAoKT0+e1xuICAgICAgdGhpcy5zdGF0dXNPbmxpbmVNb2RlbCA9IG5hdmlnYXRvci5vbkxpbmVcbiAgICAgIHRoaXMuc3RhdHVzT25saW5lTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLnN0YXR1c09ubGluZU1vZGVsKVxuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwib25saW5lXCIsIHRoaXMub25DaGFuZ2UpXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvZmZsaW5lXCIsIHRoaXMub25DaGFuZ2UpXG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5vbkNoYW5nZSgpKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKXtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9ubGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwib2ZmbGluZVwiLCB0aGlzLm9uQ2hhbmdlKVxuICB9XG59Il19