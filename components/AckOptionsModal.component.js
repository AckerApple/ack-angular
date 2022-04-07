import { __extends } from "tslib";
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { AckOptions } from "./AckOptions.component";
import { string as ackOptionsModal } from "./templates/ack-options-modal.pug";
import * as i0 from "@angular/core";
import * as i1 from "./AckModal.component";
import * as i2 from "./AckOptions.component";
var _c0 = ["*"];
var AckOptionsModal = /** @class */ (function (_super) {
    __extends(AckOptionsModal, _super);
    function AckOptionsModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //one way binds
        _this.allowClose = true;
        //one way expressions
        _this.close = new EventEmitter();
        _this.backgroundColorChange = new EventEmitter();
        _this.showModel = true;
        _this.showModelChange = new EventEmitter();
        return _this;
    }
    AckOptionsModal.prototype.fireModelChange = function (model) {
        if (!this.multiple)
            this.close.emit();
        this.modelChange.emit(model);
    };
    AckOptionsModal.ɵfac = /*@__PURE__*/ function () { var ɵAckOptionsModal_BaseFactory; return function AckOptionsModal_Factory(t) { return (ɵAckOptionsModal_BaseFactory || (ɵAckOptionsModal_BaseFactory = i0.ɵɵgetInheritedFactory(AckOptionsModal)))(t || AckOptionsModal); }; }();
    AckOptionsModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckOptionsModal, selectors: [["ack-options-modal"]], inputs: { allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", showModel: "showModel" }, outputs: { close: "close", backgroundColorChange: "backgroundColorChange", showModelChange: "showModelChange" }, features: [i0.ɵɵInheritDefinitionFeature], ngContentSelectors: _c0, decls: 5, vars: 17, consts: [[3, "allowClose", "showModel", "isModelMode", "wrapStyle", "wrapCellStyle", "backgroundColor", "close", "showModelChange", "backgroundColorChange"], [1, "border-grey-6x", "border", "bg-white"], [3, "array", "max", "modelAsArray", "model", "multiple", "toggleable", "stylize", "inputTemplateRefs", "arrayKey", "arrayToModelKey", "modelKey", "modelChange"], ["ackOptions", ""]], template: function AckOptionsModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "ack-modal", 0);
            i0.ɵɵlistener("close", function AckOptionsModal_Template_ack_modal_close_0_listener($event) { return ctx.close.emit($event); })("showModelChange", function AckOptionsModal_Template_ack_modal_showModelChange_0_listener($event) { return ctx.showModelChange.emit($event); })("backgroundColorChange", function AckOptionsModal_Template_ack_modal_backgroundColorChange_0_listener($event) { return ctx.backgroundColorChange.emit($event); });
            i0.ɵɵprojection(1);
            i0.ɵɵelementStart(2, "div", 1);
            i0.ɵɵelementStart(3, "ack-options", 2, 3);
            i0.ɵɵlistener("modelChange", function AckOptionsModal_Template_ack_options_modelChange_3_listener($event) { return ctx.fireModelChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("allowClose", ctx.allowClose)("showModel", ctx.showModel)("isModelMode", ctx.showModelChange.observers.length)("wrapStyle", ctx.wrapStyle)("wrapCellStyle", ctx.wrapCellStyle)("backgroundColor", ctx.backgroundColor);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("array", ctx.array)("max", ctx.max)("modelAsArray", ctx.modelAsArray)("model", ctx.model)("multiple", ctx.multiple)("toggleable", ctx.toggleable)("stylize", ctx.stylize)("inputTemplateRefs", ctx.templateRefs)("arrayKey", ctx.arrayKey)("arrayToModelKey", ctx.arrayToModelKey)("modelKey", ctx.modelKey);
        } }, directives: [i1.AckModal, i2.AckOptions], encapsulation: 2 });
    return AckOptionsModal;
}(AckOptions));
export { AckOptionsModal };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckOptionsModal, [{
        type: Component,
        args: [{
                selector: 'ack-options-modal',
                template: ackOptionsModal
            }]
    }], null, { allowClose: [{
            type: Input
        }], wrapStyle: [{
            type: Input
        }], wrapCellStyle: [{
            type: Input
        }], close: [{
            type: Output
        }], backgroundColor: [{
            type: Input
        }], backgroundColorChange: [{
            type: Output
        }], showModel: [{
            type: Input
        }], showModelChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=AckOptionsModal.component.js.map