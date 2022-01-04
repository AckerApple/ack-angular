import { Directive, Input, Output, EventEmitter } from "@angular/core";
import { HtmlSizeService } from "./HtmlSizeWatcher";
import { HtmlWidthModel } from "./HtmlWidthModel.directive";
export class HtmlHeightModel extends HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
}
HtmlHeightModel.decorators = [
    { type: Directive, args: [{
                selector: '[htmlHeightModel]'
            },] }
];
HtmlHeightModel.ctorParameters = () => [
    { type: HtmlSizeService }
];
HtmlHeightModel.propDecorators = {
    htmlHeightModel: [{ type: Input }],
    htmlHeightModelChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHRtbEhlaWdodE1vZGVsLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kaXJlY3RpdmVzL0h0bWxIZWlnaHRNb2RlbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDYixNQUFNLGVBQWUsQ0FBQTtBQUV0QixPQUFPLEVBQ0ssZUFBZSxFQUMxQixNQUFNLG1CQUFtQixDQUFBO0FBRTFCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQTtBQUl4RCxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxjQUFjO0lBSXBELFlBQ1MsZUFBK0I7UUFFdEMsS0FBSyxDQUFFLGVBQWUsQ0FBRSxDQUFBO1FBRmpCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQUg5QiwwQkFBcUIsR0FBOEIsSUFBSSxZQUFZLEVBQUUsQ0FBQTtJQU0vRSxDQUFDO0lBRUQsVUFBVTtRQUNSLE9BQU8sSUFBSSxDQUFDLGVBQWUsS0FBSyxNQUFNLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUE7SUFDOUUsQ0FBQztJQUVELFFBQVEsQ0FBRSxLQUFjO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQTtRQUNuQyxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFFLElBQUksQ0FBQyxlQUFlLENBQUUsQ0FBQTtJQUN6RCxDQUFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7YUFDOUI7OztZQVBXLGVBQWU7Ozs4QkFReEIsS0FBSztvQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXJcbn0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIlxuXG5pbXBvcnQge1xuICBodG1sU2l6ZSwgSHRtbFNpemVTZXJ2aWNlXG59IGZyb20gXCIuL0h0bWxTaXplV2F0Y2hlclwiXG5cbmltcG9ydCB7IEh0bWxXaWR0aE1vZGVsIH0gZnJvbSBcIi4vSHRtbFdpZHRoTW9kZWwuZGlyZWN0aXZlXCJcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2h0bWxIZWlnaHRNb2RlbF0nXG59KSBleHBvcnQgY2xhc3MgSHRtbEhlaWdodE1vZGVsIGV4dGVuZHMgSHRtbFdpZHRoTW9kZWx7XG4gIEBJbnB1dCgpIGh0bWxIZWlnaHRNb2RlbCE6IG51bWJlciB8IG51bGxcbiAgQE91dHB1dCgpIGh0bWxIZWlnaHRNb2RlbENoYW5nZTpFdmVudEVtaXR0ZXI8bnVtYmVyIHxudWxsPiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBIdG1sU2l6ZVNlcnZpY2U6SHRtbFNpemVTZXJ2aWNlXG4gICl7XG4gICAgc3VwZXIoIEh0bWxTaXplU2VydmljZSApXG4gIH1cblxuICBoYXNDaGFuZ2VkKCl7XG4gICAgcmV0dXJuIHRoaXMuaHRtbEhlaWdodE1vZGVsICE9PSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuICB9XG5cbiAgc2V0TW9kZWwoIG1vZGVsOmh0bWxTaXplICl7XG4gICAgdGhpcy5odG1sSGVpZ2h0TW9kZWwgPSBtb2RlbC5oZWlnaHRcbiAgICB0aGlzLmh0bWxIZWlnaHRNb2RlbENoYW5nZS5lbWl0KCB0aGlzLmh0bWxIZWlnaHRNb2RlbCApXG4gIH1cbn1cbiJdfQ==