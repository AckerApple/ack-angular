"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./AckModalLayout.component.ngfactory");
var i2 = require("./AckModalLayout.component");
var i3 = require("../providers/AckApp.provider");
var i4 = require("@angular/common");
var i5 = require("./AckModal.component");
var styles_AckModal = [];
var RenderType_AckModal = i0.ɵcrt({ encapsulation: 2, styles: styles_AckModal, data: {} });
exports.RenderType_AckModal = RenderType_AckModal;
function View_AckModal_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckModal_3(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0), (_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckModal_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "ack-modal-layout", [], null, [[null, "close"], [null, "showModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("close" === en)) {
        var pd_0 = (_co.close.emit($event) !== false);
        ad = (pd_0 && ad);
    } if (("showModelChange" === en)) {
        var pd_1 = (_co.showModelChange.emit(_co.showModel = $event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, i1.View_AckModalLayout_0, i1.RenderType_AckModalLayout)), i0.ɵdid(1, 114688, null, 0, i2.AckModalLayout, [i0.ElementRef, i3.AckApp], { zIndex: [0, "zIndex"], allowClose: [1, "allowClose"], wrapStyle: [2, "wrapStyle"], wrapCellStyle: [3, "wrapCellStyle"], backgroundColor: [4, "backgroundColor"], isModelMode: [5, "isModelMode"], showModel: [6, "showModel"] }, { close: "close", showModelChange: "showModelChange" }), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_AckModal_2)), i0.ɵdid(3, 540672, null, 0, i4.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(16777216, null, 0, 1, null, View_AckModal_3)), i0.ɵdid(5, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zIndex; var currVal_1 = _co.allowClose; var currVal_2 = _co.wrapStyle; var currVal_3 = _co.wrapCellStyle; var currVal_4 = _co.backgroundColor; var currVal_5 = ((_co.isModelMode == null) ? _co.showModelChange.observers.length : _co.isModelMode); var currVal_6 = _co.showModel; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); var currVal_7 = _co.body; _ck(_v, 3, 0, currVal_7); var currVal_8 = !_co.body; _ck(_v, 5, 0, currVal_8); }, null); }
function View_AckModal_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckModal_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckModal_5)), i0.ɵdid(1, 540672, null, 0, i4.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.layout; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AckModal_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { layout: 0 }), (_l()(), i0.ɵand(0, [[1, 2], ["placeholder", 2]], null, 0, null, View_AckModal_1)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckModal_4)), i0.ɵdid(3, 16384, null, 0, i4.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.AckApp.fixedElementStage || _co.inline); _ck(_v, 3, 0, currVal_0); }, null); }
exports.View_AckModal_0 = View_AckModal_0;
function View_AckModal_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ack-modal", [], null, null, null, View_AckModal_0, RenderType_AckModal)), i0.ɵdid(1, 245760, null, 1, i5.AckModal, [i0.ElementRef, i3.AckApp], null, null), i0.ɵqud(335544320, 1, { body: 0 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AckModal_Host_0 = View_AckModal_Host_0;
var AckModalNgFactory = i0.ɵccf("ack-modal", i5.AckModal, View_AckModal_Host_0, { inline: "inline", isModelMode: "isModelMode", allowClose: "allowClose", zIndex: "zIndex", wrapStyle: "wrapStyle", wrapCellStyle: "wrapCellStyle", backgroundColor: "backgroundColor", showModel: "showModel" }, { showModelChange: "showModelChange", close: "close" }, ["*"]);
exports.AckModalNgFactory = AckModalNgFactory;
