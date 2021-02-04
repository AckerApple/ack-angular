import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
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
ElementSizeModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementSizeModel]'
            },] }
];
ElementSizeModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementSizeModel.propDecorators = {
    elementSizeModelWatch: [{ type: Input }],
    elementSizeModel: [{ type: Input }],
    elementSizeModelChange: [{ type: Output }]
};
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
ElementHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementHeightModel]'
            },] }
];
ElementHeightModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementHeightModel.propDecorators = {
    elementHeightModel: [{ type: Input }],
    elementHeightModelChange: [{ type: Output }]
};
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
ElementWidthModel.decorators = [
    { type: Directive, args: [{
                selector: '[elementWidthModel]',
                exportAs: 'ElementWidthModel'
            },] }
];
ElementWidthModel.ctorParameters = () => [
    { type: ElementRef }
];
ElementWidthModel.propDecorators = {
    elementWidthModel: [{ type: Input }],
    elementWidthModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRWxlbWVudFNpemVNb2RlbC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZGlyZWN0aXZlcy9FbGVtZW50U2l6ZU1vZGVsLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQTtBQUluQixNQUFNLE9BQU8sZ0JBQWdCO0lBVzlCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGM0IsMkJBQXNCLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQUVkLENBQUM7SUFFeEMsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLEdBQUcsR0FBRSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtRQUNqQixDQUFDLENBQUE7UUFFRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNoRCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBRTNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxnQkFBZ0IsQ0FBQyxHQUFFLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2pCLENBQUMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUc7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFELFVBQVUsQ0FBQyxHQUFFLEVBQUUsQ0FBQSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsR0FBRyxDQUFDLENBQUE7SUFDdEMsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRTtZQUN6QixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFBO2FBQ2hCO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLElBQUksRUFBRSxDQUFBO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFBO1FBQ3BCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO1FBQ3BFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFBO1FBQ3RFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFFdkQsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUE7UUFDckIsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUE7UUFDMUIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDckQsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsb0JBQW9CO2FBQy9COzs7WUFMQyxVQUFVOzs7b0NBV1QsS0FBSzsrQkFFTCxLQUFLO3FDQUNMLE1BQU07O0FBd0ROLE1BQU0sT0FBTyxrQkFBbUIsU0FBUSxnQkFBZ0I7SUFJekQsWUFBbUIsT0FBa0I7UUFDbkMsS0FBSyxDQUFFLE9BQU8sQ0FBRSxDQUFBO1FBREMsWUFBTyxHQUFQLE9BQU8sQ0FBVztRQUYzQiw2QkFBd0IsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO0lBSXZELENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQTtRQUNqRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0lBQzdELENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7WUF0RUMsVUFBVTs7O2lDQXVFVCxLQUFLO3VDQUNMLE1BQU07O0FBZU4sTUFBTSxPQUFPLGlCQUFrQixTQUFRLGdCQUFnQjtJQUl4RCxZQUFtQixPQUFrQjtRQUNuQyxLQUFLLENBQUUsT0FBTyxDQUFFLENBQUE7UUFEQyxZQUFPLEdBQVAsT0FBTyxDQUFXO1FBRjNCLDRCQUF1QixHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7SUFJdEQsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFBO1FBQy9ELElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7SUFDM0QsQ0FBQzs7O1lBZEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7OztZQXZGQyxVQUFVOzs7Z0NBd0ZULEtBQUs7c0NBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VsZW1lbnRTaXplTW9kZWxdJ1xufSkgZXhwb3J0IGNsYXNzIEVsZW1lbnRTaXplTW9kZWx7XG4gIG9uUmVzaXplXG4gIG9ic2VydmVyXG4gIHRpbWVvdXQ6YW55XG4gIGluQ2hhbmdlOmJvb2xlYW5cblxuICBASW5wdXQoKSBlbGVtZW50U2l6ZU1vZGVsV2F0Y2g6YW55Ly9jYXVzZXMgbmdPbkNoYW5nZXMgdG8gZmlyZVxuXG4gIEBJbnB1dCgpIGVsZW1lbnRTaXplTW9kZWxcbiAgQE91dHB1dCgpIGVsZW1lbnRTaXplTW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXt9XG5cbiAgbmdBZnRlclZpZXdJbml0KCl7XG4gICAgdGhpcy5vblJlc2l6ZSA9ICgpPT57XG4gICAgICB0aGlzLnNldE1vZGVsKClcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5vblJlc2l6ZSlcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpPT50aGlzLnNldE1vZGVsKCkpXG5cbiAgICB0aGlzLm9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKCk9PntcbiAgICAgIHRoaXMuc2V0TW9kZWwoKVxuICAgIH0pXG4gICAgXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfVxuXG4gICAgdGhpcy5vYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50LCBjb25maWcpO1xuXG4gICAgc2V0VGltZW91dCgoKT0+dGhpcy5zZXRNb2RlbCgpLCA4MDApXG4gIH1cblxuICBuZ09uQ2hhbmdlcygpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCk9PntcbiAgICAgIGlmKCF0aGlzLmluQ2hhbmdlKXtcbiAgICAgICAgdGhpcy5zZXRNb2RlbCgpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIHNldE1vZGVsKCl7XG4gICAgdGhpcy5lbGVtZW50U2l6ZU1vZGVsID0gdGhpcy5lbGVtZW50U2l6ZU1vZGVsIHx8IHt9XG4gICAgdGhpcy5pbkNoYW5nZSA9IHRydWVcbiAgICB0aGlzLmVsZW1lbnRTaXplTW9kZWwud2lkdGggPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aFxuICAgIHRoaXMuZWxlbWVudFNpemVNb2RlbC5oZWlnaHQgPSB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHRcbiAgICB0aGlzLmVsZW1lbnRTaXplTW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmVsZW1lbnRTaXplTW9kZWwpXG4gICAgXG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+e1xuICAgICAgdGhpcy5pbkNoYW5nZT1mYWxzZVxuICAgIH0pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMub25SZXNpemUpXG4gIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2VsZW1lbnRIZWlnaHRNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgRWxlbWVudEhlaWdodE1vZGVsIGV4dGVuZHMgRWxlbWVudFNpemVNb2RlbHtcbiAgQElucHV0KCkgZWxlbWVudEhlaWdodE1vZGVsXG4gIEBPdXRwdXQoKSBlbGVtZW50SGVpZ2h0TW9kZWxDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKClcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDpFbGVtZW50UmVmKXtcbiAgICBzdXBlciggZWxlbWVudCApXG4gIH1cblxuICBzZXRNb2RlbCgpe1xuICAgIHRoaXMuZWxlbWVudEhlaWdodE1vZGVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4gICAgdGhpcy5lbGVtZW50SGVpZ2h0TW9kZWxDaGFuZ2UuZW1pdCh0aGlzLmVsZW1lbnRIZWlnaHRNb2RlbClcbiAgfVxufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbZWxlbWVudFdpZHRoTW9kZWxdJyxcbiAgZXhwb3J0QXM6ICdFbGVtZW50V2lkdGhNb2RlbCdcbn0pIGV4cG9ydCBjbGFzcyBFbGVtZW50V2lkdGhNb2RlbCBleHRlbmRzIEVsZW1lbnRTaXplTW9kZWx7XG4gIEBJbnB1dCgpIGVsZW1lbnRXaWR0aE1vZGVsXG4gIEBPdXRwdXQoKSBlbGVtZW50V2lkdGhNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHN1cGVyKCBlbGVtZW50IClcbiAgfVxuXG4gIHNldE1vZGVsKCl7XG4gICAgdGhpcy5lbGVtZW50V2lkdGhNb2RlbCA9IHRoaXMuZWxlbWVudC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoXG4gICAgdGhpcy5lbGVtZW50V2lkdGhNb2RlbENoYW5nZS5lbWl0KHRoaXMuZWxlbWVudFdpZHRoTW9kZWwpXG4gIH1cbn1cbiJdfQ==