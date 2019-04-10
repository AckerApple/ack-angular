"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("../directives/ElementSizeModel.directive");
var i3 = require("./AbsoluteOverflowX.component");
var styles_AbsoluteOverflowX = [];
var RenderType_AbsoluteOverflowX = i0.ɵcrt({ encapsulation: 2, styles: styles_AbsoluteOverflowX, data: {} });
exports.RenderType_AbsoluteOverflowX = RenderType_AbsoluteOverflowX;
function View_AbsoluteOverflowX_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["style", "visibility:hidden;overflow:hidden;width:100%"]], [[4, "height", "px"]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\u00A0"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.elementHeightModel; _ck(_v, 0, 0, currVal_0); }); }
function View_AbsoluteOverflowX_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [], [[2, "no-scroll-bars", null]], [[null, "elementHeightModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("elementHeightModelChange" === en)) {
        var pd_0 = ((_co.elementHeightModel = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngClass: [0, "ngClass"] }, null), i0.ɵdid(2, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), i0.ɵpod(3, { overflow: 0, position: 1, width: 2 }), i0.ɵdid(4, 4866048, null, 0, i2.ElementHeightModel, [i0.ElementRef], { elementHeightModel: [0, "elementHeightModel"] }, { elementHeightModelChange: "elementHeightModelChange" }), i0.ɵncd(null, 0), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_AbsoluteOverflowX_1)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.wrapClass; _ck(_v, 1, 0, currVal_1); var currVal_2 = (_co.active ? _ck(_v, 3, 0, _co.overflow, "absolute", "100%") : i0.ɵEMPTY_MAP); _ck(_v, 2, 0, currVal_2); var currVal_3 = _co.elementHeightModel; _ck(_v, 4, 0, currVal_3); var currVal_4 = (_co.elementHeightModel && _co.active); _ck(_v, 7, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.active && !_co.scrollBars) && (_co.scrollBars != null)); _ck(_v, 0, 0, currVal_0); }); }
exports.View_AbsoluteOverflowX_0 = View_AbsoluteOverflowX_0;
function View_AbsoluteOverflowX_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "absolute-overflow-x", [], null, null, null, View_AbsoluteOverflowX_0, RenderType_AbsoluteOverflowX)), i0.ɵdid(1, 4833280, null, 0, i3.AbsoluteOverflowX, [i0.ElementRef], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
exports.View_AbsoluteOverflowX_Host_0 = View_AbsoluteOverflowX_Host_0;
var AbsoluteOverflowXNgFactory = i0.ɵccf("absolute-overflow-x", i3.AbsoluteOverflowX, View_AbsoluteOverflowX_Host_0, { scrollBars: "scrollBars", wrapClass: "wrapClass", active: "active", overflow: "overflow" }, {}, ["*"]);
exports.AbsoluteOverflowXNgFactory = AbsoluteOverflowXNgFactory;
