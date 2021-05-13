"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerHtmlModel = void 0;
var core_1 = require("@angular/core");
var InnerHtmlModel = /** @class */ (function () {
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
        //this.element.nativeElement.addEventListener("mouseup",()=>this.setModel())
        //this.element.nativeElement.addEventListener("keyup",()=>this.setModel())
    }
    InnerHtmlModel.prototype.ngOnChanges = function () {
        var _this = this;
        Promise.resolve().then(function () { return _this.setModel(); });
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
                },] }
    ];
    InnerHtmlModel.ctorParameters = function () { return [
        { type: core_1.ElementRef }
    ]; };
    InnerHtmlModel.propDecorators = {
        innerHtmlModel: [{ type: core_1.Input }],
        innerHtmlModelChange: [{ type: core_1.Output }]
    };
    return InnerHtmlModel;
}());
exports.InnerHtmlModel = InnerHtmlModel;
//# sourceMappingURL=InnerHtmlModel.directive.js.map