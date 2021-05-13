export var string = "<ng-container [(htmlHeightModel)]=\"htmlHeightModel\"></ng-container><ng-container *ngIf=\"SectionProvider.headerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"headerHeight\" [elementSizeModelWatch]=\"SectionProvider.headerTemplates.length\"><ng-template *ngTemplateOutlet=\"headerWrap || headerContent;context:{outlet:headerContent}\"></ng-template></div><ng-template #headerContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;width:100%\" [style.z-index]=\"zIndex\"><ng-template *ngTemplateOutlet=\"headerContent\"></ng-template></div></ng-container><ng-template *ngTemplateOutlet=\"table || defaultTableTag;context:{outlet:tableRows}\"></ng-template><ng-template #defaultTableTag=\"\"><table style=\"height:100%;width:100%;border-collapse: collapse;\" cellPadding=\"0\" cellSpacing=\"0\" border=\"0\"><ng-template *ngTemplateOutlet=\"tableRows\"></ng-template></table></ng-template><ng-template #tableRows=\"\"><tr *ngIf=\"SectionProvider.headerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"headerHeight\" style=\"visibility:hidden\"><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-container *ngFor=\"let item of SectionProvider.headerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-container></td></tr><tr><td *ngIf=\"SectionProvider.leftBodyTemplates.length\" [style.min-width.px]=\"leftBodyWidth\" valign=\"top\" align=\"right\"><ng-template #defaultLeftBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"leftBodyContent\"></ng-template></div></ng-template><ng-template #leftBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.leftBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"leftBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.leftBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"leftBodyWrap || defaultLeftBodyWrap;context:{outlet:leftBodyContent}\"></ng-template></ng-container></td><ng-container *ngTemplateOutlet=\"bodyCell || defaultBodyCell;context:{outlet:body}\"></ng-container><ng-template #defaultBodyCell=\"\"><td style=\"height:100%\" valign=\"top\"><ng-template *ngTemplateOutlet=\"body\"></ng-template></td></ng-template><ng-template #body=\"\"><ng-content></ng-content></ng-template><td *ngIf=\"SectionProvider.rightBodyTemplates.length\" [style.min-width.px]=\"rightBodyWidth\" valign=\"top\" align=\"left\"><ng-template #defaultRightBodyWrap=\"\"><div style=\"overflow:auto;height:100%;\"><ng-template *ngTemplateOutlet=\"rightBodyContent\"></ng-template></div></ng-template><ng-template #rightBodyContent=\"\"><ng-container *ngFor=\"let item of SectionProvider.rightBodyTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></ng-template><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;\" [style.z-index]=\"zIndex - 1\" [style.height.px]=\"htmlHeightModel - (SectionProvider.headerTemplates.length ? headerHeight : 0) - (SectionProvider.footerTemplates.length ? footerHeight : 0)\" [(elementWidthModel)]=\"rightBodyWidth\" [elementSizeModelWatch]=\"SectionProvider.rightBodyTemplates.length\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;top:0;overflow:auto;\" [style.z-index]=\"zIndex - 1\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></div><ng-container *ngIf=\"!mode || mode==='clone'\"><ng-template *ngTemplateOutlet=\"rightBodyWrap || defaultRightBodyWrap;context:{outlet:rightBodyContent}\"></ng-template></ng-container></td></tr><tr *ngIf=\"SectionProvider.footerTemplates.length\"><td colspan=\"3\" [style.height.px]=\"footerHeight\"><div *ngIf=\"!mode || mode==='clone'\" style=\"visibility:hidden\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></td></tr></ng-template><ng-container *ngIf=\"SectionProvider.footerTemplates.length\"><div *ngIf=\"mode==='calculate'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\" [(elementHeightModel)]=\"footerHeight\" [elementSizeModelWatch]=\"SectionProvider.footerTemplates.length\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div><div *ngIf=\"!mode || mode==='clone'\" style=\"position:fixed;bottom:0;width:100%\" [style.z-index]=\"zIndex\"><ng-container *ngFor=\"let item of SectionProvider.footerTemplates\"><ng-template *ngTemplateOutlet=\"item\"></ng-template></ng-container></div></ng-container>";
//# sourceMappingURL=ack-sections.template.js.map