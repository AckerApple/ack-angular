import { ContentChild, 
//Directive,
Component, Input, Output, EventEmitter, ElementRef, TemplateRef, ViewChild, } from "@angular/core";
import { AckApp } from "../providers/AckApp.provider";
import * as i0 from "@angular/core";
import * as i1 from "../providers/AckApp.provider";
var _c0 = ["body"];
var _c1 = ["placeholder"];
function AckModal_ng_template_0_ng_template_1_Template(rf, ctx) { }
function AckModal_ng_template_0_ng_content_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0, 0, ["*ngIf", "!body"]);
} }
function AckModal_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    var _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "ack-modal-layout", 2);
    i0.ɵɵlistener("close", function AckModal_ng_template_0_Template_ack_modal_layout_close_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.close.emit($event); })("showModelChange", function AckModal_ng_template_0_Template_ack_modal_layout_showModelChange_0_listener($event) { i0.ɵɵrestoreView(_r6); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.showModelChange.emit(ctx_r7.showModel = $event); });
    i0.ɵɵtemplate(1, AckModal_ng_template_0_ng_template_1_Template, 0, 0, "ng-template", 3);
    i0.ɵɵtemplate(2, AckModal_ng_template_0_ng_content_2_Template, 1, 0, "ng-content", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    var ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("zIndex", ctx_r1.zIndex)("valign", ctx_r1.valign)("isModelMode", ctx_r1.isModelMode == null ? ctx_r1.showModelChange.observers.length : ctx_r1.isModelMode)("showModel", ctx_r1.showModel)("backgroundColor", ctx_r1.backgroundColor)("wrapStyle", ctx_r1.wrapStyle)("wrapCellStyle", ctx_r1.wrapCellStyle)("allowClose", ctx_r1.allowClose);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.body);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r1.body);
} }
function AckModal_2_ng_template_0_Template(rf, ctx) { }
function AckModal_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AckModal_2_ng_template_0_Template, 0, 0, "ng-template", 3);
} if (rf & 2) {
    var ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.layout);
} }
var _c2 = ["*"];
// import { string } from "./templates/ack-modal.pug"
var AckModal = /** @class */ (function () {
    function AckModal(element, AckApp) {
        var _this = this;
        this.element = element;
        this.AckApp = AckApp;
        this.zIndex = 20;
        this.valign = 'top';
        this.allowClose = true;
        this.showModelChange = new EventEmitter();
        //one way expression binds
        this.close = new EventEmitter();
        Promise.resolve().then(function () { return _this.determineStage(); });
    }
    /*ngOnInit(){
      return this.determineStage() // causes race error ExpressionChangedAfterItHasBeenCheckedError
    }*/
    AckModal.prototype.determineStage = function () {
        if (this.inline)
            return;
        if (this.AckApp.fixedElementStage) {
            this.AckApp.registerModal(this);
        }
        else if (!this.AckApp.warnedFixElements) {
            this.AckApp.warnedFixElements = true;
            console.warn('Please put the element tag <ack-fixed-element-stage> inside your app so <ack-modal> renders properly amongst other elements. OR set <ack-modal inline="true">');
        }
    };
    AckModal.prototype.ngOnDestroy = function () {
        this.AckApp.unregisterModal(this);
    };
    AckModal.ɵfac = function AckModal_Factory(t) { return new (t || AckModal)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.AckApp)); };
    AckModal.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AckModal, selectors: [["ack-modal"]], contentQueries: function AckModal_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
            i0.ɵɵcontentQuery(dirIndex, _c0, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.body = _t.first);
        } }, viewQuery: function AckModal_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            var _t = void 0;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.layout = _t.first);
        } }, inputs: { inline: "inline", isModelMode: "isModelMode", zIndex: "zIndex", valign: "valign", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", allowClose: "allowClose", showModel: "showModel" }, outputs: { showModelChange: "showModelChange", close: "close" }, ngContentSelectors: _c2, decls: 3, vars: 1, consts: [["placeholder", ""], [4, "ngIf"], [3, "zIndex", "valign", "isModelMode", "showModel", "backgroundColor", "wrapStyle", "wrapCellStyle", "allowClose", "close", "showModelChange"], [3, "ngTemplateOutlet"]], template: function AckModal_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, AckModal_ng_template_0_Template, 3, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(2, AckModal_2_Template, 1, 1, undefined, 1);
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", !ctx.AckApp.fixedElementStage || ctx.inline);
        } }, encapsulation: 2 });
    return AckModal;
}());
export { AckModal };
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AckModal, [{
        type: Component,
        args: [{
                selector: "ack-modal",
                templateUrl: './ack-modal.component.html',
                // template:string
                //,exportAs:"AckModal"
                //,animations:animations
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.AckApp }]; }, { body: [{
            type: ContentChild,
            args: ['body']
        }], layout: [{
            type: ViewChild,
            args: ['placeholder']
        }], inline: [{
            type: Input
        }], isModelMode: [{
            type: Input
        }], zIndex: [{
            type: Input
        }], valign: [{
            type: Input
        }], wrapStyle: [{
            type: Input
        }], wrapCellStyle: [{
            type: Input
        }], backgroundColor: [{
            type: Input
        }], allowClose: [{
            type: Input
        }], showModel: [{
            type: Input
        }], showModelChange: [{
            type: Output
        }], close: [{
            type: Output
        }] }); })();
//# sourceMappingURL=AckModal.component.js.map