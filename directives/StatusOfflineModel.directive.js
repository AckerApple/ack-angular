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
var StatusOfflineModel = (function () {
    function StatusOfflineModel() {
        var _this = this;
        this.statusOfflineModelChange = new core_1.EventEmitter();
        this.onChange = function () {
            _this.statusOfflineModel = !navigator.onLine;
            _this.statusOfflineModelChange.emit(_this.statusOfflineModel);
        };
        window.addEventListener("offline", this.onChange);
        window.addEventListener("online", this.onChange);
        Promise.resolve().then(function () { return _this.onChange(); });
    }
    StatusOfflineModel.prototype.ngOnDestroy = function () {
        window.removeEventListener("offline", this.onChange);
        window.removeEventListener("online", this.onChange);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], StatusOfflineModel.prototype, "statusOfflineModel", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StatusOfflineModel.prototype, "statusOfflineModelChange", void 0);
    StatusOfflineModel = __decorate([
        core_1.Directive({ selector: '[statusOfflineModel]' }),
        __metadata("design:paramtypes", [])
    ], StatusOfflineModel);
    return StatusOfflineModel;
}());
exports.StatusOfflineModel = StatusOfflineModel;
