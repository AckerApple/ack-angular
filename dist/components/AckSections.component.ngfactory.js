"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("../directives/ElementSizeModel.directive");
var i2 = require("@angular/common");
var i3 = require("../directives/HtmlHeightModel.directive");
var i4 = require("../directives/HtmlSizeWatcher");
var i5 = require("../providers/AckSections.provider");
var i6 = require("./AckSections.component");
var styles_AckSections = [];
var RenderType_AckSections = i0.ɵcrt({ encapsulation: 2, styles: styles_AckSections, data: {} });
exports.RenderType_AckSections = RenderType_AckSections;
function View_AckSections_4(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_4))], null, null); }
function View_AckSections_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["style", "position:fixed;top:0;width:100%"]], [[4, "z-index", null]], [[null, "elementHeightModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementHeightModelChange" === en)) {
        var pd_0 = ((_co.headerHeight = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 4866048, null, 0, i1.ElementHeightModel, [i0.ElementRef], { elementSizeModelWatch: [0, "elementSizeModelWatch"], elementHeightModel: [1, "elementHeightModel"] }, { elementHeightModelChange: "elementHeightModelChange" }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_3)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { outlet: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.SectionProvider.headerTemplates.length; var currVal_2 = _co.headerHeight; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _ck(_v, 4, 0, i0.ɵnov(_v.parent, 3)); var currVal_4 = (_co.headerWrap || i0.ɵnov(_v.parent, 3)); _ck(_v, 3, 0, currVal_3, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zIndex; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_8(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_7(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_8))], null, null); }
function View_AckSections_6(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_7)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_5(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_6)), i0.ɵdid(1, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.headerTemplates; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AckSections_11(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_10(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_11))], null, null); }
function View_AckSections_9(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["style", "position:fixed;top:0;width:100%"]], [[4, "z-index", null]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_10)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_1 = i0.ɵnov(_v.parent, 3); _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zIndex; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_2)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, [["headerContent", 2]], null, 0, null, View_AckSections_5)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_9)), i0.ɵdid(5, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.mode === "calculate"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 5, 0, currVal_1); }, null); }
function View_AckSections_13(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_12(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_13))], null, null); }
function View_AckSections_16(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_15(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_16))], null, null); }
function View_AckSections_14(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "table", [["border", "0"], ["cellPadding", "0"], ["cellSpacing", "0"], ["style", "height:100%;width:100%;border-collapse: collapse;"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_15)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_0 = i0.ɵnov(_v.parent, 8); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_22(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_21(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_22))], null, null); }
function View_AckSections_20(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_21)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_19(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_20)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.headerTemplates; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_18(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "td", [["colspan", "3"], ["style", "visibility:hidden"]], [[4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_19)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.headerHeight; _ck(_v, 1, 0, currVal_0); }); }
function View_AckSections_26(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_25(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_26))], null, null); }
function View_AckSections_24(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["style", "overflow:auto;height:100%;"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_25)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_0 = i0.ɵnov(_v.parent, 2); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_30(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_29(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_30))], null, null); }
function View_AckSections_28(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_29)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_27(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_28)), i0.ɵdid(1, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.leftBodyTemplates; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AckSections_33(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_32(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_33))], null, null); }
function View_AckSections_31(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["style", "position:fixed;"]], [[4, "z-index", null], [4, "height", "px"]], [[null, "elementWidthModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementWidthModelChange" === en)) {
        var pd_0 = ((_co.leftBodyWidth = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 4866048, null, 0, i1.ElementWidthModel, [i0.ElementRef], { elementSizeModelWatch: [0, "elementSizeModelWatch"], elementWidthModel: [1, "elementWidthModel"] }, { elementWidthModelChange: "elementWidthModelChange" }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_32)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { outlet: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.SectionProvider.leftBodyTemplates.length; var currVal_3 = _co.leftBodyWidth; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _ck(_v, 4, 0, i0.ɵnov(_v.parent, 2)); var currVal_5 = (_co.leftBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 3, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.zIndex - 1); var currVal_1 = ((_co.htmlHeightModel - (_co.SectionProvider.headerTemplates.length ? _co.headerHeight : 0)) - (_co.SectionProvider.footerTemplates.length ? _co.footerHeight : 0)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_AckSections_36(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_35(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_36))], null, null); }
function View_AckSections_34(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["style", "position:fixed;top:0;"]], [[4, "z-index", null]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_35)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { outlet: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, i0.ɵnov(_v.parent, 2)); var currVal_2 = (_co.leftBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.zIndex - 1); _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_39(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_38(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_39))], null, null); }
function View_AckSections_37(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_38)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { outlet: 0 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, i0.ɵnov(_v.parent, 2)); var currVal_1 = (_co.leftBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AckSections_23(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "td", [["align", "right"], ["valign", "top"]], [[4, "min-width", "px"]], null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultLeftBodyWrap", 2]], null, 0, null, View_AckSections_24)), (_l()(), i0.ɵand(0, [["leftBodyContent", 2]], null, 0, null, View_AckSections_27)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_31)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_34)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_37)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.mode === "calculate"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 6, 0, currVal_2); var currVal_3 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.leftBodyWidth; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_40(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null); }
function View_AckSections_43(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_42(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_43))], null, null); }
function View_AckSections_41(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "td", [["style", "height:100%"], ["valign", "top"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_42)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_0 = i0.ɵnov(_v.parent, 9); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_44(_l) { return i0.ɵvid(0, [i0.ɵncd(null, 0), (_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_48(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_47(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_48))], null, null); }
function View_AckSections_46(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["style", "overflow:auto;height:100%;"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_47)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null)], function (_ck, _v) { var currVal_0 = i0.ɵnov(_v.parent, 2); _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_52(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_51(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_52))], null, null); }
function View_AckSections_50(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_51)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_49(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_50)), i0.ɵdid(1, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.rightBodyTemplates; _ck(_v, 1, 0, currVal_0); }, null); }
function View_AckSections_55(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_54(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_55))], null, null); }
function View_AckSections_53(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "div", [["style", "position:fixed;"]], [[4, "z-index", null], [4, "height", "px"]], [[null, "elementWidthModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementWidthModelChange" === en)) {
        var pd_0 = ((_co.rightBodyWidth = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 4866048, null, 0, i1.ElementWidthModel, [i0.ElementRef], { elementSizeModelWatch: [0, "elementSizeModelWatch"], elementWidthModel: [1, "elementWidthModel"] }, { elementWidthModelChange: "elementWidthModelChange" }), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_54)), i0.ɵdid(3, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(4, { outlet: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.SectionProvider.rightBodyTemplates.length; var currVal_3 = _co.rightBodyWidth; _ck(_v, 1, 0, currVal_2, currVal_3); var currVal_4 = _ck(_v, 4, 0, i0.ɵnov(_v.parent, 2)); var currVal_5 = (_co.rightBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 3, 0, currVal_4, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.zIndex - 1); var currVal_1 = ((_co.htmlHeightModel - (_co.SectionProvider.headerTemplates.length ? _co.headerHeight : 0)) - (_co.SectionProvider.footerTemplates.length ? _co.footerHeight : 0)); _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_AckSections_58(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_57(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_58))], null, null); }
function View_AckSections_56(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["style", "position:fixed;top:0;overflow:auto;"]], [[4, "z-index", null]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_57)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { outlet: 0 })], function (_ck, _v) { var _co = _v.component; var currVal_1 = _ck(_v, 3, 0, i0.ɵnov(_v.parent, 2)); var currVal_2 = (_co.rightBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.zIndex - 1); _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_61(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_60(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_61))], null, null); }
function View_AckSections_59(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_60)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(3, { outlet: 0 }), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _ck(_v, 3, 0, i0.ɵnov(_v.parent, 2)); var currVal_1 = (_co.rightBodyWrap || i0.ɵnov(_v.parent, 1)); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_AckSections_45(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 8, "td", [["align", "left"], ["valign", "top"]], [[4, "min-width", "px"]], null, null, null, null)), (_l()(), i0.ɵand(0, [["defaultRightBodyWrap", 2]], null, 0, null, View_AckSections_46)), (_l()(), i0.ɵand(0, [["rightBodyContent", 2]], null, 0, null, View_AckSections_49)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_53)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_56)), i0.ɵdid(6, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_59)), i0.ɵdid(8, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.mode === "calculate"); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 6, 0, currVal_2); var currVal_3 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.rightBodyWidth; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_66(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_65(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_66))], null, null); }
function View_AckSections_64(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_65)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_63(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["style", "visibility:hidden"]], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_64)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.footerTemplates; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_62(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵeld(1, 0, null, null, 2, "td", [["colspan", "3"]], [[4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_63)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 3, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.footerHeight; _ck(_v, 1, 0, currVal_0); }); }
function View_AckSections_17(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_18)), i0.ɵdid(1, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 9, "tr", [], null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_23)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_40)), i0.ɵdid(6, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(7, { outlet: 0 }), (_l()(), i0.ɵand(0, [["defaultBodyCell", 2]], null, 0, null, View_AckSections_41)), (_l()(), i0.ɵand(0, [["body", 2]], null, 0, null, View_AckSections_44)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_45)), i0.ɵdid(11, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_62)), i0.ɵdid(13, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.SectionProvider.headerTemplates.length; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.SectionProvider.leftBodyTemplates.length; _ck(_v, 4, 0, currVal_1); var currVal_2 = _ck(_v, 7, 0, i0.ɵnov(_v, 9)); var currVal_3 = (_co.bodyCell || i0.ɵnov(_v, 8)); _ck(_v, 6, 0, currVal_2, currVal_3); var currVal_4 = _co.SectionProvider.rightBodyTemplates.length; _ck(_v, 11, 0, currVal_4); var currVal_5 = _co.SectionProvider.footerTemplates.length; _ck(_v, 13, 0, currVal_5); }, null); }
function View_AckSections_71(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_70(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_71))], null, null); }
function View_AckSections_69(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_70)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_68(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["style", "position:fixed;bottom:0;width:100%"]], [[4, "z-index", null]], [[null, "elementHeightModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementHeightModelChange" === en)) {
        var pd_0 = ((_co.footerHeight = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 4866048, null, 0, i1.ElementHeightModel, [i0.ElementRef], { elementSizeModelWatch: [0, "elementSizeModelWatch"], elementHeightModel: [1, "elementHeightModel"] }, { elementHeightModelChange: "elementHeightModelChange" }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_69)), i0.ɵdid(3, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.SectionProvider.footerTemplates.length; var currVal_2 = _co.footerHeight; _ck(_v, 1, 0, currVal_1, currVal_2); var currVal_3 = _co.SectionProvider.footerTemplates; _ck(_v, 3, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zIndex; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_75(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_AckSections_74(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0, null, View_AckSections_75))], null, null); }
function View_AckSections_73(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_74)), i0.ɵdid(2, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutlet: [0, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; _ck(_v, 2, 0, currVal_0); }, null); }
function View_AckSections_72(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "div", [["style", "position:fixed;bottom:0;width:100%"]], [[4, "z-index", null]], null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_73)), i0.ɵdid(2, 278528, null, 0, i2.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.SectionProvider.footerTemplates; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.zIndex; _ck(_v, 0, 0, currVal_0); }); }
function View_AckSections_67(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_68)), i0.ɵdid(2, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_72)), i0.ɵdid(4, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.mode === "calculate"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.mode || (_co.mode === "clone")); _ck(_v, 4, 0, currVal_1); }, null); }
function View_AckSections_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, null, null, null, null, function (_v, en, $event) { var ad = true; var _co = _v.component; if (("htmlHeightModelChange" === en)) {
        var pd_0 = ((_co.htmlHeightModel = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 4341760, null, 0, i3.HtmlHeightModel, [i4.HtmlSizeService], { htmlHeightModel: [0, "htmlHeightModel"] }, { htmlHeightModelChange: "htmlHeightModelChange" }), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_1)), i0.ɵdid(3, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_AckSections_12)), i0.ɵdid(5, 540672, null, 0, i2.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(6, { outlet: 0 }), (_l()(), i0.ɵand(0, [["defaultTableTag", 2]], null, 0, null, View_AckSections_14)), (_l()(), i0.ɵand(0, [["tableRows", 2]], null, 0, null, View_AckSections_17)), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AckSections_67)), i0.ɵdid(10, 16384, null, 0, i2.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.htmlHeightModel; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.SectionProvider.headerTemplates.length; _ck(_v, 3, 0, currVal_1); var currVal_2 = _ck(_v, 6, 0, i0.ɵnov(_v, 8)); var currVal_3 = (_co.table || i0.ɵnov(_v, 7)); _ck(_v, 5, 0, currVal_2, currVal_3); var currVal_4 = _co.SectionProvider.footerTemplates.length; _ck(_v, 10, 0, currVal_4); }, null); }
exports.View_AckSections_0 = View_AckSections_0;
function View_AckSections_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "ack-sections", [], null, null, null, View_AckSections_0, RenderType_AckSections)), i0.ɵprd(512, null, i5.SectionProvider, i5.SectionProvider, []), i0.ɵdid(2, 49152, null, 5, i6.AckSections, [i5.SectionProvider, i0.ElementRef], null, null), i0.ɵqud(335544320, 1, { table: 0 }), i0.ɵqud(335544320, 2, { headerWrap: 0 }), i0.ɵqud(335544320, 3, { bodyCell: 0 }), i0.ɵqud(335544320, 4, { leftBodyWrap: 0 }), i0.ɵqud(335544320, 5, { rightBodyWrap: 0 })], null, null); }
exports.View_AckSections_Host_0 = View_AckSections_Host_0;
var AckSectionsNgFactory = i0.ɵccf("ack-sections", i6.AckSections, View_AckSections_Host_0, { mode: "mode", zIndex: "zIndex" }, {}, ["*"]);
exports.AckSectionsNgFactory = AckSectionsNgFactory;