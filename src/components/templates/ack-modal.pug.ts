export const string = "<ng-template #placeholder=\"\"><ack-modal-layout (close)=\"close.emit($event)\" [isModelMode]=\"isModelMode==null ? showModelChange.observers.length : isModelMode\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit(showModel=$event)\" [backgroundColor]=\"backgroundColor\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [allowClose]=\"allowClose\"><ng-template [ngTemplateOutlet]=\"body\"></ng-template><ng-content *ngIf=\"!body\"></ng-content></ack-modal-layout></ng-template><ng-template *ngIf=\"!AckApp.fixedElementStage || inline\" [ngTemplateOutlet]=\"layout\"></ng-template>"