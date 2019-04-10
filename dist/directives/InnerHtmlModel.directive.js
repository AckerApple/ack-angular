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
let InnerHtmlModel = class InnerHtmlModel {
    constructor(element) {
        this.element = element;
        this.innerHtmlModelChange = new core_1.EventEmitter();
        this.observer = new MutationObserver(() => this.setModel());
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
    }
    ngOnChanges() {
        Promise.resolve().then(() => this.setModel());
    }
    setModel() {
        this.innerHtmlModel = this.element.nativeElement.innerHTML;
        this.innerHtmlModelChange.emit(this.innerHtmlModel);
    }
    ngOnDestroy() {
        this.observer.disconnect();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InnerHtmlModel.prototype, "innerHtmlModelChange", void 0);
InnerHtmlModel = __decorate([
    core_1.Directive({
        selector: '[innerHtmlModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], InnerHtmlModel);
exports.InnerHtmlModel = InnerHtmlModel;
