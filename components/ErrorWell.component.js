import { EventEmitter, Output, Input, ContentChild, Component, TemplateRef } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
export class ErrorWell {
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
}
ErrorWell.decorators = [
    { type: Component, args: [{
                selector: 'error-well',
                template: errorWell,
                animations: animations
            },] }
];
ErrorWell.propDecorators = {
    moreDetails: [{ type: Input }],
    message: [{ type: Input }],
    error: [{ type: Input }],
    cssClasses: [{ type: Input }],
    closable: [{ type: Input }],
    allowDetails: [{ type: Input }],
    close: [{ type: Output }],
    titleFooter: [{ type: ContentChild, args: ["titleFooter",] }]
};
