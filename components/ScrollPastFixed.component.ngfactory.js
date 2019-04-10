"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("./ScrollPastFixed.component");
var styles_ScrollPastFixed = [];
var RenderType_ScrollPastFixed = i0.ɵcrt({ encapsulation: 2, styles: styles_ScrollPastFixed, data: {} });
exports.RenderType_ScrollPastFixed = RenderType_ScrollPastFixed;
function View_ScrollPastFixed_0(_l) { return i0.ɵvid(0, [i0.ɵqud(402653184, 1, { template: 0 }), (_l()(), i0.ɵeld(1, 0, null, null, 1, "div", [["style", "width:100%;top:0;z-index:1"]], [[4, "position", null]], null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵeld(3, 0, null, null, 0, "div", [], [[4, "height", "px"]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.currentPosition; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.fillHeight; _ck(_v, 3, 0, currVal_1); }); }
exports.View_ScrollPastFixed_0 = View_ScrollPastFixed_0;
function View_ScrollPastFixed_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "scroll-past-fixed", [], null, null, null, View_ScrollPastFixed_0, RenderType_ScrollPastFixed)), i0.ɵdid(1, 4243456, null, 0, i1.ScrollPastFixed, [i0.ElementRef], null, null)], null, null); }
exports.View_ScrollPastFixed_Host_0 = View_ScrollPastFixed_Host_0;
var ScrollPastFixedNgFactory = i0.ɵccf("scroll-past-fixed", i1.ScrollPastFixed, View_ScrollPastFixed_Host_0, {}, {}, ["*"]);
exports.ScrollPastFixedNgFactory = ScrollPastFixedNgFactory;
