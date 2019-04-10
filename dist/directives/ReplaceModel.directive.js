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
var ReplaceModel = (function () {
    function ReplaceModel() {
        this.replaceModelChange = new core_1.EventEmitter();
    }
    ReplaceModel.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var isString = changes.replaceModel && this.replaceModel && this.replaceModel.constructor === String;
        if (isString) {
            Promise.resolve().then(function () { return _this.run(); });
        }
    };
    ReplaceModel.prototype.run = function () {
        var rx = new RegExp(this.replaceExpression, 'gi');
        var oldModel = this.replaceModel;
        var newModel = this.replaceModel.replace(rx, '');
        if (oldModel === newModel) {
            return;
        }
        this.replaceModel = newModel;
        this.replaceModelChange.emit(this.replaceModel);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ReplaceModel.prototype, "replaceModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ReplaceModel.prototype, "replaceModelChange", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ReplaceModel.prototype, "replaceExpression", void 0);
    ReplaceModel = __decorate([
        core_1.Directive({
            selector: '[replaceModel]'
        })
    ], ReplaceModel);
    return ReplaceModel;
}());
exports.ReplaceModel = ReplaceModel;
