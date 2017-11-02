"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var prefx_1 = require("./prefx");
var error_well_pug_1 = require("./templates/error-well.pug");
var ErrorWell = (function () {
    function ErrorWell() {
    }
    ErrorWell.prototype.ngOnInit = function () {
        this.cssClasses = this.cssClasses || 'bg-danger border border-danger text-danger';
    };
    ErrorWell.prototype.getErrorMessage = function (error) {
        if (!error)
            return this.message;
        if (typeof error == 'string')
            return error;
        return error.message || error.statusText || this.message;
    };
    return ErrorWell;
}());
exports.ErrorWell = ErrorWell;
