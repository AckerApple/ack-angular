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
let SelectOn = class SelectOn {
    constructor(element) {
        this.element = element;
        this.selectOnDelay = 0;
        this.selectThen = new core_1.EventEmitter();
    }
    ngOnChanges(changes) {
        if (changes.selectOn && changes.selectOn.currentValue) {
            if (this.selectOnDelay === 0) {
                Promise.resolve().then(() => this.update());
            }
            setTimeout(() => this.update(), this.selectOnDelay);
        }
    }
    update() {
        this.element.nativeElement.select();
        this.selectThen.emit();
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOn", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectOnDelay", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SelectOn.prototype, "selectThen", void 0);
SelectOn = __decorate([
    core_1.Directive({
        selector: '[selectOn]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], SelectOn);
exports.SelectOn = SelectOn;
