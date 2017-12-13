"use strict";
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
    ElementSizeModel.prototype.setModel = function () {
        var _this = this;
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        setTimeout(function () { return _this.inChange = false; }, 0);
    };
    ElementSizeModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () {
            if (!_this.inChange) {
                _this.setModel();
            }
        }, 0);
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
        "elementSizeModel": [{ type: core_1.Input },],
        "elementSizeModelChange": [{ type: core_1.Output },],
    };
    return ElementSizeModel;
}());
exports.ElementSizeModel = ElementSizeModel;
