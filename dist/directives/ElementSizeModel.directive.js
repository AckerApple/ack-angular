"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ElementSizeModel = (function () {
    function ElementSizeModel(element) {
        var _this = this;
        this.element = element;
        this.elementSizeModelChange = new core_1.EventEmitter();
        this.onResize = function () {
            this.setModel();
        }.bind(this);
        window.addEventListener('resize', this.onResize);
        setTimeout(function () { return _this.setModel(); }, 0);
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
    }
    ElementSizeModel.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 800);
    };
    ElementSizeModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.inChange) {
                _this.setModel();
            }
        }, 0);
    };
    ElementSizeModel.prototype.setModel = function () {
        var _this = this;
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        setTimeout(function () { return _this.inChange = false; }, 0);
    };
    ElementSizeModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    };
    ElementSizeModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementSizeModel]'
                },] },
    ];
    ElementSizeModel.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    ElementSizeModel.propDecorators = {
        "elementSizeModelWatch": [{ type: core_1.Input },],
        "elementSizeModel": [{ type: core_1.Input },],
        "elementSizeModelChange": [{ type: core_1.Output },],
    };
    return ElementSizeModel;
}());
exports.ElementSizeModel = ElementSizeModel;
var ElementHeightModel = (function (_super) {
    __extends(ElementHeightModel, _super);
    function ElementHeightModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elementHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    ElementHeightModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementHeightModel]'
                },] },
    ];
    ElementHeightModel.ctorParameters = function () { return []; };
    ElementHeightModel.propDecorators = {
        "elementHeightModel": [{ type: core_1.Input },],
        "elementHeightModelChange": [{ type: core_1.Output },],
    };
    return ElementHeightModel;
}(ElementSizeModel));
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function (_super) {
    __extends(ElementWidthModel, _super);
    function ElementWidthModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elementWidthModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    ElementWidthModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[elementWidthModel]'
                },] },
    ];
    ElementWidthModel.ctorParameters = function () { return []; };
    ElementWidthModel.propDecorators = {
        "elementWidthModel": [{ type: core_1.Input },],
        "elementWidthModelChange": [{ type: core_1.Output },],
    };
    return ElementWidthModel;
}(ElementSizeModel));
exports.ElementWidthModel = ElementWidthModel;
