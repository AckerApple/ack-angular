"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./components/AckModal.component.ngfactory");
var i2 = require("./components/AckModal.component");
var i3 = require("./AckOptions.component.ngfactory");
var i4 = require("./AckOptions.component");
var i5 = require("./AckOptionsModal.component");
var styles_AckOptionsModal = [];
var RenderType_AckOptionsModal = i0.ɵcrt({ encapsulation: 2, styles: styles_AckOptionsModal, data: {} });
exports.RenderType_AckOptionsModal = RenderType_AckOptionsModal;
function View_AckOptionsModal_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 6, "ack-modal", [], null, [[null, "refChange"], [null, "onClose"], [null, "backgroundColorChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("refChange" === en)) {
        var pd_0 = ((_co.ackModal = $event) !== false);
        ad = (pd_0 && ad);
    } if (("onClose" === en)) {
        var pd_1 = (_co.onClose.emit($event) !== false);
        ad = (pd_1 && ad);
    } if (("backgroundColorChange" === en)) {
        var pd_2 = (_co.backgroundColorChange.emit($event) !== false);
        ad = (pd_2 && ad);
    } return ad; }, i1.View_AckModal_0, i1.RenderType_AckModal)), i0.ɵdid(1, 114688, null, 0, i2.AckModal, [i0.ElementRef], { wrapStyle: [0, "wrapStyle"], wrapCellStyle: [1, "wrapCellStyle"], allowClose: [2, "allowClose"], backgroundColor: [3, "backgroundColor"], ref: [4, "ref"] }, { onClose: "onClose", backgroundColorChange: "backgroundColorChange", refChange: "refChange" }), i0.ɵncd(0, 0), (_l()(), i0.ɵeld(3, 0, null, 0, 3, "div", [["class", "border-grey-6x border bg-white"]], null, null, null, null, null)), (_l()(), i0.ɵeld(4, 0, null, null, 2, "ack-options", [], null, [[null, "refChange"], [null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("refChange" === en)) {
        var pd_0 = ((_co.ackOptions = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = ((_co.model = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i3.View_AckOptions_0, i3.RenderType_AckOptions)), i0.ɵdid(5, 4308992, null, 1, i4.AckOptions, [i0.ElementRef], { array: [0, "array"], stylize: [1, "stylize"], multiple: [2, "multiple"], toggleable: [3, "toggleable"], inputTemplateRefs: [4, "inputTemplateRefs"], model: [5, "model"], ref: [6, "ref"], arrayKey: [7, "arrayKey"], modelKey: [8, "modelKey"], arrayToModelKey: [9, "arrayToModelKey"] }, { modelChange: "modelChange", refChange: "refChange" }), i0.ɵqud(603979776, 1, { templateRefs: 1 })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.wrapStyle; var currVal_1 = _co.wrapCellStyle; var currVal_2 = _co.allowClose; var currVal_3 = _co.backgroundColor; var currVal_4 = _co.ackModal; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); var currVal_5 = _co.array; var currVal_6 = _co.stylize; var currVal_7 = _co.multiple; var currVal_8 = _co.toggleable; var currVal_9 = _co.templateRefs; var currVal_10 = _co.model; var currVal_11 = _co.ackOptions; var currVal_12 = _co.arrayKey; var currVal_13 = _co.modelKey; var currVal_14 = _co.arrayToModelKey; _ck(_v, 5, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14); }, null); }
exports.View_AckOptionsModal_0 = View_AckOptionsModal_0;
function View_AckOptionsModal_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ack-options-modal", [], null, null, null, View_AckOptionsModal_0, RenderType_AckOptionsModal)), i0.ɵdid(1, 4308992, null, 1, i5.AckOptionsModal, [i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { templateRefs: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AckOptionsModal_Host_0 = View_AckOptionsModal_Host_0;
var AckOptionsModalNgFactory = i0.ɵccf("ack-options-modal", i5.AckOptionsModal, View_AckOptionsModal_Host_0, { array: "array", stylize: "stylize", multiple: "multiple", toggleable: "toggleable", inputTemplateRefs: "inputTemplateRefs", model: "model", ref: "ref", arrayKey: "arrayKey", modelKey: "modelKey", arrayToModelKey: "arrayToModelKey", allowClose: "allowClose", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor" }, { modelChange: "modelChange", refChange: "refChange", onClose: "onClose", backgroundColorChange: "backgroundColorChange" }, ["*"]);
exports.AckOptionsModalNgFactory = AckOptionsModalNgFactory;
