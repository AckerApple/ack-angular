"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var InnerHtmlModel = (function () {
    function InnerHtmlModel(element) {
        var _this = this;
        this.element = element;
        this.innerHtmlModelChange = new core_1.EventEmitter();
        this.observer = new MutationObserver(function () { return _this.setModel(); });
        var config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        setTimeout(function () { return _this.setModel(); }, 0);
    };
    InnerHtmlModel.prototype.setModel = function () {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    };
    InnerHtmlModel.prototype.ngOnDestroy = function () {
        this.observer.disconnect();
    };
    InnerHtmlModel.decorators = [
        { type: core_1.Directive, args: [{
                    selector: '[innerHtmlModel]'
                },] },
    ];
    InnerHtmlModel.ctorParameters = function () { return [
        { type: core_1.ElementRef, },
    ]; };
    InnerHtmlModel.propDecorators = {
        "innerHtmlModel": [{ type: core_1.Input },],
        "innerHtmlModelChange": [{ type: core_1.Output },],
    };
    return InnerHtmlModel;
}());
exports.InnerHtmlModel = InnerHtmlModel;
