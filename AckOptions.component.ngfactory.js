"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./pipes");
var i3 = require("./AckOptions.component");
var styles_AckOptions = [];
var RenderType_AckOptions = i0.ɵcrt({ encapsulation: 2, styles: styles_AckOptions, data: {} });
exports.RenderType_AckOptions = RenderType_AckOptions;
function View_AckOptions_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckOptions_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckOptions_3)), i0.ɵdid(1, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(2, { item: 0, selected: 1 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 2, 0, _v.parent.context.$implicit, _co.isItemSelected(_v.parent.context.$implicit)); var currVal_1 = _co.templateRef; _ck(_v, 1, 0, currVal_0, currVal_1); }, null); }
function View_AckOptions_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), i0.ɵted(1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; _ck(_v, 1, 0, currVal_0); }); }
function View_AckOptions_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.selectItem(_v.context.$implicit) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckOptions_2)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckOptions_4)), i0.ɵdid(5, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.getItemClass(_v.context.$implicit); _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.templateRef; _ck(_v, 3, 0, currVal_1); var currVal_2 = !_co.templateRef; _ck(_v, 5, 0, currVal_2); }, null); }
function View_AckOptions_0(_l) { return i0.ɵvid(0, [i0.ɵpid(0, i2.ForceArray, []), (_l()(), i0.ɵeld(1, 0, null, null, 2, "div", [], null, null, null, null, null)), i0.ɵdid(2, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵpod(3, { "border-grey-6x border-top": 0 }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckOptions_1)), i0.ɵdid(5, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), i0.ɵppd(6, 1)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, _co.stylize); _ck(_v, 2, 0, currVal_0); var currVal_1 = i0.ɵunv(_v, 5, 0, _ck(_v, 6, 0, i0.ɵnov(_v, 0), _co.array)); _ck(_v, 5, 0, currVal_1); }, null); }
exports.View_AckOptions_0 = View_AckOptions_0;
function View_AckOptions_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ack-options", [], null, null, null, View_AckOptions_0, RenderType_AckOptions)), i0.ɵdid(1, 4308992, null, 1, i3.AckOptions, [i0.ElementRef], null, null), i0.ɵqud(603979776, 1, { templateRefs: 1 })], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AckOptions_Host_0 = View_AckOptions_Host_0;
var AckOptionsNgFactory = i0.ɵccf("ack-options", i3.AckOptions, View_AckOptions_Host_0, { array: "array", stylize: "stylize", multiple: "multiple", toggleable: "toggleable", inputTemplateRefs: "inputTemplateRefs", model: "model", ref: "ref", arrayKey: "arrayKey", modelKey: "modelKey", arrayToModelKey: "arrayToModelKey" }, { modelChange: "modelChange", refChange: "refChange" }, []);
exports.AckOptionsNgFactory = AckOptionsNgFactory;
