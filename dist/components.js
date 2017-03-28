"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var reader_header_body_pug_1 = require("./templates/reader-header-body.pug");
var ReaderHeaderBody = (function () {
    function ReaderHeaderBody() {
    }
    return ReaderHeaderBody;
}());
ReaderHeaderBody.decorators = [
    { type: core_1.Component, args: [{
                selector: 'reader-header-body',
                template: reader_header_body_pug_1.string
            },] },
];
/** @nocollapse */
ReaderHeaderBody.ctorParameters = function () { return []; };
exports.ReaderHeaderBody = ReaderHeaderBody;
var ReaderHeader = (function () {
    function ReaderHeader() {
    }
    return ReaderHeader;
}());
ReaderHeader.decorators = [
    { type: core_1.Directive, args: [{
                selector: 'reader-header'
            },] },
];
/** @nocollapse */
ReaderHeader.ctorParameters = function () { return []; };
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
ReaderBody.decorators = [
    { type: core_1.Directive, args: [{
                selector: "reader-body"
                //,parameters:[[ElementRef]]
            },] },
];
/** @nocollapse */
ReaderBody.ctorParameters = function () { return [
    { type: core_1.ElementRef, },
]; };
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
ScreenWidthModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenWidthModel]'
            },] },
];
/** @nocollapse */
ScreenWidthModel.ctorParameters = function () { return []; };
ScreenWidthModel.propDecorators = {
    'screenWidthModel': [{ type: core_1.Input },],
    'screenWidthModelChange': [{ type: core_1.Output },],
};
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
ScreenHeightModel.decorators = [
    { type: core_1.Directive, args: [{
                //inputs:['screen-height-model'],
                selector: '[screenHeightModel]'
            },] },
];
/** @nocollapse */
ScreenHeightModel.ctorParameters = function () { return []; };
ScreenHeightModel.propDecorators = {
    'screenHeightModel': [{ type: core_1.Input },],
    'screenHeightModelChange': [{ type: core_1.Output },],
};
exports.ScreenHeightModel = ScreenHeightModel;
exports.declarations = [
    ScreenHeightModel,
    ScreenWidthModel,
    ReaderHeaderBody,
    ReaderHeader,
    ReaderBody
];
//# sourceMappingURL=components.js.map