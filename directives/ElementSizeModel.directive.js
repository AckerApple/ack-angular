import { __extends } from "tslib";
import { Directive, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import * as i0 from "@angular/core";
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
    ElementSizeModel.ɵfac = function ElementSizeModel_Factory(t) { return new (t || ElementSizeModel)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ElementSizeModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ElementSizeModel, selectors: [["", "elementSizeModel", ""]], inputs: { elementSizeModelWatch: "elementSizeModelWatch", elementSizeModel: "elementSizeModel" }, outputs: { elementSizeModelChange: "elementSizeModelChange" }, features: [i0.ɵɵNgOnChangesFeature] });
    return ElementSizeModel;
}());
export { ElementSizeModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementSizeModel, [{
        type: Directive,
        args: [{
                selector: '[elementSizeModel]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { elementSizeModelWatch: [{
            type: Input
        }], elementSizeModel: [{
            type: Input
        }], elementSizeModelChange: [{
            type: Output
        }] }); })();
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
    ElementHeightModel.ɵfac = function ElementHeightModel_Factory(t) { return new (t || ElementHeightModel)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ElementHeightModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ElementHeightModel, selectors: [["", "elementHeightModel", ""]], inputs: { elementHeightModel: "elementHeightModel" }, outputs: { elementHeightModelChange: "elementHeightModelChange" }, features: [i0.ɵɵInheritDefinitionFeature] });
    return ElementHeightModel;
}(ElementSizeModel));
export { ElementHeightModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementHeightModel, [{
        type: Directive,
        args: [{
                selector: '[elementHeightModel]'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { elementHeightModel: [{
            type: Input
        }], elementHeightModelChange: [{
            type: Output
        }] }); })();
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
    ElementWidthModel.ɵfac = function ElementWidthModel_Factory(t) { return new (t || ElementWidthModel)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    ElementWidthModel.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ElementWidthModel, selectors: [["", "elementWidthModel", ""]], inputs: { elementWidthModel: "elementWidthModel" }, outputs: { elementWidthModelChange: "elementWidthModelChange" }, exportAs: ["ElementWidthModel"], features: [i0.ɵɵInheritDefinitionFeature] });
    return ElementWidthModel;
}(ElementSizeModel));
export { ElementWidthModel };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ElementWidthModel, [{
        type: Directive,
        args: [{
                selector: '[elementWidthModel]',
                exportAs: 'ElementWidthModel'
            }]
    }], function () { return [{ type: i0.ElementRef }]; }, { elementWidthModel: [{
            type: Input
        }], elementWidthModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=ElementSizeModel.directive.js.map