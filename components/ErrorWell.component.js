import { EventEmitter, Output, Input, ContentChild, Component, TemplateRef } from "@angular/core";
import { animations } from "ack-angular-fx";
import { string as errorWell } from "./templates/error-well.pug";
var ErrorWell = /** @class */ (function () {
    function ErrorWell() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new EventEmitter();
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    };
    ErrorWell.prototype.getErrorMessage = function (error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error["statusText"] || this.message;
    };
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
    return ErrorWell;
}());
export { ErrorWell };
//# sourceMappingURL=ErrorWell.component.js.map