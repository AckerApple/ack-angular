"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ack_angular_fx_1 = require("ack-angular-fx");
var error_well_pug_1 = require("./templates/error-well.pug");
var ErrorWell = (function () {
    function ErrorWell() {
        this.message = 'Unexpected Error Occured';
        this.closable = true;
        this.allowDetails = true;
        this.close = new core_1.EventEmitter();
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
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ErrorWell.prototype, "moreDetails", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorWell.prototype, "message", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Error)
    ], ErrorWell.prototype, "error", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ErrorWell.prototype, "cssClasses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ErrorWell.prototype, "closable", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], ErrorWell.prototype, "allowDetails", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ErrorWell.prototype, "close", void 0);
    __decorate([
        core_1.ContentChild("titleFooter"),
        __metadata("design:type", core_1.TemplateRef)
    ], ErrorWell.prototype, "titleFooter", void 0);
    ErrorWell = __decorate([
        core_1.Component({
            selector: 'error-well',
            template: error_well_pug_1.string,
            animations: ack_angular_fx_1.animations
        })
    ], ErrorWell);
    return ErrorWell;
}());
exports.ErrorWell = ErrorWell;
