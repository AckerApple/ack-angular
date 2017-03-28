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
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    return ReaderHeaderBody;
}());
ReaderHeaderBody = __decorate([
    core_1.Component({
        selector: 'reader-header-body',
        template: reader_header_body_pug_1.string
    })
], ReaderHeaderBody);
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    return ReaderHeader;
}());
ReaderHeader = __decorate([
    core_1.Directive({
        selector: 'reader-header'
    })
], ReaderHeader);
exports.ReaderHeader = ReaderHeader;
var ReaderBody = (function () {
    function ReaderBody(el) {
        this.el = el;
        el.nativeElement.style.height = '100%';
        el.nativeElement.style.display = 'block';
    }
    return ReaderBody;
}());
ReaderBody.parameters = [[core_1.ElementRef]];
ReaderBody = __decorate([
    core_1.Directive({
        selector: "reader-body"
        //,parameters:[[ElementRef]]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ReaderBody);
exports.ReaderBody = ReaderBody;
var ScreenWidthModel = (function () {
    function ScreenWidthModel() {
        this.screenWidthModelChange = new core_1.EventEmitter();
        this.window = window;
        this.onResize = function () {
            if (this.screenWidthModel !== window.innerWidth) {
                this.screenWidthModel = window.innerWidth;
                this.screenWidthModelChange.emit(this.screenWidthModel);
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
    }
    ScreenWidthModel.prototype.ngAfterViewInit = function () {
        this.screenWidthModel = this.window.innerWidth;
        this.screenWidthModelChange.emit(this.screenWidthModel);
    };
    ScreenWidthModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenWidthModel;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScreenWidthModel.prototype, "screenWidthModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScreenWidthModel.prototype, "screenWidthModelChange", void 0);
ScreenWidthModel = __decorate([
    core_1.Directive({
        //inputs:['screen-height-model'],
        selector: '[screenWidthModel]'
    }),
    __metadata("design:paramtypes", [])
], ScreenWidthModel);
exports.ScreenWidthModel = ScreenWidthModel;
var ScreenHeightModel = (function () {
    function ScreenHeightModel() {
        this.screenHeightModelChange = new core_1.EventEmitter();
        this.window = window;
        this.onResize = function () {
            if (this.screenHeightModel !== window.innerHeight) {
                this.screenHeightModel = window.innerHeight;
                this.screenHeightModelChange.emit(this.screenHeightModel);
            }
        }.bind(this);
        window.addEventListener('resize', this.onResize);
    }
    ScreenHeightModel.prototype.ngAfterViewInit = function () {
        this.screenHeightModel = this.window.innerHeight;
        this.screenHeightModelChange.emit(this.screenHeightModel);
    };
    ScreenHeightModel.prototype.ngOnDestroy = function () {
        window.removeEventListener(this.onResize);
    };
    return ScreenHeightModel;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ScreenHeightModel.prototype, "screenHeightModel", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ScreenHeightModel.prototype, "screenHeightModelChange", void 0);
ScreenHeightModel = __decorate([
    core_1.Directive({
        //inputs:['screen-height-model'],
        selector: '[screenHeightModel]'
    }),
    __metadata("design:paramtypes", [])
], ScreenHeightModel);
exports.ScreenHeightModel = ScreenHeightModel;
exports.declarations = [
    ScreenHeightModel,
    ScreenWidthModel,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody
];
//# sourceMappingURL=components.js.map