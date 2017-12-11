"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<ng-template><ack-modal-layout (close)=\"close.emit($event)\" [isModelMode]=\"isModelMode || showModelChange.observers.length\" [showModel]=\"showModel\" (showModelChange)=\"showModelChange.emit(showModel=$event)\" [backgroundColor]=\"backgroundColor\" [wrapStyle]=\"wrapStyle\" [wrapCellStyle]=\"wrapCellStyle\" [allowClose]=\"allowClose\"><ng-content></ng-content></ack-modal-layout></ng-template><ng-template *ngIf=\"!AckApp.fixedElementStage\" [ngTemplateOutlet]=\"layout\"></ng-template>";
