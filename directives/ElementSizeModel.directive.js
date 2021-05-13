var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
var ElementSizeModel = /** @class */ (function () {
    function ElementSizeModel(element) {
        this.element = element;
        this.elementSizeModelChange = new EventEmitter();
    }
    ElementSizeModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.onResize = function () {
            _this.setModel();
        };
        window.addEventListener('resize', this.onResize);
        Promise.resolve().then(function () { return _this.setModel(); });
        this.observer = new MutationObserver(function () {
            _this.setModel();
        });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        setTimeout(function () { return _this.setModel(); }, 800);
    };
    ElementSizeModel.prototype.ngOnChanges = function () {
        var _this = this;
        Promise.resolve().then(function () {
            if (!_this.inChange) {
                _this.setModel();
            }
        });
    };
    ElementSizeModel.prototype.setModel = function () {
        var _this = this;
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        Promise.resolve().then(function () {
            _this.inChange = false;
        });
    };
    ElementSizeModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    };
    ElementSizeModel.decorators = [
        { type: Directive, args: [{
                    selector: '[elementSizeModel]'
                },] }
    ];
    ElementSizeModel.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementSizeModel.propDecorators = {
        elementSizeModelWatch: [{ type: Input }],
        elementSizeModel: [{ type: Input }],
        elementSizeModelChange: [{ type: Output }]
    };
    return ElementSizeModel;
}());
export { ElementSizeModel };
var ElementHeightModel = /** @class */ (function (_super) {
    __extends(ElementHeightModel, _super);
    function ElementHeightModel(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.elementHeightModelChange = new EventEmitter();
        return _this;
    }
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    ElementHeightModel.decorators = [
        { type: Directive, args: [{
                    selector: '[elementHeightModel]'
                },] }
    ];
    ElementHeightModel.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementHeightModel.propDecorators = {
        elementHeightModel: [{ type: Input }],
        elementHeightModelChange: [{ type: Output }]
    };
    return ElementHeightModel;
}(ElementSizeModel));
export { ElementHeightModel };
var ElementWidthModel = /** @class */ (function (_super) {
    __extends(ElementWidthModel, _super);
    function ElementWidthModel(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.elementWidthModelChange = new EventEmitter();
        return _this;
    }
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    ElementWidthModel.decorators = [
        { type: Directive, args: [{
                    selector: '[elementWidthModel]',
                    exportAs: 'ElementWidthModel'
                },] }
    ];
    ElementWidthModel.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ElementWidthModel.propDecorators = {
        elementWidthModel: [{ type: Input }],
        elementWidthModelChange: [{ type: Output }]
    };
    return ElementWidthModel;
}(ElementSizeModel));
export { ElementWidthModel };
//# sourceMappingURL=ElementSizeModel.directive.js.map