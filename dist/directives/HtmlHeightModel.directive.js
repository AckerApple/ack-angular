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
const core_1 = require("@angular/core");
const HtmlSizeWatcher_1 = require("./HtmlSizeWatcher");
const HtmlWidthModel_directive_1 = require("./HtmlWidthModel.directive");
let HtmlHeightModel = class HtmlHeightModel extends HtmlWidthModel_directive_1.HtmlWidthModel {
    constructor(HtmlSizeService) {
        super(HtmlSizeService);
        this.HtmlSizeService = HtmlSizeService;
        this.htmlHeightModelChange = new core_1.EventEmitter();
    }
    hasChanged() {
        return this.htmlHeightModel !== window.document.documentElement.clientHeight;
    }
    setModel(model) {
        this.htmlHeightModel = model.height;
        this.htmlHeightModelChange.emit(this.htmlHeightModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], HtmlHeightModel.prototype, "htmlHeightModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], HtmlHeightModel.prototype, "htmlHeightModelChange", void 0);
HtmlHeightModel = __decorate([
    core_1.Directive({
        selector: '[htmlHeightModel]'
    }),
    __metadata("design:paramtypes", [HtmlSizeWatcher_1.HtmlSizeService])
], HtmlHeightModel);
exports.HtmlHeightModel = HtmlHeightModel;
