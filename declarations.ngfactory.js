"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("@angular/core");
var i1 = require("@angular/common");
var i2 = require("./declarations");
var styles_InputHint = [];
var RenderType_InputHint = i0.ɵcrt({ encapsulation: 2, styles: styles_InputHint, data: {} });
exports.RenderType_InputHint = RenderType_InputHint;
function View_InputHint_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "div", [["style", "position:relative;"]], null, null, null, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgStyle, [i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { ngStyle: [0, "ngStyle"] }, null), (_l()(), i0.ɵeld(2, 0, null, null, 1, "div", [["style", "position:absolute;top:0;width:100%"]], null, null, null, null, null)), i0.ɵncd(null, 0)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.hintStyle; _ck(_v, 1, 0, currVal_0); }, null); }
exports.View_InputHint_0 = View_InputHint_0;
function View_InputHint_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "input-hint", [], null, null, null, View_InputHint_0, RenderType_InputHint)), i0.ɵdid(1, 49152, null, 0, i2.InputHint, [], null, null)], null, null); }
exports.View_InputHint_Host_0 = View_InputHint_Host_0;
var InputHintNgFactory = i0.ɵccf("input-hint", i2.InputHint, View_InputHint_Host_0, { hintStyle: "hintStyle" }, {}, ["*"]);
exports.InputHintNgFactory = InputHintNgFactory;
