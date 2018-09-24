"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"header || SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"header || SectionProvider.headerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"header\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"header\"></ng-template><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><tr *ngIf=\"header || SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"header\"></ng-template></ng-container></td></tr><tr><td *ngIf=\"leftBody || SectionProvider.leftBodyTemplates.length\" [style.width.px]=\"leftBodyWidth\" valign=\"top\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"leftBody\"></ng-template></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;left:0;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (header || SectionProvider.headerTemplates.length ? headerHeight : 0) - (footer || SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"leftBody || SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><td style=\"height:100%\"><ng-content></ng-content></td><td *ngIf=\"rightBody || SectionProvider.rightBodyTemplates.length\" [style.width.px]=\"rightBodyWidth\" valign=\"top\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"rightBody\"></ng-template></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;right:0;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (header || SectionProvider.headerTemplates.length ? headerHeight : 0) - (header || SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"rightBody || SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"footer || SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"footer\"></ng-template></div></td></tr></table><ng-container *ngIf=\"footer || SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"footer || SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"footer\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container><ng-template *ngTemplateOutlet=\"footer\"></ng-template></div></ng-container>";
