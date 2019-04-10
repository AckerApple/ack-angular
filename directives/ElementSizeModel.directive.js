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
let ElementSizeModel = class ElementSizeModel {
    constructor(element) {
        this.element = element;
        this.elementSizeModelChange = new core_1.EventEmitter();
    }
    ngAfterViewInit() {
        this.onResize = () => {
            this.setModel();
        };
        window.addEventListener('resize', this.onResize);
        Promise.resolve().then(() => this.setModel());
        this.observer = new MutationObserver(() => {
            this.setModel();
        });
        const config = {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: true
        };
        this.observer.observe(this.element.nativeElement, config);
        setTimeout(() => this.setModel(), 800);
    }
    ngOnChanges() {
        Promise.resolve().then(() => {
            if (!this.inChange) {
                this.setModel();
            }
        });
    }
    setModel() {
        this.elementSizeModel = this.elementSizeModel || {};
        this.inChange = true;
        this.elementSizeModel.width = this.element.nativeElement.offsetWidth;
        this.elementSizeModel.height = this.element.nativeElement.offsetHeight;
        this.elementSizeModelChange.emit(this.elementSizeModel);
        Promise.resolve().then(() => this.inChange = false);
    }
    ngOnDestroy() {
        this.observer.disconnect();
        window.removeEventListener('resize', this.onResize);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelWatch", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementSizeModel.prototype, "elementSizeModelChange", void 0);
ElementSizeModel = __decorate([
    core_1.Directive({
        selector: '[elementSizeModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementSizeModel);
exports.ElementSizeModel = ElementSizeModel;
let ElementHeightModel = class ElementHeightModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementHeightModelChange = new core_1.EventEmitter();
    }
    setModel() {
        this.elementHeightModel = this.element.nativeElement.offsetHeight;
        this.elementHeightModelChange.emit(this.elementHeightModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementHeightModel.prototype, "elementHeightModelChange", void 0);
ElementHeightModel = __decorate([
    core_1.Directive({
        selector: '[elementHeightModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementHeightModel);
exports.ElementHeightModel = ElementHeightModel;
let ElementWidthModel = class ElementWidthModel extends ElementSizeModel {
    constructor(element) {
        super(element);
        this.element = element;
        this.elementWidthModelChange = new core_1.EventEmitter();
    }
    setModel() {
        this.elementWidthModel = this.element.nativeElement.offsetWidth;
        this.elementWidthModelChange.emit(this.elementWidthModel);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ElementWidthModel.prototype, "elementWidthModelChange", void 0);
ElementWidthModel = __decorate([
    core_1.Directive({
        selector: '[elementWidthModel]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ElementWidthModel);
exports.ElementWidthModel = ElementWidthModel;
