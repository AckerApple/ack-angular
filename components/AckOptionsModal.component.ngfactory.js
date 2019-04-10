"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./AckModal.component.ngfactory");
var i2 = require("./AckModal.component");
var i3 = require("../providers/AckApp.provider");
var i4 = require("./AckOptions.component.ngfactory");
var i5 = require("./AckOptions.component");
var i6 = require("./AckOptionsModal.component");
var styles_AckOptionsModal = [];
var RenderType_AckOptionsModal = i0.ɵcrt({ encapsulation: 2, styles: styles_AckOptionsModal, data: {} });
exports.RenderType_AckOptionsModal = RenderType_AckOptionsModal;
function View_AckOptionsModal_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "ack-modal", [], null, [[null, "close"], [null, "showModelChange"], [null, "backgroundColorChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.close.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("showModelChange" === en)) {
        var pd_1 = (_co.showModelChange.emit($event) !== false);
        ad = (pd_1 && ad);
    } if (("backgroundColorChange" === en)) {
        var pd_2 = (_co.backgroundColorChange.emit($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i1.View_AckModal_0, i1.RenderType_AckModal)), i0.ɵdid(1, 245760, null, 1, i2.AckModal, [i0.ElementRef, i3.AckApp], { isModelMode: [0, "isModelMode"], allowClose: [1, "allowClose"], wrapStyle: [2, "wrapStyle"], wrapCellStyle: [3, "wrapCellStyle"], backgroundColor: [4, "backgroundColor"], showModel: [5, "showModel"] }, { showModelChange: "showModelChange", close: "close" }), i0.ɵqud(335544320, 1, { body: 0 }), i0.ɵncd(0, 0), (_l()(), i0.ɵeld(4, 0, null, 0, 3, "div", [["class", "border-grey-6x border bg-white"]], null, null, null, null, null)), (_l()(), i0.ɵeld(5, 0, null, null, 2, "ack-options", [], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.fireModelChange($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, i4.View_AckOptions_0, i4.RenderType_AckOptions)), i0.ɵdid(6, 4243456, [["ackOptions", 4]], 1, i5.AckOptions, [i0.ElementRef], { array: [0, "array"], stylize: [1, "stylize"], multiple: [2, "multiple"], modelAsArray: [3, "modelAsArray"], max: [4, "max"], toggleable: [5, "toggleable"], inputTemplateRefs: [6, "inputTemplateRefs"], model: [7, "model"], arrayKey: [8, "arrayKey"], modelKey: [9, "modelKey"], arrayToModelKey: [10, "arrayToModelKey"] }, { modelChange: "modelChange" }), i0.ɵqud(603979776, 2, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.showModelChange.observers.length; var currVal_1 = _co.allowClose; var currVal_2 = _co.wrapStyle; var currVal_3 = _co.wrapCellStyle; var currVal_4 = _co.backgroundColor; var currVal_5 = _co.showModel; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5); var currVal_6 = _co.array; var currVal_7 = _co.stylize; var currVal_8 = _co.multiple; var currVal_9 = _co.modelAsArray; var currVal_10 = _co.max; var currVal_11 = _co.toggleable; var currVal_12 = _co.templateRefs; var currVal_13 = _co.model; var currVal_14 = _co.arrayKey; var currVal_15 = _co.modelKey; var currVal_16 = _co.arrayToModelKey; _ck(_v, 6, 1, [currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16]); }, null); }
exports.View_AckOptionsModal_0 = View_AckOptionsModal_0;
function View_AckOptionsModal_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ack-options-modal", [], null, null, null, View_AckOptionsModal_0, RenderType_AckOptionsModal)), i0.ɵdid(1, 4243456, null, 1, i6.AckOptionsModal, [i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { templateRefs: 1 })], null, null); }
exports.View_AckOptionsModal_Host_0 = View_AckOptionsModal_Host_0;
var AckOptionsModalNgFactory = i0.ɵccf("ack-options-modal", i6.AckOptionsModal, View_AckOptionsModal_Host_0, { array: "array", stylize: "stylize", multiple: "multiple", modelAsArray: "modelAsArray", max: "max", toggleable: "toggleable", inputTemplateRefs: "inputTemplateRefs", model: "model", arrayKey: "arrayKey", modelKey: "modelKey", arrayToModelKey: "arrayToModelKey", allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", showModel: "showModel" }, { modelChange: "modelChange", close: "close", backgroundColorChange: "backgroundColorChange", showModelChange: "showModelChange" }, ["*"]);
exports.AckOptionsModalNgFactory = AckOptionsModalNgFactory;
