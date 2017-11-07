"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div [(elementHeightModel)]=\"elementHeightModel\" [ngClass]=\"wrapClass\" [class.no-scroll-bars]=\"active &amp;&amp; !scrollBars &amp;&amp; scrollBars!=null\" [ngStyle]=\"active ? {overflow:overflow,position:'absolute',width:'100%'} : {}\"><ng-content></ng-content></div><div *ngIf=\"active\" [ngStyle]=\"{'height.px':elementHeightModel}\" style=\"visibility:hidden;overflow:hidden;\">&nbsp;</div>";
