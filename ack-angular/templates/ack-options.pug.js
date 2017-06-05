"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.string = "<div [ngClass]=\"{'border-grey-6x border-top':stylize}\"></div><div *ngFor=\"let item of array|array\" (click)=\"selectItem(item)\" [ngClass]=\"getItemClass(item)\"><ng-template *ngIf=\"templateRef\" [ngTemplateOutlet]=\"templateRef\" [ngOutletContext]=\"{item:item}\"></ng-template><span *ngIf=\"!templateRef\">{{ item }}</span></div>";
//# sourceMappingURL=ack-options.pug.js.map