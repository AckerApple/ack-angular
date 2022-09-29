import { Directive, Input, Output, EventEmitter } from "@angular/core";
import * as i0 from "@angular/core";
export class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new EventEmitter();
    }
    ngAfterViewInit() {
        this.onResize = () => {
            this.setModel();
        };
        window.addEventListener('resize', this.onResize);
        Promise.resolve().then(() => this.setModel());
        this.observer = new MutationObserver(() => {
            this.setModel();
        });
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        setTimeout(() => this.setModel(), 800);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            if (!this.inChange) {
                this.setModel();
            }
        });
    }
    setModel() {
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        Promise.resolve().then(() => {
            this.inChange = false;
        });
    }
    ngOnDestroy() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }
}
ElementSizeModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementSizeModel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementSizeModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ElementSizeModel, selector: "[elementSizeModel]", inputs: { elementSizeModelWatch: "elementSizeModelWatch", elementSizeModel: "elementSizeModel" }, outputs: { elementSizeModelChange: "elementSizeModelChange" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementSizeModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[elementSizeModel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { elementSizeModelWatch: [{
                type: Input
            }], elementSizeModel: [{
                type: Input
            }], elementSizeModelChange: [{
                type: Output
            }] } });
export class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
}
ElementHeightModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementHeightModel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementHeightModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ElementHeightModel, selector: "[elementHeightModel]", inputs: { elementHeightModel: "elementHeightModel" }, outputs: { elementHeightModelChange: "elementHeightModelChange" }, usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementHeightModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[elementHeightModel]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { elementHeightModel: [{
                type: Input
            }], elementHeightModelChange: [{
                type: Output
            }] } });
export class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
}
ElementWidthModel.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementWidthModel, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ElementWidthModel.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "14.2.4", type: ElementWidthModel, selector: "[elementWidthModel]", inputs: { elementWidthModel: "elementWidthModel" }, outputs: { elementWidthModelChange: "elementWidthModelChange" }, exportAs: ["ElementWidthModel"], usesInheritance: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.2.4", ngImport: i0, type: ElementWidthModel, decorators: [{
            type: Directive,
            args: [{
                    selector: '[elementWidthModel]',
                    exportAs: 'ElementWidthModel'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { elementWidthModel: [{
                type: Input
            }], elementWidthModelChange: [{
                type: Output
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlbWVudFNpemVNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9FbGVtZW50U2l6ZU1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUViLE1BQU0sZUFBZSxDQUFBOztBQUluQixNQUFNLE9BQU8sZ0JBQWdCO0lBVzlCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGM0IsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUVkLENBQUM7SUFFeEMsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNqQixDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUc7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFELFVBQVUsQ0FBQyxH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RSxxQkFBcUI7b0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7aUJBQzlCO2lHQUNVLGlCQUFpQjtzQkFBekIsS0FBSztnQkFDSSx1QkFBdUI7c0JBQWhDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgRWxlbWVudFJlZlxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiXG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tlbGVtZW50U2l6ZU1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBFbGVtZW50U2l6ZU1vZGVse1xuICBvblJlc2l6ZTogYW55XG4gIG9ic2VydmVyOiBhbnlcbiAgdGltZW91dDogYW55XG4gIGluQ2hhbmdlITogYm9vbGVhblxuXG4gIEBJbnB1dCgpIGVsZW1lbnRTaXplTW9kZWxXYXRjaDphbnkvL2NhdXNlcyBuZ09uQ2hhbmdlcyB0byBmaXJlXG5cbiAgQElucHV0KCkgZWxlbWVudFNpemVNb2RlbDogYW55XG4gIEBPdXRwdXQoKSBlbGVtZW50U2l6ZU1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7fVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xuICAgIHRoaXMub25SZXNpemUgPSAoKT0+e1xuICAgICAgdGhpcy5zZXRNb2RlbCgpXG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5zZXRNb2RlbCgpKVxuXG4gICAgdGhpcy5vYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKCgpPT57XG4gICAgICB0aGlzLnNldE1vZGVsKClcbiAgICB9KVxuXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xuXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5zZXRNb2RlbCgpLCA4MDApXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIGlmKCF0aGlzLmluQ2hhbmdlKXtcbiAgICAgICAgdGhpcy5zZXRNb2RlbCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldE1vZGVsKCl7XG4gICAgdGhpcy5lbGVtZW50U2l6ZU1vZGVsID0gdGhpcy5lbGVtZW50U2l6ZU1vZGVsIHx8IHt9XG4gICAgdGhpcy5pbkNoYW5nZSA9IHRydWVcbiAgICB0aGlzLmVsZW1lbnRTaXplTW9kZWwud2lkdGggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuZWxlbWVudFNpemVNb2RlbC5oZWlnaHQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRTaXplTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmVsZW1lbnRTaXplTW9kZWwpXG5cbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT57XG4gICAgICB0aGlzLmluQ2hhbmdlPWZhbHNlXG4gICAgfSlcbiAgfVxuXG4gIG5nT25EZXN0cm95KCl7XG4gICAgdGhpcy5vYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZWxlbWVudEhlaWdodE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBFbGVtZW50SGVpZ2h0TW9kZWwgZXh0ZW5kcyBFbGVtZW50U2l6ZU1vZGVse1xuICBASW5wdXQoKSBlbGVtZW50SGVpZ2h0TW9kZWw6IGFueVxuICBAT3V0cHV0KCkgZWxlbWVudEhlaWdodE1vZGVsQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpXG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6RWxlbWVudFJlZil7XG4gICAgc3VwZXIoIGVsZW1lbnQgKVxuICB9XG5cbiAgc2V0TW9kZWwoKXtcbiAgICB0aGlzLmVsZW1lbnRIZWlnaHRNb2RlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodFxuICAgIHRoaXMuZWxlbWVudEhlaWdodE1vZGVsQ2hhbmdlLmVtaXQodGhpcy5lbGVtZW50SGVpZ2h0TW9kZWwpXG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VsZW1lbnRXaWR0aE1vZGVsXScsXG4gIGV4cG9ydEFzOiAnRWxlbWVudFdpZHRoTW9kZWwnXG59KSBleHBvcnQgY2xhc3MgRWxlbWVudFdpZHRoTW9kZWwgZXh0ZW5kcyBFbGVtZW50U2l6ZU1vZGVse1xuICBASW5wdXQoKSBlbGVtZW50V2lkdGhNb2RlbDogYW55XG4gIEBPdXRwdXQoKSBlbGVtZW50V2lkdGhNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHN1cGVyKCBlbGVtZW50IClcbiAgfVxuXG4gIHNldE1vZGVsKCl7XG4gICAgdGhpcy5lbGVtZW50V2lkdGhNb2RlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5lbGVtZW50V2lkdGhNb2RlbENoYW5nZS5lbWl0KHRoaXMuZWxlbWVudFdpZHRoTW9kZWwpXG4gIH1cbn1cbiJdfQ==