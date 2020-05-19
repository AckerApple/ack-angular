import { __decorate, __metadata } from "tslib";
import { EventEmitter, Output, Input, ContentChild, Component, TemplateRef } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
let ErrorWell = class ErrorWell {
    constructor() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
    }
    ngOnInit() {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    }
    getErrorMessage(error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    }
};
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "moreDetails", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ErrorWell.prototype, "message", void 0);
__decorate([
    Input(),
    __metadata("design:type", Error)
], ErrorWell.prototype, "error", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], ErrorWell.prototype, "cssClasses", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "closable", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], ErrorWell.prototype, "allowDetails", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], ErrorWell.prototype, "close", void 0);
__decorate([
    ContentChild("titleFooter"),
    __metadata("design:type", TemplateRef)
], ErrorWell.prototype, "titleFooter", void 0);
ErrorWell = __decorate([
    Component({
        selector: 'error-well',
        template: errorWell,
        animations: animations
    })
], ErrorWell);
export { ErrorWell };
