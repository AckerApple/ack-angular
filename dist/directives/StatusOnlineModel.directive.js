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
let StatusOnlineModel = class StatusOnlineModel {
    constructor() {
        this.statusOnlineModelChange = new core_1.EventEmitter();
        this.onChange = () => {
            this.statusOnlineModel = navigator.onLine;
            this.statusOnlineModelChange.emit(this.statusOnlineModel);
        };
        window.addEventListener("online", this.onChange);
        window.addEventListener("offline", this.onChange);
        Promise.resolve().then(() => this.onChange());
    }
    ngOnDestroy() {
        window.removeEventListener("online", this.onChange);
        window.removeEventListener("offline", this.onChange);
    }
};
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], StatusOnlineModel.prototype, "statusOnlineModelChange", void 0);
StatusOnlineModel = __decorate([
    core_1.Directive({ selector: '[statusOnlineModel]' }),
    __metadata("design:paramtypes", [])
], StatusOnlineModel);
exports.StatusOnlineModel = StatusOnlineModel;
