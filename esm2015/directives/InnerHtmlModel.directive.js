import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
export class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new EventEmitter();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
    }
    ngOnChanges() {
        Promise.resolve().then(() => this.setModel());
    }
    setModel() {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
}
InnerHtmlModel.decorators = [
    { type: Directive, args: [{
                selector: '[innerHtmlModel]'
            },] }
];
InnerHtmlModel.ctorParameters = () => [
    { type: ElementRef }
];
InnerHtmlModel.propDecorators = {
    innerHtmlModel: [{ type: Input }],
    innerHtmlModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSW5uZXJIdG1sTW9kZWwuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3NyYy8iLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvSW5uZXJIdG1sTW9kZWwuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUNMLE1BQU0sRUFDTixZQUFZLEVBQ1osVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFBO0FBSW5CLE1BQU0sT0FBTyxjQUFjO0lBUTVCLFlBQW1CLE9BQWtCO1FBQWxCLFlBQU8sR0FBUCxPQUFPLENBQVc7UUFGM0IseUJBQW9CLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtRQUdqRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0JBQWdCLENBQUUsR0FBRSxFQUFFLENBQUEsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFFLENBQUE7UUFFM0QsTUFBTSxNQUFNLEdBQUc7WUFDYixVQUFVLEVBQUUsSUFBSTtZQUNoQixTQUFTLEVBQUUsSUFBSTtZQUNmLGFBQWEsRUFBRSxJQUFJO1lBQ25CLE9BQU8sRUFBRSxJQUFJO1NBQ2QsQ0FBQTtRQUNELElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRTFELDRFQUE0RTtRQUM1RSwwRUFBMEU7SUFDNUUsQ0FBQztJQUVELFdBQVc7UUFDVCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUUsRUFBRSxDQUFBLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO0lBQzdDLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUE7UUFDMUQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUE7SUFDckQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQzVCLENBQUM7OztZQXBDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjthQUM3Qjs7O1lBTEMsVUFBVTs7OzZCQVVULEtBQUs7bUNBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBFbGVtZW50UmVmXG59IGZyb20gXCJAYW5ndWxhci9jb3JlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2lubmVySHRtbE1vZGVsXSdcbn0pIGV4cG9ydCBjbGFzcyBJbm5lckh0bWxNb2RlbHtcbiAgcHVibGljIG9uQ2hhbmdlXG4gIHB1YmxpYyBvYnNlcnZlclxuICBwdWJsaWMgdGltZW91dFxuXG4gIEBJbnB1dCgpIGlubmVySHRtbE1vZGVsXG4gIEBPdXRwdXQoKSBpbm5lckh0bWxNb2RlbENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OkVsZW1lbnRSZWYpe1xuICAgIHRoaXMub2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlciggKCk9PnRoaXMuc2V0TW9kZWwoKSApXG4gICAgXG4gICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgIGNoaWxkTGlzdDogdHJ1ZSxcbiAgICAgIGNoYXJhY3RlckRhdGE6IHRydWUsXG4gICAgICBzdWJ0cmVlOiB0cnVlXG4gICAgfVxuICAgIHRoaXMub2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudCwgY29uZmlnKTtcblxuICAgIC8vdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwoKT0+dGhpcy5zZXRNb2RlbCgpKVxuICAgIC8vdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsKCk9PnRoaXMuc2V0TW9kZWwoKSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKT0+dGhpcy5zZXRNb2RlbCgpKVxuICB9XG5cbiAgc2V0TW9kZWwoKXtcbiAgICB0aGlzLmlubmVySHRtbE1vZGVsID0gdGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MXG4gICAgdGhpcy5pbm5lckh0bWxNb2RlbENoYW5nZS5lbWl0KHRoaXMuaW5uZXJIdG1sTW9kZWwpXG4gIH1cblxuICBuZ09uRGVzdHJveSgpe1xuICAgIHRoaXMub2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gIH1cbn0iXX0=