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
var VarDirective = (function () {
    function VarDirective() {
        this.changed = new core_1.EventEmitter();
    }
    VarDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.var) {
            Promise.resolve().then(function () { return _this.changed.emit(_this.var); });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], VarDirective.prototype, "var", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], VarDirective.prototype, "changed", void 0);
    VarDirective = __decorate([
        core_1.Directive({
            selector: "[var]",
            exportAs: "var"
        })
    ], VarDirective);
    return VarDirective;
}());
exports.VarDirective = VarDirective;
