"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ElementSizeModel = (function () {
    function ElementSizeModel(element) {
        this.element = element;
        this.elementSizeModelChange = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ElementSizeModel.prototype, "elementSizeModelWatch", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ElementSizeModel.prototype, "elementSizeModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementSizeModel.prototype, "elementSizeModelChange", void 0);
    ElementSizeModel = __decorate([
        core_1.Directive({
            selector: '[elementSizeModel]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ElementSizeModel);
    return ElementSizeModel;
}());
exports.ElementSizeModel = ElementSizeModel;
var ElementHeightModel = (function (_super) {
    __extends(ElementHeightModel, _super);
    function ElementHeightModel(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.elementHeightModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementHeightModel.prototype.setModel = function () {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ElementHeightModel.prototype, "elementHeightModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementHeightModel.prototype, "elementHeightModelChange", void 0);
    ElementHeightModel = __decorate([
        core_1.Directive({
            selector: '[elementHeightModel]'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ElementHeightModel);
    return ElementHeightModel;
}(ElementSizeModel));
exports.ElementHeightModel = ElementHeightModel;
var ElementWidthModel = (function (_super) {
    __extends(ElementWidthModel, _super);
    function ElementWidthModel(element) {
        var _this = _super.call(this, element) || this;
        _this.element = element;
        _this.elementWidthModelChange = new core_1.EventEmitter();
        return _this;
    }
    ElementWidthModel.prototype.setModel = function () {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ElementWidthModel.prototype, "elementWidthModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ElementWidthModel.prototype, "elementWidthModelChange", void 0);
    ElementWidthModel = __decorate([
        core_1.Directive({
            selector: '[elementWidthModel]',
            exportAs: 'ElementWidthModel'
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ElementWidthModel);
    return ElementWidthModel;
}(ElementSizeModel));
exports.ElementWidthModel = ElementWidthModel;
